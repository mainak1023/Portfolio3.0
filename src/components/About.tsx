"use client"

import { useRef, useEffect, useState } from "react"

const About = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const aboutRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current)
      }
    }
  }, [])

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>

        <div ref={aboutRef} className="flex flex-col md:flex-row items-center gap-10">
          <div
            className={`md:w-1/2 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
          >
            <div className="glass-card p-1">
              <img
                src="/about-me.jpg"
                alt="Mainak Majumder"
                className="w-full h-auto rounded-xl"
                onError={(e) => {
                  ; (e.target as HTMLImageElement).src = "https://via.placeholder.com/600x600?text=About+Me"
                }}
              />
            </div>
          </div>

          <div
            className={`md:w-1/2 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
          >
            <h3 className="text-2xl font-bold mb-4">Full Stack Developer & ML Enthusiast</h3>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Hello! I'm Mainak Majumder, a passionate Full Stack Developer with expertise in building modern web
              applications and exploring machine learning solutions.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              With a strong foundation in both frontend and backend technologies, I enjoy creating seamless user
              experiences while implementing robust server-side logic. My journey in tech began with a curiosity about
              how things work, which evolved into a career building innovative digital solutions.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              sharing my knowledge through technical articles and mentoring.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Education</h4>
                <ul className="space-y-2">
                  <li className="text-gray-600 dark:text-gray-300">
                    <span className="font-medium">B.Tech in Computer Science</span>
                    <br />
                    <span className="text-sm">University Name, 2018-2022</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Experience</h4>
                <ul className="space-y-2">
                  <li className="text-gray-600 dark:text-gray-300">
                    <span className="font-medium">Software Developer</span>
                    <br />
                    <span className="text-sm">Company Name, 2022-Present</span>
                  </li>
                  <li className="text-gray-600 dark:text-gray-300">
                    <span className="font-medium">Intern</span>
                    <br />
                    <span className="text-sm">Company Name, 2021</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

