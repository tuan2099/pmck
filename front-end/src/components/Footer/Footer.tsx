import { Skeleton } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { FaFacebookSquare, FaViber, FaYoutube, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import footerApi from 'src/apis/footer.api'
import logo from 'src/assets/logo.png'

function Footer() {
  const {
    data: footerData,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['footerdata'],
    queryFn: () => {
      return footerApi.getFooter()
    }
  })
  return (
    <footer>
      <div className='bg-[#181821] pb-[50px] pt-[65px] text-[#a9b3bb]'>
        <div className='m-auto w-full max-w-[1320px]'>
          <div className='items-top flex flex-wrap justify-between'>
            <section className='m-auto w-full px-[12px] md:w-[45%] lg:w-[25%]'>
              <div className='flex items-center'>
                <div className='w-[150px] pr-[10px]'>
                  <img src={logo} alt='logo' />
                </div>
                <h4 className='border-l-1 border-[#a9b3bb] pl-[10px] font-semibold uppercase'>
                  Nền tảng đào tạo nghề quản lý bất động sản
                </h4>
              </div>
              <p className='mt-[30px]'>
                PMC Knowledge cung cấp các chương trình đào tạo on the job training về chuyên môn, kiến thức, kỹ năng
                cần thiết trong lĩnh dịch vụ Bất động sản.
              </p>
            </section>
            {footerData &&
              footerData.data?.data?.attributes.body.map((footerdata: any) => {
                return (
                  <section
                    key={footerdata.id}
                    className='m-auto mt-[30px] w-full px-[12px] md:my-1 md:mt-0 md:w-[45%] lg:w-[25%]'
                  >
                    <h4 className='font-semibold uppercase'>{footerdata.sections.data[0].attributes.label}</h4>
                    <ul className='leading-[40px] md:mt-[30px]'>
                      {footerdata.sections.data[0].attributes.links.map((items: any) => {
                        return (
                          <li key={items.id}>
                            <Link to={`/${items.url}`}>{items.label}</Link>
                          </li>
                        )
                      })}
                    </ul>
                  </section>
                )
              })}
            {isLoading && (
              <>
                <div className='flex flex-wrap items-center justify-between'>
                  <Skeleton variant='circular' height={240} />
                  <Skeleton variant='circular' height={240} />
                  <Skeleton variant='circular' height={240} />
                </div>
              </>
            )}
          </div>

          <div className='m-auto my-8 h-[1px] w-10/12 bg-[#555555]'></div>
          <div className=''>
            <div className='flex items-center justify-center'>
              <h4 className='font-semibold uppercase text-white'>PMC Knowledge</h4>
            </div>
            <div className='my-5 flex items-center justify-center '>
              <Link to='/'>
                <FaFacebookSquare className='text-2xl' />
              </Link>
              <Link to='/'>
                <FaYoutube className='mx-9 text-2xl' />
              </Link>
              <Link to='/'>
                <FaViber className='text-2xl' />
              </Link>
              <Link to='/'>
                <FaTwitter className='ml-9 text-2xl' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
