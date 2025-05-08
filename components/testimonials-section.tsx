"use client"

import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay, Navigation } from "swiper/modules"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Star } from "lucide-react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      image: "/placeholder.svg?height=200&width=200",
      rating: 5,
      testimonial:
        "FedgeCo transformed our digital presence completely. Their team was professional, responsive, and delivered beyond our expectations. The new platform has significantly increased our user engagement and conversion rates.",
    },
    {
      name: "Michael Chen",
      role: "CTO, HealthPlus",
      image: "/placeholder.svg?height=200&width=200",
      rating: 5,
      testimonial:
        "Working with FedgeCo was a game-changer for our healthcare platform. Their expertise in both technology and user experience design helped us create an intuitive system that our staff and patients love using.",
    },
    {
      name: "Aisha Patel",
      role: "Marketing Director, GlobalRetail",
      image: "/placeholder.svg?height=200&width=200",
      rating: 5,
      testimonial:
        "The e-commerce solution FedgeCo built for us has revolutionized our online sales. Their attention to detail and understanding of our business needs resulted in a platform that's both powerful and easy to use.",
    },
    {
      name: "David Osei",
      role: "Founder, EduLearn",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4,
      testimonial:
        "FedgeCo helped us bring our educational platform vision to life. Their team was collaborative, creative, and committed to delivering a high-quality product that met all our requirements.",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-violet-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
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
              768: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
            className="pb-14"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="h-full"
                >
                  <Card className="h-full bg-white border-none shadow-lg">
                    <CardContent className="p-8 flex flex-col h-full">
                      <div className="flex items-center mb-6">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{testimonial.name}</h3>
                          <p className="text-gray-600">{testimonial.role}</p>
                        </div>
                      </div>
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-700 italic flex-grow">{testimonial.testimonial}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}
