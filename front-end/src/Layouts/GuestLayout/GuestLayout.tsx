import React from 'react'
import { Link } from 'react-router-dom'
import Footer from 'src/components/Footer'
import MainMenu from 'src/components/HomeGuestmenu/MainMenu'
import MobileMenu from 'src/components/HomeGuestmenu/MobileMenu'
import logo from 'src/assets/logo.png'
import mainmenuApi from 'src/apis/menuApi'
import { useQuery } from '@tanstack/react-query'
interface Props {
  children?: React.ReactNode
}

function GuestLayout({ children }: Props) {
  const {
    data: mainMenuData,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['mainMenuData'],
    queryFn: () => {
      return mainmenuApi.getMainmenu()
    }
  })

  return (
    <>
      <div className='m-auto flex w-full max-w-[1296px] items-center justify-between px-[12px]'>
        <div className='flex w-full items-center justify-between py-2 md:w-[100px] lg:py-0'>
          <MobileMenu mainMenuData={mainMenuData} isLoading={isLoading} />
          <img className='w-[100px]' src={logo} alt='logo web' />
        </div>
        <div className='hidden lg:block lg:w-[50%] xl:w-[40%]'>
          <MainMenu mainMenuData={mainMenuData} isLoading={isLoading} />
        </div>
        <div className='hidden md:block'>
          <Link to='/login'>
            <button className='mr-[20px] rounded-[5px] bg-[#392C7D] px-[45px] py-[10px] text-white transition hover:bg-[#2a205c] font-semibold'>
              Đăng nhập
            </button>
          </Link>
          <Link to='/register'>
            <button className='rounded-[5px] bg-[#1e7115] px-[45px] py-[10px] text-white transition hover:bg-[#173d13] font-semibold'>
              Đăng kí
            </button>
          </Link>
        </div>
      </div>
      {children}
      <Footer />
    </>
  )
}

export default GuestLayout
