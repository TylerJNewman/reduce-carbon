import * as React from 'react'
const ScrollContext = React.createContext()

function ScrollProvider({children}) {
  const aboutRef = React.useRef()
  function handleAbout() {
    aboutRef.current?.scrollIntoView({behavior: 'smooth'})
  }

  const heroRef = React.useRef()
  function handleHero() {
    heroRef.current?.scrollIntoView({behavior: 'smooth'})
  }

  const value = {aboutRef, handleAbout, heroRef, handleHero}

  return (
    <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
  )
}
function useScroll() {
  const context = React.useContext(ScrollContext)
  if (context === undefined) {
    throw new Error('useScroll must be used within a ScrollProvider')
  }
  return context
}

export {ScrollProvider, useScroll}
