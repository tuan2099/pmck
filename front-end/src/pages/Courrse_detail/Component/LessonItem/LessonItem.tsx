import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FaLock } from 'react-icons/fa'

interface IProps {
  item: any
  onSetChooseItem: (item: any) => void
  completedLessonList: any[]
  chooseItem: any
}

const LessonItem = (props: IProps) => {
  const { item, onSetChooseItem, completedLessonList, chooseItem } = props

  const [isCompleted, setIsCompleted] = useState<boolean>(false)

  const [_, setParams] = useSearchParams()

  useEffect(() => {
    setIsCompleted(completedLessonList.some((lesson: any) => lesson.id === item.id))
  }, [completedLessonList])
  return (
    <button
      className='flex  cursor-pointer items-center justify-between px-[20px] py-[10px] hover:bg-[#f1f1f1]'
      onClick={() => onSetChooseItem(item)}
      style={{
        backgroundColor: item?.id === chooseItem?.data?.id ? '#e3fce0' : !isCompleted ? '#f1f1f1' : ''
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
          <path strokeLinecap='round' strokeLinejoin='round' d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z'
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
        {!isCompleted && chooseItem?.data?.id !== item?.id && (
          <div className='text-gray-500'>
            <FaLock />
          </div>
        )}
      </div>
    </button>
  )
}

export default LessonItem
