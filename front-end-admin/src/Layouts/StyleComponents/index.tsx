import * as React from 'react'
import { styled } from '@mui/system'

const SideBarContainer = styled('div')({
  width: '329px',
  height: '100vh',
  overflowY: 'auto',
  backgroundColor: 'white',
  padding: '20px'
})

const Container = styled('div')({
  flex: 1,
  backgroundColor: '#F0EFF3',
  height: '100vh',
  overflowY: 'auto',
  padding: '20px 25px'
})

export { SideBarContainer, Container }
