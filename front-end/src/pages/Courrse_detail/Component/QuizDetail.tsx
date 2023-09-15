import { useState, useEffect, useContext } from 'react'
import { toast } from 'react-toastify'
import { Button, Modal } from '@mui/material'
import { useMutation, useQuery } from '@tanstack/react-query'

import courseApi from 'src/apis/course.api'
import QuizzGroup from './Quiz/QuizzGroup'
import { TResults } from 'src/types/course.type'
import { convertMinutes } from 'src/helper/coverTimeStamp'
import { AppContext } from 'src/context/app.context'

const QuizzDetail = ({ id }: { id: any }) => {
  const { profile } = useContext(AppContext)
  const [quizz, setQuizz] = useState<any | null>(null)
  const [results, setResults] = useState<TResults[]>([])
  const [timeLimit, setTimeLimit] = useState<number | null>(null)
  const [open, setOpen] = useState<boolean>(true)

  const onChangeResult = (data: TResults) => {
    const newResults = [...results]
    const existingAnswer = newResults.findIndex((item) => item.id === data.id)

    if (existingAnswer !== -1) {
      newResults[existingAnswer] = data
    } else {
      newResults.push(data)
    }

    setResults(newResults)
  }

  const handleSubmit = useMutation({
    mutationFn: () => {
      const scorePerQuestion = 10 / quizz?.attributes?.questions?.data.length
      const totalScore = results.reduce((total, question) => {
        if (question.fraction) {
          return total + scorePerQuestion
        } else {
          return total
        }
      }, 0)
      const data = {
        users_permissions_user: 3,
        quiz: 1,
        gr: totalScore
      }
      return courseApi.postQuizGrade(data)
    },
    onSuccess: (data) => {
      toast(`Bạn được ${data.data.data.attributes.gr} điểm.`)
      setOpen(true)
    }
  })

  const checkQuizCompleted = useQuery({
    queryKey: ['checkQuizCompleted', id, profile?.id],
    queryFn: () => courseApi.checkQuizComplete({ quizID: id, userID: profile?.id as number }),
    onSuccess: (data) => {
      if (data.data.isCompleted) {
        toast('Bạn đã hoàn thành bài thi')
      }
    }
  })

  const quizData = useQuery({
    queryKey: ['getQuizDetail', id],
    queryFn: () => courseApi.getQuizDetail(id),
    enabled: !checkQuizCompleted.data?.data.isCompleted
  })

  useEffect(() => {
    if (timeLimit === 0) {
      handleSubmit.mutate()
      return
    }

    const interval = setInterval(() => {
      if (typeof timeLimit === 'number') {
        setTimeLimit((prevTimeLimit) => (prevTimeLimit as number) - 1)
      }
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [timeLimit])

  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      handleSubmit.mutate()
    })
    return () => {
      window.removeEventListener('beforeunload', () => {
        handleSubmit.mutate()
      })
    }
  }, [])

  return (
    <>
      <Modal open={open} onClose={() => {}} children={<div>Hello</div>} />
      {!quizz && (
        <div className='flex h-[90vh] w-full'>
          <div className='m-auto'>
            {!checkQuizCompleted.data?.data.isCompleted && quizData.data?.data.data && (
              <Button variant='contained' color='success' onClick={() => setQuizz(quizData.data.data.data)}>
                Bắt đầu làm bài
              </Button>
            )}

            {checkQuizCompleted.data?.data.isCompleted && (
              <Button variant='contained' color='success'>
                Bạn đã hoàn thành bài thi rồi
              </Button>
            )}
          </div>
        </div>
      )}

      {quizz && (
        <div className='w-full px-[10%]'>
          <div className='my-8 flex items-center justify-between border-t-4 p-3'>
            <h1 className='text-xl font-semibold uppercase'>{quizz?.attributes.name}</h1>
            <h2>
              Thời gian làm bài:{' '}
              <span className='rounded-[5px] bg-[#1e7115] p-2 text-xl font-semibold text-white'>
                {convertMinutes(timeLimit)}
              </span>
            </h2>
          </div>
          <div className=' my-5 flex flex-col gap-5'>
            {quizz?.attributes?.questions?.data.map((question: any) => (
              <QuizzGroup quizz={question} key={question.id} onChangeResult={onChangeResult} />
            ))}
          </div>

          <Button variant='contained' color='success' onClick={() => handleSubmit.mutate()}>
            Nộp bài
          </Button>
        </div>
      )}
    </>
  )
}

export default QuizzDetail
