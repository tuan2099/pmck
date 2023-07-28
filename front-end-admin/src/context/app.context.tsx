import { useQuery } from '@tanstack/react-query'
import { useState, createContext, useEffect } from 'react'
import courseApi from 'src/apis/course.api'
import { CourseType } from 'src/types/course.type'
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
  allCourse: CourseType[]
  setAllCourse: React.Dispatch<React.SetStateAction<CourseType[]>>
  refetchAllCourse: any
  newCourses: CourseType[]
  freeCourse: CourseType[]
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
  refetchRegistedCourse: () => {},
  allCourse: [],
  setAllCourse: () => {},
  refetchAllCourse: () => {},
  newCourses: [],
  freeCourse: []
}

export const AppContext = createContext<AppContextInterface>(initialAppContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticate] = useState<boolean>(initialAppContext.isAuthenticated)
  const [profile, setProfile] = useState<User | null>(initialAppContext.profile)
  const [userInfo, setUserInfo] = useState(initialAppContext.userInfo)
  const [courseRegisted, setCourseRegisted] = useState([])
  const [allCourse, setAllCourse] = useState<CourseType[]>([])
  const [newCourses, setNewCourses] = useState<CourseType[]>([])
  const [freeCourse, setFreeCourses] = useState<CourseType[]>([])

  const { refetch } = useQuery({
    queryKey: ['courseRegisted'],
    queryFn: () => courseApi.registerCoursess(),
    onSuccess: (data) => setCourseRegisted(data.data.data),
    enabled: !Boolean(courseRegisted.length)
  })

  const getAllCourse = useQuery({
    queryKey: ['allCourse'],
    queryFn: () => courseApi.getCourse(),
    onSuccess: (data) => {
      setAllCourse(data?.data.data)
    },
    enabled: allCourse.length === 0
  })

  useEffect(() => {
    const news = allCourse.filter((course) => {
      const check = course.attributes.course_categories.data.some((item) => item.attributes.name === 'new_course')
      if (check) return course
    })

    const free = allCourse.filter((course) => {
      const check = course.attributes.course_categories.data.some((item) => item.attributes.name === 'free_course')
      if (check) return course
    })

    setFreeCourses(free)
    setNewCourses(news)
  }, [allCourse])

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
        refetchRegistedCourse: refetch,
        allCourse,
        setAllCourse,
        refetchAllCourse: getAllCourse.refetch,
        freeCourse,
        newCourses
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
