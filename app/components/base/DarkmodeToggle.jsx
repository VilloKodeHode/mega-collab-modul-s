"use client"

import { useContext, useState } from "react";
import UserContext from "../../context/User";
import { FaMoon, FaSun } from "react-icons/fa";

export const DarkmodeToggle = ({ icon = false }) => {
  const { dark, toggleDark } = useContext(UserContext);

  return (
    <button
      aria-label="Toggle Theme Mode"
      type="button"
      className="flex items-center justify-center"
      onClick={() => toggleDark(!dark)}
    >
      { icon ? ( dark ? <FaSun /> : <FaMoon /> ) : dark ? "Light" : "Dark" }
    </button>
  )
};