import { TextField, styled } from '@mui/material'

export const CommonInput = styled(TextField)({
  '.MuiInputBase-root': {
    borderRadius: '6px',
    backgroundColor: 'white',
    overflow: 'hidden',
    input: {
      padding: '12px'
    }
  },
  '.MuiOutlinedInput-notchedOutline': { border: 'none' },
  '.Mui-error': {
    border: '1px solid rgb(243, 174, 175)',
    backgroundColor: 'rgb(255, 239, 239)',
    '&:hover': {
      border: '1px solid rgb(243, 174, 175)',
      backgroundColor: 'rgb(255, 239, 239)'
    }
  },
  '.MuiFormHelperText-root': {
    border: 'none',
    backgroundColor: 'transparent',
    '&:hover': {
      border: 'none',
      backgroundColor: 'transparent'
    }
  }
})
