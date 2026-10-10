import type { ReactNode } from "react"
import { serviceMetadata } from "@/lib/seo"

export const metadata = serviceMetadata(
  "Thai Massage in Accra",
  "Explore traditional Thai massage in Accra and Kumasi, combining assisted stretches and pressure techniques in a professional, appointment-only spa.",
  "/services/thai-massage",
)

export default function Layout({ children }: { children: ReactNode }) {
  return children
}