import { Box, ButtonBase, Popover, Typography } from '@mui/material'
import React, { useState } from 'react'
import { FaBell, FaClock, FaEnvelope, FaTimes } from 'react-icons/fa'

const NotificationBox = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const popoverId = open ? 'popover' : undefined
  return (
    <Box>
      <ButtonBase
        onClick={handleClick}
        sx={{
          padding: '15px',
          borderRadius: '50%',
          ':hover': {
            backgroundColor: '#ebebeb'
          }
        }}
      >
        <FaBell />
      </ButtonBase>
      <Popover
        id={popoverId}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        style={{ marginTop: '10px' }}
      >
        <Box
          sx={{
            overflow: 'hidden auto',
            minHeight: '16px',
            maxWidth: 'calc(100% - 32px)',
            maxHeight: 'calc(100% - 32px)',
            outline: '0px',
            boxShadow: 'rgb(236, 238, 240) 0px 5px 15px',
            minWidth: '322px',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Box
            sx={{
              backgroundColor: '#7366ff',
              padding: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Typography fontWeight={600} color={'white'}>
              Notifications
            </Typography>
            <Typography fontWeight={500} fontSize={14} color={'white'}>
              Mark all as read
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', padding: '4px' }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '11px',
                gap: '10px'
              }}
            >
              <FaEnvelope />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ flex: '1' }} fontSize={16} fontWeight={500}>
                  Please check your mail
                </Typography>
                <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                  <Typography fontSize={10} color={'#0000008a'}>
                    <FaClock />
                  </Typography>
                  <Typography fontSize={10} color={'#0000008a'}>
                    14 mins ago
                  </Typography>
                </Box>
              </Box>
              <FaTimes />
            </Box>
          </Box>
        </Box>
      </Popover>
    </Box>
  )
}

export default NotificationBox
