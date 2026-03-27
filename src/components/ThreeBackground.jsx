import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Stars } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField() {
  const ref = useRef()
  const particlesCount = 3000
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
        size={0.15}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </Points>
  )
}

function RotatingCube() {
  const meshRef = useRef()
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh ref={meshRef} position={[5, 2, -10]}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial 
        color="#8b5cf6" 
        emissive="#06b6d4"
        emissiveIntensity={0.5}
        transparent
        opacity={0.6}
      />
    </mesh>
  )
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 75 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
        <ParticleField />
        <RotatingCube />
      </Canvas>
    </div>
  )
}