/* eslint-disable no-extra-boolean-cast */ // hide err in line 44
import {
  Select,
  MenuItem,
  InputLabel,
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
  styled
} from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import CourseCard from 'src/components/CourseCard'
import { AppContext } from 'src/context/app.context'
import { CourseType } from 'src/types/course.type'

const AllCoursePage = () => {
  const [list, setList] = useState<CourseType[]>([])
  const { allCourse } = useContext(AppContext)
  const [serchParams, _] = useSearchParams()
  const category = serchParams.get('category')

  useEffect(() => {
    if (category && allCourse.length) {
      if (category === 'all') setList(allCourse)
      else {
        const newList = allCourse.filter((course) => {
          const check = course.attributes.course_categories.data.some((item) => item.attributes.name === category)
          if (check) return course
        })

        setList(newList)
      }
    } else {
      setList(allCourse)
    }
  }, [category, allCourse])

  const [expanded, setExpanded] = useState<string | false>(false)

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div className='mt-9'>
      <h2 className='px-20 text-2xl font-bold uppercase'>Tất cả khóa học</h2>
      <div className=' items-top mt-5 flex px-4 md:mt-14 md:px-20'>
        <div className='w-[75%] px-[15px]'>
          <div className='flex items-center justify-between pb-[50px]'>
            <div className='flex w-[40%] items-center '>
              <Tooltip title='Hiển thị dạng danh sách' placement='top'>
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
              <Tooltip title='Hiển thị dạng lưới' placement='top'>
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
              <p className='ml-[10px] border-l-2 pl-4 text-[16px] font-medium text-black'>Hiển thị 9/50 khóa học </p>
            </div>
            <div className='flex w-[40%] items-center justify-end'>
              <FormControl variant='standard' sx={{ m: 1, minWidth: 240 }}>
                <InputLabel id='demo-simple-select-standard-label'>Sắp xếp theo tên</InputLabel>
                <Select labelId='demo-simple-select-standard-label' id='demo-simple-select-standard' label='Age'>
                  <MenuItem value=''>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Từ A-Z</MenuItem>
                  <MenuItem value={20}>Từ Z-A</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          {Boolean(list.length) && (
            <div className='grid gap-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
              {list.map((course) => (
                <CourseCard courseItem={course} key={course.id} />
              ))}
            </div>
          )}

          {!Boolean(list.length) && <h3>Không có khóa học nào.</h3>}
          <div className='my-8 flex justify-center'>
            <Stack spacing={2}>
              <Pagination count={10} />
            </Stack>
          </div>
        </div>
        <div className='w-[25%] px-[15px]'>
          <div className='pb-[50px]'>
            <div className='mt-[25px] flex items-center justify-between rounded border p-[10px]'>
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
              <div className='cursor-pointer'>Hiện toàn bộ</div>
            </div>
          </div>
          <div className=''>
            <div>
              <div>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
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
                    <Typography sx={{ width: '50%', flexShrink: 0 }}>Danh mục khóa học</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormGroup>
                      <FormControlLabel control={<Checkbox defaultChecked />} label='Label' />
                      <FormControlLabel required control={<Checkbox />} label='Required' />
                      <FormControlLabel required control={<Checkbox />} label='Required' />
                      <FormControlLabel required control={<Checkbox />} label='Required' />
                      <FormControlLabel required control={<Checkbox />} label='Required' />
                      <FormControlLabel required control={<Checkbox />} label='Required' />
                      <FormControlLabel required control={<Checkbox />} label='Required' />
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
