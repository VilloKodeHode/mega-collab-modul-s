"use client"

import { useEffect, useState } from "react";
import { HeroText } from "./Text";
import { HeroWaves } from "./Waves";

/*
Note to self:
Instead of cutting content at the end of hero Container, let wave effect continue with overflow:visible
Let wave effect naturally end offscreen to the right instead of cutting out in the middle
Watch out for z-index

Alternatively, continue with above, but add an eventlistener to scroll and change opacity based on scrollX.
Opacity should reach 0 when other element is x% from top?
*/

export const HeroContainer = () => {
  const [ offset, setOffset ] = useState(1)

  useEffect(() => {
    const onScroll = () => setOffset(1 - window.scrollY / window.innerHeight)

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div id="hero-container" className={`w-svw h-svh relative -top-24 flex justify-around items-center`} style={{ opacity: offset }} >
      <HeroText>
        Lots of text introducing people to the page. { offset.toFixed(2) }
      </HeroText>
      <HeroWaves />
    </div>
  );
};