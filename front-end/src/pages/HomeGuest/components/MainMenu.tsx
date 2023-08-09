import React, { useState } from 'react'
import { StyleMenuItem } from './styleMenuItem'
import { Link } from 'react-router-dom'
import { StyledMenu } from './styleMenu'
import { FaAngleDown, FaMoneyCheckAlt, FaSitemap } from 'react-icons/fa'
import { Button } from '@mui/material'
import MainMenuItem from './MainMenuItem'
import { block1 } from './dataMenu'

function MainMenu() {
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
      <ul className='flex  items-center justify-between'>
        <li className='font-semibold'>Về chúng tôi</li>
        <li>
          <StyleMenuItem
            className='p-[6px] font-semibold'
            sx={{ zIndex: (theme: { zIndex: { modal: number } }) => theme.zIndex.modal + 1 }}
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
          >
            <Link to='/' className='flex items-center'>
              Học tập <FaAngleDown className='ml-1 mt-1' />
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
              <ul>
                <li>
                  <h4 className='font-bold'>Danh mục</h4>
                </li>
                {block1.map((item) => {
                  return (
                    <MainMenuItem
                      key={item.id}
                      images={<item.images className='text-3xl' />}
                      link={item.link}
                      title={item.title}
                      description={item.description}
                    />
                  )
                })}
              </ul>
              <ul>
                <li>
                  <h4 className='font-bold'>Tính năng</h4>
                </li>
                {block1.map((item) => {
                  return (
                    <MainMenuItem
                      key={item.id}
                      images={<item.images className='text-3xl' />}
                      link={item.link}
                      title={item.title}
                      description={item.description}
                    />
                  )
                })}
              </ul>
              <ul className='w-[30%]'>
                <li>
                  <h4 className='font-bold'>Bắt đầu sử dụng</h4>
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
            </div>
          </StyledMenu>
        </li>
        <li>
          <StyleMenuItem
            className='p-[6px] font-semibold'
            sx={{ zIndex: (theme: { zIndex: { modal: number } }) => theme.zIndex.modal + 1 }}
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
          >
            <Link to='/' className='flex items-center'>
              Học tập <FaAngleDown className='ml-1 mt-1' />
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
              <ul>
                <li>
                  <h4 className='font-bold'>Danh mục</h4>
                </li>
                {block1.map((item) => {
                  return (
                    <MainMenuItem
                      key={item.id}
                      images={<item.images className='text-3xl' />}
                      link={item.link}
                      title={item.title}
                      description={item.description}
                    />
                  )
                })}
              </ul>
              <ul>
                <li>
                  <h4 className='font-bold'>Tính năng</h4>
                </li>
                {block1.map((item) => {
                  return (
                    <MainMenuItem
                      key={item.id}
                      images={<item.images className='text-3xl' />}
                      link={item.link}
                      title={item.title}
                      description={item.description}
                    />
                  )
                })}
              </ul>
            </div>
          </StyledMenu>
        </li>
        <li className='font-semibold'>Tin tức</li>
      </ul>
    </>
  )
}

export default MainMenu
