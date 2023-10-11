import { useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import sliderApi from 'src/apis/slider.api'
import Slider from './Component/Slider'
import CourseCard from 'src/components/CourseCard'
import { Link } from 'react-router-dom'
import { AppContext } from 'src/context/app.context'
import Cardnew from '../../components/Cardnew'
import newApi from 'src/apis/new.api'
import useQueryConfig, { ConfigParams } from 'src/hooks/useQueryConfig'

function Homeuser() {
  // get data from context
  const { freeCourse, newCourses } = useContext(AppContext)
  const queryConfig = useQueryConfig()

  // call api slider
  const { data: imageSliderdata } = useQuery({
    queryKey: ['sliderImage'],
    queryFn: () => {
      return sliderApi.getSlider()
    }
  })
  
  // call data news with limit 4 item
  const { data: newsData, isLoading } = useQuery({
    queryKey: ['new', useQueryConfig],
    queryFn: () => {
      return newApi.getNews({ ...(queryConfig as ConfigParams), pagination: { limit: 4 } })
    },
    keepPreviousData: true,
    staleTime: 3 * 60 * 1000
  })

  return (
    <>
      <div className='relative w-full p-[25px]'>
        <Slider imageSliderdata={imageSliderdata} />
      </div>

      <div className='mt-[30px] overflow-hidden px-[12px] lg:mt-[70px] lg:pl-[74px] lg:pr-[44px]'>
        <div className='flex items-center justify-between'>
          <h4 className='mb-5  text-2xl font-bold text-color1'>
            Khóa học <span className='rounded bg-[#1e7115] p-1 text-xl text-white'>Mới</span>
          </h4>
          <p className='mb-5  text-[#1e7115]'>
            <Link to={'/courses?category=new_course'} className='flex items-center'>
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
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {newCourses &&
            newCourses.map((courseItem) => {
              return <CourseCard key={courseItem.id} courseItem={courseItem} />
            })}
          {newCourses.length === 0 && (
            <>
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <div
                    role='status'
                    className='mr-3 animate-pulse space-y-8 md:flex md:items-center md:space-x-8 md:space-y-0'
                    key={index}
                  >
                    <div className='flex h-60 w-full items-center justify-center rounded bg-gray-300 dark:bg-gray-700'>
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
            </>
          )}
        </div>
      </div>

      <div className='mt-[30px] overflow-hidden px-[12px] lg:mt-[10px] lg:pl-[74px] lg:pr-[44px]'>
        <div className='flex items-center justify-between'>
          <h4 className='mb-5 text-2xl font-bold text-color1'>
            Khóa học <span className='rounded bg-[#1e7115] p-1 text-xl text-white'>Miễn phí</span>
          </h4>
          <p className='mb-5  text-[#1e7115]'>
            <Link to={'/courses?category=free_course'} className='flex items-center'>
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
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {freeCourse &&
            freeCourse.map((courseItem) => {
              return <CourseCard key={courseItem.id} courseItem={courseItem} />
            })}
          {freeCourse.length === 0 && (
            <>
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <div
                    role='status'
                    className='mr-3 animate-pulse space-y-8 md:flex md:items-center md:space-x-8 md:space-y-0'
                    key={index}
                  >
                    <div className='flex h-60 w-full items-center justify-center rounded bg-gray-300 dark:bg-gray-700'>
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
            </>
          )}
        </div>
      </div>

      <div className='mt-[30px] overflow-hidden px-[12px] lg:mt-[10px] lg:pl-[74px] lg:pr-[44px]'>
        <div className='flex items-center justify-between'>
          <h4 className='mb-5 text-2xl font-bold text-color1'>
            Tin tức <span className='rounded bg-[#1e7115] p-1 text-xl text-white'>Nổi bật</span>
          </h4>
          <p className='mb-5 text-[#1e7115]'>
            <Link to='/new' className='flex items-center'>
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
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          <Cardnew newsData={newsData} />
        </div>
      </div>
    </>
  )
}

export default Homeuser
