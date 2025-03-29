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
        name: "Dr. Shantipal Ohol",
        designation: "Associate Professor, COEP University, Pune",
        bio: "Chair IEEE RAS Pune Section | Professor at COEP Technological University, Pune",
        image: "/Speakers/Dr. Shantipal Ohol.png/?height=300&width=300",
        session: "Sesson on New updates in Robotics Technology",
      },
      {
        name: "Mr. Sagar Mangulakar",
        designation: "Managing Director Automax Robotics, Pune",
        bio: "Robotics Engineer | Mechanical Design | Ex. SVR Infotech. Itd, Pune | Hydraulics | Robotics | Automation",
        image: "/Speakers/Mr. Sagar Mangulkar.jpg/?height=300&width=300",
        session: "Sesson on Automation Robotics",
      },
    ],
  },
  {
    day: "day2",
    speakers: [
      {
        name: "Mr. Vishwas Vaidya",
        designation: "Automotive Consultant at Congnizant",
        bio: "IIT Delhi Alumni | Engineering Consultant | M/s Fourfront | Minda Corporation ",
        image: "/Speakers/Mr. Vishwas Vaidya.png?height=300&width=300",
        session: "Session on Embedded Systems",
      },
      {
        name: "Mr. Rakshit Jain",
        designation: "SDE Intern PTC",
        bio: "Design Thinker | IEEE Volunteer ",
        image: "/Speakers/Mr. Rakshit Jain.png?height=300&width=300",
        session: "Session on Design Thinking Workshop",
      },
      {
        name: "Dr. Sanjay Lakade",
        designation: "Director & CEO @RSCOE Innovation and Incubation Foundation",
        bio: "Director & CEO @RSCOE Innovation and Incubation Foundation",
        image: "/Speakers/Dr. Sanjay Lakade.png?height=300&width=300",
        session: "Session on Patent Writing",
      },
    ],
  },
  {
    day: "day3",
    speakers: [
      {
        name: "Dr. Surekha Deshmukh",
        designation: "Domain Consultant, Tata Consultancy Services",
        bio: "Domain Consultant - TCS | Chair-WIE-IEEE Smart Cities | Former Chair- IEEE Pune Section in Energy Transition Decarbonization",
        image: "/Speakers/Dr. Surekha Deshmukh.png/?height=300&width=300",
        session: "Session on Role of deep tech tools in accelerating energy transition",
      },
      {
        name: "Mr. Binod Kumar",
        designation: "Professor & Dean of International Relations @RSCOE",
        bio: "Dean (International Relations) & Professor | Ph.D(Computer Sc.) | SMIEEE(USA), SMACM | Aluminus of NIT Jamshedpur| IEEE Senior Member of Year 2023 award recipient under Pune Section",
        image: "/Speakers/Dr. Binod Kumar.png?height=300&width=300",
        session: "Session on Research Paper Writing",
      },
      {
        name: "Prof. Swapnil Vyavahare",
        designation: "Associate Professor",
        bio: "Data Scientist | NIT Surat Alumni",
        image: "/Speakers/Mr. Swapnil Vyavahare.png?height=300&width=300",
        session: "Hands on Research Paper Writing",
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
            Learn from industry experts, researchers, and innovators who are leading the way in research and technology.
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

