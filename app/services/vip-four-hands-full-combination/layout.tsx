import type { ReactNode } from "react"
import { serviceMetadata } from "@/lib/seo"

export const metadata = serviceMetadata(
  "VIP Four-Hand Massage in Accra",
  "Experience the VIP four-hands full combination massage with two therapists working in sync. Available by appointment in Accra and Kumasi, Ghana.",
  "/services/vip-four-hands-full-combination",
)

export default function Layout({ children }: { children: ReactNode }) {
  return children
}