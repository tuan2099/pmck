import { Avatar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Cardnew() {
  return (
    <>
      <Link to='/' className='mb-[30px] w-full cursor-pointer px-3'>
        <div
          className='w-full rounded-2xl pt-[56.25%]'
          style={{
            backgroundImage:
              'url(http://pmck.edu.vn/pluginfile.php?file=%2F19%2Fcourse%2Foverviewfiles%2F230203%20-%20poster%20Mr%20S%C6%A1n%20-%20l%E1%BB%9Bp%20k%E1%BA%BF%20to%C3%A1n%20%28%E1%BA%A3nh%20n%E1%BB%81n%20kh%C3%B3a%20h%E1%BB%8Dc%29.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <h5 className='overflow-hiden mt-[5px] truncate text-[16px] font-semibold leading-snug text-[#292929]'>
          something PMC Knowledge cung cấp các chương trình đào tạo on the job training về PMC Knowledge cung cấp các
          chương trình đào tạo on the job training về
        </h5>
        <div className='mt-2 flex items-center'>
          <Avatar alt='Admin PMC' src='/static/images/avatar/1.jpg' sx={{ width: 24, height: 24 }} />
          <h5 className='mx-4'>Admin PMC</h5>
          <p>3 phút đọc</p>
        </div>
      </Link>
    </>
  )
}

export default Cardnew
