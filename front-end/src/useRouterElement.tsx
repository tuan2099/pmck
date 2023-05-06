import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import RegisterLayout from './Layouts/RegisterLayout'

export default function useRouterElement() {
  const routerElement = useRoutes([])
  return routerElement
}
