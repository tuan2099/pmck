/* eslint-disable no-extra-boolean-cast */ // hide err in line 44
import {
  Select,
  MenuItem,
  FormControl,
  Pagination,
  Stack,
  Tooltip,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button
} from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import courseApi from 'src/apis/course.api'
import CourseCard from 'src/components/CourseCard'
import { AppContext } from 'src/context/app.context'
import { CourseType } from 'src/types/course.type'
import Slider from '../Homeuser/Component/Slider'
import sliderApi from 'src/apis/slider.api'

const COURSE_PER_PAGE = 9

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

  const { data: courseCategories } = useQuery({
    queryKey: ['course-categories'],
    queryFn: () => courseApi.getCourseCategories()
  })

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

  const handleChange = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    const newExpanded = JSON.parse(JSON.stringify(expanded))
    for (const key in expanded) {
      if (key === panel) {
        newExpanded[key] = isExpanded
      }
    }
    setExpanded(newExpanded)
  }

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
          {Boolean(data.length) && listStyle === 'grid' && (
            <div className='grid gap-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
              {data.map((course) => (
                <CourseCard courseItem={course} key={course.id} />
              ))}
            </div>
          )}

          {Boolean(data.length) && listStyle === 'list' && (
            <div className='grid gap-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
              {data.map((course) => (
                <div className='items-top flex w-full bg-white p-[12px]' key={course.id}>
                  <div className='mr-[24px] w-[240px]'>
                    <img
                      src={`http://localhost:1337${
                        course.attributes?.banner_course
                          ? course.attributes?.banner_course.data[0].attributes?.formats.medium?.url
                          : course.banner_course[0].formats.medium.url
                      }`}
                      alt=''
                    />
                  </div>
                  <div>
                    <h4>{course.attributes.course_name}</h4>
                    <p>{course.attributes.short_description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

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
            <div>
              <div>
                <Accordion expanded={expanded.panel1} onChange={handleChange('panel1')}>
                  <AccordionSummary
                    expandIcon={
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='h-6 w-6'
                      >
                        <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
                      </svg>
                    }
                    aria-controls='panel1bh-content'
                    id='panel1bh-header'
                  >
                    <Typography sx={{ width: '70%', flexShrink: 0 }}>Danh mục khóa học</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox checked={checkIncludeCategory('all')} />}
                        label='Tất cả khóa học'
                        value='all'
                        onChange={(_, checked) => {
                          handleChangeCategory(checked, 'all')
                        }}
                      />
                      {courseCategories?.data.data.map((item: any) => (
                        <FormControlLabel
                          required
                          control={<Checkbox checked={checkIncludeCategory(item.attributes.name)} />}
                          label={item.attributes.title}
                          onChange={(_, checked) => {
                            handleChangeCategory(checked, item.attributes.name)
                          }}
                        />
                      ))}
                    </FormGroup>
                  </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded.panel2} onChange={handleChange('panel2')}>
                  <AccordionSummary
                    expandIcon={
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='h-6 w-6'
                      >
                        <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
                      </svg>
                    }
                    aria-controls='panel1bh-content'
                    id='panel1bh-header'
                  >
                    <Typography sx={{ width: '70%', flexShrink: 0 }}>Danh mục khóa học</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label='Tất cả khóa học'
                        value='all'
                        onChange={(_, checked) => {
                          handleChangeCategory(checked, 'all')
                        }}
                      />
                      <FormControlLabel
                        required
                        control={<Checkbox />}
                        label='Khóa học miễn phí'
                        value='free_course'
                        onChange={(_, checked) => {
                          handleChangeCategory(checked, 'free_course')
                        }}
                      />
                      <FormControlLabel
                        required
                        control={<Checkbox />}
                        label='Khóa học mới'
                        value='new_course'
                        onChange={(_, checked) => {
                          handleChangeCategory(checked, 'new_course')
                        }}
                      />
                    </FormGroup>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllCoursePage
