import React, { ReactNode } from 'react'
import SideBar from '../Common/SideBar'
import { Box, styled } from '@mui/material'
import { Container } from '../StyleComponents'
import ApplicationMenu from '../Common/ApplicationMenu'
import FullScreenViewer from '../Common/FullScreenViewer'
import LanguageBox from '../Common/LanguageBox'
import NotificationBox from '../Common/NotificationBox'

const LayoutConatiner = styled('div')({
  display: 'flex'
})

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <LayoutConatiner>
      <SideBar />
      <Container>
        <Box
          sx={{
            backgroundColor: 'white',
            padding: '12px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <ApplicationMenu />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <LanguageBox />
            <NotificationBox />
            <FullScreenViewer />
          </Box>
        </Box>
        {children}
      </Container>
    </LayoutConatiner>
  )
}

export default MainLayout
