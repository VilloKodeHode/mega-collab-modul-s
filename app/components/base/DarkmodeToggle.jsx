"use client"

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes'
import { FaSpinner, FaRegMoon, FaSun } from "react-icons/fa";

export const DarkmodeToggle = ({ icon = false }) => {
  const [ mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme !== "dark") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button
      aria-label="Toggle Theme Mode"
      type="button"
      className="flex items-center justify-center h-full"
    >
      { icon ? <FaSpinner /> : "Loading" }
    </button>
    )
  }

  return (
    <button
      aria-label="Toggle Theme Mode"
      type="button"
      className="flex items-center justify-center h-full"
      onClick={() => toggleTheme()}
    >
      { icon ? ( theme !== "dark" ? <FaSun /> : <FaRegMoon /> ) : theme !== "dark" ? "Light" : "Dark" }
    </button>
  )
};