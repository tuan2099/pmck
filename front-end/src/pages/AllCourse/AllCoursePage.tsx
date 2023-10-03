/* eslint-disable no-extra-boolean-cast */ // hide err in line 44
import { Pagination, Stack } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CourseType } from 'src/types/course.type'
import SearchAllCourse from './Component/searchAllCourse'
import ListCourse from './Component/ListCourse'
import GridCourse from './Component/GridCourse'

const COURSE_PER_PAGE = 9

const AllCoursePage = () => {
  const [serchParams, setSearchParams] = useSearchParams()
  const category = serchParams.get('category')
  const [list, setList] = useState<CourseType[]>([])
  const [data, setData] = useState<CourseType[]>([])
  const [page, setPage] = useState<number>(1)
  const [sortByName, setSortByName] = useState<string>('none')
  const [listStyle, setListStyle] = useState<'list' | 'grid'>('grid')

  return (
    <div className='mt-4'>
      <h2 className='px-20 text-center text-2xl font-bold uppercase'>Tất cả khóa học</h2>
      <p className='mt-4 text-center text-[#afafaf]'>
        Khám phá tri thức, thú vị và thành công với khóa học của chúng tôi
      </p>
      <div className='items-top mt-5 flex md:mt-14 md:px-20'>
        <div className='w-full'>
          <SearchAllCourse
            setListStyle={setListStyle}
            list={list}
            data={data}
            setSortByName={setSortByName}
            sortByName={sortByName}
          />
          <GridCourse data={data} listStyle={listStyle} />

          <ListCourse data={data} listStyle={listStyle} />

          {!Boolean(data.length) && (
            <>
              <div className='pt-7 text-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='m-auto h-60 w-60  text-gray-200'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776'
                  />
                </svg>
                <h5 className='text-gray-500'>
                  Hiện chưa có khóa học nào, chúng tôi sẽ cập nhật trong thời gian sớm nhất ...
                </h5>
              </div>
            </>
          )}
          <div className='my-8 flex justify-center'>
            <Stack spacing={2}>
              <Pagination count={Math.ceil(list.length / COURSE_PER_PAGE)} onChange={(_, value) => setPage(value)} />
            </Stack>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllCoursePage
