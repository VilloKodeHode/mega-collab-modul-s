"use client"

import { useEffect, useState } from "react";

export const HeaderBackdrop = () => {
  const [ top, setTop ] = useState(true)

  useEffect(() => {
    const scrollHandler = () => window.scrollY > 10 ? setTop(false) : setTop(true)

    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])
  return (
    <div className={`
      fixed
      top-0
      left-0
      w-full
      h-24
      -z-[1]

      pointer-events-none

      bg-gradient-to-b
      from-30%
      from-background
      dark:from-background-dark

      transition-opacity
      ease-in-out
      duration-500

      opacity-0

      ${!top && `opacity-100`}
    `}>

    </div>
  )
}