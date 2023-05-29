import { useMutation, useQuery } from '@tanstack/react-query'
import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import courseApi from 'src/apis/course.api'
import profileApi from 'src/apis/user.api'
import { AppContext } from 'src/context/app.context'
import { getIdFromNameId } from 'src/utils/uitls'

function Course_detail() {
  const { id } = useParams()
  const idCourse = getIdFromNameId(id as string)

  // check isRegisterToNavigate
  // useEffect(() => {
  //   if(+idCourse === )
  // }, [])

  // state from context
  const { profile } = useContext(AppContext)

  // call api user
  const { data: profileData } = useQuery({
    queryKey: ['userInfo'],
    queryFn: () => profileApi.getProfile()
  })
  // check user đã đăng kí khóa học chưa ? return true or false
  const checkUserIdExists = (id: number) => {
    return profileData?.data.course_registrations.some((user: any) => user.id === id)
  }
  const isUserExists = checkUserIdExists(Number(idCourse))

  // call api detai course
  const { data: courseDetaildata } = useQuery({
    queryKey: ['detailCourse', idCourse],
    queryFn: () => courseApi.getDetailCourse(idCourse)
  })

  // register course func
  const courseRegisterMutation = useMutation(courseApi.registerCourse)

  const courseRegistration = () => {
    courseRegisterMutation.mutate(
      { users: profile?.id, courses: Number(idCourse) },
      {
        onSuccess: (data) => {
          console.log('đăng kí khóa học thành công')
        }
      }
    )
  }

  return (
    <>
      <div className='m-auto w-full '>
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
            <p>
              {courseDetaildata?.data.data.attributes.course_description ? (
                courseDetaildata?.data.data.attributes.course_description
              ) : (
                <div role='status' className='max-w-sm animate-pulse'>
                  <div className='mb-4 h-2.5 w-[900px] rounded-full bg-gray-200 dark:bg-gray-700'></div>
                  <div className='mb-2.5 h-2 w-[900px] rounded-full bg-gray-200 dark:bg-gray-700'></div>
                  <div className='mb-2.5 h-2 w-[900px] rounded-full bg-gray-200 dark:bg-gray-700'></div>
                  <div className='mb-2.5 h-2 w-[900px] rounded-full bg-gray-200 dark:bg-gray-700'></div>
                  <div className='mb-2.5 h-2 w-[900px] rounded-full bg-gray-200 dark:bg-gray-700'></div>
                  <div className='h-2 w-[900px] rounded-full bg-gray-200 dark:bg-gray-700'></div>
                </div>
              )}
            </p>
            <div className='mt-[35px]'>
              <div className='sticky top-[66px] z-[2] bg-white pb-[4px] '>
                <h2 className='my-[16px] text-xl font-bold'>Nội dung khóa học</h2>
                <div className='flex cursor-pointer justify-between'>
                  <div className='flex items-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='h-6 w-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z'
                      />
                    </svg>

                    <p className='mr-[20px]'>
                      <span className=' font-bold'>11 </span>chương
                    </p>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='h-6 w-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75'
                      />
                    </svg>

                    <p className='mr-[20px]'>
                      <span className='font-bold'>123 </span>bài học
                    </p>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='h-6 w-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>

                    <p>
                      <span>Thời lượng </span>10 giờ 30 phút
                    </p>
                  </div>
                  <div className='  text-[#1e7115]'>Mở rộng tất cả</div>
                </div>
                <div className='mt-[24px]'>
                  {courseDetaildata?.data.data.attributes.chapters.data.map((chapter: any) => (
                    <details className='mb-[8px]' key={chapter.id}>
                      <summary className='relative  w-full cursor-pointer items-center  rounded-md bg-[#f5f5f5] py-[14px] pl-[40px] pr-[30px] transition  hover:bg-[#f0f0f0]'>
                        <div className='flex justify-between'>
                          <h5 className='flex items-center font-bold'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth={1.5}
                              stroke='currentColor'
                              className='mr-3 h-5 w-5 text-[#1e7115]'
                            >
                              <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
                            </svg>
                            {chapter.attributes.lesson_name}
                          </h5>
                          <p className='text-[#333333]'>{chapter.attributes.lesson_items.data?.length} bài học</p>
                        </div>
                      </summary>
                      <div>
                        {chapter.attributes.lesson_items.data.map((lesson_item: any) => (
                          <div
                            className='flex w-full items-center border-b-2 border-slate-50 py-[10px] pl-[50px]'
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
                        ))}
                      </div>
                    </details>
                  ))}

                  {!courseDetaildata?.data.data.attributes.chapters.data && (
                    <>
                      <div role='status' className='max-w-sm animate-pulse'>
                        <div className='mb-4 h-7 w-[900px] rounded-sm bg-gray-200 dark:bg-gray-700'></div>
                        <div className='mb-4 h-7 w-[900px] rounded-sm bg-gray-200 dark:bg-gray-700'></div>
                        <div className='mb-4 h-7 w-[900px] rounded-sm bg-gray-200 dark:bg-gray-700'></div>
                        <div className='mb-4 h-7 w-[900px] rounded-sm bg-gray-200 dark:bg-gray-700'></div>
                        <div className='mb-4 h-7 w-[900px] rounded-sm bg-gray-200 dark:bg-gray-700'></div>
                        <div className='mb-4 h-7 w-[900px] rounded-sm bg-gray-200 dark:bg-gray-700'></div>
                      </div>
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
              {courseDetaildata?.data.data.attributes.status_course ? (
                <button
                  onClick={courseRegistration}
                  className='mt-4 min-w-[180px] rounded-[50px] bg-[#1e7115] px-[16px] py-[10px] font-semibold uppercase text-white transition hover:opacity-90'
                >
                  Đăng kí học
                </button>
              ) : (
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

export default Course_detail
