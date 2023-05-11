import React from 'react'
import NavbarUser from 'src/components/NavbarUser'
import SidebarUser from 'src/components/sidebarUser'
interface Props {
  children?: React.ReactNode
}

function HomeUserLayout({ children }: Props) {
  return (
    <>
      <NavbarUser />
      <div className='flex min-h-screen'>
        <div className='shrink-0'>
          <SidebarUser />
        </div>
        <div>1{children}</div>
      </div>
    </>
  )
}

export default HomeUserLayout
