import { Box, Button, ButtonBase, Popover, Typography } from '@mui/material'
import React, { useState } from 'react'
import { FaThLarge } from 'react-icons/fa'
import { calendar, chat, mail, table, task } from 'src/assets/images'

const ApplicationMenu = () => {
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
        <FaThLarge />
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
          <Box sx={{ backgroundColor: '#7366ff', padding: '20px' }}>
            <Typography fontWeight={600} color={'white'}>
              Applications
            </Typography>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', padding: '4px' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingY: '10px',
                gap: '10px'
              }}
            >
              <img src={calendar} alt='' />
              <Typography fontSize={15} fontWeight={600}>
                Calender
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingY: '10px',
                gap: '10px'
              }}
            >
              <img src={chat} alt='' />
              <Typography fontSize={15} fontWeight={600}>
                Chat
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingY: '10px',
                gap: '10px'
              }}
            >
              <img src={task} alt='' />
              <Typography fontSize={15} fontWeight={600}>
                Task
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingY: '10px',
                gap: '10px'
              }}
            >
              <img src={mail} alt='' />
              <Typography fontSize={15} fontWeight={600}>
                Mail
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingY: '10px',
                gap: '10px'
              }}
            >
              <img src={table} alt='' />
              <Typography fontSize={15} fontWeight={600}>
                Table
              </Typography>
            </Box>
          </Box>
        </Box>
      </Popover>
    </Box>
  )
}

export default ApplicationMenu
