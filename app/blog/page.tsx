import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

const POSTS = [
  {
    href: "/blog/choosing-a-massage-kumasi",
    title: "Massage in Kumasi: Choosing Between Swedish, Deep Tissue, and Thai",
    description:
      "Compare three massage styles by pressure, movement, duration, and what to ask for when booking.",
    image: "/media/swedish-massage.jpg",
    alt: "A Swedish massage session with oil",
    city: "Kumasi",
  },
  {
    href: "/blog/first-massage-appointment-accra",
    title: "Your First Massage Appointment in Accra: Booking and Preparing",
    description:
      "A practical guide to booking, choosing in-studio or outcall, finding the East Legon address, and sharing your preferences.",
    image: "/health-spa-afro-woman-relaxing-in-spa-with-closed-eyes.jpg",
    alt: "A guest relaxing during a spa visit",
    city: "Accra",
  },
]

export const metadata: Metadata = {
  title: "Massage Guides and Spa Advice",
  description:
    "Helpful massage guides from Bunny Massage Spa, with practical advice for choosing a treatment and booking in Accra and Kumasi.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    locale: "en_GH",
    siteName: "Bunny Massage Spa",
    title: "Massage Guides and Spa Advice",
    description:
      "Practical advice for choosing a massage and booking an appointment in Accra and Kumasi.",
    images: ["/media/massagespa-pouring-oil.avif"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Massage Guides and Spa Advice | Bunny Massage Spa",
    description:
      "Practical advice for choosing a massage and booking in Accra and Kumasi.",
    images: ["/media/massagespa-pouring-oil.avif"],
  },
}

export default function BlogIndexPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <header className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          Bunny Massage Spa Journal
        </p>
        <h1 className="mt-4 text-4xl font-bold md:text-5xl">Massage Guides and Spa Advice</h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          Clear, practical information to help you choose a massage and feel prepared for your appointment in Accra or Kumasi.
        </p>
      </header>

      <section aria-label="Latest articles" className="mt-12 grid gap-7 md:grid-cols-2">
        {POSTS.map((post) => (
          <article key={post.href} className="overflow-hidden rounded-2xl border border-border bg-card">
            <Link href={post.href} className="group block">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-sm font-medium text-primary">{post.city} · Massage guide</p>
                <h2 className="mt-2 text-2xl font-semibold group-hover:text-primary">{post.title}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{post.description}</p>
                <span className="mt-5 inline-block font-semibold text-primary">Read the guide →</span>
              </div>
            </Link>
          </article>
        ))}
      </section>
    </main>
  )
}
