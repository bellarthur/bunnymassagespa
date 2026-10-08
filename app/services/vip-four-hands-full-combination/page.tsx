"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

const OTHER_SERVICES = [
  {
    id: 1,
    name: "Full Combination",
    image: "/media/sweedish+nuru.jpg",
    link: "/services/full-combination",
  },
  {
    id: 2,
    name: "Swedish Massage",
    image: "/media/swedish-massage.jpg",
    link: "/services/swedish",
  },
  {
    id: 3,
    name: "Nuru Massage",
    image: "/media/nuru-massage.jpg",
    link: "/services/nuru",
  },
]

export default function VipFourHandsPage() {
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
          onClick={() => router.push("/appointment?service=VIP Four(4) Hands Full Combination")}
        >
          Book VIP Four(4) Hands
        </Button>
      </motion.div>

      <h1 className="text-4xl font-bold mt-4">VIP Four(4) Hands Full Combination</h1>
      <p className="text-lg text-muted-foreground mt-2">
        A synchronized massage experience performed by two skilled therapists for deeper relaxation and complete-body coverage.
      </p>

      <div className="mt-6">
        <img
          src="/media/VIP-Four-Hands-Full-Combination.webp.jpg"
          alt="VIP Four(4) Hands Full Combination massage"
          className="w-full rounded-md shadow"
        />
      </div>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold">Details</h2>
        <p className="mt-2"><strong>Duration:</strong> 1 hr 30 mins</p>
        <p className="mt-2"><strong>Price:</strong> ₵2200</p>
        <p className="mt-2">
          This premium treatment blends your preferred massage techniques in a synchronized four-hands flow for enhanced circulation,
          deeper muscle release, and a more indulgent spa experience. It is ideal for guests seeking ultimate relaxation and a luxurious touch.
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
