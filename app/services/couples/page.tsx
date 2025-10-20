import Link from "next/link"

export default function CouplesPage() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <Link href="/services" className="text-sm text-primary underline">← Back to Services</Link>
      <h1 className="text-4xl font-bold mt-4">Couple Massage</h1>
      <p className="text-lg text-muted-foreground mt-2">Side-by-side relaxation for two — reconnect and unwind together.</p>
      <div className="mt-6">
        <img src="/media/couple-massage.jpg" alt="Couple Massage" className="w-full rounded-md shadow" />
      </div>
      <section className="mt-6">
        <h2 className="text-2xl font-semibold">Details</h2>
        <p className="mt-2">Duration: 1 hr 30 mins — Price: ₵1600</p>
        <p className="mt-2">Great for anniversaries or shared relaxation. Book early for weekend slots.</p>
      </section>
    </main>
  )
}
