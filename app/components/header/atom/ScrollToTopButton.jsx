"use client";
import { animateScroll } from "react-scroll";
import { useState, useEffect } from "react";
import Image from "next/image";

export function BtnScroll() {
  const [visible, setVisible] = useState(false);

  const btnVisibility = () => {
    if (window.scrollY > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", btnVisibility);
    return () => {
      window.removeEventListener("scroll", btnVisibility);
    };
  }, []);

  const options = {
    duration: 300,
    smooth: true,
  };
  const scrollingToTop = () => {
    animateScroll.scrollToTop(options);
  };

  return (
    visible && (
      <button
        onClick={scrollingToTop}
        className="p-5 bg-grey-400 backdrop-filter backdrop-blur-md bg-opacity-10 rounded-full shadow-md"
      >
        <Image
          src="/images/arrow-up.svg"
          alt="the arrow icon, button to scroll up"
          width={35}
          height={35}
        />
      </button>
    )
  );
}
