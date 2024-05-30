"use client"

import { useCallback, useEffect, useRef, useState } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D>(null);

  const getRandomNumberBetween = (min:number, max:number):number => {
    return Math.floor(Math.random() * ( max - min + 1 ) + min)
  }

  useEffect(() => {
    // Define elements and containers on mount
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    // Verify mounting
    if (!container || !canvas || !context) throw new Error("Error in mounting canvas element");

    // Create new resize observer
    const resizeObserver = new ResizeObserver(() => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    })

    // Attach observer to main element, resizes canvas to parent element
    resizeObserver.observe(container);

    // Select random color
    const setColor = setInterval(() => {
      const colorList = ["03071E","370617", "6A040F", "9D0208", "D00000", "DC2F02", "E85D04", "F48C06", "FAA307", "FFBA08"]
      context.strokeStyle = `#${colorList[getRandomNumberBetween(0, colorList.length)]}`
    }, 2000)

    // Start animating on canvas
    const drawLine = setInterval(() => {
      context.beginPath();
      context.moveTo(getRandomNumberBetween(0, canvas.width), getRandomNumberBetween(0, canvas.height));
      context.lineTo(getRandomNumberBetween(0, canvas.width), getRandomNumberBetween(0, canvas.height));
      context.stroke();
    }, 10)

    // Remove listeners and observers
    return () => {
      resizeObserver.disconnect()
      clearInterval(drawLine)
      clearInterval(setColor)
    }
  }, [])

  return (
    <main ref={containerRef} className="flex-1">
      <canvas ref={canvasRef} ></canvas>
    </main>
  );
}
