import { ReactNode, FC } from 'react'
import { Link } from 'react-router'

type INavButton = {
  children?: ReactNode
  name: string
  to: string
}
export const Navbutton: FC<INavButton> = ({ children, name, to }) => {
  // const [isActive, setIsActive] = useState<boolean>(false)
  // const handleClick = (e) => {
  //   setIsActive(!isActive)
  // }
  // console.log('isActive',isActive)
  return (
    //   <a
    //     className={`py-1.5 px-3 w-fit text2  ${isActive ? 'border rounded-3xl' : 'border rounded-3xl border-light dark:border-dark'}`}
    //     href={to}
    //     onClick={handleClick}
    //     rel="noopener noreferrer"
    //   >
    //     {children ? children : name}
    //   </a>

    // <NavLink
    //   className={({ isActive }) =>
    //     `py-1.5 px-3 w-fit text2  ${isActive ? 'border rounded-3xl' : 'border rounded-3xl border-light dark:border-dark'}`
    //   }
    //   to={to}
    // >
    //   {children ? children : name}
    // </NavLink>
    <Link
      className={`py-1.5 px-3 w-fit text2 border border-light hover:border-dark rounded-3xl dark:border-dark dark:hover:border-light`}
      to={to}
    >
      {children ? children : name}
    </Link>
  )
}
