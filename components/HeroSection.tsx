"use client"

import React from "react"
import { useState, useEffect, useRef } from "react"
import { motion, useReducedMotion, Variants } from "framer-motion"
import Link from "next/link"
import { Menu, Phone, Mail, MapPin, Clock, Heart, ChevronLeft, ChevronRight, ChevronDown, Calendar, User, CheckCircle2 } from "lucide-react"
import { useScrollToSection } from "@/lib/useScrollToSection"
import { ElegantButton } from "./ui/elegant-button"

const images = [
  "/black-man-massage.png",
  "/massage.jpeg",
  "/health-spa-afro-woman-relaxing-in-spa-with-closed-eyes.jpg",
]

export default function HeroSection() {
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
  const headline = "Walk In Book First"
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
            {/* <div className="hidden md:inline-block px-3 py-1 rounded-full bg-white/10 text-sm text-white/90">
              Walk-In Spa • Appointment Only
            </div> */}
            <div className="hidden md:inline-block px-3 py-1 rounded-full bg-white/10 text-sm text-white/90">
              New Kumasi Branch • Appointment Only
            </div>
            <h1
              className={`flex flex-col mt-6 text-4xl md:text-6xl font-extrabold leading-tight text-white relative ${shimmer ? "animate-textShimmer" : ""
                }`}
            >
              {/* <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0 * 0.2, type: "spring", stiffness: 80 }}
                className="inline-block mr-2 font-[var(--font-playfair)]"
              >
                Walk
              </motion.span> */}

              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 * 0.2, type: "spring", stiffness: 80 }}
                className="inline-block mr-2 font-[Great_Vibes] text-5xl md:text-6xl text-pink-200"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                Unwind
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 * 0.2, type: "spring", stiffness: 80 }}
                className="inline-block font-[var(--font-playfair)] font-stretch-105% tracking-tight text-4xl md:text-6xl text-white/90"
              >
                @Bunny Spa
              </motion.span>
            </h1>


            {/* <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto lg:mx-0">
              Enjoy a calm in-spa experience with massage and skincare treatments designed for deep relaxation. 
              Walk-ins are welcomed in spirit, but every session must be reserved in advance.
            </p> */}

            <p className="text-sm md:text-base text-white/75 max-w-2xl mx-auto lg:mx-0">
              Book your appointment before arrival to secure your preferred time and therapist.
            </p>

            <div className="flex gap-4 items-center mt-6 justify-center lg:justify-start">
              <Link href="/appointment">
              <ElegantButton className="!px-4 !py-2 !text-sm">
              Book Appointment
              <span className="absolute inset-0 rounded-full bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[sheen_3s_infinite]" />
              </ElegantButton>
              </Link>
              <Link href="#services" className="text-white/90 underline-offset-4 hover:underline">
                Explore Services
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


function RippleCard() {
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [showMap, setShowMap] = useState(false)

  // ✅ Your actual location data
  const mapLink = "https://maps.app.goo.gl/MojD4XRZE5h4seg88"
  const lat = 6.688069980444034
  const lng = -1.6447169506043786

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
    ripple.style.background = "rgba(255,255,255,0.18)"
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
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 120, damping: 15 }}
      className="relative w-full max-w-md overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 mb-4 shadow-xl cursor-pointer select-none"
    >
      {!showMap ? (
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="text-sm px-3 py-1 rounded-full bg-white/10 text-white/90">
              Our New Location
            </div>
            <div className="text-xs text-white/70 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              Kumasi
            </div>
          </div>

          {/* Preview Card */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setShowMap(true)
            }}
            className="relative w-full overflow-hidden rounded-xl border border-white/15 bg-black/20 text-left"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_25%),radial-gradient(circle_at_80%_80%,rgba(255,192,203,0.12),transparent_20%)]" />

            <div className="relative p-4">
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center cursor-pointer">
                    <MapPin className="w-10 h-10 text-pink-200" />
                  </div>
                  <div className="mt-1 text-xs text-white/70">
                      Tap to view map
                    </div>

                </div>

                <div>
                  <div className="text-lg font-semibold text-white">
                    Kumasi - Patasi
                  </div>

                  <div className="mt-1 text-sm text-white/80 leading-5">
                    Behind Brotherman Spot<br />
                    By Roses Academy. Near Pentecost Church
                  </div>

                  {/* <div className="mt-2 text-xs text-white/70">
                    Tap to view map
                  </div> */}
                </div>
              </div>
            </div>
          </button>

          {/* Actions */}
          {/* <div className="grid grid-cols-2 gap-3">
            <a
              href={mapLink}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="rounded-xl bg-white/10 border border-white/15 px-3 py-2 text-center text-sm text-white/90 hover:bg-white/15 transition"
            >
              Open in Maps
            </a>

            <a
              href="/appointment"
              onClick={(e) => e.stopPropagation()}
              className="rounded-xl bg-pink-200/90 text-black px-3 py-2 text-center text-sm font-medium hover:bg-pink-200 transition"
            >
              Book Visit
            </a>
          </div> */}
        </div>
      ) : (
        <div className="space-y-3">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              {/* <div className="text-sm px-3 py-1 rounded-full bg-white/10 text-white/90 w-max">
                Find Us Here
              </div> */}
              {/* <div className="mt-2 text-sm text-white/85">
                Kumasi, Ghana
              </div> */}
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation()
                setShowMap(false)
              }}
              className="text-xs text-white/70 hover:text-white"
            >
              Back
            </button>
          </div>

          {/* Embedded Map using coordinates */}
          <div className="overflow-hidden rounded-xl border border-white/15">
            <iframe
              title="Bunny Spa location"
              src={`https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`}
              className="w-full h-64 border-0"
              loading="lazy"
            />
          </div>

          {/* Address */}
          <div className="bg-white/10 border border-white/10 rounded-xl p-3">
            <div className="text-sm font-medium text-white">Kumasi - Patasi</div>
            <div className="text-xs text-white/75 mt-1 leading-5">
              Behind Brotherman Spot, by Roses Academy, near Pentecost Church.
            </div>
          </div>

          {/* CTA */}
          <a
            href={mapLink}
            target="_blank"
            rel="noreferrer"
            className="block text-center text-sm text-white/90 underline"
          >
            Open in Google Maps →
          </a>
        </div>
      )}

      <style jsx>{`
        @keyframes ripple {
          to {
            transform: scale(2.5);
            opacity: 0;
          }
        }
      `}</style>
    </motion.div>
  )
}

// function RippleCard() {
//   const cardRef = useRef<HTMLDivElement>(null)
//   const [tilt, setTilt] = useState({ x: 0, y: 0 })
//   const [showMap, setShowMap] = useState(false)

//   const mapLink = "https://maps.app.goo.gl/MojD4XRZE5h4seg88"

//   const createRipple = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//     const card = cardRef.current
//     if (!card) return

//     const ripple = document.createElement("span")
//     const rect = card.getBoundingClientRect()
//     const size = Math.max(rect.width, rect.height)
//     const x = e.clientX - rect.left - size / 2
//     const y = e.clientY - rect.top - size / 2

//     ripple.style.position = "absolute"
//     ripple.style.borderRadius = "50%"
//     ripple.style.pointerEvents = "none"
//     ripple.style.width = ripple.style.height = `${size}px`
//     ripple.style.left = `${x}px`
//     ripple.style.top = `${y}px`
//     ripple.style.background = "rgba(255,255,255,0.18)"
//     ripple.style.transform = "scale(0)"
//     ripple.style.animation = "ripple 0.8s ease-out forwards"

//     card.appendChild(ripple)
//     ripple.addEventListener("animationend", () => ripple.remove())
//   }

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     const card = cardRef.current
//     if (!card) return
//     const rect = card.getBoundingClientRect()
//     const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10
//     const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10
//     setTilt({ x, y })
//   }

//   const resetTilt = () => setTilt({ x: 0, y: 0 })

//   return (
//     <motion.div
//       ref={cardRef}
//       onClick={createRipple}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={resetTilt}
//       animate={{ rotateX: tilt.y, rotateY: tilt.x }}
//       whileTap={{ scale: 0.97 }}
//       transition={{ type: "spring", stiffness: 120, damping: 15 }}
//       className="relative w-full max-w-md overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-xl cursor-pointer select-none"
//     >
//       {!showMap ? (
//         <div className="space-y-4">
//           {/* Header */}
//           <div className="flex items-center justify-between">
//             <div className="text-sm px-3 py-1 rounded-full bg-white/10 text-white/90">
//               New Location
//             </div>
//             <div className="text-xs text-white/70 flex items-center gap-1">
//               <MapPin className="w-3.5 h-3.5" />
//               Kumasi
//             </div>
//           </div>

//           {/* Preview Card */}
//           <button
//             type="button"
//             onClick={(e) => {
//               e.stopPropagation()
//               setShowMap(true)
//             }}
//             className="relative w-full overflow-hidden rounded-xl border border-white/15 bg-black/20 text-left"
//           >
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_25%),radial-gradient(circle_at_80%_80%,rgba(255,192,203,0.12),transparent_20%)]" />
            
//             <div className="relative p-4">
//               <div className="flex items-start gap-4">
//                 <div className="shrink-0 w-24 h-24 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
//                   <MapPin className="w-10 h-10 text-pink-200" />
//                 </div>

//                 <div>
//                   <div className="text-lg font-semibold text-white">
//                     Bunny Spa — New Location
//                   </div>
//                   <div className="mt-1 text-sm text-white/80 leading-5">
//                     Behind Brotherman Spot<br />
//                     By Roses Academy<br />
//                     Close to Pentecost Church
//                   </div>
//                   <div className="mt-3 text-xs text-white/70">
//                     Tap to view map
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </button>

//           {/* Actions */}
//           <div className="grid grid-cols-2 gap-3">
//             <a
//               href={mapLink}
//               target="_blank"
//               rel="noreferrer"
//               onClick={(e) => e.stopPropagation()}
//               className="rounded-xl bg-white/10 border border-white/15 px-3 py-2 text-center text-sm text-white/90 hover:bg-white/15 transition"
//             >
//               Open in Maps
//             </a>

//             <a
//               href="/appointment"
//               onClick={(e) => e.stopPropagation()}
//               className="rounded-xl bg-pink-200/90 text-black px-3 py-2 text-center text-sm font-medium hover:bg-pink-200 transition"
//             >
//               Book Visit
//             </a>
//           </div>
//         </div>
//       ) : (
//         <div className="space-y-3">
//           {/* Header */}
//           <div className="flex items-center justify-between">
//             <div className="text-sm px-3 py-1 rounded-full bg-white/10 text-white/90">
//               Find Us Here
//             </div>

//             <button
//               onClick={(e) => {
//                 e.stopPropagation()
//                 setShowMap(false)
//               }}
//               className="text-xs text-white/70 hover:text-white"
//             >
//               Back
//             </button>
//           </div>

//           {/* Embedded Map */}
//           <div className="overflow-hidden rounded-xl border border-white/15 bg-black/20">
//             <iframe
//               src={mapLink.replace("https://maps.app.goo.gl/", "https://www.google.com/maps?q=") + "&output=embed"}
//               className="w-full h-64 border-0"
//               loading="lazy"
//             />
//           </div>

//           {/* Address */}
//           <div className="rounded-xl bg-white/10 border border-white/10 p-3">
//             <div className="text-sm font-medium text-white">Bunny Spa</div>
//             <div className="text-xs text-white/75 mt-1">
//               Kumasi — Behind Brotherman Spot, by Roses Academy, close to Pentecost Church
//             </div>
//           </div>
//         </div>
//       )}

//       <style jsx>{`
//         @keyframes ripple {
//           to {
//             transform: scale(2.5);
//             opacity: 0;
//           }
//         }
//       `}</style>
//     </motion.div>
//   )
// }


// function RippleCard() {
//   const cardRef = useRef<HTMLDivElement>(null)
//   const [tilt, setTilt] = useState({ x: 0, y: 0 })
//   const [showMap, setShowMap] = useState(false)

//   const locationLabel =
//     "Kumasi, Ghana — Behind Brotherman Spot, by Roses Academy, close to the Pentecost Church"

//   const mapsQuery = encodeURIComponent(locationLabel)

//   const createRipple = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//     const card = cardRef.current
//     if (!card) return

//     const ripple = document.createElement("span")
//     const rect = card.getBoundingClientRect()
//     const size = Math.max(rect.width, rect.height)
//     const x = e.clientX - rect.left - size / 2
//     const y = e.clientY - rect.top - size / 2

//     ripple.style.position = "absolute"
//     ripple.style.borderRadius = "50%"
//     ripple.style.pointerEvents = "none"
//     ripple.style.width = ripple.style.height = `${size}px`
//     ripple.style.left = `${x}px`
//     ripple.style.top = `${y}px`
//     ripple.style.background = "rgba(255,255,255,0.18)"
//     ripple.style.transform = "scale(0)"
//     ripple.style.animation = "ripple 0.8s ease-out forwards"

//     card.appendChild(ripple)
//     ripple.addEventListener("animationend", () => ripple.remove())
//   }

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     const card = cardRef.current
//     if (!card) return
//     const rect = card.getBoundingClientRect()
//     const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10
//     const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10
//     setTilt({ x, y })
//   }

//   const resetTilt = () => setTilt({ x: 0, y: 0 })

//   return (
//     <motion.div
//       ref={cardRef}
//       onClick={createRipple}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={resetTilt}
//       animate={{ rotateX: tilt.y, rotateY: tilt.x }}
//       whileTap={{ scale: 0.97 }}
//       transition={{ type: "spring", stiffness: 120, damping: 15 }}
//       className="relative w-full max-w-md overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-xl cursor-pointer select-none"
//     >
//       {!showMap ? (
//         <div className="space-y-4">
//           <div className="flex items-center justify-between">
//             <div className="text-sm px-3 py-1 rounded-full bg-white/10 text-white/90">
//               New Location
//             </div>
//             <div className="text-xs text-white/70 flex items-center gap-1">
//               <MapPin className="w-3.5 h-3.5" />
//               Kumasi
//             </div>
//           </div>

//           <button
//             type="button"
//             onClick={(e) => {
//               e.stopPropagation()
//               setShowMap(true)
//             }}
//             className="relative w-full overflow-hidden rounded-xl border border-white/15 bg-black/20 text-left"
//           >
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_25%),radial-gradient(circle_at_80%_80%,rgba(255,192,203,0.12),transparent_20%)]" />
//             <div className="relative p-4">
//               <div className="flex items-start gap-4">
//                 <div className="shrink-0 w-24 h-24 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
//                   <MapPin className="w-10 h-10 text-pink-200" />
//                 </div>

//                 <div className="min-w-0">
//                   <div className="text-lg font-semibold text-white leading-tight">
//                     Bunny Spa — New Location
//                   </div>
//                   <div className="mt-1 text-sm text-white/80 leading-5">
//                     Behind Brotherman Spot<br />
//                     By Roses Academy<br />
//                     Close to the Pentecost Church
//                   </div>
//                   <div className="mt-3 text-xs text-white/70">
//                     Tap to view map
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </button>

//           <div className="grid grid-cols-2 gap-3">
//             <a
//               href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
//               target="_blank"
//               rel="noreferrer"
//               onClick={(e) => e.stopPropagation()}
//               className="rounded-xl bg-white/10 border border-white/15 px-3 py-2 text-center text-sm text-white/90 hover:bg-white/15 transition"
//             >
//               Open in Maps
//             </a>

//             <a
//               href="/appointment"
//               onClick={(e) => e.stopPropagation()}
//               className="rounded-xl bg-pink-200/90 text-black px-3 py-2 text-center text-sm font-medium hover:bg-pink-200 transition"
//             >
//               Book Visit
//             </a>
//           </div>
//         </div>
//       ) : (
//         <div className="space-y-3">
//           <div className="flex items-center justify-between gap-3">
//             <div>
//               <div className="text-sm px-3 py-1 rounded-full bg-white/10 text-white/90 w-max">
//                 Find Us Here
//               </div>
//               <div className="mt-2 text-sm text-white/85">
//                 Kumasi, Ghana
//               </div>
//             </div>

//             <button
//               type="button"
//               onClick={(e) => {
//                 e.stopPropagation()
//                 setShowMap(false)
//               }}
//               className="text-xs text-white/70 hover:text-white transition"
//             >
//               Back
//             </button>
//           </div>

//           <div className="overflow-hidden rounded-xl border border-white/15 bg-black/20">
//             <iframe
//               title="Bunny Spa location map"
//               src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
//               className="w-full h-64 border-0"
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             />
//           </div>

//           <div className="rounded-xl bg-white/8 border border-white/10 p-3">
//             <div className="text-sm font-medium text-white">Bunny Spa</div>
//             <div className="mt-1 text-xs leading-5 text-white/75">
//               Behind Brotherman Spot, by Roses Academy, close to the Pentecost Church.
//             </div>
//           </div>
//         </div>
//       )}

//       <style jsx>{`
//         @keyframes ripple {
//           to {
//             transform: scale(2.5);
//             opacity: 0;
//           }
//         }
//       `}</style>
//     </motion.div>
//   )
// }

// function RippleCard() {
//   const cardRef = useRef<HTMLDivElement>(null)
//   const [tilt, setTilt] = useState({ x: 0, y: 0 })

//   const createRipple = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//     const card = cardRef.current
//     if (!card) return

//     const ripple = document.createElement("span")
//     const rect = card.getBoundingClientRect()
//     const size = Math.max(rect.width, rect.height)
//     const x = e.clientX - rect.left - size / 2
//     const y = e.clientY - rect.top - size / 2

//     ripple.style.position = "absolute"
//     ripple.style.borderRadius = "50%"
//     ripple.style.pointerEvents = "none"
//     ripple.style.width = ripple.style.height = `${size}px`
//     ripple.style.left = `${x}px`
//     ripple.style.top = `${y}px`
//     ripple.style.background = "rgba(255,255,255,0.25)"
//     ripple.style.transform = "scale(0)"
//     ripple.style.animation = "ripple 0.8s ease-out forwards"

//     card.appendChild(ripple)
//     ripple.addEventListener("animationend", () => ripple.remove())
//   }

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     const card = cardRef.current
//     if (!card) return
//     const rect = card.getBoundingClientRect()
//     const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10
//     const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10
//     setTilt({ x, y })
//   }

//   const resetTilt = () => setTilt({ x: 0, y: 0 })

//   return (
//     <motion.div
//       ref={cardRef}
//       onClick={createRipple}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={resetTilt}
//       animate={{ rotateX: tilt.y, rotateY: tilt.x }}
//       whileTap={{ scale: 0.97 }} // soft compression on mobile/tap
//       transition={{ type: "spring", stiffness: 120, damping: 15 }}
//       className="relative w-full max-w-md overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl cursor-pointer select-none"
//     >
//       <div className="text-sm mb-3 bg-background px-2 rounded-3xl w-max">New</div>
//       <div className="flex items-center gap-4">
//         <img
//           src="/media/pedicure-menicure.webp"
//           alt="Pedicures/manicures preview"
//           className="w-24 h-24 object-cover rounded-xl pointer-events-none select-none"
//         />
//         <div>
//           <div className="text-lg font-semibold text-white">Pedicures/manicures</div>
//           <div className="text-sm text-white/80">₵300</div>
//         </div>
//       </div>
//       <div className="mt-4">
//         <p className="text-sm text-white/80">
//           Complete hand and foot care designed to keep your nails healthy, neat, and beautifully finished.
//         </p>
//       </div>

//       <style jsx>{`
//         @keyframes ripple {
//           to {
//             transform: scale(2.5);
//             opacity: 0;
//           }
//         }
//         @media (max-width: 768px) {
//           @keyframes ripple {
//             to {
//               transform: scale(2.5);
//               opacity: 0;
//             }
//           }
//           span[style*="animation"] {
//             animation: ripple 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards !important;
//           }
//         }
//       `}</style>
//     </motion.div>
//   )
// }

