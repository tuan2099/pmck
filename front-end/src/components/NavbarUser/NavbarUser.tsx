import React from 'react'
import { Link } from 'react-router-dom'
import logo from 'src/assets/logo.png'
import ClickPopover from '../ClickPopover'

function NavbarUser() {
  return (
    <>
      <div className='sticky left-0 right-0 top-0 z-[2] flex items-center justify-between border-b border-[#e8ebed] bg-white px-7 py-2'>
        <div className='w-[100px]'>
          <img className='w-full' src={logo} alt='logo website' />
        </div>
        <div className='flex items-center'>
          <Link className='mr-4' to='/user'>
            Khóa học của tôi
          </Link>
          <ClickPopover
            renderPopover={
              <div className=''>
                <div className='flex items-center justify-between'>
                  <h5 className='flex font-medium text-[#757575]'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='mr-1 h-6 w-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z'
                      />
                    </svg>
                    Thông báo
                  </h5>
                  <h6 className='cursor-pointer px-1 transition hover:bg-gray-200'>Đánh dấu đã đọc</h6>
                </div>
              </div>
            }
            className='w-[400px] rounded bg-white px-5 py-6 shadow-3xl'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='mt-2 h-6 w-6 text-[#757575]'
            >
              <path d='M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0 011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z' />
              <path
                fillRule='evenodd'
                d='M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z'
                clipRule='evenodd'
              />
            </svg>
          </ClickPopover>

          <ClickPopover
            renderPopover={
              <div className=''>
                <div className='flex items-center justify-between'>
                  <div className='ml-3 h-[40px] w-[40px] cursor-pointer rounded-[50%] bg-black'></div>
                  <div className='w-[65%] overflow-hidden text-ellipsis whitespace-nowrap '>
                    <h5 className='font-semibold'>Hoàng Anh Tuấn</h5>
                    <p className='text-[12px] text-[#757575]'>hoanganhtuan@gmail.com</p>
                  </div>
                </div>
                <Link className='block' to='/user'>
                  Hồ sơ
                </Link>
              </div>
            }
            className='w-[250px] rounded bg-white px-5 py-6 shadow-3xl'
          >
            <div className=''>
              <div className='ml-3 h-[40px] w-[40px] cursor-pointer rounded-[50%] bg-black'></div>
            </div>
          </ClickPopover>
        </div>
      </div>
    </>
  )
}

export default NavbarUser
