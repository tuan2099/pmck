import { useContext, useState } from 'react'
import './App.css'
import ErrorBoundary from './components/ErrorBoundary'
import useRouterElement from './useRouterElement'
import Tour from 'reactour'
import { AppContext } from './context/app.context'

function App() {
  const routeElement = useRouterElement()

  const { isTourOpen, tourConfig, closeTour } = useContext(AppContext)

  return (
    <>
      {/* <ErrorBoundary> */}
      {routeElement}
      {/* </ErrorBoundary> */}
      <Tour
        steps={tourConfig}
        isOpen={isTourOpen}
        maskClassName='mask'
        className='helper'
        rounded={5}
        onRequestClose={closeTour}
      />
    </>
  )
}

export default App
