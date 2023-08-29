import React from 'react'
import { Link } from 'react-router-dom'
import Footer from 'src/components/Footer'
import MainMenu from 'src/components/HomeGuestmenu/MainMenu'
import MobileMenu from 'src/components/HomeGuestmenu/MobileMenu'
import logo from 'src/assets/logo.png'

interface Props {
  children?: React.ReactNode
}

function GuestLayout({ children }: Props) {
  return (
    <>
      <div className='m-auto flex w-full max-w-[1296px] items-center justify-between px-[12px]'>
        <div className='flex w-full items-center justify-between py-2 md:w-[100px] lg:py-0'>
          <MobileMenu />
          <img className='w-[100px]' src={logo} alt='logo web' />
        </div>
        <div className='hidden lg:block lg:w-[50%] xl:w-[40%]'>
          <MainMenu />
        </div>
        <div className='hidden md:block'>
          <button className='mr-[20px] rounded-[5px] bg-[#392C7D] px-[45px] py-[10px] text-white transition hover:bg-[#2a205c]'>
            <Link to='/login'>Đăng nhập</Link>
          </button>
          <button className='rounded-[5px] bg-[#1e7115] px-[45px] py-[10px] text-white transition hover:bg-[#173d13] '>
            <Link to='/register'>Đăng kí</Link>
          </button>
        </div>
      </div>
      {children}
      <Footer />
    </>
  )
}

export default GuestLayout
