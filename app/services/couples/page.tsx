"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

const OTHER_SERVICES = [
  {
    name: "Nuru Massage",
    image: "media/nuru-massage.jpg",
    link: "/services/nuru",
  },
  {
    name: "Swedish Massage",
    image: "/media/swedish-massage.jpg",
    link: "/services/swedish",
  },
  {
    name: "Couple Massage",
    image: "/media/couple-massage.jpg",
    link: "/services/couples",
  },
]

export default function CouplesPage() {
  const router = useRouter()
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <Link href="/services" className="text-sm text-primary underline">
        ← Back to Services
      </Link>

      <h1 className="text-4xl font-bold mt-4">Couple Massage</h1>
      <p className="text-lg text-muted-foreground mt-2">
        Side-by-side relaxation for two — reconnect and unwind together.
      </p>

      <div className="mt-6">
        <img
          src="/media/couple-massage.jpg"
          alt="Couple Massage"
          className="w-full rounded-md shadow"
        />
      </div>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold">Details</h2>
        <p className="mt-2">Duration: 1 hr 30 mins — Price: ₵1600</p>
        <p className="mt-2">
          Ideal for anniversaries, romantic occasions, or simply reconnecting with a loved one.
          Each partner enjoys a customized massage experience simultaneously in the same room.
          Please book early for weekend or evening sessions to secure availability.
        </p>
      </section>

      {/* Explore Other Services */}
      <section className="mt-20 border-t border-border pt-10">
        <h2 className="text-2xl font-semibold mb-6">Explore Other Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {OTHER_SERVICES.map((service) => (
            <motion.div
              key={service.name}
              whileHover={{ scale: 1.03 }}
              className="group cursor-pointer"
              onClick={() => router.push(service.link)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-md">
                <Image
                  src={service.image}
                  alt={service.name}
                  width={400}
                  height={300}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="mt-3 text-lg font-medium group-hover:text-primary transition-colors">
                {service.name}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}
