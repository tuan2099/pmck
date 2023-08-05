import React from 'react'
import CourseCard from 'src/components/CourseCard'

function GridCourse({ data, listStyle }: any) {
  return (
    <>
      {Boolean(data.length) && listStyle === 'grid' && (
        <div className='grid gap-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
          {data.map((course: any) => (
            <CourseCard courseItem={course} key={course.id} />
          ))}
        </div>
      )}
    </>
  )
}

export default GridCourse
