import type { Metadata } from "next"

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.bunnymassagespa.com"

const DEFAULT_SOCIAL_IMAGE = "/media/massagespa-pouring-oil.avif"

export function serviceMetadata(
  title: string,
  description: string,
  path: string,
  image = DEFAULT_SOCIAL_IMAGE,
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
      siteName: "Bunny Massage Spa",
      locale: "en_GH",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  }
}

export function articleMetadata(
  title: string,
  description: string,
  path: string,
  image = DEFAULT_SOCIAL_IMAGE,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: "article",
      siteName: "Bunny Massage Spa",
      locale: "en_GH",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  }
}
