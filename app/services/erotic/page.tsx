"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

const OTHER_SERVICES = [
  {
    name: "Deep Tissue Massage",
    image: "/media/deep-tissue.webp",
    link: "/services/deep-tissue",
  },
  {
    name: "Thai Massage",
    image: "/media/thai-massage-photo.jpg",
    link: "/services/thai-massage",
  },
  {
    name: "Couple Massage",
    image: "/media/couple-massage.jpg",
    link: "/services/couples",
  },
]

export default function EroticPage() {
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 150)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      {/* <Link href="/services" className="text-sm text-primary underline">
        ← Back to Services
      </Link> */}
      <motion.div
        className={`fixed bottom-6 right-6 z-40 transition-all duration-500 ${scrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
      >
        <Button
          size="lg"
          className="bg-primary text-white shadow-xl hover:scale-105 transition-transform"
          onClick={() => router.push("/appointment?service=Erotic Massage")}
        >
          Book Erotic Massage
        </Button>
      </motion.div>

      <h1 className="text-4xl font-bold mt-4">Erotic Massage</h1>
      <p className="text-lg text-muted-foreground mt-2">
        A sensual experience tailored to stimulate relaxation and emotional connection while easing body tension.
      </p>

      <div className="mt-6">
        <img
          src="/media/erotic-massage.avif"
          alt="Erotic Massage"
          className="w-full rounded-md shadow"
        />
      </div>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold">Details</h2>
        <p className="mt-2">Duration: 1 hr 30 mins — Price: ₵1000</p>
        <p className="mt-2">
          Conducted in a private and professional setting, this session emphasizes comfort, respect, and confidentiality.
        </p>
      </section>

      <section className="mt-10 border-t pt-6">
        <h2 className="text-2xl font-semibold">Compliance & Consent</h2>
        <p className="mt-2 text-muted-foreground">
          This service is strictly for consenting adults aged 18 and above. All interactions are fully voluntary and conducted in
          accordance with Ghanaian laws and professional ethics. Clients are required to provide clear consent and may end the
          session at any time. The provider reserves the right to refuse service if boundaries or consent are not respected.
        </p>
        <p className="mt-2 text-muted-foreground">
          By booking this service, you acknowledge and agree to comply with all local regulations and mutual respect guidelines.
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
