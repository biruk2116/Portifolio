import React, { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial, Sphere, MeshDistortMaterial, Stars, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

// Animated Particles System
function ParticleField() {
  const ref = useRef()
  const particlesCount = 4000
  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3)
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 200
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100 - 50
    }
    return positions
  }, [])

  const colors = useMemo(() => {
    const colors = new Float32Array(particlesCount * 3)
    for (let i = 0; i < particlesCount; i++) {
      const color = new THREE.Color().setHSL(0.7 + Math.random() * 0.2, 0.8, 0.5)
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }
    return colors
  }, [])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += 0.0005
      ref.current.rotation.y += 0.001
    }
  })

  return (
    <Points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particlesCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <PointMaterial
        transparent
        vertexColors
        size={0.12}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </Points>
  )
}

// Animated Floating Sphere
function AnimatedSphere() {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003
      meshRef.current.rotation.y += 0.005
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={[-5, 2, -8]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[1.2, 64, 64]} />
      <MeshDistortMaterial
        color={hovered ? "#8b5cf6" : "#06b6d4"}
        emissive={hovered ? "#8b5cf6" : "#06b6d4"}
        emissiveIntensity={0.5}
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  )
}

// Rotating Torus Knot
function TorusKnot() {
  const meshRef = useRef()
  const { mouse } = useThree()

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005
      meshRef.current.rotation.y += 0.008
      meshRef.current.rotation.z += 0.003
      // Mouse interaction
      meshRef.current.position.x = mouse.x * 0.5
      meshRef.current.position.y = -mouse.y * 0.3
    }
  })

  return (
    <mesh ref={meshRef} position={[6, -1, -10]}>
      <torusKnotGeometry args={[0.8, 0.25, 128, 16, 3, 4]} />
      <meshStandardMaterial
        color="#8b5cf6"
        emissive="#8b5cf6"
        emissiveIntensity={0.3}
        roughness={0.3}
        metalness={0.7}
        wireframe={false}
      />
    </mesh>
  )
}

// Floating Rings
function FloatingRings() {
  const ringsRef = useRef([])
  
  useFrame((state, delta) => {
    ringsRef.current.forEach((ring, i) => {
      if (ring) {
        ring.rotation.x += 0.002 * (i + 1)
        ring.rotation.y += 0.003 * (i + 1)
        ring.rotation.z += 0.001 * (i + 1)
      }
    })
  })

  return (
    <>
      {[1, 2, 3, 4].map((i) => (
        <mesh
          key={i}
          ref={(el) => (ringsRef.current[i] = el)}
          position={[Math.sin(i) * 2, Math.cos(i) * 2 - 1, -12 - i]}
          rotation={[Math.PI / 4, Math.PI / 3, 0]}
        >
          <torusGeometry args={[1.2 + i * 0.2, 0.05, 64, 200]} />
          <meshStandardMaterial
            color={`hsl(${250 + i * 20}, 70%, 60%)`}
            emissive={`hsl(${250 + i * 20}, 70%, 50%)`}
            emissiveIntensity={0.3}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </>
  )
}

// Main 3D Scene Component
export default function ThreeBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 75 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -5, -10]} intensity={0.5} color="#8b5cf6" />
        <pointLight position={[5, 5, 5]} intensity={0.6} color="#06b6d4" />
        
        {/* Starfield Background */}
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        
        {/* Main Elements */}
        <ParticleField />
        <AnimatedSphere />
        <TorusKnot />
        <FloatingRings />
        
        {/* Optional: Add floating orbs */}
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
      
      {/* Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/40" />
      
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noise)"/%3E%3C/svg%3E')] bg-repeat" />
    </div>
  )
}