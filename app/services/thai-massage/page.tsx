import Link from "next/link"

export default function ThaiMassagePage() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <Link href="/" className="text-sm text-primary underline">← Back</Link>
      <h1 className="text-4xl font-bold mt-4">Thai Massage</h1>
      <p className="text-lg text-muted-foreground mt-2">Traditional stretching and pressure techniques to relieve tension and restore mobility.</p>
      <div className="mt-6">
        <img src="/media/thai-massage-photo.jpg" alt="Thai Massage" className="w-full rounded-md shadow" />
      </div>
      <section className="mt-6">
        <h2 className="text-2xl font-semibold">Details</h2>
        <p className="mt-2">Duration: 40 mins — Price: ₵800</p>
        <p className="mt-2">Custom content for Thai Massage. Add therapists, contraindications, or special offers here.</p>
      </section>
    </main>
  )
}
