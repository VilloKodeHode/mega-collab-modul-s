"use client"

import { useEffect, useRef } from "react";

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const effectRef = useRef<Effect>()

  class Particle {
    effect: Effect;
    x: number;
    y: number;
    radius: number;
    vx: number;
    vy: number;

    constructor (effect: Effect) {
      this.effect = effect
      this.x = Math.floor(Math.random() * effect.canvas.width)
      this.y = Math.floor(Math.random() * effect.canvas.height)
      this.radius = Math.floor(Math.random() * 50 + 5)
      this.vx = Math.random() * 2 - 1
      this.vy = Math.random() * 2 - 1
    }

    draw(context: CanvasRenderingContext2D) {
      context.fillStyle = `hsl(${this.y/(context.canvas.height/90)+100}, 64%, 24%)`
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      context.fill();
    }

    update() {
      this.x += this.vx
      if (this.x > this.effect.width || this.x < 0) this.vx *= -1

      this.y += this.vy
      if (this.y > this.effect.height || this.y < 0) this.vy *= -1
    }
  }

  class Effect {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D|null;
    width: number;
    height: number;
    particleArray: Particle[];
    particleCount: number;

    constructor (canvas: HTMLCanvasElement) {
      this.canvas = canvas
      this.context = canvas.getContext('2d')
      this.width = canvas.width
      this.height = canvas.height
      this.particleArray = []
      this.particleCount = 500;
      this.createParticles();
    }

    createParticles() {
      for (let i = 0; i < this.particleCount; i++) {
        this.particleArray.push(new Particle(this))
      }
    }

    handleParticles(context: CanvasRenderingContext2D) {
      this.particleArray.forEach( particle => {
        particle.draw(context)
        particle.update()
      })
    }

    clearParticles() {
      // Comment out to get trails
      this.context?.clearRect(0, 0, this.width, this.height)
    }
  }

  useEffect(() => {
    // Resize event action
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    }

    // Run once
    handleResize()

    // Listen for window resize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    render()
  })

  const render = () => {
    // Only run if canvas element is in refference
    if (!canvasRef.current) return

    // Makes sure that canvas width or height is not 0
    if (window.innerWidth && window.innerHeight) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
    }

    // Assign context
    contextRef.current = canvasRef.current.getContext('2d');

    // Create effect
    effectRef.current = new Effect(canvasRef.current);

    // Start animation
    animate()
  }

  const animate = () => {
    if (!effectRef.current || !contextRef.current) return

    // Clear previous frame
    effectRef.current.clearParticles();

    // Call handleParticle on effect
    effectRef.current.handleParticles(contextRef.current);

    // requestAnimationFrame(animate)
    setTimeout(() => {
      animate()
    }, 25)
  }

  return <canvas className="blur-xl" ref={canvasRef}/>;
}
// w-full relative blur-xl pointer-events-none -ml-24 -mt-24