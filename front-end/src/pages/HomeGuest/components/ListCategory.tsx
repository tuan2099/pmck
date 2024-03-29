import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import courseApi from 'src/apis/course.api'
import useQueryConfig, { ConfigParams } from 'src/hooks/useQueryConfig'

function ListCategory() {
  const queryConfig = useQueryConfig()


  const { data: courseListData } = useQuery({
    queryKey: ['categortCourse', useQueryConfig],
    queryFn: () => {
      return courseApi.getCourseList({ ...(queryConfig as ConfigParams) })
    },
    keepPreviousData: true,
    staleTime: 3 * 60 * 1000
  })
  return (
    <>
      <section className='bg-[#FBFCFF]'>
        <div className='max-1618:px-[72px]  max-1025:px-[60px] max-831:px-[30px] max-769:px-[12px] max-600:px-0 m-auto my-9 max-w-[1320px] py-[30px]'>
          <div className='mb-[50px] px-[10px] text-center'>
            <span className='max-1041:text-[#1e7115] text-[20px] font-semibold italic leading-[150%] text-[#1e7115]'>
              Danh mục yêu thích
            </span>
            <h1 className='pb-[24px] pt-[15px] text-[20px] font-bold leading-[120%] text-[#4F4F4F] lg:text-[32px]'>
              Danh Mục Khóa Học
            </h1>
            <p className='m-auto text-[16px] xl:w-[45%]'>
              PMCK là nơi tập hợp những khóa học chất lượng, cung cấp kiến thức và kỹ năng cần thiết để thành công trong
              lĩnh vực quản lý bất động sản.
            </p>
          </div>
          <div className='flex flex-wrap items-center justify-between px-3'>
            {courseListData &&
              courseListData.data?.data.map((item) => {
                return (
                  <Link to='' key={item.id} className=' w-full rounded-[10px]  px-[12px] sm:w-[47%] lg:w-[25%] '>
                    <div className='group mb-[24px] rounded-[10px] bg-white p-[30px] shadow-blue-custom  duration-500 hover:bg-[#392c7d]'>
                      <div className='m-auto mb-3 w-1/3'>
                        <img src={`http://localhost:1337${item.attributes.icon.data[0].attributes.url}`} alt='' />
                      </div>
                      <div className='text-center'>
                        <p className='text-colortextcategory max-1025:h-[48px] text-[20px] font-bold leading-[120%] duration-500 group-hover:text-white'>
                          {item.attributes.label}
                        </p>
                        <p className='text-[16px] font-normal leading-[150%] text-[#22100D] duration-500 group-hover:text-white'>
                          {item.attributes.course_number} Khóa học
                        </p>
                      </div>
                    </div>
                  </Link>
                )
              })}
          </div>
          <Link to='/login'>
            <button className='max-1041:bg-orange1040 mx-auto mt-[40px] flex h-[50px] items-center justify-center rounded-[5px] bg-mainGreenColor px-[46px] py-[13px] text-[16px] font-bold leading-[150%] text-[#FFF]'>
              Xem tất cả danh mục
            </button>
          </Link>
        </div>
      </section>
    </>
  )
}

export default ListCategory
