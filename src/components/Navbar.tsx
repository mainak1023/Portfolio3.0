"use client"

import { useState, useContext, useEffect } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { Moon, Sun, Menu, X } from "lucide-react"

interface NavbarProps {
  scrolled: boolean
}

const Navbar = ({ scrolled }: NavbarProps): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const { isDarkMode, toggleTheme } = useContext(ThemeContext)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent): void => {
      if (
        isMenuOpen &&
        !(e.target as HTMLElement).closest(".mobile-menu") &&
        !(e.target as HTMLElement).closest(".menu-button")
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isMenuOpen])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMenuOpen])

  const toggleMenu = (): void => setIsMenuOpen(!isMenuOpen)

  const scrollToSection = (sectionId: string): void => {
    const section = document.getElementById(sectionId)
    if (section) {
      setIsMenuOpen(false)
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-lg" : "py-5 bg-transparent"}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          Mainak
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection("home")} className="nav-link">
            Home
          </button>
          <button onClick={() => scrollToSection("projects")} className="nav-link">
            Projects
          </button>
          <button onClick={() => scrollToSection("about")} className="nav-link">
            About
          </button>
          <button onClick={() => scrollToSection("skills")} className="nav-link">
            Skills
          </button>
          <button onClick={() => scrollToSection("certifications")} className="nav-link">
            Certifications
          </button>
          <button onClick={() => scrollToSection("contact")} className="nav-link">
            Contact
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button
            onClick={toggleMenu}
            className="menu-button p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu fixed inset-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md z-40 transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden pt-20`}
      >
        <div className="flex flex-col items-center space-y-6 p-8">
          <button onClick={() => scrollToSection("home")} className="text-xl font-medium">
            Home
          </button>
          <button onClick={() => scrollToSection("projects")} className="text-xl font-medium">
            Projects
          </button>
          <button onClick={() => scrollToSection("about")} className="text-xl font-medium">
            About
          </button>
          <button onClick={() => scrollToSection("skills")} className="text-xl font-medium">
            Skills
          </button>
          <button onClick={() => scrollToSection("certifications")} className="text-xl font-medium">
            Certifications
          </button>
          <button onClick={() => scrollToSection("contact")} className="text-xl font-medium">
            Contact
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

