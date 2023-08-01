import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from 'src/assets/logo.png'
import ClickPopover from '../ClickPopover'
import { AppContext } from 'src/context/app.context'
import { useQuery } from '@tanstack/react-query'
import profileApi from 'src/apis/user.api'
import ProfileUser from './component/ProfileUser'
import Notification from './component/Notification'
function NavbarUser() {
  // call api userinfo
  const { data: profileData } = useQuery({
    queryKey: ['userInfo'],
    queryFn: () => profileApi.getProfile()
  })
  //

  return (
    <>
      <div className='sticky left-0 right-0 top-0 z-[2] flex items-center justify-between border-b border-[#e8ebed] bg-white px-7 py-2'>
        <div className='w-[100px]'>
          <Link to='/user'>
            <img className='w-full' src={logo} alt='logo website' />
          </Link>
        </div>
        <div className='flex items-center'>
          <Link className='mr-4' to='/my-course'>
            Khóa học của tôi
          </Link>
          <Notification />
          <ProfileUser />
        </div>
      </div>
    </>
  )
}

export default NavbarUser
