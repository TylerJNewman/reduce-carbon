// import Head from 'next/head'
import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import {ScrollProvider} from '../components/scroll-context'

export default function Index() {
  return (
    <ScrollProvider>
      <Navbar />
      <main className="pb-24">
        <Hero />
        <About />
      </main>
    </ScrollProvider>
  )
}
