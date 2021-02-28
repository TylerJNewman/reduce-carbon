import React from 'react'

const Hero = () => {
  return (
    <div className="section md:py-32 max-w-7xl mx-auto sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="content">
        <div
          className="py-6 flex justify-center"
          style={{maxWidth: '66%', margin: 'auto'}}
        >
          <div className="flex justify-center">
            <div className="max-w-md">
              <img
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                src="/android-chrome-512x512.png"
                alt="Logo"
              />
            </div>
          </div>
        </div>
        <div className="space-y-4 py-4 text-center px-6">
          <h4 className="block text-white font-bold">
            Funneling the power of the meme to help the world
          </h4>
        </div>
        <div className="h-72"></div>
      </div>
    </div>
  )
}

export default Hero
