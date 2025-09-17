"use client"

import { motion } from "framer-motion"
import Link from "next/link"

interface Service {
  name: string
  price: string
  duration: string
  description: string
  image: string
  alt: string
}

const services: Service[] = [
  {
    name: "Thai Massage",
    price: "800",
    duration: "40 mins",
    description:
      "Authentic Thai stretching and pressure techniques to increase flexibility and relieve tension.",
    image: "placeholder.svg",
    alt: "Therapist performing Thai massage stretching client's neck",
  },
  {
    name: "Deep Tissue Massage",
    price: "800",
    duration: "1 hour",
    description:
      "Firm pressure to release deep-seated muscle knots and tension for long-lasting relief.",
    image: "placeholder.svg",
    alt: "Hands applying firm massage strokes on back muscles",
  },
  {
    name: "Swedish Massage",
    price: "800",
    duration: "1 hour",
    description:
      "Gentle flowing strokes and kneading to relax your body, ease stress, and enhance circulation.",
    image: "placeholder.svg",
    alt: "Client enjoying a relaxing oil-based massage",
  },
  {
    name: "Nuru Massage",
    price: "1,000",
    duration: "1 hr 30 mins",
    description:
      "Deeply indulgent, skin-to-skin body massage using premium Nuru gel for total relaxation.",
    image: "placeholder.svg",
    alt: "Spa setup for Nuru massage with gel close-up",
  },
  {
    name: "Sensual Massage",
    price: "1,000",
    duration: "1 hr 30 mins",
    description:
      "An intimate massage crafted to calm the senses and create profound relaxation.",
    image: "placeholder.svg",
    alt: "Dimly-lit spa setting for sensual massage",
  },
  {
    name: "Erotic Massage",
    price: "1,000",
    duration: "1 hr 30 mins",
    description:
      "An intimate, tension-melting experience designed to rejuvenate and restore.",
    image: "placeholder.svg",
    alt: "Candles around a massage table for intimate ambiance",
  },
  {
    name: "Swedish/Deep Tissue Nuru",
    price: "1,500",
    duration: "1 hr 30 mins",
    description:
      "Masterfully blends Swedish, Deep Tissue, and Nuru for the ultimate revitalizing massage.",
    image: "placeholder.svg",
    alt: "Therapist performing combined massage techniques",
  },
  {
    name: "Couple Massage ❤️",
    price: "1,600",
    duration: "1 hr 30 mins",
    description:
      "Shared massage experience tailored for couples to connect, relax, and unwind together.",
    image: "placeholder.svg",
    alt: "Couple receiving side-by-side massages",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-2">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Enjoy rejuvenation and relaxation in the comfort of your home with
            our tailored massage experiences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service, index) => (
            <motion.div
              key={index}
              className="bg-card/60 rounded-sm shadow-lg overflow-hidden backdrop-blur-sm"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <img
                src={service.image}
                alt={service.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col justify-between h-auto">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {service.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {service.description}
                  </p>
                </div>
                <div className="flex justify-between items-center border-t pt-4">
                  <span className="text-sm text-muted-foreground">
                    {service.duration}
                  </span>
                  <span className="text-lg font-bold text-foreground">
                    ₵{service.price}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See All Button */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="px-6 py-3 bg-primary text-white rounded-md shadow-md hover:bg-primary/90 transition"
          >
            See All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
