"use client"

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes'
import { FaSpinner, FaLaptopCode, FaRegMoon, FaSun } from "react-icons/fa";

export const DarkmodeToggle = ({ icon = false }) => {
  const [ mounted, setMounted] = useState(false)
  const { theme, themes, resolvedTheme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(themes.indexOf(theme) < themes.length - 1 ? themes[themes.indexOf(theme) + 1] : themes[0])
  }

  useEffect(() => {
    setMounted(true)
  }, [resolvedTheme])

  if (!mounted) {
    return (
      <button
        aria-label="Toggle Theme Mode"
        type="button"
        className="flex items-center justify-center h-full p-2 text-white bg-element-secondary rounded"
      >
        { icon ? <FaSpinner /> : "Loading" }
      </button>
    )
  }

  return (
    <button
      aria-label="Toggle Theme Mode"
      type="button"
      className="flex items-center justify-center h-full p-2 text-white bg-element-secondary rounded"
      onClick={() => toggleTheme()}
    >
      { theme === "dark" && ( icon ? <FaRegMoon /> : "Dark" ) }
      { theme === "light" && ( icon ? <FaSun /> : "Light" ) }
      { theme === "system" && ( icon ? <FaLaptopCode /> : "System" ) }
    </button>
  );
};