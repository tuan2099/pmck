import React, { useContext } from 'react'
import { AppContext } from 'src/context/app.context'

function HomeGuest() {
  const { isAuthenticated } = useContext(AppContext)
  console.log(isAuthenticated)
  return <div>HomeGuest</div>
}

export default HomeGuest
