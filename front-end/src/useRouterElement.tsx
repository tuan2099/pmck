import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import RegisterLayout from './Layouts/RegisterLayout'
import { AppContext } from './context/app.context'
import { useContext } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import HomeGuest from './pages/HomeGuest'
import Homeuser from './pages/Homeuser'
import ForgotPassword from './pages/ForgotPassword'
import HomeUserLayout from './Layouts/HomeUserLayout'
import New from './pages/New'
import Course_enrol from './pages/Course_enrol'
import Notfound from './pages/Notfound'
import Profile from './pages/Profile'
import AllCoursePage from './pages/AllCourse/AllCoursePage'
import Course_detail from './pages/Courrse_detail'
import EditProfile from './pages/Profile/EditProfile'
import MyCourse from './pages/MyCourse'
import LearningPath from './pages/LearningPath'
import Question from './pages/Question'
import Certificate from './pages/Courrse_detail/Component/Certificate'

function ProtectedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}

function RejectedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return !isAuthenticated ? <Outlet /> : <Navigate to='/user' />
}

export const ROUTES = {
  login: '/login',
  user: '/user',
  home: '/',
  register: '/register',
  forgot_password: '/forgot_password',
  new: '/new',
  editProfile: '/edit-profile',
  profile: '/me',
  courses: '/courses',
  certificate: '/certificate'
}

export default function useRouterElement() {
  const routerElement = useRoutes([
    {
      path: ROUTES.certificate,
      element: <Certificate />,
      index: true
    },
    {
      path: ROUTES.home,
      element: <HomeGuest />,
      index: true
    },
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: ROUTES.login,
          element: (
            <RegisterLayout>
              <Login />
            </RegisterLayout>
          )
        },
        {
          path: ROUTES.register,
          element: (
            <RegisterLayout>
              <Register />
            </RegisterLayout>
          )
        },
        {
          path: ROUTES.forgot_password,
          element: (
            <RegisterLayout>
              <ForgotPassword />
            </RegisterLayout>
          )
        }
      ]
    },
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: ROUTES.courses,
          element: (
            <HomeUserLayout>
              <AllCoursePage />
            </HomeUserLayout>
          )
        },
        {
          path: '/my-course',
          element: (
            <HomeUserLayout>
              <MyCourse />
            </HomeUserLayout>
          )
        },
        {
          path: '/user',
          element: (
            <HomeUserLayout>
              <Homeuser />
            </HomeUserLayout>
          )
        },
        {
          path: '/course/:id',
          element: (
            <HomeUserLayout>
              <Course_enrol />
            </HomeUserLayout>
          )
        },
        {
          path: '/learning/:id',
          element: <Course_detail />
        },
        {
          path: ROUTES.profile,
          element: (
            <HomeUserLayout>
              <Profile />
            </HomeUserLayout>
          )
        },
        {
          path: ROUTES.editProfile,
          element: (
            <HomeUserLayout>
              <EditProfile />
            </HomeUserLayout>
          )
        }
      ]
    },
    {
      path: ROUTES.new,
      element: (
        <HomeUserLayout>
          <New />
        </HomeUserLayout>
      )
    },

    {
      path: '/faq',
      element: <Question />
    },
    {
      path: '*',
      element: <Notfound />
    },
    {
      path: '/learning-paths',
      element: (
        <HomeUserLayout>
          <LearningPath />
        </HomeUserLayout>
      )
    }
  ])
  return routerElement
}
