"use client"

import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { GitlabIcon as GitHub, Linkedin, Mail, FileText } from "lucide-react"

const Hero = (): JSX.Element => {
  const { isDarkMode } = useContext(ThemeContext)

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div
          className={`absolute top-20 right-[10%] w-72 h-72 rounded-full ${isDarkMode ? "bg-purple-600" : "bg-primary"} opacity-20 blur-[80px]`}
        ></div>
        <div
          className={`absolute bottom-20 left-[10%] w-72 h-72 rounded-full ${isDarkMode ? "bg-blue-600" : "bg-secondary"} opacity-20 blur-[80px]`}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Mainak Majumder
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-6 animate-fade-in-delay-1">
              Full Stack Developer & ML Enthusiast
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg animate-fade-in-delay-2">
              I build modern web applications and explore machine learning solutions. Passionate about creating
              intuitive user experiences and solving complex problems.
            </p>

            <div className="flex flex-wrap gap-4 mb-8 animate-fade-in-delay-3">
              <a
                href="#contact"
                className="btn-primary"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="btn-secondary"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                View Projects
              </a>
            </div>

            <div className="flex space-x-5 animate-fade-in-delay-4">
              <a
                href="https://github.com/mainak1023"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <GitHub className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/mainakmajumder"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:contact@mainakmajumder.com" className="social-icon" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Resume"
              >
                <FileText className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glass-card animate-float">
                <img
                  src="/profile.jpg"
                  alt="Mainak Majumder"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    ; (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x400?text=Mainak+Majumder"
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-lg glass-card flex items-center justify-center animate-float-delay-1">
                <img
                  src="/tech/react.svg"
                  alt="React"
                  className="w-12 h-12"
                  onError={(e) => {
                    ; (e.target as HTMLImageElement).src = "https://via.placeholder.com/48?text=React"
                  }}
                />
              </div>
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-lg glass-card flex items-center justify-center animate-float-delay-2">
                <img
                  src="/tech/python.svg"
                  alt="Python"
                  className="w-10 h-10"
                  onError={(e) => {
                    ; (e.target as HTMLImageElement).src = "https://via.placeholder.com/40?text=Python"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

