import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from 'src/assets/logo.png'
import ClickPopover from '../ClickPopover'
import { deleteStorage } from 'src/utils/storage'
import { AppContext } from 'src/context/app.context'
import { useQuery } from '@tanstack/react-query'
import profileApi from 'src/apis/user.api'

function NavbarUser() {
  const navigate = useNavigate()
  const { setIsAuthenticate, setProfile, profile } = useContext(AppContext)
  // call api userinfo
  const { data: profileData } = useQuery({
    queryKey: ['userInfo'],
    queryFn: () => profileApi.getProfile()
  })

  const handleLogout = () => {
    deleteStorage('access_token')
    deleteStorage('profile')
    setIsAuthenticate(false)
    setProfile(null)
    navigate('/')
  }

  function handleKeyDown(event: any): void {
    throw new Error('Function not implemented.')
  }

  return (
    <>
      <div className='sticky left-0 right-0 top-0 z-[2] flex items-center justify-between border-b border-[#e8ebed] bg-white px-7 py-2'>
        <div className='w-[100px]'>
          <img className='w-full' src={logo} alt='logo website' />
        </div>
        <div className='flex items-center'>
          <Link className='mr-4' to='/my-course'>
            Khóa học của tôi
          </Link>
          <ClickPopover
            renderPopover={
              <div className=''>
                <div className='flex items-center justify-between'>
                  <h5 className='flex font-medium text-[#757575]'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='mr-1 h-6 w-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z'
                      />
                    </svg>
                    Thông báo
                  </h5>
                  <h6 className='cursor-pointer px-1 transition hover:bg-gray-200'>Đánh dấu đã đọc</h6>
                </div>
              </div>
            }
            className='w-[400px] rounded bg-white px-5 py-6 shadow-3xl'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='mt-2 h-6 w-6 text-[#757575]'
            >
              <path d='M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0 011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z' />
              <path
                fillRule='evenodd'
                d='M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z'
                clipRule='evenodd'
              />
            </svg>
          </ClickPopover>

          <ClickPopover
            renderPopover={
              <div className=''>
                <div className='flex items-center justify-between'>
                  <div className='ml-3 h-[40px] w-[40px] cursor-pointer rounded-[50%] bg-black'></div>
                  <div className='w-[65%] overflow-hidden text-ellipsis whitespace-nowrap '>
                    <h5 className='font-semibold'>{profileData?.data.username}</h5>
                    <p className='text-[12px] text-[#757575]'>{profileData?.data?.email}</p>
                  </div>
                </div>
                <div
                  onKeyDown={handleKeyDown}
                  role={'button'}
                  tabIndex={0}
                  className='trasition my-2 flex items-center px-2 py-2 text-[#757575] hover:cursor-pointer hover:bg-gray-100'
                  onClick={handleLogout}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='mr-2 h-6 w-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25'
                    />
                  </svg>
                  Đổi tài khoản
                </div>
                <hr className=' h-px border-0 bg-gray-200 dark:bg-gray-100'></hr>
                <Link
                  className='trasition my-2 block flex items-center px-2 py-2 text-[#757575] hover:bg-gray-100'
                  to='/me'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='mr-2 h-6 w-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
                    />
                  </svg>
                  Trang cá nhân
                </Link>
                <Link
                  className='trasition my-2 block flex items-center px-2 py-2 text-[#757575] hover:bg-gray-100'
                  to='/me'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='mr-2 h-6 w-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z'
                    />
                  </svg>
                  Câu hỏi thường gặp
                </Link>
                <Link
                  className='trasition my-2 block flex items-center px-2 py-2 text-[#757575] hover:bg-gray-100'
                  to='/me'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='mr-2 h-6 w-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z'
                    />
                    <path strokeLinecap='round' strokeLinejoin='round' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                  </svg>
                  Cài đặt
                </Link>
                <Link
                  className='trasition my-2 block flex items-center px-2 py-2 text-[#757575] hover:bg-gray-100'
                  to='/me'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='mr-2 h-6 w-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3'
                    />
                  </svg>
                  Kết quả học tập
                </Link>
                <hr className=' h-px border-0 bg-gray-200 dark:bg-gray-100'></hr>
                <div
                  onKeyDown={handleKeyDown}
                  role={'button'}
                  tabIndex={0}
                  className='trasition my-2 flex items-center px-2 py-2 text-[#757575] hover:cursor-pointer hover:bg-gray-100'
                  onClick={handleLogout}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='mr-2 h-6 w-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9'
                    />
                  </svg>
                  Đăng xuất
                </div>
              </div>
            }
            className='w-[250px] rounded bg-white px-5 py-6 shadow-3xl'
          >
            <div className=''>
              <div className='ml-3 h-[40px] w-[40px] cursor-pointer rounded-[50%] bg-black'></div>
            </div>
          </ClickPopover>
        </div>
      </div>
    </>
  )
}

export default NavbarUser
