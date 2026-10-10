import { BookingSection } from "@/components/bunny_spa_design_system_components"
import { serviceMetadata } from "@/lib/seo"

export const metadata = serviceMetadata(
  "Book a Massage Appointment",
  "Request an appointment for massage and spa services at Bunny Massage Spa in Accra or Kumasi, Ghana.",
  "/appointment",
)

export default function AppointmentPage() {

  return (
    <main className="relative min-h-screen bg-linear-to-br from-background via-muted/30 to-background">
      <BookingSection />
    </main>
  )
}
