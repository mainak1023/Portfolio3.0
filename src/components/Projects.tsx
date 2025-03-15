"use client"

import { useState, useRef, useEffect } from "react"
import { GitlabIcon as GitHub, ExternalLink } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  github?: string
  demo?: string
  tags: string[]
  techStack: string[]
}

interface TechFilter {
  id: string
  label: string
}

// Sample project data - replace with your actual projects
const projectsData: Project[] = [
  {
    id: 1,
    title: "AI Image Generator",
    description: "A web application that generates images using AI models based on text prompts.",
    image: "/projects/ai-image-generator.jpg",
    github: "https://github.com/mainak1023/ai-image-generator",
    demo: "https://ai-image-generator.demo.com",
    tags: ["React", "Node.js", "OpenAI"],
    techStack: ["react", "nodejs", "openai"],
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product management, cart, and payment integration.",
    image: "/projects/ecommerce.jpg",
    github: "https://github.com/mainak1023/ecommerce-platform",
    demo: "https://ecommerce-platform.demo.com",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    techStack: ["react", "nodejs", "mongodb", "stripe"],
  },
  {
    id: 3,
    title: "ML Stock Predictor",
    description: "A machine learning model that predicts stock prices based on historical data.",
    image: "/projects/stock-predictor.jpg",
    github: "https://github.com/mainak1023/ml-stock-predictor",
    demo: "https://ml-stock-predictor.demo.com",
    tags: ["Python", "TensorFlow", "Pandas"],
    techStack: ["python", "tensorflow", "pandas"],
  },
  {
    id: 4,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates.",
    image: "/projects/task-manager.jpg",
    github: "https://github.com/mainak1023/task-management-app",
    demo: "https://task-management-app.demo.com",
    tags: ["React", "Firebase", "Redux"],
    techStack: ["react", "firebase", "redux"],
  },
  {
    id: 5,
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current and forecasted weather data.",
    image: "/projects/weather-dashboard.jpg",
    github: "https://github.com/mainak1023/weather-dashboard",
    demo: "https://weather-dashboard.demo.com",
    tags: ["JavaScript", "API", "CSS"],
    techStack: ["javascript", "api", "css"],
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my projects and skills.",
    image: "/projects/portfolio.jpg",
    github: "https://github.com/mainak1023/portfolio",
    demo: "https://mainakmajumder.com",
    tags: ["React", "Tailwind CSS", "Vite"],
    techStack: ["react", "tailwind", "vite"],
  },
]

// All available tech filters
const allTechFilters: TechFilter[] = [
  { id: "all", label: "All" },
  { id: "react", label: "React" },
  { id: "nodejs", label: "Node.js" },
  { id: "python", label: "Python" },
  { id: "javascript", label: "JavaScript" },
  { id: "mongodb", label: "MongoDB" },
  { id: "firebase", label: "Firebase" },
  { id: "tensorflow", label: "TensorFlow" },
]

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps): JSX.Element => {
  const [isHovered, setIsHovered] = useState<boolean>(false)

  return (
    <div className="project-card" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="relative overflow-hidden rounded-t-xl h-48">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-out"
          style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
          onError={(e) => {
            ; (e.target as HTMLImageElement).src =
              `https://via.placeholder.com/600x400?text=${project.title.replace(" ", "+")}`
          }}
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <div key={tech} className="tech-icon">
              <img
                src={`/tech/${tech}.svg`}
                alt={tech}
                className="w-5 h-5"
                onError={(e) => {
                  ; (e.target as HTMLImageElement).src = `https://via.placeholder.com/20?text=${tech}`
                }}
              />
            </div>
          ))}
        </div>

        <div className="flex space-x-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <GitHub className="w-5 h-5 mr-1" />
              <span>Code</span>
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              aria-label={`Live demo for ${project.title}`}
            >
              <ExternalLink className="w-5 h-5 mr-1" />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

const Projects = (): JSX.Element => {
  const [activeFilter, setActiveFilter] = useState<string>("all")
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData)
  const [animateCards, setAnimateCards] = useState<boolean>(false)
  const projectsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const filtered =
      activeFilter === "all" ? projectsData : projectsData.filter((project) => project.techStack.includes(activeFilter))

    setAnimateCards(false)

    // Small delay to allow animation to reset
    setTimeout(() => {
      setFilteredProjects(filtered)
      setAnimateCards(true)
    }, 300)
  }, [activeFilter])

  useEffect(() => {
    // Initial animation
    setAnimateCards(true)

    // Intersection Observer for scroll animation
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimateCards(true)
        }
      },
      { threshold: 0.1 },
    )

    if (projectsRef.current) {
      observer.observe(projectsRef.current)
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current)
      }
    }
  }, [])

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Check out some of my recent work</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {allTechFilters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`filter-button ${activeFilter === filter.id ? "active" : ""}`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`transform transition-all duration-500 ${animateCards ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

