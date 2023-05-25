import { useEffect, useState } from 'react'

export const useCurrentView = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth)
    })

    return () =>
      window.removeEventListener('resize', () => {
        setWidth(window.innerWidth)
      })
  }, [])

  return { width, sm: width <= 640, md: 640 < width && width <= 768, lg: 768 < width && width <= 1024 }
}
