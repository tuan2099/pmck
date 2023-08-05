/* eslint-disable no-extra-boolean-cast */ // hide err in line 44
import { Pagination, Stack, Button } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import courseApi from 'src/apis/course.api'
import { AppContext } from 'src/context/app.context'
import { CourseType } from 'src/types/course.type'
import Slider from '../Homeuser/Component/Slider'
import sliderApi from 'src/apis/slider.api'
import SearchAllCourse from './Component/searchAllCourse'
import ListCourse from './Component/ListCourse'
import GridCourse from './Component/GridCourse'
import Fillter from './Component/Fillter'

const COURSE_PER_PAGE = 9 // show number in course

const AllCoursePage = () => {
  const { allCourse } = useContext(AppContext)
  const [serchParams, setSearchParams] = useSearchParams()
  const category = serchParams.get('category')
  const [list, setList] = useState<CourseType[]>([])
  const [data, setData] = useState<CourseType[]>([])
  const [page, setPage] = useState<number>(1)
  const [sortByName, setSortByName] = useState<string>('none')
  const [expanded, setExpanded] = useState({
    panel1: false,
    panel2: false
  })
  const [listStyle, setListStyle] = useState<'list' | 'grid'>('grid')
  const [isShowAll, setIsShowAll] = useState(false)

  useEffect(() => {
    const categoryList = category?.split('+')
    if (category && allCourse.length) {
      if (category === 'all' || category === '') {
        setList(allCourse)
      } else {
        const data = allCourse?.filter((item) =>
          categoryList
            ?.filter((item) => item !== 'all')
            ?.every((cate) => item.attributes.course_categories.data.some((obj) => obj.attributes.name === cate))
        )
        setList(data)
      }
    } else {
      setList(allCourse)
    }
  }, [category, allCourse])

  useEffect(() => {
    const newData = JSON.parse(JSON.stringify(list))
    const start = (page - 1) * COURSE_PER_PAGE
    const end = start + COURSE_PER_PAGE
    const currentCourse = newData.slice(start, end)
    switch (sortByName) {
      case 'A-Z':
        currentCourse.sort((a: any, b: any) => a.attributes.course_name.localeCompare(b.attributes.course_name))
        break
      case 'Z-A':
        currentCourse.sort((a: any, b: any) => b.attributes.course_name.localeCompare(a.attributes.course_name))
        break
      default:
        currentCourse
    }

    setData(currentCourse)
  }, [sortByName, page, list])

  // toogle show fillter box
  const handleChange = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    const newExpanded = JSON.parse(JSON.stringify(expanded))
    for (const key in expanded) {
      if (key === panel) {
        newExpanded[key] = isExpanded
      }
    }
    setExpanded(newExpanded)
  }

  // toogle show all fillter boxex
  const handleShowAllPanel = () => {
    const newExpanded = JSON.parse(JSON.stringify(expanded))
    if (isShowAll) {
      for (const key in expanded) {
        newExpanded[key] = false
      }
    } else {
      for (const key in expanded) {
        newExpanded[key] = true
      }
    }
    setExpanded(newExpanded)
    setIsShowAll(!isShowAll)
  }

  // setting checkbox filter
  const handleChangeCategory = (checked: boolean, name: string) => {
    const cloneCategory = category?.split('+')
    const isExist = cloneCategory?.indexOf(name)
    if (checked) {
      if (category === '' || !category) {
        setSearchParams({ ...Object.fromEntries([...serchParams]), category: name })
      } else {
        if (isExist === -1) {
          cloneCategory?.push(name)
          setSearchParams({ ...Object.fromEntries([...serchParams]), category: cloneCategory?.join('+') as string })
        }
      }
    } else {
      const newCategory = cloneCategory?.filter((item) => item != name)
      setSearchParams({ ...Object.fromEntries([...serchParams]), category: newCategory?.join('+') as string })
    }
  }

  // setting checkbox filter
  const checkIncludeCategory = (name: string) => {
    return category?.split('+').includes(name)
  }

  // call api slider
  const { data: imageSliderdata } = useQuery({
    queryKey: ['sliderImage'],
    queryFn: () => {
      return sliderApi.getSlider()
    }
  })

  // call api course Category
  const { data: courseCategories } = useQuery({
    queryKey: ['course-categories'],
    queryFn: () => courseApi.getCourseCategories()
  })

  return (
    <div className=''>
      <div className=' p-[25px]'>
        <Slider imageSliderdata={imageSliderdata} />
      </div>
      <h2 className='px-20 text-center text-2xl font-bold uppercase'>Tất cả khóa học</h2>
      <p className='mt-4 text-center text-[#afafaf]'>
        Khám phá tri thức, thú vị và thành công với khóa học của chúng tôi
      </p>
      <div className=' items-top mt-5 flex px-4 md:mt-14 md:px-20'>
        <div className='w-[75%] px-[15px]'>
          <SearchAllCourse
            setListStyle={setListStyle}
            list={list}
            data={data}
            setSortByName={setSortByName}
            sortByName={sortByName}
          />
          <GridCourse data={data} listStyle={listStyle} />

          <ListCourse data={data} listStyle={listStyle} />

          {!Boolean(data.length) && <h3>Không có khóa học nào.</h3>}
          <div className='my-8 flex justify-center'>
            <Stack spacing={2}>
              <Pagination count={Math.ceil(list.length / COURSE_PER_PAGE)} onChange={(_, value) => setPage(value)} />
            </Stack>
          </div>
        </div>
        <div className='w-[25%] px-[15px]'>
          <div className='pb-[50px]'>
            <div className='mt-[8px] flex items-center justify-between rounded border p-[10px]'>
              <h4 className='flex items-center text-[16px] font-semibold'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='mr-2 h-6 w-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z'
                  />
                </svg>
                Tìm kiếm
              </h4>
              <Button className='cursor-pointer' onClick={handleShowAllPanel}>
                <p className='font-semibold text-black'>Hiện toàn bộ</p>
              </Button>
            </div>
          </div>
          <div className=''>
            <Fillter
              handleChange={handleChange}
              checkIncludeCategory={checkIncludeCategory}
              handleChangeCategory={handleChangeCategory}
              courseCategories={courseCategories}
              expanded={expanded}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllCoursePage
