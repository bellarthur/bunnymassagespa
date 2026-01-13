"use client"

import { useEffect, useState } from "react"
import { StickyNav, HeroSection, DiscountSection, TestimonialsSection, BookingSection, FAQSection, Footer, AboutSection } from "@/components/bunny_spa_design_system_components"
import { ServicesSection } from "@/components/ServicesSection"
import ChatWidget from "@/components/ChatWidget"

export default function BunnySpaLanding() {
  const [isVisible, setIsVisible] = useState(false)
    // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

      // Set up scroll event listener
    useEffect(() => {
      window.addEventListener("scroll", toggleVisibility)
      return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])
  
      const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ServicesSection />
      <DiscountSection />
      <TestimonialsSection />
      <BookingSection />
      <AboutSection />
      <FAQSection />
      {/* Chat widget and WhatsApp floating buttons */}
      <ChatWidget />
    </div>
  )
}