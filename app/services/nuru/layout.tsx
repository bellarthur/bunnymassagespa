import type { ReactNode } from "react"
import { serviceMetadata } from "@/lib/seo"

export const metadata = serviceMetadata(
  "Nuru Massage in Accra",
  "Learn about Nuru massage at Bunny Massage Spa in Accra and Kumasi. Contact the spa to ask about availability, session details, and appointments.",
  "/services/nuru",
)

export default function Layout({ children }: { children: ReactNode }) {
  return children
}