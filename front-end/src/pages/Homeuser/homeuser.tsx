import React, { useContext, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import sliderApi from 'src/apis/slider.api'
import Slider from './Component/Slider'
import courseApi from 'src/apis/course.api'
import CourseCard from 'src/components/CourseCard'
import { Link } from 'react-router-dom'
import profileApi from 'src/apis/user.api'
import { AppContext } from 'src/context/app.context'

const learningProgresses = [
  {
    id: 1,
    createdAt: '2023-06-16T10:55:58.871Z',
    updatedAt: '2023-06-19T09:14:34.512Z',
    publishedAt: '2023-06-16T10:57:36.376Z',
    completed: true,
    lesson_items: [
      {
        id: 1,
        title: 'Giới thiệu',
        video_url: 'FYKnp98bMpk',
        createdAt: '2023-05-24T04:34:38.239Z',
        updatedAt: '2023-06-19T02:23:09.177Z',
        publishedAt: '2023-05-24T04:34:43.989Z'
      }
    ],
    courses: [
      {
        id: 1,
        course_name: 'Nhập môn kế toán, phân tích và báo cáo tài chính doanh nghiệp',
        course_description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and\n              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into\n              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release\n              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software\n              like Aldus PageMaker including versions of Lorem Ipsum.",
        createdAt: '2023-05-12T04:57:34.082Z',
        updatedAt: '2023-06-14T03:55:21.247Z',
        publishedAt: '2023-05-12T04:57:35.115Z',
        rating: 5,
        author: 'công ty PMC',
        language: 'Vietnamese',
        short_description: 'mô tả ngắn',
        price: 200,
        status_course: true
      }
    ]
  },
  {
    id: 3,
    createdAt: '2023-06-19T09:14:49.443Z',
    updatedAt: '2023-06-19T09:14:50.725Z',
    publishedAt: '2023-06-19T09:14:50.719Z',
    completed: null,
    lesson_items: [
      {
        id: 2,
        title: 'bài 1',
        video_url: 'bE8xuSFwzgw',
        createdAt: '2023-05-24T04:36:57.770Z',
        updatedAt: '2023-06-19T01:39:41.129Z',
        publishedAt: '2023-05-24T04:36:58.374Z'
      }
    ],
    courses: [
      {
        id: 1,
        course_name: 'Nhập môn kế toán, phân tích và báo cáo tài chính doanh nghiệp',
        course_description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and\n              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into\n              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release\n              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software\n              like Aldus PageMaker including versions of Lorem Ipsum.",
        createdAt: '2023-05-12T04:57:34.082Z',
        updatedAt: '2023-06-14T03:55:21.247Z',
        publishedAt: '2023-05-12T04:57:35.115Z',
        rating: 5,
        author: 'công ty PMC',
        language: 'Vietnamese',
        short_description: 'mô tả ngắn',
        price: 200,
        status_course: true
      }
    ]
  },
  {
    id: 4,
    createdAt: '2023-06-20T07:11:51.970Z',
    updatedAt: '2023-06-20T07:11:53.291Z',
    publishedAt: '2023-06-20T07:11:53.286Z',
    completed: null,
    lesson_items: [
      {
        id: 3,
        title: 'bài 2',
        video_url: 'zZMl1Ees4V4',
        createdAt: '2023-05-24T04:37:06.197Z',
        updatedAt: '2023-06-19T01:40:02.137Z',
        publishedAt: '2023-05-24T04:37:08.496Z'
      }
    ],
    courses: [
      {
        id: 2,
        course_name: 'Kế toán quản trị, phân tích chỉ tiêu, lập báo cáo tài chính',
        course_description: 'mô tả khóa học 1',
        createdAt: '2023-05-16T03:09:09.339Z',
        updatedAt: '2023-06-20T07:10:29.907Z',
        publishedAt: '2023-05-16T03:09:10.091Z',
        rating: 5,
        author: 'công ty PMC',
        language: 'Vietnamese',
        short_description: 'mô tả ngắn',
        price: 20000,
        status_course: null
      }
    ]
  }
]

function Homeuser() {
  function getLessonItemsByCourseId(courseId: any) {
    const lessonItems = []

    for (const progress of learningProgresses) {
      for (const course of progress.courses) {
        if (course.id === courseId) {
          lessonItems.push(...progress.lesson_items)
          break
        }
      }
    }

    return lessonItems
  }

  const courseId = 2
  const lessonItems = getLessonItemsByCourseId(courseId)
  console.log(lessonItems)
  // get data from context
  const { setUserInfo } = useContext(AppContext)

  // call api slider
  const { data: imageSliderdata } = useQuery({
    queryKey: ['sliderImage'],
    queryFn: () => {
      return sliderApi.getSlider()
    }
  })

  // call api list_course
  const { data: listCouseData } = useQuery({
    queryKey: ['listCourse'],
    queryFn: () => {
      return courseApi.getListcourse()
    }
  })

  const listNewCourse = listCouseData?.data.data[0].attributes.courses.data || null
  const listFreeCourse = listCouseData?.data.data[1].attributes.courses.data || null

  return (
    <>
      <div className='relative w-full p-[25px]'>
        <Slider imageSliderdata={imageSliderdata} />
      </div>

      <div className='mt-[70px] overflow-hidden pl-[74px] pr-[44px]'>
        <div className='flex items-center justify-between'>
          <h4 className='mb-5  text-2xl font-bold'>
            Khóa học <span className='rounded bg-[#1e7115] p-1 text-xl text-white'>Mới</span>
          </h4>
          <p className='mb-5  text-[#1e7115]'>
            <Link to={'#'} className='flex items-center'>
              Xem tất cả{'   '}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-5 w-6'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
              </svg>
            </Link>
          </p>
        </div>
        <div className='grid grid-cols-4 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {listNewCourse &&
            listNewCourse.map((courseItem: any) => {
              return <CourseCard key={courseItem.id} courseItem={courseItem} />
            })}
          {!listNewCourse && (
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
          {listNewCourse === 0 && <>Các khóa học sẽ được cập nhật trong thười gian tới</>}
        </div>
      </div>

      <div className='mt-[70px] overflow-hidden pl-[74px] pr-[44px]'>
        <div className='flex items-center justify-between'>
          <h4 className='mb-5 text-2xl font-bold'>
            Khóa học <span className='rounded bg-[#1e7115] p-1 text-xl text-white'>Miễn phí</span>
          </h4>
          <p className='mb-5  text-[#1e7115]'>
            <Link to={'#'} className='flex items-center'>
              Xem tất cả{'   '}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-5 w-6'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
              </svg>
            </Link>
          </p>
        </div>
        <div className='grid grid-cols-4 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {listFreeCourse &&
            listFreeCourse.map((courseItem: any) => {
              return <CourseCard key={courseItem.id} courseItem={courseItem} />
            })}
          {!listFreeCourse && (
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
          {listFreeCourse === 0 && <>Các khóa học sẽ được cập nhật trong thười gian tới</>}
        </div>
      </div>

      <div className='mt-[70px] overflow-hidden pl-[74px] pr-[44px]'>
        <div className='flex items-center justify-between'>
          <h4 className='mb-5 text-2xl font-bold'>
            Tin tức <span className='rounded bg-[#1e7115] p-1 text-xl text-white'>Nổi bật</span>
          </h4>
          <p className='mb-5  text-[#1e7115]'>
            <Link to={'#'} className='flex items-center'>
              Xem tất cả{'   '}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-5 w-6'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
              </svg>
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Homeuser
