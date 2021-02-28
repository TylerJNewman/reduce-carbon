import React from 'react'

export default function Navbar({fixed}) {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const toggleMobileMenu = () => setMenuOpen(!menuOpen)
  return (
      <nav >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <div className=" flex items-center">
              <img
                className="h-12 w-12"
                src="/android-chrome-512x512.png"
                alt="Logo"
              />
            </div>
            <div className=" hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#"
                  className="text-white  hover:text-green-700 px-3 py-2 rounded-md text-md font-medium"
                >
                  About
                </a>
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

            <div className=" flex md:hidden">
              {/* Mobile menu button */}
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
          </div>
        </div>
        {/* Mobile menu, show/hide based on menu state. */}
        <div
          className={`${menuOpen ? 'block' : 'hidden'} md:hidden`}
          id="mobile-menu"
        >
          <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="bg-green-800 text-white block px-3 py-2 rounded-md text-base font-medium"
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
      </nav>
      {/* <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-red mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
              href="#pablo"
            >
              pink Tailwind Starter Kit
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center' +
              (navbarOpen ? ' flex' : ' hidden')
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Share</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Tweet</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Pin</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> 
  )
}
