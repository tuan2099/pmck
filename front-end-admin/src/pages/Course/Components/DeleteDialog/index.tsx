import React from 'react'
import { Button, Dialog, Typography } from '@mui/material'
import { FaTrash } from 'react-icons/fa'

// import { MediumTitle } from '@/layouts/common/components/customMUI'
// import { inputColor, textColor } from '@/utils/constants'
// import { xIcon } from '@/assets/icons'

interface IProps {
  data: any
  onDelete: (data: any) => void
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  isLoading: boolean
}

const DeleteDialog = (props: IProps) => {
  const { data, onDelete, isOpen, setIsOpen, isLoading } = props

  const handleClose = () => {
    setIsOpen(false)
  }
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <div className='flex items-center justify-between pb-1 pl-6 pr-4 pt-5'>
          <Typography fontSize={24}>Delete?</Typography>
          <button onClick={handleClose}>
            <FaTrash />
          </button>
        </div>
        <div className='px-6 text-slate-500'>Are you sure you want to delete?</div>
        <div className='flex items-center gap-3 p-6'>
          <Button
            sx={{
              flex: '1',
              minWidth: '148px',
              backgroundColor: 'rgb(241, 243, 245)',
              color: '#11181C',
              textTransform: 'none'
            }}
            onClick={handleClose}
          >
            No
          </Button>
          <Button
            sx={{ flex: '1', minWidth: '148px', textTransform: 'none' }}
            color='primary'
            type='submit'
            variant='contained'
            onClick={() => onDelete(data)}
            disabled={isLoading}
          >
            Yes
          </Button>
        </div>
      </Dialog>
    </>
  )
}

export default DeleteDialog
