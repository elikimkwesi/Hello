"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import Link from "next/link"
import { Mail, MessageCircle, Send } from "lucide-react"

export default function ContactCTA() {
  const [isOpen, setIsOpen] = useState(false)

  const contactChannels = [
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      link: "mailto:hello@fedgeco.com",
      handle: "hello@fedgeco.com",
      color: "bg-red-500 hover:bg-red-600",
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle className="h-5 w-5" />,
      link: "https://wa.me/233201234567", // Replace with your actual WhatsApp number
      handle: "+233 20 123 4567",
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      name: "Telegram",
      icon: <Send className="h-5 w-5" />,
      link: "https://t.me/fedgeco", // Replace with your actual Telegram handle
      handle: "@fedgeco",
      color: "bg-blue-500 hover:bg-blue-600",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-violet-600 to-purple-700">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Our team of expert consultants is ready to help you navigate challenges, seize opportunities, and achieve
            sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Popover open={isOpen} onOpenChange={setIsOpen}>
              <PopoverTrigger asChild>
                <Button size="lg" className="bg-white text-violet-700 hover:bg-gray-100 px-4 sm:px-8 w-full sm:w-auto">
                  Contact Us Now
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-0">
                <div className="grid gap-2 p-2">
                  <div className="p-2 text-center">
                    <h3 className="font-medium text-lg">Get in touch</h3>
                    <p className="text-sm text-gray-500">Choose your preferred contact method</p>
                  </div>
                  {contactChannels.map((channel) => (
                    <Link
                      key={channel.name}
                      href={channel.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className={`${channel.color} text-white p-2 rounded-full`}>{channel.icon}</div>
                      <div className="flex-1">
                        <p className="font-medium">{channel.name}</p>
                        <p className="text-sm text-gray-500">{channel.handle}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
            <Link href="/services" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10 px-4 sm:px-8 w-full"
              >
                Explore Our Services
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
