"use client";

import css from "./Waves.module.css";
import { useState, useEffect } from "react";

export const HeroWaves = () => {
  const [opacity, setOpacity] = useState(()=> 0);

  useEffect(() => {
    // On page load
    setOpacity(1 - window.scrollY / window.innerHeight);

    // Create bezier curve function for better opacity transition
    const onScroll = () => setOpacity(1 - window.scrollY / window.innerHeight);

    // Attach and clean event listener
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [])

  return (
    <div style={{ opacity: opacity }}  className="absolute duration-500 transition-opacity right-0 h-full w-[450px]">
      <div className="-rotate-12 origin-top-left h-full w-[200px]">
        <span className={css.wave}></span>
        <span className={css.wave}></span>
        <span className={css.wave}></span>
        <span className={css.wave}></span>
      </div>
    </div>
  );
};