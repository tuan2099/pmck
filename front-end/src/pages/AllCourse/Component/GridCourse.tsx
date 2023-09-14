import React from 'react'
import CourseCard from 'src/components/CourseCard'

function GridCourse({ data, listStyle }: any) {
  return (
    <>
      {Boolean(data.length) && listStyle === 'grid' && (
        <div className='grid grid-cols-1 gap-4 px-2 md:grid-cols-2 md:px-0 lg:grid-cols-3 xl:grid-cols-4'>
          {data.map((course: any) => (
            <CourseCard courseItem={course} key={course.id} />
          ))}
        </div>
      )}
    </>
  )
}

export default GridCourse
