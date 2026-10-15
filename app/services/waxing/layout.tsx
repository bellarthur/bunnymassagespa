import type { ReactNode } from "react"
import { serviceMetadata } from "@/lib/seo"

export const metadata = serviceMetadata(
  "Waxing in Accra and Kumasi",
  "Book waxing services at Bunny Massage Spa in Accra and Kumasi, Ghana. Contact us to confirm treatment availability and reserve an appointment. ₵300.",
  "/services/waxing",
)

export default function Layout({ children }: { children: ReactNode }) {
  return children
}