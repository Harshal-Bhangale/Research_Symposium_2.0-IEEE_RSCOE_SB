import { GalaxyBackground } from "@/components/galaxy-background"
import { HeroSection } from "@/components/hero-section"
import { EventSchedule } from "@/components/event-schedule"
import { SpeakersSection } from "@/components/speakers-section"
import { RegistrationSection } from "@/components/registration-section"
import { Footer } from "@/components/footer"
import { LocationSection } from "@/components/location-section"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <GalaxyBackground />
      <div className="relative z-10">
        <HeroSection />
        <RegistrationSection />
        <EventSchedule />
        <SpeakersSection />
        <LocationSection />
        <Footer />
      </div>
    </main>
  )
}

