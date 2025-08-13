"use client"

import { useState, useEffect, useRef, type FC } from "react"
import { gsap } from "gsap"

interface SplashScreenProps {
  onComplete: () => void
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
const SuctionEffects: FC<{ className?: string }> = ({ className = "absolute opacity-0" }) => {
  return (
    <div className={className} style={{ top: "-8px", right: "-15px", width: "80px", height: "50px" }}>
      {/* Suction Lines */}
      {Array.from({ length: 8 }, (_, i) => (
        <div
          key={`suction-line-${i}`}
          className="absolute w-0.5 h-6 bg-gradient-to-t from-blue-400 to-transparent rounded-full animate-pulse"
          style={{
            left: `${i * 6}px`,
            top: `${Math.sin(i * 0.5) * 8 + 15}px`,
            animationDelay: `${i * 100}ms`,
            opacity: 0.7 - i * 0.08,
            transform: `rotate(${-10 + i * 2}deg)`,
          }}
        />
      ))}

      {/* Dust Particles */}
      {Array.from({ length: 12 }, (_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-amber-600 rounded-full animate-ping"
          style={{
            left: `${Math.random() * 60}px`,
            top: `${Math.random() * 30}px`,
            animationDelay: `${i * 60}ms`,
            opacity: 0.6 - i * 0.04,
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
  const titleRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)
  const vacuumRef = useRef<HTMLDivElement>(null)
  const suctionEffectsRef = useRef<HTMLDivElement>(null)
  const dustOverlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMobileDevice(window.innerWidth < 768)
  }, [])

  useEffect(() => {
    const tl = gsap.timeline()

    // Initial setup
    gsap.set([titleRef.current, subtitleRef.current], {
      opacity: 0,
      y: 30,
    })

    gsap.set([vacuumRef.current, dustOverlayRef.current], {
      opacity: 0,
    })

    gsap.set(vacuumRef.current, {
      x: isMobileDevice ? "-30vw" : "-35vw",
      y: isMobileDevice ? "15vh" : "10vh",
    })

    // Phase 1: Text appears
    tl.to([titleRef.current, subtitleRef.current], {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power2.out",
      stagger: 0.3,
    })

    // Phase 2: Text gets dusty (wait a moment to enjoy clean text)
    .to([titleRef.current, subtitleRef.current], {
      filter: "brightness(0.3) saturate(0.2) blur(1px) contrast(0.5)",
      duration: 1.0,
      ease: "power2.out",
    }, "+=1.0")

    // Show dust overlay
    .to(dustOverlayRef.current, {
      opacity: 0.6,
      duration: 1.0,
      ease: "power2.out",
    }, "-=0.8")

    // Phase 3: Vacuum enters LOUDLY like before
    .to(vacuumRef.current, {
      opacity: 1,
      x: isMobileDevice ? "2vw" : "5vw",
      duration: 1.2,
      ease: "power2.out",
    }, "+=0.3")
    
    .to(suctionEffectsRef.current, {
      opacity: 1,
      duration: 0.5,
    }, "-=0.5")

    // Phase 4: Vacuum moves around cleaning like before
    .to(vacuumRef.current, {
      x: isMobileDevice ? "15vw" : "25vw",
      y: isMobileDevice ? "25vh" : "20vh",
      rotation: isMobileDevice ? 3 : 5,
      duration: 1.8,
      ease: "power2.inOut",
    })
    
    // Continue cleaning different areas
    .to(vacuumRef.current, {
      x: isMobileDevice ? "40vw" : "60vw",
      y: isMobileDevice ? "35vh" : "40vh",
      rotation: isMobileDevice ? -2 : -3,
      duration: 1.8,
      ease: "power2.inOut",
    })

    // Phase 5: Clean the dust and text glows again
    .to(dustOverlayRef.current, {
      opacity: 0,
      duration: 1.0,
      ease: "power2.out",
    }, "-=0.6")

    .to([titleRef.current, subtitleRef.current], {
      filter: "brightness(1) saturate(1) blur(0px) contrast(1)",
      scale: isMobileDevice ? 1.02 : 1.05,
      duration: 1.8,
      ease: "elastic.out(1, 0.5)",
    })

    // Phase 6: Vacuum exits
    .to(vacuumRef.current, {
      x: "100vw",
      opacity: 0,
      duration: 1.5,
      ease: "power2.in",
    }, "+=0.2")

    // Final glow effect
    .to([titleRef.current, subtitleRef.current], {
      scale: 1,
      filter: "brightness(1) saturate(1) blur(0px) contrast(1)",
      duration: 1.0,
      ease: "power2.out",
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
  }, [onComplete, isMobileDevice])

  if (isComplete) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Dust Overlay */}
      <div
        ref={dustOverlayRef}
        className="absolute inset-0 opacity-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(101, 67, 33, 0.4) 0%, transparent 30%),
            radial-gradient(circle at 80% 40%, rgba(139, 69, 19, 0.4) 0%, transparent 25%),
            radial-gradient(circle at 50% 70%, rgba(160, 82, 45, 0.4) 0%, transparent 35%),
            radial-gradient(circle at 70% 20%, rgba(85, 107, 47, 0.4) 0%, transparent 20%)
          `,
          filter: "blur(3px)",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
        {/* Company Title */}
        <div ref={titleRef} className="text-center mb-6">
          <div className="font-black tracking-tight leading-none">
            <div className="text-4xl sm:text-6xl md:text-8xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-blue-800 to-slate-700">
              HOUSEKEEPING
            </div>
            <div className="text-2xl sm:text-4xl md:text-6xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-slate-600 to-blue-800">
              PRO
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <div ref={subtitleRef} className="text-center">
          <p className="text-lg md:text-2xl text-slate-600 font-light tracking-wide mb-4">
            Professional Cleaning Excellence
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-slate-500">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
              <span>Premium Service</span>
            </div>
            <span>•</span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-slate-600 rounded-full animate-pulse"></div>
              <span>Trusted Professionals</span>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Vacuum System */}
      <div
        ref={vacuumRef}
        className="absolute opacity-0 pointer-events-none"
        style={{
          left: isMobileDevice ? "-30vw" : "-35vw",
          top: isMobileDevice ? "15vh" : "10vh",
          zIndex: 30,
        }}
      >
        <div className="relative">
          <div className={isMobileDevice ? "w-24 h-16" : "w-40 h-28"}>
            <VacuumSVG />
          </div>
          <div ref={suctionEffectsRef}>
            <SuctionEffects className="absolute opacity-0" />
          </div>
        </div>
      </div>

      {/* Loading Status */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="bg-white/90 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-slate-200/50">
          <div className="flex items-center space-x-3 text-slate-700">
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Preparing cleaning system...</span>
          </div>
        </div>
      </div>

      {/* Loading indicator for mobile */}
      
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-1">
            {Array.from({ length: 3 }, (_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-white/60 rounded-full animate-bounce"
                style={{
                  animationDelay: `${i * 0.2}s`
                }}
              />
            ))}
          </div>
        </div>
    
    

      {/* Performance optimization for mobile */}
      <style jsx>{`
        @media (max-width: 768px) {
          .garbage-item {
            will-change: transform;
          }
          
          .animate-ping,
          .animate-pulse,
          .animate-bounce {
            animation-duration: 1.5s;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-ping,
          .animate-pulse,
          .animate-bounce {
            animation: none;
          }
        }
      `}</style>
    </div>
  )
}

export default SplashScreen