import type { Metadata } from "next"
import { LocationLandingPage } from "@/components/LocationLandingPage"
import { serviceMetadata } from "@/lib/seo"

export const metadata: Metadata = serviceMetadata(
  "Massage in Ashley Botwe, Accra",
  "Book an appointment-only massage at Bunny Massage Spa at Little Roses, Ashley Botwe, Accra. Studio visits and outcall appointments are available.",
  "/locations/accra",
)

export default function AccraLocationPage() {
  return <LocationLandingPage locationKey="accra" />
}
