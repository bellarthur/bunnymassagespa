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
{/* WhatsApp Floating Button */}
<a
  href="https://wa.me/233247932681"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat on WhatsApp"
  className={`fixed right-6 bottom-6 z-50 transition-opacity duration-300 ${
    isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
  }`}
>
  <div
    className="relative p-3 rounded-full bg-green-500 hover:bg-green-600 shadow-lg shadow-green-800/40 
               transition-transform hover:scale-105 focus:outline-none focus:ring-2 
               focus:ring-green-400 focus:ring-offset-2 animate-[pulseSoft_3s_ease-in-out_infinite]"
  >
    <img
      src="/whatsapp.svg"
      alt="WhatsApp"
      className="h-6 w-6 invert brightness-0"
    />
  </div>
</a>
    </div>
  )
}