"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useRef } from "react"

export function ElegantButton({
  children,
  onClick,
  className = "",
  fullWidth = false,
}: {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  fullWidth?: boolean
}) {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const createRipple = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const button = buttonRef.current
    if (!button) return

    const ripple = document.createElement("span")
    const rect = button.getBoundingClientRect()
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

    button.appendChild(ripple)
    ripple.addEventListener("animationend", () => ripple.remove())
  }

  return (
    <motion.button
      ref={buttonRef}
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.97, y: 0 }}
      onClick={(e) => {
        createRipple(e)
        onClick?.()
      }}
      className={`relative inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-white tracking-wide overflow-hidden shadow-md ${
        fullWidth ? "w-full" : ""
      } ${className}`}
    >
      {/* Soft halo */}
      <span className="absolute inset-0 rounded-full bg-white/10 blur-md opacity-60" />

      {/* Core background */}
      <span className="relative z-10 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-700 px-6 py-3 rounded-full shadow-inner">
        {children}
      </span>

      {/* Gentle sheen */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[sheen_3s_infinite]" />

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
    </motion.button>
  )
}