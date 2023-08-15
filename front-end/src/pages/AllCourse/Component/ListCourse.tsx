import React from 'react'
import { Link } from 'react-router-dom'
import useRegisteCourse from 'src/hooks/useRegisteCourse'
import { generateNameId } from 'src/utils/uitls'

function ListCourse({ data, listStyle }: any) {
  const { isRegisted } = useRegisteCourse({ courseInfo: data })
  return (
    <>
      {Boolean(data.length) && listStyle === 'list' && (
        <div className=''>
          {data.map((course: any) => (
            <Link
              to={
                isRegisted
                  ? `/learning/${generateNameId({
                      name: data.attributes?.course_name ? data.attributes?.course_name : data.course_name,
                      id: data.id
                    })}`
                  : `/course/${generateNameId({
                      name: data.attributes?.course_name ? data.attributes?.course_name : data.course_name,
                      id: data.id
                    })}`
              }
              // to='/'
              className='items-top flex w-full bg-white p-[12px]'
              key={course.id}
            >
              <div className='mr-[24px] w-[240px]'>
                <img
                  src={`http://localhost:1337${
                    course.attributes?.banner_course
                      ? course.attributes?.banner_course.data[0].attributes?.formats.medium?.url
                      : course.banner_course[0].formats.medium.url
                  }`}
                  alt='banner course'
                />
              </div>
              <div>
                <h4 className='mt-3 text-xl font-semibold'>{course.attributes.course_name}</h4>
                <p>{course.attributes.short_description}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  )
}

export default ListCourse
