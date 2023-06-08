import { useContext } from 'react'
import './App.css'
import useRouterElement from './useRouterElement'
import { AppContext } from './context/app.context'
import { useQuery } from '@tanstack/react-query'
import courseApi from './apis/course.api'
function App() {
  const { courseRegisted, setCourseRegisted } = useContext(AppContext)

  useQuery({
    queryKey: ['courseRegisted'],
    queryFn: () => courseApi.registerCoursess(),
    onSuccess: (data) => setCourseRegisted(data.data.data),
    enabled: !Boolean(courseRegisted.length)
  })

  console.log(courseRegisted)

  const routeElement = useRouterElement()
  return <>{routeElement}</>
}

export default App
