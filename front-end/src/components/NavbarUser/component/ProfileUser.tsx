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
            <Avatar sx={{ width: 32, height: 32 }} src='' alt='Admin PMC'></Avatar>
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
    </>
  )
}

export default ProfileUser
