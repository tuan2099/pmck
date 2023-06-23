import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

interface IProps {
  item: any
  setVideoUrl: React.Dispatch<React.SetStateAction<string>>
  setLessonId: React.Dispatch<React.SetStateAction<null>>
  completedLessonList: any[]
}

const LessonItem = (props: IProps) => {
  const { item, setVideoUrl, setLessonId, completedLessonList } = props

  const [isCompleted, setIsCompleted] = useState<boolean>(false)

  const [_, setParams] = useSearchParams()

  useEffect(() => {
    console.log(completedLessonList)
    console.log('item.id', item.id)
    setIsCompleted(completedLessonList.some((lesson: any) => lesson.id === item.id))
  }, [completedLessonList])

  return (
    <button
      className='flex cursor-pointer items-center justify-between px-[20px] py-[10px]'
      onClick={() => {
        setParams((prev) => {
          return { ...prev, id: item.attributes.title + item.id }
        })
        setVideoUrl(item.attributes.video_url)
        setLessonId(item.id)
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
      </div>
    </button>
  )
}

export default LessonItem
