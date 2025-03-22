"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const speakersData = [
  {
    day: "day1",
    speakers: [
      {
        name: "Dr. Harshal Bhangale",
        designation: "Software Developer, Google",
        bio: "Dr. Harshal Bhangale has over 1 years of experience in   research and has contributed to several projects.",
        image: "/placeholder.svg?height=300&width=300",
        session: "Keynote Session: Future of Research & Gen AI",
      },
      {
        name: "Dr. Harshada Raut",
        designation: "AI Researcher, IIT Bombay",
        bio: "Dr. Harshada Raut specializes in AI applications in space technology and has published numerous research papers.",
        image: "/placeholder.svg?height=300&width=300",
        session: "Technical Workshop: AI & ML in Technology",
      },
    ],
  },
  {
    day: "day2",
    speakers: [
      {
        name: "Dr. Priya Sharma",
        designation: "Data Scientist, Google",
        bio: "Dr. Priya Sharma leads AI research at Google and has expertise in machine learning algorithms for space applications.",
        image: "/placeholder.svg?height=300&width=300",
        session: "Panel Discussion: Emerging Technologies in Research",
      },
      {
        name: "Mr. Amit Reddy",
        designation: "Space Systems Engineer, ISRO",
        bio: "Mr. Amit Reddy has worked on multiple satellite projects and specializes in space communication systems.",
        image: "/placeholder.svg?height=300&width=300",
        session: "Panel Discussion: Emerging Technologies in Research",
      },
      {
        name: "Dr. Sandeep Kulkarni",
        designation: "Research Paper Reviewer, IEEE",
        bio: "Dr. Sandeep Kulkarni has reviewed over 200 research papers and guides researchers on effective paper writing.",
        image: "/placeholder.svg?height=300&width=300",
        session: "Hands-on Session: Research Paper Writing & Publishing",
      },
    ],
  },
  {
    day: "day3",
    speakers: [
      {
        name: "Industry Experts",
        designation: "From ISRO, IEEE, and Academia",
        bio: "A panel of distinguished judges from ISRO, IEEE, and leading academic institutions will evaluate the projects.",
        image: "/placeholder.svg?height=300&width=300",
        session: "Hackathon / Ideathon: Solving Real-World Challenges",
      },
    ],
  },
]

export function SpeakersSection() {
  const [activeDay, setActiveDay] = useState("day1")

  return (
    <section id="speakers" className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Meet Our Speakers</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Learn from industry experts, researchers, and innovators who are leading the way in space research and
            technology.
          </p>
        </motion.div>

        <Tabs defaultValue="day1" value={activeDay} onValueChange={setActiveDay}>
          <TabsList className="grid grid-cols-3 max-w-md mx-auto mb-8">
            <TabsTrigger value="day1">Day 1</TabsTrigger>
            <TabsTrigger value="day2">Day 2</TabsTrigger>
            <TabsTrigger value="day3">Day 3</TabsTrigger>
          </TabsList>

          {speakersData.map((day) => (
            <TabsContent key={day.day} value={day.day}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {day.speakers.map((speaker, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="bg-black/50 border border-blue-900/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-blue-500/50 glow-card group">
                      <div className="relative overflow-hidden">
                        <img
                          src={speaker.image || "/placeholder.svg"}
                          alt={speaker.name}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                          <p className="text-white text-sm">{speaker.bio}</p>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-white mb-1">{speaker.name}</h3>
                        <p className="text-blue-400 text-sm mb-3">{speaker.designation}</p>
                        <p className="text-gray-400 text-sm">
                          <span className="font-medium text-gray-300">Session:</span> {speaker.session}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

