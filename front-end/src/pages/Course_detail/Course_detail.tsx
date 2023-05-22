import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import courseApi from 'src/apis/course.api'
import { getIdFromNameId } from 'src/utils/uitls'

function Course_detail() {
  const { id } = useParams()
  const idCourse = getIdFromNameId(id as string)

  const { data: courseDetaildata } = useQuery({
    queryKey: ['detailCourse', idCourse],
    queryFn: () => courseApi.getDetailCourse(idCourse)
  })
  console.log(courseDetaildata)
  return (
    <>
      <div className='m-auto w-full '>
        <div className='mt-[24px] flex pl-[68px] pr-[44px]'>
          <section className='w-4/6 px-3'>
            <h1 className='mt-4 text-5xl font-bold'>Lập trình C++ cơ bản, nâng cao</h1>
            <p>
              Khóa học lập trình C++ từ cơ bản tới nâng cao dành cho người mới bắt đầu. Mục tiêu của khóa học này nhằm
              giúp các bạn nắm được các khái niệm căn cơ của lập trình, giúp các bạn có nền tảng vững chắc để chinh phục
              con đường trở thành một lập trình viên.
            </p>
          </section>
          <section className='w-2/6 px-3'>2</section>
        </div>
      </div>
    </>
  )
}

export default Course_detail
