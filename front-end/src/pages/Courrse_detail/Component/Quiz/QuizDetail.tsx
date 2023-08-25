import { useState, useEffect, useContext } from 'react'
import { toast } from 'react-toastify'
import { TResults } from 'src/types/course.type'
import QuizzGroup from './QuizzGroup'
import { convertMinutes } from 'src/helper/coverTimeStamp'
import { Alert, AlertTitle, Avatar, Button, Divider, Stack } from '@mui/material'
import { AppContext } from 'src/context/app.context'
import { useMutation, useQuery } from '@tanstack/react-query'
import courseApi from 'src/apis/course.api'
import { FaFileAlt, FaInfoCircle } from 'react-icons/fa'
const QuizzDetail = ({ id }: { id: any }) => {
  const { profile } = useContext(AppContext)
  const [quizz, setQuizz] = useState<any | null>(null)
  const [results, setResults] = useState<TResults[]>([])
  const [timeLimit, setTimeLimit] = useState<number | null>(null)

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
  // submit quiz
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
      console.log(totalScore)
      const data = {
        users_permissions_user: profile.id,
        quiz: quizz.id,
        gr: totalScore
      }
      return courseApi.postQuizGrade(data)
    },
    onSuccess: (data) => {
      toast(`Bạn được ${data.data.data.attributes.gr} điểm.`)
    }
  })
  // call api check complete quiz
  const checkQuizCompleted = useQuery({
    queryKey: ['checkQuizCompleted', id, profile?.id],
    queryFn: () => courseApi.checkQuizComplete({ quizID: id, userID: profile?.id as number }),
    onSuccess: (data) => {
      if (data.data.isCompleted) {
        toast('Bạn đã hoàn thành bài thi')
      }
    }
  })
  // call api quiz data
  const quizData = useQuery({
    queryKey: ['getQuizDetail', id],
    queryFn: () => courseApi.getQuizDetail(id),
    enabled: !checkQuizCompleted.data?.data.isCompleted
  })
  // check time
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
  // onload submit quiz
  // useEffect(() => {
  //   window.addEventListener('beforeunload', () => {
  //     handleSubmit.mutate()
  //   })
  //   return () => {
  //     window.removeEventListener('beforeunload', () => {
  //       handleSubmit.mutate()
  //     })
  //   }
  // }, [])

  return (
    <>
      {!quizz && (
        <div className=' m-auto mt-6 w-10/12'>
          <section className='mb-10 flex flex-wrap items-center justify-between'>
            <div className='flex items-center '>
              <Avatar sx={{ bgcolor: '#1e7115' }}>
                <FaFileAlt />
              </Avatar>
              <div className='ml-3 font-semibold text-[#685f78]'>Bài kiểm tra</div>
            </div>
            <div className=''>
              <Alert severity='warning' color='warning'>
                Vui lòng báo lại Admin nếu gặp sự cố !
              </Alert>
            </div>
          </section>
          <section className='mb-10 flex flex-wrap items-center'>
            <div className='w-[50%]'>
              <div>
                <h2 className='mb-5 text-3xl font-bold'>Tiêu đề bài kiểm tra</h2>
                <p>
                  It is a long established fact that a reader will be distracted by the readable content of a page when
                  looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                  distribution of letters, as opposed to using Content here,
                </p>
              </div>
              <div className='mt-10 flex items-center justify-between'>
                <h2 className='text-lg'>
                  Thời gian làm bài:{' '}
                  <span className='rounded-[5px] bg-mainGreenColor px-3 py-1 text-lg font-bold text-white'>30:00</span>
                </h2>

                {!checkQuizCompleted.data?.data.isCompleted && quizData.data?.data.data && (
                  <button
                    onClick={() => setQuizz(quizData.data.data.data)}
                    className='mr-[20px] flex items-center rounded-[5px] bg-[#392C7D] px-[20px] py-[10px] text-white transition hover:bg-[#2a205c]'
                  >
                    Bắt đầu làm bài{' '}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='ml-2 h-6 w-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75'
                      />
                    </svg>
                  </button>
                )}

                {checkQuizCompleted.data?.data.isCompleted && (
                  <button className='mr-[20px] flex cursor-not-allowed items-center rounded-[5px] bg-[#898891] px-[20px] py-[10px] text-white transition'>
                    Bạn đã hoàn thành bài thi
                  </button>
                )}
              </div>
            </div>
            <div className='w-[50%]'>
              <img className='m-auto w-1/2' src='http://localhost:1337/uploads/icons8_quiz_100_4764f560a2.png' alt='' />
            </div>
          </section>
          <section>
            <div className='flex items-center'>
              <Avatar sx={{ bgcolor: '#1e7115' }}>
                <FaInfoCircle />
              </Avatar>
              <p className='my-4 ml-3 font-semibold text-[#685f78]'>Lưu ý khi làm bài kiểm tra</p>
            </div>
            <Divider />
            <Stack spacing={2} className='mt-10'>
              <Alert severity='success'>
                <AlertTitle>Info</AlertTitle>
                This is an info alert — <strong>check it out!</strong>
              </Alert>
              <Alert severity='success'>
                <AlertTitle>Info</AlertTitle>
                This is an info alert — <strong>check it out!</strong>
              </Alert>
              <Alert severity='success'>
                <AlertTitle>Info</AlertTitle>
                This is an info alert — <strong>check it out!</strong>
              </Alert>
            </Stack>
          </section>
        </div>
      )}

      {quizz && (
        <div className='w-full px-[10%]'>
          <div className='my-8 flex items-center justify-between border-t-4 p-3'>
            <h1 className='flex items-center text-xl font-semibold uppercase'>
              <Avatar sx={{ bgcolor: '#1e7115' }}>
                <FaFileAlt />
              </Avatar>
              <span className='ml-3'>{quizz?.attributes.name}</span>
            </h1>
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
