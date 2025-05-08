"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import Logo from "@/components/logo"

export default function Footer() {
  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Consulting", path: "/services" },
        { name: "Development", path: "/services" },
        { name: "Support", path: "/contact" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Careers", path: "#" },
        { name: "Contact", path: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", path: "#" },
        { name: "Documentation", path: "#" },
        { name: "FAQs", path: "/" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", path: "#" },
        { name: "Terms of Service", path: "#" },
        { name: "Cookie Policy", path: "#" },
      ],
    },
    {
      title: "Contact Us",
      links: [
        {
          name: "15 Independence Avenue, Accra, Ghana",
          path: "#",
          icon: <MapPin className="h-4 w-4 text-violet-400 mr-2 flex-shrink-0" />,
        },
        {
          name: "hello@fedgeco.com",
          path: "mailto:hello@fedgeco.com",
          icon: <Mail className="h-4 w-4 text-violet-400 mr-2 flex-shrink-0" />,
        },
        {
          name: "+233 20 123 4567",
          path: "tel:+233201234567",
          icon: <Phone className="h-4 w-4 text-violet-400 mr-2 flex-shrink-0" />,
        },
      ],
    },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top section with logo and social links */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-6 md:mb-0">
            <Logo isLight={true} />
          </div>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-violet-600 hover:text-white transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-violet-600 hover:text-white transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-violet-600 hover:text-white transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-violet-600 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {footerLinks.map((category) => (
            <div key={category.title}>
              <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className="text-gray-400 hover:text-white transition-colors flex items-center"
                    >
                      {link.icon && link.icon}
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center sm:text-left">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} FedgeCo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
