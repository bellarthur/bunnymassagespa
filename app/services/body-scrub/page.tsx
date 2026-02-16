"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

const OTHER_SERVICES = [
  {
    id: 1,
    name: "Pedicures/Manicures",
    image: "/media/swedish-massage.jpg",
    link: "/services/pedicures-manicures",
  },
  {
    id: 2,
    name: "Deep Tissue Massage",
    image: "/media/deep-tissue.webp",
    link: "/services/deep-tissue",
  },
  {
    id: 3,
    name: "Nuru Massage",
    image: "/media/nuru-massage.jpg",
    link: "/services/nuru",
  },
]

export default function BodyScrubPage() {
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 150)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <motion.div
        className={`fixed bottom-6 right-6 z-40 transition-all duration-500 ${
          scrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <Button
          size="lg"
          className="bg-primary text-white shadow-xl hover:scale-105 transition-transform"
          onClick={() => router.push("/appointment?service=Body Scrub")}
        >
          Book Body Scrub
        </Button>
      </motion.div>

      <h1 className="text-4xl font-bold mt-4">Body Scrub</h1>
      <p className="text-lg text-muted-foreground mt-2">
        A full-body exfoliation treatment that smooths texture and restores a fresh, radiant glow.
      </p>

      <div className="mt-6">
        <img
          src="/media/deep-tissue.webp"
          alt="Body scrub spa setup"
          className="w-full rounded-md shadow"
        />
      </div>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold">Details</h2>
        <p className="mt-2">Price: ₵500</p>
        <p className="mt-2">
          This treatment uses a gentle exfoliant to remove dull skin buildup and improve softness.
          It is a great choice before special events or as part of a monthly wellness routine.
        </p>
      </section>

      <section className="mt-20 border-t border-border pt-10">
        <h2 className="text-2xl font-semibold mb-6">Explore Other Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {OTHER_SERVICES.map((service) => (
            <a href={service.link} key={service.id}>
              <motion.button
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
