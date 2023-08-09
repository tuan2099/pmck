import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'

export const StyleMenuItem = styled(Button)({
  color: '#000',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '30px 12px',
  lineHeight: 1.5,
  backgroundColor: '',
  border: 'none',
  borderColor: '',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"'
  ].join(','),
  '&:hover': {
    backgroundColor: '#fff',
    borderColor: '#fff',
    boxShadow: 'none'
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '',
    borderColor: ''
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)'
  }
})
