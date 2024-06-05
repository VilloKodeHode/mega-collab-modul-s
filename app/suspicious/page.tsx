"use client"

import { useCallback, useEffect, useRef, useState } from "react";
import { Cena } from "./cena/Index";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D>(null);

  const render = () => {
    console.log("test")
  }

  render()

  return (
    <div ref={containerRef} className="w-full h-screen">
      <canvas ref={canvasRef}/>
      <Cena />
    </div>
  );
}
