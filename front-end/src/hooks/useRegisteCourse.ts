import { useMutation } from '@tanstack/react-query'
import React, { useContext } from 'react'
import courseApi from 'src/apis/course.api'
import { AppContext } from 'src/context/app.context'

const useRegisteCourse = ({ courseInfo }: { courseInfo?: any }) => {
  const { courseRegisted, profile } = useContext(AppContext)
  const [registeItem, setRegisteItem] = React.useState<any>(null)
  const [isRegisted, setIsRegisted] = React.useState<boolean>(false)

  // nhận vào 1 mảng cũ + id khóa học mới trả về 1 mảng gồm cả 2
  function getUserIds(users: any, id: number) {
    const idCourse = users.map((user: any) => user.id)
    const newArr = [...idCourse, id]
    return newArr
  }

  const handleRegisteCourse = useMutation({
    mutationFn: () => {
      const data = {
        id: registeItem.id,
        // attributes: {
        //   ...registeItem.attributes,
        //   courses: [1, 2, 3, 4]
        // }
        courses: getUserIds(registeItem.attributes.courses.data, courseInfo.id)
      }
      return courseApi.updateCourseRegisted({ id: registeItem.id, data })
    },
    onSuccess: (data) => console.log(data),
    onError: (error) => console.log(error)
  })

  React.useEffect(() => {
    const courseRegistedItem = courseRegisted.find((course: any) => course.attributes.users.data[0].id === profile?.id)
    courseRegistedItem && setRegisteItem(courseRegistedItem)
    if (courseInfo && courseInfo.id && courseRegistedItem) {
      setIsRegisted(courseRegistedItem.attributes.courses.data.some((item: any) => item.id === courseInfo.id))
    }
  }, [courseInfo, courseRegisted, profile?.id])

  return { isRegisted, courseRegisted, profile, handleRegisteCourse: handleRegisteCourse.mutate }
}

export default useRegisteCourse
