import Link from "next/link"

export default function SensualPage() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <Link href="/services" className="text-sm text-primary underline">← Back to Services</Link>
      <h1 className="text-4xl font-bold mt-4">Sensual Massage</h1>
      <p className="text-lg text-muted-foreground mt-2">An intimate massage crafted to calm the senses and restore balance.</p>
      <div className="mt-6">
        <img src="/media/sensual-massage.jpg" alt="Sensual Massage" className="w-full rounded-md shadow" />
      </div>
      <section className="mt-6">
        <h2 className="text-2xl font-semibold">Details</h2>
        <p className="mt-2">Duration: 1 hr 30 mins — Price: ₵1000</p>
        <p className="mt-2">This service is designed for relaxation and sensory focus. Please check local laws and comfort levels.</p>
      </section>
    </main>
  )
}
