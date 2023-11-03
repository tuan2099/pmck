/* eslint-disable no-extra-boolean-cast */ // hide err in line 44
import { useQuery } from '@tanstack/react-query'
import useQueryConfig, { ConfigParams } from 'src/hooks/useQueryConfig'
import courseApi from 'src/apis/course.api'
import { FaFilter, FaGripHorizontal, FaListUl } from 'react-icons/fa'
import CourseCard from 'src/components/CourseCard'
import SortCourse from './Component/Sort/SortCourse'
import BlockSkeleton from 'src/components/BlockSkeleton'
import { useState } from 'react'
import Filters from './Component/Filters'
import Paginationcustom from './Component/Pagination/Pagination'
import ButtonCustom from 'src/components/Button/Button'
import { Tooltip } from '@material-tailwind/react'

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
              <ButtonCustom
                size="sm"
                variant="text"
                className=" text-color1 shadow-[none] rounded-full  hover:shadow-[none] outline-none flex items-center gap-3"
                onClick={open}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                </svg>
                Lọc tin tức
              </ButtonCustom>
              <div className='border-r-1 mx-4 my-2 border' />
              <Tooltip content='Hiển thị danh sách' placement='top' animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}>
                <ButtonCustom size="sm" className=" text-color1 shadow-[none] rounded-full  hover:shadow-[none] outline-none flex items-center gap-3 p-2"
                  variant="text" aria-label='delete'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
                  </svg>
                </ButtonCustom>
              </Tooltip>
              <Tooltip content='Hiển thị lưới' placement='top' animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}>
                <ButtonCustom size="sm" className=" text-color1 shadow-[none] rounded-full  hover:shadow-[none] outline-none flex items-center gap-3 p-2"
                  variant="text" aria-label='delete'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                  </svg>
                </ButtonCustom>
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
