import { createSearchParams, useNavigate } from 'react-router-dom'
import { FormControl, IconButton, InputLabel, MenuItem, Select, TextField, Tooltip } from '@mui/material'
import useQueryConfig, { ConfigParams } from 'src/hooks/useQueryConfig'
import { useQuery } from '@tanstack/react-query';
import newApi from 'src/apis/new.api';
import ButtonCustom from 'src/components/Button/Button';

function Filters({ queryConfig, open }: any) {
  const navigate = useNavigate()

  // call api Filters
  const handleFilters = (categoryName) => {
    navigate({
      pathname: '/new', //reset URL before transmit param
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
      pathname: '/new'
    })
  }
  return (
    <>
      <div className='mb-4 flex items-center pr-8 pl-3'>
        <TextField fullWidth label="Nhập từ khóa" id="fullWidth" size="small" />
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
          return <span key={item.id} onClick={() => handleFilters(item.attributes.category_name)} className='bg-gray-100 px-4 py-1 rounded-full mr-3 cursor-pointer hover:bg-gray-200'>{item.attributes.category_name}</span>
        })} </div>
        <div className='flex'><ButtonCustom
          size="sm"
          variant="text"
          className=" text-color1 shadow-[none] rounded-full  hover:shadow-[none] outline-none flex items-center gap-3"
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
            className=" text-color1 shadow-[none] rounded-full  hover:shadow-[none] outline-none flex items-center gap-3"
            onClick={resetSort}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
            Xóa bộ lọc
          </ButtonCustom></div>
      </div>
    </>
  )
}

export default Filters
