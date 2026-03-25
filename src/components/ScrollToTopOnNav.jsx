import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Scroll to top when navigating between pages
export default function ScrollToTopOnNav() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
