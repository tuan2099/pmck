import React from 'react'
import { FaFacebookSquare, FaViber, FaYoutube, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from 'src/assets/logo.png'

function Footer() {
  return (
    <footer>
      <div className='bg-[#181821] pb-[50px] pt-[65px] text-[#a9b3bb]'>
        <div className='m-auto w-full max-w-[1200px]'>
          <div className='items-top flex justify-between'>
            <section className='w-[25%]'>
              <div className='flex items-center'>
                <div className='w-[150px] pr-[10px]'>
                  <img src={logo} alt='logo' />
                </div>
                <h4 className='border-l-1 border-[#a9b3bb] pl-[10px] font-semibold uppercase'>
                  Nền tảng đào tạo nghề quản lý bất động sản
                </h4>
              </div>
              <p className='mt-[30px]'>
                PMC Knowledge cung cấp các chương trình đào tạo on the job training về chuyên môn, kiến thức, kỹ năng
                cần thiết trong lĩnh dịch vụ Bất động sản.
              </p>
            </section>
            <section>
              <h4 className=' font-semibold uppercase'>Về PMCK</h4>
              <p></p>
            </section>
            <section>
              <h4 className=' font-semibold uppercase'>Cộng đồng PMCK</h4>
              <p></p>
            </section>
            <section>
              <h4 className=' font-semibold uppercase'>Liên hệ</h4>
              <p></p>
            </section>
          </div>
          <div className='m-auto my-8 h-[1px] w-10/12 bg-[#555555]'></div>
          <div className=''>
            <div className='flex items-center justify-center'>
              <h4 className='font-semibold uppercase text-white'>PMC Knowledge</h4>
            </div>
            <div className='my-5 flex items-center justify-center '>
              <FaFacebookSquare className='text-2xl' />
              <FaYoutube className='mx-9 text-2xl' />
              <FaViber className='text-2xl' />
              <FaTwitter className='ml-9 text-2xl' />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
