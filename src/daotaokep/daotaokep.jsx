import React from 'react';
import './daotaokep.css';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
import "swiper/css/pagination";
import 'swiper/swiper.css'
import { Pagination } from "swiper";
const NewPage = () => {
    SwiperCore.use([Autoplay]);
    return (
        <div className=''>
            <div className='max-w-[1200px] mx-auto  max-xl:mx-20 max-425:mx-3 max-480:mx-3'>
                <div className='grid grid-cols-2 gap-40 max-lg:grid-cols-1 	'>
                    <div className='text-left max-lg:order-2'>
                        <h1 className='text-5xl mt-6 mb-8 font-semibold'>Đào tạo kép
                            <br></br>
                            - Lợi ích song đôi</h1>
                        <p className='text-xl'>Chứng chỉ học thuật trên PMCK giúp bạn sẵn sàng cho xu hướng nghề nghiệp tương lai và sự phát triển của thị trường.</p>
                        <button className='bg-[#1e7115] p-5 mt-6'>
                            <a className='text-white font-semibold'>Kết nối với chúng tôi</a>
                        </button >
                    </div>
                    <div className='max-lg:order-1 max-lg:w-full' >
                        <img src='http://bravekids.vn/wp-content/uploads/2023/03/demo-anh-nhan-vat-web-PMCK-01-06.png' ></img>
                    </div>
                </div >
            </div >

            <div className='max-w-[1200px] mx-auto max-425:mx-3 max-480:mx-3'>
                <div className='mt-24 mb-24'>
                    <h2 className='text-4xl'>Với phương châm " Học trong công việc học qua trải nghiệm  " và chiến lược 3 trụ cột
                        <span className='text-4xl text-[#1e7115] font-semibold'> Knowledge - Skill - Attitude</span>
                    </h2>
                </div>


                <div className='ml-12 mr-12 max-425:mx-3 max-480:mx-3 '>
                    {/* <div className=' grid grid-cols-9 m-15 '> */}
                    <div className='w-full flex justify-center flex-wrap'>
                        <img className='m-4 w-20' src='https://149343988.v2.pressablecdn.com/wp-content/uploads/2019/09/universtity-of-london.png'></img>
                        <img className='m-4 w-20' src='https://149343988.v2.pressablecdn.com/wp-content/uploads/2019/09/universtity-of-london.png'></img>
                        <img className='m-4 w-20' src='https://149343988.v2.pressablecdn.com/wp-content/uploads/2019/09/universtity-of-london.png'></img>
                        <img className='m-4 w-20' src='https://149343988.v2.pressablecdn.com/wp-content/uploads/2019/09/universtity-of-london.png'></img>
                        <img className='m-4 w-20' src='https://149343988.v2.pressablecdn.com/wp-content/uploads/2019/09/universtity-of-london.png'></img>
                        <img className='m-4 w-20' src='https://149343988.v2.pressablecdn.com/wp-content/uploads/2019/09/universtity-of-london.png'></img>
                        <img className='m-4 w-20' src='https://149343988.v2.pressablecdn.com/wp-content/uploads/2019/09/universtity-of-london.png'></img>
                        <img className='m-4 w-20' src='https://149343988.v2.pressablecdn.com/wp-content/uploads/2019/09/universtity-of-london.png'></img>
                        <img className='m-4 w-20' src='https://149343988.v2.pressablecdn.com/wp-content/uploads/2019/09/universtity-of-london.png'></img>
                        <img className='m-4 w-20' src='https://149343988.v2.pressablecdn.com/wp-content/uploads/2019/09/universtity-of-london.png'></img>
                        <img className='m-4 w-20' src='https://149343988.v2.pressablecdn.com/wp-content/uploads/2019/09/universtity-of-london.png'></img>
                        <img className='m-4 w-20' src='https://149343988.v2.pressablecdn.com/wp-content/uploads/2019/09/universtity-of-london.png'></img>
                        <img className='m-4 w-20' src='https://149343988.v2.pressablecdn.com/wp-content/uploads/2019/09/universtity-of-london.png'></img>
                        <img className='m-4 w-20' src='https://149343988.v2.pressablecdn.com/wp-content/uploads/2019/09/universtity-of-london.png'></img>
                        <img className='m-4 w-20' src='https://149343988.v2.pressablecdn.com/wp-content/uploads/2019/09/universtity-of-london.png'></img>
                        <img className='m-4 w-20' src='https://149343988.v2.pressablecdn.com/wp-content/uploads/2019/09/universtity-of-london.png'></img>
                        <img className='m-4 w-20' src='https://149343988.v2.pressablecdn.com/wp-content/uploads/2019/09/universtity-of-london.png'></img>
                    </div>
                    {/* </div> */}
                </div>
            </div>


            <div className='bg-green-50 pb-14'>
                <div className='max-w-[1200px] mx-auto mt-16 pt-20 max-xl:mr-20 max-xl:ml-20 max-425:mx-3 max-480:mx-3'>
                    <h1 className='text-4xl'>Thay đổi phương pháp học cùng PMCK</h1>
                    <div className='grid grid-cols-2 mt-20 gap-10 max-lg:grid-cols-1'>
                        <div className='text-left text-lg max-lg:order-2'>
                            <li>Không gian học tập không giới hạn</li>
                            <li>Bắt đầu ngay và học theo lịch trình của riêng bạn với các khóa học trực tuyến linh hoạt</li>
                            <li>Tài liệu giảng dạy  chất lượng cao </li>
                            <li>Kết nối các trường Đại học và các doanh nghiệp đầu ngành</li>
                            <li>Phát triển các kỹ năng quan trọng khác dành riêng cho việc học trực tuyến </li>
                            <button className='bg-[#1e7115] mt-6 pt-2.5 pb-2.5 pl-5 pr-5 text-white font-semibold '>Đăng ký ngay</button>
                        </div>
                        <div className='max-lg:order-1 max-lg:w-full'>
                            <img src='http://bravekids.vn/wp-content/uploads/2023/03/ky-thuat-cam-sach-3.png'></img>
                        </div>
                    </div>
                </div>
            </div>


            <div className='bg-violet-50 pt-24 pb-24 '>
                <div className='max-w-[1200px] mx-auto'>
                    <h2 className='text-4xl mb-6'>Kết nối nhà tuyển dụng - Cơ hội nghề nghiệp </h2>
                    <p className='text-lg mb-4 ml-56 mr-56 max-md:mr-9 max-md:ml-9 max-lg:mr-48 max-lg:ml-48'> Chuẩn bị cho học viên của sẵn sàng làm việc theo yêu cầu thông qua đào tạo kỹ năng và Chứng chỉ Chuyên nghiệp từ công ty. </p>
                    <button className='bg-[#1e7115] pt-2 pb-2 pl-5 pr-5'>
                        <a className='text-white font-semibold '>Kết nối ngay</a>
                    </button>
                </div>
            </div>

            <div className='grid grid-cols-3 gap-5 grid-rows-3 max-xl:ml-20 max-xl:mr-20 mt-16 pt-12 max-w-[1200px] mx-auto max-md:grid-cols-1 max-425:mx-3 max-480:mx-3 max-480:mb-14 '>
                <img className='col-span-2 row-span-2 max-md:row-span-1 max-md:col-span-1' src='http://bravekids.vn/wp-content/uploads/2023/03/banner-to.jpg'></img>
                <img className='grid-cols-1 grid-rows-1' src='http://bravekids.vn/wp-content/uploads/2023/03/0-02-06-b01b82e6c610171900e94794476c07984e8473262dfaaedd83745e032a0411cb_4727c8f3f51bdd36.jpg'></img>
                <img className='grid-cols-1 grid-rows-1' src='http://bravekids.vn/wp-content/uploads/2023/03/0-02-06-1729bb0ae39dba7ca57966fc5ea7ea7b1ebc66b25e8a461ea745cd14f4d630a3_2b8d9a095438d1ab-e1679285066252.jpg'></img>
                <img className='grid-cols-1 grid-rows-1' src='http://bravekids.vn/wp-content/uploads/2023/03/75576474_1438664242952749_1627747890279481344_n.jpg'></img>
                <img className='grid-cols-1 grid-rows-1' src='http://bravekids.vn/wp-content/uploads/2023/03/0-02-06-89a336375386ea41d30277fb590f624b0ea1b70be954d934a1c2427c4f556d04_ba48c51650357da3-e1679284952874.jpg'></img>
                <img className='grid-cols-1 grid-rows-1' src='http://bravekids.vn/wp-content/uploads/2023/03/Screenshot_1-1.png'></img>
            </div>

            <div className='bg-blue-900 p-32 max-425:mx-3 max-480:mx-3 max-425:p-3'>
                <h2 className='text-white text-4xl font-semibold pb-12 max-w-[1100px] mx-auto '>Học viên mới nói gì về PMCK</h2>
                <div className='grid grid-cols-3 max-lg:grid-cols-1 max-w-[1100px] mx-auto'>
                    <div className='text-left col-span-1  '>
                        <h1 className='text-8xl max-lg:text-7xl text-white font-semibold'>+3 Triệu</h1>
                        <br></br>
                        <p className='text-3xl text-white font-semibold'>Học viên tin tưởng và đăng ký</p>
                    </div>
                    <div className='col-span-2 max-lg:hidden'>
                        <Swiper module={[Autoplay]}
                            grabCursor={true}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            spaceBetween={0}
                            slidesPerView={1}>
                            <SwiperSlide>
                                <img src='http://bravekids.vn/wp-content/uploads/2023/02/anh_Viber_2023-02-27_17-42-16-545.jpg' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src='http://bravekids.vn/wp-content/uploads/2023/02/anh_Viber_2023-02-27_17-42-18-264.png' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src='http://bravekids.vn/wp-content/uploads/2023/03/demo-anh-nhan-vat-web-PMCK-01-03.png' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src='http://bravekids.vn/wp-content/uploads/2023/02/anh_Viber_2023-02-27_17-42-23-314.jpg' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src='http://bravekids.vn/wp-content/uploads/2023/03/demo-anh-nhan-vat-web-PMCK-01-05.png' />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>

            <div className=' mt-28  max-xl:ml-20  max-xl:mr-20 pb-24 max-w-[1200px] mx-auto max-425:mx-3 max-480:mx-3'>
                <h2 className='text-4xl mt-28 mb-[25px] ml-20 mr-20 max-md:text-xl max-425:mx-3 max-480:mx-3'>Là đối tác tin cậy của hơn 30+ trường Đại Học và Cao Đẳng</h2>
                <div className='max-lg:hidden ' >
                    <Swiper className=' grid place-items-center'
                        slidesPerView={6}
                        spaceBetween={0}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        modules={[Pagination]}
                        module={[Autoplay]}
                        grabCursor={true}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                    >
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/309573205_470300321781593_5845549841210194168_n-300x300.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/326223488_1562180727539749_6215405318986162840_n-300x300.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/326409117_583153713825445_2443539952735772681_n-300x300.jpg'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/anhDaiDien-1656573897898-b_a_l_ch_thi_tn_thpt_2022_2-300x255.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/CAO-DANG-VIEN-THONG-300x53.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/CD-kinh-te-KT-TP-HCM--300x60.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/DH-CN-DONG-NAI.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/download-1-150x150.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/download-2-300x112.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/200px-Logo_Truong_Dai_Hoc_Van_Hien-150x150.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/10633371_739123549487297_6524170581567217581_o-300x300.jpg'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/13652963_596003043893230_5137228318280572542_o-300x300.jpg'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/17621816_1087765374700873_3788751442064783250_o-300x197.jpg'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/298794970_571371651357184_198597452629962398_n-300x300.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/301199165_488594839939716_1581784848597171227_n-150x150.jpg'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/302160424_453345586823442_8334757016940877507_n-300x244.jpg'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/304841413_512139780914898_476570155267302007_n-300x300.jpg'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/307374903_431998745688363_1961335789606844341_n-262x300.png'></img>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className='lg:hidden max-md:hidden '>
                    <Swiper className=' grid place-items-center'
                        slidesPerView={5}
                        spaceBetween={0}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        modules={[Pagination]}
                        module={[Autoplay]}
                        grabCursor={true}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                    >
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/309573205_470300321781593_5845549841210194168_n-300x300.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/326223488_1562180727539749_6215405318986162840_n-300x300.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/326409117_583153713825445_2443539952735772681_n-300x300.jpg'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/anhDaiDien-1656573897898-b_a_l_ch_thi_tn_thpt_2022_2-300x255.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/CAO-DANG-VIEN-THONG-300x53.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/CD-kinh-te-KT-TP-HCM--300x60.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/DH-CN-DONG-NAI.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/download-1-150x150.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/download-2-300x112.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/200px-Logo_Truong_Dai_Hoc_Van_Hien-150x150.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/10633371_739123549487297_6524170581567217581_o-300x300.jpg'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/13652963_596003043893230_5137228318280572542_o-300x300.jpg'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/17621816_1087765374700873_3788751442064783250_o-300x197.jpg'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/298794970_571371651357184_198597452629962398_n-300x300.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/301199165_488594839939716_1581784848597171227_n-150x150.jpg'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/302160424_453345586823442_8334757016940877507_n-300x244.jpg'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/304841413_512139780914898_476570155267302007_n-300x300.jpg'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/307374903_431998745688363_1961335789606844341_n-262x300.png'></img>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className='md:hidden max-sm:hidden '>
                    <Swiper className=' grid place-items-center'
                        slidesPerView={4}
                        spaceBetween={0}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        modules={[Pagination]}
                        module={[Autoplay]}
                        grabCursor={true}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                    >
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/309573205_470300321781593_5845549841210194168_n-300x300.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/326223488_1562180727539749_6215405318986162840_n-300x300.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/326409117_583153713825445_2443539952735772681_n-300x300.jpg'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/anhDaiDien-1656573897898-b_a_l_ch_thi_tn_thpt_2022_2-300x255.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/CAO-DANG-VIEN-THONG-300x53.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/CD-kinh-te-KT-TP-HCM--300x60.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/DH-CN-DONG-NAI.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/download-1-150x150.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/download-2-300x112.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/200px-Logo_Truong_Dai_Hoc_Van_Hien-150x150.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/10633371_739123549487297_6524170581567217581_o-300x300.jpg'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/13652963_596003043893230_5137228318280572542_o-300x300.jpg'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/17621816_1087765374700873_3788751442064783250_o-300x197.jpg'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/298794970_571371651357184_198597452629962398_n-300x300.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/301199165_488594839939716_1581784848597171227_n-150x150.jpg'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/302160424_453345586823442_8334757016940877507_n-300x244.jpg'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/304841413_512139780914898_476570155267302007_n-300x300.jpg'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/307374903_431998745688363_1961335789606844341_n-262x300.png'></img>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className='sm:hidden max-480:hidden '>
                    <Swiper className=' grid place-items-center'
                        slidesPerView={3}
                        spaceBetween={0}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        modules={[Pagination]}
                        module={[Autoplay]}
                        grabCursor={true}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                    >
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-cente'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/309573205_470300321781593_5845549841210194168_n-300x300.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-cente'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/326223488_1562180727539749_6215405318986162840_n-300x300.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/326409117_583153713825445_2443539952735772681_n-300x300.jpg'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/anhDaiDien-1656573897898-b_a_l_ch_thi_tn_thpt_2022_2-300x255.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/CAO-DANG-VIEN-THONG-300x53.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/CD-kinh-te-KT-TP-HCM--300x60.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/DH-CN-DONG-NAI.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/download-1-150x150.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/download-2-300x112.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/200px-Logo_Truong_Dai_Hoc_Van_Hien-150x150.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/10633371_739123549487297_6524170581567217581_o-300x300.jpg'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/13652963_596003043893230_5137228318280572542_o-300x300.jpg'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/17621816_1087765374700873_3788751442064783250_o-300x197.jpg'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/298794970_571371651357184_198597452629962398_n-300x300.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/301199165_488594839939716_1581784848597171227_n-150x150.jpg'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/302160424_453345586823442_8334757016940877507_n-300x244.jpg'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/304841413_512139780914898_476570155267302007_n-300x300.jpg'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/307374903_431998745688363_1961335789606844341_n-262x300.png'></img>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className='480:hidden max-360:hidden'>
                    <Swiper className=' grid place-items-center'
                        slidesPerView={2}
                        spaceBetween={0}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        modules={[Pagination]}
                        module={[Autoplay]}
                        grabCursor={true}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                    >
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-cente'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/309573205_470300321781593_5845549841210194168_n-300x300.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-cente'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/326223488_1562180727539749_6215405318986162840_n-300x300.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/326409117_583153713825445_2443539952735772681_n-300x300.jpg'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/anhDaiDien-1656573897898-b_a_l_ch_thi_tn_thpt_2022_2-300x255.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/CAO-DANG-VIEN-THONG-300x53.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/CD-kinh-te-KT-TP-HCM--300x60.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/DH-CN-DONG-NAI.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/download-1-150x150.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/download-2-300x112.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/200px-Logo_Truong_Dai_Hoc_Van_Hien-150x150.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/10633371_739123549487297_6524170581567217581_o-300x300.jpg'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/13652963_596003043893230_5137228318280572542_o-300x300.jpg'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/17621816_1087765374700873_3788751442064783250_o-300x197.jpg'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/298794970_571371651357184_198597452629962398_n-300x300.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/301199165_488594839939716_1581784848597171227_n-150x150.jpg'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/302160424_453345586823442_8334757016940877507_n-300x244.jpg'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/304841413_512139780914898_476570155267302007_n-300x300.jpg'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/307374903_431998745688363_1961335789606844341_n-262x300.png'></img>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className='360:hidden '>
                    <Swiper className=' grid place-items-center'
                        slidesPerView={1}
                        spaceBetween={0}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        modules={[Pagination]}
                        module={[Autoplay]}
                        grabCursor={true}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                    >
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-cente'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/309573205_470300321781593_5845549841210194168_n-300x300.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-cente'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/326223488_1562180727539749_6215405318986162840_n-300x300.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/326409117_583153713825445_2443539952735772681_n-300x300.jpg'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/anhDaiDien-1656573897898-b_a_l_ch_thi_tn_thpt_2022_2-300x255.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/CAO-DANG-VIEN-THONG-300x53.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/CD-kinh-te-KT-TP-HCM--300x60.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/DH-CN-DONG-NAI.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/download-1-150x150.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/download-2-300x112.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/200px-Logo_Truong_Dai_Hoc_Van_Hien-150x150.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/10633371_739123549487297_6524170581567217581_o-300x300.jpg'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/13652963_596003043893230_5137228318280572542_o-300x300.jpg'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/17621816_1087765374700873_3788751442064783250_o-300x197.jpg'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/298794970_571371651357184_198597452629962398_n-300x300.png'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/301199165_488594839939716_1581784848597171227_n-150x150.jpg'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/302160424_453345586823442_8334757016940877507_n-300x244.jpg'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/304841413_512139780914898_476570155267302007_n-300x300.jpg'></img>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='w-full h-24 flex justify-center items-center'>
                                <img className='max-w-full max-h-full' src='http://bravekids.vn/wp-content/uploads/2023/02/307374903_431998745688363_1961335789606844341_n-262x300.png'></img>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

            </div>

        </div >


    );
};

export default NewPage;

