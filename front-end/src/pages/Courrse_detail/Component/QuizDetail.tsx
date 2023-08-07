import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { TResults } from 'src/types/course.type'
import QuizzGroup from './QuizzGroup'
import { convertMinutes } from 'src/helper/coverTimeStamp'

const QuizzDetail = ({ id }: { id: any }) => {
  const navigate = useNavigate()

  const [quizz, setQuizz] = useState<any | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
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

  const handleSubmit = async () => {
    const scorePerQuestion = 10 / quizz?.attributes?.questions?.data.length
    const totalScore = results.reduce((total, question) => {
      if (question.fraction) {
        return total + scorePerQuestion
      } else {
        return total
      }
    }, 0)
    const data = {
      user: 3,
      quiz: 1,
      grade: totalScore
    }

    await axios.post(`http://localhost:1337/api/quiz-grades`, { data })
    // navigate('/')
    toast(`Bạn đã đạt được ${totalScore}`)
  }

  const getQuizzDetail = async () => {
    try {
      const response = await axios.get(
        `http://localhost:1337/api/quizzes/${id}?populate[0]=questions.question_media&populate=questions.question_answers.answers_media`
      )
      setQuizz(response.data.data)
      setTimeLimit(response.data.data.attributes.timelimit)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getQuizzDetail()
  }, [])

  useEffect(() => {
    if (timeLimit === 0) {
      handleSubmit()
      return
    }

    const interval = setInterval(() => {
      if (typeof timeLimit === 'number') {
        setTimeLimit((prevTimeLimit) => (prevTimeLimit as number) - 1)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [timeLimit])

  return (
    <div className='px-4'>
      <h1>{quizz?.attributes.name}</h1>
      <h2>{`Thời gian làm bài: ${convertMinutes(timeLimit)}`}</h2>
      <div className='flex flex-col gap-5'>
        {quizz?.attributes?.questions?.data.map((question: any) => (
          <QuizzGroup quizz={question} key={question.id} onChangeResult={onChangeResult} />
        ))}
      </div>
      <button className='mt-5 rounded bg-slate-200 px-4 py-2 shadow-xl' onClick={handleSubmit}>
        Nộp bài
      </button>
    </div>
  )
}

export default QuizzDetail
