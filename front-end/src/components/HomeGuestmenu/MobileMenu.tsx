import React, { useState } from 'react'
import { IconButton } from '@mui/material'
import Drawer from '@mui/material/Drawer'

function MobileMenu() {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)

  const toogleDrawer = () => {
    setOpenDrawer(!openDrawer)
  }
  return (
    <>
      <div className='block lg:hidden'>
        <IconButton onClick={toogleDrawer}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='mr-[20px] h-8 w-8 font-bold'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
          </svg>
        </IconButton>
        <Drawer open={openDrawer} anchor='left' onClose={toogleDrawer}>
          <div className='w-[43%] min-w-[300px] max-w-full md:min-w-[500px]'>
            <div className='p-6'>
              <h2 className='text-2xl font-bold'>Ghi chú của tôi</h2>
            </div>
            <div className='p-6'>1</div>
          </div>
        </Drawer>
      </div>
    </>
  )
}

export default MobileMenu
