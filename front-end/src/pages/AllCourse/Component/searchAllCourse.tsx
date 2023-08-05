import { FormControl, MenuItem, Select, Tooltip } from '@mui/material'
import React from 'react'

function SearchAllCourse({ setListStyle, data, list, setSortByName, sortByName }: any) {
  return (
    <>
      <div className='flex items-center justify-between pb-[50px]'>
        <div className='flex w-[40%] items-center '>
          <Tooltip title='Hiển thị dạng danh sách' placement='top' onClick={() => setListStyle('list')}>
            <div className='mx-[5px] flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-[5px] border hover:border-[#1e7115] hover:text-[#1e7115]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-7 w-7 font-semibold'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                />
              </svg>
            </div>
          </Tooltip>
          <Tooltip title='Hiển thị dạng lưới' placement='top' onClick={() => setListStyle('grid')}>
            <div className='mx-[5px] flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-[5px] border hover:border-[#1e7115] hover:text-[#1e7115]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-7 w-7'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5'
                />
              </svg>
            </div>
          </Tooltip>
          <p className='ml-[10px] border-l-2 pl-4 text-[16px] font-medium text-black'>
            {`Hiển thị ${data.length}/${list.length} khóa học`}{' '}
          </p>
        </div>
        <div className='flex w-[40%] items-center justify-end'>
          <FormControl sx={{ m: 1, minWidth: 240 }}>
            <Select
              labelId='demo-simple-select-standard-label'
              id='demo-simple-select-standard'
              label='Age'
              value={sortByName}
              onChange={(e) => setSortByName(e.target.value)}
            >
              <MenuItem value='none'>
                <em className='text-[15px]'>Sắp xếp theo tên</em>
              </MenuItem>
              <MenuItem value='A-Z'>Từ A-Z</MenuItem>
              <MenuItem value='Z-A'>Từ Z-A</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </>
  )
}

export default SearchAllCourse
