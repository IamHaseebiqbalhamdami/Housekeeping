"use client"

import { useState, useEffect, useRef, type FC } from "react"
import * as THREE from "three"
interface MyComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}
// TextType Component (embedded)
interface VariableSpeed {
  min: number;
  max: number;
}

interface TextTypeProps {
  text: string | string[];
  as?: keyof JSX.IntrinsicElements;
  typingSpeed?: number;
  initialDelay?: number;
  pauseDuration?: number;
  deletingSpeed?: number;
  loop?: boolean;
  className?: string;
  showCursor?: boolean;
  hideCursorWhileTyping?: boolean;
  cursorCharacter?: string;
  cursorClassName?: string;
  cursorBlinkDuration?: number;
  textColors?: string[];
  variableSpeed?: VariableSpeed;
  onSentenceComplete?: (sentence: string, index: number) => void;
  startOnVisible?: boolean;
  reverseMode?: boolean;
  [key: string]: any;
}

const TextType: React.FC<TextTypeProps> = ({
  text,
  as: Component = "div",
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = false,
  className = "",
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = "|",
  cursorClassName = "",
  cursorBlinkDuration = 0.5,
  textColors = [],
  variableSpeed,
  onSentenceComplete,
  startOnVisible = false,
  reverseMode = false,
  ...props
}) => {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [currentCharIndex, setCurrentCharIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(!startOnVisible);
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const textArray = Array.isArray(text) ? text : [text];

  const getRandomSpeed = (): number => {
    if (!variableSpeed) return typingSpeed;
    const { min, max } = variableSpeed;
    return Math.random() * (max - min) + min;
  };

  const getCurrentTextColor = (): string => {
    if (textColors.length === 0) return "inherit";
    return textColors[currentTextIndex % textColors.length];
  };

  const cleanup = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  useEffect(() => {
    if (!startOnVisible || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      cleanup();
    };
  }, [startOnVisible]);

  useEffect(() => {
    if (!isVisible || isComplete) return;

    const currentText = textArray[currentTextIndex];
    const processedText = reverseMode
      ? currentText.split("").reverse().join("")
      : currentText;

    const executeTypingAnimation = () => {
      if (isDeleting) {
        if (displayedText === "") {
          setIsDeleting(false);
          if (currentTextIndex === textArray.length - 1) {
            if (!loop) {
              setIsComplete(true);
              if (onSentenceComplete) {
                onSentenceComplete("ALL_COMPLETE", -1);
              }
              return;
            }
          }

          if (onSentenceComplete) {
            onSentenceComplete(textArray[currentTextIndex], currentTextIndex);
          }

          setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
          setCurrentCharIndex(0);
          timeoutRef.current = setTimeout(() => {}, pauseDuration);
        } else {
          timeoutRef.current = setTimeout(() => {
            setDisplayedText((prev) => prev.slice(0, -1));
          }, deletingSpeed);
        }
      } else {
        if (currentCharIndex < processedText.length) {
          timeoutRef.current = setTimeout(
            () => {
              setDisplayedText(
                (prev) => prev + processedText[currentCharIndex]
              );
              setCurrentCharIndex((prev) => prev + 1);
            },
            variableSpeed ? getRandomSpeed() : typingSpeed
          );
        } else {
          // Completed typing current text
          if (currentTextIndex === textArray.length - 1 && !loop) {
            // Last text and no loop - mark as complete after a pause
            timeoutRef.current = setTimeout(() => {
              setIsComplete(true);
              if (onSentenceComplete) {
                onSentenceComplete("ALL_COMPLETE", -1);
              }
            }, pauseDuration); // Wait before completing
          } else if (textArray.length > 1) {
            // More texts to show or looping
            timeoutRef.current = setTimeout(() => {
              if (onSentenceComplete) {
                onSentenceComplete(textArray[currentTextIndex], currentTextIndex);
              }
              setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
              setCurrentCharIndex(0);
              setDisplayedText("");
            }, pauseDuration);
          }
        }
      }
    };

    if (currentCharIndex === 0 && !isDeleting && displayedText === "") {
      timeoutRef.current = setTimeout(executeTypingAnimation, initialDelay);
    } else {
      executeTypingAnimation();
    }

    return cleanup;
  }, [
    currentCharIndex,
    displayedText,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    textArray,
    currentTextIndex,
    loop,
    initialDelay,
    isVisible,
    reverseMode,
    variableSpeed,
    onSentenceComplete,
    isComplete,
  ]);

  const shouldHideCursor =
    hideCursorWhileTyping &&
    (currentCharIndex < textArray[currentTextIndex]?.length || isDeleting);

  return (
    <Component
      ref={containerRef as React.RefObject<HTMLDivElement>}
      className={`inline-block whitespace-pre-wrap ${className}`}
      {...(props as React.HTMLAttributes<HTMLDivElement>)}
    >
      <span
        className="inline-block"
        style={{ color: getCurrentTextColor() }}
      >
        {displayedText}
      </span>
      {showCursor && (
        <span
          ref={cursorRef}
          className={`ml-1 inline-block ${cursorClassName} ${
            shouldHideCursor ? "hidden" : ""
          }`}
          style={{
            animation: `pulse ${cursorBlinkDuration}s infinite`
          }}
        >
          {cursorCharacter}
        </span>
      )}
    </Component>
  );
};

// Main SplashScreen Component
interface SplashScreenProps {
  text?: string[]
  onComplete: () => void
  className?: string
}

const SplashScreen: FC<SplashScreenProps> = ({
  text = ["WELCOME TO", "HOUSEKEEPING PRO", "Your Professional Cleaning Partner"],
  onComplete,
  className = ""
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const animationIdRef = useRef<number | null>(null)
  
  const [isComplete, setIsComplete] = useState<boolean>(false)
  const [showTransition, setShowTransition] = useState<boolean>(false)
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0)

  const cleanup = () => {
    if (animationIdRef.current) {
      cancelAnimationFrame(animationIdRef.current)
      animationIdRef.current = null
    }
    if (rendererRef.current) {
      rendererRef.current.dispose()
      rendererRef.current = null
    }
    if (sceneRef.current) {
      sceneRef.current.clear()
      sceneRef.current = null
    }
  }

  const handleTextComplete = (sentence: string, index: number) => {
    if (sentence === "ALL_COMPLETE") {
      // Wait a bit after last text completes, then trigger completion
      setTimeout(() => {
        setIsComplete(true)
      }, 1500) // Increased delay for better UX
    } else {
      setCurrentTextIndex(index + 1)
    }
  }

  useEffect(() => {
    if (isComplete) {
      setShowTransition(true)
      const timer = setTimeout(() => {
        cleanup()
        // Automatically navigate to homepage after animation completes
        onComplete()
      }, 1500) // Smooth transition duration
      return () => {
        clearTimeout(timer)
        cleanup()
      }
    }
  }, [isComplete, onComplete])

  useEffect(() => {
    if (!canvasRef.current) return

    try {
      const scene = new THREE.Scene()
      sceneRef.current = scene
      
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      )
      
      const renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        alpha: true,
        antialias: true
      })
      rendererRef.current = renderer

      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setClearColor(0x000000, 0)
      camera.position.z = 5

      const particleCount = 50
      const particles = new THREE.BufferGeometry()
      const particlePositions = new Float32Array(particleCount * 3)
      const particleVelocities: { x: number; y: number; z: number }[] = []

      for (let i = 0; i < particleCount; i++) {
        particlePositions[i * 3] = (Math.random() - 0.5) * 10
        particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 10
        particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 5

        particleVelocities.push({
          x: (Math.random() - 0.5) * 0.01,
          y: (Math.random() - 0.5) * 0.01,
          z: (Math.random() - 0.5) * 0.01
        })
      }

      particles.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3))

      const particleMaterial = new THREE.PointsMaterial({
        color: 0x3b82f6,
        size: 0.05,
        transparent: true,
        opacity: 0.3,
        blending: THREE.AdditiveBlending
      })

      const particleSystem = new THREE.Points(particles, particleMaterial)
      scene.add(particleSystem)

      const animate = () => {
        if (!rendererRef.current || !sceneRef.current) return
        
        animationIdRef.current = requestAnimationFrame(animate)

        const positions = particles.attributes.position.array as Float32Array
        for (let i = 0; i < particleCount; i++) {
          positions[i * 3] += particleVelocities[i].x
          positions[i * 3 + 1] += particleVelocities[i].y
          positions[i * 3 + 2] += particleVelocities[i].z

          if (Math.abs(positions[i * 3]) > 5) particleVelocities[i].x *= -1
          if (Math.abs(positions[i * 3 + 1]) > 5) particleVelocities[i].y *= -1
        }
        particles.attributes.position.needsUpdate = true
        particleSystem.rotation.y += 0.0003

        renderer.render(scene, camera)
      }
      animate()

      const handleResize = () => {
        if (!rendererRef.current) return
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        rendererRef.current.setSize(window.innerWidth, window.innerHeight)
      }
      window.addEventListener("resize", handleResize)

      return () => {
        window.removeEventListener("resize", handleResize)
        cleanup()
      }
    } catch (error) {
      console.error("Three.js initialization error:", error)
      setTimeout(() => setIsComplete(true), 3000)
    }
  }, [])

  

  if (isComplete) return null

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 transition-opacity duration-1000 ${
        showTransition ? "opacity-0" : "opacity-100"
      } ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 50% 45%, rgba(59, 130, 246, 0.15) 0%, transparent 60%),
            radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 70% 60%, rgba(16, 185, 129, 0.08) 0%, transparent 40%)
          `,
          filter: "blur(40px)"
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
        <div className="text-center mb-8">
          <div className="font-black tracking-tight leading-none transform-gpu">
            <TextType
              text={text}
              typingSpeed={75}
              pauseDuration={800} // Reduced pause between texts
              deletingSpeed={0} // Disable deleting for splash screen
              showCursor={true}
              cursorCharacter="|"
              loop={false}
              onSentenceComplete={handleTextComplete}
              className="text-4xl sm:text-6xl md:text-8xl mb-3 text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-700"
              initialDelay={500} // Small delay before starting
            />
          </div>
        </div>
      </div>

     
    </div>
  )
}
export default SplashScreen


