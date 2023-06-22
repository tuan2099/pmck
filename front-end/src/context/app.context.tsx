import { useQuery } from '@tanstack/react-query'
import { useState, createContext } from 'react'
import courseApi from 'src/apis/course.api'
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
  refetchRegistedCourse: any
}

const initialAppContext: AppContextInterface = {
  isAuthenticated: Boolean(getAccesTokenLocalStorage()),
  setIsAuthenticate: () => null,
  profile: getProfileFromLocalStorage(),
  setProfile: () => null,
  setUserInfo: () => null,
  userInfo: [],
  courseRegisted: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCourseRegisted: () => {},
  refetchRegistedCourse: () => {}
}

export const AppContext = createContext<AppContextInterface>(initialAppContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticate] = useState<boolean>(initialAppContext.isAuthenticated)
  const [profile, setProfile] = useState<User | null>(initialAppContext.profile)
  const [userInfo, setUserInfo] = useState(initialAppContext.userInfo)
  const [courseRegisted, setCourseRegisted] = useState([])

  const { refetch } = useQuery({
    queryKey: ['courseRegisted'],
    queryFn: () => courseApi.registerCoursess(),
    onSuccess: (data) => setCourseRegisted(data.data.data),
    enabled: !Boolean(courseRegisted.length)
  })

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
        setCourseRegisted,
        refetchRegistedCourse: refetch
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
