import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from 'src/assets/logo.png'
import ClickPopover from '../ClickPopover'
import { deleteStorage } from 'src/utils/storage'
import { AppContext } from 'src/context/app.context'
import { useQuery } from '@tanstack/react-query'
import profileApi from 'src/apis/user.api'
import { ListMenuItems } from './component/dataMenu'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
// import PersonAdd from '@mui/icons-material/PersonAdd'
// import Settings from '@mui/icons-material/Settings';
// import Logout from '@mui/icons-material/Logout';
function NavbarUser() {
  const navigate = useNavigate()
  const { setIsAuthenticate, setProfile, profile } = useContext(AppContext)

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  // call api userinfo
  const { data: profileData } = useQuery({
    queryKey: ['userInfo'],
    queryFn: () => profileApi.getProfile()
  })
  //
  const handleLogout = () => {
    deleteStorage('access_token')
    deleteStorage('profile')
    setIsAuthenticate(false)
    setProfile(null)
    navigate('/')
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
                <div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='m-auto my-8 h-[150px] w-[150px] text-[#e5e7eb]'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M9.143 17.082a24.248 24.248 0 003.844.148m-3.844-.148a23.856 23.856 0 01-5.455-1.31 8.964 8.964 0 002.3-5.542m3.155 6.852a3 3 0 005.667 1.97m1.965-2.277L21 21m-4.225-4.225a23.81 23.81 0 003.536-1.003A8.967 8.967 0 0118 9.75V9A6 6 0 006.53 6.53m10.245 10.245L6.53 6.53M3 3l3.53 3.53'
                    />
                  </svg>
                  <p className='text-center text-[#e5e7eb]'>Hiện tại chưa có thông báo nào</p>
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

          <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
            <Tooltip title='Account settings'>
              <IconButton
                onClick={handleClick}
                size='small'
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
              >
                <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id='account-menu'
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0
                }
              }
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            {ListMenuItems.map((menuItem: any) => {
              return (
                <MenuItem onClick={handleClose} key={menuItem.id}>
                  <Link key={menuItem.id} className='my-1 block flex items-center' to={`/${menuItem.link}`}>
                    {menuItem.icon}
                    {menuItem.name}
                  </Link>
                </MenuItem>
              )
            })}

            <Divider />
            <MenuItem onClick={handleClose}>
              <ListItemIcon>{/* <PersonAdd fontSize='small' /> */}</ListItemIcon>
              Add another account
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>{/* <Logout fontSize='small' /> */}</ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </div>
      </div>
    </>
  )
}

export default NavbarUser
