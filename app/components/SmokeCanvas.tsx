'use client'
import { useEffect, useRef } from 'react'

export default function SmokeCanvas({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let animId: number

    function resize() {
      canvas!.width = canvas!.offsetWidth
      canvas!.height = canvas!.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Fluid smoke paths — matching the original Framer site
    class SmokeBlob {
      x = 0; y = 0; vx = 0; vy = 0
      size = 0; alpha = 0; maxAlpha = 0
      life = 0; maxLife = 0; angle = 0; angleSpeed = 0

      constructor(W: number, H: number) {
        this.reset(W, H)
        this.life = Math.random() * this.maxLife
        this.alpha = Math.random() * this.maxAlpha * 0.5
      }

      reset(W: number, H: number) {
        // Spawn along center-left like the original
        this.x = W * (0.1 + Math.random() * 0.5)
        this.y = H * (0.4 + Math.random() * 0.35)
        this.vx = (Math.random() - 0.3) * 0.6
        this.vy = -(0.15 + Math.random() * 0.35)
        this.size = 120 + Math.random() * 200
        this.alpha = 0
        this.maxAlpha = 0.07 + Math.random() * 0.09
        this.life = 0
        this.maxLife = 500 + Math.random() * 400
        this.angle = Math.random() * Math.PI * 2
        this.angleSpeed = (Math.random() - 0.5) * 0.006
      }

      update(W: number, H: number) {
        this.life++
        this.angle += this.angleSpeed
        this.x += this.vx + Math.sin(this.angle) * 0.5
        this.y += this.vy
        this.vx += (Math.random() - 0.5) * 0.015
        this.size += 0.15

        const t = this.life / this.maxLife
        if (t < 0.15) {
          this.alpha = this.maxAlpha * (t / 0.15)
        } else {
          this.alpha = this.maxAlpha * (1 - (t - 0.15) / 0.85)
        }

        if (this.life >= this.maxLife) this.reset(W, H)
      }

      draw(ctx: CanvasRenderingContext2D) {
        const g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size)
        g.addColorStop(0, `rgba(255,255,255,${this.alpha})`)
        g.addColorStop(0.4, `rgba(255,255,255,${this.alpha * 0.4})`)
        g.addColorStop(1, 'rgba(255,255,255,0)')
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const blobs = Array.from({ length: 22 }, () => new SmokeBlob(canvas.width, canvas.height))

    function loop() {
      const W = canvas!.width, H = canvas!.height
      ctx.clearRect(0, 0, W, H)
      blobs.forEach(b => { b.update(W, H); b.draw(ctx) })
      animId = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  )
}
