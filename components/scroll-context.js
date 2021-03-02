import * as React from 'react'
const ScrollContext = React.createContext()

function ScrollProvider({children}) {
  const aboutRef = React.useRef()
  function handleAbout(e) {
    e.preventDefault()
    aboutRef.current?.scrollIntoView({behavior: 'smooth'})
  }

  const ecoRef = React.useRef()
  function handleEco(e) {
    e.preventDefault()
    ecoRef.current?.scrollIntoView({behavior: 'smooth'})
  }

  // const heroRef = React.useRef()
  // function handleHero(e) {
  //   e.preventDefault()
  //   heroRef.current?.scrollIntoView({behavior: 'smooth'})
  // }

  const howRef = React.useRef()
  function handleHow(e) {
    e.preventDefault()
    howRef.current?.scrollIntoView({behavior: 'smooth'})
  }

  const contactRef = React.useRef()
  function handleContact(e) {
    e.preventDefault()
    contactRef.current?.scrollIntoView({behavior: 'smooth'})
  }

  const value = {
    ecoRef,
    handleEco,
    aboutRef,
    handleAbout,
    howRef,
    handleHow,
    contactRef,
    handleContact,
  }

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
