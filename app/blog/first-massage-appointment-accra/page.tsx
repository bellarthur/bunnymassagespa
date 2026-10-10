import Image from "next/image"
import Link from "next/link"
import { articleMetadata } from "@/lib/seo"

const title = "Your First Massage Appointment in Accra: Booking and Preparing"
const description =
  "Learn how to request a massage appointment in Accra, choose in-studio or outcall, find the East Legon address, and share your preferences."

export const metadata = articleMetadata(
  title,
  description,
  "/blog/first-massage-appointment-accra",
  "/health-spa-afro-woman-relaxing-in-spa-with-closed-eyes.jpg",
)

export default function FirstMassageAppointmentAccraPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 md:py-20">
      <article>
        <header>
          <Link href="/blog" className="text-sm font-medium text-primary underline underline-offset-4">
            Massage guides
          </Link>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Accra · Appointment guide
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            A little planning makes it easier to choose a service and arrive knowing what you have booked. Here is how to arrange an appointment with Bunny Massage Spa in Accra.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">By the Bunny Massage Spa team</p>
          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl">
            <Image
              src="/health-spa-afro-woman-relaxing-in-spa-with-closed-eyes.jpg"
              alt="A guest relaxing during a spa visit"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover"
            />
          </div>
        </header>

        <div className="mt-10 space-y-8 leading-relaxed text-foreground/90">
          <section>
            <h2 className="text-2xl font-semibold">1. Choose a service and request a time</h2>
            <p className="mt-3 text-muted-foreground">
              Use the online booking form to select a service, preferred date, and time, then share your contact details. You can also contact the spa on WhatsApp. Check the service page for its current duration and price, and confirm any questions when you book.
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <Link href="/#services" className="font-medium text-primary underline underline-offset-4">
                Browse massage services
              </Link>
              <Link href="/appointment" className="font-medium text-primary underline underline-offset-4">
                Request an appointment
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">2. Decide between an in-studio visit and an outcall</h2>
            <p className="mt-3 text-muted-foreground">
              Studio visits are by appointment. Outcall sessions can be requested at a home or hotel in Accra. The booking assistant asks whether you prefer in-studio or outcall; share the relevant location details when arranging an outcall.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">3. Confirm the East Legon directions</h2>
            <p className="mt-3 text-muted-foreground">
              The Accra studio address is Aluguntugui Street, East Legon. A dedicated Google Maps pin is not available yet, so contact Bunny Massage Spa to confirm directions before travelling. Confirm the appointment time and studio arrangement as well.
            </p>
            <Link href="/locations/accra" className="mt-3 inline-block font-medium text-primary underline underline-offset-4">
              Accra location details
            </Link>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">4. Share your preferences</h2>
            <p className="mt-3 text-muted-foreground">
              Before the session, tell the therapist what pressure you prefer, which areas you would like them to focus on, and anything you would rather avoid. If you have a question about a technique or want a change during the massage, speak up; the session should remain comfortable for you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">5. Ask about details that matter to you</h2>
            <p className="mt-3 text-muted-foreground">
              Massage styles can differ in movement, pressure, and session length. If you are unsure what to wear, what to bring, or how to prepare for a particular service, ask when booking so the answer matches the treatment you selected.
            </p>
          </section>

          <section className="rounded-2xl bg-muted/50 p-6 md:p-8">
            <h2 className="text-2xl font-semibold">Ready to book?</h2>
            <p className="mt-3 text-muted-foreground">
              Browse the services, choose a preferred date and time, and request an appointment. Contact the spa if you need help with directions or choosing a session.
            </p>
            <Link href="/appointment" className="mt-5 inline-block font-semibold text-primary underline underline-offset-4">
              Book a massage appointment in Accra
            </Link>
          </section>
        </div>
      </article>
    </main>
  )
}
