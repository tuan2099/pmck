import React from 'react'
import CourseCard from 'src/components/CourseCard'

function GridCourse({ data, listStyle }: any) {
  return (
    <>
      {Boolean(data.length) && listStyle === 'grid' && (
        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4'>
          {data.map((course: any) => (
            <CourseCard courseItem={course} key={course.id} />
          ))}
        </div>
      )}
    </>
  )
}

export default GridCourse
