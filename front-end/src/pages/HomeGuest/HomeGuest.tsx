import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from 'src/context/app.context'
import { useQuery } from '@tanstack/react-query'
import courseApi from 'src/apis/course.api'
import logo from 'src/assets/logo.png'
import MainMenu from './components/MainMenu'
import Couter from './components/Couter'
import ListCategory from './components/ListCategory'

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
        <div className='w-[100px]'>
          <img src={logo} alt='logo web' />
        </div>
        <div className='w-[40%]'>
          <MainMenu />
        </div>
        <div className=''>
          <button className='mr-[20px] rounded-[5px] bg-[#392C7D] px-[45px] py-[10px] text-white transition hover:bg-[#2a205c]'>
            <Link to='/login'>Đăng nhập</Link>
          </button>
          <button className='rounded-[5px] bg-[#1e7115] px-[45px] py-[10px] text-white transition hover:bg-[#173d13] '>
            <Link to='/register'>Đăng kí</Link>
          </button>
        </div>
      </div>
      <section>
        <div className='relative '>
          <div className='absolute'>
            <img src='' alt='' />
          </div>
          <div className='absolute'>
            <img src='' alt='' />
          </div>
        </div>
      </section>
      <Couter />
      <ListCategory />
    </>
  )
}

export default HomeGuest
