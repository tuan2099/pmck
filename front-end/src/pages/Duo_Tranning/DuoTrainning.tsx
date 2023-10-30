import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import { useCurrentView } from 'src/hooks/useCurrentWidth'

const DuoTrainning = () => {
  const { sm } = useCurrentView()
  return (
    <div className=''>
      <div className='m-auto flex max-w-[1200px] flex-col justify-between gap-3 px-4 md:flex-row md:items-center'>
        <div className='w-full md:w-[45%]'>
          <h1 className='mb-8 mt-6 font-bold text-color1 text-4xl'>
            Đào tạo kép <br /> - Lợi ích song đôi
          </h1>
          <p className='text-color1'>
            Chứng chỉ học thuật trên PMCK giúp bạn sẵn sàng cho xu hướng nghề nghiệp tương lai và sự phát triển của thị
            trường.
          </p>
          <div className='mt-6 inline-block bg-[#1e7115] px-3 py-2 text-white md:px-5 md:py-4'>
            Kết nối với chúng tôi
          </div>
        </div>
        <div className='w-full md:w-2/5'>
          <img src='https://bravekids.vn/wp-content/uploads/2023/03/demo-anh-nhan-vat-web-PMCK-01-06.png' alt='' />
        </div>
      </div>
      <div className='m-auto my-24 max-w-[1200px] px-4'>
        <h2 className='text-center text-4xl'>
          Với phương châm " Học trong công việc học qua trải nghiệm " và chiến lược 3 trụ cột{' '}
          <span className='font-semibold text-[#1e7115]'>Knowledge - Skill – Attitude</span>
        </h2>
        <div className='m-auto mt-24 flex max-w-[1100px] flex-wrap items-center justify-center'>
          {Array(17)
            .fill(0)
            .map((_) => (
              <div className='w-full max-w-[90px] p-4'>
                <img
                  className='w-full'
                  src='https://149343988.v2.pressablecdn.com/wp-content/uploads/2019/09/universtity-of-london.png'
                />
              </div>
            ))}
        </div>
      </div>
      <div className='bg-[#ebf3ff] py-[70px]'>
        <div className='m-auto max-w-[1200px] px-4'>
          <h1 className='text-center text-4xl'>Thay đổi phương pháp học cùng PMCK</h1>
          <div className='mt-[75px] flex flex-wrap items-center justify-between'>
            <ul className='w-full list-none md:w-1/2 md:list-disc'>
              <li>Không gian học tập không giới hạn</li>
              <li>Bắt đầu ngay và học theo lịch trình của riêng bạn với các khóa học trực tuyến linh hoạt</li>
              <li>Tài liệu giảng dạy chất lượng cao</li>
              <li>Kết nối các trường Đại học và các doanh nghiệp đầu ngành</li>
              <li>Phát triển các kỹ năng quan trọng khác dành riêng cho việc học trực tuyến</li>
              <div className='mt-6 inline-block bg-[#1e7115] px-3 py-2 text-white md:px-5  md:py-4'>Đăng ký ngay</div>
            </ul>
            <div className='w-full md:w-[45%]'>
              <img
                className='w-full'
                src='https://bravekids.vn/wp-content/uploads/2023/03/ky-thuat-cam-sach-3.png'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#f5f7f8] py-[100px]'>
        <div className='m-auto max-w-[1200px] px-4'>
          <h2 className='mb-6 text-center text-4xl'>Kết nối nhà tuyển dụng - Cơ hội nghề nghiệp</h2>
          <div className='text-center'>
            <p>
              Chuẩn bị cho học viên của sẵn sàng làm việc theo yêu cầu thông qua đào tạo kỹ năng và Chứng chỉ Chuyên
              nghiệp từ công ty.
            </p>
            <div className='mt-6 inline-block cursor-pointer bg-[#1e7115] px-[20px] py-[10px] text-white'>
              Kết nối ngay
            </div>
          </div>
        </div>
      </div>
      <div className='m-auto my-24 max-w-[1200px] px-4'>
        <div className='grid gap-5 px-7 py-14 md:grid-cols-3 md:grid-rows-3'>
          <div className='md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3'>
            <img src='https://bravekids.vn/wp-content/uploads/2023/03/banner-to.jpg' alt='' />
          </div>
          <div>
            <img
              src='https://bravekids.vn/wp-content/uploads/2023/03/0-02-06-b01b82e6c610171900e94794476c07984e8473262dfaaedd83745e032a0411cb_4727c8f3f51bdd36.jpg'
              alt=''
            />
          </div>
          <div>
            <img
              src='https://bravekids.vn/wp-content/uploads/2023/03/0-02-06-1729bb0ae39dba7ca57966fc5ea7ea7b1ebc66b25e8a461ea745cd14f4d630a3_2b8d9a095438d1ab-e1679285066252.jpg'
              alt=''
            />
          </div>
          <div>
            <img
              src='https://bravekids.vn/wp-content/uploads/2023/03/75576474_1438664242952749_1627747890279481344_n.jpg'
              alt=''
            />
          </div>
          <div>
            <img
              src='https://bravekids.vn/wp-content/uploads/2023/03/0-02-06-89a336375386ea41d30277fb590f624b0ea1b70be954d934a1c2427c4f556d04_ba48c51650357da3-e1679284952874.jpg'
              alt=''
            />
          </div>
          <div>
            <img src='https://bravekids.vn/wp-content/uploads/2023/03/Screenshot_1-1.png' alt='' />
          </div>
        </div>
      </div>
      <div className='bg-[#382d8b] py-[70px]'>
        <div className='m-auto max-w-[1200px] px-4'>
          <h2 className='pb-12 text-center text-4xl text-white'>Học viên nói gì về PMCK</h2>
          <div className='flex flex-col justify-between gap-10 md:flex-row'>
            <div className='font-semibold text-white'>
              <h1 className='mb-2 text-5xl md:text-7xl'>+3 Triệu</h1>
              <p className='text-2xl'>Học viên tin tưởng và đăng ký</p>
            </div>
            <div className='flex-1 overflow-hidden'>
              <Swiper
                spaceBetween={10}
                centeredSlides={true}
                slidesPerView={1}
                autoplay={{
                  delay: 5000
                }}
                modules={[Autoplay, Pagination]}
              >
                <SwiperSlide>
                  <img
                    className='w-full'
                    src='https://bravekids.vn/wp-content/uploads/2023/02/anh_Viber_2023-02-27_17-42-16-545.jpg'
                    alt=''
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className='w-full'
                    src='https://bravekids.vn/wp-content/uploads/2023/02/anh_Viber_2023-02-27_17-42-23-314.jpg'
                    alt=''
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className='w-full'
                    src='https://bravekids.vn/wp-content/uploads/2023/03/demo-anh-nhan-vat-web-PMCK-01-03.png'
                    alt=''
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className='m-auto my-24 max-w-[1200px] px-4'>
        <h2 className='mb-6 text-center text-4xl'>Là đối tác tin cậy của hơn 30+ trường Đại Học và Cao Đẳng</h2>
        <div className='overflow-hidden'>
          <Swiper
            spaceBetween={10}
            centeredSlides={true}
            slidesPerView={sm ? 1 : 6}
            autoplay={{
              delay: 2000
            }}
            modules={[Autoplay, Pagination]}
          >
            <SwiperSlide>
              <div className='flex'>
                <img
                  className='m-auto h-[100px] w-[100px] object-cover'
                  src='https://bravekids.vn/wp-content/uploads/2023/02/17621816_1087765374700873_3788751442064783250_o-300x197.jpg'
                  alt=''
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex'>
                <img
                  className='m-auto h-[100px] w-[100px] object-cover'
                  src='https://bravekids.vn/wp-content/uploads/2023/02/download-1-150x150.png'
                  alt=''
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex'>
                <img
                  className='m-auto h-[100px] w-[100px] object-cover'
                  src='https://bravekids.vn/wp-content/uploads/2023/02/17621816_1087765374700873_3788751442064783250_o-300x197.jpg'
                  alt=''
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex'>
                <img
                  className='m-auto h-[100px] w-[100px] object-cover'
                  src='https://bravekids.vn/wp-content/uploads/2023/02/download-1-150x150.png'
                  alt=''
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex'>
                <img
                  className='m-auto h-[100px] w-[100px] object-cover'
                  src='https://bravekids.vn/wp-content/uploads/2023/02/17621816_1087765374700873_3788751442064783250_o-300x197.jpg'
                  alt=''
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex'>
                <img
                  className='m-auto h-[100px] w-[100px] object-cover'
                  src='https://bravekids.vn/wp-content/uploads/2023/02/download-1-150x150.png'
                  alt=''
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex'>
                <img
                  className='m-auto h-[100px] w-[100px] object-cover'
                  src='https://bravekids.vn/wp-content/uploads/2023/02/17621816_1087765374700873_3788751442064783250_o-300x197.jpg'
                  alt=''
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex'>
                <img
                  className='m-auto h-[100px] w-[100px] object-cover'
                  src='https://bravekids.vn/wp-content/uploads/2023/02/download-1-150x150.png'
                  alt=''
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex'>
                <img
                  className='m-auto h-[100px] w-[100px] object-cover'
                  src='https://bravekids.vn/wp-content/uploads/2023/02/17621816_1087765374700873_3788751442064783250_o-300x197.jpg'
                  alt=''
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex'>
                <img
                  className='m-auto h-[100px] w-[100px] object-cover'
                  src='https://bravekids.vn/wp-content/uploads/2023/02/download-1-150x150.png'
                  alt=''
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex'>
                <img
                  className='m-auto h-[100px] w-[100px] object-cover'
                  src='https://bravekids.vn/wp-content/uploads/2023/02/17621816_1087765374700873_3788751442064783250_o-300x197.jpg'
                  alt=''
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex'>
                <img
                  className='m-auto h-[100px] w-[100px] object-cover'
                  src='https://bravekids.vn/wp-content/uploads/2023/02/download-1-150x150.png'
                  alt=''
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default DuoTrainning
