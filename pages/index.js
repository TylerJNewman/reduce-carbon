// import Head from 'next/head'
import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import How from '../components/How'
import Ecosystem from '../components/Ecosystem'
import Contact from '../components/Contact'
import {ScrollProvider} from '../components/scroll-context'
import {ToastContainer} from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

export default function Index() {
  return (
    <ScrollProvider>
      <Navbar />
      <main className="pb-24">
        <Hero />
        <About />
        <How />
        <Ecosystem />
        <Contact />

        <ToastContainer />
      </main>
    </ScrollProvider>
  )
}
