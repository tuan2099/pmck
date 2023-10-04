import classNames from 'classnames'
import { FaPlus, FaHome, FaRoad, FaMicroblog, FaHourglassHalf } from 'react-icons/fa'
import Dialog from '@mui/material/Dialog'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import Tooltip from '@mui/material/Tooltip'
import { Divider, Fab, Skeleton } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import newApi from 'src/apis/new.api'
import useQueryConfig, { ConfigParams } from 'src/hooks/useQueryConfig'

function SidebarUser() {
  const [openDialog, setOpenDialog] = useState<boolean>(false)
  const handleClickOpen = () => {
    setOpenDialog(true)
  }

  const handleClose = () => {
    setOpenDialog(false)
  }
  const queryConfig = useQueryConfig()

  const {
    data: NewsNotification,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['NewsNotification', queryConfig],
    queryFn: () => newApi.getNewsNotification({ ...(queryConfig as ConfigParams) }),
    keepPreviousData: true,
    staleTime: 3 * 60 * 1000
  })
  return (
    <>
      <div className='sticky left-0 top-[94px] flex w-[96px] flex-col items-center px-[8px]'>
        <Fab color='primary' aria-label='add'>
          <FaPlus />
        </Fab>
        <NavLink
          to='/user'
          className={({ isActive }) =>
            classNames(
              'mt-3 flex h-[72px] w-[72px] cursor-pointer flex-col items-center justify-center rounded-[16px] text-2xl text-zinc-900 transition hover:bg-[#e8ebed]',
              {
                'bg-[#e8ebed]': isActive
              }
            )
          }
        >
          <FaHome className='text-color1' />
          <div className='text-sm text-color1'>Home</div>
        </NavLink>
        <NavLink
          // to='/learning-paths'
          to='/undercontruction'
          className={({ isActive }) =>
            classNames(
              'mt-3 flex h-[72px] w-[72px] cursor-pointer flex-col items-center justify-center rounded-[16px] text-2xl text-zinc-900 transition hover:bg-[#e8ebed]',
              {
                'bg-[#e8ebed]': isActive
              }
            )
          }
        >
          <FaRoad className='text-color1' />
          <div className='text-sm'>Lộ trình</div>
        </NavLink>
        <NavLink
          to='/new'
          className={({ isActive }) =>
            classNames(
              'mt-3 flex h-[72px] w-[72px] cursor-pointer flex-col items-center justify-center rounded-[16px] text-2xl text-zinc-900 transition hover:bg-[#e8ebed]',
              {
                'bg-[#e8ebed]': isActive
              }
            )
          }
        >
          <FaMicroblog className='text-color1' />
          <div className='text-sm'>Tin tức</div>
        </NavLink>
        <NavLink
          to='/courses'
          className={({ isActive }) =>
            classNames(
              'mt-3 flex h-[72px] w-[72px] cursor-pointer flex-col items-center justify-center rounded-[16px] text-2xl text-zinc-900 transition hover:bg-[#e8ebed]',
              {
                'bg-[#e8ebed]': isActive
              }
            )
          }
        >
          <FaHourglassHalf className='text-color1' />
          <div className='text-sm'>Học</div>
        </NavLink>
      </div>
      <div className='fixed bottom-5 left-4 rounded-full p-3'>
        <Tooltip title='Bảng tin' onClick={handleClickOpen} className=''>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-[50px] w-[50px] cursor-pointer rounded-full bg-[#f3f3f3]  p-3 transition hover:bg-[#c4c4c4]'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z'
            />
          </svg>
        </Tooltip>
      </div>
      <Dialog
        open={openDialog && !JSON.parse(localStorage.getItem('hidden_news_popup') as string)}
        onClose={handleClose}
        maxWidth='md'
        fullWidth
      >
        <div className='p-6'>
          <div className='flex justify-between pb-7'>
            <h2 className='text-2xl font-bold'>Bản tin PMCK</h2>
            <button className='cursor-pointer' onClick={handleClose}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
          </div>
          <div style={{ height: 'calc(100vh - 200px)' }} className='overflow-auto overscroll-auto'>
            {NewsNotification &&
              NewsNotification.data.data.map((item: any) => {
                return (
                  <>
                    <div className='mb-12' key={item.id}>
                      <h3 className='my-2 text-lg font-semibold'>
                        <span className='mr-2 text-mainGreenColor'>#</span>
                        {item.attributes.label}
                      </h3>
                      <p className='mb-3 px-4 text-color1'>{item.attributes.short_description}</p>
                      <div className='my-2 font-bold'>
                        ✅ Tìm hiểu thêm:{' '}
                        <span className='font-normal italic text-mainGreenColor underline'>
                          http://127.0.0.1:3000/user
                        </span>
                      </div>
                      <div
                        key={item.id}
                        className='h-[400px] rounded-2xl bg-cover bg-center bg-no-repeat'
                        style={{
                          backgroundImage: `url(http://localhost:1337${item.attributes.image.data[0].attributes.url})`
                        }}
                      ></div>

                      <div className='my-4'>
                        Đăng bởi <span className='font-bold text-mainGreenColor'>Admin PMCK</span>
                      </div>
                    </div>
                    <Divider />
                  </>
                )
              })}
            {isLoading ? (
              <>
                <Skeleton variant='rectangular' height={260} />
                <Skeleton />
                <Skeleton height={20} />
              </>
            ) : (
              ''
            )}
            {isError ? <>Dữ liệu đang gặp vấn đề</> : ''}
          </div>
        </div>
        <button
          className='mb-2 mr-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300'
          onClick={() => {
            handleClose()
            localStorage.setItem('hidden_news_popup', JSON.stringify(true))
          }}
        >
          Không hiển thị cho lần sau
        </button>
      </Dialog>
    </>
  )
}

export default SidebarUser
