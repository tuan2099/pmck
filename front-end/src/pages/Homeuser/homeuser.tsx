import React, { useContext, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import sliderApi from 'src/apis/slider.api'
import Slider from './Component/Slider'
import courseApi from 'src/apis/course.api'
import CourseCard from 'src/components/CourseCard'
import { AppContext } from 'src/context/app.context'
import { useNavigate } from 'react-router-dom'

function Homeuser() {
  // call api slider
  const { data: imageSliderdata } = useQuery({
    queryKey: ['sliderImage'],
    queryFn: () => {
      return sliderApi.getSlider()
    }
  })
  // call api course
  const { data: coursesData } = useQuery({
    queryKey: ['courseData'],
    queryFn: () => {
      return courseApi.getCourse()
    }
  })

  return (
    <>
      <div className='relative w-full p-[25px]'>
        <Slider imageSliderdata={imageSliderdata} />
      </div>

      <div className='mt-[70px] overflow-hidden pl-[74px] pr-[44px]'>
        <div className='flex flex-wrap'>
          {coursesData &&
            coursesData?.data?.data?.map((courseItem: any) => {
              return (
                <>
                  <CourseCard key={courseItem.id} courseItem={courseItem} />
                </>
              )
            })}
        </div>
      </div>
    </>
  )
}

export default Homeuser
