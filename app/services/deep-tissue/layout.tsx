import type { ReactNode } from "react"
import { serviceMetadata } from "@/lib/seo"

export const metadata = serviceMetadata(
  "Deep Tissue Massage in Accra",
  "Book a deep tissue massage in Accra or Kumasi. Firm, focused pressure helps ease muscle tension and knots in a calm, appointment-only spa setting.",
  "/services/deep-tissue",
)

export default function Layout({ children }: { children: ReactNode }) {
  return children
}