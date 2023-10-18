/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import { useQuery } from '@tanstack/react-query'
import { useState, createContext, useEffect } from 'react'
import courseApi from 'src/apis/course.api'
import { CourseType } from 'src/types/course.type'
import { User } from 'src/types/user.type'
import { getAccesTokenLocalStorage, getProfileFromLocalStorage } from 'src/utils/auth'
import useQueryConfig, { ConfigParams } from 'src/hooks/useQueryConfig'
import { tourConfig } from 'src/constant/tourconfig'

interface AppContextInterface {
  isAuthenticated: boolean
  setIsAuthenticate: React.Dispatch<React.SetStateAction<boolean>>
  profile: User | any
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
  isTourOpen: any
  tourConfig: any
  openTour: any
  closeTour: any
}

const initialAppContext: AppContextInterface = {
  isAuthenticated: Boolean(getAccesTokenLocalStorage()),
  setIsAuthenticate: () => null,
  profile: getProfileFromLocalStorage(),
  setProfile: () => null,
  setUserInfo: () => null,
  userInfo: [],
  courseRegisted: [],
  setCourseRegisted: () => {},
  refetchRegistedCourse: () => {},
  allCourse: [],
  setAllCourse: () => {},
  refetchAllCourse: () => {},
  newCourses: [],
  freeCourse: [],
  isTourOpen: false,
  tourConfig: [],
  openTour: () => null,
  closeTour: () => null
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
  const [isTourOpen, setIsTourOpen] = useState(initialAppContext.isTourOpen)
  const queryConfig = useQueryConfig()

  const openTour = () => {
    setIsTourOpen(!isTourOpen)
  }

  const closeTour = () => {
    setIsTourOpen(!isTourOpen)
  }

  const { refetch } = useQuery({
    queryKey: ['courseRegisted'],
    queryFn: () => courseApi.registerCoursess(),
    onSuccess: (data) => {
      setCourseRegisted(data.data.data)
    },
    // eslint-disable-next-line no-extra-boolean-cast
    enabled: !Boolean(courseRegisted.length)
  })

  const getAllCourse = useQuery({
    queryKey: ['allCourse', queryConfig],
    queryFn: () => {
      return courseApi.getCourse({ ...(queryConfig as ConfigParams) })
    },
    onSuccess: (data) => {
      setAllCourse(data?.data.data)
    },
    enabled: allCourse.length === 0
  })

  useEffect(() => {
    const news = allCourse.filter((course) => {
      const check = course.attributes.course_categories?.data?.some((item) => item.attributes.name === 'new_course')
      if (check) return course
    })

    const free = allCourse.filter((course) => {
      const check = course.attributes.course_categories?.data?.some((item) => item.attributes.name === 'free_course')
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
        newCourses,
        tourConfig,
        isTourOpen,
        openTour,
        closeTour
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
