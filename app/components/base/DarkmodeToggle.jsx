"use client"

import { useContext, useState } from "react";
import { useTheme } from 'next-themes'
import { FaMoon, FaSun } from "react-icons/fa";

export const DarkmodeToggle = ({ icon = false }) => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme == "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  return (
    <button
      aria-label="Toggle Theme Mode"
      type="button"
      className="flex items-center justify-center"
      onClick={() => toggleTheme()}
    >
      { icon ? ( theme  == "dark" ? <FaSun /> : <FaMoon /> ) : theme  == "dark" ? "Light" : "Dark" }
    </button>
  )
};