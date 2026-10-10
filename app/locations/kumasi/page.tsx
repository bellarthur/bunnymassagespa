import type { Metadata } from "next"
import { LocationLandingPage } from "@/components/LocationLandingPage"
import { serviceMetadata } from "@/lib/seo"

export const metadata: Metadata = serviceMetadata(
  "Massage in Kumasi",
  "Book an appointment-only massage at Bunny Massage Spa in Kumasi, behind Brotherman Spot near Roses Academy. Studio and outcall appointments are available.",
  "/locations/kumasi",
)

export default function KumasiLocationPage() {
  return <LocationLandingPage locationKey="kumasi" />
}
