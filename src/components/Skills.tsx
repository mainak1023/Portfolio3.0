"use client"

import { useRef, useEffect, useState } from "react"

interface Skill {
  name: string
  icon: string
  proficiency: number
}

interface SkillsData {
  [category: string]: Skill[]
}

// Sample skills data - replace with your actual skills
const skillsData: SkillsData = {
  frontend: [
    { name: "HTML5", icon: "html5.svg", proficiency: 90 },
    { name: "CSS3", icon: "css3.svg", proficiency: 85 },
    { name: "JavaScript", icon: "javascript.svg", proficiency: 90 },
    { name: "React", icon: "react.svg", proficiency: 85 },
    { name: "Vue.js", icon: "vue.svg", proficiency: 75 },
    { name: "Tailwind CSS", icon: "tailwind.svg", proficiency: 80 },
  ],
  backend: [
    { name: "Node.js", icon: "nodejs.svg", proficiency: 80 },
    { name: "Express", icon: "express.svg", proficiency: 75 },
    { name: "Python", icon: "python.svg", proficiency: 85 },
    { name: "Django", icon: "django.svg", proficiency: 70 },
    { name: "MongoDB", icon: "mongodb.svg", proficiency: 75 },
    { name: "PostgreSQL", icon: "postgresql.svg", proficiency: 70 },
  ],
  tools: [
    { name: "Git", icon: "git.svg", proficiency: 85 },
    { name: "Docker", icon: "docker.svg", proficiency: 70 },
    { name: "AWS", icon: "aws.svg", proficiency: 65 },
    { name: "Firebase", icon: "firebase.svg", proficiency: 75 },
    { name: "VS Code", icon: "vscode.svg", proficiency: 90 },
    { name: "Figma", icon: "figma.svg", proficiency: 65 },
  ],
  ml: [
    { name: "TensorFlow", icon: "tensorflow.svg", proficiency: 70 },
    { name: "PyTorch", icon: "pytorch.svg", proficiency: 65 },
    { name: "Scikit-learn", icon: "scikit-learn.svg", proficiency: 75 },
    { name: "Pandas", icon: "pandas.svg", proficiency: 80 },
    { name: "NumPy", icon: "numpy.svg", proficiency: 75 },
    { name: "Matplotlib", icon: "matplotlib.svg", proficiency: 70 },
    { name: "Keras", icon: "keras.svg", proficiency: 65 },
  ],
}

interface SkillCardProps {
  skill: Skill
}

const SkillCard = ({ skill }: SkillCardProps): JSX.Element => {
  return (
    <div className="skill-card">
      <div className="flex items-center mb-2">
        <div className="w-10 h-10 mr-3 flex items-center justify-center rounded-md glass-card">
          <img
            src={`/tech/${skill.icon}`}
            alt={skill.name}
            className="w-6 h-6"
            onError={(e) => {
              ; (e.target as HTMLImageElement).src = `https://via.placeholder.com/24?text=${skill.name.charAt(0)}`
            }}
          />
        </div>
        <h4 className="font-medium">{skill.name}</h4>
      </div>

      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-1">
        <div
          className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full"
          style={{ width: `${skill.proficiency}%` }}
        ></div>
      </div>
      <p className="text-xs text-right text-gray-500 dark:text-gray-400">{skill.proficiency}%</p>
    </div>
  )
}

const Skills = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<string>("frontend")
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current)
      }
    }
  }, [])

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">My technical expertise</p>
        </div>

        <div ref={skillsRef} className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center mb-10">
            <button
              onClick={() => setActiveTab("frontend")}
              className={`tab-button ${activeTab === "frontend" ? "active" : ""}`}
            >
              Frontend
            </button>
            <button
              onClick={() => setActiveTab("backend")}
              className={`tab-button ${activeTab === "backend" ? "active" : ""}`}
            >
              Backend
            </button>
            <button
              onClick={() => setActiveTab("tools")}
              className={`tab-button ${activeTab === "tools" ? "active" : ""}`}
            >
              Tools
            </button>
            <button onClick={() => setActiveTab("ml")} className={`tab-button ${activeTab === "ml" ? "active" : ""}`}>
              Machine Learning
            </button>
          </div>

          <div className="glass-card p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillsData[activeTab].map((skill, index) => (
                <div
                  key={skill.name}
                  className={`transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <SkillCard skill={skill} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

