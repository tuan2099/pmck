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
      <div className='flex min-h-screen'>
        <div className='hidden shrink-0 lg:block'>
          <SidebarUser />
        </div>
        <div className='w-full lg:w-[118rem] lg:max-w-[calc(100%-96px)]'>{children}</div>
      </div>
      <Footer />
    </>
  )
}

export default HomeUserLayout
