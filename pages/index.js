// import Head from 'next/head'
import React from 'react'
import Navbar from '../src/components/navbar'
import Hero from '../src/components/Hero'

export default function Index() {
  return (
    <>
      <div>
        <Navbar />
        <main>
          <Hero />
          <div className="section max-w-7xl mx-auto sm:px-6 lg:px-8 flex items-center justify-center">
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
