"use client"

import { useState, useEffect, useRef, type FC } from "react"
import { gsap } from "gsap"

interface SplashScreenProps {
  onComplete: () => void
}

const SplashScreen: FC<SplashScreenProps> = ({ onComplete }) => {
  const [isComplete, setIsComplete] = useState<boolean>(false)
  const [isMobileDevice, setIsMobileDevice] = useState<boolean>(false)

  const titleRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)
  const dustOverlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMobileDevice(window.innerWidth < 768)
  }, [])

  useEffect(() => {
    const tl = gsap.timeline()

    gsap.set([titleRef.current, subtitleRef.current], { opacity: 0, y: 30 })
    gsap.set(dustOverlayRef.current, { opacity: 0 })

    tl.to([titleRef.current, subtitleRef.current], {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power2.out",
      stagger: 0.3,
    })
      .to(
        [titleRef.current, subtitleRef.current],
        {
          filter: "brightness(0.3) saturate(0.2) blur(0.5px) contrast(0.5)",
          duration: 1.0,
          ease: "power2.out",
        },
        "+=1.0",
      )
      .to(
        dustOverlayRef.current,
        {
          opacity: 0.6,
          duration: 1.0,
          ease: "power2.out",
        },
        "-=0.8",
      )
      .to(
        dustOverlayRef.current,
        {
          opacity: 0,
          duration: 1.0,
          ease: "power2.out",
        },
        "+=0.5",
      )
      .to([titleRef.current, subtitleRef.current], {
        filter: "brightness(1) saturate(1) blur(0px) contrast(1)",
        scale: isMobileDevice ? 1.02 : 1.05,
        duration: 1.8,
        ease: "elastic.out(1, 0.5)",
      })
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
    <div className="fixed inset-0 z-50 overflow-hidden bg-gradient-to-br from-blue-50 via-blue-100 to-slate-100">
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
          filter: "blur(1.5px)",
        }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
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
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="bg-white/90 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-slate-200/50">
          <div className="flex items-center space-x-3 text-slate-700">
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Preparing cleaning system...</span>
          </div>
        </div>
      </div>
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-1">
          {Array.from({ length: 3 }, (_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-white/60 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default SplashScreen