import React from 'react'

function CourseCard(props: any) {
  console.log(props)
  const { courseItem } = props
  return (
    <>
      <div className='mb-[30px] w-3/12 px-3'>
        <div
          className='w-full rounded-2xl pt-[56.25%]'
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
        <h5 className='overflow-hiden mt-[5px] text-[16px] font-semibold leading-snug text-[#292929]'>
          {courseItem.attributes.course_name}
        </h5>
        <p>{courseItem.attributes.price}</p>
      </div>
    </>
  )
}

export default CourseCard
