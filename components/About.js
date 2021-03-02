import React from 'react'
import Section from './Section'
import {useScroll} from './scroll-context'
const About = () => {
  const {aboutRef} = useScroll()

  return (
    <Section forwardedRef={aboutRef}>
      <div className="text-center mx-auto sm:px-6 lg:px-8">
        <h3 className="block text-white font-bold py-8 md:pb-24">About</h3>
        <div className="container px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="mb-32 space-y-4 flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
            <h6 className="md:text-2xl text-white font-bold leading-tight text-center md:text-left">
              Reduce Carbon Club turns carbon into diamonds (DMND) and profits
              while helping the environment.
            </h6>
            <p className="text-white leading-normal text-base md:text-2xl text-center md:text-left">
              Saving the world is hard. The size and scale of the climate crisis
              demands a level of collaboration that was never before possible. 
            </p>
            <div>
              <p className="italic text-white leading-normal text-base md:text-2xl text-center md:text-left">
                "We can save Earth...It's going to take collective action from
                big companies, small companies, nation-states, global
                organizations, and individuals."
              </p>
              <p className="mt-2 text-white leading-normal text-base md:text-2xl text-center md:text-left">
                ~ Jeff Bezos, February 17th, 2021
              </p>
            </div>
          </div>
          {/*Right Col*/}
          <div className="w-full xl:w-3/5 mt-14 md:mb-48 overflow-y-hidden">
            <img
              className="w-5/6 mx-auto xl:mr-0 slide-in-bottom max-w-prose"
              src="/hands.png"
            />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default About
