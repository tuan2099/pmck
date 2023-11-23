import { Box, ButtonBase } from '@mui/material'
import React, { useState } from 'react'
import { FaExpand } from 'react-icons/fa'

const FullScreenViewer = () => {
  const [isFullScreen, setIsFullScreen] = useState(false)

  const toggleFullScreen = () => {
    const elem = document.documentElement as HTMLElement

    if (!isFullScreen) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen()
      }
      setIsFullScreen(true)
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
      setIsFullScreen(false)
    }
  }

  return (
    <ButtonBase
      sx={{
        padding: '15px',
        borderRadius: '50%',
        ':hover': {
          backgroundColor: '#ebebeb'
        }
      }}
      onClick={toggleFullScreen}
    >
      <FaExpand />
    </ButtonBase>
  )
}

export default FullScreenViewer
