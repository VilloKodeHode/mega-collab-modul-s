"use client"
import { useEffect, useRef } from "react";
import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/dracula.css';
import Concepts from "./slides/concepts";
import SlideConcepts from "./slides/concepts";
import SlideArchitecture from "./slides/architecture";
import SlideManagement from "./slides/management";
import Link from "next/link";

export default function Home() {
  const deckDivRef = useRef<HTMLDivElement>(null); // reference to deck container div
  const deckRef = useRef<Reveal.Api | null>(null); // reference to deck reveal instance

  useEffect(() => {
    // Prevents double initialization in strict mode
    if (deckRef.current) return;

    deckRef.current = new Reveal(deckDivRef.current!, {
      transition: "fade",
      // other config options
    });

    deckRef.current.initialize().then(() => {
      // good place for event handlers and plugin setups
    });

    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy();
          deckRef.current = null;
        }
      } catch (e) {
        console.warn("Reveal.js destroy call failed.");
      }
    };
  }, []);

  return (
    <div className="reveal" ref={deckDivRef}>
      <div className="slides">
        <section>
          <h1>AZ-900</h1>
          <h3>Microsoft Azure Fundamentals</h3>
          <p>Notes from <Link href={'https://learn.microsoft.com/en-us/training/courses/az-900t00'}>Azure certification course az-900</Link></p>
        </section>
        <SlideConcepts />
        <SlideArchitecture />
        <SlideManagement />
      </div>
    </div>
  );
}
