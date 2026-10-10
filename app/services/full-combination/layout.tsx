import type { ReactNode } from "react"
import { serviceMetadata } from "@/lib/seo"

export const metadata = serviceMetadata(
  "Full Combination Massage in Accra",
  "Book the Full Combination massage at Bunny Massage Spa in Accra or Kumasi, blending Swedish relaxation and Nuru techniques in a 90-minute session.",
  "/services/full-combination",
)

export default function Layout({ children }: { children: ReactNode }) {
  return children
}