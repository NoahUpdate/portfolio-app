import { useEffect, useState } from 'react'
import { Link } from 'react-router'

export const MenuIcon = () => {
  const [menuactive, setmenuactive] = useState(false)

  const handleMenuClick = () => {
    setmenuactive(!menuactive)
  }

  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY

      const primero = Math.log(scrollPosition - 45 + 1) / 3
      const newOpacity = Math.round(primero) * 100

      setOpacity(newOpacity)
    }

    // Agregar el evento de escucha de desplazamiento
    window.addEventListener('scroll', handleScroll)

    return () => {
      // Limpiar el evento de escucha cuando el componente se desmonte
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <button
      onClick={handleMenuClick}
      style={{ opacity: opacity }}
      className={`w-10 relative transition-opacity duration-800 ease-in-out `}
      // className="w-10 relative"
    >
      <p
        className={`text2 !leading-[1] cursor-pointer ${menuactive ? 'transform rotate-270 !leading-[0.8]' : ''}`}
      >
        ED <br /> OS
      </p>
      {menuactive && (
        <div
          className={`absolute flex gap-2 text2 !text-[16px] transform rotate-270 -top-54 -left-41 p-2 mt-2`}
        >
          <Link className="hover:text-[#656464]" to={'#home'}>
            HOME
          </Link>
          <Link className="hover:text-[#656464]" to={'#story'}>
            STORY
          </Link>
          <Link className="hover:text-[#CDCBCB]" to={'#projects'}>
            PROJECTS
          </Link>
          <Link className="hover:text-[#656464]" to={'#contacts'}>
            CONTACTS
          </Link>
          <Link className="hover:text-[#656464]" to={'#experience'}>
            EXPERIENCE
          </Link>
        </div>
      )}
    </button>
  )
}
