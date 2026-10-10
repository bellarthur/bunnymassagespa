import type { ReactNode } from "react"
import { serviceMetadata } from "@/lib/seo"

export const metadata = serviceMetadata(
  "Erotic Massage in Accra",
  "View session information for this adult massage service at Bunny Massage Spa. Appointment-only spa locations serve Accra and Kumasi, Ghana.",
  "/services/erotic",
)

export default function Layout({ children }: { children: ReactNode }) {
  return children
}