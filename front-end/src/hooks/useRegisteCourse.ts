import { useMutation } from '@tanstack/react-query'
import React, { useContext } from 'react'
import courseApi from 'src/apis/course.api'
import { AppContext } from 'src/context/app.context'

const useRegisteCourse = ({ courseInfo }: { courseInfo?: any }) => {
  const { courseRegisted, profile } = useContext(AppContext)
  const [registeItem, setRegisteItem] = React.useState<any>(null)
  const [isRegisted, setIsRegisted] = React.useState<boolean>(false)

  const handleRegisteCourse = useMutation({
    mutationFn: () => {
      const data = {
        id: registeItem.id,
        attributes: {
          ...registeItem.attributes,
          courses: { data: [...registeItem.attributes.courses.data, courseInfo] }
        }
      }
      return courseApi.updateCourseRegisted({ id: registeItem.id, data })
    },
    onSuccess: (data) => console.log(data),
    onError: (error) => console.log(error)
  })

  React.useEffect(() => {
    const courseRegistedItem = courseRegisted.find((course: any) => course.attributes.users.data[0].id === profile?.id)
    courseRegistedItem && setRegisteItem(courseRegistedItem)
    console.log(courseRegistedItem)
    if (courseRegistedItem && courseInfo.id) {
      setIsRegisted(courseRegistedItem.attributes.courses.data.some((item: any) => item.id === courseInfo.id))
    }
  }, [courseRegisted])

  return { isRegisted, courseRegisted, profile, handleRegisteCourse: handleRegisteCourse.mutate }
}

export default useRegisteCourse
