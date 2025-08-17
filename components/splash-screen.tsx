// "use client"

// import { useState, useEffect, useRef, type FC } from "react"
// import * as THREE from "three"
// interface MyComponentProps extends React.HTMLAttributes<HTMLDivElement> {
//   className?: string;
// }
// // TextType Component (embedded)
// interface VariableSpeed {
//   min: number;
//   max: number;
// }

// interface TextTypeProps {
//   text: string | string[];
//   as?: keyof JSX.IntrinsicElements;
//   typingSpeed?: number;
//   initialDelay?: number;
//   pauseDuration?: number;
//   deletingSpeed?: number;
//   loop?: boolean;
//   className?: string;
//   showCursor?: boolean;
//   hideCursorWhileTyping?: boolean;
//   cursorCharacter?: string;
//   cursorClassName?: string;
//   cursorBlinkDuration?: number;
//   textColors?: string[];
//   variableSpeed?: VariableSpeed;
//   onSentenceComplete?: (sentence: string, index: number) => void;
//   startOnVisible?: boolean;
//   reverseMode?: boolean;
//   [key: string]: any;
// }

// const TextType: React.FC<TextTypeProps> = ({
//   text,
//   as: Component = "div",
//   typingSpeed = 50,
//   initialDelay = 0,
//   pauseDuration = 2000,
//   deletingSpeed = 30,
//   loop = false,
//   className = "",
//   showCursor = true,
//   hideCursorWhileTyping = false,
//   cursorCharacter = "|",
//   cursorClassName = "",
//   cursorBlinkDuration = 0.5,
//   textColors = [],
//   variableSpeed,
//   onSentenceComplete,
//   startOnVisible = false,
//   reverseMode = false,
//   ...props
// }) => {
//   const [displayedText, setDisplayedText] = useState<string>("");
//   const [currentCharIndex, setCurrentCharIndex] = useState<number>(0);
//   const [isDeleting, setIsDeleting] = useState<boolean>(false);
//   const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
//   const [isVisible, setIsVisible] = useState<boolean>(!startOnVisible);
//   const [isComplete, setIsComplete] = useState<boolean>(false);
//   const cursorRef = useRef<HTMLSpanElement>(null);
//   const containerRef = useRef<HTMLElement>(null);
//   const timeoutRef = useRef<NodeJS.Timeout | null>(null);

//   const textArray = Array.isArray(text) ? text : [text];

//   const getRandomSpeed = (): number => {
//     if (!variableSpeed) return typingSpeed;
//     const { min, max } = variableSpeed;
//     return Math.random() * (max - min) + min;
//   };

//   const getCurrentTextColor = (): string => {
//     if (textColors.length === 0) return "inherit";
//     return textColors[currentTextIndex % textColors.length];
//   };

//   const cleanup = () => {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//       timeoutRef.current = null;
//     }
//   };

//   useEffect(() => {
//     if (!startOnVisible || !containerRef.current) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible(true);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     if (containerRef.current) {
//       observer.observe(containerRef.current);
//     }

//     return () => {
//       observer.disconnect();
//       cleanup();
//     };
//   }, [startOnVisible]);

//   useEffect(() => {
//     if (!isVisible || isComplete) return;

//     const currentText = textArray[currentTextIndex];
//     const processedText = reverseMode
//       ? currentText.split("").reverse().join("")
//       : currentText;

//     const executeTypingAnimation = () => {
//       if (isDeleting) {
//         if (displayedText === "") {
//           setIsDeleting(false);
//           if (currentTextIndex === textArray.length - 1) {
//             if (!loop) {
//               setIsComplete(true);
//               if (onSentenceComplete) {
//                 onSentenceComplete("ALL_COMPLETE", -1);
//               }
//               return;
//             }
//           }

//           if (onSentenceComplete) {
//             onSentenceComplete(textArray[currentTextIndex], currentTextIndex);
//           }

//           setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
//           setCurrentCharIndex(0);
//           timeoutRef.current = setTimeout(() => {}, pauseDuration);
//         } else {
//           timeoutRef.current = setTimeout(() => {
//             setDisplayedText((prev) => prev.slice(0, -1));
//           }, deletingSpeed);
//         }
//       } else {
//         if (currentCharIndex < processedText.length) {
//           timeoutRef.current = setTimeout(
//             () => {
//               setDisplayedText(
//                 (prev) => prev + processedText[currentCharIndex]
//               );
//               setCurrentCharIndex((prev) => prev + 1);
//             },
//             variableSpeed ? getRandomSpeed() : typingSpeed
//           );
//         } else {
//           // Completed typing current text
//           if (currentTextIndex === textArray.length - 1 && !loop) {
//             // Last text and no loop - mark as complete after a pause
//             timeoutRef.current = setTimeout(() => {
//               setIsComplete(true);
//               if (onSentenceComplete) {
//                 onSentenceComplete("ALL_COMPLETE", -1);
//               }
//             }, pauseDuration); // Wait before completing
//           } else if (textArray.length > 1) {
//             // More texts to show or looping
//             timeoutRef.current = setTimeout(() => {
//               if (onSentenceComplete) {
//                 onSentenceComplete(textArray[currentTextIndex], currentTextIndex);
//               }
//               setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
//               setCurrentCharIndex(0);
//               setDisplayedText("");
//             }, pauseDuration);
//           }
//         }
//       }
//     };

//     if (currentCharIndex === 0 && !isDeleting && displayedText === "") {
//       timeoutRef.current = setTimeout(executeTypingAnimation, initialDelay);
//     } else {
//       executeTypingAnimation();
//     }

//     return cleanup;
//   }, [
//     currentCharIndex,
//     displayedText,
//     isDeleting,
//     typingSpeed,
//     deletingSpeed,
//     pauseDuration,
//     textArray,
//     currentTextIndex,
//     loop,
//     initialDelay,
//     isVisible,
//     reverseMode,
//     variableSpeed,
//     onSentenceComplete,
//     isComplete,
//   ]);

//   const shouldHideCursor =
//     hideCursorWhileTyping &&
//     (currentCharIndex < textArray[currentTextIndex]?.length || isDeleting);

//   return (
//     <Component
//       ref={containerRef as React.RefObject<HTMLDivElement>}
//       className={`inline-block whitespace-pre-wrap ${className}`}
//       {...(props as React.HTMLAttributes<HTMLDivElement>)}
//     >
//       <span
//         className="inline-block"
//         style={{ color: getCurrentTextColor() }}
//       >
//         {displayedText}
//       </span>
//       {showCursor && (
//         <span
//           ref={cursorRef}
//           className={`ml-1 inline-block ${cursorClassName} ${
//             shouldHideCursor ? "hidden" : ""
//           }`}
//           style={{
//             animation: `pulse ${cursorBlinkDuration}s infinite`
//           }}
//         >
//           {cursorCharacter}
//         </span>
//       )}
//     </Component>
//   );
// };

// // Main SplashScreen Component
// interface SplashScreenProps {
//   text?: string[]
//   onComplete: () => void
//   className?: string
// }

// const SplashScreen: FC<SplashScreenProps> = ({
//   text = ["WELCOME TO", "HOUSEKEEPING PRO", "Your Professional Cleaning Partner"],
//   onComplete,
//   className = ""
// }) => {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null)
//   const sceneRef = useRef<THREE.Scene | null>(null)
//   const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
//   const animationIdRef = useRef<number | null>(null)
  
//   const [isComplete, setIsComplete] = useState<boolean>(false)
//   const [showTransition, setShowTransition] = useState<boolean>(false)
//   const [currentTextIndex, setCurrentTextIndex] = useState<number>(0)

//   const cleanup = () => {
//     if (animationIdRef.current) {
//       cancelAnimationFrame(animationIdRef.current)
//       animationIdRef.current = null
//     }
//     if (rendererRef.current) {
//       rendererRef.current.dispose()
//       rendererRef.current = null
//     }
//     if (sceneRef.current) {
//       sceneRef.current.clear()
//       sceneRef.current = null
//     }
//   }

//   const handleTextComplete = (sentence: string, index: number) => {
//     if (sentence === "ALL_COMPLETE") {
//       // Wait a bit after last text completes, then trigger completion
//       setTimeout(() => {
//         setIsComplete(true)
//       }, 1500) // Increased delay for better UX
//     } else {
//       setCurrentTextIndex(index + 1)
//     }
//   }

//   useEffect(() => {
//     if (isComplete) {
//       setShowTransition(true)
//       const timer = setTimeout(() => {
//         cleanup()
//         // Automatically navigate to homepage after animation completes
//         onComplete()
//       }, 1500) // Smooth transition duration
//       return () => {
//         clearTimeout(timer)
//         cleanup()
//       }
//     }
//   }, [isComplete, onComplete])

//   useEffect(() => {
//     if (!canvasRef.current) return

//     try {
//       const scene = new THREE.Scene()
//       sceneRef.current = scene
      
//       const camera = new THREE.PerspectiveCamera(
//         75,
//         window.innerWidth / window.innerHeight,
//         0.1,
//         1000
//       )
      
//       const renderer = new THREE.WebGLRenderer({
//         canvas: canvasRef.current,
//         alpha: true,
//         antialias: true
//       })
//       rendererRef.current = renderer

//       renderer.setSize(window.innerWidth, window.innerHeight)
//       renderer.setClearColor(0x000000, 0)
//       camera.position.z = 5

//       const particleCount = 50
//       const particles = new THREE.BufferGeometry()
//       const particlePositions = new Float32Array(particleCount * 3)
//       const particleVelocities: { x: number; y: number; z: number }[] = []

//       for (let i = 0; i < particleCount; i++) {
//         particlePositions[i * 3] = (Math.random() - 0.5) * 10
//         particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 10
//         particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 5

//         particleVelocities.push({
//           x: (Math.random() - 0.5) * 0.01,
//           y: (Math.random() - 0.5) * 0.01,
//           z: (Math.random() - 0.5) * 0.01
//         })
//       }

//       particles.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3))

//       const particleMaterial = new THREE.PointsMaterial({
//         color: 0x3b82f6,
//         size: 0.05,
//         transparent: true,
//         opacity: 0.3,
//         blending: THREE.AdditiveBlending
//       })

//       const particleSystem = new THREE.Points(particles, particleMaterial)
//       scene.add(particleSystem)

//       const animate = () => {
//         if (!rendererRef.current || !sceneRef.current) return
        
//         animationIdRef.current = requestAnimationFrame(animate)

//         const positions = particles.attributes.position.array as Float32Array
//         for (let i = 0; i < particleCount; i++) {
//           positions[i * 3] += particleVelocities[i].x
//           positions[i * 3 + 1] += particleVelocities[i].y
//           positions[i * 3 + 2] += particleVelocities[i].z

//           if (Math.abs(positions[i * 3]) > 5) particleVelocities[i].x *= -1
//           if (Math.abs(positions[i * 3 + 1]) > 5) particleVelocities[i].y *= -1
//         }
//         particles.attributes.position.needsUpdate = true
//         particleSystem.rotation.y += 0.0003

//         renderer.render(scene, camera)
//       }
//       animate()

//       const handleResize = () => {
//         if (!rendererRef.current) return
//         camera.aspect = window.innerWidth / window.innerHeight
//         camera.updateProjectionMatrix()
//         rendererRef.current.setSize(window.innerWidth, window.innerHeight)
//       }
//       window.addEventListener("resize", handleResize)

//       return () => {
//         window.removeEventListener("resize", handleResize)
//         cleanup()
//       }
//     } catch (error) {
//       console.error("Three.js initialization error:", error)
//       setTimeout(() => setIsComplete(true), 3000)
//     }
//   }, [])

  

//   if (isComplete) return null

//   return (
//     <div
//       className={`fixed inset-0 z-50 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 transition-opacity duration-1000 ${
//         showTransition ? "opacity-0" : "opacity-100"
//       } ${className}`}
//     >
//       <canvas
//         ref={canvasRef}
//         className="absolute inset-0 w-full h-full pointer-events-none"
//       />

//       <div
//         className="absolute inset-0 opacity-20 pointer-events-none"
//         style={{
//           background: `
//             radial-gradient(circle at 50% 45%, rgba(59, 130, 246, 0.15) 0%, transparent 60%),
//             radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
//             radial-gradient(circle at 70% 60%, rgba(16, 185, 129, 0.08) 0%, transparent 40%)
//           `,
//           filter: "blur(40px)"
//         }}
//       />

//       <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
//         <div className="text-center mb-8">
//           <div className="font-black tracking-tight leading-none transform-gpu">
//             <TextType
//               text={text}
//               typingSpeed={75}
//               pauseDuration={800} // Reduced pause between texts
//               deletingSpeed={0} // Disable deleting for splash screen
//               showCursor={true}
//               cursorCharacter="|"
//               loop={false}
//               onSentenceComplete={handleTextComplete}
//               className="text-4xl sm:text-6xl md:text-8xl mb-3 text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-700"
//               initialDelay={500} // Small delay before starting
//             />
//           </div>
//         </div>
//       </div>

     
//     </div>
//   )
// }
// export default SplashScreen

// "use client"
// import { useEffect, useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"

// export default function SplashScreen() {
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 3500) // 3.5s splash
//     return () => clearTimeout(timer)
//   }, [])

//   return (
//     <AnimatePresence>
//       {loading && (
//         <motion.div
//           key="splash"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0, transition: { duration: 1 } }}
//           className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 z-50"
//         >
//           {/* Brand Text Animation */}
//           <motion.h1
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             className="text-5xl md:text-6xl font-extrabold text-blue-900 tracking-wide"
//           >
//             House Keeping <span className="text-blue-700">Pro</span>
//           </motion.h1>

//           {/* Tagline */}
//           <motion.p
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.6, duration: 0.8 }}
//             className="mt-3 text-lg text-gray-700 italic"
//           >
//             Simplifying Home Care Management
//           </motion.p>

//           {/* Wave Loader */}
//           <motion.div
//             className="flex space-x-2 mt-10"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1 }}
//           >
//             {[...Array(3)].map((_, i) => (
//               <motion.span
//                 key={i}
//                 className="w-3 h-3 bg-blue-700 rounded-full"
//                 animate={{ y: [0, -10, 0] }}
//                 transition={{
//                   repeat: Infinity,
//                   duration: 0.6,
//                   delay: i * 0.2,
//                 }}
//               />
//             ))}
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   )
// }
// "use client"

// import { useEffect, useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"

// export default function SplashScreen() {
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 3500) // 3.5s splash
//     return () => clearTimeout(timer)
//   }, [])

//   return (
//     <AnimatePresence>
//       {loading && (
//         <motion.div
//           key="splash"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0, transition: { duration: 1 } }}
//           className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-blue-200 to-blue-400 z-50"
//         >
//           {/* Floating Glow Circle Background */}
//           <motion.div
//             className="absolute w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-30"
//             animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
//             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//           />
//           <motion.div
//             className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"
//             animate={{ scale: [1.2, 0.9, 1.2], opacity: [0.2, 0.4, 0.2] }}
//             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//           />

//           {/* Brand Text Animation */}
//           <motion.h1
//             initial={{ scale: 0.7, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 1.2, ease: "easeOut" }}
//             className="text-5xl md:text-6xl font-extrabold text-blue-900 tracking-wide relative z-10"
//           >
//             House Keeping <span className="text-blue-700">Pro</span>
//           </motion.h1>

//           {/* Tagline */}
//           <motion.p
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.6, duration: 0.8 }}
//             className="mt-3 text-lg md:text-xl text-gray-800 italic z-10"
//           >
//             Simplifying Home Care Management
//           </motion.p>

//           {/* Modern Loader (pulse ring + bouncing dots) */}
//           <motion.div
//             className="relative flex justify-center items-center mt-12 z-10"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1 }}
//           >
//             {/* Pulse Ring */}
//             <motion.div
//               className="absolute w-16 h-16 border-4 border-blue-600 rounded-full"
//               animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0.2, 0.8] }}
//               transition={{ repeat: Infinity, duration: 2 }}
//             />

//             {/* Bouncing dots */}
//             <div className="flex space-x-2">
//               {[...Array(3)].map((_, i) => (
//                 <motion.span
//                   key={i}
//                   className="w-3 h-3 bg-blue-700 rounded-full"
//                   animate={{ y: [0, -10, 0] }}
//                   transition={{
//                     repeat: Infinity,
//                     duration: 0.6,
//                     delay: i * 0.2,
//                   }}
//                 />
//               ))}
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   )
// }

// "use client"

// import { useEffect, useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"

// export default function SplashScreen() {
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 3500)
//     return () => clearTimeout(timer)
//   }, [])

//   return (
//     <AnimatePresence>
//       {loading && (
//         <motion.div
//           key="splash"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0, transition: { duration: 1 } }}
//           className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-tr from-blue-900 via-blue-700 to-blue-500 overflow-hidden z-50"
//         >
//           {/* Moving gradient streaks */}
//           <motion.div
//             className="absolute inset-0"
//             animate={{
//               backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
//             }}
//             transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//             style={{
//               backgroundImage:
//                 "linear-gradient(120deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)",
//               backgroundSize: "200% 200%",
//             }}
//           />

//           {/* Glass effect card */}
//           <motion.div
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             className="relative z-10 backdrop-blur-xl bg-white/10 px-10 py-8 rounded-2xl shadow-lg flex flex-col items-center"
//           >
//             {/* Brand Text */}
//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1 }}
//               className="text-5xl md:text-6xl font-extrabold text-white tracking-wider"
//             >
//               House Keeping <span className="text-blue-300">Pro</span>
//             </motion.h1>

//             {/* Tagline */}
//             <motion.p
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6, duration: 0.8 }}
//               className="mt-3 text-lg text-blue-100 italic"
//             >
//               Simplifying Home Care Management
//             </motion.p>

//             {/* Circular rotating loader */}
//             <motion.div
//               className="mt-10 w-16 h-16 border-4 border-blue-300 border-t-transparent rounded-full"
//               animate={{ rotate: 360 }}
//               transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
//             />
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   )
// }


// "use client"

// import { useEffect, useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"

// export default function SplashScreen() {
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 3500)
//     return () => clearTimeout(timer)
//   }, [])

//   return (
//     <AnimatePresence>
//       {loading && (
//         <motion.div
//           key="splash"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0, transition: { duration: 1 } }}
//           className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 z-50"
//         >
//           {/* Logo with glowing loader ring */}
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             className="relative flex items-center justify-center"
//           >
//             {/* Loader ring */}
//             <motion.div
//               className="absolute w-32 h-32 border-4 border-blue-300 border-t-transparent rounded-full"
//               animate={{ rotate: 360 }}
//               transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
//             />
//             {/* Logo */}
//             <img
//               src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-02%20at%2020.55.30_d31d3cc8.jpg-ltfbL4qxNsZJM19pu8YgBkJBiRmUlE.jpeg"
//               alt="House Keeping Pro Logo"
//               className="w-24 h-24 rounded-full shadow-lg"
//             />
//           </motion.div>

//           {/* Brand Name */}
//           <motion.h1
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.6, duration: 0.8 }}
//             className="mt-6 text-4xl md:text-5xl font-extrabold text-white tracking-wide"
//           >
//             House Keeping <span className="text-blue-300">Pro</span>
//           </motion.h1>

//           {/* Tagline */}
//           <motion.p
//             initial={{ y: 15, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 1, duration: 0.8 }}
//             className="mt-3 text-lg text-blue-100 italic"
//           >
//             Simplifying Home Care Management
//           </motion.p>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   )
// }
"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function SplashScreen() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000) // 4s splash
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="splash"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
          className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 overflow-hidden z-50"
        >
          {/* Floating particles */}
          {[...Array(25)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
              }}
              animate={{
                y: [null, -50],
                opacity: [0, 1, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 6 + Math.random() * 4,
                delay: Math.random() * 2,
              }}
            />
          ))}

          {/* Logo + Loader */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            {/* Dual rotating rings */}
            <motion.div
              className="absolute w-40 h-40 border-4 border-blue-300 border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
            />
            <motion.div
              className="absolute w-28 h-28 border-4 border-blue-500 border-b-transparent rounded-full"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }}
            />
            {/* Logo */}
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-02%20at%2020.55.30_d31d3cc8.jpg-ltfbL4qxNsZJM19pu8YgBkJBiRmUlE.jpeg"
              alt="House Keeping Pro Logo"
              className="w-24 h-24 rounded-full shadow-xl relative z-10"
            />
          </motion.div>

          {/* Brand Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-6 text-5xl md:text-6xl font-extrabold text-white tracking-wide"
          >
            House Keeping <span className="text-blue-300">Pro</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-3 text-lg text-blue-100 italic"
          >
            Simplifying Home Care Management
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
