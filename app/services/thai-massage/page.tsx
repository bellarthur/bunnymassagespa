"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const OTHER_SERVICES = [
  {
    name: "Swedish Massage",
    image: "/media/swedish-massage.jpg",
    link: "/services/swedish",
  },
  {
    name: "Nuru Massage",
    image: "media/nuru-massage.jpg",
    link: "/services/nuru",
  },
  {
    name: "Deep Tissue Massage",
    image: "media/deep-tissue.webp",
    link: "/services/deep-tissue",
  },
]

export default function ThaiMassagePage() {
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 150)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="max-w-6xl mx-auto px-6 py-20 relative">
      {/* Sticky booking CTA */}
      <motion.div
        className={`fixed bottom-6 right-6 z-40 transition-all duration-500 ${
          scrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <Button
          size="lg"
          className="bg-primary text-white shadow-xl hover:scale-105 transition-transform"
          onClick={() => router.push("/appointment?service=Thai Massage")}
        >
          Book Thai Massage
        </Button>
      </motion.div>

      {/* Back link */}
      {/* <Link href="/" className="text-sm text-primary underline">← Back</Link> */}

      {/* Hero Section */}
      <section className="mt-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold">Thai Massage</h1>
          <p className="text-lg text-muted-foreground mt-3 leading-relaxed">
            Traditional stretching and pressure techniques to relieve tension and restore mobility.
          </p>

          <div className="mt-6 space-y-2 text-base">
            <p><strong>Duration:</strong> 40 mins</p>
            <p><strong>Price:</strong> ₵800</p>
            <p><strong>Therapist:</strong> Ayana (Certified Thai Massage Expert)</p>
          </div>

          <Button
            size="lg"
            className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => router.push("/appointment?service=Thai Massage")}
          >
            Book Now
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/media/thai-massage-photo.jpg"
            alt="Thai Massage"
            width={800}
            height={500}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Details Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-3">About Thai Massage</h2>
        <p className="text-muted-foreground leading-relaxed">
          Thai massage combines acupressure, gentle rocking, and assisted yoga postures to improve
          flexibility, balance energy flow, and promote total relaxation. It’s ideal for those who
          need deeper stretching without the pressure of a deep tissue massage.
        </p>

        <div className="mt-6">
          <h3 className="text-xl font-semibold">Contraindications</h3>
          <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
            <li>Recent surgeries or fractures</li>
            <li>Severe osteoporosis or joint injuries</li>
            <li>Pregnancy (consult your doctor first)</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold">Special Offers</h3>
          <p className="text-muted-foreground mt-2">
            Get 10% off when booked with a facial treatment. Available this month only!
          </p>
        </div>
      </section>

      {/* Other Services */}
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
