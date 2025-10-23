import Link from "next/link"

export default function DeepTissuePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <Link href="/services" className="text-sm text-primary underline">← Back to Services</Link>
      <h1 className="text-4xl font-bold mt-4">Deep Tissue Massage</h1>
      <p className="text-lg text-muted-foreground mt-2">Firm pressure to release deep-seated muscle knots and tension for long-lasting relief.</p>
      <div className="mt-6">
        <img src="/media/deep-tissue.webp" alt="Deep Tissue" className="w-full rounded-md shadow" />
      </div>
      <section className="mt-6">
        <h2 className="text-2xl font-semibold">Details</h2>
        <p className="mt-2">Duration: 1 hour — Price: ₵800</p>
        <p className="mt-2">Notes: This treatment may be intense for new clients. Communicate pressure preferences to your therapist.</p>
      </section>
    </main>
  )
}
