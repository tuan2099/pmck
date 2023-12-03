import { Route, Routes } from 'react-router-dom'
import './App.css'
import 'react-toastify/dist/ReactToastify.css'
import MainLayout from './Layouts/Mainlayout'
import CourseDashboard from './pages/Course'
import LessonDashboard from './pages/Lesson'
import EditCourse from './pages/EditCourse'
import { ROUTES } from './utils/constants'

function App() {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path='/' element={<div>Hello</div>} />
          <Route path={ROUTES.course} element={<CourseDashboard />} />
          <Route path={ROUTES.updateCourse} element={<EditCourse />} />
          <Route path={ROUTES.createCourse} element={<EditCourse />} />
          <Route path='/lessons' element={<LessonDashboard />} />
        </Routes>
      </MainLayout>
    </>
  )
}

export default App
