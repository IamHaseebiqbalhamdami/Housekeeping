"use client"

import { useState, useEffect, useRef, type FC } from "react"
import { gsap } from "gsap"

// Types
interface GarbageItem {
  id: number
  type: number
  x: number
  y: number
  startY: number
  rotation: number
  size: number
  delay: number
}

interface SuctionParticle {
  id: number
  x: number
  y: number
}

interface LetterAnimation {
  letter: string
  fromX: number
  fromY: number
  rotation: number
  mobileFromX?: number
  mobileFromY?: number
}

interface SplashScreenProps {
  onComplete: () => void
}

type GarbageEmoji = "🗑️" | "🍕" | "☕" | "🥤" | "🍔" | "🧻" | "🍎" | "📄"

// Constants
const GARBAGE_EMOJIS: readonly GarbageEmoji[] = ["🗑️", "🍕", "☕", "🥤", "🍔", "🧻", "🍎", "📄"] as const

const LETTER_ANIMATIONS: readonly LetterAnimation[] = [
  // HOUSEKEEPING - Mobile optimized positions
  { letter: "H", fromX: -150, fromY: 0, rotation: -30, mobileFromX: -80, mobileFromY: 0 },
  { letter: "O", fromX: 0, fromY: -150, rotation: 180, mobileFromX: 0, mobileFromY: -100 },
  { letter: "U", fromX: 150, fromY: -80, rotation: 60, mobileFromX: 80, mobileFromY: -60 },
  { letter: "S", fromX: -100, fromY: 100, rotation: -60, mobileFromX: -60, mobileFromY: 80 },
  { letter: "E", fromX: 200, fromY: 0, rotation: 30, mobileFromX: 100, mobileFromY: 0 },
  { letter: "K", fromX: 0, fromY: 150, rotation: -120, mobileFromX: 0, mobileFromY: 100 },
  { letter: "E", fromX: -180, fromY: -40, rotation: 90, mobileFromX: -90, mobileFromY: -30 },
  { letter: "E", fromX: 120, fromY: -120, rotation: -30, mobileFromX: 70, mobileFromY: -80 },
  { letter: "P", fromX: -80, fromY: 80, rotation: 60, mobileFromX: -50, mobileFromY: 60 },
  { letter: "I", fromX: 180, fromY: 40, rotation: -90, mobileFromX: 90, mobileFromY: 30 },
  { letter: "N", fromX: 0, fromY: -100, rotation: 180, mobileFromX: 0, mobileFromY: -70 },
  { letter: "G", fromX: -150, fromY: -80, rotation: 30, mobileFromX: -80, mobileFromY: -50 },
  // PRO - Mobile optimized
  { letter: "P", fromX: 200, fromY: 80, rotation: -60, mobileFromX: 100, mobileFromY: 60 },
  { letter: "R", fromX: -200, fromY: 0, rotation: 120, mobileFromX: -100, mobileFromY: 0 },
  { letter: "O", fromX: 0, fromY: 200, rotation: 30, mobileFromX: 0, mobileFromY: 120 },
] as const

const ANIMATION_CONFIG = {
  GARBAGE_COUNT: 20,
  SUCTION_PARTICLES_COUNT: 20,
  SUCTION_LINES_COUNT: 10,
} as const

const TIMING_CONFIG = {
  LETTER_CONVERGENCE: 2.2,
  SUBTITLE_APPEAR: 1.0,
  GARBAGE_FALL: 2.2,
  DIRT_OVERLAY: 1.8,
  TEXT_DIRTY: 1.2,
  VACUUM_ENTER: 1.2,
  VACUUM_CLEAN: 1.8,
  TEXT_RESTORE: 1.8,
  VACUUM_EXIT: 1.5,
  FINAL_ANIMATION: 1.0,
} as const

// Utility Functions
const isMobile = (): boolean => {
  if (typeof window === "undefined") return false
  return window.innerWidth < 768
}

const generateGarbageItems = (): GarbageItem[] => {
  const isMobileDevice = isMobile()
  const count = isMobileDevice ? 15 : ANIMATION_CONFIG.GARBAGE_COUNT

  return Array.from(
    { length: count },
    (_, i): GarbageItem => ({
      id: i,
      type: Math.floor(Math.random() * GARBAGE_EMOJIS.length),
      x: Math.random() * 90 + 5,
      y: Math.random() * 85 + 10,
      startY: -30 - Math.random() * 50,
      rotation: Math.random() * 360,
      size: isMobileDevice ? Math.random() * 15 + 12 : Math.random() * 20 + 15,
      delay: Math.random() * 1.5,
    }),
  )
}

const generateSuctionParticles = (): SuctionParticle[] => {
  const count = isMobile() ? 15 : ANIMATION_CONFIG.SUCTION_PARTICLES_COUNT

  return Array.from(
    { length: count },
    (_, i): SuctionParticle => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }),
  )
}

const getGarbageEmoji = (type: number): GarbageEmoji => {
  return GARBAGE_EMOJIS[type] || GARBAGE_EMOJIS[0]
}

const createLetterRef = (index: number): string => {
  return index < 12 ? `housekeeping-${index}` : `pro-${index - 12}`
}

// Vacuum SVG Component
const VacuumSVG: FC<{ className?: string }> = ({ className = "w-full h-full drop-shadow-lg" }) => {
  return (
    <svg viewBox="0 0 200 120" className={className}>
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
      </defs>

      {/* Main Body */}
      <ellipse cx="100" cy="70" rx="60" ry="35" fill="url(#vacuumBodyGrad)" stroke="#1e293b" strokeWidth="2" />

      {/* Dust Collection Bucket */}
      <rect x="50" y="45" width="40" height="50" rx="6" fill="url(#bucketGrad)" stroke="#64748b" strokeWidth="1.5" />

      {/* Handle */}
      <rect x="140" y="40" width="8" height="60" rx="4" fill="#475569" stroke="#334155" strokeWidth="1.5" />

      {/* Flexible Hose */}
      <path d="M155 65 Q175 50 185 30" stroke="#64748b" strokeWidth="8" fill="none" strokeLinecap="round" />

      {/* Suction Nozzle */}
      <ellipse cx="185" cy="30" rx="15" ry="8" fill="#334155" stroke="#1e293b" strokeWidth="1.5" />

      {/* Wheels */}
      <circle cx="75" cy="95" r="12" fill="#475569" stroke="#1e293b" strokeWidth="2" />
      <circle cx="125" cy="95" r="12" fill="#475569" stroke="#1e293b" strokeWidth="2" />

      {/* Power Indicator */}
      <circle cx="120" cy="55" r="4" fill="#22c55e">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" />
      </circle>

      {/* Brand Logo */}
      <text x="100" y="75" fontFamily="Arial" fontSize="12" fontWeight="bold" fill="white" textAnchor="middle">
        PRO
      </text>
    </svg>
  )
}

// Suction Effects Component
const SuctionEffects: FC<{ particles: SuctionParticle[]; className?: string }> = ({
  particles,
  className = "absolute opacity-0",
}) => {
  return (
    <div className={className} style={{ top: "-8px", right: "-15px", width: "80px", height: "50px" }}>
      {/* Suction Lines */}
      {Array.from({ length: ANIMATION_CONFIG.SUCTION_LINES_COUNT }, (_, i: number) => (
        <div
          key={`suction-line-${i}`}
          className="absolute w-0.5 h-6 bg-gradient-to-t from-blue-400 to-transparent rounded-full animate-pulse"
          style={{
            left: `${i * 4}px`,
            top: `${Math.sin(i * 0.5) * 8 + 15}px`,
            animationDelay: `${i * 80}ms`,
            opacity: 0.6 - i * 0.05,
            transform: `rotate(${-10 + i * 1.5}deg)`,
          }}
        />
      ))}

      {/* Particle Stream */}
      {particles.slice(0, 12).map((particle: SuctionParticle, i: number) => (
        <div
          key={`particle-${particle.id}`}
          className="absolute w-0.5 h-0.5 bg-amber-600 rounded-full animate-ping"
          style={{
            left: `${particle.x * 0.6}px`,
            top: `${particle.y * 0.3}px`,
            animationDelay: `${i * 40}ms`,
            opacity: 0.7 - i * 0.04,
          }}
        />
      ))}
    </div>
  )
}

// Main Splash Screen Component
const SplashScreen: FC<SplashScreenProps> = ({ onComplete }) => {
  const [isComplete, setIsComplete] = useState<boolean>(false)
  const [isMobileDevice, setIsMobileDevice] = useState<boolean>(false)

  // Refs
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)
  const garbageContainerRef = useRef<HTMLDivElement>(null)
  const vacuumRef = useRef<HTMLDivElement>(null)
  const suctionLineRef = useRef<HTMLDivElement>(null)
  const bucketRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([])

  // Generate animation data
  const garbageItems: GarbageItem[] = generateGarbageItems()
  const suctionParticles: SuctionParticle[] = generateSuctionParticles()

  useEffect(() => {
    setIsMobileDevice(isMobile())
  }, [])

  useEffect(() => {
    const tl: gsap.core.Timeline = gsap.timeline()

    // Initial setup - hide everything
    gsap.set(subtitleRef.current, {
      opacity: 0,
      y: isMobileDevice ? 30 : 50,
    })

    // Set up individual letters with their starting positions (mobile optimized)
    letterRefs.current.forEach((letterRef: HTMLSpanElement | null, index: number) => {
      if (letterRef && LETTER_ANIMATIONS[index]) {
        const animation = LETTER_ANIMATIONS[index]
        gsap.set(letterRef, {
          x: isMobileDevice ? animation.mobileFromX || animation.fromX * 0.6 : animation.fromX,
          y: isMobileDevice ? animation.mobileFromY || animation.fromY * 0.6 : animation.fromY,
          rotation: isMobileDevice ? animation.rotation * 0.7 : animation.rotation,
          opacity: 0,
          scale: 0.5,
        })
      }
    })

    gsap.set(
      [garbageContainerRef.current, vacuumRef.current, suctionLineRef.current, bucketRef.current, overlayRef.current],
      { opacity: 0 },
    )

    gsap.set(vacuumRef.current, {
      x: isMobileDevice ? "-25vw" : "-30vw",
      y: isMobileDevice ? "15vh" : "10vh",
    })

    // Phase 1: Letters fly in from different directions and merge
    tl.to(letterRefs.current, {
      x: 0,
      y: 0,
      rotation: 0,
      opacity: 1,
      scale: 1,
      duration: TIMING_CONFIG.LETTER_CONVERGENCE,
      stagger: isMobileDevice ? 0.08 : 0.1,
      ease: "back.out(1.7)",
    })

      // Phase 2: Subtitle appears
      .to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: TIMING_CONFIG.SUBTITLE_APPEAR,
          ease: "power2.out",
        },
        "-=0.5",
      )

      // Phase 3: Garbage falls and spreads everywhere
      .to(
        garbageContainerRef.current,
        {
          opacity: 1,
          duration: 0.3,
        },
        "+=0.5",
      )
      .to(".garbage-item", {
        y: (i: number) => `${garbageItems[i].y}vh`,
        x: (i: number) => `${(garbageItems[i].x - 50) * (isMobileDevice ? 0.6 : 0.8)}vw`,
        rotation: (i: number) => garbageItems[i].rotation,
        duration: TIMING_CONFIG.GARBAGE_FALL,
        stagger: isMobileDevice ? 0.06 : 0.08,
        ease: "bounce.out",
      })
      .to(
        overlayRef.current,
        {
          opacity: isMobileDevice ? 0.3 : 0.4,
          duration: TIMING_CONFIG.DIRT_OVERLAY,
        },
        `-=${TIMING_CONFIG.DIRT_OVERLAY}`,
      )

      // Phase 4: Text gets dirty (NO MOVEMENT - just visual effects)
      .to([titleRef.current, subtitleRef.current], {
        filter: "brightness(0.4) saturate(0.3) blur(0.5px) contrast(0.6)",
        duration: TIMING_CONFIG.TEXT_DIRTY,
        ease: "power2.out",
      })

      // Phase 5: Vacuum enters with realistic movement
      .to(
        vacuumRef.current,
        {
          opacity: 1,
          x: isMobileDevice ? "2vw" : "5vw",
          duration: TIMING_CONFIG.VACUUM_ENTER,
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

      // Phase 6: Vacuum moves and sucks garbage
      .to(vacuumRef.current, {
        x: isMobileDevice ? "15vw" : "25vw",
        y: isMobileDevice ? "25vh" : "20vh",
        rotation: isMobileDevice ? 3 : 5,
        duration: TIMING_CONFIG.VACUUM_CLEAN,
        ease: "power2.inOut",
      })
      .to(
        ".garbage-item",
        {
          x: isMobileDevice ? "12vw" : "20vw",
          y: isMobileDevice ? "20vh" : "15vh",
          scale: 0.2,
          rotation: "+=540",
          duration: 1.0,
          stagger: isMobileDevice ? 0.04 : 0.05,
          ease: "power3.in",
        },
        "-=1.0",
      )
      .to(
        bucketRef.current,
        {
          opacity: 1,
          scale: isMobileDevice ? 1.05 : 1.1,
          duration: 0.8,
        },
        "-=0.8",
      )

      // Phase 7: Continue cleaning different areas
      .to(vacuumRef.current, {
        x: isMobileDevice ? "40vw" : "60vw",
        y: isMobileDevice ? "35vh" : "40vh",
        rotation: isMobileDevice ? -2 : -3,
        duration: TIMING_CONFIG.VACUUM_CLEAN,
        ease: "power2.inOut",
      })
      .to(
        ".garbage-item",
        {
          opacity: 0,
          scale: 0,
          duration: 0.6,
          stagger: 0.02,
        },
        "-=1.0",
      )

      // Phase 8: Final cleaning and text restoration
      .to(
        overlayRef.current,
        {
          opacity: 0,
          duration: 1.0,
          ease: "power2.out",
        },
        "-=0.6",
      )
      .to([titleRef.current, subtitleRef.current], {
        filter: "brightness(1) saturate(1) blur(0px) contrast(1)",
        scale: isMobileDevice ? 1.02 : 1.05,
        duration: TIMING_CONFIG.TEXT_RESTORE,
        ease: "elastic.out(1, 0.5)",
      })

      // Phase 9: Vacuum exits and final effects
      .to(
        vacuumRef.current,
        {
          x: "100vw",
          opacity: 0,
          duration: TIMING_CONFIG.VACUUM_EXIT,
          ease: "power2.in",
        },
        "+=0.2",
      )
      .to([titleRef.current, subtitleRef.current], {
        y: isMobileDevice ? -15 : -20,
        opacity: 0.8,
        duration: TIMING_CONFIG.FINAL_ANIMATION,
        ease: "power2.out",
      })
      .to([titleRef.current, subtitleRef.current], {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: TIMING_CONFIG.FINAL_ANIMATION,
        ease: "back.out(1.7)",
      })
      .call(() => {
        setTimeout(() => {
          setIsComplete(true)
          onComplete()
        }, 800)
      })

    return (): void => {
      tl.kill()
    }
  }, [onComplete, isMobileDevice])

  if (isComplete) return null

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100"
    >
      {/* Mobile-optimized Background Pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, #1e40af 1px, transparent 1px),
              radial-gradient(circle at 80% 80%, #374151 0.5px, transparent 0.5px)
            `,
            backgroundSize: isMobileDevice ? "40px 40px, 60px 60px" : "60px 60px, 80px 80px",
          }}
        />
      </div>

      {/* Dirt Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 opacity-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(101, 67, 33, 0.3) 0%, transparent 25%),
            radial-gradient(circle at 80% 40%, rgba(139, 69, 19, 0.3) 0%, transparent 20%),
            radial-gradient(circle at 50% 70%, rgba(160, 82, 45, 0.3) 0%, transparent 30%),
            radial-gradient(circle at 70% 20%, rgba(85, 107, 47, 0.3) 0%, transparent 15%)
          `,
          filter: "blur(2px)",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-3 sm:px-6 lg:px-8">
        {/* Company Title with Individual Letter Animation */}
        <div ref={titleRef} className="text-center mb-3 sm:mb-6">
          <div className="font-black tracking-tight leading-none">
            {/* HOUSEKEEPING */}
            <div className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl mb-1 sm:mb-2">
              {["H", "O", "U", "S", "E", "K", "E", "E", "P", "I", "N", "G"].map((letter: string, index: number) => (
                <span
                  key={createLetterRef(index)}
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
            <div className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl tracking-wider">
              {["P", "R", "O"].map((letter: string, index: number) => (
                <span
                  key={createLetterRef(12 + index)}
                  ref={(el) => {
                    letterRefs.current[12 + index] = el
                  }}
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-slate-600 to-blue-800 mx-0.5 sm:mx-1"
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
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-slate-600 font-light tracking-wide mb-3 sm:mb-4">
            Professional Cleaning Excellence
          </p>
          <div className="flex items-center justify-center space-x-2 sm:space-x-3 text-xs sm:text-sm text-slate-500">
            <div className="flex items-center space-x-1">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full animate-pulse"></div>
              <span>Premium Service</span>
            </div>
            <span>•</span>
            <div className="flex items-center space-x-1">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-slate-600 rounded-full animate-pulse"></div>
              <span>Trusted Professionals</span>
            </div>
          </div>
        </div>
      </div>

      {/* Garbage Items */}
      <div ref={garbageContainerRef} className="absolute inset-0 opacity-0 pointer-events-none">
        {garbageItems.map((item: GarbageItem) => (
          <div
            key={`garbage-${item.id}`}
            className="garbage-item absolute drop-shadow-lg"
            style={{
              left: `${item.x}%`,
              top: `${item.startY}px`,
              fontSize: `${Math.max(item.size, isMobileDevice ? 14 : 18)}px`,
              filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.3))",
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
          left: isMobileDevice ? "-25vw" : "-30vw",
          top: isMobileDevice ? "15vh" : "10vh",
          zIndex: 30,
        }}
      >
        <div className="relative">
          {/* Main Vacuum Body */}
          <div className={isMobileDevice ? "w-20 h-12" : "w-32 h-20 sm:w-40 sm:h-24 md:w-48 md:h-28"}>
            <VacuumSVG />
          </div>

          {/* Suction Effect Visualization */}
          <SuctionEffects particles={suctionParticles} className="absolute opacity-0" />

          {/* Collection Bucket Indicator */}
          <div
            ref={bucketRef}
            className={`absolute opacity-0 -top-2 left-4 ${
              isMobileDevice ? "w-8 h-8" : "w-12 h-12 sm:w-16 sm:h-16"
            } bg-gradient-to-br from-slate-200 to-slate-400 rounded-lg border-2 border-slate-500 flex items-center justify-center`}
          >
            <div className={`${isMobileDevice ? "text-xs" : "text-xs sm:text-sm"} animate-bounce`}>🗑️</div>
          </div>
        </div>
      </div>

      {/* Loading Status */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="bg-white/90 backdrop-blur-md rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg border border-slate-200/50">
          <div className="flex items-center space-x-2 sm:space-x-3 text-slate-700">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-600 rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm font-medium">Initializing cleaning system...</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SplashScreen
