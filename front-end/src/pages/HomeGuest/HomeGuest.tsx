import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from 'src/context/app.context'

function HomeGuest() {
  const { isAuthenticated } = useContext(AppContext)
  const navigate = useNavigate()

  // check if auth -> navigate user page
  useEffect(() => {
    if (isAuthenticated) navigate('/user')
  }, [isAuthenticated])

  return <div>HomeGuest</div>
}

export default HomeGuest
