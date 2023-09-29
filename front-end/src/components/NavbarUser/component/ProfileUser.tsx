import React, { useContext, useState } from 'react'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import { AppContext } from 'src/context/app.context'
import { deleteStorage } from 'src/utils/storage'
import { ListMenuItems } from './dataMenu'
import Tooltip from '@mui/material/Tooltip'
import { Link, useNavigate } from 'react-router-dom'
import { Badge, ListItemText, Typography, styled } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import profileApi from 'src/apis/user.api'
import { v4 as uuidv4 } from 'uuid'

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""'
    }
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0
    }
  }
}))

function ProfileUser() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const { setIsAuthenticate, setProfile } = useContext(AppContext)
  const navigate = useNavigate()
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    deleteStorage('access_token')
    deleteStorage('profile')
    setIsAuthenticate(false)
    setProfile(null)
    navigate('/')
  }

  const { data: profileData } = useQuery({
    queryKey: ['userInfo'],
    queryFn: () => profileApi.getProfile()
  })

  // console.log(profileData?.data)

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title='Hồ sơ người dùng'>
          <IconButton
            onClick={handleClick}
            size='small'
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }} src='' alt={`${profileData?.data.username}`}></Avatar>
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
        <MenuItem key={uuidv4()}>
          <StyledBadge overlap='circular' anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant='dot'>
            <Avatar alt={`${profileData?.data.username}`} src='/static/images/avatar/1.jpg' />
          </StyledBadge>
          <div className='mr-2'></div>
          <ListItemText
            primary={profileData?.data.username}
            secondary={
              <React.Fragment>
                <Typography sx={{ display: 'inline' }} component='span' variant='body2' color='text.primary'>
                  {profileData?.data.email}
                </Typography>
              </React.Fragment>
            }
          />
        </MenuItem>
        <Divider />

        {ListMenuItems.map((menuItem: any) => {
          return (
            <Link key={menuItem.id} className='my-2 block items-center' to={`/${menuItem.link}`}>
              <MenuItem onClick={handleClose} key={uuidv4()}>
                {menuItem.icon}
                {menuItem.name}
              </MenuItem>
            </Link>
          )
        })}
        <Divider />
        <MenuItem onClick={handleLogout} key={uuidv4()}>
          <ListItemIcon>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9'
              />
            </svg>
          </ListItemIcon>
          Đăng xuất
        </MenuItem>
      </Menu>
    </>
  )
}

export default ProfileUser
