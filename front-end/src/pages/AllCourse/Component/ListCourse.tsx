import React from 'react'

function ListCourse({ data, listStyle }: any) {
  return (
    <>
      {Boolean(data.length) && listStyle === 'list' && (
        <div className=''>
          {data.map((course: any) => (
            <div className='items-top flex w-full bg-white p-[12px]' key={course.id}>
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
                <h4>{course.attributes.course_name}</h4>
                <p>{course.attributes.short_description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default ListCourse
