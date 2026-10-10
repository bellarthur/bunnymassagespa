import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/seo"

const ROUTES = [
  "/",
  "/appointment",
  "/locations/accra",
  "/locations/kumasi",
  "/blog",
  "/blog/choosing-a-massage-kumasi",
  "/blog/first-massage-appointment-accra",
  "/services/deep-tissue",
  "/services/swedish",
  "/services/thai-massage",
  "/services/nuru",
  "/services/sensual",
  "/services/erotic",
  "/services/full-combination",
  "/services/vip-four-hands-full-combination",
  "/services/couples",
  "/services/head-foot",
  "/services/pedicures-manicures",
  "/services/swedish-nuru",
]

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: new URL(route, SITE_URL).toString(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/appointment" ? 0.8 : 0.7,
  }))
}
