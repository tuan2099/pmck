import { createSearchParams, useNavigate } from 'react-router-dom'
import Custombutton from 'src/components/Custombutton'
import { FormControl, InputLabel, MenuItem, Select} from '@mui/material'
import  { ConfigParams } from 'src/hooks/useQueryConfig'
import { HiTrash, HiXMark } from "react-icons/hi2";
import { useQuery } from '@tanstack/react-query';
import courseApi from 'src/apis/course.api';

function Filters({ queryConfig, open }: any) {
  const navigate = useNavigate()

  // func call api Filters Coures
  const handleFiltersCourse = (categoryId) => {
    navigate({
      pathname: '/courses', //reset URL before transmit param
      search: createSearchParams({ // transmit param with param is obj
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
      search: createSearchParams({ // transmit param with param is obj
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
      search: createSearchParams({ // transmit param with param is obj
        ...queryConfig,
        filters: JSON.stringify({
          IsFree: price
        })
      }).toString() // url must be string
    })
  }
  // call api category course
  const {
    data: categoryCourse
  } = useQuery({
    queryKey: ['categortCourse', queryConfig],
    queryFn: () => {
      return courseApi.getCourseList({ ...(queryConfig as ConfigParams) })
    },
    keepPreviousData: true,
    staleTime: 3 * 60 * 1000
  })

 // call api course level
  const {
    data: courseLevel
  } = useQuery({
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
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small" fullWidth>
                  <InputLabel id="demo-select-small-label">Lọc khóa học</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    label="Lọc khóa học"
                    onChange={(e) => handleFiltersCourse(e.target.value)}
                    defaultValue=''
                  >
                    {categoryCourse?.data?.data?.map((item) => {
                      return <MenuItem key={item.id} value={item.id
                      }>{item.attributes.label
                      }</MenuItem>
                    })}
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small" fullWidth>
                  <InputLabel id="demo-select-small-label">Theo giá cả</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    label="Theo giá cả"
                    onChange={(e) => handleFiltersPrice(e.target.value)}
                    defaultValue=''
                  >
                    <MenuItem value={1}>Miễn phí</MenuItem>
                    <MenuItem value={2}>Trả phí</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small" fullWidth>
                  <InputLabel id="demo-select-small-label">Trình độ</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    label="Trình độ"
                    onChange={(e) => handleFiltersLevel(e.target.value)}
                    defaultValue=''
                  >
                    {courseLevel?.data?.data?.map((item) => {
                      return <MenuItem key={item.id} value={item.id
                      }>{item.attributes.level
                      }</MenuItem>
                    })}
                  </Select>
                </FormControl>
              </div>
              <div className='mb-4 flex items-center pr-8 pl-3 justify-between'>
                <div className='text-gray-500'>Được tìm kiếm nhiều nhất:{categoryCourse?.data?.data.slice(0,3).map((item) => {
                      return <span key={item.id} onClick={() => handleFiltersCourse(item.id)}  className='bg-gray-100 px-4 py-1 rounded-full mr-3 cursor-pointer hover:bg-gray-200'>{item.attributes.label}</span>
                    })} 
                </div>
                <div><Custombutton
                  textColor='#4F4F4F'
                  bgcolor='none'
                  border='none'
                  borderColor='none'
                  hoverBgColor='none'
                  startIcon={<HiXMark />}
                  onClick={open}
                >
                  {' '}
                  Đóng
                </Custombutton>
                <Custombutton
                  textColor='#4F4F4F'
                  bgcolor='none'
                  border='none'
                  borderColor='none'
                  hoverBgColor='none'
                  startIcon={<HiTrash />}
                  onClick={resetSort}
                >
                  {' '}
                  Xóa bộ lọc
                </Custombutton></div>
              </div>
    </>
  )
}

export default Filters
