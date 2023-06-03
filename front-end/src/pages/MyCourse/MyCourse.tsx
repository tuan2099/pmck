import React from 'react'
import { useQuery } from '@tanstack/react-query'
import profileApi from 'src/apis/user.api'
import CourseCard from 'src/components/CourseCard'

function MyCourse() {
  // call api userinfo
  const { data: profileData } = useQuery({
    queryKey: ['userInfo'],
    queryFn: () => profileApi.getProfile()
  })
  // console.log(profileData?.data)
  return (
    <>
      <div className='grid grid-cols-4 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {profileData?.data.course_registrations[0].courses.map((myCourseItem: any) => {
          return (
            <>
              <CourseCard key={myCourseItem.id} courseItem={myCourseItem} />
            </>
          )
        })}
      </div>
    </>
  )
}

export default MyCourse
