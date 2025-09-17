import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 } from "next/font/google"
import "./globals.css"

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
  title: "Bunny Massage Spa - Luxurious Spa Experience",
  description:
    "Experience ultimate relaxation at Bunny Massage Spa. Professional massage therapy and facial treatments in a serene, luxurious environment.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
      <body>{children}</body>
    </html>
  )
}
