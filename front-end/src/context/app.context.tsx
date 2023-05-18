import { useState, createContext } from 'react'
import { User } from 'src/types/user.type'
import { getAccesTokenLocalStorage, getProfileFromLocalStorage } from 'src/utils/auth'

interface AppContextInterface {
  isAuthenticated: boolean
  setIsAuthenticate: React.Dispatch<React.SetStateAction<boolean>>
  profile: User | null
  setProfile: React.Dispatch<React.SetStateAction<User | null>>
  //   extendPurchases: ExtendedPurchases[]
  //   setExtendedPurchases: React.Dispatch<React.SetStateAction<ExtendedPurchases[]>>
  // reset: () => void
}

const initialAppContext: AppContextInterface = {
  isAuthenticated: Boolean(getAccesTokenLocalStorage()),
  setIsAuthenticate: () => null,
  profile: getProfileFromLocalStorage(),
  setProfile: () => null
  // extendPurchases: [],
  // setExtendedPurchases: () => null,
  // reset: () => null
}

export const AppContext = createContext<AppContextInterface>(initialAppContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticate] = useState<boolean>(initialAppContext.isAuthenticated)
  const [profile, setProfile] = useState<User | null>(initialAppContext.profile)
  console.log(isAuthenticated)
  return (
    <AppContext.Provider value={{ isAuthenticated, setIsAuthenticate, profile, setProfile }}>
      {children}
    </AppContext.Provider>
  )
}
