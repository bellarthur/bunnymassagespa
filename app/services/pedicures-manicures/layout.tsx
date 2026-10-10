import type { ReactNode } from "react"
import { serviceMetadata } from "@/lib/seo"

export const metadata = serviceMetadata(
  "Manicure and Pedicure in Accra",
  "Arrange manicure and pedicure services at Bunny Massage Spa, serving Accra and Kumasi by appointment. Contact us for availability and booking.",
  "/services/pedicures-manicures",
)

export default function Layout({ children }: { children: ReactNode }) {
  return children
}