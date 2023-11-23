import React, { useState } from 'react'
import { Box, Button, ButtonBase, Popover, Typography, styled } from '@mui/material'
import { us } from 'src/assets/images'
import { FaAngleDoubleDown } from 'react-icons/fa'

const Logo = styled('img')({
  width: '20px'
})

const LanguageBox = () => {
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
        <Logo src={us} alt='EN' />
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
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px' }}>
          <ButtonBase sx={{ backgroundColor: 'transparent', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Logo src={us} alt='EN' />
            <Typography>US</Typography>
          </ButtonBase>
          <ButtonBase sx={{ backgroundColor: 'transparent', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Logo src={us} alt='EN' />
            <Typography>US</Typography>
          </ButtonBase>
        </Box>
      </Popover>
    </Box>
  )
}

export default LanguageBox
