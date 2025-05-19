"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function FAQSection() {
  const faqs = [
    {
      question: "What services does FedgeCo offer?",
      answer:
        "FedgeCo focus on expanding market reach and driving financial growth through comprehensive strategies in digital marketing, customer engagement and performance optimization.",
    },
    {
      question: "How long does a typical project take to complete?",
      answer:
        "Project timelines vary depending on the scope, complexity, and specific requirements. A simple website might take 4-6 weeks, while a complex enterprise application could take several months. During our initial consultation, we'll provide a detailed timeline based on your project needs.",
    },
    {
      question: "Do you work with startups or only established businesses?",
      answer:
        "We work with businesses of all sizes, from startups to large enterprises. Our flexible approach allows us to adapt our services to match your business stage, goals, and budget. We're passionate about helping startups bring their innovative ideas to life.",
    },
    {
      question: "What is your approach to project management?",
      answer:
        "We follow agile methodologies that emphasize collaboration, flexibility, and continuous improvement. Our project management approach includes regular client communication, iterative development, and transparent reporting to ensure your project stays on track and meets all requirements.",
    },
    {
      question: "How do you handle project pricing?",
      answer:
        "We offer flexible pricing models including fixed-price, time and materials, and retainer arrangements. After understanding your project requirements, we'll recommend the most suitable pricing model and provide a detailed proposal with transparent cost breakdowns.",
    },
    {
      question: "What happens after my project is launched?",
      answer:
        "We provide ongoing support and maintenance to ensure your digital solution continues to perform optimally. We offer various support packages that include regular updates, performance monitoring, security patches, and technical assistance to address any issues that may arise.",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our services and process.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={`item-${index}`} className="border-b border-gray-200">
                  <AccordionTrigger className="text-lg font-medium py-4 hover:text-violet-600 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-700 mb-6">Still have questions? We're here to help.</p>
          <Button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-6 text-lg">Contact Us</Button>
        </motion.div>
      </div>
    </section>
  )
}
