"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"
import {
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  CheckCircle,
  Lightbulb,
  Layers,
  Rocket,
  Users,
  Globe,
  DollarSign,
  Cpu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useToast } from "@/hooks/use-toast"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().optional(),
  service: z.string().min(1, { message: "Please select a service" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

type FormValues = z.infer<typeof formSchema>

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { toast } = useToast()

  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
    },
  })

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)

    // Simulate API call
    try {
      // In a real app, you would send the form data to your API here
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Show success message
      setIsSuccess(true)
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      })

      // Reset form
      form.reset()

      // Reset success state after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000)
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

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
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-violet-500 to-purple-600 py-20 px-4 sm:px-6 lg:px-8 mt-16">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Let&apos;s transform your business together
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Have a business challenge? Our consulting experts are ready to help.
          </p>
        </motion.div>
      </section>

      {/* Contact Grid Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Information Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-violet-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Email Us</h3>
                    <p className="text-gray-600 mt-1">contact@fedgeco.com</p>
                    <p className="text-gray-500 text-sm mt-1">For inquiries and consultations</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Call Our Consultants</h3>
                    <p className="text-gray-600 mt-1">+233 54 727 6530</p>
                    <p className="text-gray-500 text-sm mt-1">Mon-Fri from 9am to 6pm</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <MessageSquare className="h-6 w-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Business Support</h3>
                    <p className="text-gray-600 mt-1">support@fedgeco.com</p>
                    <p className="text-gray-500 text-sm mt-1">For existing clients</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Visit Our Office</h3>
                    <p className="text-gray-600 mt-1">15 Independence Avenue</p>
                    <p className="text-gray-500 text-sm mt-1">Accra, Ghana</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="John Doe"
                              className="w-full transition-all duration-200 focus:ring-2 focus:ring-violet-500"
                              disabled={isSubmitting}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              placeholder="john@example.com"
                              className="w-full transition-all duration-200 focus:ring-2 focus:ring-violet-500"
                              disabled={isSubmitting}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name (Optional)</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Your Company Ltd."
                              className="w-full transition-all duration-200 focus:ring-2 focus:ring-violet-500"
                              disabled={isSubmitting}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service of Interest</FormLabel>
                          <FormControl>
                            <select
                              {...field}
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              disabled={isSubmitting}
                            >
                              <option value="">Select a service</option>
                              {services.map((service, index) => (
                                <option key={index} value={service.title}>
                                  {service.title}
                                </option>
                              ))}
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Message</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              placeholder="Tell us about your project..."
                              className="w-full min-h-[150px] transition-all duration-200 focus:ring-2 focus:ring-violet-500"
                              disabled={isSubmitting}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-medium py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </div>
                      ) : isSuccess ? (
                        <div className="flex items-center">
                          <CheckCircle className="mr-2 h-5 w-5" />
                          Message Sent!
                        </div>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Find Us</h2>
          <div className="rounded-xl overflow-hidden shadow-lg h-[400px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.9735556716644!2d-0.1870192!3d5.5600956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a53a68a6d49%3A0x4e3562ae858f92e5!2sIndependence%20Ave%2C%20Accra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1651849394565!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="FedgeCo Office Location"
              className="filter grayscale-[30%] hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  )
}
