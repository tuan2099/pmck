import { useQuery } from '@tanstack/react-query'
import { useEffect, useRef, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import courseApi from 'src/apis/course.api'
import Youtube from 'react-youtube'

function Course_detail() {
  const [videoUrl, setVideoUrl] = useState('')

  const youtubeContainerRef = useRef<HTMLDivElement | null>(null)
  const { id } = useParams()
  const pageID = id?.split('-')[id?.split('-').length - 1]

  const courseData = useQuery({
    queryKey: ['course detail', pageID],
    queryFn: () => courseApi.getDetailCourse(pageID as string),
    enabled: Boolean(pageID)
  })

  const [total, setTotal] = useState<number>(0)
  const [_, setParams] = useSearchParams()

  // console.log({
  //   width: youtubeContainerRef.current?.offsetWidth,
  //   height: youtubeContainerRef.current?.offsetWidth ? (youtubeContainerRef.current?.offsetWidth * 16) / 9 : 0
  // })

  useEffect(() => {
    const courseTotal = courseData.data?.data.data.attributes.chapters.data.reduce(
      (currentTotal: number, currentItem: any) => {
        return currentTotal + currentItem.attributes.lesson_items.data.length
      },
      0
    )
    setTotal(courseTotal)
  }, [courseData.data?.data])

  const handlePause = () => {
    console.log(123)
  }
  const handleKeyDown = () => {
    console.log('')
  }
  return (
    <>
      <div>
        <section className='m-auto w-full'>
          <div className='relative z-[1] flex h-[50px] items-center bg-[#29303b]'>
            <div>1</div>
            <div className='ml-[auto] flex items-center justify-between'>
              <div className='mr-[16px] flex items-center text-sm text-white'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='mr-2 h-5 w-5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z'
                  />
                </svg>
                <div>Hướng dẫn</div>
              </div>
              <div className='mr-[16px] flex items-center text-sm text-white'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='mr-2 h-5 w-5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z'
                  />
                </svg>

                <div>Ghi chú</div>
              </div>
              <div className='mr-[16px] flex items-center text-sm text-white'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='mr-2 h-5 w-5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z'
                  />
                </svg>
                <div>1/{total} bài học</div>
              </div>
            </div>
          </div>
          <div className='fixed bottom-[50px] right-0 top-0 z-[2] mt-[50px] w-[23%] border-l-2'>
            <div className='flex h-full w-full flex-col bg-white'>
              <header className='flex select-none items-center justify-between px-[16px] py-[12px]'>
                <h1>Nội dung khóa học</h1>
              </header>
              <div className='overflow-y-auto overscroll-contain'>
                {courseData.data?.data.data.attributes.chapters.data?.map((item: any) => (
                  <details key={item.id}>
                    <summary>
                      <div className='sticky top-0 z-[2] flex cursor-pointer flex-col flex-wrap justify-between border-b-2 bg-[#f7f8fa] px-[20px] py-[8px] transition hover:bg-[#edeff1]'>
                        <h3 className='text-base font-semibold text-black'>{item.attributes.lesson_name}</h3>
                        <span className='mt-[4px] text-xs font-normal text-black'>
                          {item.attributes.lesson_description}
                        </span>
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
                    <div className='flex flex-col'>
                      {item.attributes.lesson_items.data?.map((item: any, id: number) => (
                        <>
                          <div
                            key={item.id}
                            role={'button'}
                            tabIndex={0}
                            onKeyDown={handleKeyDown}
                            className='flex cursor-pointer items-center justify-between px-[20px] py-[10px]'
                            onClick={() => {
                              setParams((prev) => {
                                return { ...prev, id: item.attributes.title + item.id }
                              })
                              setVideoUrl(item.attributes.video_url)
                            }}
                          >
                            <div className=''>
                              <div
                              // className={`  hover:cursor-pointer ${
                              //   id % 2 === 0 ? 'bg-blue-50 hover:bg-blue-100' : 'bg-slate-50 hover:bg-slate-100'
                              // }`}
                              >
                                <h3 className='text-left text-base font-normal text-black'>{item.attributes.title}</h3>
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
                                  d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                                />
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  d='M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z'
                                />
                              </svg>
                            </div>
                            <div>
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
                            </div>
                          </div>
                        </>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
          <div className='bottonm-[50px] fixed left-0 top-0 mt-[50px] w-[77%] overflow-x-hidden overscroll-contain bg-black px-[8.5%] '>
            <div className='w-full bg-black  ' ref={youtubeContainerRef}>
              {videoUrl && (
                <Youtube
                  opts={{
                    width: youtubeContainerRef.current?.offsetWidth ? youtubeContainerRef.current?.offsetWidth : 0,
                    height: youtubeContainerRef.current?.offsetWidth
                      ? (youtubeContainerRef.current?.offsetWidth / 16) * 9
                      : 0
                  }}
                  videoId={videoUrl}
                  onPause={handlePause}
                />
              )}
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
