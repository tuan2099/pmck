import classNames from 'classnames'
import { FaPlus, FaHome, FaRoad, FaMicroblog, FaHourglassHalf } from 'react-icons/fa'
import Dialog from '@mui/material/Dialog'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import Tooltip from '@mui/material/Tooltip'
import { Fab } from '@mui/material'

function SidebarUser() {
  const [openDialog, setOpenDialog] = useState<boolean>(false)
  const handleClickOpen = () => {
    setOpenDialog(true)
  }

  const handleClose = () => {
    setOpenDialog(false)
  }

  return (
    <>
      <div className='sticky left-0 top-[94px] flex w-[96px] flex-col items-center px-[8px]'>
        <Fab color='primary' aria-label='add'>
          <FaPlus />
        </Fab>
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
          <FaHome className='text-color1' />
          <div className='text-sm text-color1'>Home</div>
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
          <FaRoad className='text-color1' />
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
          <FaMicroblog className='text-color1' />
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
          <FaHourglassHalf className='text-color1' />
          <div className='text-sm'>Học</div>
        </NavLink>
      </div>
      <div className='fixed bottom-5 left-4 rounded-full p-3'>
        <Tooltip title='Bảng tin' onClick={handleClickOpen} className=''>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-[50px] w-[50px] cursor-pointer rounded-full bg-[#f3f3f3]  p-3 transition hover:bg-[#c4c4c4]'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z'
            />
          </svg>
        </Tooltip>
      </div>
      <Dialog open={openDialog} onClose={handleClose} maxWidth='lg' fullWidth>
        <div className='p-6 '>
          <div className='flex justify-between'>
            <h2 className='text-2xl font-bold'>Bản tin PMCK</h2>
            <button className='cursor-pointer' onClick={handleClose}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
          </div>
          <div style={{ height: 'calc(100vh - 200px)' }}></div>
        </div>
      </Dialog>
    </>
  )
}

export default SidebarUser
