"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type { Mesh } from "three"

export function CiganaCharacter() {
  const headRef = useRef<Mesh>(null)
  const leftArmRef = useRef<Mesh>(null)
  const rightArmRef = useRef<Mesh>(null)
  const eyeLeftRef = useRef<Mesh>(null)
  const eyeRightRef = useRef<Mesh>(null)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()

    // Animação de respiração
    if (headRef.current) {
      headRef.current.position.y = Math.sin(time * 0.5) * 0.05
    }

    // Movimento sutil dos braços
    if (leftArmRef.current) {
      leftArmRef.current.rotation.z = Math.sin(time * 0.3) * 0.1 + 0.2
    }
    if (rightArmRef.current) {
      rightArmRef.current.rotation.z = Math.sin(time * 0.3) * 0.1 - 0.2
    }

    // Piscar dos olhos
    const blinkTime = Math.sin(time * 0.5)
    if (eyeLeftRef.current && eyeRightRef.current) {
      const blink = blinkTime > 0.95 ? 0.1 : 1
      eyeLeftRef.current.scale.y = blink
      eyeRightRef.current.scale.y = blink
    }
  })

  return (
    <group position={[0, -1, 0]}>
      {/* Corpo */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.4, 0.6, 1.2, 8]} />
        <meshStandardMaterial color="#4a1d4a" />
      </mesh>

      {/* Cabeça */}
      <mesh ref={headRef} position={[0, 0.3, 0]}>
        <sphereGeometry args={[0.35, 16, 16]} />
        <meshStandardMaterial color="#fdbcb4" />
      </mesh>

      {/* Cabelo loiro */}
      <mesh position={[0, 0.5, 0]}>
        <sphereGeometry args={[0.38, 16, 16]} />
        <meshStandardMaterial color="#f4d03f" />
      </mesh>

      {/* Turbante */}
      <mesh position={[0, 0.65, 0]}>
        <cylinderGeometry args={[0.4, 0.35, 0.3, 8]} />
        <meshStandardMaterial color="#8e44ad" />
      </mesh>

      {/* Joia do turbante */}
      <mesh position={[0, 0.7, 0.35]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial color="#f1c40f" emissive="#f39c12" emissiveIntensity={0.3} />
      </mesh>

      {/* Olhos */}
      <mesh ref={eyeLeftRef} position={[-0.12, 0.35, 0.25]}>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshStandardMaterial color="#2c3e50" />
      </mesh>
      <mesh ref={eyeRightRef} position={[0.12, 0.35, 0.25]}>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshStandardMaterial color="#2c3e50" />
      </mesh>

      {/* Nariz */}
      <mesh position={[0, 0.28, 0.3]}>
        <coneGeometry args={[0.03, 0.08, 4]} />
        <meshStandardMaterial color="#f1948a" />
      </mesh>

      {/* Brincos */}
      <mesh position={[-0.4, 0.25, 0]}>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshStandardMaterial color="#f1c40f" emissive="#f39c12" emissiveIntensity={0.2} />
      </mesh>
      <mesh position={[0.4, 0.25, 0]}>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshStandardMaterial color="#f1c40f" emissive="#f39c12" emissiveIntensity={0.2} />
      </mesh>

      {/* Braço esquerdo */}
      <mesh ref={leftArmRef} position={[-0.5, -0.2, 0]}>
        <cylinderGeometry args={[0.08, 0.1, 0.8, 8]} />
        <meshStandardMaterial color="#fdbcb4" />
      </mesh>

      {/* Braço direito */}
      <mesh ref={rightArmRef} position={[0.5, -0.2, 0]}>
        <cylinderGeometry args={[0.08, 0.1, 0.8, 8]} />
        <meshStandardMaterial color="#fdbcb4" />
      </mesh>

      {/* Mão direita segurando cartas */}
      <mesh position={[0.5, -0.7, 0.2]}>
        <boxGeometry args={[0.15, 0.02, 0.25]} />
        <meshStandardMaterial color="#8e44ad" />
      </mesh>

      {/* Efeitos de fumaça/brilho */}
      {[...Array(8)].map((_, i) => (
        <mesh key={i} position={[Math.sin(i * 0.8) * 0.8, Math.cos(i * 0.8) * 0.3 + 0.5, Math.sin(i * 0.5) * 0.3]}>
          <sphereGeometry args={[0.02, 4, 4]} />
          <meshStandardMaterial color="#e74c3c" emissive="#f39c12" emissiveIntensity={0.5} transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  )
}
