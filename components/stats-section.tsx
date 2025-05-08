"use client"

import { motion } from "framer-motion"
import { Calendar, CheckCircle, Users, Award } from "lucide-react"

export default function StatsSection() {
  const stats = [
    {
      value: "2+",
      label: "Years in Business",
      description: "A decade of delivering exceptional digital solutions",
      icon: <Calendar className="h-8 w-8 text-violet-600" />,
    },
    {
      value: "50+",
      label: "Projects Completed",
      description: "Successful projects across various industries",
      icon: <CheckCircle className="h-8 w-8 text-violet-600" />,
    },
    {
      value: "98%",
      label: "Client Satisfaction",
      description: "Our clients love the results we deliver",
      icon: <Award className="h-8 w-8 text-violet-600" />,
    },
    {
      value: "15+",
      label: "Team Members",
      description: "Talented professionals dedicated to your success",
      icon: <Users className="h-8 w-8 text-violet-600" />,
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We take pride in our achievements and the value we bring to our clients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center"
            >
              <div className="mx-auto bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-lg font-semibold text-violet-600 mb-3">{stat.label}</p>
              <p className="text-gray-600">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
