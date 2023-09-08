import { Avatar, Drawer, InputAdornment, Skeleton, TextField } from '@mui/material'
import { GridSearchIcon } from '@mui/x-data-grid'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { FaLink, FaMailBulk, FaPhoneAlt, FaQuestionCircle } from 'react-icons/fa'
import supportApi from 'src/apis/support.api'
import { SupportType } from 'src/types/support.type'

function Question() {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)

  const { data: supportQuestionApi } = useQuery({
    queryKey: ['support'],
    queryFn: () => {
      return supportApi.getCategorySupport()
    }
  })

  const toogleDrawer = () => {
    setOpenDrawer(!openDrawer)
  }

  return (
    <>
      <div className='min-h-sceen mx-auto bg-white px-5'>
        <div className='flex items-center justify-between'>
          <h1 className='my-8 flex items-center text-xl font-semibold text-color1'>
            <Avatar sx={{ bgcolor: '#1e7115' }}>
              <FaQuestionCircle />
            </Avatar>
            <span className='ml-2'>Hỗ trợ người dùng</span>
          </h1>
          <div>
            <TextField
              size='small'
              variant='outlined'
              InputProps={{
                endAdornment: (
                  <InputAdornment position='start'>
                    <GridSearchIcon />
                  </InputAdornment>
                )
              }}
            />
          </div>
        </div>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4'>
          {supportQuestionApi &&
            supportQuestionApi?.data.data?.map((item: SupportType) => {
              return (
                <>
                  <button
                    onClick={toogleDrawer}
                    className='w-full cursor-pointer bg-[#f1f1f1] py-9 transition hover:bg-[#dbdbdb]'
                    key={item.id}
                  >
                    <div className='m-auto mb-3 flex w-[90px] justify-center '>
                      <img
                        src={`http://localhost:1337${item.attributes.image.data[0].attributes?.url}`}
                        alt={`${item.attributes.label}`}
                      />
                    </div>
                    <h3 className='text-center font-medium text-color1'>{item.attributes.label}</h3>
                  </button>
                </>
              )
            })}
          <Drawer open={openDrawer} anchor='right' onClose={toogleDrawer}>
            <div className='w-[43%] min-w-[720px] max-w-full'>
              <div className='flex items-center justify-between p-6'>
                <h2 className='text-2xl font-bold'>Tiêu đề</h2>
              </div>
              <div className='p-6'></div>
            </div>
          </Drawer>
          <div className='flex w-full cursor-pointer flex-col justify-between transition'>
            <div>
              <div className='mb-2 flex justify-center pt-3 text-color1'>
                <FaQuestionCircle />
              </div>
              <h3 className='text-center text-sm text-color1'>Nếu bạn không tìm thấy câu hỏi</h3>
            </div>
            <div className='grid grid-cols-2 gap-2'>
              <div className='flex w-full cursor-pointer flex-col items-center justify-center bg-[#f1f1f1] py-4 text-[25px] text-color1 transition hover:bg-[#dbdbdb]'>
                <FaPhoneAlt />
                <div className='mt-1 text-sm'>Liên hệ</div>
              </div>
              <div className='flex w-full cursor-pointer flex-col items-center justify-center bg-[#f1f1f1] py-4 text-[25px] text-color1 transition hover:bg-[#dbdbdb]'>
                <FaMailBulk />
                <div className='mt-1 text-sm'>Gửi Email</div>
              </div>
            </div>
          </div>
        </div>
        <div className='my-[120px] grid grid-cols-1 gap-4 lg:grid-cols-3'>
          <div className='w-full'>
            <h3 className='flex items-center font-semibold text-color1'>
              <FaQuestionCircle />
              <span className='ml-2 text-xl'>Câu hỏi phổ biến</span>
            </h3>
            <ul className='mt-7 list-outside  text-color1'>
              <li className='list-inside list-disc text-sm'>
                <a href='/' className='text-blue-700'>
                  Làm thế nào để tôi đăng ký và truy cập khóa học trực tuyến?
                </a>
              </li>
            </ul>
          </div>
          <div className='w-full'>
            <h3 className='flex items-center font-semibold text-color1'>
              <FaLink />
              <span className='ml-2 text-xl'>Liên kết hữu ích</span>
            </h3>
            <ul className='mt-7 list-outside pl-4 text-color1'>
              <li className='text-md list-inside list-disc text-sm'>
                <a href='/' className='text-blue-700'>
                  Làm thế nào để tôi đăng ký và truy cập khóa học trực tuyến?
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Question
