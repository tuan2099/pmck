import { FaPlus } from 'react-icons/fa'

import { Fab } from '@mui/material'

import ListmenuSidebar from './components/ListmenuSidebar'
import NewFeed from '../NewFeed'

function SidebarUser() {
  return (
    <>
      <div className='sticky left-0 top-[94px] flex w-[96px] flex-col items-center px-[8px]'>
        <Fab color='primary' aria-label='add'>
          <FaPlus />
        </Fab>
        <ListmenuSidebar />
        <NewFeed />
      </div>
    </>
  )
}

export default SidebarUser
