import { useMutation, useQuery } from '@tanstack/react-query'
import { useEffect, useRef, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import courseApi from 'src/apis/course.api'
import Youtube from 'react-youtube'
import Nav_course_detail from './Component/Nav_course_detail'
import Control from './Component/Control'
import learningProcessApi from 'src/apis/learningprocess.api'

function Course_detail() {
  // setting video from Youtube
  const [videoUrl, setVideoUrl] = useState('')
  const [total, setTotal] = useState<number>(0)
  const [completeLesson, setCompleteLesson] = useState([])
  const [newArrLesson, setNewArrLesson] = useState([])
  const [lessonId, setLessonId] = useState(null)
  const youtubeContainerRef = useRef<HTMLDivElement | null>(null)
  const [_, setParams] = useSearchParams()
  // get id from url
  const { id } = useParams()
  // convert id get from url
  const pageID = id?.split('-')[id?.split('-').length - 1]
  // Get data course detail
  const courseData = useQuery({
    queryKey: ['course detail', pageID],
    queryFn: () => courseApi.getDetailCourse(pageID as string),
    enabled: Boolean(pageID)
  })

  // getComplete lesson
  const { data: completedLessonData } = useQuery({
    queryKey: ['complete lesson'],
    queryFn: () => learningProcessApi.getCompleteLesson()
  })

  // format complete course func
  // function getLessonItemsByCourseId(courseId: number) {
  //   const lessonItems = []

  //   for (const progress of completeLesson) {
  //     for (const course of progress.courses) {
  //       if (course.id === courseId) {
  //         lessonItems.push(...progress.lesson_items)
  //         break
  //       }
  //     }
  //   }

  //   return lessonItems
  // }
  // useEffect(() => {
  //   const completedArrLesson = getLessonItemsByCourseId(Number(pageID))
  //   setNewArrLesson(completedArrLesson)
  // }, [completeLesson])
  //
  useEffect(() => {
    if (completedLessonData) {
      setCompleteLesson(completedLessonData?.data.learning_progresses)
    }
  }, [completedLessonData])

  useEffect(() => {
    const courseTotal = courseData.data?.data?.data?.attributes.chapters.data.reduce(
      (currentTotal: number, currentItem: any) => {
        return currentTotal + currentItem.attributes.lesson_items?.data?.length
      },
      0
    )
    setTotal(courseTotal)
  }, [courseData.data?.data])
  // check id duplicate
  const isIdMatching = (id: number) => {
    return newArrLesson.some((item: any) => item.id === id)
  }
  // Handle Video
  const handleKeyDown = () => {
    console.log('')
  }
  const handlePostVideoOnEnd = useMutation(learningProcessApi.createLearningProgesses)

  const handleEndVideo = () => {
    handlePostVideoOnEnd.mutate(
      {
        data: {
          lesson_items: lessonId,
          courses: pageID,
          users_permissions_users: 1
        }
      },
      {
        onSuccess: (data) => {
          console.log(data)
        }
      }
    )
  }

  return (
    <>
      <div>
        <section className='m-auto w-full'>
          <Nav_course_detail total={total} completeLesson={newArrLesson} />
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
                      {item.attributes.lesson_items &&
                        item.attributes.lesson_items.data?.map((item: any) => (
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
                              {isIdMatching(item.id) ? (
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
                              ) : (
                                <span className='h-5 w-5 rounded-full  text-white'></span>
                              )}
                            </div>
                          </div>
                        ))}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
          <div className='bottonm-[50px] fixed left-0 top-0 mt-[50px] w-[77%] overflow-x-hidden overscroll-contain bg-black px-[8.5%] '>
            <div className='w-full bg-black' ref={youtubeContainerRef}>
              {videoUrl && (
                <Youtube
                  opts={{
                    width: youtubeContainerRef.current?.offsetWidth ? youtubeContainerRef.current?.offsetWidth : 0,
                    height: youtubeContainerRef.current?.offsetWidth
                      ? (youtubeContainerRef.current?.offsetWidth / 16) * 9
                      : 0
                  }}
                  videoId={videoUrl}
                  onEnd={handleEndVideo}
                  // onStateChange={onPlayerStateChange}
                />
              )}
            </div>
          </div>
          <Control />
        </section>
      </div>
    </>
  )
}

export default Course_detail
