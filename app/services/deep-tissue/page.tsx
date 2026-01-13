"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { id } from "date-fns/locale"

const OTHER_SERVICES = [
  {
    id: 1,
    name: "Nuru Massage",
    image: "media/nuru-massage.jpg",
    link: "/services/nuru",
  },
  {
    id: 2,
    name: "Swedish Massage",
    image: "/media/swedish-massage.jpg",
    link: "/services/swedish",
  },
  {
    id: 3,
    name: "Couple Massage",
    image: "/media/couple-massage.jpg",
    link: "/services/couples",
  },
]

export default function DeepTissuePage() {
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 150)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
            {/* Sticky booking CTA */}
      <motion.div
        className={`fixed bottom-6 right-6 z-40 transition-all duration-500 ${
          scrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <Button
          size="lg"
          className="bg-primary text-white shadow-xl hover:scale-105 transition-transform"
          onClick={() => router.push("/appointment?service=Deep Tissue Massage")}
        >
          Book Deep Tissue Massage
        </Button>
      </motion.div>
      <h1 className="text-4xl font-bold mt-4">Deep Tissue Massage</h1>
      <p className="text-lg text-muted-foreground mt-2">
        Firm pressure to release deep-seated muscle knots and tension for long-lasting relief.
      </p>

      <div className="mt-6">
        <img
          src="/media/deep-tissue.webp"
          alt="Deep Tissue Massage"
          className="w-full rounded-md shadow"
        />
      </div>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold">Details</h2>
        <p className="mt-2">Duration: 1 hour — Price: ₵800</p>
        <p className="mt-2">
          This treatment targets deeper layers of muscles and connective tissue. It’s ideal for athletes or anyone experiencing
          chronic muscle tension. Communicate your comfort level with your therapist throughout the session.
        </p>
      </section>

       {/* Explore Other Services */}
      <section className="mt-20 border-t border-border pt-10">
        <h2 className="text-2xl font-semibold mb-6">Explore Other Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {OTHER_SERVICES.map((service) => (
            <a href={service.link} key={service.id}>
            <motion.button
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
            </motion.button>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}
