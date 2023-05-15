import classNames from 'classnames'
import React, { useState } from 'react'
import { FaPlus, FaHome, FaRoad, FaMicroblog, FaHourglassHalf } from 'react-icons/fa'

import { Link, NavLink } from 'react-router-dom'

function SidebarUser() {
  return (
    <>
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
          to='/'
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
          to='/'
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
    </>
  )
}

export default SidebarUser
