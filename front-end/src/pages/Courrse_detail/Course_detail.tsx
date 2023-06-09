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
import Drawer from '@mui/material/Drawer'
import { covertTimeStamp } from 'src/helper/coverTimeStamp'
function Course_detail() {
  // setting video from Youtube
  const [chooseItem, setChooseItem] = useState<any>()
  const [total, setTotal] = useState<number>(0)
  const [newArrLesson, setNewArrLesson] = useState<any[]>([])
  const [lessonId, setLessonId] = useState(null)
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)
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
      // eslint-disable-next-line no-unsafe-optional-chaining
      for (const course of progress?.courses) {
        if (course.id === courseId) {
          // eslint-disable-next-line no-unsafe-optional-chaining
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
  const toogleDrawer = () => {
    setOpenDrawer(!openDrawer)
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
                            chooseItem={chooseItem}
                            setLessonId={setLessonId}
                            setChooseItem={setChooseItem}
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
                {chooseItem && (
                  <Youtube
                    className='absolute inset-0 overflow-hidden'
                    opts={{
                      width: '100%',
                      height: '100%'
                    }}
                    videoId={chooseItem?.attributes.video_url.toString() || ''}
                    onEnd={handleEndVideo}
                  />
                )}
              </div>
            </div>
            <div className='items-top flex min-h-[400px] justify-between px-[8.5%]'>
              <div className='w-'>
                <h1 className='mb-[8px] mt-[48px] text-[28px] font-semibold'>{chooseItem?.attributes.title}</h1>
                <p className='text-[14px] text-slate-400'>
                  {Boolean(chooseItem?.attributes.updatedAt) &&
                    `Cập nhập ${covertTimeStamp(chooseItem?.attributes.updatedAt)}`}
                </p>
                <p className=''></p>
              </div>
              <div className='mt-[48px]'>
                <button
                  onClick={toogleDrawer}
                  className='flex items-center rounded bg-[#ebebeb] px-[16px] py-[6px] transition hover:bg-[#b6b6b6]'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='mr-2 h-6 w-6 '
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                  Thêm ghi chú tạm thời
                </button>
                <Drawer open={openDrawer} anchor='right' onClose={toogleDrawer}>
                  <div className='w-[43%] min-w-[720px] max-w-full'>
                    <div className='p-6'>
                      <h2 className='text-2xl font-bold'>Ghi chú của tôi</h2>
                    </div>
                    <div className='p-6'>1</div>
                  </div>
                </Drawer>
              </div>
            </div>
          </div>
          <Control />
        </section>
      </div>
    </>
  )
}

export default Course_detail
