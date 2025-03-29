"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Calendar, MapPin } from "lucide-react"

const scheduleData = [
  {
    day: "day1",
    date: "April 1st, 2025",
    // theme: "Ignition & Exploration",
    theme: "Lastest AI Tech & Robotics Technology",
    sessions: [
      {
        title: "Sesson on New updates in Robotics Technology",
        speaker: "Dr. Shantipal Ohol",
        designation: "Associate Professor, COEP University, Pune",
        time: "11:10 PM - 12:00 PM",
        location: "Jayawant Auditorium, JSPM RSCOE, Tathawade",
      },
      {
        title: "Sesson on Automation Robotics",
        speaker: "Mr. Sagar Mangulakar",
        designation: "Managing Director Automax Robotics, Pune",
        time: "2:450 PM - 4:30 PM",
        location: "Jayawant Auditorium, JSPM RSCOE, Tathawade",
      },
    ],
  },
  {
    day: "day2",
    date: "April 2nd, 2025",
    // theme: "Innovation & Ideation",
    theme: "Emerging Embedded Technologies & Design Thinking",
    sessions: [
      {
        title: "Session on Embedded Systems",
        speaker: "Mr. Vishwas Vaidya",
        designation: "Automotive Consultant at Congnizant",
        time: "10:00 AM - 12:00 PM",
        location: "Central Library, JSPM RSCOE, Tathawade",
      },
      {
        title: "Session on Design Thinking Workshop",
        speaker: "Mr. Rakshit Jain",
        designation: "SDE Intern PTC",
        time: "1:30 PM - 3:30 PM",
        location: "Central Library, JSPM RSCOE, Tathawade",

      },
      {
        title: "Session on Patent Writing",
        speaker: "Dr. Sanjay Lakade",
        designation: "Director & CEO @RSCOE Innovation and Incubation Foundation",
        time: "3:00 PM - 4:00 PM",
        location: "Central Library, JSPM RSCOE, Tathawade",
      },
    ],
  },
  {
    day: "day3",
    date: "April 3rd, 2025",
    // theme: "Implementation & Presentation",
    theme: "Practical Research Paper Writing & Booming AI Tech",
    sessions: [
      {
        title: "Session on Research Paper Writing",
        speaker: "Mr. Binod Kumar",
        designation: "Professor & Dean of International Relations @RSCOE",
        time: "10:00 AM - 12:30 PM",
        location: "Central Library, JSPM RSCOE, Tathawade",
      },
      {
        title: "Hands on Research Paper Writing",
        speaker: "Prof. Swapnil Vyavahare",
        designation: "Associate Professor",
        time: "1:30 PM - 2:30 PM",
        location: "Central Library, JSPM RSCOE, Tathawade",
      },
      {
        title: "Session on Role of Deep Tech Tools in Accelerating Energy Transition",
        speaker: "Dr Surekha Deshmukh",
        designation: "Domain Consultant, Tata Consultancy Services",
        time: "2:30 PM - 4:00 PM",
        location: "Jayawant Auditorium, JSPM RSCOE, Tathawade",
      },
    ],
  },
]

export function EventSchedule() {
  const [activeDay, setActiveDay] = useState("day1")

  return (
    <section id="schedule" className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Event Schedule</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our 3-day program filled with keynotes, workshops, and interactive sessions led by industry experts
            and researchers.
          </p>
        </motion.div>

        <Tabs defaultValue="day1" value={activeDay} onValueChange={setActiveDay}>
          <TabsList className="grid grid-cols-3 max-w-md mx-auto mb-8">
            <TabsTrigger value="day1">Day 1</TabsTrigger>
            <TabsTrigger value="day2">Day 2</TabsTrigger>
            <TabsTrigger value="day3">Day 3</TabsTrigger>
          </TabsList>

          {scheduleData.map((day) => (
            <TabsContent key={day.day} value={day.day}>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{day.theme}</h3>
                <div className="flex items-center justify-center gap-2 text-gray-300 mb-2">
                  <Calendar className="h-4 w-4 text-blue-500" />
                  <span>{day.date}</span>
                </div>
                {/* <p className="text-gray-400">{day.subtheme}</p> */}
              </div>

              <div className="grid gap-6">
                {day.sessions.map((session, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="bg-black/50 border border-blue-900/50 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 glow-card">
                      <CardHeader>
                        <CardTitle className="text-xl text-white">{session.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-gray-300 font-medium">{session.speaker}</p>
                            {session.designation && <p className="text-gray-400 text-sm">{session.designation}</p>}
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-gray-300">
                              <Clock className="h-4 w-4 text-blue-500" />
                              <span>{session.time}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                              <MapPin className="h-4 w-4 text-purple-500" />
                              <span>{session.location}</span>
                            </div>
                          </div>
                        </div>
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

