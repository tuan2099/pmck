import { useState, useEffect } from 'react'
import { TResults } from 'src/types/course.type'
import { QUESTION_TYPE } from 'src/utils/constant'

interface IProps {
  quizz: any
  onChangeResult: (data: TResults) => void
}

const QuizzGroup = (props: IProps) => {
  const { quizz, onChangeResult } = props
  const [answer, setAnswer] = useState<number>(0)
  const [multiChooseAnswer, setMultiChooseAnswer] = useState(0)
  const [totalTrueAnswer, setTotalTrueAnswer] = useState(0)

  useEffect(() => {
    const score =
      quizz.attributes.qtype === QUESTION_TYPE.MULTICHOICE ? (multiChooseAnswer === totalTrueAnswer ? 1 : 0) : answer
    onChangeResult({
      id: quizz.id,
      fraction: score
    })
  }, [answer, multiChooseAnswer])

  useEffect(() => {
    if (quizz.attributes.qtype === QUESTION_TYPE.MULTICHOICE) {
      const totalTrueAnswers = quizz.attributes.question_answers.data.reduce(
        (count: number, item: any) => count + item.attributes.fraction,
        0
      )
      setTotalTrueAnswer(totalTrueAnswers)
    }
  }, [])

  const handleChooseAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (quizz.attributes.qtype === QUESTION_TYPE.MULTICHOICE) {
      const checked = e.target.checked
      if (checked) setMultiChooseAnswer((prev) => prev + +e.target.value)
      else setMultiChooseAnswer((prev) => prev - +e.target.value)
    } else {
      setAnswer(+e.target.value)
    }
  }

  return (
    <div className='flex flex-col gap-2' key={quizz.id}>
      <h3 className='font-semibold'>{`${quizz.attributes.name}: ${quizz.attributes.questiontext}`}</h3>
      {Boolean(quizz.attributes.question_media.data) && (
        <div className='flex gap-5'>
          {quizz.attributes.question_media.data.map((image: any) => (
            <img className='h-32 w-52 object-cover' src={`http://localhost:1337${image.attributes.url}`} />
          ))}
        </div>
      )}

      {quizz.attributes.qtype === QUESTION_TYPE.MULTICHOICE && (
        <div>
          {quizz.attributes.question_answers.data.map((answer: any) => (
            <div key={answer.id}>
              <input
                type='checkbox'
                value={answer.attributes.fraction}
                id={`quizz ${quizz.id} answer ${answer.id}`}
                name={`quizz ${quizz.id} answer ${answer.id}`}
                onChange={handleChooseAnswer}
              />
              <label htmlFor={`quizz ${quizz.id} answer ${answer.id}`}>{answer.attributes.answer}</label>
            </div>
          ))}
        </div>
      )}

      {quizz.attributes.qtype === QUESTION_TYPE.TRUEFALSE && (
        <div>
          {quizz.attributes.question_answers.data.map((answer: any) => (
            <div key={answer.id}>
              <input
                type='radio'
                value={answer.attributes.fraction}
                id={`quizz ${quizz.id} answer ${answer.id}`}
                name={`quizz ${quizz.id}`}
                onChange={handleChooseAnswer}
              />
              <label htmlFor={`quizz ${quizz.id} answer ${answer.id}`}>{answer.attributes.answer}</label>
            </div>
          ))}
        </div>
      )}

      {quizz.attributes.qtype === QUESTION_TYPE.MEDIA && (
        <div className='flex flex-col gap-3'>
          {quizz.attributes.question_answers.data.map((answer: any) => (
            <div className='flex items-center gap-5' key={answer.id}>
              <input
                type='radio'
                value={answer.attributes.fraction}
                id={`quizz ${quizz.id} answer ${answer.id}`}
                name={`quizz ${quizz.id}`}
                onChange={handleChooseAnswer}
              />
              <label htmlFor={`quizz ${quizz.id} answer ${answer.id}`}>
                <img
                  className='h-32 w-52 object-cover'
                  src={`http://localhost:1337${answer.attributes.answers_media.data[0].attributes.url}`}
                />
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default QuizzGroup
