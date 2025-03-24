"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, Users, Award } from "lucide-react"

export function RegistrationSection() {
  return (
    <section id="register" className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Register Now</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Secure your spot for this exclusive 3-day research symposium and connect with leading researchers and
            innovators.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="bg-black/50 border border-blue-900/50 backdrop-blur-sm p-6 glow-card">
              <CardContent className="p-0 space-y-6">
                <h3 className="text-2xl font-bold text-white">Event Highlights</h3>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="bg-blue-500/20 p-3 rounded-full h-fit">
                      <Calendar className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">3-Day Immersive Experience</h4>
                      <p className="text-gray-400">
                        Keynotes, workshops, and hands-on sessions spread across three days.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-purple-500/20 p-3 rounded-full h-fit">
                      <Users className="h-6 w-6 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Networking Opportunities</h4>
                      <p className="text-gray-400">
                        Connect with industry experts, researchers, and fellow students interested in space research and
                        technology.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-pink-500/20 p-3 rounded-full h-fit">
                      <Award className="h-6 w-6 text-pink-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Certificates & Prizes</h4>
                      <p className="text-gray-400">
                        Participation certificates for all attendees and exciting goodies.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-black/50 border border-blue-900/50 backdrop-blur-sm rounded-lg p-8 glow-card"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Registration Details</h3>

            <div className="space-y-6 mb-8">
              <div>
                <h4 className="text-lg font-medium text-white mb-2">Who Can Attend?</h4>
                <p className="text-gray-400">
                  Students, researchers, and professionals interested in space research, AI, and emerging technologies.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-white mb-2">Registration Fee</h4>
                <p className="text-gray-400">
                  IEEE Members: ₹150
                  <br />
                  Non-IEEE Members: ₹200
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-white mb-2">Registration Deadline</h4>
                <p className="text-gray-400">March 30, 2025 (Limited seats available)</p>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group"
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSetGsrcVoz3zzNuz_Qq5uceBCkg3c5sOI1qK_ibR2yyf4RefQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                Register
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

