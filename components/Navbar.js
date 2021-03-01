import React from 'react'
import MobileMenuButton from './MobileMenuButton'
import MobileMenu from './MobileMenu'
import NavbarMenuItems from './NavbarMenuItems'
import {useScroll} from './scroll-context'

const Logo = () => {
  return (
    <div className="flex items-center">
      <img className="h-12 w-12" src="/android-chrome-512x512.png" alt="Logo" />
    </div>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Logo />
          <NavbarMenuItems />
          <MobileMenuButton
            menuOpen={menuOpen}
            toggleMobileMenu={toggleMobileMenu}
          />
        </div>
      </div>

      <MobileMenu menuOpen={menuOpen} toggleMobileMenu={toggleMobileMenu} />
    </nav>
  )
}
