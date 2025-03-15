"use client"

import { useState, useEffect } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import About from "./components/About"
import Skills from "./components/Skills"
import Certifications from "./components/Certifications"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { ThemeProvider } from "./context/ThemeContext"
import "./App.css"
import type { JSX } from "react/jsx-runtime"

function App(): JSX.Element {
  const [scrolled, setScrolled] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = (): void => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    document.addEventListener("scroll", handleScroll)
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Navbar scrolled={scrolled} />
          <main>
            <Hero />
            <Projects />
            <About />
            <Skills />
            <Certifications />
            <Contact />
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App

