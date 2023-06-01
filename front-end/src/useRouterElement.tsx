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
  allCourse: '/all-course'
}

export default function useRouterElement() {
  const routerElement = useRoutes([
    {
      path: '/',
      element: <HomeGuest />,
      index: true
    },
    {
      path: ROUTES.allCourse,
      element: <AllCoursePage />,
      index: true
    },
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: '/login',
          element: (
            <RegisterLayout>
              <Login />
            </RegisterLayout>
          )
        },
        {
          path: '/register',
          element: (
            <RegisterLayout>
              <Register />
            </RegisterLayout>
          )
        },
        {
          path: '/forgot_password',
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
          path: '/user',
          element: (
            <HomeUserLayout>
              <Homeuser />
            </HomeUserLayout>
          )
        },
        {
          path: '/course/:id',
          index: true,
          element: <Course_enrol />
        },
        {
          path: '/learning/:id',
          index: true,
          element: <Course_detail />
        },
        {
          path: '/me',
          element: (
            <HomeUserLayout>
              <Profile />
            </HomeUserLayout>
          )
        }
      ]
    },
    {
      path: '/new',
      element: (
        <HomeUserLayout>
          <New />
        </HomeUserLayout>
      )
    },
    {
      path: '*',
      element: <Notfound />
    }
  ])
  return routerElement
}
