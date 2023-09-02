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
                <span className=' text-[20px] font-semibold italic leading-[150%] text-mainGreenColor'>
                  Phát triển kĩ năng
                </span>
                <h1 className='pb-[24px] pt-[15px] text-[20px] font-bold leading-[120%] text-[#324FA2] lg:text-[32px]'>
                  Khám phá bất cứ điều gì bạn muốn
                </h1>
                <p className='text-[16px] font-normal leading-[150%] text-[#5C5C5C]'>
                  Hãy khám phá và tiếp thu mọi kiến thức bạn mong muốn với danh mục khóa học nghề quản lý bất động sản.
                  Chắc chắn rằng bạn sẽ được trang bị đầy đủ để đối mặt với bất kỳ thách thức nào trong lĩnh vực này.
                </p>
                <button className='mt-[50px] flex h-[50px] items-center justify-center rounded-[5px] bg-mainGreenColor px-[46px] py-[13px] text-[16px] font-bold leading-[150%] text-[#FFF]'>
                  Tham gia ngay
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
