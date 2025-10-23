import Link from "next/link"

export default function NuruPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <Link href="/services" className="text-sm text-primary underline">← Back to Services</Link>
      <h1 className="text-4xl font-bold mt-4">Nuru Massage</h1>
      <p className="text-lg text-muted-foreground mt-2">Luxurious skin-to-skin experience using premium gel for total relaxation.</p>
      <div className="mt-6">
        <img src="/media/nuru-massage.jpg" alt="Nuru Massage" className="w-full rounded-md shadow" />
      </div>
      <section className="mt-6">
        <h2 className="text-2xl font-semibold">Details</h2>
        <p className="mt-2">Duration: 1 hr 30 mins — Price: ₵1000</p>
        <p className="mt-2">Premium service: please arrive showered. Towels and gel provided.</p>
      </section>
    </main>
  )
}
