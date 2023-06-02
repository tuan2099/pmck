import React from 'react'
import { useQuery } from '@tanstack/react-query'
import profileApi from 'src/apis/user.api'

function MyCourse() {
  // call api userinfo
  const { data: profileData } = useQuery({
    queryKey: ['userInfo'],
    queryFn: () => profileApi.getProfile()
  })
  console.log(profileData?.data.course_registrations)
  return (
    <>
      <div>
        {profileData?.data.course_registrations.map((item: any) => {
          return (
            <>
              <div></div>
            </>
          )
        })}
      </div>
    </>
  )
}

export default MyCourse
