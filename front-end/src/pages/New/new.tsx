import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Link } from 'react-router-dom'
import newApi from 'src/apis/new.api'

function New() {
  const { data: newsData } = useQuery({
    queryKey: ['sliderImage'],
    queryFn: () => {
      return newApi.getSlider()
    }
  })

  return (
    <>
      <div className='ml-[50px] mt-5'>
        <h1 className='mb-9 text-3xl font-bold'>Tin tức</h1>
        <div className='w-full max-w-[1200px]'>
          {newsData &&
            newsData.data.data.map((item: any) => {
              return (
                <Link key={item.id} to='#' className='items-top mt-9 flex'>
                  <div
                    className='h-[200px] w-[30%] bg-cover bg-center bg-no-repeat'
                    style={{
                      backgroundImage: `url(https://s.yimg.com/uu/api/res/1.2/oQKpsTXFNIBRlSHS0CuHvg--~B/Zmk9ZmlsbDtoPTQyMTtweW9mZj0wO3c9NjQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/os/creatr-uploaded-images/2023-06/b6a8d170-0b45-11ee-aff6-e44b47dd4bfe.cf.webp)`
                    }}
                  ></div>
                  <div className='w-[65%] px-4'>
                    <h3 className='w-8/12 text-2xl font-bold'>{item.attributes.title}</h3>
                    <br />
                    <p className='line-clamp-2 text-slate-400'>{item.attributes.description}</p>
                    <div className='mt-2 flex'>
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
              )
            })}
        </div>
      </div>
    </>
  )
}

export default New
