import Image from "next/image"
import Link from "next/link"
import { articleMetadata } from "@/lib/seo"

const title = "Massage in Kumasi: Choosing Between Swedish, Deep Tissue, and Thai"
const description =
  "Compare Swedish, deep tissue, and Thai massage by pressure, movement, session length, and what to discuss before booking in Kumasi."

export const metadata = articleMetadata(
  title,
  description,
  "/blog/choosing-a-massage-kumasi",
  "/media/swedish-massage.jpg",
)

export default function ChoosingMassageKumasiPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 md:py-20">
      <article>
        <header>
          <Link href="/blog" className="text-sm font-medium text-primary underline underline-offset-4">
            Massage guides
          </Link>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Kumasi · Choosing a massage
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            There is no single best massage for everyone. A useful starting point is deciding whether you prefer flowing strokes, focused firmer pressure, or assisted stretching.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">By the Bunny Massage Spa team</p>
          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl">
            <Image
              src="/media/swedish-massage.jpg"
              alt="A Swedish massage session using flowing strokes"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover"
            />
          </div>
        </header>

        <div className="mt-10 space-y-8 leading-relaxed text-foreground/90">
          <section>
            <h2 className="text-2xl font-semibold">Start with the kind of session you want</h2>
            <p className="mt-3 text-muted-foreground">
              When comparing massage in Kumasi, think about the experience you prefer rather than searching for a treatment that promises a particular result. Consider how much pressure feels comfortable, whether you want a quieter flowing session or more focused work, and whether stretching appeals to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">How three styles differ</h2>
            <div className="mt-5 space-y-5">
              <div>
                <h3 className="text-xl font-semibold">Swedish massage</h3>
                <p className="mt-2 text-muted-foreground">
                  Swedish massage uses long, rhythmic strokes and gentle kneading. It may suit someone looking for a flowing full-body session and a lighter-to-moderate pressure conversation with the therapist. Bunny Massage Spa lists a one-hour session at ₵800.
                </p>
                <Link href="/services/swedish" className="mt-2 inline-block text-primary underline underline-offset-4">
                  Swedish massage details
                </Link>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Deep tissue massage</h3>
                <p className="mt-2 text-muted-foreground">
                  Deep tissue massage uses firmer, more focused pressure. Tell the therapist which areas you would like them to focus on and what pressure feels acceptable; “firmer” should still be comfortable enough for you to communicate throughout. The listed session is one hour at ₵800.
                </p>
                <Link href="/services/deep-tissue" className="mt-2 inline-block text-primary underline underline-offset-4">
                  Deep tissue massage details
                </Link>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Thai massage</h3>
                <p className="mt-2 text-muted-foreground">
                  Thai massage combines pressure techniques with assisted stretches. Choose it if guided movement is appealing, and mention any movements or pressure you would like the therapist to adjust. The listed session is 40 minutes at ₵800.
                </p>
                <Link href="/services/thai-massage" className="mt-2 inline-block text-primary underline underline-offset-4">
                  Thai massage details
                </Link>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Questions to ask before booking</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>How much pressure do I usually enjoy: light, medium, or firm?</li>
              <li>Do I want a full-body session, or do I have areas I would like the therapist to focus on or avoid?</li>
              <li>Would I prefer flowing strokes, focused pressure, or assisted stretching?</li>
              <li>Which session length and price fit my plans?</li>
            </ul>
            <p className="mt-4 text-muted-foreground">
              You can ask for a pressure change or a pause during a session. Let the therapist know about your preferences and comfort boundaries before the massage begins.
            </p>
          </section>

          <section className="rounded-2xl bg-muted/50 p-6 md:p-8">
            <h2 className="text-2xl font-semibold">Book a massage in Kumasi</h2>
            <p className="mt-3 text-muted-foreground">
              Bunny Massage Spa’s Kumasi studio is behind Brotherman Spot, by Roses Academy, close to the Pentecost Church. Studio visits are by appointment; outcall sessions can also be requested in Kumasi. Confirm the current service details when booking.
            </p>
            <div className="mt-5 flex flex-wrap gap-4">
              <Link href="/locations/kumasi" className="font-semibold text-primary underline underline-offset-4">
                Kumasi location and directions
              </Link>
              <Link href="/appointment" className="font-semibold text-primary underline underline-offset-4">
                Request an appointment
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  )
}
