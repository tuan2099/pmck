import React from 'react'
import img1count from '../../../assets/images/img1count.png'
import img2count from '../../../assets/images/img2count.png'
import img3count from '../../../assets/images/img3count.png'
import img4count from '../../../assets/images/img4count.png'

function Couter() {
  return (
    <>
      <div className='max-1618:mx-[72px] max-769:mx-[12px] max-426:mx-0 max-769:grid-cols-1 mx-[300px] grid grid-cols-2'>
        <div className='max-769:order-2 max-600:order-1 max-426:px-0 px-[12px]'>
          <span className='max-1041:text-[#1e7115] text-[20px] font-semibold leading-[150%] text-[#1e7115]'>
            Learn with DreamLMS
          </span>
          <h1 className='max-600:text-[20px]  mb-[50px] pt-[15px] text-[32px] font-bold leading-[120%] text-[#4F4F4F]'>
            Get Trained By Experts & Professionals around the World
          </h1>
          <p className='max-600:text-[15px] mb-[50px] text-[16px] leading-[150%]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam dolor fermentum massa viverra congue proin. A
            volutpat eget ultrices velit nunc orci. Commodo quis integer a felis ac vel mauris a morbi. Scelerisque nunc
            accumsan elementum aenean nisl lacinia. Congue enim aliquet ac vitae turpis. Neque, bibendum imperdiet sed
            ullamcorper morbi amet. Facilisi odio amet, nunc quam ut nulla purus adipiscing pharetra.
          </p>
          <button className='max-1041:bg-orange1040 flex h-[50px] items-center justify-center rounded-[5px] bg-[#1e7115] px-[46px] py-[13px] text-[16px] font-bold leading-[150%] text-[#FFF]'>
            Learn more
          </button>
        </div>
        <div>
          <div>
            <div className='flex flex-wrap'>
              <div className='w-[50%] p-[12px]'>
                <div className='mb-24px flex h-[300px] items-center justify-center rounded-[10px] border bg-white shadow-blue-custom'>
                  <div className='text-center'>
                    <div className='text-center'>
                      <img className='m-auto' src={img1count} alt='img' />
                    </div>
                    <div>
                      <h4 className='mt-[20px] text-[28px] font-bold uppercase text-[#21B477]'>Tiêu đề</h4>
                      <p className='text-[20px] font-medium text-[#5C5C5C]'>mô tả</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-[50%] p-[12px]'>
                <div className='mb-24px mt-[-33px] flex h-[300px] items-center justify-center rounded-[10px] border bg-white shadow-blue-custom'>
                  <div className='text-center'>
                    <div className='text-center'>
                      <img className='m-auto' src={img1count} alt='img' />
                    </div>
                    <div>
                      <h4 className='mt-[20px] text-[28px] font-bold uppercase text-[#21B477]'>Tiêu đề</h4>
                      <p className='text-[20px] font-medium text-[#5C5C5C]'>mô tả</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-[50%] p-[12px]'>
                <div className='mb-24px flex h-[300px] items-center justify-center rounded-[10px] border bg-white shadow-blue-custom'>
                  <div className='text-center'>
                    <div className='text-center'>
                      <img className='m-auto' src={img1count} alt='img' />
                    </div>
                    <div>
                      <h4 className='mt-[20px] text-[28px] font-bold uppercase text-[#21B477]'>Tiêu đề</h4>
                      <p className='text-[20px] font-medium text-[#5C5C5C]'>mô tả</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-[50%] p-[12px]'>
                <div className='mb-24px mt-[-33px] flex h-[300px] items-center justify-center rounded-[10px] border bg-white shadow-blue-custom'>
                  <div className='text-center'>
                    <div className='text-center'>
                      <img className='m-auto' src={img1count} alt='img' />
                    </div>
                    <div>
                      <h4 className='mt-[20px] text-[28px] font-bold uppercase text-[#21B477]'>Tiêu đề</h4>
                      <p className='text-[20px] font-medium text-[#5C5C5C]'>mô tả</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Couter
