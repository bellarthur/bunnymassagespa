import Image from "next/image"
import Link from "next/link"

export default function WaxingPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="mt-4 text-4xl font-bold">Waxing</h1>
      <p className="mt-2 text-lg text-muted-foreground">
        Professional waxing services available by appointment at Bunny Massage Spa.
      </p>

      <div className="relative mt-6 h-72 overflow-hidden rounded-xl shadow md:h-96">
        <Image
          src="/media/waxing.jpeg"
          alt="Spa treatment setting"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 800px"
          className="object-cover"
        />
      </div>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Details</h2>
        <p className="mt-3"><strong>Price:</strong> ₵300</p>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          Contact us when booking to confirm waxing availability and discuss the treatment area. Appointments are available at our Accra and Kumasi locations.
        </p>
        <Link
          href="/appointment?service=Waxing"
          className="mt-6 inline-flex rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground shadow-lg transition hover:scale-[1.02]"
        >
          Book Waxing
        </Link>
      </section>

      <section className="mt-16 border-t border-border pt-8">
        <h2 className="text-2xl font-semibold">Related services</h2>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
          <Link href="/services/pedicures-manicures" className="text-primary underline underline-offset-4">
            Pedicures and manicures
          </Link>
          <Link href="/services/swedish" className="text-primary underline underline-offset-4">
            Swedish massage
          </Link>
          <Link href="/services/deep-tissue" className="text-primary underline underline-offset-4">
            Deep tissue massage
          </Link>
        </div>
      </section>
    </main>
  )
}