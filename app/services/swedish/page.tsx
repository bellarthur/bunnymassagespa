import Link from "next/link"

export default function SwedishPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <Link href="/services" className="text-sm text-primary underline">← Back to Services</Link>
      <h1 className="text-4xl font-bold mt-4">Swedish Massage</h1>
      <p className="text-lg text-muted-foreground mt-2">Relaxing long strokes and kneading that soothe muscles and help circulation.</p>
      <div className="mt-6">
        <img src="/media/swedish-massage.jpg" alt="Swedish Massage" className="w-full rounded-md shadow" />
      </div>
      <section className="mt-6">
        <h2 className="text-2xl font-semibold">Details</h2>
        <p className="mt-2">Duration: 1 hour — Price: ₵800</p>
        <p className="mt-2">Perfect for first-time clients and those wanting a gentle, relaxing session.</p>
      </section>
    </main>
  )
}
