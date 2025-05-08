"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay, Navigation } from "swiper/modules"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet"
import { ChevronRight, Users, Lightbulb, Layers, Rocket, Globe, DollarSign, Cpu } from "lucide-react"
import Link from "next/link"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null)

  const services = [
    {
      id: "business-consulting",
      title: "Business Consulting & Strategy",
      description:
        "Strategic consulting to help your business navigate digital transformation and growth opportunities.",
      icon: <Lightbulb className="h-10 w-10 text-white" />,
      color: "from-violet-600 to-purple-600",
      benefits: [
        "Market research & business analysis",
        "Strategic planning & growth advisory",
        "Financial forecasting & risk management",
      ],
      fullDescription: `Our Business Consulting & Strategy service provides comprehensive guidance to help your organization navigate complex business challenges and capitalize on growth opportunities. We work closely with your team to understand your unique needs and develop tailored strategies that drive sustainable success.`,
      approach: `We begin with a thorough analysis of your current business model, market position, and competitive landscape. Our team of experienced consultants then develops actionable strategies aligned with your goals, whether you're looking to enter new markets, optimize operations, or transform your business model.`,
      caseStudy: `A mid-sized manufacturing company was struggling with declining market share and outdated processes. Our team conducted extensive market research, identified growth opportunities, and developed a comprehensive digital transformation strategy. Within 18 months, the client saw a 35% increase in operational efficiency and a 28% growth in revenue.`,
    },
    {
      id: "project-management",
      title: "Project Management & Execution",
      description: "Expert project management to ensure your initiatives are delivered on time and within budget.",
      icon: <Layers className="h-10 w-10 text-white" />,
      color: "from-blue-600 to-cyan-600",
      benefits: ["End-to-end project coordination", "Performance monitoring & reporting", "Staffing solutions"],
      fullDescription: `Our Project Management & Execution service ensures your critical business initiatives are delivered successfully, on time, and within budget. We bring structure, clarity, and expertise to complex projects, allowing your team to focus on core business activities.`,
      approach: `We employ both agile and traditional project management methodologies, tailored to your specific project needs. Our approach includes detailed planning, resource allocation, risk management, and regular progress tracking with transparent reporting to all stakeholders.`,
      caseStudy: `A financial services firm needed to implement a new customer relationship management system across multiple departments. Our project management team coordinated the entire implementation, managed vendor relationships, and ensured minimal disruption to business operations. The project was completed two weeks ahead of schedule and 15% under budget.`,
    },
    {
      id: "turnkey-solutions",
      title: "Turnkey Business Solutions",
      description: "End-to-end implementation of digital solutions tailored to your specific business needs.",
      icon: <Rocket className="h-10 w-10 text-white" />,
      color: "from-emerald-600 to-teal-600",
      benefits: ["Business launch packages", "SME scale-up strategies", "Ready-to-go frameworks"],
      fullDescription: `Our Turnkey Business Solutions provide everything you need to launch, operate, or scale your business efficiently. We offer comprehensive packages that combine strategy, implementation, and support services tailored to your specific industry and growth stage.`,
      approach: `We take a holistic approach to business solutions, considering all aspects from market entry strategy to operational setup and technology infrastructure. Our turnkey packages are designed to minimize time-to-market and reduce implementation risks, allowing you to focus on your core business activities.`,
      caseStudy: `A technology startup needed to quickly establish operations in a new market. We provided a complete turnkey solution including market analysis, business registration, office setup, recruitment, and technology infrastructure. The client was able to launch operations within 8 weeks, significantly faster than their initial 6-month timeline.`,
    },
    {
      id: "outsourcing-talent",
      title: "Outsourcing & Talent Acquisition",
      description: "Skilled professionals to supplement your team and accelerate your digital initiatives.",
      icon: <Users className="h-10 w-10 text-white" />,
      color: "from-amber-600 to-orange-600",
      benefits: ["Providing skilled professionals", "Cost-effective talent access", "Managing remote/offshore teams"],
      fullDescription: `Our Outsourcing & Talent Acquisition service helps you build and manage high-performing teams without the overhead and complexity of traditional hiring. We provide access to skilled professionals across various disciplines, from technical specialists to executive leadership.`,
      approach: `We take a consultative approach to understand your specific talent needs and organizational culture. Our rigorous selection process ensures we match you with professionals who have both the technical skills and cultural fit to succeed in your organization. We can provide individual specialists or complete teams, with flexible engagement models.`,
      caseStudy: `A growing e-commerce company needed to quickly scale their development team to support a major platform upgrade. We provided a dedicated team of 12 developers, QA specialists, and a project manager. The client was able to complete their platform upgrade 30% faster than projected, while reducing their talent acquisition costs by 40%.`,
    },
    {
      id: "market-entry",
      title: "Market Entry & Expansion into Africa",
      description: "Expert guidance for businesses looking to enter or expand in African markets.",
      icon: <Globe className="h-10 w-10 text-white" />,
      color: "from-pink-600 to-rose-600",
      benefits: ["Partnership & collaboration opportunities", "Regulatory & business setup", "Local market support"],
      fullDescription: `Our Market Entry & Expansion service provides comprehensive support for businesses looking to establish or grow their presence in African markets. We leverage our deep understanding of local business environments, regulatory frameworks, and cultural nuances to help you navigate the complexities of doing business in Africa.`,
      approach: `We begin with thorough market research and analysis to identify opportunities and potential challenges. Our team then develops a tailored market entry strategy, assists with regulatory compliance and business setup, and helps establish local partnerships and distribution networks. We provide ongoing support to ensure your successful integration into new markets.`,
      caseStudy: `A European manufacturing company wanted to expand into West African markets but lacked local knowledge and connections. We conducted comprehensive market analysis, identified optimal entry points, and facilitated partnerships with local distributors. Within 18 months, the client established operations in three countries and achieved 200% of their initial sales targets.`,
    },
    {
      id: "grant-acquisition",
      title: "Grant Acquisition & Investment Facilitation",
      description: "Expert assistance in securing funding and investment for your business initiatives.",
      icon: <DollarSign className="h-10 w-10 text-white" />,
      color: "from-indigo-600 to-blue-600",
      benefits: [
        "Identifying funding opportunities",
        "Proposal writing & contract negotiation",
        "Securing investor partnerships",
      ],
      fullDescription: `Our Grant Acquisition & Investment Facilitation service helps businesses access the funding they need to launch new initiatives, scale operations, or enter new markets. We identify relevant funding opportunities, develop compelling proposals, and connect you with potential investors aligned with your business goals.`,
      approach: `We take a strategic approach to funding, first understanding your business objectives and funding requirements. Our team then identifies appropriate funding sources, whether grants, venture capital, angel investment, or strategic partnerships. We support you throughout the entire process, from initial application to final negotiations and reporting requirements.`,
      caseStudy: `An agricultural technology startup needed funding to commercialize their innovative irrigation solution. We identified relevant grant programs, developed a compelling proposal, and secured $1.2 million in grant funding. Additionally, we facilitated introductions to impact investors, resulting in an additional $3 million in equity investment.`,
    },
    {
      id: "technology-solutions",
      title: "Technology-Driven Business Solutions",
      description: "Innovative technology solutions to drive efficiency, growth, and competitive advantage.",
      icon: <Cpu className="h-10 w-10 text-white" />,
      color: "from-violet-600 to-purple-600",
      benefits: ["Data analytics & AI insights", "Digital transformation consulting", "Business process automation"],
      fullDescription: `Our Technology-Driven Business Solutions help organizations leverage cutting-edge technologies to transform operations, enhance customer experiences, and create new business models. We focus on practical applications of technology that deliver measurable business value and competitive advantage.`,
      approach: `We take a business-first approach to technology, ensuring all solutions are aligned with your strategic objectives. Our team assesses your current technology landscape, identifies opportunities for improvement, and develops a roadmap for implementation. We specialize in data analytics, artificial intelligence, process automation, and digital transformation initiatives.`,
      caseStudy: `A logistics company was struggling with inefficient operations and limited visibility into their supply chain. We implemented an integrated data analytics and IoT solution that provided real-time tracking and predictive maintenance capabilities. The client reduced operational costs by 22% and improved on-time delivery rates from 82% to 96% within the first year.`,
    },
  ]

  // Service Detail Modal Component
  const ServiceDetailModal = ({ service }) => {
    if (!service) return null

    return (
      <div className="space-y-6">
        <div
          className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}
        >
          {service.icon}
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold">{service.title}</h3>
          <p className="text-gray-600">{service.fullDescription}</p>

          <h4 className="text-xl font-semibold mt-6">Our Approach</h4>
          <p className="text-gray-600">{service.approach}</p>

          <h4 className="text-xl font-semibold mt-6">Key Benefits</h4>
          <ul className="space-y-2">
            {service.benefits.map((benefit, i) => (
              <li key={i} className="flex items-start">
                <ChevronRight className="h-5 w-5 text-violet-600 mr-2 flex-shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <h4 className="text-xl font-semibold mt-6">Case Study</h4>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-600 italic">{service.caseStudy}</p>
          </div>
        </div>
      </div>
    )
  }

  // All Services View Component
  const AllServicesView = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[80vh] overflow-y-auto pr-2">
        {services.map((service) => (
          <Card key={service.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div
                  className={`bg-gradient-to-r ${service.color} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-1`}
                >
                  <div className="text-white w-6 h-6">{service.icon}</div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                  <ul className="space-y-1 mt-2">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <ChevronRight className="h-4 w-4 text-violet-600 mr-1 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" className="text-violet-600 hover:text-violet-800 p-0 mt-2">
                        Learn More
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Service Details</DialogTitle>
                      </DialogHeader>
                      <ServiceDetailModal service={service} />
                      <DialogFooter className="mt-6">
                        <Link href="/contact">
                          <Button className="bg-violet-600 hover:bg-violet-700">Contact Us About This Service</Button>
                        </Link>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <section id="services" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of services to help your business succeed in the digital landscape.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation
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
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="h-full"
                >
                  <Card className="h-full bg-white border-none shadow-lg">
                    <CardContent className="p-8 flex flex-col h-full">
                      <div
                        className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}
                      >
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                      <p className="text-gray-600 flex-grow mb-6">{service.description}</p>
                      <ul className="space-y-2 mb-6">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <ChevronRight className="h-5 w-5 text-violet-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="ghost"
                            className="group text-violet-600 hover:text-violet-800 p-0 justify-start mt-auto"
                            onClick={() => setSelectedService(service)}
                          >
                            Learn More
                            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle>Service Details</DialogTitle>
                          </DialogHeader>
                          <ServiceDetailModal service={service} />
                          <DialogFooter className="mt-6">
                            <Link href="/contact">
                              <Button className="bg-violet-600 hover:bg-violet-700">
                                Contact Us About This Service
                              </Button>
                            </Link>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Sheet>
            <SheetTrigger asChild>
              <Button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-6 text-lg">
                View All Services
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[85vh] sm:max-w-none">
              <SheetHeader className="mb-6">
                <SheetTitle className="text-2xl">Our Complete Service Offerings</SheetTitle>
                <SheetDescription>
                  Explore our comprehensive range of services designed to help your business thrive.
                </SheetDescription>
              </SheetHeader>
              <AllServicesView />
              <SheetFooter className="mt-6">
                <SheetClose asChild>
                  <Button variant="outline" className="mr-2">
                    Close
                  </Button>
                </SheetClose>
                <Link href="/services">
                  <Button className="bg-violet-600 hover:bg-violet-700">View Detailed Services Page</Button>
                </Link>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </motion.div>
      </div>
    </section>
  )
}
