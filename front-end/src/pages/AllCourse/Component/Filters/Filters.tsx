import { createSearchParams, useNavigate } from 'react-router-dom'
import Custombutton from 'src/components/Custombutton'
import { FormControl, IconButton, InputLabel, MenuItem, Select, TextField, Tooltip } from '@mui/material'
import useQueryConfig, { ConfigParams } from 'src/hooks/useQueryConfig'
import { HiTrash, HiXMark } from "react-icons/hi2";
import { useQuery } from '@tanstack/react-query';
import newApi from 'src/apis/new.api';

function Filters({ queryConfig, open }: any) {
  const navigate = useNavigate()

  // call api Filters
  const handleFilters = (categoryName) => {
    navigate({
      pathname: '/courses', //reset URL before transmit param
      search: createSearchParams({ // transmit param with param is obj
        ...queryConfig,
        filters: JSON.stringify({
          new_categories: {
            category_name: categoryName
          }
        })
      }).toString() // url must be string
    })
  }
  
  // call api category new
  const {
    data: newCategory,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['allCourse', queryConfig],
    queryFn: () => {
      return newApi.getCategoryNews({ ...(queryConfig as ConfigParams) })
    },
    keepPreviousData: true,
    staleTime: 3 * 60 * 1000
  }) 

  const resetSort = () => {
    navigate({
      pathname: '/courses'
    })
  }
  return (
    <>
      <div className='mb-4 flex items-center pr-8 pl-3'>
                <TextField fullWidth label="Nhập từ khóa" id="fullWidth" size="small"/>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small" fullWidth>
                  <InputLabel id="demo-select-small-label">Lọc tin tức</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    label="Lọc tin tức"
                    onChange={(e) => handleFilters(e.target.value)}
                    defaultValue=''
                  >
                    {newCategory?.data?.data.map((item) => {
                      return <MenuItem key={item.id} value={item.attributes.category_name}>{item.attributes.category_name}</MenuItem>
                    })}
                  </Select>
                </FormControl>
              </div>
              <div className='mb-4 flex items-center pr-8 pl-3 justify-between'>
                <div className='text-gray-500'>Được tìm kiếm nhiều nhất:{newCategory?.data?.data.map((item) => {
                      return <span key={item.id} onClick={() => handleFilters(item.attributes.category_name)}  className='bg-gray-100 px-4 py-1 rounded-full mr-3 cursor-pointer hover:bg-gray-200'>{item.attributes.category_name}</span>
                    })} </div>
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
