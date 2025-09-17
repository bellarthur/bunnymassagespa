"use client"

export function useScrollToSection() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return scrollToSection
}