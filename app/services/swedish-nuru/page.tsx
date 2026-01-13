"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const OTHER_SERVICES = [
  {
    id: 1,
    name: "Thai Massage",
    image: "/media/thai-massage-photo.jpg",
    link: "/services/thai-massage",
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
    image: "media/nuru-massage.jpg",
    link: "/services/nuru",
  },
]

export default function SwedishNuruPage() {
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25])
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.7])

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
          onClick={() => router.push("/appointment?service=Swedish / Deep Tissue Nuru")}
        >
          Book This Experience
        </Button>
      </motion.div>

      {/* Back Link */}
      {/* <Link href="/services" className="text-sm text-primary underline">
        ← Back to Services
      </Link> */}

      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="mt-6 relative grid md:grid-cols-2 gap-10 items-center">
        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            Swedish / Deep Tissue Nuru
          </h1>
          <p className="text-lg text-muted-foreground mt-3 leading-relaxed">
            A premium blend of Swedish and Deep Tissue massage combined with the sensual smoothness of Nuru techniques.
          </p>

          <div className="mt-6 space-y-2 text-base">
            <p><strong>Duration:</strong> 1 hr 30 mins</p>
            <p><strong>Price:</strong> ₵1500</p>
            <p><strong>Therapist:</strong> Elite Certified Therapists</p>
          </div>

          <Button
            size="lg"
            className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => router.push("/appointment?service=Swedish / Deep Tissue Nuru")}
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
            src="/media/sweedish+nuru.jpg"
            alt="Swedish Nuru"
            fill
            className="object-cover w-full h-full"
            priority
          />
        </motion.div>
      </section>

      {/* Details Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-3">About This Session</h2>
        <p className="text-muted-foreground leading-relaxed">
          This premium session combines the rejuvenating flow of Swedish massage, the deep muscle relief of Deep Tissue therapy,
          and the luxurious glide of authentic Nuru techniques. Each session is tailored to your body’s rhythm and energy.
        </p>

        <div className="mt-6">
          <h3 className="text-xl font-semibold">Personalized Experience</h3>
          <p className="text-muted-foreground mt-2">
            Contact us to customize your preferred pressure level and focus areas. Our therapists ensure every touch is aligned with your comfort and energy.
          </p>
        </div>

        {/* <div className="mt-6">
          <h3 className="text-xl font-semibold">Special Offer</h3>
          <p className="text-muted-foreground mt-2">
            Enjoy a complimentary aromatherapy upgrade when booked before month-end.
          </p>
        </div> */}
      </section>

      {/* Other Services */}
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
