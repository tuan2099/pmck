/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import { useQuery } from '@tanstack/react-query'
import { useState, createContext, useEffect } from 'react'
import { FaInfoCircle } from 'react-icons/fa'
import courseApi from 'src/apis/course.api'
import { CourseType } from 'src/types/course.type'
import { User } from 'src/types/user.type'
import { getAccesTokenLocalStorage, getProfileFromLocalStorage } from 'src/utils/auth'

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

  const openTour = () => {
    setIsTourOpen(!isTourOpen)
  }

  const closeTour = () => {
    setIsTourOpen(!isTourOpen)
  }
  const tourConfig = [
    {
      selector: '[data-tut="reactour__backtohomebutton"]',
      content: () => (
        <>
          <div className=''>
            <h2 className='flex items-center text-lg font-semibold text-color1'>
              <FaInfoCircle /> <span className='ml-2'>Trở lại trang chủ</span>
            </h2>
            <p className='mt-3 text-color1'>Bạn có thể quay trở lại trang chủ tại đây</p>
          </div>
        </>
      )
    },
    {
      selector: '[data-tut="reactour__workspace"]',
      content: () => (
        <>
          <div className=''>
            <h2 className='flex items-center text-lg font-semibold text-color1'>
              <FaInfoCircle /> <span className='ml-2'>Khu vực làm việc</span>
            </h2>
            <p className='mt-3 text-color1'>
              Đây là khu vực làm việc chính, bạn có thể xem video bào học, đọc tài liệu tại đây
            </p>
          </div>
        </>
      )
    },
    {
      selector: '[data-tut="reactour__changelesson"]',
      content: () => (
        <>
          <div className=''>
            <h2 className='flex items-center text-lg font-semibold text-color1'>
              <FaInfoCircle /> <span className='ml-2'>Khu vực điều khiển</span>
            </h2>
            <p className='mt-3 text-color1'>
              Bạn có thể điều khiển các bài học tại đây, ví dụ: đổi bài học, chọn bài học, kiểm tra, xem những bài đã
              học xong
            </p>
            <p className='mt-3 text-color1'>Lưu ý: Sau khi học xong 1 bài học, ban mới có thể chọn bài tiếp theo</p>
          </div>
        </>
      )
    },
    {
      selector: '[data-tut="reactour__note"]',
      content: () => (
        <>
          <div className=''>
            <h2 className='flex items-center text-lg font-semibold text-color1'>
              <FaInfoCircle /> <span className='ml-2'>Thêm ghi chú nhanh</span>
            </h2>
            <p className='mt-3 text-color1'>Trong suốt quá trình học bạn có thể thêm ghi chú của riêng mình</p>
          </div>
        </>
      )
    }
  ]

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
