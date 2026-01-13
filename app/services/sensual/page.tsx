"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRouter } from "next/navigation"

const OTHER_SERVICES = [
  {
    id: 1,
    name: "Deep Tissue Massage",
    image: "/media/deep-tissue.webp",
    link: "/services/deep-tissue",
  },
  {
    id: 2,
    name: "Thai Massage",
    image: "/media/thai-massage-photo.jpg",
    link: "/services/thai-massage",
  },
  {
    id: 3,
    name: "Couple Massage",
    image: "/media/couple-massage.jpg",
    link: "/services/couples",
  },
]

export default function SensualPage() {
  const [expanded, setExpanded] = useState(false)
  const router = useRouter()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1])
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])

  return (
    <main className="max-w-6xl mx-auto px-6 py-20 relative overflow-hidden">
      {/* Back link */}
      {/* <div className="max-w-4xl mx-auto px-6 pt-6">
        <Link href="/services" className="text-sm text-primary underline hover:text-primary/80 transition">
          ← Back to Services
        </Link>
      </div> */}

      {/* Hero Section with Parallax */}
      <section ref={ref} className="relative h-[60vh] overflow-hidden mt-6">
        <motion.img
          src="/media/sensual-massage.jpg"
          alt="Sensual Massage"
          style={{ scale, y }}
          className="absolute inset-0 w-full h-full object-cover rounded-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white drop-shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold">Sensual Massage</h1>
          <p className="text-lg md:text-xl mt-2 max-w-xl mx-auto">
            An intimate massage crafted to calm the senses and restore balance.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold">Details</h2>
        <p className="mt-3 text-base">
          <span className="font-medium text-primary">Duration:</span> 1 hr 30 mins —{" "}
          <span className="font-medium text-primary">Price:</span> ₵1000
        </p>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          This service is designed for deep relaxation and sensory focus. Our professional therapists ensure a serene,
          respectful, and private experience.
        </p>

        {/* Expandable Section */}
        <div className="mt-6">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-primary font-medium hover:text-primary/80 transition flex items-center gap-1"
          >
            {expanded ? "Hide session guidelines ↑" : "Read more about session guidelines ↓"}
          </button>

          <motion.div
            initial={false}
            animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="overflow-hidden mt-4"
          >
            <div className="space-y-3 text-muted-foreground leading-relaxed bg-muted/30 rounded-xl p-5 shadow-inner">
              <p>
                All sessions strictly comply with local wellness and spa standards in Ghana. Our focus is relaxation,
                stress relief, and holistic well-being. No service includes or implies any explicit or sexual activity as
                defined under Ghanaian law.
              </p>
              <p>
                Before booking, clients are encouraged to communicate their comfort boundaries and expectations. Our
                therapists ensure mutual consent, professionalism, and privacy throughout the session.
              </p>
              <p>
                Your comfort and trust are our top priorities. Please feel free to ask questions or clarify any aspect of
                your experience during booking.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <div className="mt-10 text-center">
          <Link
            href="/appointment?service=Sensual Massage"
            className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all"
          >
            Book a Session
          </Link>
        </div>
      </section>

      {/* Soft background accent for depth */}
      <div
        aria-hidden
        className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_80%,rgba(255,182,193,0.15),transparent_70%)]"
      />
      {/* Explore Other Services */}
      <section className="border-t border-border pt-10">
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
