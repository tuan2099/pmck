const Becometeacher = () => {
  const buttons = document.querySelectorAll('.flex button')
  const sections = document.querySelectorAll('.hidden')
  const onChange = (key: string) => {
    console.log(key)
  }
  const items = [
    {
      key: '1',
      label: (
        <button className='custom-underline px-5 py-2 font-semibold text-[#ccc] focus:text-[#000] max-md:text-[14px] '>
          Lên kế hoạch cho khung chương trình
        </button>
      ),
      children: (
        <div className='mx-auto grid max-w-[800px] grid-cols-2 gap-5 pt-4 text-left max-601:grid-cols-1   '>
          <div className='pt-8 max-md:text-[14px] max-601:order-2'>
            <p>
              Hãy bắt đầu với niềm đam mê và kiến thức của bạn. Sau đó, bạn có thể chọn một chủ đề triển vọng với sự trợ
              giúp của công cụ Thông tin chi tiết về thị trường.
            </p>
            <p>Bạn là người quyết định phương pháp cũng như kiến thức giảng dạy</p>
            <h4 className=' font-semibold'>Cách chúng tôi giúp bạn</h4>
            <p>
              Chúng tôi cung cấp nhiều tài nguyên về cách tạo khóa học đầu tiên. Ngoài ra, bảng điều khiển của giảng
              viên và trang khung chương trình của chúng tôi sẽ giúp bạn tổ chức khóa học hiệu quả.
            </p>
          </div>
          <img
            className='my-auto max-601:order-1 max-601:mx-auto max-601:w-[50%]'
            src='https://s.udemycdn.com/teaching/plan-your-curriculum-v3.jpg'
          ></img>
        </div>
      )
    },
    {
      key: '2',
      label: (
        <button className='px-5 py-2 font-semibold text-[#ccc] focus:text-[#000] max-md:text-[14px] '>
          Quay video
        </button>
      ),
      children: (
        <div className='mx-auto grid max-w-[800px] grid-cols-2 gap-5 pt-4 text-left max-601:grid-cols-1 '>
          <div className='pt-8 max-md:text-[14px] max-601:order-2'>
            <p>
              Sử dụng các công cụ cơ bản như điện thoại thông minh hoặc camera DSLR. Thêm một chiếc micrô tốt là bạn đã
              sẵn sàng bắt đầu.
            </p>
            <p>
              Nếu không thích xuất hiện trên camera, bạn chỉ cần ghi lại màn hình của mình. Dù với cách nào thì bạn cũng
              nên quay video dài từ 2 tiếng trở lên cho khóa học có trả phí.
            </p>
            <h4>Cách chúng tôi giúp bạn</h4>
            <p>
              Nhóm Hỗ trợ của chúng tôi luôn sẵn sàng trợ giúp bạn trong suốt quá trình thực hiện và đưa ra phản hồi về
              video thử nghiệm.
            </p>
          </div>
          <img
            className='my-auto max-601:order-1 max-601:mx-auto max-601:w-[50%]'
            src='https://s.udemycdn.com/teaching/record-your-video-v3.jpg'
          ></img>
        </div>
      )
    },
    {
      key: '3',
      label: (
        <button className='px-5 py-2 font-semibold text-[#ccc] focus:text-[#000] max-md:text-[14px] '>
          Ra mắt khoá học
        </button>
      ),
      children: (
        <div className='mx-auto grid max-w-[800px] grid-cols-2 gap-5 pt-4 text-left max-601:grid-cols-1 '>
          <div className='pt-8 max-md:text-[14px] max-601:order-2'>
            <p>
              Thu thập các xếp hạng và đánh giá đầu tiên bằng cách quảng bá khóa học trên mạng xã hội và mạng lưới nghề
              nghiệp của bạn.
            </p>
            <p>
              Người dùng sẽ dễ dàng khám phá khóa học của bạn trên cổng khóa học của chúng tôi. Đây là nơi bạn kiếm được
              doanh thu từ mỗi lượt ghi danh có trả phí.
            </p>
            <h4>Cách chúng tôi giúp bạn</h4>
            <p>
              Công cụ coupon tùy chỉnh cho phép bạn đưa ra ưu đãi thu hút học viên ghi danh, đồng thời các chương trình
              quảng cáo toàn cầu của chúng tôi giúp thúc đẩy lưu lượng truy cập vào khóa học. Thậm chí các khóa học còn
              có nhiều cơ hội được chúng tôi lựa chọn cho tuyển tập Udemy Business.
            </p>
          </div>
          <img
            className='my-auto max-601:order-1 max-601:mx-auto max-601:w-[50%]'
            src='https://s.udemycdn.com/teaching/launch-your-course-v3.jpg'
          ></img>
        </div>
      )
    }
  ]
  buttons.forEach((button) => {
    button.addEventListener('focus', (event) => {
      const targetElement = event.target as HTMLElement
      const target = targetElement.getAttribute('id')
      if (target) {
        sections.forEach((section) => {
          section.classList.add('hidden')
        })
        const targetElement = document.getElementById(target)
        if (targetElement) {
          targetElement.classList.remove('hidden')
        }
      }
    })
  })

  return (
    <div className='mx-[4%] p-6 '>
      <div>
        <img
          className=' mx-auto grid h-full  max-h-[600px] w-full max-w-[1800px] grid-cols-1'
          src='https://s.udemycdn.com/teaching/billboard-desktop-2x-v4.jpg'
          bg-no-repeat
          bg-contain
          alt=''
        />
        <div className='absolute top-40 mx-[15%] my-auto w-[480px] pl-8 text-left max-4xl:mx-[10%] max-3xl:mx-[7%] max-2xl:top-20  max-2xl:mx-[6%] max-xl:top-10 max-xl:mx-[5%] max-lg:w-[288px] max-md:relative max-md:mx-0  max-md:w-full max-md:pl-0 max-md:text-center   '>
          <h1 className='text-5xl font-semibold  max-lg:text-[24px]'>Hãy đến giảng dạy với chúng tôi</h1>
          <p className='pt-2 text-lg  max-lg:text-[14px]'>
            Trở thành giảng viên và thay đổi cuộc sống của mọi người,bao gồm cả cuộc sống của chính bạn
          </p>
          <button className='mt-7 w-[100%] bg-[#1c1d1f]  py-4 max-842:mt-0 max-md:mt-7'>
            <a className='font-semibold text-white max-lg:text-[12px]'>Bắt đầu</a>
          </button>
        </div>
      </div>
      <div className='px-6 py-20 text-center  '>
        <h2 className='text-[32px] font-semibold'>Có quá nhiều lý do để bắt đầu</h2>
        <div className='grid w-full grid-cols-3 max-601:grid-cols-2 max-601:grid-rows-2 max-500:grid-cols-1 '>
          <div className=' grid-cols-1  px-[10px]'>
            <img className='mx-auto' src='https://s.udemycdn.com/teaching/value-prop-teach-2x-v3.jpg'></img>
            <h3 className='text-[16px] font-semibold'>Giảng dạy theo cách của bạn</h3>
            <p className='text-[14px]'>
              {' '}
              Xuất bản khóa học mong muốn, theo cách mong muốn và bạn luôn có quyền kiểm soát nội dung của riêng mình.
            </p>
          </div>
          <div className=' grid-cols-1  px-[10px]'>
            <img className='mx-auto' src='https://s.udemycdn.com/teaching/value-prop-inspire-2x-v3.jpg'></img>
            <h3 className='text-[16px] font-semibold'>Truyền cảm hứng cho học viên </h3>
            <p className='text-[14px]'>
              Dạy những gì bạn biết và giúp học viên khám phá sở thích, tiếp thu kỹ năng mới và thăng tiến trong sự
              nghiệp của họ.{' '}
            </p>
          </div>
          <div className=' grid-cols-1  px-[10px]'>
            <img className='mx-auto' src='https://s.udemycdn.com/teaching/value-prop-get-rewarded-2x-v3.jpg'></img>
            <h3 className='text-[16px] font-semibold'>Nhận phần thưởng</h3>
            <p className='text-[14px]'>
              Mở rộng mạng lưới nghề nghiệp, xây dựng kiến thức chuyên môn và kiếm thu nhập từ mỗi lượt ghi danh có trả
              phí.
            </p>
          </div>
        </div>
      </div>

      <div className='flex flex-wrap justify-evenly  bg-[#5624d0]'>
        <div className='px-6 py-4  font-semibold text-white'>
          <div className='text-[28px]'>
            <span> 57</span>M
          </div>
          <span className='text-[14px]'> Học viên</span>
        </div>
        <div className='px-6 py-4 font-semibold text-white'>
          <div className='text-[28px]'>
            Hơn
            <span> 75</span>
          </div>
          <span className='text-[14px]'> Ngôn ngữ</span>
        </div>
        <div className='px-6 py-4 font-semibold text-white'>
          <div className='text-[28px]'>
            <span> 733</span>M
          </div>
          <span className='text-[14px]'> Số lượt ghi danh</span>
        </div>
        <div className='px-6 py-4 font-semibold text-white'>
          <div className='text-[28px]'>
            Hơn
            <span> 180</span>
          </div>
          <span className='text-[14px]'> Quốc gia</span>
        </div>
        <div className='px-6 py-4 font-semibold text-white'>
          <div className='text-[28px]'>
            Hơn
            <span> 13400</span>
          </div>
          <span className='text-[14px]'>Khách hàng doanh nghiệp</span>
        </div>
      </div>

      <div className='mx-[5%] px-6 py-[88px] max-500:hidden '>
        <div className='text-center text-[32px] font-semibold'>Cách thức bắt đầu</div>
        <Tabs className='' defaultActiveKey='1' centered items={items} onChange={onChange} />
      </div>

      <div className='bg-violet-50 px-[24px] py-[88px] text-center'>
        <h2 className='text-[32px] font-semibold'>Trở thành giảng viên ngay hôm nay</h2>
        <p className='mt-3 text-[18px] '>Tham gia một trong những thị trường học tập trực tuyến lớn nhất thế giới.</p>
        <button className='mt-6 bg-[#1c1d1f] px-[60px] py-[10px]'>
          <a className='text-[14px] font-semibold text-white'>Bắt đầu</a>
        </button>
      </div>
    </div>
  )
}

export default Becometeacher
