import Link from "next/link"

export default function EroticPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <Link href="/services" className="text-sm text-primary underline">← Back to Services</Link>
      <h1 className="text-4xl font-bold mt-4">Erotic Massage</h1>
      <p className="text-lg text-muted-foreground mt-2">A focused experience designed for pleasure and deep relaxation.</p>
      <div className="mt-6">
        <img src="/media/erotic-massage.avif" alt="Erotic Massage" className="w-full rounded-md shadow" />
      </div>
      <section className="mt-6">
        <h2 className="text-2xl font-semibold">Details</h2>
        <p className="mt-2">Duration: 1 hr 30 mins — Price: ₵1000</p>
        <p className="mt-2">This service contains adult content. Ensure you comply with local regulations and consenting adult policies.</p>
      </section>
    </main>
  )
}
