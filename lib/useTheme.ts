"use client"

import { useState, useEffect } from "react"

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("dark")

  useEffect(() => {
    // Check localStorage or system preference
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const initialTheme = savedTheme ? (savedTheme as "light" | "dark") : prefersDark ? "dark" : "light"
    setTheme(initialTheme)
    document.documentElement.classList.toggle("dark", initialTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
    localStorage.setItem("theme", newTheme)
  }

  return { theme, toggleTheme }
}