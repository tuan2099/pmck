import React from 'react'
import { useQuery } from '@tanstack/react-query'
import sliderApi from 'src/apis/slider.api'
import Slider from './Component/Slider'
import courseApi from 'src/apis/course.api'

function Homeuser() {
  // call api slider
  const { data: imageSliderdata } = useQuery({
    queryKey: ['sliderImage'],
    queryFn: () => {
      return sliderApi.getSlider()
    }
  })
  // call api list course

  const { data: coursesData } = useQuery({
    queryKey: ['course'],
    queryFn: () => {
      return courseApi.getCourse()
    }
  })
  console.log(coursesData, '12')
  return (
    <>
      <div className='relative w-full p-[25px]'>
        <Slider imageSliderdata={imageSliderdata} />
        {/* <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 9500,
            disableOnInteraction: false
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className='mySwiper rounded-xl'
        >
          {imageSliderdata &&
            imageSliderdata?.data?.data.map((slider: any) => {
              return (
                <SwiperSlide
                  key={slider.id}
                  className='h-[268px]'
                  style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: `url(http://localhost:1337${slider.attributes.image_slider.data.map(
                      (imageItem: any) => {
                        return `${imageItem.attributes.formats.thumbnail.url}`
                      }
                    )})`
                  }}
                >
                  <div className=''>
                    <h3>{slider.attributes.title}</h3>
                    <p>{slider.attributes.short_description}</p>
                  </div>
                </SwiperSlide>
              )
            })}
          {!imageSliderdata && (
            <>
              <div role='status' className='animate-pulse space-y-8 md:flex md:items-center md:space-x-8 md:space-y-0'>
                <div className='flex h-64 items-center justify-center rounded bg-gray-300 dark:bg-gray-700 sm:w-[110rem]'>
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
            </>
          )}
        </Swiper> */}
      </div>
      <div className='mt-[70px] overflow-hidden pl-[74px] pr-[44px]'>
        <div className=' flex flex-wrap'>
          {coursesData &&
            coursesData?.data?.data?.map((courseItem: any) => {
              return (
                <>
                  <div className='mb-[30px] w-3/12 px-3'>
                    <div
                      className='h-[232px] w-full rounded-2xl'
                      style={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundImage: `url(http://localhost:1337${courseItem.attributes.banner_course.data?.map(
                          (imageItem: any) => {
                            return `${imageItem.attributes.formats.medium?.url}`
                          }
                        )})`
                      }}
                    ></div>
                    <h5>{courseItem.attributes.course_name}</h5>
                    <p>{courseItem.attributes.price}</p>
                  </div>
                </>
              )
            })}
        </div>
      </div>
    </>
  )
}

export default Homeuser
