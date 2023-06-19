import React from 'react'

function Control() {
  return (
    <>
      <div className='fixed bottom-0 left-0 right-0 z-[2] flex h-[50px] items-center justify-center bg-[#f0f0f0]'>
        <button className='flex items-center uppercase'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
          </svg>
          bài trước
        </button>
        <button className='ml-3 flex items-center rounded border-2 border-[#1e7115] px-[10px] py-[5px] uppercase text-[#1e7115]'>
          bài tiếp theo{' '}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
          </svg>
        </button>
      </div>
    </>
  )
}

export default Control
