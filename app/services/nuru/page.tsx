"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"

export default function NuruPage() {
  const [expanded, setExpanded] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1.25, 1])
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])

  return (
    <main className="relative min-h-screen">
      {/* Back link */}
      {/* <div className="max-w-4xl mx-auto px-6 pt-6">
        <Link href="/services" className="text-sm text-primary underline hover:text-primary/80 transition">
          ← Back to Services
        </Link>
      </div> */}

      {/* Hero Section with Parallax */}
      <section ref={ref} className="relative h-[60vh] overflow-hidden mt-6">
        <motion.img
          src="/media/nuru-massage.jpg"
          alt="Nuru Massage"
          style={{ scale, y }}
          className="absolute inset-0 w-full h-full object-cover rounded-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white drop-shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold">Nuru Massage</h1>
          <p className="text-lg md:text-xl mt-2 max-w-xl mx-auto">
            Luxurious skin-to-skin experience using premium gel for total relaxation.
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
          This premium session combines skin contact and fluid movements using a high-quality Nuru gel designed to
          enhance deep relaxation and connection. Towels and gel are provided — please arrive freshly showered.
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
                All Nuru sessions are conducted in a respectful, professional spa environment under Ghanaian wellness
                standards. No activity beyond therapeutic relaxation is permitted.
              </p>
              <p>
                The use of Nuru gel and smooth contact techniques focuses on relaxation, muscle release, and body
                awareness — not sensual stimulation. Our team is trained to maintain professional boundaries at all
                times.
              </p>
              <p>
                Clients are encouraged to communicate comfort levels, preferences, or boundaries before and during the
                session. If any discomfort arises, therapists will immediately adjust or discontinue.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <div className="mt-10 text-center">
          <Link
            href="/booking"
            className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all"
          >
            Book a Session
          </Link>
        </div>
      </section>

      {/* Soft background lighting */}
      <div
        aria-hidden
        className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_80%,rgba(173,216,230,0.15),transparent_70%)]"
      />
    </main>
  )
}
