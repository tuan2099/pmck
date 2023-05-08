import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import RegisterLayout from './Layouts/RegisterLayout'
import Login from './pages/Login'
import Register from './pages/Register'

export default function useRouterElement() {
  const routerElement = useRoutes([
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    }
  ])
  return routerElement
}
