import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'

const Partner = () => {
  return (
    <div>
      <div className='mx-auto grid max-w-[1200px] grid-cols-2 pb-5 pt-5 max-xl:ml-20 max-xl:mr-20 max-lg:grid-cols-1 max-480:mx-3'>
        <div className='text-left max-lg:order-2'>
          <h1 className='mb-6 text-5xl font-semibold '> Tiếp cận các trường học và chuyên gia giáo dục hàng đầu </h1>
          <h2 className='text-2xl'> Cơ hội sinh viên thực tập và trải nghiệm </h2>
          <div>
            <div className='mt-16 text-base leading-loose opacity-70'>
              <div className='flex'>
                <img
                  className='mt-2 h-4 w-4'
                  src='https://cdn.pixabay.com/photo/2017/04/08/18/17/correct-2214020_1280.png'
                  alt=''
                />
                Chương trình cấp bằng trực tuyến tốt nhất từ các trường đại học hàng đầu
              </div>
              <div className='flex'>
                <img
                  className='mt-2 h-4 w-4'
                  src='https://cdn.pixabay.com/photo/2017/04/08/18/17/correct-2214020_1280.png'
                  alt=''
                />
                Các lớp học trực tuyến trực tiếp với các giảng viên 3-4 giờ mỗi tuần
              </div>
              <div className='flex'>
                <img
                  className='mt-2 h-4 w-4'
                  src='https://cdn.pixabay.com/photo/2017/04/08/18/17/correct-2214020_1280.png'
                  alt=''
                />
                Chia sẻ suy nghĩ của bạn và kết nối với học viên trên toàn cầu
              </div>
              <div className='flex'>
                <img
                  className='mt-2 h-4 w-4'
                  src='https://cdn.pixabay.com/photo/2017/04/08/18/17/correct-2214020_1280.png'
                  alt=''
                />
                Tích lũy tín chỉ cho mục tiêu tương lai
              </div>
            </div>
            <button className='mt-8 bg-[#1e7115] pb-4 pl-8 pr-8 pt-4'>
              <a className='font-semibold text-white'>Liên hệ</a>
            </button>
          </div>
        </div>
        <div className='max-lg:order-1 max-lg:mx-auto max-lg:max-w-[50%] '>
          <img
            className=''
            src='http://bravekids.vn/wp-content/uploads/2023/03/0-02-06-25b60fc4753ce1fcd87e8a2b03f59683e5befa3b484ea817f5d3505d18f36d3a_1fccca1a5dec421a.jpg'
            alt=''
          />
        </div>
      </div>

      <div className='mx-auto mb-32 mt-32 grid max-w-[1200px] grid-cols-2 gap-32 pb-[60px] max-xl:ml-20 max-xl:mr-20 max-sm:grid-cols-1 max-480:mx-3'>
        <div className='max-sm:order-2 '>
          <Swiper
            hashNavigation
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            // navigation={true}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false
            }}
            className='mySwiper font-semibold text-[#1e7115] '
          >
            <SwiperSlide>
              <div className='border-black-50 border-1 grid  grid-cols-3 grid-rows-3 place-items-center border'>
                <div className='border-black-50 border-0.5 flex h-24 w-full items-center justify-center border'>
                  <img
                    className='max-h-full max-w-full grid-cols-1 grid-rows-1 pb-2 pl-12 pr-12 pt-2 max-xl:pl-6 max-xl:pr-6 max-lg:pl-4 max-lg:pr-4 max-md:pl-2 max-md:pr-2'
                    src='http://bravekids.vn/wp-content/uploads/2023/02/200px-Logo_Truong_Dai_Hoc_Van_Hien-150x150.png'
                    alt=''
                  />
                </div>
                <div className='border-black-50 border-0.5 flex h-24 w-full items-center justify-center border'>
                  <img
                    className='max-h-full max-w-full grid-cols-1 grid-rows-1 pb-2 pl-12 pr-12 pt-2 max-xl:pl-6 max-xl:pr-6 max-lg:pl-4 max-lg:pr-4 max-md:pl-2 max-md:pr-2'
                    src='http://bravekids.vn/wp-content/uploads/2023/02/10633371_739123549487297_6524170581567217581_o-300x300.jpg'
                    alt=''
                  />
                </div>
                <div className='border-black-50 border-0.5 flex h-24 w-full items-center justify-center border'>
                  <img
                    className='max-h-full max-w-full grid-cols-1 grid-rows-1 pb-2 pl-12 pr-12 pt-2 max-xl:pl-6 max-xl:pr-6 max-lg:pl-4 max-lg:pr-4 max-md:pl-2 max-md:pr-2'
                    src='http://bravekids.vn/wp-content/uploads/2023/02/13652963_596003043893230_5137228318280572542_o-300x300.jpg'
                    alt=''
                  />
                </div>
                <div className='border-black-50 border-0.5 flex h-24 w-full items-center justify-center border'>
                  <img
                    className='max-h-full max-w-full grid-cols-1 grid-rows-1 pb-2 pl-12 pr-12 pt-2 max-xl:pl-6 max-xl:pr-6 max-lg:pl-4 max-lg:pr-4 max-md:pl-2 max-md:pr-2'
                    src='http://bravekids.vn/wp-content/uploads/2023/02/17621816_1087765374700873_3788751442064783250_o-300x197.jpg'
                    alt=''
                  />
                </div>
                <div className='border-black-50 border-0.5 flex h-24 w-full items-center justify-center border'>
                  <img
                    className='max-h-full max-w-full grid-cols-1 grid-rows-1 pb-2 pl-12 pr-12 pt-2 max-xl:pl-6 max-xl:pr-6 max-lg:pl-4 max-lg:pr-4 max-md:pl-2 max-md:pr-2'
                    src='http://bravekids.vn/wp-content/uploads/2023/02/298794970_571371651357184_198597452629962398_n-300x300.png'
                    alt=''
                  />
                </div>
                <div className='border-black-50 border-0.5 flex h-24 w-full items-center justify-center border'>
                  <img
                    className='max-h-full max-w-full grid-cols-1 grid-rows-1 pb-2 pl-12 pr-12 pt-2 max-xl:pl-6 max-xl:pr-6 max-lg:pl-4 max-lg:pr-4 max-md:pl-2 max-md:pr-2'
                    src='http://bravekids.vn/wp-content/uploads/2023/02/301199165_488594839939716_1581784848597171227_n-150x150.jpg'
                    alt=''
                  />
                </div>
                <div className='border-black-50 border-0.5 flex h-24 w-full items-center justify-center border'>
                  <img
                    className='max-h-full max-w-full grid-cols-1 grid-rows-1 pb-2 pl-12 pr-12 pt-2 max-xl:pl-6 max-xl:pr-6 max-lg:pl-4 max-lg:pr-4 max-md:pl-2 max-md:pr-2'
                    src='http://bravekids.vn/wp-content/uploads/2023/02/302160424_453345586823442_8334757016940877507_n-300x244.jpg'
                    alt=''
                  />
                </div>
                <div className='border-black-50 border-0.5 flex h-24 w-full items-center justify-center border'>
                  <img
                    className='max-h-full max-w-full grid-cols-1 grid-rows-1 pb-2 pl-12 pr-12 pt-2 max-xl:pl-6 max-xl:pr-6 max-lg:pl-4 max-lg:pr-4 max-md:pl-2 max-md:pr-2'
                    src='http://bravekids.vn/wp-content/uploads/2023/02/304841413_512139780914898_476570155267302007_n-300x300.jpg'
                    alt=''
                  />
                </div>
                <div className='border-black-50 border-0.5 flex h-24 w-full items-center justify-center border'>
                  <img
                    className='max-h-full max-w-full grid-cols-1 grid-rows-1 pb-2 pl-12 pr-12 pt-2 max-xl:pl-6 max-xl:pr-6 max-lg:pl-4 max-lg:pr-4 max-md:pl-2 max-md:pr-2'
                    src='http://bravekids.vn/wp-content/uploads/2023/02/307374903_431998745688363_1961335789606844341_n-262x300.png'
                    alt=''
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='border-black-50 border-1  grid grid-cols-3 grid-rows-3 border'>
                <div className='border-black-50 border-0.5 flex h-24 w-full items-center justify-center border'>
                  <img
                    className='max-h-full max-w-full grid-cols-1 grid-rows-1 pb-2 pl-12 pr-12 pt-2 max-xl:pl-6 max-xl:pr-6 max-lg:pl-4 max-lg:pr-4 max-md:pl-2 max-md:pr-2'
                    src='http://bravekids.vn/wp-content/uploads/2023/02/309573205_470300321781593_5845549841210194168_n-300x300.png'
                    alt=''
                  />
                </div>
                <div className='border-black-50 border-0.5 flex h-24 w-full items-center justify-center border'>
                  <img
                    className='max-h-full max-w-full grid-cols-1 grid-rows-1 pb-2 pl-12 pr-12 pt-2 max-xl:pl-6 max-xl:pr-6 max-lg:pl-4 max-lg:pr-4 max-md:pl-2 max-md:pr-2'
                    src='http://bravekids.vn/wp-content/uploads/2023/02/326223488_1562180727539749_6215405318986162840_n-300x300.png'
                    alt=''
                  />
                </div>
                <div className='border-black-50 border-0.5 flex h-24 w-full items-center justify-center border'>
                  <img
                    className='max-h-full max-w-full grid-cols-1 grid-rows-1 pb-2 pl-12 pr-12 pt-2 max-xl:pl-6 max-xl:pr-6 max-lg:pl-4 max-lg:pr-4 max-md:pl-2 max-md:pr-2'
                    src='http://bravekids.vn/wp-content/uploads/2023/02/326409117_583153713825445_2443539952735772681_n-300x300.jpg'
                    alt=''
                  />
                </div>
                <div className='border-black-50 border-0.5 flex h-24 w-full items-center justify-center border'>
                  <img
                    className='max-h-full max-w-full grid-cols-1 grid-rows-1 pb-2 pl-12 pr-12 pt-2 max-xl:pl-6 max-xl:pr-6 max-lg:pl-4 max-lg:pr-4 max-md:pl-2 max-md:pr-2'
                    src='http://bravekids.vn/wp-content/uploads/2023/02/anhDaiDien-1656573897898-b_a_l_ch_thi_tn_thpt_2022_2-300x255.png'
                    alt=''
                  />
                </div>
                <div className='border-black-50 border-0.5 flex h-24 w-full items-center justify-center border'>
                  <img
                    className='max-h-full max-w-full grid-cols-1 grid-rows-1 pb-2 pl-12 pr-12 pt-2 max-xl:pl-6 max-xl:pr-6 max-lg:pl-4 max-lg:pr-4 max-md:pl-2 max-md:pr-2'
                    src='http://bravekids.vn/wp-content/uploads/2023/02/CAO-DANG-VIEN-THONG-300x53.png'
                    alt=''
                  />
                </div>
                <div className='border-black-50 border-0.5 flex h-24 w-full items-center justify-center border'>
                  <img
                    className='max-h-full max-w-full grid-cols-1 grid-rows-1 pb-2 pl-12 pr-12 pt-2 max-xl:pl-6 max-xl:pr-6 max-lg:pl-4 max-lg:pr-4 max-md:pl-2 max-md:pr-2'
                    src='http://bravekids.vn/wp-content/uploads/2023/02/CD-kinh-te-KT-TP-HCM--300x60.png'
                    alt=''
                  />
                </div>
                <div className='border-black-50 border-0.5 flex h-24 w-full items-center justify-center border'>
                  <img
                    className='max-h-full max-w-full grid-cols-1 grid-rows-1 pb-2 pl-12 pr-12 pt-2 max-xl:pl-6 max-xl:pr-6 max-lg:pl-4 max-lg:pr-4 max-md:pl-2 max-md:pr-2'
                    src='http://bravekids.vn/wp-content/uploads/2023/02/DH-CN-DONG-NAI.png'
                    alt=''
                  />
                </div>
                <div className='border-black-50 border-0.5 flex h-24 w-full items-center justify-center border'>
                  <img
                    className='max-h-full max-w-full grid-cols-1 grid-rows-1 pb-2 pl-12 pr-12 pt-2 max-xl:pl-6 max-xl:pr-6 max-lg:pl-4 max-lg:pr-4 max-md:pl-2 max-md:pr-2'
                    src='http://bravekids.vn/wp-content/uploads/2023/02/download-1-150x150.png'
                    alt=''
                  />
                </div>
                <div className='border-black-50 border-0.5 flex h-24 w-full items-center justify-center border'>
                  <img
                    className='max-h-full max-w-full grid-cols-1 grid-rows-1 pb-2 pl-12 pr-12 pt-2 max-xl:pl-6 max-xl:pr-6 max-lg:pl-4 max-lg:pr-4 max-md:pl-2 max-md:pr-2'
                    src='http://bravekids.vn/wp-content/uploads/2023/02/download-2-300x112.png'
                    alt=''
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className='flex items-center justify-center max-sm:order-1'>
          <h2 className='text-[2.75rem] font-semibold max-lg:text-3xl'>
            Trên
            <span className='text-6xl text-[#1e7115] '> 30+ </span>
            trường đại học cao đẳng lựa chọn PMCK
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Partner
