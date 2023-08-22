import React, { useState } from 'react'
import { StyleMenuItem } from './styleMenuItem'
import { Link } from 'react-router-dom'
import { StyledMenu } from './styleMenu'
import { FaAngleDown } from 'react-icons/fa'
import { Button } from '@mui/material'
import MainMenuItem from './MainMenuItem'

function MainMenuList({ title, items }: any) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const open = Boolean(anchorEl)

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  let timeoutId: NodeJS.Timeout | null = null

  const handleClose = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      setAnchorEl(null)
    }, 0)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleMenuEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
  }
  return (
    <>
      <StyleMenuItem
        className='p-[6px] font-semibold'
        sx={{ zIndex: (theme: { zIndex: { modal: number } }) => theme.zIndex.modal + 1 }}
        {...(items.sections.data.length > 0 && {
          onMouseEnter: handleOpen,
          onMouseLeave: handleClose
        })}
      >
        <Link to='/' className='flex items-center'>
          {title} {items.sections.data.length > 0 ? <FaAngleDown className='ml-1 mt-1' /> : ''}
        </Link>
      </StyleMenuItem>
      <StyledMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        MenuListProps={{
          onMouseLeave: handleMenuClose,
          onMouseEnter: handleMenuEnter
        }}
      >
        <div className='items-top flex justify-between border p-7'>
          <ul className='w-[30%]'>
            <li>
              <h4 className='font-bold text-slate-400'>{items.sections.data[0]?.attributes.label_col_1}</h4>
            </li>
            {items.sections.data[0]?.attributes.links.map((item: any) => {
              return <MainMenuItem key={item.id} item={item} />
            })}
          </ul>
          <ul className='w-[30%]'>
            <li>
              <h4 className='font-bold text-slate-400'>{items.sections.data[0]?.attributes.label_col_2}</h4>
            </li>
            {items.sections.data[0]?.attributes.link2.map((item: any) => {
              return <MainMenuItem key={item.id} item={item} />
            })}
          </ul>
          {items.label === 'Học tập' ? (
            <>
              <ul className='w-[30%]'>
                <li>
                  <h4 className='font-bold text-slate-400'>Bắt đầu sử dụng</h4>
                </li>
                <li>
                  <div>
                    <img src='http://localhost:1337/uploads/5836_5511bc10b8.jpg' alt='hình ảnh' />
                  </div>
                </li>
                <li>
                  <Button variant='contained' fullWidth>
                    Trải nghiệm PMCK
                  </Button>
                </li>
              </ul>
            </>
          ) : (
            ''
          )}
        </div>
      </StyledMenu>
    </>
  )
}

export default MainMenuList
