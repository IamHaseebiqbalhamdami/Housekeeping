import React, { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"

interface SplashScreenProps {
  onComplete: () => void
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isComplete, setIsComplete] = useState(false)
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const garbageContainerRef = useRef(null)
  const vacuumRef = useRef(null)
  const dirtOverlayRef = useRef(null)

  // Generate visible garbage pieces
  const garbageItems = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    type: Math.floor(Math.random() * 4),
    x: Math.random() * 80 + 10,
    startY: -30,
    endY: Math.random() * 60 + 30,
    rotation: Math.random() * 360,
    size: Math.random() * 20 + 25
  }))

  const getGarbageEmoji = (type: number) => {
    const emojis = ["🗑️", "🍕", "☕", "🥤"]
    return emojis[type]
  }

  useEffect(() => {
    const tl = gsap.timeline()

    // Initial setup
    gsap.set([titleRef.current, garbageContainerRef.current, vacuumRef.current, dirtOverlayRef.current], {
      opacity: 0
    })

    // Phase 1: Clean logo appears (1s)
    tl.to(titleRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "back.out(1.7)"
    })

    // Phase 2: Garbage falls and makes text dirty (2s)
    .to(garbageContainerRef.current, {
      opacity: 1,
      duration: 0.2
    }, "+=0.3")
    .to(".garbage-item", {
      y: (i) => garbageItems[i].endY + "vh",
      rotation: (i) => garbageItems[i].rotation,
      duration: 1.5,
      stagger: 0.08,
      ease: "bounce.out"
    })
    .to(dirtOverlayRef.current, {
      opacity: 0.6,
      duration: 0.8,
      ease: "power2.out"
    }, "-=1")
    .to(titleRef.current, {
      filter: "brightness(0.5) saturate(0.3) contrast(0.7)",
      duration: 0.8,
    }, "-=0.8")

    // Phase 3: Vacuum enters and cleans (3s)
    .to(vacuumRef.current, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "+=0.3")
    .to(vacuumRef.current, {
      x: "40vw",
      y: "-10vh",
      rotation: 10,
      duration: 1.5,
      ease: "power2.inOut"
    })
    .to(".garbage-item", {
      scale: 0,
      x: "20vw",
      y: "-20vh",
      rotation: "+=360",
      opacity: 0,
      duration: 1,
      stagger: 0.03,
      ease: "power3.in"
    }, "-=1.2")

    // Phase 4: Clean up and finish (1.5s)
    .to(dirtOverlayRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.8")
    .to(titleRef.current, {
      filter: "brightness(1) saturate(1) contrast(1)",
      scale: 1.1,
      duration: 1,
      ease: "power2.out"
    }, "-=1")
    .to(vacuumRef.current, {
      x: "100vw",
      opacity: 0,
      duration: 1,
      ease: "power2.in"
    }, "-=0.5")

    .call(() => {
      setTimeout(() => {
        setIsComplete(true)
        onComplete()
      }, 500)
    })

    return () => {
      tl.kill()
    }
  }, [onComplete])

  if (isComplete) return null

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-50 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-black"
    >
      {/* Main Content Container */}
      <div className="relative z-10 flex items-center justify-center h-full">
        {/* Company Title */}
        <div ref={titleRef} className="text-center opacity-0">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent drop-shadow-2xl">
              HouseKeeping
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-300 via-white to-blue-300 bg-clip-text text-transparent drop-shadow-2xl">
              PRO
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide">
            Professional Cleaning Services
          </p>
        </div>

        {/* Dirt Overlay */}
        <div 
          ref={dirtOverlayRef}
          className="absolute inset-0 opacity-0"
          style={{
            background: `
              radial-gradient(circle at 25% 30%, rgba(139, 69, 19, 0.4) 0%, transparent 35%),
              radial-gradient(circle at 70% 45%, rgba(85, 107, 47, 0.4) 0%, transparent 30%),
              radial-gradient(circle at 45% 65%, rgba(160, 82, 45, 0.4) 0%, transparent 40%),
              radial-gradient(circle at 80% 25%, rgba(205, 133, 63, 0.4) 0%, transparent 25%),
              radial-gradient(circle at 20% 75%, rgba(101, 67, 33, 0.4) 0%, transparent 35%)
            `,
            filter: "blur(3px)"
          }}
        />
      </div>

      {/* Large Visible Garbage */}
      <div ref={garbageContainerRef} className="absolute inset-0 opacity-0">
        {garbageItems.map((item) => (
          <div
            key={item.id}
            className="garbage-item absolute text-4xl md:text-5xl drop-shadow-lg"
            style={{
              left: `${item.x}%`,
              top: `${item.startY}vh`,
              fontSize: `${item.size}px`,
              filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.8))"
            }}
          >
            {getGarbageEmoji(item.type)}
          </div>
        ))}
      </div>

      {/* Real Vacuum Image */}
      <div 
        ref={vacuumRef}
        className="absolute opacity-0"
        style={{ 
          left: "-20vw", 
          top: "55vh",
          transform: "translateY(-50%)"
        }}
      >
        <div className="relative">
          {/* Using a data URL for a realistic vacuum cleaner */}
          <img 
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 120'%3E%3Cdefs%3E%3ClinearGradient id='body' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23374151'/%3E%3Cstop offset='50%25' stop-color='%231f2937'/%3E%3Cstop offset='100%25' stop-color='%23111827'/%3E%3C/linearGradient%3E%3ClinearGradient id='hose' x1='0%25' y1='0%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' stop-color='%234a5568'/%3E%3Cstop offset='100%25' stop-color='%232d3748'/%3E%3C/linearGradient%3E%3C/defs%3E%3C!-- Main Body --%3E%3Cellipse cx='100' cy='70' rx='60' ry='35' fill='url(%23body)' stroke='%23111' stroke-width='2'/%3E%3C!-- Handle --%3E%3Crect x='140' y='45' width='8' height='50' rx='4' fill='%23374151'/%3E%3C!-- Hose --%3E%3Cpath d='M160 60 Q180 50 190 35' stroke='url(%23hose)' stroke-width='8' fill='none' stroke-linecap='round'/%3E%3C!-- Nozzle --%3E%3Cellipse cx='190' cy='35' rx='15' ry='6' fill='%231f2937'/%3E%3C!-- Wheels --%3E%3Ccircle cx='75' cy='95' r='12' fill='%23374151' stroke='%23111' stroke-width='2'/%3E%3Ccircle cx='125' cy='95' r='12' fill='%23374151' stroke='%23111' stroke-width='2'/%3E%3C!-- Power Light --%3E%3Ccircle cx='120' cy='55' r='4' fill='%23ef4444'%3E%3Canimate attributeName='opacity' values='0.3;1;0.3' dur='1s' repeatCount='indefinite'/%3E%3C/circle%3E%3C!-- Brand --%3E%3Ctext x='100' y='75' font-family='Arial' font-size='12' font-weight='bold' fill='white' text-anchor='middle'%3EPRO%3C/text%3E%3C/svg%3E"
            alt="Vacuum Cleaner"
            className="w-32 h-20 md:w-40 md:h-24"
            style={{
              filter: "drop-shadow(4px 4px 12px rgba(0,0,0,0.5))"
            }}
          />
          
          {/* Suction Effect */}
          <div className="absolute -top-4 right-2">
            {Array.from({ length: 8 }, (_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-blue-400 rounded-full animate-ping"
                style={{
                  left: `${-i * 4}px`,
                  top: `${-i * 2}px`,
                  animationDelay: `${i * 80}ms`,
                  opacity: 0.7 - i * 0.08,
                  transform: `scale(${1 - i * 0.1})`
                }}
              />
            ))}
          </div>

          {/* Dust particles being sucked */}
          <div className="absolute -top-8 right-0">
            {Array.from({ length: 12 }, (_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-amber-600 rounded-full animate-pulse"
                style={{
                  left: `${-i * 6 - Math.random() * 20}px`,
                  top: `${-i * 3 + Math.random() * 10}px`,
                  animationDelay: `${i * 100}ms`,
                  opacity: 0.6 - i * 0.04
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Simple completion message */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-white/80 text-lg">
          ✨ Ready to serve you! ✨
        </div>
      </div>
    </div>
  )
}