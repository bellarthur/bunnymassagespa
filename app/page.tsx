import { StickyNav, HeroSection, ServicesSection, DiscountSection, TestimonialsSection, BookingSection, FAQSection, Footer, AboutSection } from "@/components/bunny_spa_design_system_components"

export default function BunnySpaLanding() {

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ServicesSection />
      <DiscountSection />
      <TestimonialsSection />
      <BookingSection />
      <AboutSection />
      <FAQSection />
    </div>
  )
}