import React, { useContext, useCallback } from 'react'
import { useMutation } from '@tanstack/react-query'

import courseApi from 'src/apis/course.api'
import { AppContext } from 'src/context/app.context'

const useRegisteCourse = ({ courseInfo }: { courseInfo?: any }) => {
  const { courseRegisted, profile } = useContext(AppContext)
  const [registeItem, setRegisteItem] = React.useState<any>(null)
  const [isRegisted, setIsRegisted] = React.useState<boolean>(false)

  // nhận vào 1 mảng cũ + id khóa học mới trả về 1 mảng gồm cả 2 pt
  function getUserIds(users: any, id: number) {
    const idCourse = users.map((user: any) => user.id)
    const newArr = [...idCourse, id]
    return newArr
  }
  const { mutate } = useMutation({
    mutationFn: () => {
      if (registeItem && courseInfo && !isRegisted) {
        const data = {
          ...registeItem,
          courses: getUserIds(registeItem.attributes.courses.data, courseInfo.id)
        }
        return courseApi.updateCourseRegisted({ id: registeItem.id, data })
      }
      // truong khong nguoi dung chua tung dang ky khoa hoc nao => tao post moi
      return Promise.reject()
    },
    onSuccess: (data) => console.log(data),
    onError: (error) => console.log(error)
  })

  const handleRegisteCourse = useCallback(mutate, [mutate])

  React.useEffect(() => {
    if (courseInfo && courseRegisted) {
      const courseRegistedItem = courseRegisted.find(
        (course: any) => course.attributes.users.data[0].id === profile?.id
      )
      courseRegistedItem && setRegisteItem(courseRegistedItem)
      if (courseRegistedItem && courseInfo.id) {
        setIsRegisted(courseRegistedItem.attributes.courses.data.some((item: any) => item.id === courseInfo.id))
      }
    }
  }, [courseInfo, courseRegisted])

  return { isRegisted, courseRegisted, profile, handleRegisteCourse: handleRegisteCourse }
}

export default useRegisteCourse
