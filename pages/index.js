// import Head from 'next/head'
import React from 'react'
import Navbar from '../src/components/navbar'
// import Home from '../src/components/home'

export default function Index() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const toggleMobileMenu = () => setMenuOpen(!menuOpen)

  return (
    <>
      <div>
        <nav className="">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-24">
              <div className="flex items-center">
                <img
                  className="h-12 w-12"
                  src="/android-chrome-512x512.png"
                  alt="Logo"
                />
              </div>
              <div className="hidden md:block">
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
                  {/* <button
                    href="#"
                    className="text-white  hover:bg-green-900 px-3 py-2 rounded-md text-md font-medium"
                  >
                    Contact
                  </button> */}
                  <button className="bg-transparent hover:bg-green-600  font-semibold text-white py-2 px-4 border border-white hover:border-transparent rounded">
                    Contact
                  </button>
                </div>
              </div>

              <div className="-mr-2 flex md:hidden">
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
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
        {/* <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="center text-3xl font-bold text-white">Dashboard</h1>
        </div> */}
        <main>
          <div className="section max-w-7xl mx-auto sm:px-6 lg:px-8 flex items-center justify-center h-screen">
            <div className="content">
              <div className="py-6 flex justify-center">
                <img
                  className="w-5/6 mx-auto lg:mr-0 w-96"
                  src="/android-chrome-512x512.png"
                  alt="Logo"
                />
              </div>
              <div className="space-y-4 py-4 text-center px-6">
                <h4 className="block text-white font-bold">
                  Funneling the power of the meme to help the world
                </h4>
              </div>
              <div className="h-72"></div>
            </div>
          </div>
          <div className="section max-w-7xl mx-auto sm:px-6 lg:px-8 flex items-center justify-center h-screen">
            <div className="content" style={{paddingBottom: '200px'}}>
              <div className="space-y-4 py-4 text-center">
                <h1
                  className="block text-white font-bold py-24"
                  styles="margin-top: -170px"
                >
                  About
                </h1>
              </div>
              <div className="container px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
                  <h5 className="my-4  md:text-2xl text-white font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
                    Reduce Carbon Club turns carbon into diamonds and profits
                    while helping the environment.
                  </h5>
                  <p className="text-white leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">
                    Saving the world is hard. The size and scale of the climate
                    crisis demands a level of collaboration that was never
                    before possible. 
                  </p>
                  <p className="italic text-white leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">
                    "We can save Earth...It's going to take collective action
                    from big companies, small companies, nation-states, global
                    organizations, and individuals."
                  </p>
                  <p className=" text-white leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">
                    - Jeff Bezos, February 17th, 2021
                  </p>
                </div>
                {/*Right Col*/}
                <div className="w-full xl:w-3/5 py-6 overflow-y-hidden">
                  <img
                    className="w-5/6 mx-auto lg:mr-0 slide-in-bottom max-w-prose"
                    src="/diamond.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
