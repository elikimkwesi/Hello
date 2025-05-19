"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Check, ChevronRight, Mail, MapPin, Phone } from "lucide-react"
import Header from "@/components/about-header"
import Footer from "@/components/about-footer"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 10,
    },
  },
}

export default function AboutPage() {
  const [isOpen, setIsOpen] = useState(false)

  // Team members data
  const teamMembers = [
    {
      name: "Benedicta Frimpong",
      role: "Founder and Lead Executive",
      image: "/Images/benedicta.jpeg",
      bio: "Project Manager & Idea Prospect",
    },
    {
      name: "Emmanuella Acheampong",
      role: "Financial and Operations Manager",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Financial and Research Analyst",
    },
    {
      name: "Lois Akoto Baffour",
      role: "Business Development and Innovation manager",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Risk management and Strategic Planning",
    },
    {
      name: "Vincent Monbo",
      role: "Head of IT",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Certified PMP with expertise in agile methodologies and team leadership.",
    },
  ]

  // Why choose us data
  const whyChooseUs = [
    {
      title: "Expertise & Experience",
      description:
        "Our team brings decades of combined experience across industries, ensuring your project benefits from proven expertise.",
      icon: <Check className="h-6 w-6 text-white" />,
    },
    {
      title: "Client-Centered Approach",
      description:
        "We prioritize your vision and goals, working collaboratively to ensure solutions that truly meet your needs.",
      icon: <Check className="h-6 w-6 text-white" />,
    },
    {
      title: "Innovative Solutions",
      description:
        "We stay at the forefront of technology trends to deliver cutting-edge solutions that give you a competitive edge.",
      icon: <Check className="h-6 w-6 text-white" />,
    },
    {
      title: "End-to-End Support",
      description:
        "From strategy to implementation and beyond, we provide comprehensive support throughout your digital journey.",
      icon: <Check className="h-6 w-6 text-white" />,
    },
  ]

  return (
    <div className="relative overflow-hidden">
      {/* Header */}
      <Header />

      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="/placeholder.svg?height=1080&width=1920"
          >
            <source src="/Videos/background.mp4" type="video/mp4" />
            {/* Fallback image if video doesn't load */}
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="FedgeCo Office"
              fill
              className="object-cover"
              priority
            />
          </video>
          <div className="absolute inset-0 bg-black/50 z-10"></div>
        </div>

        {/* Floating Background Elements */}
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-[20%] left-[10%] w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"
            animate={{
              x: [0, 30, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute bottom-[30%] right-[15%] w-72 h-72 rounded-full bg-violet-500/10 blur-3xl"
            animate={{
              x: [0, -40, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute top-[40%] right-[25%] w-48 h-48 rounded-full bg-blue-500/10 blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 9,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Discover our Commitment to excellence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
          >
            FedgeCo is a reliable partner for your business solutions, helping organisations grow and adapt while preparing for future challenges.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full"
            >
              Learn More About Us
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronRight className="h-10 w-10 text-white/70 rotate-90" />
        </motion.div>
      </section>

      {/* Mission Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900">Our Mission</h2>
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
              <p className="text-xl md:text-2xl leading-relaxed text-gray-700">
                To empower businesses with innovative strategies that drive growth, enhance efficiency and build sustainable success.
              </p>
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full -mr-32 -mt-32 opacity-70"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-50 rounded-full -ml-40 -mb-40 opacity-70"></div>
        </div>
      </motion.section>

      {/* Vision Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="py-20 md:py-28 bg-gradient-to-b from-gray-900 to-violet-900 text-white relative overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Our Vision</h2>
            <div className="bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-lg border border-white/20">
              <p className="text-xl md:text-2xl leading-relaxed text-white/90">
                To create a global platform where proffessionals collaborate to solve complex problems and inspire innovation.
              </p>
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/20 rounded-full -ml-36 -mt-36 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-600/20 rounded-full -mr-48 -mb-48 blur-3xl"></div>
        </div>
      </motion.section>

      {/* Value Proposition Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="py-20 md:py-28 bg-white relative overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Value Proposition</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What sets us apart and drives our commitment to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } },
              }}
              className="relative z-10"
            >
              <div className="bg-gradient-to-br from-violet-50 to-purple-100 p-8 rounded-2xl h-full border border-violet-100 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-gradient-to-r from-violet-600 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Expertise That Drives Results</h3>
                <p className="text-gray-700">
                  With a team of seasoned professionals from diverse industries, we deliver practical, innovative
                  solutions tailored to your unique challenges and goals.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
              }}
              className="relative z-10"
            >
              <div className="bg-gradient-to-br from-blue-50 to-cyan-100 p-8 rounded-2xl h-full border border-blue-100 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Future-Focused Strategies</h3>
                <p className="text-gray-700">
                  We prioritize anticipating tomorrow's opportunities, ensuring your business is positioned for
                  sustainable, long-term success.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },
              }}
              className="relative z-10"
            >
              <div className="bg-gradient-to-br from-amber-50 to-orange-100 p-8 rounded-2xl h-full border border-amber-100 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-gradient-to-r from-amber-600 to-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Collaborative Approach</h3>
                <p className="text-gray-700">
                  Partnering closely with our clients, we align our strategies with their vision, leveraging data-driven
                  insights to make impactful and meaningful decisions.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } },
              }}
              className="relative z-10"
            >
              <div className="bg-gradient-to-br from-emerald-50 to-teal-100 p-8 rounded-2xl h-full border border-emerald-100 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Sustainability & Growth</h3>
                <p className="text-gray-700">
                  By combining cutting-edge innovation with deep market insights, we deliver strategies that enhance
                  operational excellence and enable scalable, sustainable growth.
                </p>
              </div>
            </motion.div>
          </div>
          {/* Background decoration */}
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-violet-100 to-transparent rounded-full opacity-50 blur-3xl -z-10"></div>
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-transparent rounded-full opacity-50 blur-3xl -z-10"></div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="py-20 md:py-28 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We bring together expertise, innovation, and a client-centered approach to deliver exceptional results.
            </p>
          </div>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-14"
          >
            {whyChooseUs.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="h-full"
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Card className="h-full bg-white hover:bg-gray-50 transition-colors duration-300 border-none shadow-lg">
                    <CardContent className="p-8 flex flex-col h-full">
                      <div className="bg-gradient-to-r from-violet-600 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                        {item.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                      <p className="text-gray-600 flex-grow">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="py-20 md:py-28 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts brings together a wealth of experience and passion for digital innovation.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-violet-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Get In Touch</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Have questions or ready to start your digital transformation journey? Reach out to our team today.
                </p>

                <div className="space-y-6">
                  <motion.div className="flex items-start space-x-4" variants={fadeIn}>
                    <div className="bg-violet-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-violet-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Our Location</h3>
                      <p className="text-gray-600">15 Independence Avenue, Accra, Ghana</p>
                    </div>
                  </motion.div>

                  <motion.div className="flex items-start space-x-4" variants={fadeIn}>
                    <div className="bg-violet-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-violet-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Email Us</h3>
                      <p className="text-gray-600">contact@fedgeco.com</p>
                    </div>
                  </motion.div>

                  <motion.div className="flex items-start space-x-4" variants={fadeIn}>
                    <div className="bg-violet-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-violet-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Call Us</h3>
                      <p className="text-gray-600">+233 54 727 6530</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              <motion.div variants={scaleIn} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea id="message" placeholder="How can we help you?" className="min-h-[120px]" />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700">
                    Send Message
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />

      {/* Consultation Modal */}
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
              <Label htmlFor="consult-name">Name</Label>
              <Input id="consult-name" placeholder="Your name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="consult-email">Email</Label>
              <Input id="consult-email" type="email" placeholder="your.email@example.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="consult-phone">Phone Number</Label>
              <Input id="consult-phone" placeholder="+233 20 123 4567" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="consult-message">Tell us about your project</Label>
              <Textarea id="consult-message" placeholder="Brief description of your project..." />
            </div>
            <Button
              className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700"
              onClick={() => setIsOpen(false)}
            >
              Request Consultation
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
