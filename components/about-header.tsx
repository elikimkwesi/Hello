"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Logo from "@/components/logo"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Check if we're on the home page
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Determine header styling based on page and scroll state
  const headerBg = isHomePage
    ? isScrolled
      ? "bg-white/90 backdrop-blur-md shadow-md"
      : "bg-transparent"
    : "bg-white shadow-md"

  const headerPadding = isScrolled || !isHomePage ? "py-3" : "py-5"

  // Navigation items - consistent across all pages
  const navItems = ["Home", "About", "Services", "Contact"]

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${headerBg} ${headerPadding}`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
          <Logo isLight={isHomePage && !isScrolled} />
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => {
            const isActive = item === "Home" ? pathname === "/" : pathname.startsWith(`/${item.toLowerCase()}`)

            return (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={`font-medium transition-colors duration-200 ${
                    isHomePage && !isScrolled ? "text-white/90 hover:text-white" : "text-gray-700 hover:text-violet-600"
                  } ${isActive ? "font-bold" : ""}`}
                >
                  {item}
                </Link>
              </motion.div>
            )
          })}
        </nav>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="hidden md:block"
        >
          <Button
            className={`${
              isHomePage && !isScrolled
                ? "bg-white text-violet-600 hover:bg-white/90"
                : "bg-violet-600 hover:bg-violet-700 text-white"
            }`}
          >
            Get Started
          </Button>
        </motion.div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className={`h-6 w-6 ${isHomePage && !isScrolled ? "text-white" : "text-gray-800"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isHomePage && !isScrolled ? "text-white" : "text-gray-800"}`} />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4"
        >
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => {
              const isActive = item === "Home" ? pathname === "/" : pathname.startsWith(`/${item.toLowerCase()}`)

              return (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={`font-medium text-gray-800 hover:text-violet-600 transition-colors duration-200 ${
                    isActive ? "font-bold text-violet-600" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              )
            })}
            <Button className="bg-violet-600 hover:bg-violet-700 text-white w-full">Get Started</Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}
