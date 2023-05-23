import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import courseApi from 'src/apis/course.api'
import { getIdFromNameId } from 'src/utils/uitls'

function Course_detail() {
  const { id } = useParams()
  const idCourse = getIdFromNameId(id as string)

  const { data: courseDetaildata } = useQuery({
    queryKey: ['detailCourse', idCourse],
    queryFn: () => courseApi.getDetailCourse(idCourse)
  })
  return (
    <>
      <div className='m-auto w-full '>
        <div className='mt-[24px] flex pl-[68px] pr-[44px]'>
          <section className='w-4/6  px-3'>
            <h1 className='mb-5 mt-4 text-3xl font-bold'>
              Nhập môn kế toán, phân tích và báo cáo tài chính doanh nghiệp
            </h1>
            <p>
              Khóa học lập trình C++ từ cơ bản tới nâng cao dành cho người mới bắt đầu. Mục tiêu của khóa học này nhằm
              giúp các bạn nắm được các khái niệm căn cơ của lập trình, giúp các bạn có nền tảng vững chắc để chinh phục
              con đường trở thành một lập trình viên.
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
                <div className='mt-[12px]'>
                  <div className='relative  w-full cursor-pointer items-center  rounded-md bg-[#f5f5f5] py-[14px] pl-[40px] pr-[30px] transition  hover:bg-[#f0f0f0]'>
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
                        1. Giới thiệu
                      </h5>
                      <p className='text-[#333333]'>3 bài học</p>
                    </div>
                    <div className='absolute left-[0] w-full px-[20px]'>
                      <div className='flex w-full items-center border-b-2 border-slate-50 py-[10px] pl-[50px]'>
                        <h5 className='flex items-center'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='align-center h-6 w-6 rounded-[50px] text-[#1e7115]'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z'
                            />
                          </svg>
                          bài học 1
                        </h5>
                      </div>
                      <div className='flex w-full items-center border-slate-50 py-[10px] py-[10px] pl-[50px]'>
                        <h5 className='flex items-center'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='align-center h-6 w-6 rounded-[50px] text-[#1e7115]'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z'
                            />
                          </svg>
                          bài học 1
                        </h5>
                      </div>
                    </div>
                  </div>
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
                    backgroundImage: 'url(https://files.fullstack.edu.vn/f8-prod/courses/21/63e1bcbaed1dd.png)'
                  }}
                ></div>
              </div>
              <h5 className='text-3xl uppercase text-[#1e7115] opacity-80'>Miễn phí</h5>
              <button className='mt-4 min-w-[180px] rounded-[50px] bg-[#1e7115] px-[16px] py-[10px] font-semibold uppercase text-white transition hover:opacity-90'>
                Đăng kí học
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Course_detail
