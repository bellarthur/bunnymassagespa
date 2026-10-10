import type { Metadata } from "next"
import { LocationLandingPage } from "@/components/LocationLandingPage"
import { serviceMetadata } from "@/lib/seo"

export const metadata: Metadata = serviceMetadata(
  "Massage in Accra",
  "Book an appointment-only massage at Bunny Massage Spa in East Legon, Accra. Studio visits and outcall appointments are available.",
  "/locations/accra",
)

export default function AccraLocationPage() {
  return <LocationLandingPage locationKey="accra" />
}
