"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { ArrowRight, ExternalLink, Calendar, Clock, CheckCircle, AlertCircle, BarChart } from "lucide-react"
import Link from "next/link"

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("all")
  const [selectedProject, setSelectedProject] = useState(null)

  const inProgressProjects = [
    {
      id: 1,
      title: "Commercial Bus Management System",
      category: "in-progress",
      description: "A robust software solution for optimizing commercial bus operations.",
      features: "Features: real-time tracking, automated fare collection, and fleet management.",
      image: "/Images/commercial-bus.jpg",
      tags: ["Transportation", "IoT", "Mobile"],
      progress: 65,
      timeline: "Expected completion: Q3 2023",
      client: "Metro Transit Authority",
      challenge:
        "The client needed to modernize their bus fleet operations to improve efficiency, reduce costs, and enhance passenger experience. Their existing system was fragmented and relied heavily on manual processes.",
      solution:
        "We developed an integrated bus management system with real-time GPS tracking, automated fare collection using NFC technology, and a comprehensive fleet management dashboard. The solution includes mobile apps for both passengers and drivers.",
      results: [
        "30% reduction in operational costs",
        "22% increase in on-time performance",
        "15% growth in ridership due to improved reliability",
        "Real-time visibility of entire fleet for management",
      ],
      testimonial: {
        quote:
          "The bus management system has transformed how we operate our fleet. We now have real-time insights that help us make better decisions and provide a superior service to our passengers.",
        author: "James Wilson",
        position: "Operations Director, Metro Transit Authority",
      },
    },
    {
      id: 2,
      title: "International Call Center Project",
      category: "in-progress",
      description:
        "A comprehensive call center platform with VoIP integration, AI-powered support, and multi-language assistance.",
      image: "/Images/call-center.jpg",
      tags: ["Telecommunications", "AI", "Enterprise"],
      progress: 80,
      timeline: "Expected completion: Q2 2023",
      client: "Global Connect Services",
      challenge:
        "The client needed to establish a modern call center operation capable of handling international calls with multi-language support. They required a solution that could scale quickly while maintaining call quality and customer satisfaction.",
      solution:
        "We designed and implemented a comprehensive call center platform with advanced VoIP integration, AI-powered customer support tools, and real-time translation capabilities. The system includes intelligent call routing, sentiment analysis, and performance analytics.",
      results: [
        "Support for 12 languages with real-time translation",
        "40% reduction in average call resolution time",
        "AI-powered chatbots handling 35% of initial inquiries",
        "99.9% system uptime with redundant infrastructure",
      ],
      testimonial: {
        quote:
          "This call center solution has allowed us to expand into new markets with confidence. The AI-powered features have significantly improved our efficiency while maintaining the personal touch our customers expect.",
        author: "Sarah Chen",
        position: "CEO, Global Connect Services",
      },
    },
    {
      id: 3,
      title: "Smart Waste Management System",
      category: "in-progress",
      description: "An IoT-based solution for efficient waste collection and recycling.",
      features: "Uses smart sensors to monitor waste levels and optimize collection routes.",
      image: "/Images/smart-waste.jpg",
      tags: ["IoT", "Smart City", "Sustainability"],
      progress: 45,
      timeline: "Expected completion: Q4 2023",
      client: "Accra Municipal Council",
      challenge:
        "The city was facing increasing waste management costs and inefficiencies in collection routes. Traditional scheduled pickups often resulted in trucks visiting containers that weren't full or missing ones that were overflowing.",
      solution:
        "We developed an IoT-based waste management system with ultrasonic fill-level sensors installed in waste containers across the city. The system includes a central management platform that uses AI to optimize collection routes based on real-time data and historical patterns.",
      results: [
        "Projected 40% reduction in collection costs",
        "Optimized routes reducing fuel consumption by an estimated 30%",
        "Real-time monitoring preventing overflow situations",
        "Data analytics providing insights for better waste management planning",
      ],
      testimonial: {
        quote:
          "The smart waste management system is already showing tremendous promise. The data-driven approach has revealed patterns we never noticed before and is helping us make our city cleaner and more efficient.",
        author: "Dr. Kwame Mensah",
        position: "Environmental Director, Accra Municipal Council",
      },
    },
  ]

  const upcomingProjects = [
    {
      id: 4,
      title: "FinTech Mobile App",
      category: "upcoming",
      description: "A comprehensive mobile banking solution with advanced security features.",
      image: "/Images/fintech.jpg",
      tags: ["Mobile", "FinTech", "UI/UX"],
      timeline: "Starting: Q3 2023",
      client: "SecureBank Ltd.",
      projectScope:
        "Development of a next-generation mobile banking application with biometric authentication, AI-powered fraud detection, and personalized financial insights.",
      expectedOutcomes: [
        "Seamless user experience across all devices",
        "Bank-grade security with multi-factor authentication",
        "Real-time transaction monitoring and alerts",
        "Personalized financial management tools",
      ],
    },
    {
      id: 5,
      title: "E-commerce Platform",
      category: "upcoming",
      description: "A scalable e-commerce platform with integrated payment solutions.",
      image: "/Images/e-commerce.jpg",
      tags: ["Web", "E-commerce", "Payment"],
      timeline: "Starting: Q2 2023",
      client: "Global Retail Group",
      projectScope:
        "Creation of a comprehensive e-commerce ecosystem with multi-vendor support, integrated payment processing, and advanced analytics for business intelligence.",
      expectedOutcomes: [
        "Seamless shopping experience across devices",
        "Support for multiple vendors and payment methods",
        "Advanced inventory and order management",
        "Customer behavior analytics and personalization",
      ],
    },
    {
      id: 6,
      title: "Healthcare Management System",
      category: "upcoming",
      description: "An integrated system for managing healthcare operations and patient data.",
      image: "/Images/health.jpg",
      tags: ["Enterprise", "Healthcare", "Data"],
      timeline: "Starting: Q4 2023",
      client: "National Health Network",
      projectScope:
        "Development of a comprehensive healthcare management system with electronic health records, appointment scheduling, telemedicine capabilities, and analytics for healthcare providers.",
      expectedOutcomes: [
        "Streamlined patient management and record-keeping",
        "Reduced administrative overhead for healthcare providers",
        "Improved patient experience and access to care",
        "Data-driven insights for healthcare management",
      ],
    },
    {
      id: 7,
      title: "Smart City Initiative",
      category: "upcoming",
      description: "IoT-based solutions for urban infrastructure management.",
      image: "/Images/smart-cities.jpg",
      tags: ["IoT", "Smart City", "Infrastructure"],
      timeline: "Starting: Q1 2024",
      client: "Metropolitan Development Authority",
      projectScope:
        "Implementation of IoT sensors and management systems for traffic control, public lighting, environmental monitoring, and urban resource management.",
      expectedOutcomes: [
        "Reduced traffic congestion and improved mobility",
        "Energy savings through smart lighting and resource management",
        "Enhanced environmental monitoring and response",
        "Data-driven urban planning and development",
      ],
    },
  ]

  const allProjects = [...inProgressProjects, ...upcomingProjects]

  const filteredProjects =
    activeTab === "all" ? allProjects : activeTab === "in-progress" ? inProgressProjects : upcomingProjects

  // Project Case Study Modal Component
  const ProjectCaseStudy = ({ project }) => {
    if (!project) return null

    return (
      <div className="space-y-6">
        <div className="relative h-64 w-full overflow-hidden rounded-lg">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-4 text-white">
              <div className="flex flex-wrap gap-2 mb-2">
                {project.tags.map((tag:string) => (
                  <span key={tag} className="px-3 py-1 bg-violet-600/80 text-white text-xs font-medium rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold">{project.title}</h3>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <Calendar className="h-5 w-5 text-violet-600 mr-2" />
              <h4 className="font-semibold">Timeline</h4>
            </div>
            <p className="text-gray-600 text-sm">{project.timeline}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <CheckCircle className="h-5 w-5 text-violet-600 mr-2" />
              <h4 className="font-semibold">Client</h4>
            </div>
            <p className="text-gray-600 text-sm">{project.client}</p>
          </div>

          {project.category === "in-progress" ? (
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <BarChart className="h-5 w-5 text-violet-600 mr-2" />
                <h4 className="font-semibold">Progress</h4>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
                <div className="bg-violet-600 h-2.5 rounded-full" style={{ width: `${project.progress}%` }}></div>
              </div>
              <p className="text-gray-600 text-sm">{project.progress}% Complete</p>
            </div>
          ) : (
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Clock className="h-5 w-5 text-violet-600 mr-2" />
                <h4 className="font-semibold">Status</h4>
              </div>
              <p className="text-gray-600 text-sm flex items-center">
                <AlertCircle className="h-4 w-4 text-amber-500 mr-1" />
                Upcoming Project
              </p>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <p className="text-gray-700">{project.description}</p>
          {project.features && <p className="text-gray-700">{project.features}</p>}

          {project.category === "in-progress" ? (
            <>
              <h4 className="text-xl font-semibold mt-6">The Challenge</h4>
              <p className="text-gray-700">{project.challenge}</p>

              <h4 className="text-xl font-semibold mt-6">Our Solution</h4>
              <p className="text-gray-700">{project.solution}</p>

              <h4 className="text-xl font-semibold mt-6">Results</h4>
              <ul className="space-y-2">
                {project.results.map((result:boolean, i:number) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>

              {project.testimonial && (
                <div className="bg-gray-50 p-6 rounded-lg mt-6 border-l-4 border-violet-600">
                  <p className="text-gray-700 italic mb-4">"{project.testimonial.quote}"</p>
                  <p className="font-semibold">{project.testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{project.testimonial.position}</p>
                </div>
              )}
            </>
          ) : (
            <>
              <h4 className="text-xl font-semibold mt-6">Project Scope</h4>
              <p className="text-gray-700">{project.projectScope}</p>

              <h4 className="text-xl font-semibold mt-6">Expected Outcomes</h4>
              <ul className="space-y-2">
                {project.expectedOutcomes.map((outcome:any, i:number) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-violet-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    )
  }

  // Project Card Component
  const ProjectCard = ({ project }) => {
    const isInProgress = project.category === "in-progress"

    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -10 }}
      >
        <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
          <div className="relative h-64 overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
            {isInProgress && (
              <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                In Progress
              </div>
            )}
            {!isInProgress && (
              <div className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                Upcoming
              </div>
            )}project
          </div>
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.map((tag:string) => (
                <span key={tag} className="px-3 py-1 bg-violet-100 text-violet-800 text-xs font-medium rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            {project.features && <p className="text-gray-600 mb-4">{project.features}</p>}

            {isInProgress && (
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-violet-600 h-2 rounded-full" style={{ width: `${project.progress}%` }}></div>
                </div>
              </div>
            )}

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" className="group text-violet-600 hover:text-violet-800 p-0">
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Project Case Study</DialogTitle>
                </DialogHeader>
                <ProjectCaseStudy project={project} />
                <DialogFooter className="mt-6">
                  <Button variant="outline" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Visit Project
                  </Button>
                  <Link href="/contact">
                    <Button className="bg-violet-600 hover:bg-violet-700">Discuss a Similar Project</Button>
                  </Link>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  // All Projects View Component
  const AllProjectsView = () => {
    const [viewTab, setViewTab] = useState("all")

    const viewFilteredProjects =
      viewTab === "all" ? allProjects : viewTab === "in-progress" ? inProgressProjects : upcomingProjects

    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-6 text-lg">View All Projects</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[90vw] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Our Project Portfolio</DialogTitle>
          </DialogHeader>

          <div className="mt-4">
            <Tabs defaultValue="all" onValueChange={setViewTab}>
              <div className="flex justify-center mb-8">
                <TabsList className="bg-gray-100">
                  <TabsTrigger value="all">All Projects</TabsTrigger>
                  <TabsTrigger value="in-progress">In Progress</TabsTrigger>
                  <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value={viewTab} className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {viewFilteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <DialogFooter className="mt-8">
            <Link href="/contact">
              <Button className="bg-violet-600 hover:bg-violet-700">Discuss Your Project Needs</Button>
            </Link>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful digital transformations and innovative solutions.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-12">
            <TabsList className="bg-gray-100">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="in-progress">In Progress</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-0">
            <AnimatePresence mode="wait">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </AnimatePresence>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <AllProjectsView />
        </motion.div>
      </div>
    </section>
  )
}
