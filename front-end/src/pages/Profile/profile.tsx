import React from 'react'
import Boxwrapper from './Component/Box-wrapper'

function Profile() {
  return (
    <>
      <div>
        <main className='p-12 '>
          <div className='flex items-center justify-between px-12'>
            <div className='w-full max-w-[25%] p-4'>
              <Boxwrapper>
                <div className=''></div>
                <h2 className='bg-white text-center text-3xl font-semibold leading-9'>Tuan hoang</h2>
              </Boxwrapper>
            </div>
            <div className='w-full max-w-[75%] p-4'>2</div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Profile
