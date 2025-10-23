"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

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

export default function SwedishPage() {
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  // Parallax transform for hero image
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 150)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="max-w-6xl mx-auto px-6 py-20 relative overflow-hidden">
      {/* Sticky Booking Button */}
      <motion.div
        className={`fixed bottom-6 right-6 z-40 transition-all duration-500 ${
          scrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <Button
          size="lg"
          className="bg-primary text-white shadow-xl hover:scale-105 transition-transform"
          onClick={() => router.push("/booking?service=Swedish Massage")}
        >
          Book Swedish Massage
        </Button>
      </motion.div>

      {/* Back Link */}
      {/* <Link href="/services" className="text-sm text-primary underline">
        ← Back to Services
      </Link> */}

      {/* Hero Section */}
      <section ref={heroRef} className="mt-6 relative grid md:grid-cols-2 gap-10 items-center">
        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold">Swedish Massage</h1>
          <p className="text-lg text-muted-foreground mt-3 leading-relaxed">
            A timeless full-body massage using long, graceful strokes and gentle kneading
            to soothe tension, boost circulation, and relax your entire being.
          </p>

          <div className="mt-6 space-y-2 text-base">
            <p><strong>Duration:</strong> 1 hour</p>
            <p><strong>Price:</strong> ₵800</p>
            <p><strong>Ideal for:</strong> First-time clients or anyone seeking pure relaxation.</p>
          </div>

          <Button
            size="lg"
            className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => router.push("/appointment?service=Swedish Massage")}
          >
            Book Now
          </Button>
        </motion.div>

        {/* Parallax Image Side */}
        <motion.div
          style={{ scale, y, opacity }}
          transition={{ type: "spring", stiffness: 50 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] md:h-[500px]"
        >
          <Image
            src="/media/swedish-massage.jpg"
            alt="Swedish Massage"
            fill
            className="object-cover w-full h-full"
            priority
          />
          {/* Soft gradient overlay for calm tone */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10" />
        </motion.div>
      </section>

      {/* Details Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-3">About This Session</h2>
        <p className="text-muted-foreground leading-relaxed">
          The Swedish massage is the classic relaxation treatment designed to restore balance between mind and body.
          Your therapist uses long, rhythmic strokes and gentle pressure to enhance blood flow and ease muscle tension.
        </p>

        <div className="mt-6">
          <h3 className="text-xl font-semibold">Why Clients Love It</h3>
          <p className="text-muted-foreground mt-2">
            Perfect for beginners or anyone craving calm and clarity. Each movement is meant to melt away stress, helping you leave rejuvenated and light.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold">Recommended Add-on</h3>
          <p className="text-muted-foreground mt-2">
            Pair your session with essential oils or hot stones for an elevated experience.
          </p>
        </div>
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
