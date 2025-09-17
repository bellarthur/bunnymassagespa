"use client"

import React, { useEffect, useState, FormEvent } from "react"
import { motion, useReducedMotion } from "framer-motion"
import Link from "next/link"
import { useScrollToSection } from "@/lib/useScrollToSection"

// --------------------------- Motion Variants --------------------------------
const navLinkVariant = {
  hover: { 
    y: -2, 
    color: "#ffffff",
    transition: { duration: 0.3, ease: [0.22, 0.8, 0.2, 1] }
  }
}

const discountCardVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.6, ease: [0.22, 0.8, 0.2, 1] }
  }
}

const inputVariant = {
  focus: { 
    scale: 1.02, 
    borderColor: "#3b82f6",
    transition: { duration: 0.3 }
  }
}



// --------------------------- DiscountSection --------------------------------
export function DiscountSection() {
  const prefersReduced = useReducedMotion()

  const discounts = [
    {
      title: "First Visit Special",
      description: "Get 20% off your first booking with us!",
      code: "FIRST20",
      image: "/placeholder.svg",
    },
    {
      title: "Refer a Friend",
      description: "Refer a friend and both get 15% off your next session.",
      code: "FRIEND15",
      image: "/placeholder.svg",
    },
  ]

  return (
    <section id="discounts" className="py-20 bg-gradient-to-b from-background/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Special Offers</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-3">
            Exclusive deals to enhance your relaxation experience.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {discounts.map((discount, i) => (
            <motion.div
              key={discount.title}
              className="relative rounded-xl overflow-hidden bg-white/6 backdrop-blur-md border border-white/8 shadow-lg"
              initial={prefersReduced ? undefined : "hidden"}
              whileInView={prefersReduced ? undefined : "visible"}
              viewport={{ once: true, amount: 0.2 }}
              variants={discountCardVariant}
            >
              <img 
                src={discount.image} 
                alt={discount.title} 
                className="w-full h-40 object-cover opacity-80"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">{discount.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{discount.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-primary font-bold">{discount.code}</span>
                  <button className="text-sm px-4 py-2 bg-primary/20 rounded-md hover:bg-primary/30 transition">
                    Copy Code
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


// --------------------------- Footer --------------------------------------
export function Footer() {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Booking", href: "#booking" },
  ]

  return (
    <footer className="bg-black/90 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-xl font-bold text-white">SpaAtHome</h3>
            <p className="text-sm text-white/70 mt-2 max-w-xs">
              Premium mobile spa services delivered to your door for ultimate relaxation.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white">Quick Links</h4>
            <ul className="mt-3 space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-white/70 hover:text-white transition">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">Contact</h4>
            <ul className="mt-3 space-y-2 text-white/70">
              <li>Email: contact@spahome.com</li>
              <li>Phone: +233 123 456 789</li>
              <li>Address: Accra, Ghana</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} SpaAtHome. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default { StickyNav, DiscountSection, BookingSection, Footer }