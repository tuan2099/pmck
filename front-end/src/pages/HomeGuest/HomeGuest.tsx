import { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { homeGuestBanner } from 'src/assets/images'
import { AppContext } from 'src/context/app.context'
import { ROUTES } from 'src/useRouterElement'
import FeaturedCourse from './components/FeaturedCourse'
import { useQuery } from '@tanstack/react-query'
import courseApi from 'src/apis/course.api'
import CountUpContainer from './components/CountUp'
import { FaChalkboardTeacher, FaHandsHelping, FaSchool, FaUserGraduate } from 'react-icons/fa'
import TypicalTeacher from './components/TypicalTeacher'

const COUNT_UP_LIST = [
  {
    icon: <FaHandsHelping />,
    max: 10000,
    value: 'Chứng chỉ'
  },
  {
    icon: <FaSchool />,
    max: 1000,
    value: 'Lớp học'
  },
  {
    icon: <FaUserGraduate />,
    max: 5000,
    value: 'Học viên'
  },
  {
    icon: <FaChalkboardTeacher />,
    max: 200,
    value: 'Giảng viên'
  }
]

function HomeGuest() {
  const { isAuthenticated } = useContext(AppContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) navigate('/user')
  }, [isAuthenticated])

  const { data: featuredCourse } = useQuery({
    queryKey: ['FeaturedCourse'],
    queryFn: () => courseApi.getCourse()
  })

  return (
    <div>
      <div
        className='h-[400px] bg-cover bg-no-repeat md:h-[550px] lg:h-[650px]'
        style={{ backgroundImage: `url(${homeGuestBanner})` }}
      >
        <div className='flex h-full bg-modalColor'>
          <div className='m-auto flex flex-col items-center'>
            <h2 className='text-5xl font-semibold uppercase text-yellowColor'>Take the first step</h2>
            <h1 className='text-[65px] font-bold uppercase text-white'>To knowledge with us</h1>
            <Link
              to={ROUTES.home}
              className='block rounded-full border border-white px-5 py-3 text-xl font-semibold text-white'
            >
              Ready to get Started
            </Link>
          </div>
        </div>
      </div>
      <FeaturedCourse data={featuredCourse?.data.data} />
      <CountUpContainer data={COUNT_UP_LIST} />
      <TypicalTeacher data={featuredCourse?.data.data} />
    </div>
  )
}

export default HomeGuest
