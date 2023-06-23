import { useMutation, useQuery } from '@tanstack/react-query'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import courseApi from 'src/apis/course.api'
import Youtube from 'react-youtube'
import Nav_course_detail from './Component/Nav_course_detail'
import Control from './Component/Control'
import learningProcessApi from 'src/apis/learningprocess.api'
import { AppContext } from 'src/context/app.context'
import LessonItem from './Component/LessonItem'

function Course_detail() {
  // setting video from Youtube
  const [videoUrl, setVideoUrl] = useState<string>('')
  const [total, setTotal] = useState<number>(0)
  const [newArrLesson, setNewArrLesson] = useState<any[]>([])
  const [lessonId, setLessonId] = useState(null)

  const { profile } = useContext(AppContext)

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
  const { refetch } = useQuery({
    queryKey: ['complete lesson'],
    queryFn: () => learningProcessApi.getCompleteLesson(),
    onSuccess: (data) => {
      const completedArrLesson = getLessonItemsByCourseId(Number(pageID), data?.data.learning_progresses)
      setNewArrLesson(completedArrLesson)
    }
  })

  // format complete course func
  function getLessonItemsByCourseId(courseId: number, data: any) {
    const lessonItems = []

    for (const progress of data) {
      for (const course of progress?.courses) {
        if (course.id === courseId) {
          lessonItems.push(...progress?.lesson_items)
          break
        }
      }
    }
    return lessonItems
  }

  useEffect(() => {
    const courseTotal = courseData.data?.data?.data?.attributes.chapters.data.reduce(
      (currentTotal: number, currentItem: any) => {
        return currentTotal + currentItem.attributes.lesson_items?.data?.length
      },
      0
    )
    setTotal(courseTotal)
  }, [courseData.data?.data])

  const handlePostVideoOnEnd = useMutation(learningProcessApi.createLearningProgesses)

  const handleEndVideo = (id: any) => {
    const check = newArrLesson.some((lesson: any) => lesson.id === id)
    if (check) {
      handlePostVideoOnEnd.mutate(
        {
          data: {
            lesson_items: lessonId,
            courses: pageID,
            users_permissions_users: profile?.id
          }
        },
        {
          onSuccess: () => {
            refetch()
          }
        }
      )
    }
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
                          <LessonItem
                            item={item}
                            setLessonId={setLessonId}
                            setVideoUrl={setVideoUrl}
                            key={item.id}
                            completedLessonList={newArrLesson}
                          />
                        ))}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
          <div className='fixed bottom-[50px] left-0 top-0 mt-[50px] w-[77%] overflow-x-hidden overscroll-contain '>
            <div className='relative w-full select-none bg-black px-[8.5%]'>
              <div className='relative pt-[56.25%]'>
                {videoUrl && (
                  <Youtube
                    className='absolute inset-0 overflow-hidden'
                    opts={{
                      width: '100%',
                      height: '100%'
                    }}
                    videoId={videoUrl}
                    onEnd={handleEndVideo}
                  />
                )}
              </div>
            </div>
            <div className='min-h-[400px] px-[8.5%]'>
              <div>1</div>
              <div>1</div>
              <div>1</div>

              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
            </div>
          </div>
          <Control />
        </section>
      </div>
    </>
  )
}

export default Course_detail
