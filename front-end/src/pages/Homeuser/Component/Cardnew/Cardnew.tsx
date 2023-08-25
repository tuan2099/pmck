import { Avatar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Cardnew(newsData: any) {
  return (
    <>
      {newsData &&
        newsData.newsData?.data?.data?.map((item: any) => {
          return (
            <Link to='/' key={item.id} className='mb-[30px] w-full cursor-pointer px-3'>
              <div
                className='w-full rounded-2xl pt-[56.25%]'
                style={{
                  backgroundImage: `url(http://localhost:1337${item.attributes.banner_new.data[0].attributes.url})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              ></div>
              <h5 className='overflow-hiden mt-[5px] truncate text-[16px] font-semibold leading-snug text-[#292929]'>
                {item.attributes.title}
              </h5>
              <div className='mt-2 flex items-center'>
                <Avatar alt='Admin PMC' src='/static/images/avatar/1.jpg' sx={{ width: 24, height: 24 }} />
                <h5 className='mx-4'>Admin PMC</h5>
                <p>3 phút đọc</p>
              </div>
            </Link>
          )
        })}
    </>
  )
}

export default Cardnew
