"use client"

import { useState, useEffect, useRef, type FC } from "react"
import { gsap } from "gsap"

interface SplashScreenProps {
  onComplete: () => void
}

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

      <ellipse cx="100" cy="70" rx="60" ry="35" fill="url(#vacuumBodyGrad)" stroke="#1e293b" strokeWidth="2" />
      <rect x="50" y="45" width="40" height="50" rx="6" fill="url(#bucketGrad)" stroke="#64748b" strokeWidth="1.5" />
      <rect x="140" y="40" width="8" height="60" rx="4" fill="#475569" stroke="#334155" strokeWidth="1.5" />
      <path d="M155 65 Q175 50 185 30" stroke="#64748b" strokeWidth="8" fill="none" strokeLinecap="round" />
      <ellipse cx="185" cy="30" rx="15" ry="8" fill="#334155" stroke="#1e293b" strokeWidth="1.5" />
      <circle cx="75" cy="95" r="12" fill="#475569" stroke="#1e293b" strokeWidth="2" />
      <circle cx="125" cy="95" r="12" fill="#475569" stroke="#1e293b" strokeWidth="2" />
      <circle cx="120" cy="55" r="4" fill="#22c55e">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <text x="100" y="75" fontFamily="Arial" fontSize="12" fontWeight="bold" fill="white" textAnchor="middle">
        PRO
      </text>
    </svg>
  )
}

const SuctionEffects: FC<{ className?: string }> = ({ className = "absolute opacity-0" }) => {
  return (
    <div className={className} style={{ top: "-8px", right: "-15px", width: "80px", height: "50px" }}>
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

const SplashScreen: FC<SplashScreenProps> = ({ onComplete }) => {
  const [isComplete, setIsComplete] = useState<boolean>(false)
  const [isMobileDevice, setIsMobileDevice] = useState<boolean>(false)

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

    gsap.set([titleRef.current, subtitleRef.current], { opacity: 0, y: 30 })
    gsap.set([vacuumRef.current, dustOverlayRef.current], { opacity: 0 })
    gsap.set(vacuumRef.current, {
      x: isMobileDevice ? "-30vw" : "-35vw",
      y: isMobileDevice ? "15vh" : "10vh",
    })

    tl.to([titleRef.current, subtitleRef.current], {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power2.out",
      stagger: 0.3,
    })
      .to([titleRef.current, subtitleRef.current], {
        filter: "brightness(0.3) saturate(0.2) blur(0.5px) contrast(0.5)", // reduced blur
        duration: 1.0,
        ease: "power2.out",
      }, "+=1.0")
      .to(dustOverlayRef.current, {
        opacity: 0.6,
        duration: 1.0,
        ease: "power2.out",
      }, "-=0.8")
      .to(vacuumRef.current, {
        opacity: 1,
        x: isMobileDevice ? "2vw" : "5vw",
        duration: 0.8, // enters faster
        ease: "power2.out",
      }, "+=0.3")
      .to(suctionEffectsRef.current, { opacity: 1, duration: 0.5 }, "-=0.5")
      .to(vacuumRef.current, {
        x: isMobileDevice ? "15vw" : "25vw",
        y: isMobileDevice ? "25vh" : "20vh",
        rotation: isMobileDevice ? 3 : 5,
        duration: 1.8,
        ease: "power2.inOut",
      })
      .to(vacuumRef.current, {
        x: isMobileDevice ? "40vw" : "60vw",
        y: isMobileDevice ? "35vh" : "40vh",
        rotation: isMobileDevice ? -2 : -3,
        duration: 1.8,
        ease: "power2.inOut",
      })
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
      .to(vacuumRef.current, {
        x: "100vw",
        opacity: 0,
        duration: 2.0, // exits slower
        ease: "power2.inOut",
      }, "+=0.2")
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
          filter: "blur(1.5px)", // reduced from 3px
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

// import React, { useEffect, useRef, useState, useCallback } from 'react';
// import * as THREE from 'three';

// // TypeScript interfaces
// interface DustParticleUserData {
//   originalPos: THREE.Vector3;
//   velocity: THREE.Vector3;
//   isBeingVacuumed: boolean;
//   vacuumSpeed: number;
// }

// // Properly extend THREE.Mesh to include all necessary properties
// interface DustParticle extends THREE.Mesh<THREE.SphereGeometry, THREE.MeshLambertMaterial> {
//   userData: DustParticleUserData;
//   position: THREE.Vector3;
//   rotation: THREE.Euler;
//   scale: THREE.Vector3;
//   visible: boolean;
//   material: THREE.MeshLambertMaterial;
// }

// interface VacuumRef {
//   group: THREE.Group;
//   suctionZone: THREE.Mesh;
// }

// interface ProgressMessage {
//   time: number;
//   message: string;
//   phase: AnimationPhase;
// }

// type AnimationPhase = 'dirty' | 'cleaning' | 'clean' | 'complete';

// interface Colors {
//   black: number;
//   white: number;
//   lightGrey: number;
//   darkBlue: number;
// }

// const HousekeepingSplash: React.FC = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const sceneRef = useRef<THREE.Scene | null>(null);
//   const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
//   const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
//   const dustParticlesRef = useRef<DustParticle[]>([]);
//   const cleaningToolsRef = useRef<THREE.Group[]>([]);
//   const vacuumRef = useRef<VacuumRef | null>(null);
//   const animationFrameRef = useRef<number | null>(null);
//   const startTimeRef = useRef<number | null>(null);
  
//   const [currentPhase, setCurrentPhase] = useState<AnimationPhase>('dirty');
//   const [progressText, setProgressText] = useState<string>('Detecting Mess...');
//   const [showFinalUI, setShowFinalUI] = useState<boolean>(false);

//   // Color Palette
//   const colors: Colors = {
//     black: 0x000000,
//     white: 0xffffff,
//     lightGrey: 0xcccccc,
//     darkBlue: 0x1e3a8a
//   };

//   const initThreeJS = useCallback((): void => {
//     if (!canvasRef.current) return;

//     // Scene setup
//     const scene = new THREE.Scene();
//     scene.background = new THREE.Color(colors.black);
//     scene.fog = new THREE.Fog(colors.darkBlue, 10, 50);
//     sceneRef.current = scene;

//     // Camera setup
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     camera.position.set(0, 0, 12);
//     cameraRef.current = camera;

//     // Renderer setup
//     const renderer = new THREE.WebGLRenderer({ 
//       canvas: canvasRef.current,
//       antialias: true,
//       alpha: true 
//     });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.shadowMap.enabled = true;
//     renderer.shadowMap.type = THREE.PCFSoftShadowMap;
//     rendererRef.current = renderer;

//     // Lighting with limited colors
//     const ambientLight = new THREE.AmbientLight(colors.lightGrey, 0.3);
//     scene.add(ambientLight);

//     const mainLight = new THREE.DirectionalLight(colors.white, 1.2);
//     mainLight.position.set(10, 10, 5);
//     mainLight.castShadow = true;
//     scene.add(mainLight);

//     const blueAccentLight = new THREE.PointLight(colors.darkBlue, 0.8, 30);
//     blueAccentLight.position.set(-8, 5, 8);
//     scene.add(blueAccentLight);

//     const whiteSpotlight = new THREE.SpotLight(colors.white, 1.5, 25, Math.PI / 6);
//     whiteSpotlight.position.set(5, 8, 10);
//     whiteSpotlight.target.position.set(0, 0, 0);
//     scene.add(whiteSpotlight);
//     scene.add(whiteSpotlight.target);

//     createDustParticles(scene);
//     createCleaningTools(scene);
//   }, [colors]);

//   const createDustParticles = (scene: THREE.Scene): void => {
//     const dustParticles: DustParticle[] = [];
    
//     // Create 300 dust particles
//     for (let i = 0; i < 300; i++) {
//       const geometry = new THREE.SphereGeometry(0.02 + Math.random() * 0.03, 6, 6);
//       const material = new THREE.MeshLambertMaterial({ 
//         color: colors.lightGrey,
//         transparent: true,
//         opacity: 0.7 + Math.random() * 0.3
//       });
      
//       const particle = new THREE.Mesh(geometry, material) as DustParticle;
      
//       // Random initial positions
//       particle.position.set(
//         (Math.random() - 0.5) * 25,
//         (Math.random() - 0.5) * 20,
//         (Math.random() - 0.5) * 15
//       );
      
//       // Store original position and velocity
//       particle.userData = {
//         originalPos: particle.position.clone(),
//         velocity: new THREE.Vector3(
//           (Math.random() - 0.5) * 0.03,
//           (Math.random() - 0.5) * 0.03,
//           (Math.random() - 0.5) * 0.03
//         ),
//         isBeingVacuumed: false,
//         vacuumSpeed: 0.05 + Math.random() * 0.05
//       };
      
//       scene.add(particle);
//       dustParticles.push(particle);
//     }
    
//     dustParticlesRef.current = dustParticles;
//   };

//   const createCleaningTools = (scene: THREE.Scene): void => {
//     const tools: THREE.Group[] = [];
    
//     // Vacuum Cleaner - Main character
//     const vacuumGroup = new THREE.Group();
    
//     // Vacuum body
//     const bodyGeometry = new THREE.CylinderGeometry(0.6, 0.8, 2.5, 16);
//     const bodyMaterial = new THREE.MeshPhongMaterial({ 
//       color: colors.darkBlue,
//       shininess: 100
//     });
//     const vacuumBody = new THREE.Mesh(bodyGeometry, bodyMaterial);
//     vacuumGroup.add(vacuumBody);
    
//     // Vacuum handle
//     const handleGeometry = new THREE.CylinderGeometry(0.05, 0.05, 1.5, 8);
//     const handleMaterial = new THREE.MeshPhongMaterial({ color: colors.lightGrey });
//     const handle = new THREE.Mesh(handleGeometry, handleMaterial);
//     handle.position.set(0.8, 1.2, 0);
//     handle.rotation.z = Math.PI / 3;
//     vacuumGroup.add(handle);
    
//     // Vacuum hose
//     const hoseGeometry = new THREE.TorusGeometry(1.2, 0.08, 8, 20);
//     const hoseMaterial = new THREE.MeshPhongMaterial({ color: colors.black });
//     const hose = new THREE.Mesh(hoseGeometry, hoseMaterial);
//     hose.position.set(1.8, 0, 0);
//     hose.rotation.y = Math.PI / 2;
//     vacuumGroup.add(hose);
    
//     // Vacuum suction indicator (invisible sphere for suction area)
//     const suctionGeometry = new THREE.SphereGeometry(2, 16, 16);
//     const suctionMaterial = new THREE.MeshBasicMaterial({ 
//       color: colors.white,
//       transparent: true,
//       opacity: 0,
//       wireframe: true
//     });
//     const suctionZone = new THREE.Mesh(suctionGeometry, suctionMaterial);
//     suctionZone.position.set(2.5, -1, 0);
//     vacuumGroup.add(suctionZone);
    
//     vacuumGroup.position.set(-5, 0, 2);
//     scene.add(vacuumGroup);
//     vacuumRef.current = { group: vacuumGroup, suctionZone };
//     tools.push(vacuumGroup);
    
//     // Mop
//     const mopGroup = new THREE.Group();
    
//     const mopHandle = new THREE.CylinderGeometry(0.04, 0.04, 3.5, 12);
//     const mopHandleMaterial = new THREE.MeshPhongMaterial({ color: colors.lightGrey });
//     const mopHandleMesh = new THREE.Mesh(mopHandle, mopHandleMaterial);
//     mopGroup.add(mopHandleMesh);
    
//     const mopHead = new THREE.SphereGeometry(0.4, 12, 8);
//     const mopHeadMaterial = new THREE.MeshPhongMaterial({ color: colors.white });
//     const mopHeadMesh = new THREE.Mesh(mopHead, mopHeadMaterial);
//     mopHeadMesh.position.y = -1.8;
//     mopHeadMesh.scale.y = 0.3;
//     mopGroup.add(mopHeadMesh);
    
//     mopGroup.position.set(5, 1, -1);
//     mopGroup.rotation.z = -Math.PI / 8;
//     scene.add(mopGroup);
//     tools.push(mopGroup);
    
//     // Spray Bottle
//     const sprayGroup = new THREE.Group();
    
//     const bottleGeometry = new THREE.CylinderGeometry(0.25, 0.3, 1.5, 16);
//     const bottleMaterial = new THREE.MeshPhongMaterial({ 
//       color: colors.white,
//       transparent: true,
//       opacity: 0.9
//     });
//     const bottle = new THREE.Mesh(bottleGeometry, bottleMaterial);
//     sprayGroup.add(bottle);
    
//     const sprayTop = new THREE.ConeGeometry(0.08, 0.4, 8);
//     const sprayTopMaterial = new THREE.MeshPhongMaterial({ color: colors.darkBlue });
//     const sprayTopMesh = new THREE.Mesh(sprayTop, sprayTopMaterial);
//     sprayTopMesh.position.y = 1;
//     sprayTopMesh.rotation.x = Math.PI;
//     sprayGroup.add(sprayTopMesh);
    
//     sprayGroup.position.set(0, 4, -2);
//     scene.add(sprayGroup);
//     tools.push(sprayGroup);
    
//     // Cleaning Cloth
//     const clothGroup = new THREE.Group();
//     const clothGeometry = new THREE.PlaneGeometry(0.8, 0.6);
//     const clothMaterial = new THREE.MeshLambertMaterial({ 
//       color: colors.lightGrey,
//       side: THREE.DoubleSide
//     });
//     const cloth = new THREE.Mesh(clothGeometry, clothMaterial);
//     cloth.position.set(0, 0, 0);
//     cloth.rotation.x = -Math.PI / 6;
//     cloth.rotation.z = Math.PI / 4;
//     clothGroup.add(cloth);
//     clothGroup.position.set(-3, -3, 1);
//     scene.add(clothGroup);
//     tools.push(clothGroup);
    
//     cleaningToolsRef.current = tools;
//   };

//   const startAnimation = useCallback((): void => {
//     startTimeRef.current = Date.now();
    
//     // Progress text timeline
//     const progressMessages: ProgressMessage[] = [
//       { time: 0, message: 'Detecting Mess...', phase: 'dirty' },
//       { time: 1000, message: 'Analyzing Dirt Patterns...', phase: 'dirty' },
//       { time: 2000, message: 'Activating Vacuum Power...', phase: 'cleaning' },
//       { time: 2500, message: 'Removing All Particles...', phase: 'cleaning' },
//       { time: 4000, message: 'Clean Perfection Achieved!', phase: 'clean' },
//       { time: 4800, message: '', phase: 'complete' }
//     ];
    
//     progressMessages.forEach(({ time, message, phase }: ProgressMessage) => {
//       setTimeout(() => {
//         setProgressText(message);
//         setCurrentPhase(phase);
//         if (phase === 'complete') {
//           setShowFinalUI(true);
//         }
//       }, time);
//     });

//     animate();
//   }, []);

//   const animate = useCallback((): void => {
//     if (!startTimeRef.current || !rendererRef.current || !sceneRef.current || !cameraRef.current) {
//       return;
//     }

//     const currentTime = Date.now();
//     const elapsedTime = (currentTime - startTimeRef.current) / 1000;
//     const time = currentTime * 0.001;

//     // Phase-based animation logic
//     if (elapsedTime < 2) {
//       // Phase 1: Messy environment - particles floating randomly
//       dustParticlesRef.current.forEach((particle: DustParticle) => {
//         if (!particle.userData.isBeingVacuumed && particle.visible) {
//           particle.position.add(particle.userData.velocity);
//           particle.rotation.x += 0.02;
//           particle.rotation.y += 0.015;
          
//           // Boundary bouncing
//           if (Math.abs(particle.position.x) > 12) particle.userData.velocity.x *= -1;
//           if (Math.abs(particle.position.y) > 10) particle.userData.velocity.y *= -1;
//           if (Math.abs(particle.position.z) > 7) particle.userData.velocity.z *= -1;
//         }
//       });
      
//       // Tools idle animation
//       cleaningToolsRef.current.forEach((tool: THREE.Group, index: number) => {
//         tool.rotation.y += 0.005 * (index + 1);
//         tool.position.y += Math.sin(time * 2 + index) * 0.01;
//       });
      
//     } else if (elapsedTime < 4.5) {
//       // Phase 2: Vacuum cleaning action
//       const vacuum = vacuumRef.current;
//       if (vacuum) {
//         const suctionCenter = new THREE.Vector3();
//         vacuum.suctionZone.getWorldPosition(suctionCenter);
        
//         // Move vacuum closer for dramatic effect
//         vacuum.group.position.x = -5 + (elapsedTime - 2) * 1.5;
//         vacuum.group.rotation.y = Math.sin(time * 3) * 0.1;
        
//         dustParticlesRef.current.forEach((particle: DustParticle, index: number) => {
//           if (particle.visible) {
//             const distanceToSuction = particle.position.distanceTo(suctionCenter);
            
//             // Start vacuuming particles within range
//             if (distanceToSuction < 4 || particle.userData.isBeingVacuumed) {
//               particle.userData.isBeingVacuumed = true;
              
//               // Calculate direction to suction point
//               const direction = suctionCenter.clone().sub(particle.position).normalize();
//               const suctionForce = Math.min(particle.userData.vacuumSpeed, distanceToSuction * 0.1);
              
//               // Move particle toward vacuum
//               particle.position.add(direction.multiplyScalar(suctionForce));
              
//               // Add swirl effect
//               const swirlAngle = time * 5 + index * 0.1;
//               const swirlRadius = distanceToSuction * 0.1;
//               particle.position.x += Math.cos(swirlAngle) * swirlRadius * 0.02;
//               particle.position.z += Math.sin(swirlAngle) * swirlRadius * 0.02;
              
//               // Shrink and fade as it approaches vacuum
//               const shrinkFactor = Math.max(0.1, distanceToSuction / 4);
//               particle.scale.setScalar(shrinkFactor);
//               particle.material.opacity = shrinkFactor;
              
//               // Remove particle when close enough
//               if (distanceToSuction < 0.3) {
//                 particle.visible = false;
//                 if (sceneRef.current) {
//                   sceneRef.current.remove(particle);
//                 }
//               }
//             }
//           }
//         });
        
//         // Vacuum vibration effect
//         vacuum.group.position.y += Math.sin(time * 20) * 0.05;
        
//         // Other tools moving more actively
//         cleaningToolsRef.current.forEach((tool: THREE.Group, index: number) => {
//           if (tool !== vacuum.group) {
//             tool.rotation.y += 0.02;
//             tool.rotation.x = Math.sin(time * 3) * 0.15;
//             tool.position.x += Math.cos(time * 2 + index) * 0.03;
//           }
//         });
//       }
      
//     } else {
//       // Phase 3: Clean environment celebration
//       dustParticlesRef.current.forEach((particle: DustParticle) => {
//         particle.visible = false;
//       });
      
//       // Tools celebrating
//       cleaningToolsRef.current.forEach((tool: THREE.Group, index: number) => {
//         tool.rotation.y += 0.03;
//         tool.position.y = Math.sin(time * 2 + index) * 0.15;
        
//         // Add subtle glow effect by adjusting material
//         tool.traverse((child: THREE.Object3D) => {
//           if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshPhongMaterial) {
//             child.material.emissive.setHex(colors.darkBlue);
//             child.material.emissiveIntensity = Math.sin(time * 4) * 0.1 + 0.1;
//           }
//         });
//       });
//     }

//     // Camera gentle movement
//     cameraRef.current.position.x += Math.sin(time * 0.5) * 0.02;
//     cameraRef.current.position.y += Math.cos(time * 0.3) * 0.01;
//     cameraRef.current.lookAt(0, 0, 0);

//     // Render scene
//     rendererRef.current.render(sceneRef.current, cameraRef.current);
//     animationFrameRef.current = requestAnimationFrame(animate);
//   }, [colors]);

//   const handleResize = useCallback((): void => {
//     if (cameraRef.current && rendererRef.current) {
//       cameraRef.current.aspect = window.innerWidth / window.innerHeight;
//       cameraRef.current.updateProjectionMatrix();
//       rendererRef.current.setSize(window.innerWidth, window.innerHeight);
//     }
//   }, []);

//   const enterSite = useCallback((): void => {
//     alert('Welcome to CleanPro! Experience the power of professional cleaning.');
//   }, []);

//   useEffect(() => {
//     initThreeJS();
//     startAnimation();

//     return () => {
//       if (animationFrameRef.current) {
//         cancelAnimationFrame(animationFrameRef.current);
//       }
//       if (rendererRef.current) {
//         rendererRef.current.dispose();
//       }
//     };
//   }, [initThreeJS, startAnimation]);

//   useEffect(() => {
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, [handleResize]);

//   return (
//     <div className="relative w-full h-screen overflow-hidden bg-black">
//       {/* Three.js Canvas */}
//       <canvas
//         ref={canvasRef}
//         className="absolute top-0 left-0 w-full h-full z-10"
//       />
      
//       {/* Workflow Text Elements */}
//       <div className="absolute inset-0 pointer-events-none z-20">
//         {/* Problem Words */}
//         {currentPhase === 'dirty' && (
//           <>
//             <div className="absolute top-1/4 left-1/10 text-4xl md:text-6xl font-bold text-gray-400 opacity-80 animate-pulse">
//               DUST
//             </div>
//             <div className="absolute top-1/3 right-1/6 text-4xl md:text-6xl font-bold text-gray-500 opacity-70 animate-bounce">
//               DIRT
//             </div>
//             <div className="absolute bottom-2/5 left-1/5 text-4xl md:text-6xl font-bold text-gray-600 opacity-60 animate-pulse">
//               MESS
//             </div>
//             <div className="absolute bottom-1/4 right-1/4 text-4xl md:text-6xl font-bold text-gray-700 opacity-50 animate-bounce">
//               GRIME
//             </div>
//           </>
//         )}
        
//         {/* Transformation Text */}
//         {currentPhase === 'cleaning' && (
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//             <div className="text-5xl md:text-7xl font-bold text-white animate-pulse">
//               ✨ CLEANING ✨
//             </div>
//           </div>
//         )}
        
//         {/* Cleaning Wave Effect */}
//         {currentPhase === 'cleaning' && (
//           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-900/30 to-transparent transform -translate-x-full animate-pulse duration-1000" />
//         )}
//       </div>
      
//       {/* Final UI */}
//       {showFinalUI && (
//         <div className="absolute inset-0 flex items-center justify-center z-30 animate-fade-in">
//           <div className="text-center text-white">
//             <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-gray-300 to-blue-900 bg-clip-text text-transparent">
//               CleanPro
//             </h1>
//             <p className="text-xl md:text-2xl mb-8 text-gray-300 tracking-wider">
//               Premium Housekeeping Services
//             </p>
//             <button
//               onClick={enterSite}
//               className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
//             >
//               Experience Clean Perfection
//             </button>
//           </div>
//         </div>
//       )}
      
//       {/* Progress Indicator */}
//       {!showFinalUI && (
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
//           <div className="flex flex-col items-center">
//             <div className="w-16 h-16 border-4 border-gray-600 border-t-white rounded-full animate-spin mb-4" />
//             <p className="text-white text-sm tracking-wide">{progressText}</p>
//           </div>
//         </div>
//       )}
      
//       {/* Floating Particles Background */}
//       <div className="absolute inset-0 z-5 pointer-events-none">
//         {[...Array(20)].map((_, i: number) => (
//           <div
//             key={i}
//             className="absolute w-1 h-1 bg-gray-400 rounded-full opacity-60 animate-float"
//             style={{
//               left: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 3}s`,
//               animationDuration: `${3 + Math.random() * 2}s`
//             }}
//           />
//         ))}
//       </div>
      
//       <style jsx>{`
//         @keyframes float {
//           0% {
//             transform: translateY(100vh) translateX(0);
//             opacity: 0;
//           }
//           10% {
//             opacity: 1;
//           }
//           90% {
//             opacity: 1;
//           }
//           100% {
//             transform: translateY(-100px) translateX(50px);
//             opacity: 0;
//           }
//         }
        
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: scale(0.9);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }
        
//         .animate-fade-in {
//           animation: fade-in 1s ease-out forwards;
//         }
        
//         .animate-float {
//           animation: float 4s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HousekeepingSplash;