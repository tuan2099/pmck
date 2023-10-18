import { useState } from 'react'
import { Box, IconButton } from '@mui/material'
import Drawer from '@mui/material/Drawer'
import { Link } from 'react-router-dom'
import MainMenuItem from './MainMenuItem'

function MobileMenu({ mainMenuData }: any) {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)

  const toogleDrawer = () => {
    setOpenDrawer(!openDrawer)
  }
  return (
    <>
      <div className='block lg:hidden'>
        <IconButton onClick={toogleDrawer}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='mr-[20px] h-8 w-8 font-bold'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
          </svg>
        </IconButton>
        <Drawer open={openDrawer} anchor='left' onClose={toogleDrawer}>
          <div className='w-[43%] min-w-[300px] max-w-full md:min-w-[500px]'>
            <div className='flex items-center justify-between p-6'>
              <h2 className='text-2xl font-bold'>Danh mục</h2>
              <button className='text-xl font-bold' onClick={toogleDrawer}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='h-7 w-7'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                </svg>
              </button>
            </div>
            <div className='p-6'>
              <Box role='presentation'>
                {mainMenuData?.data?.data?.attributes?.body.map((item) => {
                  return (
                    <div key={item.id}>
                      <ul>
                        <li className='p-3 font-semibold'>
                          <Link to='/' className=''>
                            {item.label}
                          </Link>
                          {item.label === 'Cộng đồng' ? (
                            <>
                              <ul className='w-full'>
                                <li>
                                  <h4 className='font-bold text-slate-400'>
                                    {item.sections.data[0]?.attributes.label_col_3}
                                  </h4>
                                </li>
                                {item.sections.data[0]?.attributes.link3.map((item: any) => {
                                  return <MainMenuItem key={item.id} item={item} />
                                })}
                                {item.sections.data[0]?.attributes.link2.map((item: any) => {
                                  return <MainMenuItem key={item.id} item={item} />
                                })}
                                {item.sections.data[0]?.attributes.links.map((item: any) => {
                                  return <MainMenuItem key={item.id} item={item} />
                                })}
                              </ul>
                            </>
                          ) : (
                            ''
                          )}
                        </li>
                      </ul>
                    </div>
                  )
                })}
              </Box>
            </div>
          </div>
        </Drawer>
      </div>
    </>
  )
}

export default MobileMenu
