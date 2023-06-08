import { useState, createContext } from 'react'
import { User } from 'src/types/user.type'
import { getAccesTokenLocalStorage, getProfileFromLocalStorage } from 'src/utils/auth'

interface AppContextInterface {
  isAuthenticated: boolean
  setIsAuthenticate: React.Dispatch<React.SetStateAction<boolean>>
  profile: User | null
  setProfile: React.Dispatch<React.SetStateAction<User | null>>
  userInfo: any
  setUserInfo: any
  courseRegisted: any
  setCourseRegisted: React.Dispatch<React.SetStateAction<any>>
  // reset: () => void
}

const initialAppContext: AppContextInterface = {
  isAuthenticated: Boolean(getAccesTokenLocalStorage()),
  setIsAuthenticate: () => null,
  profile: getProfileFromLocalStorage(),
  setProfile: () => null,
  setUserInfo: () => null,
  userInfo: [],
  courseRegisted: [],
  setCourseRegisted: () => {}
  // reset: () => null
}

export const AppContext = createContext<AppContextInterface>(initialAppContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticate] = useState<boolean>(initialAppContext.isAuthenticated)
  const [profile, setProfile] = useState<User | null>(initialAppContext.profile)
  const [userInfo, setUserInfo] = useState(initialAppContext.userInfo)
  const [courseRegisted, setCourseRegisted] = useState([])

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticate,
        profile,
        setProfile,
        setUserInfo,
        userInfo,
        courseRegisted,
        setCourseRegisted
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
