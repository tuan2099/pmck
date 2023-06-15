import React from 'react'
import { Link } from 'react-router-dom'

function New() {
  return (
    <>
      <div className='ml-[50px] mt-5'>
        <h1 className='mb-9 text-3xl font-bold'>Tin tức</h1>
        <div className='w-full max-w-[1200px]'>
          <Link to='#' className='items-top mt-9 flex justify-between'>
            <div
              className='h-[200px] w-[320px]'
              style={{
                backgroundImage: `url(https://s.yimg.com/uu/api/res/1.2/oQKpsTXFNIBRlSHS0CuHvg--~B/Zmk9ZmlsbDtoPTQyMTtweW9mZj0wO3c9NjQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/os/creatr-uploaded-images/2023-06/b6a8d170-0b45-11ee-aff6-e44b47dd4bfe.cf.webp)`
              }}
            ></div>
            <div className=''>
              <h3 className='w-8/12 text-2xl font-bold'>
                EU officials pass draft law to regulate AI and ban facial recognition systems
              </h3>
              <br />
              <p className='line-clamp-2 text-slate-400'>They are hoping to pass the final version later this year</p>
              <div className='mt-2  flex'>
                <div
                  className='mr-4 h-[30px] w-[30px] rounded-full'
                  style={{
                    backgroundImage: `url(https://s.yimg.com/uu/api/res/1.2/oQKpsTXFNIBRlSHS0CuHvg--~B/Zmk9ZmlsbDtoPTQyMTtweW9mZj0wO3c9NjQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/os/creatr-uploaded-images/2023-06/b6a8d170-0b45-11ee-aff6-e44b47dd4bfe.cf.webp)`
                  }}
                ></div>
                <p>Tác giả: </p>
                <p>, vài giờ trước</p>
              </div>
            </div>
          </Link>
          <Link to='#' className='items-top mt-9 flex justify-between'>
            <div
              className='h-[200px] w-[320px]'
              style={{
                backgroundImage: `url(https://s.yimg.com/uu/api/res/1.2/oQKpsTXFNIBRlSHS0CuHvg--~B/Zmk9ZmlsbDtoPTQyMTtweW9mZj0wO3c9NjQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/os/creatr-uploaded-images/2023-06/b6a8d170-0b45-11ee-aff6-e44b47dd4bfe.cf.webp)`
              }}
            ></div>
            <div className=''>
              <h3 className='w-8/12 text-2xl font-bold'>
                EU officials pass draft law to regulate AI and ban facial recognition systems
              </h3>
              <br />
              <p className='line-clamp-2 text-slate-400'>They are hoping to pass the final version later this year</p>
              <div className='mt-2  flex'>
                <div
                  className='mr-4 h-[30px] w-[30px] rounded-full'
                  style={{
                    backgroundImage: `url(https://s.yimg.com/uu/api/res/1.2/oQKpsTXFNIBRlSHS0CuHvg--~B/Zmk9ZmlsbDtoPTQyMTtweW9mZj0wO3c9NjQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/os/creatr-uploaded-images/2023-06/b6a8d170-0b45-11ee-aff6-e44b47dd4bfe.cf.webp)`
                  }}
                ></div>
                <p>Tác giả: </p>
                <p>, vài giờ trước</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default New
