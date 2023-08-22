import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from 'src/context/app.context'
import { useQuery } from '@tanstack/react-query'
import courseApi from 'src/apis/course.api'
import logo from 'src/assets/logo.png'
import MainMenu from './components/HomeGuestmenu/MainMenu'
import Couter from './components/Couter'
import ListCategory from './components/ListCategory'
import Growup from './components/Growup'
import InfoCertified from './components/InfoCertified'
import Mentor from './components/Mentor'
import Teacher from './components/Teacher'
import HeroSlice from './components/HeroSlice'
import Event from './components/Event'
import MobileMenu from './components/HomeGuestmenu/MobileMenu'

function HomeGuest() {
  const { isAuthenticated } = useContext(AppContext)

  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) navigate('/user')
  }, [isAuthenticated])

  // const { data: featuredCourse } = useQuery({
  //   queryKey: ['FeaturedCourse'],
  //   queryFn: () => courseApi.getCourse()
  // })

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
      <HeroSlice />
      <Couter />
      <ListCategory />
      <Growup />
      <InfoCertified />
      <Teacher />
      <Mentor />
      <Event />
    </>
  )
}

export default HomeGuest
