/* eslint-disable no-extra-boolean-cast */ // hide err in line 44
import { useQuery } from '@tanstack/react-query'
import useQueryConfig, { ConfigParams } from 'src/hooks/useQueryConfig'
import courseApi from 'src/apis/course.api'
import Custombutton from 'src/components/Custombutton'
import { FaFilter, FaGripHorizontal, FaListUl } from 'react-icons/fa'
import { IconButton, Tooltip } from '@mui/material'
import CourseCard from 'src/components/CourseCard'
import SortCourse from './Component/Sort/SortCourse'
import BlockSkeleton from 'src/components/BlockSkeleton'
import { useState } from 'react'
import Filters from './Component/Filters'
import Paginationcustom from './Component/Pagination/Pagination'

const AllCoursePage = () => {
  const queryConfig = useQueryConfig()
  const [openFilterBox, setOpenFilterBox] = useState(false)
  const [view, setView] = useState('grid')
  const {
    data: courseData,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['allCourse', queryConfig],
    queryFn: () => {
      return courseApi.getCourse({ ...(queryConfig as ConfigParams) })
    },
    keepPreviousData: true,
    staleTime: 3 * 60 * 1000
  })

  const open = () => {
    setOpenFilterBox(!openFilterBox)
  }

  return (
    <>
      <div className='ml-[50px] mt-5'>
        <h1 className='mb-9 text-3xl font-bold'>🎉 Danh sách khóa học</h1>
        <div className='mt-[30px] overflow-hidden lg:mt-[10px] '>
          <div className='mb-7 flex items-center justify-between pr-8'>
            <SortCourse queryConfig={queryConfig} />
            <div className='flex'>
              <Custombutton
                textColor='#4F4F4F'
                bgcolor='none'
                border='none'
                borderColor='none'
                hoverBgColor='none'
                startIcon={<FaFilter />}
                onClick={open}
              >
                {' '}
                Lọc khóa học
              </Custombutton>
              <div className='border-r-1 mx-4 my-2 border' />
              <Tooltip title='Hiển thị danh sách' placement='top'>
                <IconButton aria-label='delete'>
                  <FaListUl />
                </IconButton>
              </Tooltip>
              <Tooltip title='Hiển thị lưới' placement='top'>
                <IconButton aria-label='delete'>
                  <FaGripHorizontal />
                </IconButton>
              </Tooltip>
            </div>
          </div>
          {openFilterBox && <Filters open={open} />}
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:pr-[44px] xl:grid-cols-4'>
            {courseData?.data?.data?.map((courseItem) => {
              return <CourseCard key={courseItem.id} courseItem={courseItem} />
            })}
            {isLoading && (
              <>
                <BlockSkeleton sklType='grid' className='2' number={20} />
              </>
            )}
            {isError && <div>Dữ liệu hiện đang gặp vấn đề</div>}
          </div>
          <div className='my-9 flex justify-center'>
            <Paginationcustom queryConfig={queryConfig} pageCount={courseData?.data?.meta.pagination.pageCount} />
          </div>
        </div>
      </div>
    </>
  )
}

export default AllCoursePage
