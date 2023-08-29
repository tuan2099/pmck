import { FaCalendarAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Event() {
  return (
    <>
      <section className='m-auto max-w-[1320px]'>
        <div className='my-[50px] px-[10px] text-center'>
          <p className='text-[20px] font-semibold leading-[150%] text-mainGreenColor'>New Courses</p>
          <h2 className='pb-[24px] pt-[15px] text-[20px] font-bold leading-[120%] text-[#4F4F4F] lg:text-[32px]'>
            Featured Instructor
          </h2>
        </div>
        <div className='flex flex-wrap items-center justify-between'>
          <div className='w-4/12 px-[12px]'>
            <div className='relative'>
              <div className='relative mb-[10px] overflow-hidden'>
                <div className='relative overflow-hidden rounded-[5px] before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-gradient-to-b before:from-color4 before:to-color5 before:content-[""]'>
                  <Link to='/' className=''>
                    <img
                      className='w-full rounded-[5px]'
                      src='https://dreamslms.dreamguystech.com/html/assets/img/blog/blog-01.jpg'
                      alt=''
                    />
                  </Link>
                </div>
              </div>
              <div className='absolute bottom-0 left-0 z-10 w-full p-[20px]'>
                <div>
                  <span className='mb-[10px] min-w-[90px] rounded-[4px] bg-mainGreenColor p-[5px] text-[16px] font-bold text-white '>
                    Maketing
                  </span>
                </div>
                <h5 className='mt-3 text-[22px] font-bold text-white'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h5>
                <p className='flex items-center text-[16px] text-white'>
                  <FaCalendarAlt /> <span className='ml-2'>June 15, 2022</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Event
