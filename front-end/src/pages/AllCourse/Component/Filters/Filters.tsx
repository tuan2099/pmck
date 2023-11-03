/* eslint-disable jsx-a11y/click-events-have-key-events */
import { createSearchParams, useNavigate } from 'react-router-dom'
import Custombutton from 'src/components/Custombutton'
// import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { ConfigParams } from 'src/hooks/useQueryConfig'
import { HiTrash, HiXMark } from 'react-icons/hi2'
import { useQuery } from '@tanstack/react-query'
import courseApi from 'src/apis/course.api'
import ButtonCustom from 'src/components/Button/Button'
import { Select, Option } from "@material-tailwind/react";

function Filters({ queryConfig, open }: any) {
  const navigate = useNavigate()

  // func call api Filters Coures
  const handleFiltersCourse = (categoryId) => {
    navigate({
      pathname: '/courses', //reset URL before transmit param
      search: createSearchParams({
        // transmit param with param is obj
        ...queryConfig,
        filters: JSON.stringify({
          course_lists: {
            id: categoryId
          }
        })
      }).toString() // url must be string
    })
  }

  // func call api Filters Level
  const handleFiltersLevel = (level) => {
    navigate({
      pathname: '/courses', //reset URL before transmit param
      search: createSearchParams({
        // transmit param with param is obj
        ...queryConfig,
        filters: JSON.stringify({
          course_levels: {
            id: level
          }
        })
      }).toString() // url must be string
    })
  }

  //
  const handleFiltersPrice = (price) => {
    navigate({
      pathname: '/courses', //reset URL before transmit param
      search: createSearchParams({
        // transmit param with param is obj
        ...queryConfig,
        filters: JSON.stringify({
          IsFree: price
        })
      }).toString() // url must be string
    })
  }
  // call api category course
  const { data: categoryCourse } = useQuery({
    queryKey: ['categortCourse', queryConfig],
    queryFn: () => {
      return courseApi.getCourseList({ ...(queryConfig as ConfigParams) })
    },
    keepPreviousData: true,
    staleTime: 3 * 60 * 1000
  })

  // call api course level
  const { data: courseLevel } = useQuery({
    queryKey: ['courseLevel', queryConfig],
    queryFn: () => {
      return courseApi.getCourseLevel({ ...(queryConfig as ConfigParams) })
    },
    keepPreviousData: true,
    staleTime: 3 * 60 * 1000
  })

  // reset
  const resetSort = () => {
    navigate({
      pathname: '/courses'
    })
  }
  return (
    <>
      <div className='mb-4 flex items-center pr-8'>
          {/* <Select
            label='Danh mục khóa học'
            onChange={handleFiltersCourse}
          >
            {categoryCourse?.data?.data?.map((item) => {
              return (
                <Option key={item.id} value={item.id}>
                  {item.attributes.label}
                </Option>
              )
            })}
          </Select> */}
          {/* <Select
            onChange={handleFiltersPrice}
            label='Theo giá cả'
          >
                <Option value='1'>Miễn phí</Option>
                <Option value='2'>Trả phí</Option>
          </Select> */}
          <Select onChange={handleFiltersLevel} label='Trình độ'>
            {courseLevel?.data?.data?.map((item) => {
              return (
                <Option key={item.id} value={item.id}>
                {item.attributes.level}
              </Option>
              )
            })}
          </Select>
      </div>
      <div className='mb-4 flex items-center justify-between pl-3 pr-8'>
        <div className='text-gray-500'>
          Được tìm kiếm nhiều nhất:
          {categoryCourse?.data?.data.slice(0, 3).map((item) => {
            return (
              // eslint-disable-next-line jsx-a11y/no-static-element-interactions
              <span
                key={item.id}
                onClick={() => handleFiltersCourse(item.id)}
                className='mr-3 cursor-pointer rounded-full bg-gray-100 px-4 py-1 hover:bg-gray-200'
              >
                {item.attributes.label}
              </span>
            )
          })}
        </div>
        <div className='flex'>
        <ButtonCustom
          size="sm"
          variant="text"
          className=" text-color1 shadow-[none] rounded-full  hover:shadow-[none] outline-none flex items-center gap-3 py-1"
          onClick={open}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
          </svg>
          Đóng
        </ButtonCustom>
          <ButtonCustom
            size="sm"
            variant="text"
            className=" text-color1 shadow-[none] rounded-full  hover:shadow-[none] outline-none flex items-center gap-3 py-1"
            onClick={resetSort}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
            Xóa bộ lọc
          </ButtonCustom>
        </div>
      </div>
    </>
  )
}

export default Filters
