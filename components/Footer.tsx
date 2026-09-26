"use client"

// -------------------- Footer --------------------------------------
import Link from "next/link"
import { useState, useEffect } from "react"
// import { ElegantButton } from "./ui/elegant-button"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"
import { useTheme } from "@/lib/useTheme"
// import { ArrowUp } from "lucide-react"

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
    { day: "Monday", hours: "08:00AM – 12:00AM" },
    { day: "Tuesday", hours: "08:00AM – 12:00AM" },
    { day: "Wednesday", hours: "08:00AM – 12:00AM" },
    { day: "Thursday", hours: "08:00AM – 12:00AM" },
    { day: "Friday", hours: "08:00AM – 12:00AM" },
    { day: "Saturday", hours: "08:00AM – 12:00AM" },
    { day: "Sunday", hours: "08:00AM – 12:00AM" },
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
              Appointment-only spa services in Accra and Kumasi, crafted for
              calm, privacy, and deep relaxation.
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
                  href="mailto:Bhunnyspa@gmail.com"
                  className="hover:text-white transition"
                >
                  Bhunnyspa@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary/80" />
                <a
                  href="tel:+233247932681"
                  className="hover:text-white transition"
                >
                  +233 24 793 2681
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
              <li className="grid grid-cols-[auto_1fr] items-start gap-2">
                <MapPin size={16} className="text-primary/80" />
                <span>
                  Accra: Aluguntugui Street, East Legon.
                  <br />
                  Kumasi: Behind Brotherman Spot, by Roses Academy, close to the Pentecost Church.
                </span>
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
          <button
            onClick={toggleTheme}
            className="px-5 py-2 rounded-full w-fit bg-white/10 hover:bg-white/20 border border-white/10 text-sm text-white transition shadow-md hover:shadow-lg hover:shadow-primary/20"
          >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </div>

        {/* Bottom row */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col justify-between items-center text-center gap-4">
          <p className="text-sm text-white/60">
            {/* All rights reserved. &copy; {new Date().getFullYear()} Bunny Massage Spa. */}
            www.bunnymassagespa.com
          </p>
          <div className="flex flex-col items-center gap-1">
            <p className="font-semibold">Powered by:</p>
            <p className="text-sm text-white/60">Business Tech Support | <span><a
                  href="tel:+233592771234"
                  className="hover:text-white transition"
                >
                  +233 59 277 1234
                </a></span></p>
          </div>
          {/* <button
            onClick={toggleTheme}
            className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-sm text-white transition shadow-md hover:shadow-lg hover:shadow-primary/20"
          >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button> */}
        </div>
      </div>
    </footer>
  )
}






// import { Phone, Mail, MapPin, Clock } from "lucide-react"

// export default function Footer() {
//   return (
//     <footer id="contact" className="bg-secondary/20 py-16">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//           <div>
//             <div className="flex items-center space-x-2 mb-6">
//               <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
//                 <span className="text-xl">🐰</span>
//               </div>
//               <span className="font-serif text-2xl font-bold text-foreground">BunnyMassageSpa</span>
//             </div>
//             <p className="text-muted-foreground leading-relaxed mb-6">
//               Your sanctuary for luxury, relaxation, and playful elegance. Experience the perfect blend of
//               professional therapy and whimsical charm.
//             </p>
//           </div>
//           <div>
//             <h3 className="font-serif text-xl font-bold text-foreground mb-6">Contact Info</h3>
//             <div className="space-y-4">
//               <div className="flex items-center space-x-3">
//                 <Phone className="h-5 w-5 text-primary" />
//                 <span className="text-muted-foreground">+233 XX XXX XXXX</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Mail className="h-5 w-5 text-primary" />
//                 <span className="text-muted-foreground">hello@bunnymassagespa.com</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <MapPin className="h-5 w-5 text-primary" />
//                 <span className="text-muted-foreground">Accra, Ghana</span>
//               </div>
//             </div>
//           </div>
//           <div>
//             <h3 className="font-serif text-xl font-bold text-foreground mb-6">Business Hours</h3>
//             <div className="space-y-2">
//               <div className="flex items-center space-x-3">
//                 <Clock className="h-5 w-5 text-primary" />
//                 <div>
//                   <div className="text-muted-foreground">Mon - Sat: 9:00 AM - 10:00 PM</div>
//                   <div className="text-muted-foreground">Sunday: 10:00 AM - 8:00 PM</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="border-t border-border/50 mt-12 pt-8 text-center">
//           <p className="text-muted-foreground">
//             © 2024 Bunny Massage Spa. All rights reserved. | Designed with 🐰 and ❤️
//           </p>
//         </div>
//       </div>
//     </footer>
//   )
// }
