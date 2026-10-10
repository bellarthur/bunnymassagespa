import type { ReactNode } from "react"
import { serviceMetadata } from "@/lib/seo"

export const metadata = serviceMetadata(
  "Swedish Massage in Accra",
  "Enjoy a relaxing Swedish massage in Accra or Kumasi with flowing strokes and gentle kneading to soothe everyday tension and support relaxation.",
  "/services/swedish",
)

export default function Layout({ children }: { children: ReactNode }) {
  return children
}