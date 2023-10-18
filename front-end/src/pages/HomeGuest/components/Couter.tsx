import img1count from '../../../assets/images/img1count.png'
import img2count from '../../../assets/images/img2count.png'
import img3count from '../../../assets/images/img3count.png'
import img4count from '../../../assets/images/img4count.png'
import { Link } from 'react-router-dom'

interface InfoCouterDataType {
  id: number
  image: string
  title: string
  description?: string
  margin?: number
}

// data infôcuter
const infoCouterData = [
  {
    id: 1,
    image: img1count,
    title: '30+',
    description: 'Khóa học Online'
  },
  {
    id: 2,
    image: img2count,
    title: '200+',
    description: 'Lớp học',
    margin: -33
  },
  {
    id: 3,
    image: img3count,
    title: '2000+',
    description: 'Học viên'
  },
  {
    id: 4,
    image: img4count,
    title: '25+',
    description: 'Giảng viên',
    margin: -33
  }
]

function Couter() {
  return (
    <>
      <section className='m-auto mt-[55px] flex w-full max-w-[1320px] flex-wrap md:flex-col lg:flex-row'>
        <div className='w-full sm:w-full md:mt-[20px] md:w-full lg:w-[50%]'>
          <div>
            <div className='flex flex-wrap'>
              {infoCouterData.map((item: InfoCouterDataType) => {
                return (
                  <div key={item.id} className='sm m-auto mt-[20px] w-full p-[12px] sm:mt-[0] sm:w-[50%] md:w-[50%]'>
                    <div
                      style={{ marginTop: `${item.margin}px` }}
                      className='mb-24px flex items-center justify-center rounded-[10px] border bg-white p-2 shadow-blue-custom duration-500 hover:shadow-none md:h-[300px] lg:h-[230px] xl:h-[300px]'
                    >
                      <div className='text-center'>
                        <div className='text-center'>
                          <img className='m-auto' src={item.image} alt='img' />
                        </div>
                        <div>
                          <h4 className='mt-[20px] text-[28px] font-bold uppercase text-[#21B477]'>{item.title}</h4>
                          <p className='text-[20px] font-medium text-[#5C5C5C]'>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className='px-[12px] md:w-full lg:w-[50%] '>
          <span className='max-1041:text-[#1e7115] text-[20px] font-semibold leading-[150%] text-[#1e7115]'>
            Khám phá cùng PMC Knowledge
          </span>
          <h1 className='mb-[20px] pt-[15px] text-[20px] font-bold leading-[120%] text-color1 md:mb-[20px] lg:mb-[50px] lg:text-[32px]'>
            Được đào tạo bởi các chuyên gia hàng đầu trong lĩnh vực quản lý bất động sản
          </h1>
          <p className='max-600:text-[15px] mb-[20px] text-[16px] leading-[150%] md:mb-[20px] lg:mb-[50px]'>
            Chúng tôi tự hào mang đến cho bạn cơ hội được đào tạo bởi những chuyên gia hàng đầu trong lĩnh vực quản lý
            bất động sản Không chỉ giúp bạn tiếp cận với những kiến thức mới nhất, chương trình đào tạo còn tạo cơ hội
            cho bạn học hỏi và chia sẻ kinh nghiệm từ các chuyên gia đã thành công trong lĩnh vực này. Chúng tôi cam kết
            mang đến cho bạn môi trường học tập thú vị và thực tiễn, giúp bạn phát triển sự tự tin và khả năng ứng dụng
            những kiến thức đã học vào thực tế
          </p>
          <button className='max-1041:bg-orange1040 flex h-[50px] items-center justify-center rounded-[5px] bg-[#1e7115] px-[46px] py-[13px] text-[16px] font-bold leading-[150%] text-[#FFF]'>
            <Link to='/login' className='flex items-center '>
              Xem thêm{' '}
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
        </div>
      </section>
    </>
  )
}

export default Couter
