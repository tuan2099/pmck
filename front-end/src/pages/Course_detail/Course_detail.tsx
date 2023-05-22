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
            <h1 className='mb-5 mt-4 text-5xl font-bold'>Lập trình C++ cơ bản, nâng cao</h1>
            <p>
              Khóa học lập trình C++ từ cơ bản tới nâng cao dành cho người mới bắt đầu. Mục tiêu của khóa học này nhằm
              giúp các bạn nắm được các khái niệm căn cơ của lập trình, giúp các bạn có nền tảng vững chắc để chinh phục
              con đường trở thành một lập trình viên.
            </p>
          </section>
          <section className='w-2/6 px-3'>
            <div className='sticky  ml-6 flex flex-col items-center pb-5'>
              <div className='relative mb-5 mt-0.5 w-[calc(100%-2px)] select-none overflow-hidden rounded-2xl'>
                <div
                  className='w-full bg-cover bg-center bg-no-repeat pt-[56.25%]'
                  style={{
                    backgroundImage: 'url(https://files.fullstack.edu.vn/f8-prod/courses/21/63e1bcbaed1dd.png)'
                  }}
                ></div>
              </div>
              <h5 className='text-3xl uppercase text-[#1e7115] opacity-80'>Miễn phí</h5>
              <button className='mt-4 min-w-[180px] rounded-[50px] bg-[#1e7115] px-[16px] py-[10px] font-semibold uppercase text-white transition hover:opacity-90'>
                Đăng kí học
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Course_detail
