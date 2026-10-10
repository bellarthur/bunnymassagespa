import type { ReactNode } from "react"
import { serviceMetadata } from "@/lib/seo"

export const metadata = serviceMetadata(
  "Swedish and Nuru Massage in Accra",
  "Explore the Swedish and Nuru massage combination at Bunny Massage Spa. Appointment-only sessions are available in Accra and Kumasi, Ghana.",
  "/services/swedish-nuru",
)

export default function Layout({ children }: { children: ReactNode }) {
  return children
}