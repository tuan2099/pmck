import { InputAdornment, TextField } from '@mui/material'
import { GridClearIcon, GridSearchIcon } from '@mui/x-data-grid'
import { FaMailBulk, FaPhoneAlt, FaQuestionCircle, FaUsersCog } from 'react-icons/fa'

function Question() {
  return (
    <>
      <div className='min-h-sceen mx-auto max-w-[1320px]  bg-white px-5'>
        <div className='mt-5 flex items-center justify-between'>
          <h1 className='my-10 text-2xl font-semibold'>Frequently Asked Questions</h1>
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
            <p className='text-[10px] italic'>* Lorem Ipsum is simply dummy text </p>
          </div>
        </div>
        <div>
          <p>
            <span className='font-bold'></span>
          </p>
          <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4'>
            {Array(7)
              .fill(0)
              .map((_, index) => (
                <div className='w-full cursor-pointer bg-[#f1f1f1] py-9 transition hover:bg-[#dbdbdb]' key={index}>
                  <div className='flex justify-center text-[70px] text-color1'>
                    <FaUsersCog />
                  </div>
                  <h3 className='text-center'>General</h3>
                </div>
              ))}
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
                  <div className='mt-1 text-sm'>Gọi điện</div>
                </div>
                <div className='flex w-full cursor-pointer flex-col items-center justify-center bg-[#f1f1f1] py-4 text-[25px] text-color1 transition hover:bg-[#dbdbdb]'>
                  <FaMailBulk />
                  <div className='mt-1 text-sm'>Gửi Email</div>
                </div>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'></div>
        </div>
      </div>
    </>
  )
}

export default Question
