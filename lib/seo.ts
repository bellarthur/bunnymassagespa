import type { Metadata } from "next"

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.bunnymassagespa.com"

export function serviceMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: "website",
      images: ["/media/massagespa-pouring-oil.avif"],
    },
  }
}