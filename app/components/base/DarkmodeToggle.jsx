"use client"

import { useContext, useState } from "react";
import UserContext from "../../context/User";
import { FaMoon, FaSun } from "react-icons/fa";

export const DarkmodeToggle = ({ icon = false }) => {
  const { darkmode, toggleDark } = useContext(UserContext);

  return (
    <button
      aria-label="Toggle Theme Mode"
      type="button"
      className="flex items-center justify-center"
      onClick={() => toggleDark(!darkmode)}
    >
      { icon ? ( darkmode ? <FaSun /> : <FaMoon /> ) : darkmode ? "Light" : "Dark" }
    </button>
  )
};