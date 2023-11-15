import { sort as sortConstant } from 'src/constant/sort'
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom'
import { Select, Option } from '@material-tailwind/react'
import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import courseApi from 'src/apis/course.api'

type TSearchConfig = {
  category: string
  price: string | number
  level: string
}

function SortCourse({ queryConfig }: any) {
  const navigate = useNavigate()
  const [searchParams, _] = useSearchParams()

  const handleSort = (filterName: keyof TSearchConfig, sortbyValue: any) => {
    const newParams = { ...Object.fromEntries([...searchParams]) }
    newParams[filterName] = sortbyValue
    navigate({
      pathname: '/courses',
      search: createSearchParams(newParams).toString()
    })
  }

  return (
    <>
      <div className='flex w-72 gap-4'>
        <Select label='Sắp xếp' onChange={(value) => handleSort('category', value)}>
          <Option value={sortConstant.arrangeTitleFromAtoZ}>Theo tên: A - Z</Option>
          <Option value={sortConstant.arrangeTitleFromZtoA}>Theo tên: Z - A</Option>
          <Option value={sortConstant.newPost}>Mới nhất</Option>
          <Option value={sortConstant.lastPost}>Cũ nhất</Option>
        </Select>
        <Select label='Gía' onChange={(value) => handleSort('price', value)}>
          <Option value={'price:asc'}>Gía giảm dần</Option>
          <Option value={'price:desc'}>Gía tăng dần</Option>
        </Select>
        <Select label='Độ khó' onChange={(value) => handleSort('level', value)}>
          <Option value={'course_levels:easy'}>Dễ</Option>
          <Option value={'course_levels:medium'}>Trung bình</Option>
          <Option value={'course_levels:hard'}>Khó</Option>
        </Select>
      </div>
    </>
  )
}

export default SortCourse
