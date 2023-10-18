import { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from 'src/context/app.context'
import { useQuery } from '@tanstack/react-query'
import courseApi from 'src/apis/course.api'
import Couter from './components/Couter'
import ListCategory from './components/ListCategory'
import Growup from './components/Growup'
import InfoCertified from './components/InfoCertified'
import Mentor from './components/Mentor'
import Teacher from './components/Teacher'
import HeroSlice from './components/HeroSlice'
import Event from './components/Event'
import { Button } from '@mui/material'

function HomeGuest() {
  const { isAuthenticated } = useContext(AppContext)

  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) navigate('/user')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated])

  // const { data: featuredCourse } = useQuery({
  //   queryKey: ['FeaturedCourse'],
  //   queryFn: () => courseApi.getCourse()
  // })

  return (
    <>
      <HeroSlice />
      <Couter />
      <ListCategory />
      <Growup />
      <InfoCertified />
      <Teacher />
      <Mentor />
      <Event />
    </>
  )
}

export default HomeGuest
