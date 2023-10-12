import { FaInfoCircle } from 'react-icons/fa'


export const tourConfig = [
    {
      selector: '[data-tut="reactour__backtohomebutton"]',
      content: () => (
        <>
          <div className=''>
            <h2 className='flex items-center text-lg font-semibold text-color1'>
              <FaInfoCircle /> <span className='ml-2'>Trở lại trang chủ</span>
            </h2>
            <p className='mt-3 text-color1'>Bạn có thể quay trở lại trang chủ tại đây</p>
          </div>
        </>
      )
    },
    {
      selector: '[data-tut="reactour__workspace"]',
      content: () => (
        <>
          <div className=''>
            <h2 className='flex items-center text-lg font-semibold text-color1'>
              <FaInfoCircle /> <span className='ml-2'>Khu vực làm việc</span>
            </h2>
            <p className='mt-3 text-color1'>
              Đây là khu vực làm việc chính, bạn có thể xem video bào học, đọc tài liệu tại đây
            </p>
          </div>
        </>
      )
    },
    {
      selector: '[data-tut="reactour__changelesson"]',
      content: () => (
        <>
          <div className=''>
            <h2 className='flex items-center text-lg font-semibold text-color1'>
              <FaInfoCircle /> <span className='ml-2'>Khu vực điều khiển</span>
            </h2>
            <p className='mt-3 text-color1'>
              Bạn có thể điều khiển các bài học tại đây, ví dụ: đổi bài học, chọn bài học, kiểm tra, xem những bài đã
              học xong
            </p>
            <p className='mt-3 text-color1'>Lưu ý: Sau khi học xong 1 bài học, ban mới có thể chọn bài tiếp theo</p>
          </div>
        </>
      )
    },
    {
      selector: '[data-tut="reactour__note"]',
      content: () => (
        <>
          <div className=''>
            <h2 className='flex items-center text-lg font-semibold text-color1'>
              <FaInfoCircle /> <span className='ml-2'>Thêm ghi chú nhanh</span>
            </h2>
            <p className='mt-3 text-color1'>Trong suốt quá trình học bạn có thể thêm ghi chú của riêng mình</p>
          </div>
        </>
      )
    }
  ]