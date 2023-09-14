import './App.css'
import ErrorBoundary from './components/ErrorBoundary'
import useRouterElement from './useRouterElement'

function App() {
  const routeElement = useRouterElement()
  return (
    <>
      <ErrorBoundary>{routeElement}</ErrorBoundary>
    </>
  )
}

export default App
