import React, { useState } from 'react'
import { FaPlus, FaHome, FaRoad, FaMicroblog, FaHourglassHalf } from 'react-icons/fa'

import { Link } from 'react-router-dom'
function SidebarUser() {
  return (
    <>
      <div className='sticky left-0 top-[94px] flex w-[96px] flex-col items-center px-[8px]'>
        <div className='flex h-[45px] w-[45px] cursor-pointer items-center justify-center rounded-[50px] bg-[#1e7115] py-4 text-xl text-white transition hover:bg-[#103a0b]'>
          <FaPlus />
        </div>
        <Link
          to='/user'
          className='mt-3 flex h-[72px] w-[72px] cursor-pointer flex-col items-center justify-center rounded-[16px] text-2xl text-zinc-900 transition hover:bg-[#e8ebed]'
        >
          <FaHome />
          <div className='text-sm'>Home</div>
        </Link>
        <Link
          to='/user'
          className='mt-3 flex h-[72px] w-[72px] cursor-pointer flex-col items-center justify-center rounded-[16px] text-2xl text-zinc-900 transition hover:bg-[#e8ebed]'
        >
          <FaRoad />
          <div className='text-sm'>Lộ trình</div>
        </Link>
        <Link
          to='/user'
          className='mt-3 flex h-[72px] w-[72px] cursor-pointer flex-col items-center justify-center rounded-[16px] text-2xl text-zinc-900 transition hover:bg-[#e8ebed]'
        >
          <FaMicroblog />
          <div className='text-sm'>Tin tức</div>
        </Link>
        <Link
          to='/user'
          className='mt-3 flex h-[72px] w-[72px] cursor-pointer flex-col items-center justify-center rounded-[16px] text-2xl text-zinc-900 transition hover:bg-[#e8ebed]'
        >
          <FaHourglassHalf />
          <div className='text-sm'>Học</div>
        </Link>
      </div>
    </>
  )
}

export default SidebarUser
