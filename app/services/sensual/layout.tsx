import type { ReactNode } from "react"
import { serviceMetadata } from "@/lib/seo"

export const metadata = serviceMetadata(
  "Sensual Massage in Accra",
  "Discover the sensual massage session at Bunny Massage Spa, an appointment-only spa serving Accra and Kumasi. Contact us for details and booking.",
  "/services/sensual",
)

export default function Layout({ children }: { children: ReactNode }) {
  return children
}