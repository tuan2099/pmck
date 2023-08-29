import { Button, Stack, styled } from '@mui/material'
import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const CustomButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '3px 10px',
  border: '3px solid',
  lineHeight: 1.5,
  backgroundColor: '#',
  borderColor: '#1e7115',
  borderRadius: '5px',
  color: '#1e7115',
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
    borderColor: '#1e7115',
    boxShadow: 'none',
    border: '3px solid'
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#1e7115',
    borderColor: '#1e7115'
  },
  '&:focus': {}
})

interface IProps {
  onNextLesson: () => void
  onPrevLesson: () => void
}

function Control(props: IProps) {
  const { onNextLesson, onPrevLesson } = props

  return (
    <>
      <div className='fixed bottom-0 left-0 right-0 z-[2] flex h-[50px] items-center justify-center bg-[#f0f0f0]'>
        <Stack direction='row' spacing={2}>
          <CustomButton variant='outlined' startIcon={<FaArrowLeft />} onClick={onPrevLesson}>
            <div className='font-semibolds'>Bài trước</div>
          </CustomButton>
          <CustomButton variant='outlined' endIcon={<FaArrowRight />} onClick={onNextLesson}>
            <div className='font-semibolds'>Bài tiếp theo</div>
          </CustomButton>
        </Stack>
      </div>
    </>
  )
}

export default Control
