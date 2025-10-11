"use client"

import React from "react"
import { useEffect, useRef } from "react"
import { motion, useReducedMotion } from "framer-motion"
import Link from "next/link"
import { Menu, Phone, Mail, MapPin, Clock, Heart, ChevronLeft, ChevronRight, ChevronDown, Calendar, User, CheckCircle2 } from "lucide-react"
import { useScrollToSection } from "@/lib/useScrollToSection"

/**
 * BunnySpaDesignSystem_Components.jsx
 * - HeroSection (Ken Burns + subtle mesh gradient + staggered headline)
 * - ServicesSection (6 visible, framer-motion scroll entrance, See All link)
 * - TestimonialsSection (glass cards, desktop grid, mobile swipe)
 *
 * Drop this file into your components folder and import the pieces you need.
 * Requires: framer-motion + Tailwind CSS (project already uses Tailwind in prior code)
 */

// --------------------------- Helpers & Data --------------------------------
const SERVICES = [
  {
    name: "Thai Massage",
    price: "800",
    duration: "40 mins",
    description:
      "Traditional stretching and pressure techniques to relieve tension and restore mobility.",
    image: "media/thai-massage-photo.jpg",
    alt: "Therapist performing Thai massage",
  },
  {
    name: "Deep Tissue Massage",
    price: "800",
    duration: "1 hour",
    description:
      "Firm pressure to release deep-seated muscle knots and tension for long-lasting relief.",
    image: "media/deep-tissue.webp",
    alt: "Close-up deep tissue massage",
  },
  {
    name: "Swedish Massage",
    price: "800",
    duration: "1 hour",
    description:
      "Relaxing long strokes and kneading that soothe muscles and help circulation.",
    image: "media/swedish-massage.jpg",
    alt: "Relaxing Swedish massage with oil",
  },
  {
    name: "Nuru Massage",
    price: "1000",
    duration: "1 hr 30 mins",
    description:
      "Luxurious skin-to-skin experience using premium gel for total relaxation.",
    image: "media/nuru-massage.jpg",
    alt: "Spa setup for Nuru massage",
  },
  {
    name: "Sensual Massage",
    price: "1000",
    duration: "1 hr 30 mins",
    description: "An intimate massage crafted to calm the senses and restore balance.",
    image: "media/sensual-massage.jpg",
    alt: "Dimly-lit sensual massage setting",
  },
  {
    name: "Erotic Massage",
    price: "1000",
    duration: "1 hr 30 mins",
    description: "A focused experience designed for pleasure and deep relaxation.",
    image: "media/erotic-massage.avif",
    alt: "Candles and warm lighting around massage table",
  },
  {
    name: "Swedish/Deep Tissue Nuru",
    price: "1500",
    duration: "1 hr 30 mins",
    description: "Premium combination of techniques for complete rejuvenation.",
    image: "media/sweedish+nuru.jpg",
    alt: "Therapist combining massage techniques",
  },
  {
    name: "Couple Massage",
    price: "1600",
    duration: "1 hr 30 mins",
    description: "Side-by-side relaxation for two — reconnect and unwind together.",
    image: "media/couple-massage.jpg",
    alt: "Couple receiving side-by-side massages",
  },
]

const TESTIMONIALS = [
  {
    name: "Cyril Smith",
    text: "First time trying a massage service and I wasn't disappointed at all. Was really worth it.",
    avatar: "/placeholder-user.jpg",
    role: "Client",
    rating: 5,
    bgColor: "bg-purple-500",
  },
  {
    name: "Michael Anyang",
    text: "The massage was incredible with Ella. Her touch was amazing and she knew exactly what she was doing.",
    avatar: "",
    role: "Client",
    rating: 5,
    bgColor: "bg-green-500",
  },
  {
    name: "Ibrahim Amiru",
    text: "I experienced a Lovely time with bunny spa and massage I gave a 10/10",
    avatar: "",
    role: "Client",
    rating: 5,
    bgColor: "bg-orange-500",
  },
]

// --------------------------- Motion Variants --------------------------------

const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 0.8, 0.2, 1] },
  }),
}

const headlineWord = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.45 } }),
}

// const faqVariant = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: [0.22, 0.8, 0.2, 1] }
//   }
// }

// const answerVariant = {
//   hidden: { opacity: 0, height: 0 },
//   visible: {
//     opacity: 1,
//     height: "auto",
//     transition: { duration: 0.4, ease: [0.22, 0.8, 0.2, 1] }
//   }
// }

const navLinkVariant = {
  hover: {
    y: -2,
    color: "#ffffff",
    transition: { duration: 0.3, ease: [0.22, 0.8, 0.2, 1] }
  }
}

// --------------------------- StickyNav --------------------------------------
import { useState } from "react"
import { AnimatePresence } from "framer-motion"

export function StickyNav() {
  const scrollToSection = useScrollToSection()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Booking", id: "booking" },
    { name: "About", id: "about" },
    { name: "FAQ", id: "faq" },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        ${isScrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 0.8, 0.2, 1] }}
    >
      <div className="container mx-auto px-6 h-11 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <img
            src="/BUNNY MASSAGE LOGO (1).png"
            alt="SpaAtHome Logo"
            className="h-8 w-8 object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 text-xs">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className="text-white/90 hover:text-white transition-colors"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white p-2 hover:bg-white/10 rounded-lg transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {/* Hamburger / Close icon */}
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Fullscreen Mobile Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col"
          >
            {/* Close Button */}
            <div className="flex justify-end p-6">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-primary transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Centered Nav Links */}
            <div className="flex-1 flex flex-col items-center justify-center space-y-10">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.name}
                  onClick={() => {
                    scrollToSection(item.id)
                    setIsMenuOpen(false)
                  }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-white text-2xl font-medium tracking-wide hover:text-primary transition"
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

// ---------------- RippleCard -----------------
function RippleCard() {
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const createRipple = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = cardRef.current
    if (!card) return

    const ripple = document.createElement("span")
    const rect = card.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2

    ripple.style.position = "absolute"
    ripple.style.borderRadius = "50%"
    ripple.style.pointerEvents = "none"
    ripple.style.width = ripple.style.height = `${size}px`
    ripple.style.left = `${x}px`
    ripple.style.top = `${y}px`
    ripple.style.background = "rgba(255,255,255,0.25)"
    ripple.style.transform = "scale(0)"
    ripple.style.animation = "ripple 0.8s ease-out forwards"

    card.appendChild(ripple)
    ripple.addEventListener("animationend", () => ripple.remove())
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10
    setTilt({ x, y })
  }

  const resetTilt = () => setTilt({ x: 0, y: 0 })

  return (
    <motion.div
      ref={cardRef}
      onClick={createRipple}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      animate={{ rotateX: tilt.y, rotateY: tilt.x }}
      whileTap={{ scale: 0.97 }} // soft compression on mobile/tap
      transition={{ type: "spring", stiffness: 120, damping: 15 }}
      className="relative w-full max-w-md overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl cursor-pointer select-none"
    >
      <div className="text-sm text-white/80 mb-3">Popular</div>
      <div className="flex items-center gap-4">
        <img
          src="/media/thai-massage-photo.jpg"
          alt="Thai massage preview"
          className="w-24 h-24 object-cover rounded-xl pointer-events-none select-none"
        />
        <div>
          <div className="text-lg font-semibold text-white">Thai Massage</div>
          <div className="text-sm text-white/80">40 mins • ₵800</div>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm text-white/80">
          A quick, rejuvenating session delivered in the comfort of your home.
        </p>
      </div>

      <style jsx>{`
        @keyframes ripple {
          to {
            transform: scale(2.5);
            opacity: 0;
          }
        }
        @media (max-width: 768px) {
          @keyframes ripple {
            to {
              transform: scale(2.5);
              opacity: 0;
            }
          }
          span[style*="animation"] {
            animation: ripple 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards !important;
          }
        }
      `}</style>
    </motion.div>
  )
}

// ----------------- HeroSeciton ---------------------------
const images = [
  "/black-man-massage.png",
  "/massage.jpeg",
  "/health-spa-afro-woman-relaxing-in-spa-with-closed-eyes.jpg",
]

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [shimmer, setShimmer] = useState(false)
  const scrollToSection = useScrollToSection()

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length)
      setShimmer(true)
      setTimeout(() => setShimmer(false), 1500) // shimmer lasts briefly
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", onScroll)

    const onMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10
      const y = (e.clientY / window.innerHeight - 0.5) * 10
      setTilt({ x, y })
    }
    window.addEventListener("mousemove", onMouseMove)

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("mousemove", onMouseMove)
    }
  }, [])

  const parallaxOffset = scrollY * 0.05
  const headline = "Unwind at Home"
  const words = headline.split(" ")

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background crossfade */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          transform: `translateY(${parallaxOffset}px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale(1.05)`,
          transformStyle: "preserve-3d",
        }}
      >
        {images.map((src, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0 }}
            animate={{ opacity: activeIndex === i ? 1 : 0 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>

      {/* Gradient overlays */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-transparent opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,200,200,0.18),transparent_10%),radial-gradient(circle_at_80%_70%,rgba(180,220,255,0.14),transparent_12%)] blur-[30px] animate-[meshMove_14s_ease-in-out_infinite]" />
      </div>

      {/* Dark layer */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
          {/* Left: Headline + CTA */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="hidden md:inline-block px-3 py-1 rounded-full bg-white/10 text-sm text-white/90">
              Mobile • Home • Spa
            </div>

            <h1
              className={`mt-6 text-4xl md:text-6xl font-extrabold leading-tight text-white relative ${shimmer ? "animate-textShimmer" : ""
                }`}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0 * 0.2, type: "spring", stiffness: 80 }}
                className="inline-block mr-2 font-[var(--font-playfair)]"
              >
                Unwind
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 * 0.2, type: "spring", stiffness: 80 }}
                className="inline-block mx-2 font-[Great_Vibes] text-5xl md:text-7xl text-pink-200"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                at
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 * 0.2, type: "spring", stiffness: 80 }}
                className="inline-block ml-2 font-[var(--font-playfair)]"
              >
                Home
              </motion.span>
            </h1>


            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto lg:mx-0">
              We bring premium massage and skincare to your home — crafted for comfort, discretion and deep relaxation.
            </p>

            <div className="flex gap-4 items-center mt-6 justify-center lg:justify-start">
              <Link href="/appointment">
              <ElegantButton className="!px-4 !py-2 !text-sm">
              Book Now
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[sheen_3s_infinite]" />
              </ElegantButton>
              </Link>
              <Link href="#services" className="text-white/90 underline-offset-4 hover:underline">
                View Services
              </Link>
            </div>
          </div>

          {/* Right: Ripple Card */}
          <div className="flex items-center justify-center">
            <RippleCard />
          </div>
        </div>
      </div>
    </section>
  )
}

// --------------------------- ServicesSection (Apple-inspired layout)---------------------------
function ServiceButton({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="px-4 py-2 rounded-full bg-primary/90 text-white font-medium shadow-sm hover:bg-primary transition"
    >
      {children}
    </button>
  )
}

export function ServicesSection() {
  const [current, setCurrent] = useState(0)
  const itemsPerView = 3
  const total = SERVICES.length

  const autoplayRef = useRef<NodeJS.Timeout | null>(null)
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const mobileScrollRef = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)

  const next = () => setCurrent((prev) => (prev + 1) % total)
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total)

  const pauseAutoplay = () => {
    setPaused(true)
    if (autoplayRef.current) clearInterval(autoplayRef.current)
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current)
    // resume after 6s of inactivity
    resumeTimeoutRef.current = setTimeout(() => {
      setPaused(false)
    }, 6000)
  }

  // desktop autoplay
  useEffect(() => {
    if (paused) return
    if (autoplayRef.current) clearInterval(autoplayRef.current)
    autoplayRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total)
    }, 8000)
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current)
    }
  }, [current, total, paused])

  // mobile autoplay
  useEffect(() => {
    const el = mobileScrollRef.current
    if (!el || paused) return

    const autoplay = setInterval(() => {
      if (!el) return
      const cardWidth = el.scrollWidth / total
      const newIndex = Math.round(el.scrollLeft / cardWidth) + 1
      const nextIndex = newIndex % total
      el.scrollTo({
        left: cardWidth * nextIndex,
        behavior: "smooth",
      })
    }, 8000)

    return () => clearInterval(autoplay)
  }, [total, paused])

  // pause on user scroll (mobile swipe)
  useEffect(() => {
    const el = mobileScrollRef.current
    if (!el) return

    const handleScroll = () => pauseAutoplay()
    el.addEventListener("scroll", handleScroll, { passive: true })

    return () => el.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="services" className="py-20 bg-background/30">
      <div className="container mx-auto px-6 relative">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground flex items-baseline justify-center gap-2">
            <span className="font-[var(--font-playfair)]">Our</span>
            <span style={{ fontFamily: "'Great Vibes', cursive" }} className="text-pink-300">
              Services
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4 text-lg">
            Explore our signature treatments designed for luxury, comfort, and deep relaxation.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative md:overflow-x-hidden">
          {/* Desktop carousel */}
          <motion.div
            className="hidden md:flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${(current * 100) / itemsPerView}%)` }}
          >
            {SERVICES.map((s) => (
              <div
                key={s.name}
                className="flex-none w-full sm:w-1/2 lg:w-1/3 px-4"
                onMouseEnter={pauseAutoplay}
                onMouseLeave={() => setPaused(false)}
              >
                <div className="flex flex-col items-center text-center group">
                  <div className="w-full aspect-[4/5] overflow-hidden rounded-2xl relative">
                    <motion.img
                      src={s.image}
                      alt={s.alt}
                      className="w-full h-[85%] object-cover rounded-2xl select-none"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-foreground">{s.name}</h3>
                    <p className="text-muted-foreground text-sm mt-2 max-w-xs mx-auto">
                      {s.description}
                    </p>
                    <div className="mt-4 text-foreground/90">
                      <div className="font-medium">{s.duration}</div>
                      <div className="text-lg font-bold text-primary">₵{s.price}</div>
                    </div>
                    {/* <div className="mt-5">
                      <ServiceButton>Book</ServiceButton>
                    </div> */}
                    <button
                    className="px-4 py-2 mt-5 rounded-full bg-primary/90 text-white font-medium shadow-sm hover:bg-primary transition"
                      onClick={() => {
                      // Store selected service in localStorage
                      if (typeof window !== "undefined") {
                        const serviceSlugMap: {[key: string]: string} = {
                        "Thai Massage": "thai-massage",
                        "Deep Tissue Massage": "deep-tissue",
                        "Swedish Massage": "swedish",
                        "Nuru Massage": "nuru",
                        "Sensual Massage": "sensual",
                        "Erotic Massage": "erotic", 
                        "Swedish/Deep Tissue Nuru": "swedish-nuru",
                        "Couple Massage": "couples"
                        }
                        const serviceSlug = serviceSlugMap[s.name] || "thai-massage"
                        localStorage.setItem("selectedService", serviceSlug)
                      }
                      // Scroll to booking section
                      document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })
                      }}
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Mobile scroll-snap slider */}
          <div
            ref={mobileScrollRef}
            className="flex md:hidden overflow-x-auto snap-x snap-mandatory scroll-smooth space-x-6 px-2 scrollbar-hide"
          >
            {SERVICES.map((s) => (
              <div
                key={s.name}
                className="flex-none w-[85%] snap-center"
              >
                <div className="flex flex-col items-center text-center group">
                  <div className="w-full aspect-[4/5] overflow-hidden rounded-2xl relative">
                    <motion.img
                      src={s.image}
                      alt={s.alt}
                      className="w-full h-[85%] object-cover rounded-2xl select-none"
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-foreground">{s.name}</h3>
                    <p className="text-muted-foreground text-sm mt-2 max-w-xs mx-auto">
                      {s.description}
                    </p>
                    <div className="mt-4 text-foreground/90">
                      <div className="font-medium">{s.duration}</div>
                      <div className="text-lg font-bold text-primary">₵{s.price}</div>
                    </div>
                    {/* <div className="mt-5">
                      <ServiceButton>Book</ServiceButton>
                    </div> */}
                    <button
                    className="px-4 py-2 mt-5 rounded-full bg-primary/90 text-white font-medium shadow-sm hover:bg-primary transition"
                      onClick={() => {
                      // Store selected service in localStorage
                      if (typeof window !== "undefined") {
                        const serviceSlugMap: {[key: string]: string} = {
                        "Thai Massage": "thai-massage",
                        "Deep Tissue Massage": "deep-tissue",
                        "Swedish Massage": "swedish",
                        "Nuru Massage": "nuru",
                        "Sensual Massage": "sensual",
                        "Erotic Massage": "erotic", 
                        "Swedish/Deep Tissue Nuru": "swedish-nuru",
                        "Couple Massage": "couples"
                        }
                        const serviceSlug = serviceSlugMap[s.name] || "thai-massage"
                        localStorage.setItem("selectedService", serviceSlug)
                      }
                      // Scroll to booking section
                      document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })
                      }}
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows for desktop */}
          <button
            onClick={prev}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-background/70 hover:bg-background rounded-full p-2 shadow-md"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-background/70 hover:bg-background rounded-full p-2 shadow-md"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Compare Link */}
        <div className="mt-12 text-center">
          <Link href="/compare-services" className="text-sm text-primary underline-offset-4 hover:underline">
            Compare all services
          </Link>
        </div>
      </div>
    </section>
  )
}

// --------------------------- CountdownRing ------------------------------
function CountdownRing({ expiry }: { expiry: number }) {
  const [now, setNow] = useState<number | null>(null)

  useEffect(() => {
    setNow(Date.now()) // initialize only on client
    const t = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(t)
  }, [])

  if (!now) {
    // SSR fallback: render empty ring so server & client match
    return (
      <svg className="w-6 h-6 text-primary" viewBox="0 0 36 36" aria-hidden="true">
        <circle
          cx="18"
          cy="18"
          r="16"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeDasharray={100}
          strokeDashoffset={100} // fully hidden on SSR
          strokeLinecap="round"
        />
      </svg>
    )
  }

  const duration = expiry - (now - 1000 * 60 * 60 * 24 * 7) // assume 7d baseline
  const remaining = Math.max(expiry - now, 0)
  const pct = remaining / duration
  const strokeDasharray = 100
  const strokeDashoffset = strokeDasharray * (1 - pct)

  if (remaining <= 0) return null

  return (
    <svg className="w-6 h-6 text-primary" viewBox="0 0 36 36" aria-hidden="true">
      <circle
        cx="18"
        cy="18"
        r="16"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeDasharray={strokeDasharray}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
      />
    </svg>
  )
}

// --------------------------- Discount Data ------------------------------
const discounts = [
  {
    title: "First Visit",
    accent: "Special",
    description:
      "Welcome — enjoy 5% off your first booking.",
    code: "FIRST5",
    image:
      "/media/thai-massage-photo.jpg",
    hint: "Use at checkout or indicate when you're booking",
    expiry: Date.now() + 1000 * 60 * 60 * 24 * 5, // example: 5 days left
  },
  {
    title: "Refer a Friend",
    accent: "Reward",
    description:
      "Share the calm — you and your friend each get 10% off your next session.",
    code: "FRIEND10",
    image:
      "/media/couple-massage.jpg",
    hint: "Apply the code when scheduling for both guests",
    // no expiry, evergreen
  },
]

// --------------------------- DiscountSection ------------------------------
export function DiscountSection() {
  const prefersReduced = useReducedMotion()
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const handleCopy = async (code: string, idx: number) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedIndex(idx)
      setTimeout(() => setCopiedIndex((c) => (c === idx ? null : c)), 2000)
    } catch {
      setCopiedIndex(idx)
      setTimeout(() => setCopiedIndex((c) => (c === idx ? null : c)), 2000)
    }
  }

  return (
    <section id="discounts" className="py-20 bg-background/10">
      <div className="container mx-auto px-6">
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground flex items-baseline justify-center gap-3">
            <span className="font-[var(--font-playfair)]">Special</span>
            <span
              style={{ fontFamily: "'Great Vibes', cursive" }}
              className="text-pink-300 text-3xl md:text-4xl"
            >
              Offers
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4 text-lg leading-relaxed">
            Carefully curated offers to welcome new guests and reward those who
            share the love.
          </p>
        </div>

        {/* Discount Cards */}
        <div className="grid gap-8 lg:grid-cols-12">
          {discounts.map((d, i) => (
            <motion.article
              key={d.code}
              className="lg:col-span-6 rounded-3xl overflow-hidden bg-card/60 backdrop-blur-md border border-white/6 shadow-xl group flex flex-col md:flex-row"
              initial={prefersReduced ? undefined : { opacity: 0, y: 18 }}
              whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 h-48 md:h-auto md:max-h-[220px] overflow-hidden relative">
                <img
                  src={d.image}
                  alt={d.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105 select-none"
                />
                <div className="absolute left-4 top-4 px-3 py-1 rounded-full bg-white/6 backdrop-blur-sm border border-white/8">
                  <span
                    style={{ fontFamily: "'Great Vibes', cursive" }}
                    className="text-sm text-pink-200"
                  >
                    {d.accent}
                  </span>
                </div>
              </div>

              {/* Text + Actions */}
              <div className="p-6 md:w-1/2 flex flex-col justify-between">
                {/* top: title + description */}
                <div>
                  <h3 className="text-2xl font-[var(--font-playfair)] text-foreground leading-snug">
                    {d.title}{" "}
                    <span
                      style={{ fontFamily: "'Great Vibes', cursive" }}
                      className="text-pink-300 text-2xl align-middle"
                    >
                      {d.accent}
                    </span>
                  </h3>

                  <p className="text-muted-foreground mt-3 text-sm md:text-base leading-relaxed">
                    {d.description}
                  </p>
                </div>

                {/* middle: code pill + copy + apply */}
                <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  {/* left cluster: code + copy */}
                  <div className="flex items-center gap-3">
                    <div className="relative flex items-center">
                      <div className="px-4 py-2 rounded-lg bg-white/6 border border-white/8 font-mono tracking-wide text-foreground text-sm select-none">
                        {d.code}
                      </div>
                      {/* countdown ring */}
                      <div className="absolute -right-3">
                        <CountdownRing expiry={Date.now() + 1000 * 60 * 60 * 24 * 5} />
                      </div>
                    </div>

                    <motion.button
                      onClick={() => handleCopy(d.code, i)}
                      whileTap={{ scale: 0.96 }}
                      className="px-3 py-2 rounded-md bg-primary/95 text-primary-foreground text-sm font-medium shadow-sm hover:opacity-95 transition"
                      aria-label={`Copy ${d.code}`}
                    >
                      {copiedIndex === i ? "Copied!" : "Copy"}
                    </motion.button>
                  </div>

                  {/* right cluster: booking */}
                  {/* <Link
                    href="#booking"
                    onClick={() => {
                      localStorage.setItem("appliedDiscount", d.code)
                    }}
                  >
                    <ElegantButton className="!px-4 !py-2 !text-sm">
                      Apply at Booking
                    </ElegantButton>
                  </Link> */}
                </div>

                {/* bottom: hint */}
                <div className="mt-4 text-xs text-muted-foreground leading-snug">
                  <span className="italic">{d.hint}</span>
                  <span className="mx-2">•</span>
                  <span>Limited availability — book early to secure your slot</span>
                </div>
              </div>

            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

// --------------------------- TestimonialsSection -----------------------------
export function TestimonialsSection() {
  const prefersReduced = useReducedMotion()
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft
    const width = e.currentTarget.clientWidth
    const index = Math.round(scrollLeft / width)
    setActiveIndex(index)
  }

  return (
    <section id="testimonials" className="py-20 bg-background/5">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground flex items-baseline justify-center gap-3">
            <span className="font-[var(--font-playfair)]">What</span>
            <span
              style={{ fontFamily: "'Great Vibes', cursive" }}
              className="text-pink-300 text-3xl md:text-4xl"
            >
              Clients Say
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4 text-lg">
            Real feedback from guests — unfiltered and heartfelt.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Grid */}
          <div className="hidden lg:grid grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.blockquote
                key={t.name}
                className="bg-white/6 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-white/8 flex flex-col justify-between"
                initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
                whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                <p className="italic text-muted-foreground leading-relaxed relative">
                  <span className="absolute -left-3 -top-2 text-4xl text-pink-300 opacity-70">“</span>
                  {t.text}
                </p>

                <div className="mt-6 flex items-start gap-4">
                  {t.avatar === "" ? (
                    <div
                      className={`flex justify-center items-center w-10 h-10 rounded-full ${t.bgColor} text-white font-semibold text-lg flex-shrink-0`}
                    >
                      {t.name[0]}
                    </div>
                  ) : (
                    <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  )}
                  <div>
                    <div className="font-[var(--font-playfair)] text-foreground">
                      {t.name}
                    </div>
                    <div className="mt-1 flex gap-1 text-yellow-400">
                      {Array.from({ length: t.rating }).map((_, idx) => (
                        <svg
                          key={idx}
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 .587l3.668 7.431L23.8 9.75l-5.9 5.75L19.5 24 12 20.187 4.5 24l1.6-8.5L0.2 9.75l8.132-1.732z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.blockquote>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div
            ref={containerRef}
            onScroll={handleScroll}
            className="lg:hidden flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar"
          >
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                className="min-w-[85%] snap-center bg-white/6 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-white/8 flex flex-col justify-between"
                whileTap={{ scale: 0.97 }}
              >
                <p className="italic text-muted-foreground leading-relaxed relative">
                  <span className="absolute -left-2 -top-2 text-3xl text-pink-300 opacity-70">“</span>
                  {t.text}
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <div
                    className={`flex justify-center items-center w-10 h-10 rounded-full ${t.bgColor} text-white font-semibold text-lg flex-shrink-0`}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-[var(--font-playfair)] text-foreground">
                      {t.name}
                    </div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Indicators */}
          <div className="lg:hidden flex justify-center mt-6 gap-2">
            {TESTIMONIALS.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full transition-colors ${i === activeIndex ? "bg-primary" : "bg-muted-foreground/40"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// --------------------------- AboutSection --------------------------------------
import Image from "next/image"

export function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <section id="about" className="relative w-full py-20 bg-background">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center gap-12">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground flex items-baseline justify-center gap-3">
          <span className="font-[var(--font-playfair)]">About</span>
          <span
            style={{ fontFamily: "'Great Vibes', cursive" }}
            className="text-pink-300 text-3xl md:text-4xl"
          >
            Us
          </span>
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 max-w-5xl">
          {/* Founder image */}
          <div className="flex flex-col items-center gap-6">
            <div className="relative w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 flex-shrink-0 rounded-full overflow-hidden shadow-lg border-4 border-white">
              <Image
                src="/media/clara-founder.jpeg"
                alt="Founder"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-accent-foreground/35">Clara, Founder & CEO</p>
          </div>

          {/* Text content */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col gap-4">
              {/* Mobile version with expandable text */}
              <div className="md:hidden">
                <p className="text-lg flex flex-col items-center leading-relaxed text-muted-foreground">
                  <span>
                    At Bunny Massage Spa, we bring premium massage and skincare services directly to you, focusing on stress relief and relaxation in the comfort of your own space.
                    {!isExpanded && "..."}
                  </span>
                  {isExpanded && (
                    <span className="mt-4">
                      Our expert therapist tailors each session to release tension, improve circulation, and promote deep relaxation, providing a soothing, rejuvenating experience without the need to travel. Whether you're looking to unwind from a busy week or prioritize your wellness, our convenient, at-home service is designed to restore balance and relaxation to both your body and mind.
                    </span>
                  )}
                  {/* Read more/less button */}
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="block text-center w-fit mt-4 px-4 py-2 text-sm text-primary border border-primary/20 rounded-full hover:bg-primary/10 transition-colors"
                  >
                    {isExpanded ? 'Read Less' : 'Read More'}
                  </button>
                </p>
              </div>

              {/* Desktop version with full text */}
              <p className="hidden md:block text-lg text-muted-foreground leading-relaxed">
                At Bunny Massage Spa, we bring the benefit of Swedish massage, Deep tissue massage, Thai massage, The Nuru massage, erotic and sensual massage and other skin care services directly to you with our specialized home service, focusing on stress relief and relaxation in the comfort of your own space. <br /><br />
                Our expert therapist tailors each session to release tension, improve circulation, and promote deep relaxation, providing a soothing, rejuvenating experience without the need to travel. Whether you're looking to unwind from a busy week or prioritize your wellness, our convenient, at-home service is designed to restore balance and relaxation to both your body and mind.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}


// --------------------------- ActionButton --------------------------------------
function ActionButton({
  children,
  ...props
}: React.PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>) {
  return (
    <button
      {...props}
      className="w-full md:w-auto px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-md hover:shadow-xl hover:scale-[1.02] transition disabled:opacity-50"
    >
      {children}
    </button>
  )
}

// --------------------------- BookingSection --------------------------------------
// ---- TODO: add a subtle red glow pulse around invalid inputs (so they gently attract attention even after the shake stops)-----
export function BookingSection() {
  const [step, setStep] = useState(1)
  const [rememberMe, setRememberMe] = useState(true)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedService = localStorage.getItem("selectedService")
      if (storedService) {
        setFormData((prev) => ({ ...prev, service: storedService }))
        localStorage.removeItem("selectedService") // optional: clear after prefill
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedUser = localStorage.getItem("bookingUser")
      if (savedUser) {
        const user = JSON.parse(savedUser)
        setFormData((prev) => ({
          ...prev,
          name: user.name || "",
          email: user.email || "",
          phone: user.phone || "",
          service: user.service || "",
        }))
      }
    }
  }, [])

  interface FormData {
    name: string;
    email: string;
    phone: string;
    date: string;
    time: string;
    service: string;
    notes: string;
    [key: string]: string; // Index signature
  }

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    notes: "",
  })
  interface FormErrors {
    [key: string]: string;
    date: string;
    time: string;
    name: string;
    email: string;
    service: string;
  }

  const [errors, setErrors] = useState<FormErrors>({
    date: "",
    time: "",
    name: "",
    email: "",
    service: ""
  })

  const [shakeKey, setShakeKey] = useState(0) // force re-render for shake
  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  // ---------------- Validation for Step 1 ----------------
  const validateStep1 = () => {
    const today = new Date()
    const selectedDate = formData.date ? new Date(formData.date) : null
    let dateError = ""
    let timeError = ""

    if (!formData.date) {
      dateError = "Please select a date."
    } else if (selectedDate && selectedDate.getTime() < today.setHours(0, 0, 0, 0)) {
      dateError = "Please select a future date."
    }

    if (!formData.time) {
      timeError = "Please enter a preferred time."
    } else if (selectedDate) {
      const dayOfWeek = selectedDate.getDay()
      const [openHour, openMinute] = [7, 0];   // Opens at 7:00 AM every day
      const [closeHour, closeMinute] = [24, 0]; // Closes at 12:00 AM (midnight)

      const [hour, minute] = formData.time.split(":").map(Number)

      const chosenMinutes = hour * 60 + minute
      const openMinutes = openHour * 60 + openMinute
      const closeMinutes = closeHour * 60 + closeMinute

      if (chosenMinutes < openMinutes || chosenMinutes > closeMinutes) {
        timeError = `Please select a time between ${String(openHour).padStart(2, "0")}:${String(
          openMinute

        ).padStart(2, "0")} and ${String(closeHour).padStart(2, "0")}:${String(closeMinute).padStart(2, "0")}.`
      }
    }

    setErrors((prev) => ({ ...prev, date: dateError, time: timeError }))
    if (dateError || timeError) {
      triggerShake()
    }
    return !dateError && !timeError
  }

  // ---------------- Validation for Step 2 ----------------
  const validateStep2 = () => {
    let serviceError = ""

    if (!formData.service) serviceError = "Please select a service."

    setErrors((prev) => ({ ...prev, service: serviceError }))
    if (serviceError) {
      triggerShake()
    }
    return !serviceError
  }

  // ---------------- Step Handlers ----------------
  const handleContinue = () => {
    if (rememberMe && typeof window !== "undefined") {
  localStorage.setItem("bookingUser", JSON.stringify({
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    service: formData.service,
  }))
}
    if (step === 1) {
      if (validateStep1()) setStep(2)
    } else if (step === 2) {
      if (validateStep2()) handleSubmit()
    } else if (step === 3) setStep(1)
  }

  const handleSubmit = () => {
    if (rememberMe && typeof window !== "undefined") {
  localStorage.setItem("bookingUser", JSON.stringify({
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    service: formData.service,
  }))
}
    setStep(3)
  }

  const triggerShake = () => {
    setShakeKey((prev) => prev + 1)
  }

  // ---------------- Calendar Data ----------------
  const currentDate = new Date()
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  const steps = [
    { id: 1, label: "Select Date", icon: <Calendar /> },
    { id: 2, label: "Your Details", icon: <User /> },
    { id: 3, label: "Confirm", icon: <CheckCircle2 /> },
  ]

  return (
    <section id="booking" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background opacity-70" />
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/massage.jpeg')] bg-cover bg-center mix-blend-overlay animate-spaShimmer" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[rgba(60,156,191,0.15)] to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_35%,rgba(227,213,184,0.15),transparent_15%),radial-gradient(circle_at_70%_65%,rgba(245,214,123,0.12),transparent_20%)] blur-[40px] animate-[meshMove_18s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative container mx-auto py-6 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Book Your Session
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-3">
            A guided 3-step booking that’s simple, elegant, and reassuring.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[280px,1fr] gap-10">
          {/* Progress Stepper */}
          <div className="flex md:flex-col items-center md:items-start justify-center md:justify-start gap-8 md:gap-12 relative z-10">
            {steps.map((s, idx) => {
              const isActive = step === s.id
              const isCompleted = step > s.id
              return (
                <div key={s.id} className="flex flex-col items-center md:items-start relative">
                  <motion.div
                    className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-colors ${isCompleted
                      ? "bg-primary border-primary text-primary-foreground"
                      : isActive
                        ? "bg-accent border-accent text-accent-foreground shadow-lg"
                        : "bg-muted/30 border-muted text-muted-foreground"
                      }`}
                  >
                    {s.icon}
                  </motion.div>
                  <span
                    className={`mt-2 text-sm font-medium ${isActive ? "text-accent" : "text-muted-foreground"
                      }`}
                  >
                    {s.label}
                  </span>
                  {idx < steps.length - 1 && (
                    <div
                      className={`hidden md:block absolute top-12 left-6 w-0.5 h-16 ${isCompleted ? "bg-primary" : "bg-muted"
                        }`}
                    />
                  )}
                </div>
              )
            })}
          </div>

          {/* Main Panel */}
          <motion.div
            key={shakeKey} // re-render to trigger shake
            initial={{ x: 0 }}
            animate={{ x: [0, -10, 10, -6, 6, -3, 3, 0] }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="bg-primary/85 backdrop-blur-md md:rounded-2xl p-6 md:p-8 border border-white/10 md:shadow-xl relative z-10"
          >
            <div className="min-h-[400px] md:min-h-[500px] flex flex-col justify-between">
              {/* Step 1 */}
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground font-serif">
                    Choose Date & Time
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Calendar */}
                    <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                      <h3 className="text-lg font-medium text-white/80 mb-2">
                        {new Date(year, month).toLocaleString("default", {
                          month: "long",
                          year: "numeric",
                        })}
                      </h3>
                      <div className="grid grid-cols-7 gap-1">
                        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                          <div key={day} className="text-center text-xs text-white/50">
                            {day}
                          </div>
                        ))}
                        {days.map((day) => {
                          const date = new Date(year, month, day)
                          const formatted = date.toISOString().split("T")[0]
                          const isToday = date.toDateString() === new Date().toDateString()
                          return (
                            <button
                              key={day}
                              onClick={() => setFormData({ ...formData, date: formatted })}
                              className={`text-center p-2 rounded-full h-10 w-10 text-sm transition ${formData.date === formatted
                                ? "bg-primary text-primary-foreground"
                                : isToday
                                  ? "bg-accent text-accent-foreground"
                                  : "text-white/70 hover:bg-white/20"
                                }`}
                            >
                              {day}
                            </button>
                          )
                        })}
                      </div>
                      {errors.date && (
                        <p className="text-xs text-destructive mt-2">{errors.date}</p>
                      )}
                    </div>
                    {/* Time Input */}
                    <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                      <h3 className="text-lg font-medium text-white/80 mb-2">Preferred Time</h3>
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        step="900" // 15-minute intervals
                        min="07:00"
                        max="24:00"
                        className="w-full px-4 py-3 bg-white/10 rounded-xl text-white border border-white/20 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/40 transition"
                      />

                      {errors.time && (
                        <p className="text-xs text-destructive mt-2">{errors.time}</p>
                      )}
                    </div>
                  </div>
                  <ActionButton onClick={handleContinue}>Continue</ActionButton>
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground font-serif">
                    Enter Your Details
                  </h2>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    {[
                      {
                        name: "name",
                        label: "Name",
                        type: "text",
                        placeholder: "Jane Doe",
                      },
                      {
                        name: "email",
                        label: "Email",
                        type: "email",
                        placeholder: "you@example.com",
                      },
                      {
                        name: "phone",
                        label: "Phone",
                        type: "tel",
                        placeholder: "+233 55 000 0000",
                      },
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="block text-sm font-medium text-white/80 mb-2">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleInputChange}
                          placeholder={field.placeholder}
                          className={`w-full px-4 py-3 bg-white/10 rounded-xl text-white border ${errors[field.name as keyof typeof errors]
                            ? "border-red-500 focus:border-red-500 focus:ring-red-400"
                            : "border-white/20 focus:border-primary focus:ring-primary/40"
                            } transition`}
                        />
                        {errors[field.name as keyof typeof errors] && (
                          <p className="text-xs text-destructive mt-2">
                            {errors[field.name as keyof typeof errors]}
                          </p>
                        )}
                      </div>
                    ))}
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">Service</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl text-white ${errors.service
                          ? "border-red-500 focus:border-red-500 focus:ring-red-400"
                          : "border-white/20 focus:border-primary focus:ring-primary/40"
                          } bg-white/10 transition`}
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        <option value="thai-massage">Thai Massage</option>
                        <option value="deep-tissue">Deep Tissue</option>
                        <option value="swedish">Swedish Massage</option>
                        <option value="nuru">Nuru Massage</option>
                        <option value="couples">Couples Massage</option>
                      </select>
                      {errors.service && (
                        <p className="text-xs text-destructive mt-2">{errors.service}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Notes (Optional)
                      </label>
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        placeholder="Any special requests?"
                        rows={3}
                        className="w-full px-4 py-3 bg-white/10 rounded-xl text-white border border-white/20 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/40 transition"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="rememberMe"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                      />
                      <label htmlFor="rememberMe" className="text-white/80 text-sm">
                        Remember me
                      </label>
                    </div>

                    <div className="flex gap-4">
                      <ActionButton
                        onClick={() => {
                          if (!validateStep2()) return
                          if (rememberMe && typeof window !== "undefined") {
                          localStorage.setItem("bookingUser", JSON.stringify({
                            name: formData.name,
                            email: formData.email,
                            phone: formData.phone,
                            service: formData.service,
                          }))
                        }
                        const formattedTime = new Date(`1970-01-01T${formData.time}`).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                        });

                        let message = `Hi, I'd like to book a session for ${formData.service} on ${formData.date} at ${formattedTime}.\n\n`;

                        if (formData.name.trim()) {
                          message += `Name: ${formData.name}\n`;
                        }
                        if (formData.email.trim()) {
                          message += `Email: ${formData.email}\n`;
                        }
                        if (formData.phone.trim()) {
                          message += `Phone: ${formData.phone}\n`;
                        }
                        if (formData.notes.trim()) {
                          message += `Notes: ${formData.notes}`;
                        }

                        window.open(
                          `https://wa.me/233247932681?text=${encodeURIComponent(message)}`,
                          "_blank"
                        )
                        }}
                        className="flex-1 !bg-green-600 hover:!bg-green-700"
                      >
                        <div className="flex items-center justify-center gap-2">
                          Book via WhatsApp
                        </div>
                      </ActionButton>
                    </div>
                    {/* <p className="text-center md:text-left text-sm text-">
                      Other booking options coming soon
                    </p> */}
                  </form>
                </div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <div className="text-center space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground font-serif">
                    Thank You
                  </h2>
                  <div className="bg-primary/20 text-primary-foreground p-6 rounded-xl space-y-2">
                    <p className="text-lg">Your booking is confirmed!</p>
                    <p className="text-sm">
                      Date: {formData.date} at {new Date(`1970-01-01T${formData.time}`).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </p>

                    <p className="text-sm">Service: {formData.service}</p>
                    <p className="text-sm">Name: {formData.name || "Not provided"}</p>
                    <p className="text-sm">Email: {formData.email || "Not provided"}</p>
                    <p className="text-sm">
                      Phone: {formData.phone || "Not provided"}
                    </p>
                    <p className="text-sm">Notes: {formData.notes || "None"}</p>
                  </div>
                  <ActionButton onClick={handleContinue}>Book Another</ActionButton>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
// -------------------- Footer --------------------------------------
import { ElegantButton } from "./ui/elegant-button"
import { Facebook, Instagram } from "lucide-react"
import { useTheme } from "@/lib/useTheme"
import { ArrowUp } from "lucide-react"

export function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Booking", href: "#booking" },
  ]
  const todayIndex = new Date().getDay() // 0 = Sunday, 1 = Monday, ...

    // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

    // Set up scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

    const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const openingHours = [
    { day: "Monday", hours: "07:00 – 22:00" },
    { day: "Tuesday", hours: "07:00 – 22:00" },
    { day: "Wednesday", hours: "07:00 – 22:00" },
    { day: "Thursday", hours: "07:00 – 22:00" },
    { day: "Friday", hours: "08:30 – 22:00" },
    { day: "Saturday", hours: "07:00 – 22:00" },
    { day: "Sunday", hours: "08:30 – 22:00" },
  ]

  return (
    <footer className="relative overflow-hidden text-white/80">
      {/* Background layers */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(200,200,255,0.08),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(255,200,200,0.08),transparent_25%)] blur-[40px] animate-[meshMove_18s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center space-x-3 group">
              <img
                src="/BUNNY MASSAGE SPA LOGO (1).png"
                alt="Bunny Massage Spa Logo"
                className="h-24 w-24 object-contain transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="text-sm text-white/70 mt-3 max-w-xs leading-relaxed">
              Premium mobile spa services delivered to your door — relaxation
              reimagined in the comfort of your home.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/90">
              Explore
            </h4>
            <ul className="mt-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="relative text-white/70 hover:text-white transition group"
                  >
                    <span>{item.name}</span>
                    <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/90">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary/80" />
                <a
                  href="mailto:info.deepbreathspa@gmail.com"
                  className="hover:text-white transition"
                >
                  info.deepbreathspa@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary/80" />
                <a
                  href="tel:+233247932681"
                  className="hover:text-white transition"
                >
                  +233 247 93 2681
                </a>
              </li>
              <li className="flex items-center gap-2">
                {/* You can use an SVG or import an icon from a library like react-icons */}
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  className="text-primary/80 fill-current"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <a
                  href="https://wa.me/233247932681"
                  className="hover:text-white transition"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-primary/80" />
                <span>Kumasi, Ghana</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/90">
              Opening Hours
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {openingHours.map((item, index) => {
                // Match JS weekday index with array (Monday=1 … Sunday=0/7)
                const isToday =
                  (todayIndex === 0 && item.day === "Sunday") ||
                  (todayIndex === index + 1)

                return (
                  <li
                    key={item.day}
                    className={`flex justify-between ${isToday
                      ? "font-bold text-primary"
                      : "text-white/70"
                      }`}
                  >
                    <span>{item.day}</span>
                    <span>{item.hours}</span>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/90">
              Follow Us
            </h4>
            <div className="mt-4 flex gap-4">
              <a
                href="#"
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:shadow-lg hover:shadow-primary/20 transition"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:shadow-lg hover:shadow-primary/20 transition"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:shadow-lg hover:shadow-primary/20 transition"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-center gap-4">
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} Bunny Massage Spa. All rights
            reserved.
          </p>
          <button
            onClick={toggleTheme}
            className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-sm text-white transition shadow-md hover:shadow-lg hover:shadow-primary/20"
          >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
      </div>

      {/* Back to Top Button */}
            <button
        onClick={scrollToTop}
        className={`fixed right-6 bottom-6 p-3 rounded-full bg-[#EC7F36] z-50 text-white shadow-lg transition-opacity duration-300 hover:bg-[#d86d2a] focus:outline-none focus:ring-2 focus:ring-[#EC7F36] focus:ring-opacity-50 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  )
}



// --------------------------- FAQSection --------------------------------------
const faqVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
}

const answerVariant = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto", transition: { duration: 0.4 } },
}

export function FAQSection() {
  const prefersReduced = useReducedMotion()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We provide a range of mobile spa services including Thai massage, deep tissue massage, and facials, all delivered to your home.",
    },
    {
      question: "How do I book an appointment?",
      answer:
        "You can book directly through our website by filling out the booking form, selecting your preferred service, date, and time.",
    },
    {
      question: "Are your therapists certified?",
      answer:
        "Yes, all our therapists are certified professionals with extensive training in their respective fields.",
    },
    {
      question: "What are your service areas?",
      answer:
        "We currently operate in Kumasi, Ghana. Contact us to confirm availability in your location.",
    },
  ]

  return (
    <section id="faq" className="relative py-20 bg-background/40 overflow-hidden">
      {/* Background overlays */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        {/* Soft spa texture */}
        <div className="absolute inset-0 bg-[url('/patterns/spa-texture.png')] bg-cover bg-center mix-blend-overlay animate-spaShimmer" />
        {/* Light radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(227,213,184,0.18),transparent_15%),radial-gradient(circle_at_70%_70%,rgba(180,220,255,0.15),transparent_18%)] blur-[50px] animate-[meshMove_16s_ease-in-out_infinite]" />
        {/* Gentle dark overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-3">
            Find answers to common questions about our services and booking process.
          </p>
        </div>

        {/* FAQ items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              className={`rounded-xl border transition-all backdrop-blur-md 
                ${openIndex === index ? "bg-white/15 border-white/20 shadow-lg" : "bg-white/5 border-white/10 hover:bg-white/10"}`}
              initial={prefersReduced ? undefined : "hidden"}
              whileInView={prefersReduced ? undefined : "visible"}
              viewport={{ once: true, amount: 0.2 }}
              variants={faqVariant}
              custom={index}
            >
              <button
                className="w-full flex justify-between items-center text-left px-5 py-4"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-base md:text-lg font-medium text-white">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-white/70 transition-transform duration-300 ${openIndex === index ? "rotate-180 text-primary" : ""
                    }`}
                />
              </button>
              <motion.div
                variants={answerVariant}
                initial="hidden"
                animate={openIndex === index ? "visible" : "hidden"}
                className="overflow-hidden"
              >
                <p className="text-muted-foreground px-5 pb-4">{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


export default {
  StickyNav,
  HeroSection,
  ServicesSection,
  DiscountSection,
  TestimonialsSection,
  BookingSection,
  AboutSection,
  FAQSection,
  Footer
}
