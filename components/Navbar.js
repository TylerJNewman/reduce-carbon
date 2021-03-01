import React from 'react'
import {useScroll} from './scroll-context'
const MobileMenu = ({menuOpen, toggleMobileMenu}) => {
  const {handleAbout} = useScroll()

  return (
    <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden`}>
      <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3">
        <a
          onClick={() => toggleMobileMenu && setTimeout(() => handleAbout())}
          href="#"
          className="text-white hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium"
        >
          About
        </a>
        <a
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
        </a>
        <a
          href="#"
          className="text-white hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          How
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

const MobileMenuButton = ({menuOpen, toggleMobileMenu}) => {
  const {handleAbout} = useScroll()
  return (
    <div className="flex md:hidden">
      <button
        onClick={toggleMobileMenu}
        type="button"
        className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        aria-controls="mobile-menu"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        {/*
              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block"
            */}
        <svg
          className={`${menuOpen ? 'hidden' : 'block'} h-6 w-6`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        {/*
              Heroicon name: outline/x

              Menu open: "block", Menu closed: "hidden"
            */}
        <svg
          className={`${menuOpen ? 'block' : 'hidden'} h-6 w-6`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  )
}

const NavbarMenuItems = () => {
  const {handleAbout} = useScroll()
  return (
    <>
      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-4">
          <div
            onClick={handleAbout}
            href="#"
            className="text-white  hover:text-green-700 px-3 py-2 rounded-md text-md font-medium"
          >
            About
          </div>
          <a
            href="#"
            className="text-white  hover:text-green-700 px-3 py-2 rounded-md text-md font-medium"
          >
            What
          </a>
          <a
            href="#"
            className="text-white  hover:text-green-700 px-3 py-2 rounded-md text-md font-medium"
          >
            Why
          </a>
          <a
            href="#"
            className="text-white  hover:text-green-700 px-3 py-2 rounded-md text-md font-medium"
          >
            How
          </a>
          <button className="bg-transparent hover:bg-green-600  font-semibold text-white py-2 px-4 border border-white hover:border-transparent rounded">
            Contact
          </button>
        </div>
      </div>
    </>
  )
}

const Logo = () => {
  return (
    <div className="flex items-center">
      <img className="h-12 w-12" src="/android-chrome-512x512.png" alt="Logo" />
    </div>
  )
}

export default function Navbar({handleAbout}) {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const toggleMobileMenu = () => setMenuOpen(!menuOpen)
  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Logo />
          <NavbarMenuItems handleAbout={handleAbout} />

          <MobileMenuButton
            handleAbout={handleAbout}
            menuOpen={menuOpen}
            toggleMobileMenu={toggleMobileMenu}
          />
        </div>
      </div>

      <MobileMenu
        menuOpen={menuOpen}
        handleAbout={handleAbout}
        toggleMobileMenu={toggleMobileMenu}
      />
    </nav>
  )
}
