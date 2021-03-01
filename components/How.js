import React from 'react'
import Section from './Section'
import {useScroll} from './scroll-context'
const How = () => {
  const {howRef} = useScroll()

  return (
    <Section forwardedRef={howRef}>
      <div className="py-4 text-center mx-auto sm:px-6 lg:px-8 -mt-16">
        <h3 className="block text-white font-bold py-8 md:pb-24">
          How It Works
        </h3>
        <div className="container px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="mb-32 space-y-4 flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
            <h6 className="md:text-2xl text-white font-bold leading-tight text-center md:text-left">
              DMND has an initial max circulating supply of 420,000,000.
            </h6>
            <p className="text-white leading-normal text-base md:text-2xl text-center md:text-left">
              On each transaction, a tax of 1% will be distributed to the
              holders and a further 1% will be burnt, hence incentivizing
              holders to hold and decreasing the supply over time. As the supply
              decreases, the scarcity of the token increases. There is no limit
              as to how many tokens can be burnt. Without a burning limit, you
              know what happens next 🚀🌕
            </p>
            <div>
              <p className="text-white leading-normal text-base md:text-2xl text-center md:text-left">
                Cheat Code:
              </p>
              <p className="mt-2 text-white leading-normal text-base md:text-2xl text-center md:text-left">
                The only way to increase the supply of Diamonds is by offsetting
                carbon emissions which mints xxx DMND for each ton removed. As
                DMND supply drops offsetting carbon will become the cheapest way
                to mine new diamonds. Help the world and profit.
              </p>
            </div>
          </div>
          {/*Right Col*/}
          <div className="w-full xl:w-3/5 mt-14 mb-48 overflow-y-hidden">
            <img
              className="w-5/6 mx-auto xl:mr-0 slide-in-bottom max-w-prose"
              src="/diamond.png"
            />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default How
