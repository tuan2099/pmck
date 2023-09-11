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
            className='h-6 w-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z'
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
