"use client"
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
"use client"

import { motion } from "framer-motion"
import Link from "next/link"


function RippleCard() {
  const cardRef = useRef<HTMLDivElement>(null)

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

  return (
    <motion.div
      ref={cardRef}
      onClick={createRipple}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative w-full max-w-md overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl cursor-pointer"
    >
      <div className="text-sm text-white/80 mb-3">Popular</div>
      <div className="flex items-center gap-4">
        <img src="/placeholder.svg" alt="Thai massage preview" className="w-24 h-24 object-cover rounded-xl" />
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
      `}</style>
    </motion.div>
  )
}

interface Props {
  isScrolled: boolean;
  scrollToSection: (sectionId: string) => void;
}

const images = [
  "/health-spa-afro-woman-relaxing-in-spa-with-closed-eyes.jpg",
  "/black-man-massage.png",
  "/massage.jpeg",
];

export default function HeroSection({ isScrolled, scrollToSection }: Props) {
  const [currentImage, setCurrentImage] = useState(0);

  // Cycle background images every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Images */}
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out`}
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: currentImage === index ? 1 : 0,
          }}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-12 justify-center items-center min-h-screen py-20">
          <div className="fade-in-up"></div>
          <div className="relative top-20 md:top-0 h-auto p-6 text-center md:text-left space-y-4 bg-background/70 backdrop-blur-sm rounded-lg shadow-lg fade-in-up">
            <h2 className="great-vibes-regular text-3xl md:text-5xl font-bold text-foreground mb-4">
              Unwind at Home
            </h2>
            <div className="h-auto">
              <p>
                At Bunny Massage Spa, we bring the benefit of Swedish massage,
                Deep tissue massage, Thai massage, The Nuru massage, erotic and
                sensual massage and other skin care services directly to you
                with our specialized home service, focusing on stress relief and
                relaxation in the comfort of your own space.
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-start md:gap-4">
              <Button
                onClick={() => scrollToSection("booking")}
                className="text-base md:w-3xs bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 uppercase py-6 cursor-pointer"
              >
                Book Now
              </Button>
              <div className="mt-4 w-max m-auto md:m-0 md:flex flex-col-reverse gap-2 -row-reverse items-center justify-center md:justify-end">
                <p className="text-sm text-foreground/80 text-center md:text-left">
                  1,200+ Happy Customers
                </p>
                <div className="flex -space-x-1 overflow-hidden justify-center md:justify-start p-1">
                  <img
                    alt="Reviewer 1"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="inline-block size-6 rounded-full ring-2 ring-gray-900 outline -outline-offset-1 outline-white/10"
                  />
                  <img
                    alt="Reviewer 2"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="inline-block size-6 rounded-full ring-2 ring-gray-900 outline -outline-offset-1 outline-white/10"
                  />
                  <img
                    alt="Reviewer 3"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    className="inline-block size-6 rounded-full ring-2 ring-gray-900 outline -outline-offset-1 outline-white/10"
                  />
                  <img
                    alt="Reviewer 4"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="inline-block size-6 rounded-full ring-2 ring-gray-900 outline -outline-offset-1 outline-white/10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


/**This Hero is great too. We can use it. */
// ---------------- HeroSection -----------------
// export function HeroSection() {
//   const [scrollY, setScrollY] = useState(0)
//   const [tilt, setTilt] = useState({ x: 0, y: 0 })

//   useEffect(() => {
//     const onScroll = () => setScrollY(window.scrollY)
//     window.addEventListener("scroll", onScroll)

//     const onMouseMove = (e:any) => {
//       const x = (e.clientX / window.innerWidth - 0.5) * 10
//       const y = (e.clientY / window.innerHeight - 0.5) * 10
//       setTilt({ x, y })
//     }
//     window.addEventListener("mousemove", onMouseMove)

//     return () => {
//       window.removeEventListener("scroll", onScroll)
//       window.removeEventListener("mousemove", onMouseMove)
//     }
//   }, [])

//   const parallaxOffset = scrollY * 0.05
//   const headline = "Unwind at Home"
//   const words = headline.split(" ")

//   return (
//     <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
//       {/* Background layers with depth */}
//       <div
//         className="absolute inset-0 will-change-transform"
//         style={{
//           transform: `translateY(${parallaxOffset}px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale(1.05)`,
//           transformStyle: "preserve-3d",
//         }}
//       >
//         {/* Prominent alternating hero images */}
//         <div className="absolute inset-0 bg-[url('/black-man-massage.png')] bg-cover bg-center opacity-90 animate-[kenburns_12s_ease-in-out_infinite]" />
//         <div className="absolute inset-0 bg-[url('/massage.jpeg')] bg-cover bg-center opacity-70 mix-blend-overlay animate-[kenburnsAlt_13s_ease-in-out_infinite]" />
//         {/* <div className="absolute inset-0 bg-[url('/health-spa-afro-woman-relaxing-in-spa-with-closed-eyes.jpg')] bg-cover bg-center opacity-60 mix-blend-overlay animate-[meshMove_14s_ease-in-out_infinite]" /> */}
//       </div>

//       {/* Gradient overlays */}
//       <div aria-hidden className="absolute inset-0 pointer-events-none">
//         <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/25 to-transparent opacity-40" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,200,200,0.18),transparent_10%),radial-gradient(circle_at_80%_70%,rgba(180,220,255,0.14),transparent_12%)] blur-[30px]" />
//       </div>

//       {/* Dark layer */}
//       <div className="absolute inset-0 bg-black/30" />

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-6">
//         <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
//           {/* Left: Headline + CTA */}
//           <div className="space-y-6 text-center lg:text-left">
//             <div className="hidden md:inline-block px-3 py-1 rounded-full bg-white/10 text-sm text-white/90">
//               Mobile • Home • Spa
//             </div>

//             <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight text-white">
//               {words.map((w, i) => (
//                 <motion.span
//                   key={w + i}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: i * 0.2, type: "spring", stiffness: 80 }}
//                   className="inline-block mr-2"
//                 >
//                   {w}
//                 </motion.span>
//               ))}
//             </h1>

//             <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto lg:mx-0">
//               We bring premium massage and skincare to your home — crafted for comfort, discretion and deep relaxation.
//             </p>

//             <div className="flex gap-4 items-center mt-6 justify-center lg:justify-start">
//               <motion.button
//                 whileHover={{ scale: 1.03, y: -1 }}
//                 whileTap={{ scale: 0.97, y: 0 }}
//                 className="relative inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold text-white tracking-wide overflow-hidden shadow-md"
//               >
//                 <span className="absolute inset-0 rounded-full bg-white/10 blur-md opacity-60" />
//                 <span className="relative z-10 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-700 px-8 py-3 rounded-full shadow-inner">
//                   Book Now
//                 </span>
//                 <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[sheen_3s_infinite]" />
//               </motion.button>

//               <Link href="#services" className="text-white/90 underline-offset-4 hover:underline">
//                 View Services
//               </Link>
//             </div>
//           </div>

//           {/* Right: Ripple Card */}
//           <div className="flex items-center justify-center">
//             <RippleCard />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// ---------------- HeroSection -----------------
// export function HeroSection() {
//   const [scrollY, setScrollY] = useState(0)
//   const [tilt, setTilt] = useState({ x: 0, y: 0 })
//   const [currentImage, setCurrentImage] = useState(0)

//   const heroImages = [
//     "/black-man-massage.png",
//     "/massage.jpeg",
//     "/health-spa-afro-woman-relaxing-in-spa-with-closed-eyes.jpg",
//   ]

//   // Scroll + mouse tilt
//   useEffect(() => {
//     const onScroll = () => setScrollY(window.scrollY)
//     window.addEventListener("scroll", onScroll)

//     const onMouseMove = (e:any) => {
//       const x = (e.clientX / window.innerWidth - 0.5) * 10
//       const y = (e.clientY / window.innerHeight - 0.5) * 10
//       setTilt({ x, y })
//     }
//     window.addEventListener("mousemove", onMouseMove)

//     return () => {
//       window.removeEventListener("scroll", onScroll)
//       window.removeEventListener("mousemove", onMouseMove)
//     }
//   }, [])

//   // Image crossfade every 8s
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % heroImages.length)
//     }, 8000)
//     return () => clearInterval(interval)
//   }, [heroImages.length])

//   const parallaxOffset = scrollY * 0.05
//   const headline = "Unwind at Home"
//   const words = headline.split(" ")

//   return (
//     <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
//       {/* Background with crossfade */}
//       <div
//         className="absolute inset-0 will-change-transform"
//         style={{
//           transform: `translateY(${parallaxOffset}px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale(1.05)`,
//           transformStyle: "preserve-3d",
//         }}
//       >
//         {heroImages.map((img, i) => (
//           <motion.div
//             key={img}
//             className="absolute inset-0 bg-cover bg-center"
//             style={{ backgroundImage: `url(${img})` }}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: i === currentImage ? 1 : 0 }}
//             transition={{ duration: 1.6, ease: "easeInOut" }}
//           />
//         ))}
//       </div>

//       {/* Gradient overlays */}
//       <div aria-hidden className="absolute inset-0 pointer-events-none">
//         <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/25 to-transparent opacity-40" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,200,200,0.18),transparent_10%),radial-gradient(circle_at_80%_70%,rgba(180,220,255,0.14),transparent_12%)] blur-[30px]" />
//       </div>

//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black/30" />

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-6">
//         <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
//           {/* Left: Headline + CTA */}
//           <div className="space-y-6 text-center lg:text-left">
//             <div className="hidden md:inline-block px-3 py-1 rounded-full bg-white/10 text-sm text-white/90">
//               Mobile • Home • Spa
//             </div>

//             <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight text-white">
//               {words.map((w, i) => (
//                 <motion.span
//                   key={w + i}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: i * 0.2, type: "spring", stiffness: 80 }}
//                   className="inline-block mr-2"
//                 >
//                   {w}
//                 </motion.span>
//               ))}
//             </h1>

//             <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto lg:mx-0">
//               We bring premium massage and skincare to your home — crafted for comfort, discretion and deep relaxation.
//             </p>

//             <div className="flex gap-4 items-center mt-6 justify-center lg:justify-start">
//               <motion.button
//                 whileHover={{ scale: 1.03, y: -1 }}
//                 whileTap={{ scale: 0.97, y: 0 }}
//                 className="relative inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold text-white tracking-wide overflow-hidden shadow-md"
//               >
//                 <span className="absolute inset-0 rounded-full bg-white/10 blur-md opacity-60" />
//                 <span className="relative z-10 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-700 px-8 py-3 rounded-full shadow-inner">
//                   Book Now
//                 </span>
//                 <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[sheen_3s_infinite]" />
//               </motion.button>

//               <Link href="#services" className="text-white/90 underline-offset-4 hover:underline">
//                 View Services
//               </Link>
//             </div>
//           </div>

//           {/* Right: Ripple Card */}
//           <div className="flex items-center justify-center">
//             <RippleCard />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
