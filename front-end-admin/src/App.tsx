import './App.css'
import useRouterElement from './useRouterElement'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const routeElement = useRouterElement()
  return (
    <>
      <ToastContainer /> {routeElement}
    </>
  )
}

export default App
