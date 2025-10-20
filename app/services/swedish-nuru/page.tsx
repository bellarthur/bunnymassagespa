import Link from "next/link"

export default function SwedishNuruPage() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <Link href="/services" className="text-sm text-primary underline">← Back to Services</Link>
      <h1 className="text-4xl font-bold mt-4">Swedish / Deep Tissue Nuru</h1>
      <p className="text-lg text-muted-foreground mt-2">Premium combination of techniques for complete rejuvenation.</p>
      <div className="mt-6">
        <img src="/media/sweedish+nuru.jpg" alt="Swedish Nuru" className="w-full rounded-md shadow" />
      </div>
      <section className="mt-6">
        <h2 className="text-2xl font-semibold">Details</h2>
        <p className="mt-2">Duration: 1 hr 30 mins — Price: ₵1500</p>
        <p className="mt-2">This premium session mixes techniques; contact us to customize pressure and focus.</p>
      </section>
    </main>
  )
}
