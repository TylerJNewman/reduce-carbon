import React from 'react'
import {useScroll} from './scroll-context'

const MobileMenu = ({menuOpen, toggleMobileMenu}) => {
  const {handleAbout, handleHow} = useScroll()

  const handleAboutClick = (e) => {
    toggleMobileMenu()
    setTimeout(() => handleAbout(e), 200)
  }

  const handleHowClick = (e) => {
    toggleMobileMenu()
    setTimeout(() => handleHow(e), 200)
  }

  return (
    <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden`}>
      <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3">
        <a
          onClick={handleAboutClick}
          href="#"
          className="text-white hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium"
        >
          About
        </a>
        {/* <a
          href="#"
          className="text-white hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          What
        </a>
        <a
          href="#"
          className="text-white hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Why
        </a> */}
        <a
          onClick={handleHowClick}
          href="#"
          className="text-white hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          How it Works
        </a>
        <a
          href="#"
          className="text-white hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Contact
        </a>
      </div>
    </div>
  )
}

export default MobileMenu
