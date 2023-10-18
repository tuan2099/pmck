import { Link, NavLink } from 'react-router-dom'
import { FaPlus, FaHome, FaRoad, FaMicroblog, FaHourglassHalf } from 'react-icons/fa'
import classNames from 'classnames'

function ListmenuSidebar() {
  return (
    <>
      <NavLink
        to='/user'
        className={({ isActive }) =>
          classNames(
            'mt-3 flex h-[72px] w-[72px] cursor-pointer flex-col items-center justify-center rounded-[16px] text-2xl text-zinc-900 transition hover:bg-[#e8ebed]',
            {
              'bg-[#e8ebed]': isActive
            }
          )
        }
      >
        <FaHome className='text-color1' />
        <div className='text-sm text-color1'>Home</div>
      </NavLink>
      <NavLink
        // to='/learning-paths'
        to='/undercontruction'
        className={({ isActive }) =>
          classNames(
            'mt-3 flex h-[72px] w-[72px] cursor-pointer flex-col items-center justify-center rounded-[16px] text-2xl text-zinc-900 transition hover:bg-[#e8ebed]',
            {
              'bg-[#e8ebed]': isActive
            }
          )
        }
      >
        <FaRoad className='text-color1' />
        <div className='text-sm'>Lộ trình</div>
      </NavLink>
      <NavLink
        to='/new'
        className={({ isActive }) =>
          classNames(
            'mt-3 flex h-[72px] w-[72px] cursor-pointer flex-col items-center justify-center rounded-[16px] text-2xl text-zinc-900 transition hover:bg-[#e8ebed]',
            {
              'bg-[#e8ebed]': isActive
            }
          )
        }
      >
        <FaMicroblog className='text-color1' />
        <div className='text-sm'>Tin tức</div>
      </NavLink>
      <NavLink
        to='/courses'
        className={({ isActive }) =>
          classNames(
            'mt-3 flex h-[72px] w-[72px] cursor-pointer flex-col items-center justify-center rounded-[16px] text-2xl text-zinc-900 transition hover:bg-[#e8ebed]',
            {
              'bg-[#e8ebed]': isActive
            }
          )
        }
      >
        <FaHourglassHalf className='text-color1' />
        <div className='text-sm'>Học</div>
      </NavLink>
    </>
  )
}

export default ListmenuSidebar
