import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import RegisterLayout from './Layouts/RegisterLayout'
import { AppContext } from './context/app.context'

import Login from './pages/Login'
import Register from './pages/Register'
import HomeGuest from './pages/HomeGuest'
import { useContext } from 'react'
import Homeuser from './pages/Homeuser'

function ProtectedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}

function RejectedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
}

export default function useRouterElement() {
  const routerElement = useRoutes([
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
        }
      ]
    },
    {
      path: '/',
      element: <HomeGuest />
    },
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: '/user',
          element: <Homeuser />
        }
      ]
    }
  ])
  return routerElement
}
