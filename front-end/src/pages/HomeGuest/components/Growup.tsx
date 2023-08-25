import React from 'react'
import shape from '../../../assets/images/shape.png'

function Growup() {
  return (
    <>
      <section className='relative'>
        <div className='m-auto flex w-full max-w-[1320px] flex-wrap items-center'>
          <div className='w-full px-[12px] lg:w-[50%]'>
            <div className='m-auto w-[100%] lg:w-[60%]'>
              <img className='m-auto' src='http://localhost:1337/uploads/skil_01_e184d7cfa0.png' alt='hình ảnh' />
            </div>
          </div>
          <div className='w-full px-[12px] lg:w-[50%]'>
            <div className=''>
              <div className='max-426:px-0 my-auto p-[12px]'>
                <span className=' text-[20px] font-semibold leading-[150%] text-mainGreenColor'>Growup Your Skill</span>
                <h1 className='pb-[24px] pt-[15px] text-[20px] font-bold leading-[120%] text-[#324FA2] lg:text-[32px]'>
                  Learn Anything you want today
                </h1>
                <p className='text-[16px] font-normal leading-[150%] text-[#5C5C5C]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam dolor fermentum massa viverra congue
                  proin. A volutpat eget ultrices velit nunc orci. Commodo quis integer a felis ac vel mauris a morbi.
                  Scelerisque nunc accumsan elementum aenean nisl lacinia. Congue enim aliquet ac vitae turpis. Neque,
                  bibendum imperdiet sed ullamcorper morbi amet. Facilisi odio amet, nunc quam ut nulla purus adipiscing
                  pharetra.
                </p>
                <button className='mt-[50px] flex h-[50px] items-center justify-center rounded-[5px] bg-mainGreenColor px-[46px] py-[13px] text-[16px] font-bold leading-[150%] text-[#FFF]'>
                  Join Today
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='absolute bottom-1 right-1'>
          <img src={shape} alt='icon' />
        </div>
      </section>
    </>
  )
}

export default Growup
