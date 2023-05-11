import React from 'react'
import { Link } from 'react-router-dom'
import logo from 'src/assets/logo.png'

function NavbarUser() {
  return (
    <>
      <div className='sticky left-0 right-0 top-0 flex items-center justify-between border-b border-[#e8ebed] bg-white px-7 py-2'>
        <div className='w-[100px]'>
          <img className='w-full' src={logo} alt='logo website' />
        </div>
        <div className=''>
          <Link to='/user'>Khóa học của tôi</Link>
        </div>
      </div>
    </>
  )
}

export default NavbarUser
