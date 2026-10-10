import Link from "next/link"
import { SPA_CONTACT, SPA_LOCATIONS, type SpaLocationKey } from "@/lib/locations"
import { SITE_URL } from "@/lib/seo"

const FEATURED_SERVICES = [
  {
    name: "Swedish Massage",
    href: "/services/swedish",
    description: "A full-body session with long, flowing strokes and gentle kneading.",
  },
  {
    name: "Deep Tissue Massage",
    href: "/services/deep-tissue",
    description: "Focused work using firmer pressure on areas of muscle tension.",
  },
  {
    name: "Thai Massage",
    href: "/services/thai-massage",
    description: "A massage style that combines pressure techniques and assisted stretches.",
  },
]

export function LocationLandingPage({ locationKey }: { locationKey: SpaLocationKey }) {
  const location = SPA_LOCATIONS[locationKey]
  const locationUrl = new URL(location.path, SITE_URL).toString()
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DaySpa",
    "@id": `${locationUrl}#business`,
    name: "Bunny Massage Spa",
    url: locationUrl,
    parentOrganization: { "@id": new URL("/#organization", SITE_URL).toString() },
    image: `${SITE_URL}/media/massagespa-pouring-oil.avif`,
    description: location.description,
    telephone: SPA_CONTACT.phone,
    email: SPA_CONTACT.email,
    priceRange: "₵300-₵2200",
    address: {
      "@type": "PostalAddress",
      streetAddress: location.address,
      addressLocality: location.city,
      addressRegion: location.region,
      addressCountry: "GH",
    },
    areaServed: { "@type": "City", name: location.city },
    hasMap: location.mapUrl || undefined,
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          Bunny Massage Spa · {location.city}, Ghana
        </p>
        <h1 className="mt-4 text-4xl font-bold md:text-5xl">
          Massage in {location.city}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          {location.description} Book ahead to choose a service, date, and preferred time.
        </p>

        <div className="mt-8 grid gap-6 rounded-2xl border border-border bg-card p-6 md:grid-cols-2 md:p-8">
          <div>
            <h2 className="text-2xl font-semibold">Visit our {location.city} studio</h2>
            <address className="mt-4 not-italic leading-relaxed text-muted-foreground">
              {location.address}<br />
              {location.city}, {location.region}, Ghana
            </address>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {location.directions}
            </p>
            <p className="mt-4 text-sm text-muted-foreground">{SPA_CONTACT.hours}</p>
            {location.mapUrl && (
              <a
                href={location.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block font-medium text-primary underline underline-offset-4"
              >
                Open the Kumasi location in Google Maps
              </a>
            )}
          </div>
          <div className="flex flex-col items-start justify-center gap-4 rounded-xl bg-muted/50 p-6">
            <h2 className="text-2xl font-semibold">Book before you arrive</h2>
            <p className="leading-relaxed text-muted-foreground">
              Studio visits are by appointment. Outcall sessions at a home or hotel can also be requested in {location.city}.
            </p>
            <Link
              href="/appointment"
              className="inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Request an appointment
            </Link>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
              <a href={`tel:${SPA_CONTACT.phone}`} className="underline underline-offset-4">
                Call Bunny Massage Spa
              </a>
              <a
                href={`https://wa.me/233247932681?text=${encodeURIComponent(`Hello, I would like to book an appointment in ${location.city}.`)}`}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4"
              >
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold">Massage services</h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
          Compare a few popular massage styles, then select your preferred service when requesting an appointment.
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {FEATURED_SERVICES.map((service) => (
            <article key={service.href} className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-xl font-semibold">{service.name}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{service.description}</p>
              <Link
                href={service.href}
                className="mt-5 inline-block font-medium text-primary underline underline-offset-4"
              >
                View {service.name}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <nav aria-label="Other Bunny Massage Spa locations" className="mt-16 border-t border-border pt-8">
        <h2 className="text-2xl font-semibold">Our other location</h2>
        {locationKey === "accra" ? (
          <Link href="/locations/kumasi" className="mt-3 inline-block text-primary underline underline-offset-4">
            Massage in Kumasi
          </Link>
        ) : (
          <Link href="/locations/accra" className="mt-3 inline-block text-primary underline underline-offset-4">
            Massage in Accra
          </Link>
        )}
      </nav>
    </main>
  )
}
