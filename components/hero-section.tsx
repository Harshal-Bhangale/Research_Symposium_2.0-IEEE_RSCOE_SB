"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users } from "lucide-react"

export function HeroSection() {
  const planetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!planetRef.current) return

      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      // Calculate mouse position as percentage of window
      const x = (clientX / innerWidth - 0.5) * 20
      const y = (clientY / innerHeight - 0.5) * 20

      // Apply parallax effect
      planetRef.current.style.transform = `translate(${x}px, ${y}px)`
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-gradient glow">Research Symposium 2.0</span>
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 text-gray-300">Unveil - Connect - Invent</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
              A 3-day event focused on research, technology, and innovation by IEEE RSCOE SB. Join us for an immersive
              experience with top researchers and industry experts.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center lg:justify-start mb-8">
              <div className="flex items-center gap-2 text-gray-300">
                <Calendar className="h-5 w-5 text-blue-500" />
                <span>April 1-3, 2025</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="h-5 w-5 text-purple-500" />
                <span>RSCOE Campus</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Users className="h-5 w-5 text-pink-500" />
                <span>Limited Seats</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <a href="#register">Register Now</a>
              </Button>
              <Button size="lg" variant="outline" className="border-blue-500 text-white hover:bg-blue-950/30">
                <a href="#schedule">View Schedule</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div ref={planetRef} className="w-[500px] h-[500px] mx-auto relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-transparent blur-3xl" />
              <img
                src="/placeholder.svg?height=500&width=500"
                alt="Space illustration"
                className="w-full h-full object-contain floating"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#schedule" className="text-gray-400 hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  )
}

