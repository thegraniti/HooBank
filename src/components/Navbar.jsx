import React from 'react'
import { close , logo , menu } from '../assets'
import { navLinks } from '../constants'

function Navbar() {

  const [active, setActive] = React.useState("Home")

  const [toggle , setToggle] = React.useState(false)

  function handleToggle(){
    setToggle(prevToggle => !prevToggle)
  }

  const navlink = navLinks.map((nav, index) => {
    return <li key={nav.id} onClick={() => setActive(nav.title)} className={`font-poppins font-normal text-[16px] text-white ${active === nav.title ? "text-white" : "text-dimWhite"} ${index === navLinks.length -1 ? 'mr-0' : 'mr-10'}`}>
            <a href={`#${nav.id}`}>{nav.title}</a>
    </li>
  })

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navlink}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
              <img src={toggle ? close : menu}  className="w-[28px] h-[28px] object-contain" onClick={handleToggle}/>
              <div className={`${!toggle ? 'hidden' : 'flex'}  p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                          <ul className='list-none flex justify-center items-center flex-1 flex-col li'>
                            {navlink}
                          </ul>
              </div>
      </div>
    </nav>
  )
}

export default Navbar