import React from 'react'

interface Props {
  lesson_item: any
  key: number
}

function LessonItem({ lesson_item }: Props) {
  return (
    <div
      className='flex w-full items-center justify-between border-b-2 border-slate-50 px-[50px] py-[10px]'
      key={lesson_item.id}
    >
      <h5 className='flex items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='align-center mr-3 h-6 w-6 rounded-[50px] text-[#1e7115]'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z'
          />
        </svg>
        {lesson_item.attributes.title}
      </h5>
    </div>
  )
}

export default LessonItem
