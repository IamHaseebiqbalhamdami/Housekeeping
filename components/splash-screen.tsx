"use client"

import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"

interface SplashScreenProps {
  onComplete: () => void
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isComplete, setIsComplete] = useState(false)
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const garbageContainerRef = useRef(null)
  const vacuumRef = useRef(null)
  const suctionLineRef = useRef(null)
  const bucketRef = useRef(null)
  const overlayRef = useRef(null)

  // Individual letter refs for animation
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([])

  // Generate more realistic garbage spread across entire screen
  const garbageItems = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    type: Math.floor(Math.random() * 8),
    x: Math.random() * 95 + 2.5,
    y: Math.random() * 95 + 2.5,
    startY: -50 - Math.random() * 100,
    rotation: Math.random() * 360,
    size: Math.random() * 25 + 15,
    delay: Math.random() * 2,
  }))

  const getGarbageEmoji = (type: number) => {
    const emojis = ["🗑️", "🍕", "☕", "🥤", "🍔", "🧻", "🍎", "📄"]
    return emojis[type]
  }

  // Suction particles
  const suctionParticles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }))

  // Letter animation data - each letter comes from different direction
  const letterAnimations = [
    // HOUSEKEEPING
    { letter: "H", fromX: -200, fromY: 0, rotation: -45 },
    { letter: "O", fromX: 0, fromY: -200, rotation: 180 },
    { letter: "U", fromX: 200, fromY: -100, rotation: 90 },
    { letter: "S", fromX: -150, fromY: 150, rotation: -90 },
    { letter: "E", fromX: 300, fromY: 0, rotation: 45 },
    { letter: "K", fromX: 0, fromY: 200, rotation: -180 },
    { letter: "E", fromX: -250, fromY: -50, rotation: 135 },
    { letter: "E", fromX: 150, fromY: -150, rotation: -45 },
    { letter: "P", fromX: -100, fromY: 100, rotation: 90 },
    { letter: "I", fromX: 250, fromY: 50, rotation: -135 },
    { letter: "N", fromX: 0, fromY: -150, rotation: 270 },
    { letter: "G", fromX: -200, fromY: -100, rotation: 45 },
    // PRO
    { letter: "P", fromX: 300, fromY: 100, rotation: -90 },
    { letter: "R", fromX: -300, fromY: 0, rotation: 180 },
    { letter: "O", fromX: 0, fromY: 300, rotation: 45 },
  ]

  useEffect(() => {
    const tl = gsap.timeline()

    // Initial setup - hide everything
    gsap.set(subtitleRef.current, {
      opacity: 0,
      y: 50,
    })

    // Set up individual letters with their starting positions
    letterRefs.current.forEach((letterRef, index) => {
      if (letterRef && letterAnimations[index]) {
        gsap.set(letterRef, {
          x: letterAnimations[index].fromX,
          y: letterAnimations[index].fromY,
          rotation: letterAnimations[index].rotation,
          opacity: 0,
          scale: 0.5,
        })
      }
    })

    gsap.set(garbageContainerRef.current, { opacity: 0 })
    gsap.set(vacuumRef.current, { opacity: 0, x: "-30vw", y: "10vh" })
    gsap.set(suctionLineRef.current, { opacity: 0 })
    gsap.set(bucketRef.current, { opacity: 0 })
    gsap.set(overlayRef.current, { opacity: 0 })

    // Phase 1: Letters fly in from different directions and merge (2.5s)
    tl.to(letterRefs.current, {
      x: 0,
      y: 0,
      rotation: 0,
      opacity: 1,
      scale: 1,
      duration: 1.8,
      stagger: 0.1,
      ease: "back.out(1.7)",
    })

      // Phase 2: Subtitle appears
      .to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5",
      )

      // Phase 3: Garbage falls and spreads everywhere (2.5s)
      .to(
        garbageContainerRef.current,
        {
          opacity: 1,
          duration: 0.3,
        },
        "+=0.5",
      )
      .to(".garbage-item", {
        y: (i) => `${garbageItems[i].y}vh`,
        x: (i) => `${(garbageItems[i].x - 50) * 0.8}vw`,
        rotation: (i) => garbageItems[i].rotation,
        duration: 2,
        stagger: 0.08,
        ease: "bounce.out",
      })
      .to(
        overlayRef.current,
        {
          opacity: 0.4,
          duration: 1.5,
        },
        "-=1.5",
      )

      // Phase 4: Text gets dirty (NO MOVEMENT - just visual effects)
      .to([titleRef.current, subtitleRef.current], {
        filter: "brightness(0.3) saturate(0.2) blur(1px) contrast(0.5)",
        duration: 1,
        ease: "power2.out",
      })

      // Phase 5: Vacuum enters with realistic movement (2s)
      .to(
        vacuumRef.current,
        {
          opacity: 1,
          x: "5vw",
          duration: 1,
          ease: "power2.out",
        },
        "+=0.3",
      )
      .to(
        suctionLineRef.current,
        {
          opacity: 1,
          duration: 0.5,
        },
        "-=0.5",
      )

      // Phase 6: Vacuum moves and sucks garbage (3s)
      .to(vacuumRef.current, {
        x: "25vw",
        y: "20vh",
        rotation: 5,
        duration: 1.5,
        ease: "power2.inOut",
      })
      .to(
        ".garbage-item",
        {
          x: "20vw",
          y: "15vh",
          scale: 0.3,
          rotation: "+=720",
          duration: 1.2,
          stagger: 0.05,
          ease: "power3.in",
        },
        "-=1.2",
      )
      .to(
        bucketRef.current,
        {
          opacity: 1,
          scale: 1.1,
          duration: 0.8,
        },
        "-=1",
      )

      // Phase 7: Continue cleaning different areas
      .to(vacuumRef.current, {
        x: "60vw",
        y: "40vh",
        rotation: -3,
        duration: 1.5,
        ease: "power2.inOut",
      })
      .to(
        ".garbage-item",
        {
          opacity: 0,
          scale: 0,
          duration: 0.8,
          stagger: 0.03,
        },
        "-=1.2",
      )

      // Phase 8: Final cleaning and text restoration (2s)
      .to(
        overlayRef.current,
        {
          opacity: 0,
          duration: 1.2,
          ease: "power2.out",
        },
        "-=0.8",
      )
      .to([titleRef.current, subtitleRef.current], {
        filter: "brightness(1) saturate(1) blur(0px) contrast(1)",
        scale: 1.05,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
      })

      // Phase 9: Vacuum exits and final effects (1.5s)
      .to(
        vacuumRef.current,
        {
          x: "120vw",
          opacity: 0,
          duration: 1.2,
          ease: "power2.in",
        },
        "+=0.3",
      )
      .to([titleRef.current, subtitleRef.current], {
        y: -20,
        opacity: 0.8,
        duration: 0.8,
        ease: "power2.out",
      })
      .to([titleRef.current, subtitleRef.current], {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
      })
      .call(() => {
        setTimeout(() => {
          setIsComplete(true)
          onComplete()
        }, 1000)
      })

    return () => {
      tl.kill()
    }
  }, [onComplete])

  if (isComplete) return null

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100"
    >
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, #1e40af 1px, transparent 1px),
              radial-gradient(circle at 80% 80%, #374151 1px, transparent 1px),
              radial-gradient(circle at 40% 60%, #1e40af 0.5px, transparent 0.5px)
            `,
            backgroundSize: "60px 60px, 80px 80px, 40px 40px",
          }}
        />
      </div>

      {/* Dirt Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 opacity-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 15% 25%, rgba(101, 67, 33, 0.4) 0%, transparent 30%),
            radial-gradient(circle at 85% 35%, rgba(139, 69, 19, 0.4) 0%, transparent 25%),
            radial-gradient(circle at 45% 75%, rgba(160, 82, 45, 0.4) 0%, transparent 35%),
            radial-gradient(circle at 75% 15%, rgba(85, 107, 47, 0.4) 0%, transparent 20%),
            radial-gradient(circle at 25% 85%, rgba(205, 133, 63, 0.4) 0%, transparent 30%),
            radial-gradient(circle at 65% 55%, rgba(139, 69, 19, 0.3) 0%, transparent 25%)
          `,
          filter: "blur(3px)",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        {/* Company Title with Individual Letter Animation */}
        <div ref={titleRef} className="text-center mb-4 sm:mb-6">
          <div className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none">
            {/* HOUSEKEEPING */}
            <div className="mb-2">
              {["H", "O", "U", "S", "E", "K", "E", "E", "P", "I", "N", "G"].map((letter, index) => (
                <span
                  key={`housekeeping-${index}`}
                  ref={(el) => {
                    letterRefs.current[index] = el
                  }}
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-blue-800 to-slate-700"
                  style={{ transformOrigin: "center center" }}
                >
                  {letter}
                </span>
              ))}
            </div>
            {/* PRO */}
            <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wider">
              {["P", "R", "O"].map((letter, index) => (
                <span
                  key={`pro-${index}`}
                  ref={(el) => {
                    letterRefs.current[12 + index] = el
                  }}
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-slate-600 to-blue-800 mx-1"
                  style={{ transformOrigin: "center center" }}
                >
                  {letter}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <div ref={subtitleRef} className="text-center">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-600 font-light tracking-wide mb-4">
            Professional Cleaning Excellence
          </p>
          <div className="flex items-center justify-center space-x-3 text-sm sm:text-base text-slate-500">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
              <span>Premium Service</span>
            </div>
            <span>•</span>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-slate-600 rounded-full animate-pulse"></div>
              <span>Trusted Professionals</span>
            </div>
          </div>
        </div>
      </div>

      {/* Garbage Items */}
      <div ref={garbageContainerRef} className="absolute inset-0 opacity-0 pointer-events-none">
        {garbageItems.map((item) => (
          <div
            key={item.id}
            className="garbage-item absolute drop-shadow-xl"
            style={{
              left: `${item.x}%`,
              top: `${item.startY}px`,
              fontSize: `${Math.max(item.size, 18)}px`,
              filter: "drop-shadow(3px 3px 6px rgba(0,0,0,0.4))",
              zIndex: 20,
            }}
          >
            {getGarbageEmoji(item.type)}
          </div>
        ))}
      </div>

      {/* Professional Vacuum System */}
      <div
        ref={vacuumRef}
        className="absolute opacity-0 pointer-events-none"
        style={{
          left: "-30vw",
          top: "10vh",
          zIndex: 30,
        }}
      >
        <div className="relative">
          {/* Main Vacuum Body */}
          <div className="w-32 h-20 sm:w-40 sm:h-24 md:w-48 md:h-28">
            <svg viewBox="0 0 240 140" className="w-full h-full drop-shadow-2xl">
              <defs>
                <linearGradient id="vacuumBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#64748b" />
                  <stop offset="30%" stopColor="#475569" />
                  <stop offset="70%" stopColor="#334155" />
                  <stop offset="100%" stopColor="#1e293b" />
                </linearGradient>
                <linearGradient id="bucketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#e2e8f0" />
                  <stop offset="50%" stopColor="#cbd5e1" />
                  <stop offset="100%" stopColor="#94a3b8" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Main Body */}
              <ellipse cx="120" cy="80" rx="80" ry="45" fill="url(#vacuumBodyGrad)" stroke="#1e293b" strokeWidth="3" />

              {/* Dust Collection Bucket */}
              <rect
                x="40"
                y="50"
                width="60"
                height="60"
                rx="8"
                fill="url(#bucketGrad)"
                stroke="#64748b"
                strokeWidth="2"
              />

              {/* Handle */}
              <rect x="180" y="45" width="12" height="70" rx="6" fill="#475569" stroke="#334155" strokeWidth="2" />

              {/* Flexible Hose */}
              <path
                d="M200 70 Q220 55 235 35 Q240 30 245 25"
                stroke="#64748b"
                strokeWidth="12"
                fill="none"
                strokeLinecap="round"
              />

              {/* Suction Nozzle */}
              <ellipse cx="245" cy="25" rx="20" ry="10" fill="#334155" stroke="#1e293b" strokeWidth="2" />

              {/* Wheels */}
              <circle cx="80" cy="115" r="18" fill="#475569" stroke="#1e293b" strokeWidth="3" />
              <circle cx="160" cy="115" r="18" fill="#475569" stroke="#1e293b" strokeWidth="3" />

              {/* Power Indicator */}
              <circle cx="140" cy="65" r="6" fill="#22c55e" filter="url(#glow)">
                <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" />
              </circle>

              {/* Brand Logo */}
              <text x="120" y="85" fontFamily="Arial" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">
                PRO
              </text>
            </svg>
          </div>

          {/* Suction Effect Visualization */}
          <div
            ref={suctionLineRef}
            className="absolute opacity-0"
            style={{ top: "-10px", right: "-20px", width: "100px", height: "60px" }}
          >
            {/* Suction Lines */}
            {Array.from({ length: 15 }, (_, i) => (
              <div
                key={i}
                className="absolute w-1 h-8 bg-gradient-to-t from-blue-400 to-transparent rounded-full animate-pulse"
                style={{
                  left: `${i * 6}px`,
                  top: `${Math.sin(i * 0.5) * 10 + 20}px`,
                  animationDelay: `${i * 100}ms`,
                  opacity: 0.7 - i * 0.04,
                  transform: `rotate(${-15 + i * 2}deg)`,
                }}
              />
            ))}

            {/* Particle Stream */}
            {suctionParticles.slice(0, 20).map((particle, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-amber-600 rounded-full animate-ping"
                style={{
                  left: `${particle.x * 0.8}px`,
                  top: `${particle.y * 0.4}px`,
                  animationDelay: `${i * 50}ms`,
                  opacity: 0.8 - i * 0.03,
                }}
              />
            ))}
          </div>

          {/* Collection Bucket Indicator */}
          <div
            ref={bucketRef}
            className="absolute opacity-0 -top-4 left-8 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-slate-200 to-slate-400 rounded-lg border-2 border-slate-500 flex items-center justify-center"
          >
            <div className="text-xs sm:text-sm animate-bounce">🗑️</div>
          </div>
        </div>
      </div>

      {/* Loading Status */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="bg-white/90 backdrop-blur-md rounded-full px-6 sm:px-8 py-3 sm:py-4 shadow-xl border border-slate-200/50">
          <div className="flex items-center space-x-3 text-slate-700">
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
            <span className="text-sm sm:text-base font-medium">Initializing cleaning system...</span>
          </div>
        </div>
      </div>
    </div>
  )
}
