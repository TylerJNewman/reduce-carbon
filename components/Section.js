import React from 'react'

const Section = ({children, forwardedRef}) => {
  return (
    <div
      ref={forwardedRef}
      className="section pb-24 md:pb-72 max-w-7xl mx-auto sm:px-6 lg:px-8 flex items-center justify-center"
    >
      {children}
    </div>
  )
}

export default Section
