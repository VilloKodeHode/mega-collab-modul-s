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
      transition
      ease-in-out
      duration-500
      ${!top && `bg-gradient-to-b from-primary from-50% dark:from-primary-dark`}
    `}>

    </div>
  )
}