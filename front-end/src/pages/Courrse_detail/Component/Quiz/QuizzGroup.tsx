import { Checkbox } from '@mui/material'
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
    <div className='flex flex-col gap-2 rounded-[10px] border border-[#edf3fd] p-6' key={quizz.id}>
      <div className='items-top mt-4 flex gap-2 text-xl'>
        <h4 className='text-[16px] font-semibold text-[#4F4F4F]'>{quizz.attributes.name}: </h4>
        <p className='text-[16px] text-[#5C5C5C]'>{quizz.attributes.questiontext}</p>
      </div>
      {Boolean(quizz.attributes.question_media.data) && (
        <div className='flex gap-5'>
          {quizz.attributes.question_media.data.map((image: any) => (
            <div key={image.id} className='m-auto w-[300px] max-w-[300px]'>
              <img className='object-cover' src={`http://localhost:1337${image.attributes.url}`} alt='hình ảnh' />
            </div>
          ))}
        </div>
      )}

      {quizz.attributes.qtype === QUESTION_TYPE.MULTICHOICE && (
        <div>
          {quizz.attributes.question_answers.data.map((answer: any) => (
            <div key={answer.id}>
              <Checkbox
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
                  alt='hình ảnh'
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
