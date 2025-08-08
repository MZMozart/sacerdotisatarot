import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sandra do Tarot - Consultas Místicas e Orientação Espiritual",
  description:
    "Descubra os segredos do Tarot com Sandra. Bem-vinda ao caminho das cartas - o universo fala com você, basta escutar.",
  keywords: "tarot, consulta, místico, cartas, orientação espiritual, Sandra, vidente",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} overflow-x-hidden`}>{children}</body>
    </html>
  )
}
