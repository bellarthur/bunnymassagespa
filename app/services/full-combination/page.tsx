"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRouter } from "next/navigation"

const OTHER_SERVICES = [
  {
    id: 1,
    name: "Swedish Massage",
    image: "/media/swedish-massage.jpg",
    link: "/services/swedish",
  },
  {
    id: 2,
    name: "Nuru Massage",
    image: "/media/nuru-massage.jpg",
    link: "/services/nuru",
  },
  {
    id: 3,
    name: "Couple Massage",
    image: "/media/couple-massage.jpg",
    link: "/services/couples",
  },
]

export default function FullCombinationPage() {
  const [expanded, setExpanded] = useState(false)
  const router = useRouter()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1.25, 1])
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])

  return (
    <main className="max-w-6xl mx-auto px-6 py-20 relative overflow-hidden">
      <section ref={ref} className="relative h-[60vh] overflow-hidden mt-6">
        <motion.img
          src="/media/sweedish+nuru.jpg"
          alt="Full Combination Massage"
          style={{ scale, y }}
          className="absolute inset-0 w-full h-full object-cover rounded-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white drop-shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold">Full Combination</h1>
          <p className="text-lg md:text-xl mt-2 max-w-xl mx-auto">
            A premium blend of Swedish relaxation and Nuru luxury for a deeply immersive spa experience.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto pt-16">
        <h2 className="text-2xl font-semibold">Details</h2>
        <p className="mt-3 text-base">
          <span className="font-medium text-primary">Duration:</span> 1 hr 30 mins —{" "}
          <span className="font-medium text-primary">Price:</span> ₵1500
        </p>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          This elevated treatment combines the soothing flow of Swedish massage with the silky, body-to-body luxury of Nuru for a longer, more indulgent session. It is designed for guests who want complete relaxation, comfort, and a heightened sense of renewal.
        </p>

        <div className="mt-6">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-primary font-medium hover:text-primary/80 transition flex items-center gap-1"
          >
            {expanded ? "Hide session details ↑" : "Read more about the experience ↓"}
          </button>

          <motion.div
            initial={false}
            animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="overflow-hidden mt-4"
          >
            <div className="space-y-3 text-muted-foreground leading-relaxed bg-muted/30 rounded-xl p-5 shadow-inner">
              <p>
                The session is tailored to your comfort level, with therapists adjusting pressure, pace, and flow to create a balanced and relaxing experience.
              </p>
              <p>
                The experience is carried out in a professional spa setting with a strong focus on privacy, comfort, and smooth, intentional movement.
              </p>
              <p>
                Guests are encouraged to communicate preferences or boundaries before and during the treatment so the experience feels both restful and personalized.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/appointment?service=Full Combination"
            className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all"
          >
            Book a Session
          </Link>
        </div>
      </section>

      <div
        aria-hidden
        className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_80%,rgba(173,216,230,0.15),transparent_70%)]"
      />

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
