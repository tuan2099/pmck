import { useMutation, useQuery } from '@tanstack/react-query'
import { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import courseApi from 'src/apis/course.api'
import profileApi from 'src/apis/user.api'
import SkeletonTypography from 'src/components/SkeletonTypography'
import { getIdFromNameId } from 'src/utils/uitls'
import LessonItem from './component/LessonItem'
import ChapterItem from './component/ChapterItem'
import Infocourse from './component/Infocourse'
import useRegisteCourse from 'src/hooks/useRegisteCourse'
import { AppContext } from 'src/context/app.context'

function Course_enrol() {
  const { id } = useParams()
  const idCourse = getIdFromNameId(id as string)
  const navigate = useNavigate()
  // state from context
  const { profile } = useContext(AppContext)
  // call api user
  const { data: profileData } = useQuery({
    queryKey: ['userInfo'],
    queryFn: () => profileApi.getProfile()
  })
  // check userIsRegisterCCourse return true or false

  const checkUserIdExists = (id: number) => {
    return (
      profileData?.data.course_registrations &&
      profileData?.data.course_registrations.some((user: any) => user.courses[0].id === id)
    )
  }
  const isUserIdExists = checkUserIdExists(+idCourse)
  useEffect(() => {
    if (isUserIdExists === true) {
      navigate('/learning/:id')
    }
  }, [isUserIdExists, navigate])

  // call api detai course
  const { data: courseDetaildata } = useQuery({
    queryKey: ['detailCourse', idCourse],
    queryFn: () => courseApi.getDetailCourse(idCourse)
  })

  // register course func
  const courseRegisterMutation = useMutation(courseApi.registerCourse)

  // const courseRegistration = () => {
  //   if (checkUserIdInNestedArray(profile?.id, courseRegistationData?.data.data)) {
  //     return
  //   } else {
  //     courseRegisterMutation.mutate(
  //       { users: profile?.id, courses: Number(idCourse), isRegistrationCourse: true },
  //       {
  //         onSuccess: (data) => {
  //           console.log('đăng kí khóa học thành công')
  //         }
  //       }
  //     )
  //   }
  // }
  const { handleRegisteCourse } = useRegisteCourse({
    courseInfo: courseDetaildata?.data.data
  })
  return (
    <>
      <div className='m-auto w-full'>
        <div className='mt-[24px] flex pl-[68px] pr-[44px]'>
          <section className='w-4/6  px-3'>
            <h1 className='mb-5 mt-4 text-3xl font-bold'>
              {courseDetaildata?.data.data.attributes.course_name ? (
                courseDetaildata?.data.data.attributes.course_name
              ) : (
                <div role='status' className='max-w-sm animate-pulse'>
                  <div className='mb-4 h-7 w-[900px] rounded-sm bg-gray-200 dark:bg-gray-700'></div>
                </div>
              )}
            </h1>
            <div>
              {courseDetaildata?.data.data.attributes.course_description ? (
                courseDetaildata?.data.data.attributes.course_description
              ) : (
                <SkeletonTypography dataSkeletonTypography={5} />
              )}
            </div>
            <div className='mt-[35px]'>
              <div className='sticky top-[66px] z-[2] bg-white pb-[4px] '>
                <h2 className='my-[16px] text-xl font-bold'>Nội dung khóa học</h2>
                <Infocourse />
                <div className='mt-[24px]'>
                  {courseDetaildata?.data.data.attributes.chapters.data.map((chapter: any) => (
                    <details className='mb-[8px]' key={chapter.id}>
                      <summary className='relative  w-full cursor-pointer items-center  rounded-md bg-[#f5f5f5] py-[14px] pl-[40px] pr-[30px] transition  hover:bg-[#f0f0f0]'>
                        <ChapterItem chapter={chapter} />
                      </summary>
                      <div>
                        {chapter.attributes.lesson_items.data.map((lesson_item: any) => (
                          <LessonItem lesson_item={lesson_item} key={lesson_item.id} />
                        ))}
                      </div>
                    </details>
                  ))}

                  {!courseDetaildata?.data.data.attributes.chapters.data && (
                    <>
                      <SkeletonTypography dataSkeletonTypography={5} />
                    </>
                  )}

                  {courseDetaildata?.data.data.attributes.chapters.data.length === 0 && (
                    <>
                      <div className='pt-7 text-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          className='m-auto h-60 w-60  text-gray-200'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776'
                          />
                        </svg>
                        <h5 className='text-gray-500'>
                          Chúng tôi sẽ sớm cập nhật khóa học trong thời gian sớm nhất ...
                        </h5>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>
          <section className='w-2/6 px-3'>
            <div className='sticky  ml-6 flex flex-col items-center pb-5'>
              <div className='relative mb-5 mt-0.5 w-[calc(100%-2px)] select-none overflow-hidden rounded-2xl'>
                <div
                  className='w-full bg-cover bg-center bg-no-repeat pt-[56.25%]'
                  style={{
                    backgroundImage: courseDetaildata?.data.data.attributes.banner_course.data[0].attributes.formats
                      .medium
                      ? `url(http://localhost:1337${courseDetaildata?.data.data.attributes.banner_course.data[0].attributes.formats.medium.url})`
                      : 'url()'
                  }}
                ></div>
              </div>
              <h5 className='text-3xl uppercase text-[#1e7115] opacity-80'>Miễn phí</h5>
              {courseDetaildata?.data.data.attributes.status_course && isRegisted && (
                <button
                  disabled
                  className='mt-4 min-w-[180px] rounded-[50px] bg-gray-300 px-[16px] py-[10px] font-semibold uppercase text-white transition hover:opacity-90'
                >
                  Bạn đã đăng ký.
                </button>
              )}
              {courseDetaildata?.data.data.attributes.status_course && !isRegisted && (
                <button
                  onClick={() => handleRegisteCourse()}
                  className='mt-4 min-w-[180px] rounded-[50px] bg-[#1e7115] px-[16px] py-[10px] font-semibold uppercase text-white transition hover:opacity-90'
                >
                  Đăng kí học
                </button>
              )}
              {!courseDetaildata?.data.data.attributes.status_course && (
                <button
                  disabled
                  className='mt-4 min-w-[180px] rounded-[50px] bg-gray-300 px-[16px] py-[10px] font-semibold uppercase text-white transition hover:opacity-90'
                >
                  khóa học chưa sẵn sàng ...
                </button>
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Course_enrol
