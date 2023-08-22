import { useQuery } from '@tanstack/react-query'
import MainMenuList from './mainMenuList'
import mainmenuApi from 'src/apis/menuApi'

function MainMenu() {
  // get data main menu
  const { data: mainMenuData } = useQuery({
    queryKey: ['mainMenuData'],
    queryFn: () => {
      return mainmenuApi.getMainmenu()
    }
  })
  return (
    <>
      <ul className='flex items-center justify-between'>
        {mainMenuData &&
          mainMenuData?.data.data.attributes.body?.map((item: any) => {
            return (
              <>
                <MainMenuList key={item.id} items={item} title={item.label} />
              </>
            )
          })}
      </ul>
    </>
  )
}

export default MainMenu
