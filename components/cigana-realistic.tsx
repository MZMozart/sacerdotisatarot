"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type { Mesh, Group } from "three"

interface CiganaRealisticProps {
  currentStep: number
}

export function CiganaRealistic({ currentStep }: CiganaRealisticProps) {
  const groupRef = useRef<Group>(null)
  const headRef = useRef<Mesh>(null)
  const leftArmRef = useRef<Mesh>(null)
  const rightArmRef = useRef<Mesh>(null)
  const eyeLeftRef = useRef<Mesh>(null)
  const eyeRightRef = useRef<Mesh>(null)
  const cardsRef = useRef<Mesh>(null)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()

    // Respiração suave
    if (headRef.current) {
      headRef.current.position.y = Math.sin(time * 0.8) * 0.03
    }

    // Piscar realista
    const blinkTime = Math.sin(time * 0.3)
    if (eyeLeftRef.current && eyeRightRef.current) {
      const blink = blinkTime > 0.98 ? 0.1 : 1
      eyeLeftRef.current.scale.y = blink
      eyeRightRef.current.scale.y = blink
    }

    // Animações baseadas na etapa atual
    if (leftArmRef.current && rightArmRef.current) {
      switch (currentStep) {
        case 0: // Embaralhando
          leftArmRef.current.rotation.z = Math.sin(time * 2) * 0.3 + 0.2
          rightArmRef.current.rotation.z = Math.sin(time * 2 + Math.PI) * 0.3 - 0.2
          break
        case 1: // Revelando primeira carta
          leftArmRef.current.rotation.z = Math.sin(time * 0.5) * 0.1 + 0.1
          rightArmRef.current.rotation.z = -0.4 // Mostrando carta
          break
        case 2: // Explicando
          leftArmRef.current.rotation.z = Math.sin(time * 0.8) * 0.15 + 0.15
          rightArmRef.current.rotation.z = Math.sin(time * 0.8) * 0.15 - 0.15
          break
        case 3: // Abençoando
          leftArmRef.current.rotation.z = 0.3
          rightArmRef.current.rotation.z = -0.3
          break
        default:
          leftArmRef.current.rotation.z = Math.sin(time * 0.5) * 0.1 + 0.1
          rightArmRef.current.rotation.z = Math.sin(time * 0.5) * 0.1 - 0.1
      }
    }

    // Animação das cartas
    if (cardsRef.current && currentStep >= 0) {
      if (currentStep === 0) {
        // Embaralhando
        cardsRef.current.rotation.y = Math.sin(time * 3) * 0.2
        cardsRef.current.position.y = Math.sin(time * 4) * 0.1 - 0.5
      } else {
        // Mostrando carta
        cardsRef.current.rotation.y = 0
        cardsRef.current.position.y = -0.3
        cardsRef.current.position.z = 0.5 // Mais próximo da câmera
      }
    }
  })

  return (
    <group ref={groupRef} position={[0, -1, 0]} scale={1.2}>
      {/* Corpo principal */}
      <mesh position={[0, -0.3, 0]}>
        <cylinderGeometry args={[0.5, 0.7, 1.4, 12]} />
        <meshStandardMaterial color="#6a1b9a" />
      </mesh>

      {/* Cabeça */}
      <mesh ref={headRef} position={[0, 0.4, 0]}>
        <sphereGeometry args={[0.4, 16, 16]} />
        <meshStandardMaterial color="#fdbcb4" />
      </mesh>

      {/* Cabelo loiro */}
      <mesh position={[0, 0.6, 0]}>
        <sphereGeometry args={[0.42, 16, 16]} />
        <meshStandardMaterial color="#f4d03f" />
      </mesh>

      {/* Turbante roxo */}
      <mesh position={[0, 0.75, 0]}>
        <cylinderGeometry args={[0.45, 0.4, 0.35, 12]} />
        <meshStandardMaterial color="#8e44ad" />
      </mesh>

      {/* Joia do turbante */}
      <mesh position={[0, 0.8, 0.4]}>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshStandardMaterial color="#f1c40f" emissive="#f39c12" emissiveIntensity={0.4} />
      </mesh>

      {/* Olhos */}
      <mesh ref={eyeLeftRef} position={[-0.15, 0.45, 0.3]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial color="#2c3e50" />
      </mesh>
      <mesh ref={eyeRightRef} position={[0.15, 0.45, 0.3]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial color="#2c3e50" />
      </mesh>

      {/* Nariz */}
      <mesh position={[0, 0.38, 0.35]}>
        <coneGeometry args={[0.04, 0.1, 6]} />
        <meshStandardMaterial color="#f1948a" />
      </mesh>

      {/* Boca */}
      <mesh position={[0, 0.3, 0.35]}>
        <sphereGeometry args={[0.03, 8, 4]} />
        <meshStandardMaterial color="#e74c3c" />
      </mesh>

      {/* Brincos dourados */}
      <mesh position={[-0.45, 0.35, 0]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshStandardMaterial color="#f1c40f" emissive="#f39c12" emissiveIntensity={0.3} />
      </mesh>
      <mesh position={[0.45, 0.35, 0]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshStandardMaterial color="#f1c40f" emissive="#f39c12" emissiveIntensity={0.3} />
      </mesh>

      {/* Braço esquerdo */}
      <mesh ref={leftArmRef} position={[-0.6, -0.1, 0]} rotation={[0, 0, 0.2]}>
        <cylinderGeometry args={[0.1, 0.12, 0.9, 8]} />
        <meshStandardMaterial color="#fdbcb4" />
      </mesh>

      {/* Braço direito */}
      <mesh ref={rightArmRef} position={[0.6, -0.1, 0]} rotation={[0, 0, -0.2]}>
        <cylinderGeometry args={[0.1, 0.12, 0.9, 8]} />
        <meshStandardMaterial color="#fdbcb4" />
      </mesh>

      {/* Mãos */}
      <mesh position={[-0.7, -0.6, 0.1]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshStandardMaterial color="#fdbcb4" />
      </mesh>
      <mesh position={[0.7, -0.6, 0.1]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshStandardMaterial color="#fdbcb4" />
      </mesh>

      {/* Cartas de Tarot */}
      {currentStep >= 0 && (
        <group ref={cardsRef} position={[0, -0.5, 0.3]}>
          {/* Baralho */}
          <mesh position={[-0.2, 0, 0]}>
            <boxGeometry args={[0.15, 0.02, 0.25]} />
            <meshStandardMaterial color="#4a148c" />
          </mesh>

          {/* Carta sendo mostrada */}
          {currentStep > 0 && (
            <mesh position={[0.2, 0.1, 0]} rotation={[0, 0, 0.1]}>
              <boxGeometry args={[0.18, 0.01, 0.28]} />
              <meshStandardMaterial color="#fff3e0" />
            </mesh>
          )}

          {/* Cartas espalhadas (quando embaralhando) */}
          {currentStep === 0 &&
            [...Array(5)].map((_, i) => (
              <mesh
                key={i}
                position={[(Math.random() - 0.5) * 0.6, Math.random() * 0.1, (Math.random() - 0.5) * 0.3]}
                rotation={[0, 0, (Math.random() - 0.5) * 0.5]}
              >
                <boxGeometry args={[0.15, 0.01, 0.25]} />
                <meshStandardMaterial color="#4a148c" />
              </mesh>
            ))}
        </group>
      )}

      {/* Mesa de madeira */}
      <mesh position={[0, -1.2, 0]}>
        <cylinderGeometry args={[1.2, 1.2, 0.1, 16]} />
        <meshStandardMaterial color="#8d6e63" />
      </mesh>

      {/* Toalha roxa na mesa */}
      <mesh position={[0, -1.1, 0]}>
        <cylinderGeometry args={[1.1, 1.1, 0.02, 16]} />
        <meshStandardMaterial color="#6a1b9a" />
      </mesh>

      {/* Efeitos místicos ao redor */}
      {[...Array(12)].map((_, i) => (
        <mesh key={i} position={[Math.sin(i * 0.5) * 1.5, Math.cos(i * 0.3) * 0.5 + 0.2, Math.sin(i * 0.7) * 0.8]}>
          <sphereGeometry args={[0.03, 6, 6]} />
          <meshStandardMaterial color="#9c27b0" emissive="#e91e63" emissiveIntensity={0.5} transparent opacity={0.7} />
        </mesh>
      ))}

      {/* Cristal na mesa */}
      <mesh position={[0.5, -1, 0.3]}>
        <octahedronGeometry args={[0.08]} />
        <meshStandardMaterial color="#e1bee7" emissive="#9c27b0" emissiveIntensity={0.3} transparent opacity={0.8} />
      </mesh>

      {/* Velas */}
      <mesh position={[-0.8, -1, 0.2]}>
        <cylinderGeometry args={[0.03, 0.03, 0.2, 8]} />
        <meshStandardMaterial color="#fff3e0" />
      </mesh>
      <mesh position={[0.8, -1, 0.2]}>
        <cylinderGeometry args={[0.03, 0.03, 0.2, 8]} />
        <meshStandardMaterial color="#fff3e0" />
      </mesh>

      {/* Chamas das velas */}
      <mesh position={[-0.8, -0.85, 0.2]}>
        <sphereGeometry args={[0.02, 6, 6]} />
        <meshStandardMaterial color="#ff9800" emissive="#ff5722" emissiveIntensity={0.8} />
      </mesh>
      <mesh position={[0.8, -0.85, 0.2]}>
        <sphereGeometry args={[0.02, 6, 6]} />
        <meshStandardMaterial color="#ff9800" emissive="#ff5722" emissiveIntensity={0.8} />
      </mesh>
    </group>
  )
}
