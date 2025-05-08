"use client"

import { motion } from "framer-motion"
import { Lightbulb, Layers, Rocket, Users, Globe, DollarSign, Cpu } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServicesGrid() {
  // Services offered
  const services = [
    {
      title: "Business Consulting & Strategy",
      description: "Guiding businesses with market research, strategic planning, and risk management.",
      benefits: [
        "Market research & business analysis",
        "Strategic planning & growth advisory",
        "Financial forecasting & risk management",
      ],
      icon: <Lightbulb className="w-10 h-10 text-white" />,
      bgColor: "from-purple-500 to-purple-400",
      textColor: "text-purple-500",
    },
    {
      title: "Project Management & Execution",
      description: "Efficient planning, execution, and staffing for project success.",
      benefits: ["End-to-end project coordination", "Performance monitoring & reporting", "Staffing solutions"],
      icon: <Layers className="w-10 h-10 text-white" />,
      bgColor: "from-blue-500 to-blue-400",
      textColor: "text-blue-500",
    },
    {
      title: "Turnkey Business Solutions",
      description: "Helping startups and SMEs launch, operate, and scale effectively.",
      benefits: ["Business launch packages", "SME scale-up strategies", "Ready-to-go frameworks"],
      icon: <Rocket className="w-10 h-10 text-white" />,
      bgColor: "from-green-500 to-green-400",
      textColor: "text-green-500",
    },
    {
      title: "Outsourcing & Talent Acquisition",
      description: "Skilled staffing for various industries, locally and offshore.",
      benefits: ["Providing skilled professionals", "Cost-effective talent access", "Managing remote/offshore teams"],
      icon: <Users className="w-10 h-10 text-white" />,
      bgColor: "from-yellow-500 to-yellow-400",
      textColor: "text-yellow-500",
    },
    {
      title: "Market Entry & Expansion into Africa",
      description: "Supporting entry into African markets with local expertise.",
      benefits: ["Partnership & collaboration opportunities", "Regulatory & business setup", "Local market support"],
      icon: <Globe className="w-10 h-10 text-white" />,
      bgColor: "from-red-500 to-red-400",
      textColor: "text-red-500",
    },
    {
      title: "Grant Acquisition & Investment Facilitation",
      description: "Connecting businesses to funding and investment.",
      benefits: [
        "Identifying funding opportunities",
        "Proposal writing & contract negotiation",
        "Securing investor partnerships",
      ],
      icon: <DollarSign className="w-10 h-10 text-white" />,
      bgColor: "from-pink-500 to-pink-400",
      textColor: "text-pink-500",
    },
    {
      title: "Technology-Driven Business Solutions",
      description: "Transforming business through data, automation, and AI.",
      benefits: ["Data analytics & AI insights", "Digital transformation consulting", "Business process automation"],
      icon: <Cpu className="w-10 h-10 text-white" />,
      bgColor: "from-indigo-500 to-indigo-400",
      textColor: "text-indigo-500",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Consulting Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive business solutions to help your organization thrive in today's competitive landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div
                    className={`bg-gradient-to-r ${service.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}
                  >
                    {service.icon}
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${service.textColor}`}>{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>

                  <ul className="mb-6 space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <span className={`mr-2 text-lg ${service.textColor}`}>•</span>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact" className="inline-block">
                    <Button variant="outline" className={`${service.textColor} border-current hover:bg-gray-50`}>
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
