import { block1 } from './dataMenu'
import MainMenuList from './mainMenuList'

function MainMenu() {
  return (
    <>
      <ul className='flex  items-center justify-between'>
        <li className='font-semibold'>Về chúng tôi</li>
        <li>
          <MainMenuList block1={block1} title='Học tập' />
        </li>
        <li>
          <MainMenuList block1={block1} title='Cộng đồng' />
        </li>
        <li className='font-semibold'>Tin tức</li>
      </ul>
    </>
  )
}

export default MainMenu
