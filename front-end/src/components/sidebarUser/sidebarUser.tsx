import classNames from 'classnames'
import { FaPlus, FaHome, FaRoad, FaMicroblog, FaHourglassHalf } from 'react-icons/fa'
import Dialog from '@mui/material/Dialog'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

function SidebarUser() {
  const [openDialog, setOpenDialog] = useState<boolean>(false)
  const handleClickOpen = () => {
    setOpenDialog(true)
  }

  const handleClose = () => {
    setOpenDialog(false)
  }

  return (
    <div className='flex flex-col justify-between'>
      <div className='sticky left-0 top-[94px] flex w-[96px] flex-col items-center px-[8px]'>
        <div className='flex h-[45px] w-[45px] cursor-pointer items-center justify-center rounded-[50px] bg-[#1e7115] py-4 text-xl text-white transition hover:bg-[#103a0b]'>
          <FaPlus />
        </div>
        <NavLink
          to='/user'
          className={({ isActive }) =>
            classNames(
              'mt-3 flex h-[72px] w-[72px] cursor-pointer flex-col items-center justify-center rounded-[16px] text-2xl text-zinc-900 transition hover:bg-[#e8ebed]',
              {
                'bg-[#e8ebed]': isActive
              }
            )
          }
        >
          <FaHome />
          <div className='text-sm'>Home</div>
        </NavLink>
        <NavLink
          to='/learning-paths'
          className={({ isActive }) =>
            classNames(
              'mt-3 flex h-[72px] w-[72px] cursor-pointer flex-col items-center justify-center rounded-[16px] text-2xl text-zinc-900 transition hover:bg-[#e8ebed]',
              {
                'bg-[#e8ebed]': isActive
              }
            )
          }
        >
          <FaRoad />
          <div className='text-sm'>Lộ trình</div>
        </NavLink>
        <NavLink
          to='/new'
          className={({ isActive }) =>
            classNames(
              'mt-3 flex h-[72px] w-[72px] cursor-pointer flex-col items-center justify-center rounded-[16px] text-2xl text-zinc-900 transition hover:bg-[#e8ebed]',
              {
                'bg-[#e8ebed]': isActive
              }
            )
          }
        >
          <FaMicroblog />
          <div className='text-sm'>Tin tức</div>
        </NavLink>
        <NavLink
          to='/courses'
          className={({ isActive }) =>
            classNames(
              'mt-3 flex h-[72px] w-[72px] cursor-pointer flex-col items-center justify-center rounded-[16px] text-2xl text-zinc-900 transition hover:bg-[#e8ebed]',
              {
                'bg-[#e8ebed]': isActive
              }
            )
          }
        >
          <FaHourglassHalf />
          <div className='text-sm'>Học</div>
        </NavLink>
      </div>
      <button onClick={handleClickOpen} className='fixed bottom-5 left-1 bg-slate-400 p-5'>
        Pop-up
      </button>
      <Dialog open={openDialog} onClose={handleClose}>
        <div className='h-72 w-60 bg-white'></div>
      </Dialog>
    </div>
  )
}

export default SidebarUser
