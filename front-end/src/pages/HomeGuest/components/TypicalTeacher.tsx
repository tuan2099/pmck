import { phanThanhSon, teacherBg } from 'src/assets/images'
import CourseCard from 'src/components/CourseCard'
import { useCurrentView } from 'src/hooks/useCurrentWidth'
import { CourseType } from 'src/types/course.type'
import { Swiper, SwiperSlide } from 'swiper/react'

const LIMIT_ITEM = 5

const TypicalTeacher = ({ data }: { data?: CourseType[] }) => {
  const { sm, md, width } = useCurrentView()

  return (
    <div className='bg-cover bg-no-repeat px-4 py-10 lg:pl-10 lg:pr-4' style={{ backgroundImage: `url(${teacherBg})` }}>
      <div
        className='m-auto flex  w-full max-w-7xl flex-col bg-contain bg-right-top bg-no-repeat lg:h-[700px] xl:h-[800px]'
        style={{ backgroundImage: width > 768 ? `url(${phanThanhSon})` : '' }}
      >
        <div className='my-auto flex flex-col gap-20'>
          <div className='w-full md:w-1/2'>
            <button className='mb-10 bg-mainGreenColor px-5 py-2 text-white'>Giảng viên tiêu biểu</button>
            <h2 className='mb-6 text-4xl font-semibold md:text-5xl lg:text-6xl'>Phan Thanh Sơn</h2>
            <p className='text-sm sm:text-base'>
              Là chuyên gia đi đầu về ứng dụng phần mềm trong quản trị tài chính kế toán, Ông đã nhiều năm kinh nghiệm
              thực tế về tư vấn cho các Ban quản trị, Chủ đầu tư nhà chung cư về phân tích tài chính, quản trị dòng
              tiền, từ đó giúp giảm thiểu các rủi ro về chi phí. Các khóa học chuyên sâu được ông thiết kế nhằm tập
              trung về các kiến thức và kỹ năng thiết yếu trong công tác kế toán tổng hợp và quản lý công nợ dự án, là
              sự chuẩn bị để hoàn thiện các bút toán tổng hợp, hoàn tất hạch toán các phần hành để lên Báo cáo tài chính
              theo đúng các chuẩn mực và quy định hiện hành.
            </p>
          </div>

          <div className='w-full'>
            <Swiper
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              spaceBetween={20}
              slidesPerView={sm ? 2 : md ? 2.5 : 3.5}
              onSlideChange={() => console.log('slide change')}
            >
              {data?.slice(0, LIMIT_ITEM).map((course, index) => (
                <SwiperSlide key={index}>
                  <CourseCard courseItem={course} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TypicalTeacher
