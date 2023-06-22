import './App.css'
import useRouterElement from './useRouterElement'

function App() {
  const routeElement = useRouterElement()
  return <>{routeElement}</>
}

export default App
