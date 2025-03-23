"use client"

import { motion } from "framer-motion"
import { MapPin, Navigation } from "lucide-react"
import { Card } from "@/components/ui/card"

export function LocationSection() {
  return (
    <section id="location" className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Event Location</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join us at JSPM RSCOE campus for three days of innovation and research
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="bg-black/50 border border-blue-900/50 backdrop-blur-sm p-8 glow-card">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/20 p-3 rounded-full h-fit">
                  <MapPin className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Venue Address</h3>
                  <address className="not-italic text-gray-300 space-y-2 text-lg">
                    <p>JSPM Rajarshi Shahu College Of Engineering </p>
                    <p>Tathawade, Pune</p>
                    <p>Maharashtra, India - 411033</p>
                  </address>
                </div>
              </div>
            </Card>

            {/* <Card className="bg-black/50 border border-blue-900/50 backdrop-blur-sm p-8 glow-card">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500/20 p-3 rounded-full h-fit">
                  <Navigation className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">How to Reach</h3>
                  <ul className="text-gray-300 space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="font-medium text-white">By Bus:</span>
                      <span>Frequent bus services available from Pune Railway Station and Pune Airport</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-medium text-white">By Car:</span>
                      <span>Located near Mumbai-Pune Expressway, easily accessible via cab services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-medium text-white">By Metro:</span>
                      <span>Nearest metro station is 2 km away with shuttle services available</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="h-[450px] rounded-lg overflow-hidden border border-blue-900/50 glow-card"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d668.3892223226093!2d73.74717051454061!3d18.619950756042638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbbc138acb7b%3A0x67043867a211a31d!2sJSPM%20Rajarshi%20Shahu%20College%20Of%20Engineering%20%2C%20Tathawade!5e0!3m2!1sen!2sin!4v1742753327965!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="JSPM RSCOE Location Map"
              className="filter grayscale-[30%] contrast-125 brightness-75"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section >
  )
}

