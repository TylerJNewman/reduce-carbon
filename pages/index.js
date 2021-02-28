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
          <div className="py-4 text-center mx-auto sm:px-6 lg:px-8">
            <h3 className="block text-white font-bold pb-20">About</h3>
            <div className="container px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
              <div className="mb-24 space-y-4 flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
                <h6 className=" md:text-2xl text-white font-bold leading-tight text-center md:text-left">
                  Reduce Carbon Club turns carbon into diamonds and profits
                  while helping the environment.
                </h6>
                <p className=" text-white leading-normal text-base md:text-2xl text-center md:text-left">
                  Saving the world is hard. The size and scale of the climate
                  crisis demands a level of collaboration that was never before
                  possible. 
                </p>
                <div>
                  <p className="italic text-white leading-normal text-base md:text-2xl text-center md:text-left">
                    "We can save Earth...It's going to take collective action
                    from big companies, small companies, nation-states, global
                    organizations, and individuals."
                  </p>
                  <p className="mt-2 text-white leading-normal text-base md:text-2xl text-center md:text-left">
                    ~ Jeff Bezos, February 17th, 2021
                  </p>
                </div>
              </div>
              {/*Right Col*/}
              <div className="w-full xl:w-3/5 mt-14 mb-48 overflow-y-hidden">
                <img
                  className="w-5/6 mx-auto lg:mr-0 slide-in-bottom max-w-prose"
                  src="/diamond.png"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
