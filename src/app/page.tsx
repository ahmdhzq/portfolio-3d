"use client"

import { useEffect } from 'react'
import Lenis from 'lenis'
import Header from '../components/layout/Header'
import Hero from '../components/layout/Hero'
import About from '../components/layout/About'
import Skills from '../components/layout/Skills'
import Projects from '../components/layout/Projects'
import Experience from '..//components/layout/Experience'
// import Contact from '../components/layout/Contact'
// import Footer from '../components/layout/Footer'

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      {/* <Contact />
      <Footer /> */}
    </main>
  )
}