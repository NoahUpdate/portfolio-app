import { useState, useEffect } from 'react'
import { Navbutton } from './components/Navbutton'
import './App.css'
import { Link } from 'react-router'

function App() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
      return 'dark'
    }
    return 'light'
  })

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const menuItems = [
    { name: 'STORY', path: '#story' },
    { name: 'PROJECTS', path: '#projects' },
    { name: 'EXPERIENCE', path: '#experience' },
    { name: 'CONTACTS', path: '#contacts' }
  ]

  return (
    <>
      <div className="h-dvh py-7 max-md:px-15 md:w-10/12 md:mx-auto">
        <nav className="flex pb-4 justify-between">
          <Link to="/">
            <p className="text2">
              EDWARD <br /> OSCCO
            </p>
          </Link>
          <ul className="flex items-center">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={index !== menuItems.length - 1 ? 'pr-2' : 'mr-0'}
              >
                <Navbutton name={item.name} to={item.path} />
              </li>
            ))}
          </ul>
        </nav>

        <section className="w-full h-[calc(100dvh-100px)] flex py-10">
          <div className="w-1/2 text-[1.264vw]">
            <p className="py-1.5 px-3 w-fit text2 border rounded-3xl border-dark dark:border-light ml-auto mr-1.5 mt-20">
              JUNIOR
            </p>
            {/* <h1 className="text-[4.9em] tracking-[0.15em] text-center overflow-hidden whitespace-nowrap"> */}
            <h1 className="text-[4.9em] tracking-[0.15em] text-left overflow-hidden whitespace-nowrap ml-0 -indent-1.5">
              FRONT-END
            </h1>
            <h1 className="text-[4.9em] tracking-[0.15em] text-center overflow-hidden whitespace-nowrap">
              DEVELOPER
            </h1>
            <div className="flex space-x-15 my-20 mr-6">
              <div className="w-1/2 descriptive ">
                <p className="md:text-[16px]">
                  Hi there! <br /> My name is Edward and I’m 30 years old
                  ambitious junior front-end developer. Now I’m looking for a
                  new position and new challenges.
                </p>
              </div>
              <div className="w-1/2 descriptive">
                <p className="md:text-[16px]">
                  My goal is to learn something new every day, improve my skills
                  and solve users and business issues. I can quickly analyze
                  problems and solve them both independently and in a team.
                </p>
              </div>
            </div>
          </div>

          <div className="w-1/2">
            <img
              src="public/images/ed.jpeg"
              alt="Edward"
              className="object-cover w-2/3 h-full rounded-4xl ml-auto mr-5"
            />
          </div>
        </section>

        <section
          id="story"
          className="w-full h-dvh border border-amber-950 flex py-10"
        >
          <div className="w-1/2">
            <img
              src="public/images/ed.jpeg"
              alt="Edward"
              className="object-cover w-2/3 h-full rounded-4xl"
            />
          </div>
          <div className="w-1/2 ">
            <h3>MY STORY</h3>
            <div className="my-20 ">
              <p className="font-lightS leading-8">
                Hi there, my name is Edward, I am 24 years old. <br /> Even from
                a young age, I liked computer technology. I was always
                interested in the news and trends of IT technologies with great
                pleasure. <br /> These I realized that I really want to develop
                myself in the IT direction because this field is developing very
                dynamically and I wanted to keep up with the times. <br /> The
                further I went, the more inspiration and the desire to study
                programming in more depth came to me. <br /> <br /> I am an
                open-minded and determined person, I learn quickly, I like to
                learn new things. <br /> My hobbies are computer diagnostics of
                cars, traveling, wakeboarding, and active pastime. <br /> I
                believe that working for you, I will be able to bring something
                new and useful to your teams. In turn, I will apply all my
                knowledge so that the company becomes even more promising, and
                the team becomes even more productive and friendly, since I am a
                person who will always bring with a good mood and motivation to
                work. <br /> I'm a real team player.
              </p>
            </div>

            <button className="py-2 px-3 w-fit font-mediumS border border-card-l1 rounded-3xl bg-[radial-gradient(circle_at_1%_30%,#FCEEEA,#F9DBD2,#F5F3F0,#EDEBE8)] dark:text-black hover:scale-105 transition duration-150 ease-in">
              Get my resume
            </button>
          </div>
        </section>
        <section
          id="projects"
          className="w-full h-dvh border border-amber-950 flex py-10"
        >
          <div className="w-1/2">
            <img
              src="public/images/ed.jpeg"
              alt="Edward"
              className="object-cover w-2/3 h-full rounded-4xl"
            />
          </div>
          <div className="w-1/2 ">
            <h3>PROJECTS</h3>
            <div className="my-20 ">
              <p className="font-lightS leading-8">
                Hi there, my name is Edward, I am 24 years old. <br /> Even from
                a young age, I liked computer technology. I was always
                interested in the news and trends of IT technologies with great
                pleasure. <br /> These I realized that I really want to develop
                myself in the IT direction because this field is developing very
                dynamically and I wanted to keep up with the times. <br /> The
                further I went, the more inspiration and the desire to study
                programming in more depth came to me. <br /> <br /> I am an
                open-minded and determined person, I learn quickly, I like to
                learn new things. <br /> My hobbies are computer diagnostics of
                cars, traveling, wakeboarding, and active pastime. <br /> I
                believe that working for you, I will be able to bring something
                new and useful to your teams. In turn, I will apply all my
                knowledge so that the company becomes even more promising, and
                the team becomes even more productive and friendly, since I am a
                person who will always bring with a good mood and motivation to
                work. <br /> I'm a real team player.
              </p>
            </div>

            <button className="py-2 px-3 w-fit font-mediumS border border-card-l1 rounded-3xl bg-[radial-gradient(circle_at_1%_30%,#FCEEEA,#F9DBD2,#F5F3F0,#EDEBE8)] dark:text-black hover:scale-105 transition duration-150 ease-in">
              Get my resume
            </button>
          </div>
        </section>

        <button
          className=" absolute z-0 top-200 left-60 text-sm descriptive border-2 p-1 rounded-xl ml-50 hover:bg-black hover:text-white"
          onClick={toggleTheme}
        >
          Current Theme: {theme}
        </button>
      </div>
    </>
  )
}

export default App
