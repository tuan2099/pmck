import { useMutation, useQuery } from '@tanstack/react-query'
import { useContext, useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { Avatar } from '@mui/material'
import { FaTasks } from 'react-icons/fa'
import Youtube from 'react-youtube'
import Drawer from '@mui/material/Drawer'

import { AppContext } from 'src/context/app.context'
import { covertTimeStamp } from 'src/helper/coverTimeStamp'
import courseApi from 'src/apis/course.api'
import Nav_course_detail from './Component/Nav_course_detail'
import Control from './Component/Control'
import learningProcessApi from 'src/apis/learningprocess.api'
import LessonItem from './Component/LessonItem/LessonItem'
import LessonItemQuiz from './Component/LessonItem/LessonItemQuiz'
import QuizzDetail from './Component/Quiz/QuizDetail'
import CertificateItem from './Component/CertificateItem/CertificateItem'
import Note from './Component/Note'
import { toast } from 'react-toastify'

function Course_detail() {
  const [chooseItem, setChooseItem] = useState<{ type: 'video' | 'quizz' | 'document' | 'text' | ''; data: any }>({
    type: '',
    data: null
  })
  const [total, setTotal] = useState<number>(0)
  const [newArrLesson, setNewArrLesson] = useState<any[]>([])
  const [lessonId, setLessonId] = useState(null)
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)
  const { profile } = useContext(AppContext)
  const [_, setParams] = useSearchParams()
  const { id } = useParams()
  const [countDown, setCountDown] = useState<number>(0)
  const pageID = id?.split('-')[id?.split('-').length - 1]
  const [currentChapter, setCurrentChapter] = useState()

  // Get data course detail
  const courseData = useQuery({
    queryKey: ['course detail', pageID],
    queryFn: () => courseApi.getDetailCourse(pageID as string),
    enabled: Boolean(pageID),
    onSuccess: (data) => {
      const firstLeson = data.data.data.attributes.chapters.data[0].attributes.lesson_items.data[0]
      setParams((prev) => {
        return { ...prev, id: firstLeson.attributes.title + firstLeson.id }
      })
      setCurrentChapter(data.data.data.attributes.chapters.data[0].id)
      setChooseItem({ type: 'video', data: firstLeson })
      setLessonId(firstLeson.id)
    }
  })

  const { data: completedLesson, refetch } = useQuery({
    queryKey: ['complete lesson'],
    queryFn: () => learningProcessApi.getCompleteLesson(),
    onSuccess: (data) => {
      const completedArrLesson = getLessonItemsByCourseId(Number(pageID), data?.data.learning_progresses)
      setNewArrLesson(completedArrLesson)
    }
  })

  function getLessonItemsByCourseId(courseId: number, data: any) {
    const lessonItems: any[] = []

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

  // total course
  useEffect(() => {
    const courseTotal = courseData.data?.data?.data?.attributes.chapters.data.reduce(
      (currentTotal: number, currentItem: any) => {
        return currentTotal + currentItem.attributes.lesson_items?.data?.length
      },
      0
    )
    setTotal(courseTotal)
  }, [courseData.data?.data])

  useEffect(() => {
    const isCompleted = newArrLesson.some((lesson: any) => lesson.id === chooseItem.data.id)
    if (!isCompleted) {
      if (chooseItem.type === 'video') {
        const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${chooseItem.data.attributes.video_url}&key=AIzaSyB4j74m6L8f90SnuoyuzzYX5fy0aGnf64U`

        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            const duration = data.items[0].contentDetails.duration
            const timeArray = duration.match(/\d+/g)
            const minutes = parseInt(timeArray[0], 10)
            const seconds = parseInt(timeArray[1], 10)
            const count = minutes * 60 + seconds
            setCountDown(count)
          })
          .catch((error) => {
            console.error('Failed to get video duration:', error)
            return null
          })
      } else {
        handleUpdateOrPostLearningProcess()
      }
    }
  }, [chooseItem])

  useEffect(() => {
    if (countDown > 0) {
      const interval = setInterval(() => {
        setCountDown((prevSeconds) => prevSeconds - 1)
      }, 1000)

      return () => clearInterval(interval)
    }
    if (countDown === 0) {
      const isCompleted = newArrLesson.some((lesson: any) => lesson.id === chooseItem.data.id)
      if (!isCompleted) handleUpdateOrPostLearningProcess()
    }
  }, [countDown, chooseItem])

  const handlePostLearningProcess = useMutation({
    mutationFn: () =>
      learningProcessApi.createLearningProgesses({
        data: {
          lesson_items: [chooseItem.data.id],
          courses: pageID,
          users_permissions_users: profile?.id
        }
      }),
    onSuccess: () => {
      refetch()
    }
  })

  const handleUpdateLearningProcess = useMutation({
    mutationFn: () => {
      const lesson_items = newArrLesson.map((item) => item.id)
      return learningProcessApi.updateLearningProcess({
        id: completedLesson?.data.learning_progresses[0]?.id,
        data: {
          lesson_items: [...lesson_items, lessonId],
          courses: pageID,
          users_permissions_users: profile?.id
        }
      })
    },
    onSuccess: () => {
      refetch()
    }
  })

  const handleUpdateOrPostLearningProcess = () => {
    if (newArrLesson.length) {
      handleUpdateLearningProcess.mutate()
    } else {
      handlePostLearningProcess.mutate()
    }
  }

  const toogleDrawer = () => {
    setOpenDrawer(!openDrawer)
  }

  const checkQuizCompleted = useMutation({
    mutationFn: (id: any) => courseApi.checkQuizComplete({ quizID: id, userID: profile?.id as number })
  })

  const handleSetItem = (item: any) => {
    setParams((prev) => {
      return { ...prev, id: item.attributes.title + item.id }
    })
    const type = item.attributes.video_url ? 'video' : item.attributes.text_lesson ? 'text' : 'document'
    setChooseItem({ type: type, data: item })
    setLessonId(item.id)
  }

  const handleCheckPrevLessonComplete = (chapterId: any, lessonId: any) => {
    const currentChapter = courseData.data?.data.data.attributes.chapters.data.find(
      (chapter: any) => chapter.id === chapterId
    )
    const position = currentChapter.attributes.lesson_items.data.findIndex((lesson: any) => lesson.id === lessonId)
    if (position === 0) return true
    return newArrLesson.some(
      (lesson: any) => lesson.id === currentChapter.attributes.lesson_items.data[position - 1].id
    )
  }

  const handleSetChooseItem = async ({ item, chapterID }: any) => {
    if (!handleCheckPrevLessonComplete(chapterID, item.id)) return
    if (chapterID === currentChapter) {
      handleSetItem(item)
    } else {
      const currenChapterQuizzId = courseData.data?.data.data.attributes.chapters.data.find(
        (item: any) => item.id === currentChapter
      ).attributes.quizzes.data[0].id
      if (currenChapterQuizzId) {
        const { data } = await checkQuizCompleted.mutateAsync(currenChapterQuizzId)
        if (data && data.gr >= 7.5) {
          handleSetItem(item)
        } else {
          toast.error('Bạn chưa hoàn thành chapter trước.')
        }
      } else {
        handleSetItem(item)
      }
    }
  }

  console.log(newArrLesson)

  const handleSetQuizz = (chapter: any, quizz: any) => {
    const idSetChapter = new Set(chapter.map((item: any) => item.id))
    const isCompleteChapter = [...idSetChapter].every((item: any) => newArrLesson.some((lesson) => lesson.id === item))
    if (isCompleteChapter) {
      setChooseItem({ type: 'quizz', data: quizz })
      return true
    } else return false
  }

  const handleNextLesson = () => {
    if (chooseItem.type !== 'quizz') {
      courseData.data?.data.data.attributes.chapters.data?.forEach((chapter: any) => {
        const position = chapter.attributes.lesson_items.data.findIndex((item: any) => item.id === chooseItem.data.id)
        if (position !== -1 && position < chapter.attributes.lesson_items.data.length - 1) {
          handleSetChooseItem(chapter.attributes.lesson_items.data[position + 1])
        }
      })
    }
  }

  const handlePrevLesson = () => {
    if (chooseItem.type !== 'quizz') {
      courseData.data?.data.data.attributes.chapters.data?.forEach((chapter: any) => {
        const position = chapter.attributes.lesson_items.data.findIndex((item: any) => item.id === chooseItem.data.id)
        if (position) {
          handleSetChooseItem(chapter.attributes.lesson_items.data[position - 1])
        }
      })
    }
  }

  return (
    <>
      <section className='m-auto w-full'>
        <Nav_course_detail total={total} completeLesson={newArrLesson} />
        <div className='fixed bottom-[50px] right-0 top-0 z-[2] mt-[50px] w-[23%] border-l-2'>
          <div className='flex h-full w-full flex-col bg-white'>
            <header className='flex select-none items-center justify-between px-[16px] py-[12px]'>
              <h1 className='flex items-center font-semibold text-color1'>
                <Avatar sx={{ bgcolor: '#1e7115' }}>
                  <FaTasks />
                </Avatar>
                <span className='ml-3'>Nội dung khóa học</span>
              </h1>
            </header>
            <div className='overflow-y-auto overscroll-contain' data-tut='reactour__changelesson'>
              {courseData.data?.data.data.attributes.chapters.data?.map((chapter: any) => (
                <details key={chapter.id}>
                  <summary>
                    <div className='sticky top-0 z-[2] flex cursor-pointer flex-col flex-wrap justify-between border-b-2 bg-[#f7f8fa] px-[20px] py-[8px] transition hover:bg-[#edeff1]'>
                      <h3 className='w-[90%] text-base font-semibold text-black'>{chapter.attributes.lesson_name}</h3>
                      <span className='mt-[4px] text-xs font-normal text-black'>
                        {chapter.attributes.lesson_description}
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
                    {chapter.attributes.lesson_items &&
                      chapter.attributes.lesson_items.data?.map((lesson: any) => (
                        <LessonItem
                          item={lesson}
                          chooseItem={chooseItem}
                          onSetChooseItem={handleSetChooseItem}
                          key={lesson.id}
                          completedLessonList={newArrLesson}
                          chapterID={chapter.id}
                        />
                      ))}
                    {chapter.attributes.quizzes &&
                      chapter.attributes.quizzes.data?.map((quizz: any) => (
                        <LessonItemQuiz
                          item={quizz}
                          setLessonId={setLessonId}
                          onSetChooseItem={handleSetQuizz}
                          chapter={chapter.attributes.lesson_items.data}
                          completedLessonList={newArrLesson}
                        />
                      ))}
                  </div>
                </details>
              ))}
              {courseData.data?.data.data.attributes.certificate.data && (
                <CertificateItem
                  quizzId={
                    courseData.data?.data.data.attributes.chapters.data[
                      courseData.data?.data.data.attributes.chapters.data.length - 1
                    ].attributes.quizzes.data[0].id
                  }
                  certificateId={courseData.data?.data.data.attributes.certificate.data.id}
                  isCompleteAllLesson={
                    newArrLesson.length >=
                    courseData.data?.data.data.attributes.chapters.data.reduce((totalLesson: any, chapter: any) => {
                      return totalLesson + chapter.attributes.lesson_items.data.length
                    }, 0)
                  }
                />
              )}
            </div>
          </div>
        </div>
        <div className='fixed bottom-[50px] left-0 top-0 mt-[50px] w-[77%] overflow-x-hidden overscroll-contain '>
          {chooseItem.type === 'video' && (
            <>
              {!chooseItem?.data?.attributes.video_url && (
                <>
                  <div className='relative w-full select-none bg-black px-[8.5%]'>
                    <div className='relative pt-[56.25%]'>
                      <div className=' absolute bottom-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          className='h-20 w-20 text-white'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z'
                          />
                        </svg>
                        <div className='ml-4 text-xl text-white'>
                          Bài học đang gặp sự cố, vui lòng liên hệ Admin để giải quyết
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {chooseItem?.data?.attributes.video_url && (
                <div className='relative w-full select-none bg-black px-[8.5%]' data-tut='reactour__workspace'>
                  <div className='relative pt-[56.25%]'>
                    <Youtube
                      className='absolute inset-0 overflow-hidden'
                      opts={{
                        width: '100%',
                        height: '100%'
                      }}
                      videoId={chooseItem?.data?.attributes.video_url.toString() || ''}
                      onEnd={handleUpdateOrPostLearningProcess}
                    />
                  </div>
                </div>
              )}
            </>
          )}

          {chooseItem.type === 'quizz' && (
            <QuizzDetail
              id={chooseItem.data.id}
              certificateId={courseData.data?.data.data.attributes.chapters.data[0].attributes?.certificate?.data?.id}
            />
          )}
          {chooseItem?.data?.attributes.text_lesson && (
            <div className='items-top my-5 flex justify-between px-[8.5%]'>
              {chooseItem?.data?.attributes.text_lesson}
            </div>
          )}
          <div className='items-top flex min-h-[400px] justify-between px-[8.5%]'>
            <div className='w-'>
              <h1 className='mb-[8px] mt-[48px] text-[28px] font-semibold'>{chooseItem?.data?.attributes.title}</h1>
              <p className='text-slate-400 text-[14px]'>
                {Boolean(chooseItem?.data?.attributes.updatedAt) &&
                  `Cập nhập ${covertTimeStamp(chooseItem?.data?.attributes.updatedAt)}`}
              </p>
              <p className=''></p>
            </div>
            {chooseItem?.data?.attributes.video_url && (
              <div className='mt-[48px]'>
                <button
                  onClick={toogleDrawer}
                  className='flex items-center rounded bg-[#ebebeb] px-[16px] py-[6px] transition hover:bg-[#b6b6b6]'
                  data-tut='reactour__note'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='mr-2 h-6 w-6'
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
                      <h2 className='text-2xl font-bold'>Thêm ghi chú</h2>
                    </div>
                    <div className='p-6'>
                      <Note />
                    </div>
                  </div>
                </Drawer>
              </div>
            )}
          </div>
        </div>
        <Control onNextLesson={handleNextLesson} onPrevLesson={handlePrevLesson} />
      </section>
    </>
  )
}

export default Course_detail
