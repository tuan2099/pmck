/* eslint-disable no-extra-boolean-cast */ // hide err in line 44
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import CourseCard from 'src/components/CourseCard'
import { AppContext } from 'src/context/app.context'
import { CourseType } from 'src/types/course.type'

const AllCoursePage = () => {
  const [list, setList] = useState<CourseType[]>([])
  const { allCourse } = useContext(AppContext)
  const { category } = useParams()

  useEffect(() => {
    if (category && allCourse.length) {
      if (category === 'all') setList(allCourse)
      else {
        const newList = allCourse.filter((course) => {
          const check = course.attributes.course_categories.data.some((item) => item.attributes.name === category)
          if (check) return course
        })

        setList(newList)
      }
    }
  }, [category, allCourse])

  return (
    <div className='mt-9'>
      <h2 className='p-2 text-center text-2xl font-bold uppercase'>Tất cả khóa học</h2>

      <div className='mt-5 px-4 md:mt-14 md:px-20'>
        <div className='mb-5 flex justify-end px-3'>
          <input type='text' className='rounded-md border px-3 py-2' placeholder='Tìm kiếm ...' />
        </div>
        {Boolean(list.length) && (
          <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {list.map((course) => (
              <CourseCard courseItem={course} key={course.id} />
            ))}
          </div>
        )}

        {!Boolean(list.length) && <h3>Không có khóa học nào.</h3>}
      </div>
    </div>
  )
}

export default AllCoursePage
