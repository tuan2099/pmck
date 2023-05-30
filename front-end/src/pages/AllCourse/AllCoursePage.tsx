import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import courseApi from 'src/apis/course.api'
import CourseCard from 'src/components/CourseCard'

const AllCoursePage = () => {
  const [searchValue, setSearchValue] = useState<string>('')

  const { data } = useQuery({
    queryKey: ['all course'],
    queryFn: () => courseApi.getCourse()
  })

  return (
    <div className='mt-9'>
      <h2 className='p-2 text-center text-2xl font-bold uppercase'>Tất cả khóa học</h2>

      <div className='mt-5 px-4 md:mt-14 md:px-20'>
        <div className='mb-5 flex justify-end px-3'>
          <input type='text' className='rounded-md border px-3 py-2' placeholder='Tìm kiếm ...' />
        </div>
        <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data?.data.data.map((course) => (
            <CourseCard courseItem={course} key={course.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AllCoursePage
