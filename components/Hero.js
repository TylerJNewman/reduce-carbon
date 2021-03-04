import React from 'react'
import Section from './Section'
import {useScroll} from './scroll-context'
import {useSpring, animated} from 'react-spring'

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
]
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Hero = () => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: {mass: 5, tension: 350, friction: 40},
  }))
  return (
    <Section name="hero">
      <div className="content">
        <div
          className="py-6 flex justify-center"
          style={{maxWidth: '66%', margin: 'auto'}}
        >
          <div className="flex justify-center">
            <div className="max-w-md hidden md:block">
              <animated.div
                class="card"
                onMouseMove={({clientX: x, clientY: y}) =>
                  set({xys: calc(x, y)})
                }
                onMouseLeave={() => set({xys: [0, 0, 1]})}
                style={{transform: props.xys.interpolate(trans)}}
              ></animated.div>
            </div>
            <div className="max-w-md block md:hidden">
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

        <div className="space-y-4 py-8 text-center px-6 md:mt-16">
          <h4 className="block text-white font-bold">
            Funneling the power of the meme to help the world
          </h4>
        </div>
      </div>
    </Section>
  )
}

export default Hero
