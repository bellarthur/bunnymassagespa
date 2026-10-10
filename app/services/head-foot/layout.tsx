import type { ReactNode } from "react"
import { serviceMetadata } from "@/lib/seo"

export const metadata = serviceMetadata(
  "Head and Foot Massage in Accra",
  "Book a focused head and foot massage at Bunny Massage Spa in Accra or Kumasi. Contact us to arrange an appointment and ask about this treatment.",
  "/services/head-foot",
)

export default function Layout({ children }: { children: ReactNode }) {
  return children
}