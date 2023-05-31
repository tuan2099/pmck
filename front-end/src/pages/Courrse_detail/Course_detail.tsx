import React from 'react'
import ReactPlayer from 'react-player'

function Course_detail() {
  const handleDuration = (duration: any) => {
    console.log('Thời gian video:', duration)
  }
  return (
    <>
      <div>
        <section className='m-auto w-full'>
          <div className='relative z-[1] flex h-[50px] items-center bg-[#29303b]'></div>
          <div className='fixed bottom-[50px] right-0 top-0 z-[2] mt-[50px] w-[23%] border-l-2'>
            <div className='flex h-full w-full flex-col bg-white'>
              <header className='flex select-none items-center justify-between px-[16px] py-[12px]'>
                <h1>Nội dung khóa học</h1>
              </header>
              <div className='overflow-y-auto overscroll-contain'>
                <details>
                  <summary>
                    <div className='sticky top-0 z-[2] flex cursor-pointer flex-col flex-wrap justify-between border-b-2 bg-[#f7f8fa] px-[20px] py-[8px] transition hover:bg-[#edeff1]'>
                      <h3 className='text-base font-semibold text-black'>1. khái niệm cần biết</h3>
                      <span className='mt-[4px] text-xs font-normal text-black'>somethign</span>
                      <span className='absolute right-[23px] top-[12px] text-base text-black'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          className='h-5 w-5'
                        >
                          <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
                        </svg>
                      </span>
                    </div>
                  </summary>
                  <div className='flex flex-row px-[20px] py-[10px]'>
                    <div className=''>
                      <h3 className='text-base font-normal text-black'>1. bài 1</h3>
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </div>
          <div className='bottonm-[50px] fixed left-0 top-0 mt-[50px] w-[77%] overflow-x-hidden overscroll-contain '>
            <div className='w-full bg-black px-[8.5%]'>
              <ReactPlayer
                className=''
                width='100%'
                height='650px'
                url='https://www.youtube.com/watch?v=5RvQt2KslpA'
                controls={true}
                onDuration={handleDuration}
              />
            </div>
          </div>
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
        </section>
      </div>
    </>
  )
}

export default Course_detail
