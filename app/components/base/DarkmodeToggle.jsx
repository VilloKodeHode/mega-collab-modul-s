"use client"

import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export const DarkmodeToggle = ({icon = false}) => {
  const [ isDark, toggleDark ] = useState()

  const toggleHandler = () => {
    // Change mode
    toggleDark(!isDark)
  }

  return (
    <button
      aria-label="Toggle Theme Mode"
      type="button"
      className="flex items-center justify-center"
      onClick={() => toggleHandler()}
    >
      { icon && ( isDark && <FaSun /> || !isDark && <FaMoon /> ) || !icon && ( isDark && "Light" || !isDark && "Dark" ) }
    </button>
  )
};