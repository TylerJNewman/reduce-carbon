import React from 'react'
import Section from './Section'

const Hero = () => {
  return (
    <Section>
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
      </div>
    </Section>
  )
}

export default Hero
