import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div className='bg-[#181821] pb-[50px] pt-[65px] text-[#a9b3bb]'>
        <div className='m-auto w-full max-w-[1200px]'>
          <div className='items-top flex'>
            <section className='w-[25%]'>
              <div className='flex items-center'>
                <div className='w-[150px]'>
                  <img
                    src='http://pmck.edu.vn/pluginfile.php?file=%2F1%2Fcore_admin%2Flogo%2F0x200%2F1690251971%2F0-02-06-7c2ba00628a20db1f8c16af29956aeced5c3be147c7dce623d015a186215ec54_a055d16eb5cfa30a.png'
                    alt='logo'
                  />
                </div>
                <h4 className='border-l-2 border-[#a9b3bb] pl-[10px] font-semibold uppercase'>
                  Nền tảng đào tạo nghề quản lý bất động sản
                </h4>
              </div>
              <p className='mt-[30px]'>
                PMC Knowledge cung cấp các chương trình đào tạo on the job training về chuyên môn, kiến thức, kỹ năng
                cần thiết trong lĩnh dịch vụ Bất động sản.
              </p>
            </section>
            <section>
              <h4>Về PMCK</h4>
              <p></p>
            </section>
            <section></section>
            <section></section>
            <section></section>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
