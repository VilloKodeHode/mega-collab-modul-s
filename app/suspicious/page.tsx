"use client"

import { useCallback, useEffect, useRef, useState } from "react";

export default function Home() {
  const [ height, setHeight ] = useState<number>(0);
  const [ width, setWidth ] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D>(null);

  const getRandomBetween = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  const getRandomColor = () => {
    const colorList = ["asd",123123,1231231241]
    const color = colorList[getRandomBetween(0, colorList.length)]
    return `#${color}`
  }

  const drawLine = () => {

  }


  useEffect(() => {
    // Get parent element size
    if (containerRef.current) {
      setHeight(containerRef.current.clientHeight)
      setWidth(containerRef.current.clientWidth)
    }

    // Resize canvas to parrent element size
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.height = height;
      canvas.width = width;
    }

    // Create context for drawing on canvas
    const context = canvas?.getContext('2d')
    if (!context) return

    const draw = setInterval(()=>{
      context.beginPath();
      context.moveTo(getRandomBetween(0, width), getRandomBetween(0, height));
      context.lineTo(getRandomBetween(0, width), getRandomBetween(0, height));
      context.stroke();
    }, 1)

    const recolor = setInterval(()=>{
      const colorList = ["03071E","370617", "6A040F", "9D0208", "D00000", "DC2F02", "E85D04", "F48C06", "FAA307", "FFBA08"]
      context.strokeStyle = `#${colorList[getRandomBetween(0, colorList.length)]}`
    }, 1000)

  }, [height, width])

  return (
    <main ref={containerRef} className="min-h-svh">
      <canvas ref={canvasRef} ></canvas>
    </main>
  );
}
