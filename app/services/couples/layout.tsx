import type { ReactNode } from "react"
import { serviceMetadata } from "@/lib/seo"

export const metadata = serviceMetadata(
  "Couples Massage in Accra",
  "Plan a side-by-side couples massage at Bunny Massage Spa. Appointment-only spa sessions are available in Accra and Kumasi, Ghana.",
  "/services/couples",
)

export default function Layout({ children }: { children: ReactNode }) {
  return children
}