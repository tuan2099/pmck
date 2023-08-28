import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

interface IProps {
  item: any
  setChooseItem: React.Dispatch<React.SetStateAction<any>>
  setLessonId: React.Dispatch<React.SetStateAction<null>>
  completedLessonList: any[]
  chooseItem: any
}

function LessonItemDoc(props: IProps) {
  const { item, setChooseItem, setLessonId, completedLessonList, chooseItem } = props

  const [isCompleted, setIsCompleted] = useState<boolean>(false)

  const [_, setParams] = useSearchParams()

  useEffect(() => {
    setIsCompleted(completedLessonList.some((lesson: any) => lesson.id === item.id))
  }, [completedLessonList])
  return (
    <>
      <button
        className='flex cursor-pointer items-center justify-between px-[20px] py-[10px] hover:bg-[#f1f1f1]'
        onClick={() => {
          setParams((prev) => {
            return { ...prev, id: item.attributes.title + item.id }
          })
          setChooseItem({ type: 'document', data: item })
          setLessonId(item.id)
        }}
        style={{
          backgroundColor: item?.id === chooseItem?.id ? '#bbf7d0' : ''
        }}
      >
        <div className=''>
          <div>
            <h3 className=' text-left text-base font-normal text-black'>{item.attributes.title}</h3>
          </div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-4 w-4'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z'
            />
          </svg>
        </div>
        <div>
          {isCompleted && (
            <>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-5 w-5 rounded-full bg-[#5db85c] text-white'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </>
          )}
        </div>
      </button>
    </>
  )
}

export default LessonItemDoc
