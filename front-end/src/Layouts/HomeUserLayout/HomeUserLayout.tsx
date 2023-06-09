import React from 'react'
import Footer from 'src/components/Footer'
import NavbarUser from 'src/components/NavbarUser'
import SidebarUser from 'src/components/sidebarUser'

interface Props {
  children?: React.ReactNode
}

function HomeUserLayout({ children }: Props) {
  return (
    <>
      <NavbarUser />
      <div className='flex h-screen '>
        <div className='h-full shrink-0'>
          <SidebarUser />
        </div>
        <div className='w-[118rem] max-w-[calc(100%-96px)]'>{children}</div>
      </div>
    </>
  )
}

export default HomeUserLayout
