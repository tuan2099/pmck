import { InputAdornment, TextField } from '@mui/material'
import { GridSearchIcon } from '@mui/x-data-grid'
import { FaLink, FaMailBulk, FaPhoneAlt, FaQuestion, FaQuestionCircle, FaUsersCog } from 'react-icons/fa'

function Question() {
  return (
    <>
      <div className='min-h-sceen mx-auto bg-white px-5'>
        <div className='mt-5 flex items-center justify-between'>
          <h1 className='my-10 text-2xl font-semibold'>Các câu hỏi thường gặp</h1>
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
                  <h3 className='text-center font-medium text-color1'>General</h3>
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
          <div className='mt-[120px] grid grid-cols-1 gap-4 lg:grid-cols-3'>
            <div className='w-full'>
              <h3 className='flex items-center font-semibold text-color1'>
                <FaQuestionCircle />
                <span className='ml-2 text-xl'>Câu hỏi phổ biến</span>
              </h3>
              <ul className='mt-7 list-outside  text-color1'>
                <li className='text-md list-inside list-disc font-medium'>
                  Làm thế nào để tôi đăng ký và truy cập khóa học trực tuyến?
                </li>
                <li className='text-md font-medium'>Tôi cần có kiến thức kỹ thuật gì để tham gia vào khóa học?</li>
                <li className='text-md font-medium'>
                  Làm thế nào để tìm kiếm và chọn khóa học phù hợp với mục tiêu học tập của tôi?
                </li>
                <li className='text-md font-medium'>Cách làm bài tập và bài kiểm tra trực tuyến trong khóa học?</li>
                <li className='text-md font-medium'>
                  Làm thế nào để tải xuống tài liệu hoặc tài liệu tham khảo liên quan đến khóa học?
                </li>
              </ul>
            </div>
            <div className='w-full'>
              <h3 className='flex items-center font-semibold text-color1'>
                <FaLink />
                <span className='ml-2 text-xl'>Liên kết hữu ích cho bạn.</span>
              </h3>
              <ul className='mt-7 list-outside pl-4 text-color1'>
                <li className='text-md leading-10'>Lorem Ipsum is simply dummy text of the printing ?</li>
                <li className='text-md leading-10'>Lorem Ipsum is simply dummy text of the printing ?</li>
                <li className='text-md leading-10'>Lorem Ipsum is simply dummy text of the printing ?</li>
                <li className='text-md leading-10'>Lorem Ipsum is simply dummy text of the printing ?</li>
                <li className='text-md leading-10'>Lorem Ipsum is simply dummy text of the printing ?</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Question
