import React from 'react'
import { useQuery } from '@tanstack/react-query'
import profileApi from 'src/apis/user.api'
import CourseCard from 'src/components/CourseCard'
import Button from 'src/components/Button'
import { Link } from 'react-router-dom'

function MyCourse() {
  // call api userinfo
  const { data: profileData } = useQuery({
    queryKey: ['userInfo'],
    queryFn: () => profileApi.getProfile()
  })
  return (
    <div className='mt-[50px]'>
      <h1 className='pl-3 text-xl font-bold uppercase'>Khóa học của tôi</h1>
      <div className='mt-[50px] grid grid-cols-4 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {profileData &&
          profileData?.data.course_registrations[0].courses.map((myCourseItem: any) => {
            return (
              <>
                <CourseCard key={myCourseItem.id} courseItem={myCourseItem} />
              </>
            )
          })}
        <Link
          to='/courses'
          className='relative mb-[30px] w-full cursor-pointer rounded-2xl border-4 border-dashed px-3 transition hover:border-[#1e7115] hover:text-[#1e7115]'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='absolute left-[50%] top-[50%] h-[150px] w-[150px] translate-x-[-50%] translate-y-[-50%] text-slate-300   '
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z' />
          </svg>

          <div className='absolute bottom-[10%] left-[50%] translate-x-[-50%] font-semibold'>Thêm khóa học</div>
        </Link>
      </div>
      {!profileData && (
        <div className='flex items-center justify-between'>
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <div
                role='status'
                className='mr-3 animate-pulse space-y-8 md:flex md:items-center md:space-x-8 md:space-y-0'
                key={index}
              >
                <div className='flex h-48 w-[300px] items-center justify-center rounded bg-gray-300 dark:bg-gray-700'>
                  <svg
                    className='h-12 w-12 text-gray-200'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                    fill='currentColor'
                    viewBox='0 0 640 512'
                  >
                    <path d='M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z' />
                  </svg>
                </div>
              </div>
            ))}
        </div>
      )}
      {profileData?.data.course_registrations[0].courses.length === 0 && (
        <>
          <div className='mx-auto mt-[100px] max-w-[500px]'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='m-auto h-60 w-60 text-gray-200'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z'
              />
            </svg>
            <h3 className='text-center text-3xl text-gray-200'>Bạn chưa đăng kí khóa học nào ...</h3>
            <div className='mx-auto w-[50%]'>
              <Button className='mx-auto my-6 inline-block w-[100%] rounded bg-gradient-to-r from-green-600 to-green-700 px-6 py-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#0b1526] outline-none transition duration-150 ease-in-out hover:bg-[#103a0b] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-[#103a0b] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-[#217a17] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'>
                <Link to='/courses'>Đăng kí ngay</Link>
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default MyCourse
