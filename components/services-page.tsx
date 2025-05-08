"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProjectsSection from "@/components/projects-section"

export default function ServicesPage() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollYProgress } = useScroll()

  const services = [
    {
      id: "business-guidance",
      title: "Business Guidance",
      description: "Strategic consulting to help your business navigate digital transformation and growth.",
      highlights: [
        "Digital strategy development",
        "Market analysis and competitive positioning",
        "Technology roadmapping",
        "Innovation workshops",
        "Business model optimization",
      ],
      isDark: true,
      image: "/placeholder.svg?height=600&width=600",
    },
    {
      id: "project-management",
      title: "Project Management",
      description: "Expert project management to ensure your initiatives are delivered on time and within budget.",
      highlights: [
        "Agile and traditional methodologies",
        "Resource allocation and optimization",
        "Risk management and mitigation",
        "Progress tracking and reporting",
        "Stakeholder communication",
      ],
      isDark: false,
      image: "/placeholder.svg?height=600&width=600",
    },
    {
      id: "turnkey-solutions",
      title: "Turnkey Solutions",
      description: "End-to-end implementation of digital solutions tailored to your specific business needs.",
      highlights: [
        "Custom software development",
        "Mobile application development",
        "Web platform creation",
        "Systems integration",
        "Cloud migration and optimization",
      ],
      isDark: true,
      image: "/placeholder.svg?height=600&width=600",
    },
    {
      id: "grant-negotiation",
      title: "Grant Negotiation",
      description: "Expert assistance in securing and managing grants to fund your innovative projects.",
      highlights: [
        "Grant opportunity identification",
        "Proposal development and submission",
        "Budget planning and management",
        "Compliance monitoring",
        "Reporting and documentation",
      ],
      isDark: false,
      image: "/placeholder.svg?height=600&width=600",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {services.map((service, index) => (
        <ServiceSection key={service.id} service={service} index={index} />
      ))}

      <ProjectsSection />

      <Footer />

      {/* Floating Consultation Button */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            className="fixed bottom-8 right-8 z-50 rounded-full shadow-lg bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 px-6 py-6"
            size="lg"
          >
            Schedule a Consultation
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px] backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 border-none shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Schedule a Consultation</DialogTitle>
          </DialogHeader>
          <div className="grid gap-6 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your.email@example.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="service">Service of Interest</Label>
              <select
                id="service"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Tell us about your project..." />
            </div>
            <Button
              className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700"
              onClick={() => setIsOpen(false)}
            >
              Submit Request
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

interface ServiceSectionProps {
  service: {
    id: string
    title: string
    description: string
    highlights: string[]
    isDark: boolean
    image: string
  }
  index: number
}

function ServiceSection({ service, index }: ServiceSectionProps) {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  const isEven = index % 2 === 0
  const textColor = service.isDark ? "text-white" : "text-gray-900"
  const bgColor = service.isDark ? "bg-gray-900" : "bg-gray-50"
  const highlightBg = service.isDark ? "bg-gray-800" : "bg-white"

  return (
    <section id={service.id} className={`min-h-screen flex items-center ${bgColor} overflow-hidden`}>
      <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${textColor}`}>{service.title}</h2>
            <p className={`text-xl mb-8 ${service.isDark ? "text-gray-300" : "text-gray-700"}`}>
              {service.description}
            </p>
            <ul className="space-y-3">
              {service.highlights.map((highlight, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-start ${service.isDark ? "text-gray-200" : "text-gray-700"}`}
                >
                  <div className={`p-1 rounded-full mr-3 mt-1 ${service.isDark ? "bg-violet-500" : "bg-violet-600"}`}>
                    <ChevronRight className="h-4 w-4 text-white" />
                  </div>
                  <span>{highlight}</span>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <Button
                className={`${
                  service.isDark
                    ? "bg-white text-gray-900 hover:bg-gray-200"
                    : "bg-violet-600 text-white hover:bg-violet-700"
                }`}
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            style={{ y }}
            className="order-1 md:order-2 relative"
          >
            <div
              className={`rounded-2xl overflow-hidden shadow-xl ${service.isDark ? "shadow-violet-900/20" : "shadow-violet-600/20"}`}
            >
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
