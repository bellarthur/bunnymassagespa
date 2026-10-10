import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 } from "next/font/google"
import "./globals.css"
import { StickyNav } from "@/components/bunny_spa_design_system_components"
import { Footer } from "@/components/Footer"
import { SITE_URL } from "@/lib/seo"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-source-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Bunny Massage Spa | Massage & Spa in Accra and Kumasi",
    template: "%s | Bunny Massage Spa",
  },
  description:
    "Book professional massage and spa treatments at Bunny Massage Spa in Accra and Kumasi, Ghana. Appointment-only sessions for relaxation, wellness, and comfort.",
  alternates: { canonical: "/" },
  applicationName: "Bunny Massage Spa",
  keywords: [
    "massage spa Accra",
    "massage therapy Accra Ghana",
    "spa in East Legon",
    "massage Kumasi Ghana",
    "Swedish massage Accra",
    "deep tissue massage Accra",
    "couples massage Accra",
    "spa appointment Ghana",
  ],
  openGraph: {
    type: "website",
    locale: "en_GH",
    siteName: "Bunny Massage Spa",
    title: "Bunny Massage Spa | Massage & Spa in Accra and Kumasi",
    description:
      "Book professional massage and spa treatments in Accra and Kumasi, Ghana.",
    images: ["/media/massagespa-pouring-oil.avif"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bunny Massage Spa | Accra and Kumasi",
    description:
      "Appointment-only massage and spa treatments in Accra and Kumasi, Ghana.",
    images: ["/media/massagespa-pouring-oil.avif"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
        <style>{`
          :root {
            --font-serif: ${playfair.style.fontFamily};
            --font-sans: ${sourceSans.style.fontFamily};
            --font-script: 'Great Vibes', cursive;
          }

          h1, h2 {
            font-family: var(--font-serif);
            letter-spacing: -0.02em;
          }

          p, a, button, span {
            font-family: var(--font-sans);
          }

          .accent-script {
            font-family: var(--font-script);
            font-weight: 400;
          }
        `}</style>
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HealthAndBeautyBusiness",
              name: "Bunny Massage Spa",
              url: SITE_URL,
              image: `${SITE_URL}/media/massagespa-pouring-oil.avif`,
              logo: `${SITE_URL}/BUNNY%20MASSAGE%20SPA%20LOGO%20(1).png`,
              description:
                "Appointment-only massage and spa services in Accra and Kumasi, Ghana.",
              telephone: "+233247932681",
              email: "Bhunnyspa@gmail.com",
              priceRange: "₵300-₵2200",
              areaServed: [
                { "@type": "City", name: "Accra" },
                { "@type": "City", name: "Kumasi" },
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Aluguntugui Street, East Legon",
                addressLocality: "Accra",
                addressRegion: "Greater Accra",
                addressCountry: "GH",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+233247932681",
                contactType: "reservations",
                availableLanguage: ["English"],
              },
            }),
          }}
        />
        <StickyNav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
