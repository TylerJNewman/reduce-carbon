import React from 'react'

const Section = ({children, forwardedRef}) => {
  return (
    <div
      ref={forwardedRef}
      className="section pb-72 md:pb-96 md:py-32 max-w-7xl mx-auto sm:px-6 lg:px-8 flex items-center justify-center"
    >
      {children}
    </div>
  )
}

export default Section
