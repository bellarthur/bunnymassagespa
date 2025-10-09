import { BookingSection } from "@/components/bunny_spa_design_system_components"

export const metadata = {
  title: "Book an Appointment | Bunny Spa",
  description: "Reserve your massage or facial session with Bunny Spa. Relax, unwind, and rejuvenate.",
}

export default function AppointmentPage() {

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <BookingSection />
    </main>
  )
}
