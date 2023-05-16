import React from 'react'

function CourseCard(props: any) {
  console.log(props)
  const { courseItem } = props
  return (
    <>
      <div className='mb-[30px] w-3/12 px-3'>
        <div
          className='h-[232px] w-full rounded-2xl'
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(http://localhost:1337${courseItem.attributes.banner_course.data?.map(
              (imageItem: any) => {
                return `${imageItem.attributes.formats.medium?.url}`
              }
            )})`
          }}
        ></div>
        <h5>{courseItem.attributes.course_name}</h5>
        <p>{courseItem.attributes.price}</p>
      </div>
    </>
  )
}

export default CourseCard
