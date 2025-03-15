"use client"

import { useRef, useEffect, useState } from "react"
import { ExternalLink } from "lucide-react"
import type { JSX } from "react"

interface Certification {
    id: number
    title: string
    issuer: string
    issuerLogo: string
    date: string
    credentialId: string
    credentialURL: string
}

// Sample certifications data - replace with your actual certifications
const certificationsData: Certification[] = [
    {
        id: 1,
        title: "Full Stack Web Development",
        issuer: "Coursera",
        issuerLogo: "/certs/coursera.svg",
        date: "June 2022",
        credentialId: "FSWD-123456",
        credentialURL: "https://coursera.org/verify/FSWD-123456",
    },
    {
        id: 2,
        title: "Machine Learning Specialization",
        issuer: "Coursera",
        issuerLogo: "/certs/coursera.svg",
        date: "August 2022",
        credentialId: "MLS-789012",
        credentialURL: "https://coursera.org/verify/MLS-789012",
    },
    {
        id: 3,
        title: "React Developer Certification",
        issuer: "Meta",
        issuerLogo: "/certs/meta.svg",
        date: "October 2022",
        credentialId: "RDC-345678",
        credentialURL: "https://meta.com/verify/RDC-345678",
    },
    {
        id: 4,
        title: "AWS Cloud Practitioner",
        issuer: "Amazon Web Services",
        issuerLogo: "/certs/aws.svg",
        date: "January 2023",
        credentialId: "AWS-901234",
        credentialURL: "https://aws.amazon.com/verify/AWS-901234",
    },
    {
        id: 5,
        title: "Python for Data Science",
        issuer: "IBM",
        issuerLogo: "/certs/ibm.svg",
        date: "March 2023",
        credentialId: "PDS-567890",
        credentialURL: "https://ibm.com/verify/PDS-567890",
    },
    {
        id: 6,
        title: "Deep Learning Specialization",
        issuer: "DeepLearning.AI",
        issuerLogo: "/certs/deeplearning-ai.svg",
        date: "May 2023",
        credentialId: "DLS-123789",
        credentialURL: "https://deeplearning.ai/verify/DLS-123789",
    },
    {
        id: 7,
        title: "UI/UX Design Fundamentals",
        issuer: "Google",
        issuerLogo: "/certs/google.svg",
        date: "July 2023",
        credentialId: "UXD-456012",
        credentialURL: "https://google.com/verify/UXD-456012",
    },
    {
        id: 8,
        title: "Agile Project Management",
        issuer: "Infosys",
        issuerLogo: "/certs/infosys.svg",
        date: "September 2023",
        credentialId: "APM-789345",
        credentialURL: "https://infosys.com/verify/APM-789345",
    },
]

interface CertificationCardProps {
    certification: Certification
}

const CertificationCard = ({ certification }: CertificationCardProps): JSX.Element => {
    return (
        <div className="certification-card">
            <div className="flex items-center mb-4">
                <div className="w-12 h-12 mr-3 flex items-center justify-center rounded-md glass-card p-2">
                    <img
                        src={certification.issuerLogo || "/placeholder.svg"}
                        alt={certification.issuer}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                            ; (e.target as HTMLImageElement).src =
                                `https://via.placeholder.com/48?text=${certification.issuer.charAt(0)}`
                        }}
                    />
                </div>
                <div>
                    <h4 className="font-medium text-lg">{certification.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{certification.issuer}</p>
                </div>
            </div>

            <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">{certification.date}</span>

                {certification.credentialURL && (
                    <a
                        href={certification.credentialURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-link"
                        aria-label={`Verify ${certification.title} certification`}
                    >
                        <span className="text-sm">Verify</span>
                        <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                )}
            </div>
        </div>
    )
}

const Certifications = (): JSX.Element => {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const certsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 },
        )

        if (certsRef.current) {
            observer.observe(certsRef.current)
        }

        return () => {
            if (certsRef.current) {
                observer.unobserve(certsRef.current)
            }
        }
    }, [])

    return (
        <section id="certifications" className="py-20 relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="section-title">Certifications</h2>
                    <p className="section-subtitle">Professional certifications and achievements</p>
                </div>

                <div ref={certsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {certificationsData.map((certification, index) => (
                        <div
                            key={certification.id}
                            className={`transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <CertificationCard certification={certification} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Certifications

