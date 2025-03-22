"use client"

import { useEffect, useRef } from "react"

export function GalaxyBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const starCount = 200

    // Clear any existing stars
    container.innerHTML = ""

    // Create stars
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div")
      star.className = "star"

      // Random size between 1px and 3px
      const size = Math.random() * 2 + 1
      star.style.width = `${size}px`
      star.style.height = `${size}px`

      // Random position
      star.style.left = `${Math.random() * 100}%`
      star.style.top = `${Math.random() * 100}%`

      // Random twinkle duration
      star.style.setProperty("--duration", `${Math.random() * 3 + 2}s`)

      container.appendChild(star)
    }

    // Create nebula effects
    for (let i = 0; i < 5; i++) {
      const nebula = document.createElement("div")
      nebula.className = "absolute rounded-full opacity-10 blur-3xl"

      // Random size
      const size = Math.random() * 300 + 200
      nebula.style.width = `${size}px`
      nebula.style.height = `${size}px`

      // Random position
      nebula.style.left = `${Math.random() * 100}%`
      nebula.style.top = `${Math.random() * 100}%`

      // Random color
      const colors = ["bg-blue-500", "bg-purple-500", "bg-indigo-500", "bg-pink-500"]
      nebula.classList.add(colors[Math.floor(Math.random() * colors.length)])

      container.appendChild(nebula)
    }

    return () => {
      container.innerHTML = ""
    }
  }, [])

  return (
    <>
      <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-to-b from-black via-black/90 to-black/80 pointer-events-none" />
    </>
  )
}

