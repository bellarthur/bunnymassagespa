import type { ReactNode } from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "VIP Four-Hand Massage in Accra",
  description:
    "Explore the VIP four-hands full combination massage at Bunny Massage Spa in Accra and Kumasi.",
  alternates: { canonical: "/services/vip-four-hands-full-combination" },
  robots: { index: false, follow: true },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}