// import Head from 'next/head'
import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import How from '../components/How'
import Features from '../components/Features'
// import Contact from '../components/Contact'
import {ScrollProvider} from '../components/scroll-context'

export default function Index() {
  return (
    <ScrollProvider>
      <Navbar />
      <main className="pb-24">
        <Hero />
        <About />
        <How />
        <Features />
        {/* <Contact /> */}
      </main>
    </ScrollProvider>
  )
}
