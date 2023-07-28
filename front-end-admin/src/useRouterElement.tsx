import { useContext } from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import { AppContext } from './context/app.context'
import RegisterLayout from './Layouts/RegisterLayout'
import LoginAdmin from './pages/Login'

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
  home: '/'
}

export default function useRouterElement() {
  const routerElement = useRoutes([
    {
      path: '/login',
      element: (
        <RegisterLayout>
          <LoginAdmin />
        </RegisterLayout>
      )
    }
  ])
  return routerElement
}
