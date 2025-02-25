import { useEffect } from 'react'
import { useLocation } from 'react-router'

const ScrollToSection = () => {
  const location = useLocation()

  useEffect(() => {
    // Obtener el hash de la URL (como #story)
    const sectionId = location.hash
    if (sectionId) {
      const element = document.querySelector(sectionId)

      if (element) {
        if (element.id === 'home') {
          window.scroll(0, 0)
        } else {
          element.scrollIntoView({
            behavior: 'smooth'
          })
        }
      }
    }
  }, [location])

  return null
}

export default ScrollToSection
