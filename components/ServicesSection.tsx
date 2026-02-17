"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const SERVICES = [
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
    name: "Thai Massage",
    price: "800",
    duration: "40 mins",
    description:
      "Traditional stretching and pressure techniques to relieve tension and restore mobility.",
    image: "media/thai-massage-photo.jpg",
    alt: "Therapist performing Thai massage",
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
  { name: "Erotic Massage", price: "1000", duration: "1 hr 30 mins", description: "A focused experience designed for pleasure and deep relaxation.", image: "media/erotic-massage.avif", alt: "Candles and warm lighting around massage table", },
  {
    name: "Swedish/Deep Tissue Nuru",
    price: "1500",
    duration: "1 hr 30 mins",
    description: "Premium combination of techniques for complete rejuvenation.",
    image: "media/sweedish+nuru.jpg",
    alt: "Therapist combining massage techniques",
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
    name: "Couple Massage",
    price: "1600",
    duration: "1 hr 30 mins",
    description: "Side-by-side relaxation for two — reconnect and unwind together.",
    image: "media/couple-massage.jpg",
    alt: "Couple receiving side-by-side massages",
  },
  {
    name: "Pedicures/Manicures",
    price: "500",
    duration: "New",
    description:
      "Nail and cuticle care with soothing finishing touches for polished hands and feet.",
    image: "media/pedicure-menicure.webp",
    alt: "Spa setup for pedicure and manicure service",
  },
  {
    name: "Body Scrub",
    price: "500",
    duration: "New",
    description:
      "Gentle exfoliation to remove dull skin and leave your body smooth, refreshed, and glowing.",
    image: "media/body-scrub-massage.jpg",
    alt: "Body scrub preparation in a spa setting",
  },
]

const SERVICE_SLUGS: { [key: string]: string } = {
  "Thai Massage": "thai-massage",
  "Deep Tissue Massage": "deep-tissue",
  "Swedish Massage": "swedish",
  "Nuru Massage": "nuru",
  "Sensual Massage": "sensual",
  "Erotic Massage": "erotic",
  "Swedish/Deep Tissue Nuru": "swedish-nuru",
  "Couple Massage": "couples",
  "Pedicures/Manicures": "pedicures-manicures",
  "Body Scrub": "body-scrub",
}

export function ServicesSection({ services = SERVICES }) {
  const [current, setCurrent] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [translate, setTranslate] = useState(0)
  const [slideWidth, setSlideWidth] = useState(0)
  const trackRef = useRef<HTMLDivElement | null>(null)
  const imageRefs = useRef<(HTMLImageElement | null)[]>([])

  // --- Measure slide width dynamically ---
  useEffect(() => {
    function measureWidth() {
      if (!trackRef.current) return
      const first = trackRef.current.querySelector(".carousel-slide") as HTMLElement | null
      if (!first) return
      const style = getComputedStyle(first)
      const w = first.getBoundingClientRect().width
      const mr = parseFloat(style.marginRight || "0")
      setSlideWidth(Math.round(w + mr))
    }
    measureWidth()
    window.addEventListener("resize", measureWidth)
    return () => window.removeEventListener("resize", measureWidth)
  }, [])

  // --- Carousel Navigation ---
  const goTo = (index: number) =>
    setCurrent(((index % services.length) + services.length) % services.length)
  const prev = () => goTo(current - 1)
  const next = () => goTo(current + 1)
  const translateX = slideWidth ? -current * slideWidth + translate : translate

  // --- Swipe gestures for mobile ---
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].clientX)
  }
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const diff = e.touches[0].clientX - startX
    setTranslate(diff)
  }
  const handleTouchEnd = () => {
    if (!isDragging) return
    setIsDragging(false)
    if (translate > 60) prev()
    else if (translate < -60) next()
    setTranslate(0)
  }

  // --- Cursor-based parallax (desktop) ---
  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    const img = imageRefs.current[index]
    if (!img || index !== current) return

    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -4
    const rotateY = ((x - centerX) / centerX) * 4
    img.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`
  }

  const handleMouseLeave = (index: number) => {
    const img = imageRefs.current[index]
    if (!img) return
    img.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1.05)"
  }

  // --- Device-based parallax (mobile gyroscope) ---
  useEffect(() => {
    const handleOrientation = (event: DeviceOrientationEvent) => {
      const img = imageRefs.current[current]
      if (!img) return
      const { beta, gamma } = event // beta: front-back, gamma: left-right tilt
      const maxTilt = 5
      const xTilt = Math.min(Math.max(gamma || 0, -maxTilt), maxTilt)
      const yTilt = Math.min(Math.max(beta || 0, -maxTilt), maxTilt)
      img.style.transform = `perspective(1000px) rotateX(${yTilt / 2}deg) rotateY(${xTilt / 2}deg) scale(1.08)`
    }

    if (window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", handleOrientation)
    }

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation)
    }
  }, [current])

  return (
    <div id="services" className="w-full flex flex-col items-center overflow-hidden pt-20">
      <div className="relative w-full px-4 sm:px-6 select-none">
        <div
          ref={trackRef}
          className="flex items-stretch transition-transform duration-500 ease-out will-change-transform"
          style={{ transform: `translateX(${translateX}px)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {services.map((service, i) => (
            <article
              key={i}
              className="carousel-slide shrink-0 w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-255 mr-6 rounded-xl overflow-hidden shadow-xl relative bg-gray-100 h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh]"
            >
              <div
                className="absolute inset-0 perspective-1000"
                onMouseMove={(e) => handleMouseMove(e, i)}
                onMouseLeave={() => handleMouseLeave(i)}
              >
                <img
                  src={service.image}
                  alt={service.alt}
                  ref={(el) => {imageRefs.current[i] = el}}
                  className={`w-full h-full object-cover transition-transform duration-18000 ease-in-out ${
                    i === current ? "parallax-active" : ""
                  }`}
                  draggable={false}
                />
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/10 to-black/40" />
              </div>

              <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-between">
                <div>
                    <span className={`text-sm text-white/90 font-medium tracking-wide px-3 py-1 rounded-md ${
                    service.duration === "New" ? "bg-red-500/90" : "bg-black/30"
                    }`}>
                    {service.duration}
                    </span>
                </div>

                <div className="mt-auto mb-6 md:mb-8 max-w-[75%]">
                  <h2 className="text-white text-4xl sm:text-5xl md:text-6xl leading-tight font-(--font-playfair)">
                    {service.name}
                  </h2>
                  <p className="text-white/80 text-base mt-1">₵{service.price}</p>
                  <p className="text-white/90 text-sm mt-3 line-clamp-2">
                    {service.description}
                  </p>

                  <div className="mt-6 flex gap-3 flex-wrap">
                    <button
                      className="px-5 py-3 rounded-md bg-primary/95 text-primary-foreground font-semibold shadow-md transition-transform active:scale-95"
                      onClick={() => {
                        if (typeof window !== "undefined") {
                          const serviceSlug = SERVICE_SLUGS[service.name] || "thai-massage"
                          localStorage.setItem("selectedService", serviceSlug)
                        }
                        document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })
                      }}
                    >
                      Book Now
                    </button>
                    <Link
                      href={`/services/${SERVICE_SLUGS[service.name] || "thai-massage"}`}
                      className="px-4 py-3 rounded-md bg-white text-gray-800 font-medium shadow-sm hover:shadow-md"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="mt-6 flex items-center gap-3">
        {services.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-gray-800" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
