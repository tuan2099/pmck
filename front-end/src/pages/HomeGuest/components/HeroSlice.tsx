import { Link } from 'react-router-dom'

function HeroSlice() {
  return (
    <>
      <section
        className='relative bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: 'url(https://dreamslms.dreamguystech.com/html/assets/img/bg/home-main.png)' }}
      >
        <div className='m-auto w-full max-w-[1320px]'>
          <div className='absolute'>
            <img src='' alt='' />
          </div>
          <div className='flex flex-wrap items-center justify-between'>
            <div className='w-full px-[12px] py-[40px] lg:w-1/2 '>
              <p className='text-center text-2xl font-bold italic text-[#392c7d] lg:text-left'>
                Luôn luôn đi đầu trong lĩnh vực dạy học
              </p>
              <h1 className='text-center text-[35px] font-bold text-mainGreenColor lg:text-left lg:text-[55px] 2xl:text-[50px]'>
                Học tập trực tuyến và dễ dàng tiếp cận
              </h1>
              <button className='m-auto mt-[20px] flex justify-center rounded-[5px] bg-[#392c7d] px-[45px] py-[10px] text-center text-white transition hover:bg-[#1d163f] lg:mx-0 '>
                <Link to='/register' className='flex items-center font-semibold'>
                  Bát đầu học{' '}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='ml-3 h-6 w-6'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3' />
                  </svg>
                </Link>
              </button>
              <div></div>
            </div>
            <div className='hidden w-full lg:block lg:w-1/2'>
              <img src='http://localhost:1337/uploads/6454c59d7ae02da4b6083c29_header_web2x_2_3ae9db7b6f.jpg' alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSlice
