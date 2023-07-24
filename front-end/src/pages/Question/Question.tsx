import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
function Question() {
  return (
    <>
      <div className='m-auto w-full max-w-[1200px] py-[25px]'>
        <div role='presentation'>
          <Breadcrumbs aria-label='breadcrumb'>
            <Link underline='hover' color='inherit' href='/'>
              MUI
            </Link>
            <Link underline='hover' color='inherit' href='/material-ui/getting-started/installation/'>
              Core
            </Link>
            <p color='text.primary'>Breadcrumbs</p>
          </Breadcrumbs>
        </div>
      </div>
      <div className='w-full py-[88px] text-center'>
        <h1 className='text-4xl font-semibold text-white'>Most frequently asked questions</h1>
      </div>
      <div className='pt-[80px]'>
        <div className='m-auto w-full max-w-[1200px] py-[25px]'>
          <div className=''>
            <h3>Here are the most frequently asked questions you may check before getting started</h3>
          </div>
          <div className=''>st</div>
        </div>
      </div>
    </>
  )
}

export default Question
