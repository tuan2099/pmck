import Button from 'src/components/Button'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import http from 'src/utils/https'
import { ROUTES } from 'src/useRouterElement'

function Profile() {
  const { data } = useQuery({
    queryKey: ['user-certificate'],
    queryFn: () =>
      http.get('/users/me?populate[certificates][populate]=*', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      })
  })

  return (
    <>
      <div>
        <div className=''>
          <div className='m-auto w-full max-w-[1200px]'>
            <div className='relative m-auto mt-[20px] flex w-full items-center justify-between rounded-tl-[150px] bg-slate-300 pt-[28%]'>
              <div className='absolute bottom-[-110px] left-[40px] flex items-center '>
                <div className='mr-8 h-[150px] w-[150px] rounded-[50%] border-4 border-white bg-black'></div>
                <div className=''>
                  <h1 className='text-2xl font-semibold '>Profile name</h1>
                  <p className='text-inherit'>ID ngươi dùng: 398475983694</p>
                </div>
              </div>
              <div className='absolute bottom-[-110px] right-[40px]'>
                <Link to='/edit-profile'>
                  <Button className='my-6 inline-block w-full rounded bg-[#1e7115] px-6 py-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white  outline-none transition duration-150 ease-in-out hover:bg-[#103a0b] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-[#103a0b] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-[#217a17] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'>
                    Chỉnh sửa hồ sơ
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className='m-auto mt-[150px] w-full max-w-[1200px]'>
            <div className='my-6 flex items-start justify-between'>
              <div className='text-lg font-semibold'>
                Họ và tên
                <br />
                <span className='text-xs font-normal text-slate-400'>
                  * Lưu ý, tên người dùng sẽ được dùng cho chứng chỉ,
                  <br /> vui lòng nhập chính xác
                </span>
              </div>
              <input
                type='text'
                id='last_name'
                className='mr-[20%] block w-3/6 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                placeholder='Doe'
                required
                disabled
              />
            </div>
            <hr className=' h-px border-0 bg-gray-100 dark:bg-gray-100'></hr>
            <div className='my-6 flex items-start justify-between'>
              <div className='text-lg font-semibold'>
                Số điện thoại
                <br />
                <span className='text-xs font-normal text-slate-400'></span>
              </div>
              <div className='mr-[20%] flex w-3/6'>
                <span className='inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm font-semibold text-gray-400 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400'>
                  +84
                </span>
                <input
                  type='text'
                  id='website-admin'
                  className='block w-full min-w-0 flex-1 rounded-none rounded-r-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                  placeholder='elonmusk'
                  readOnly
                  value='hi'
                />
              </div>
            </div>
            <hr className=' h-px border-0 bg-gray-100 dark:bg-gray-100'></hr>
            <div className='my-6 flex items-start justify-between'>
              <div className='text-lg font-semibold'>
                Địa chỉ
                <br />
                <span className='text-xs font-normal text-slate-400'></span>
              </div>
              <input
                type='text'
                id='last_name'
                className='mr-[20%] block w-3/6 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                placeholder='Doe'
                required
                disabled
              />
            </div>
            <hr className=' h-px border-0 bg-gray-100 dark:bg-gray-100'></hr>
            <div className='my-6 flex items-start justify-between'>
              <div className='text-lg font-semibold'>
                Kết nối
                <br />
                <span className='text-xs font-normal text-slate-400'>
                  * Nhập link facebook cá nhân
                  <br />* Số điện thoại đăng kí Viber ( nếu có )
                  <br /> * Số điện thoại đăng kí Zalo ( nếu có )
                </span>
              </div>
              <div className='mr-[20%] w-3/6'>
                <div className=' flex w-full'>
                  <span className='inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm font-semibold text-gray-400 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400'>
                    Facebook
                  </span>
                  <input
                    type='text'
                    id='website-admin'
                    className='block w-full min-w-0 flex-1 rounded-none rounded-r-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                    placeholder='elonmusk'
                    readOnly
                    value='hi'
                  />
                </div>
                <div className='mt-7 flex w-full'>
                  <span className='inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm font-semibold text-gray-400 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400'>
                    Zalo
                  </span>
                  <input
                    type='text'
                    id='website-admin'
                    className='block w-full min-w-0 flex-1 rounded-none rounded-r-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                    placeholder='elonmusk'
                    readOnly
                    value='hi'
                  />
                </div>
                <div className='mt-7 flex w-full'>
                  <span className='inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm font-semibold text-gray-400 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400'>
                    Viber
                  </span>
                  <input
                    type='text'
                    id='website-admin'
                    className='block w-full min-w-0 flex-1 rounded-none rounded-r-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                    placeholder='elonmusk'
                    readOnly
                    value='hi'
                  />
                </div>
              </div>
            </div>
            <hr className=' h-px border-0 bg-gray-100 dark:bg-gray-100'></hr>
            <div className='my-6 flex items-start justify-between'>
              <div className='text-lg font-semibold'>
                Chứng chỉ
                <br />
                <span className='text-xs font-normal text-slate-400'></span>
              </div>
              <div className='col-span-2 mr-[20%] grid w-3/6 grid-cols-2 gap-2'>
                {data?.data.certificates.map((certificate: any) => (
                  <Link
                    className='inline-flex items-center rounded-md border border-r-0 border-gray-300 bg-gray-200 p-3 text-sm font-semibold text-gray-400 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400'
                    to={`${ROUTES.certificate}?certificate=${certificate.id}`}
                  >
                    {certificate?.certificate_type?.name}
                  </Link>
                ))}
              </div>
            </div>
            <hr className=' h-px border-0 bg-gray-100 dark:bg-gray-100'></hr>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
