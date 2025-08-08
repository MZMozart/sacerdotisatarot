"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { MessageCircle, Star, Sparkles, Zap, Heart, Eye, Shield, Moon, Sun, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const zodiacSigns = [
  { sign: "♈", name: "Áries", element: "Fogo", dates: "21/03 - 19/04" },
  { sign: "♉", name: "Touro", element: "Terra", dates: "20/04 - 20/05" },
  { sign: "♊", name: "Gêmeos", element: "Ar", dates: "21/05 - 20/06" },
  { sign: "♋", name: "Câncer", element: "Água", dates: "21/06 - 22/07" },
  { sign: "♌", name: "Leão", element: "Fogo", dates: "23/07 - 22/08" },
  { sign: "♍", name: "Virgem", element: "Terra", dates: "23/08 - 22/09" },
  { sign: "♎", name: "Libra", element: "Ar", dates: "23/09 - 22/10" },
  { sign: "♏", name: "Escorpião", element: "Água", dates: "23/10 - 21/11" },
  { sign: "♐", name: "Sagitário", element: "Fogo", dates: "22/11 - 21/12" },
  { sign: "♑", name: "Capricórnio", element: "Terra", dates: "22/12 - 19/01" },
  { sign: "♒", name: "Aquário", element: "Ar", dates: "20/01 - 18/02" },
  { sign: "♓", name: "Peixes", element: "Água", dates: "19/02 - 20/03" },
]

const riderWaiteCards = [
  { name: "O Louco", meaning: "Novos começos, espontaneidade", number: "0" },
  { name: "O Mago", meaning: "Manifestação, poder pessoal", number: "I" },
  { name: "A Sacerdotisa", meaning: "Intuição, mistério", number: "II" },
  { name: "A Imperatriz", meaning: "Fertilidade, abundância", number: "III" },
  { name: "O Imperador", meaning: "Autoridade, estrutura", number: "IV" },
  { name: "O Hierofante", meaning: "Tradição, espiritualidade", number: "V" },
]

const lenormandCards = [
  { name: "Cavaleiro", meaning: "Notícias, movimento", symbol: "🏇" },
  { name: "Trevo", meaning: "Sorte, oportunidades", symbol: "🍀" },
  { name: "Navio", meaning: "Viagem, distância", symbol: "⛵" },
  { name: "Casa", meaning: "Lar, família", symbol: "🏠" },
  { name: "Árvore", meaning: "Saúde, crescimento", symbol: "🌳" },
  { name: "Nuvens", meaning: "Confusão, problemas", symbol: "☁️" },
]

export default function SandraTarotSite() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const handleWhatsAppClick = () => {
    const phoneNumber = "5511944856854"
    const message =
      "Olá Sandra! Vi seu site incrível e quero uma consulta com Rider-Waite, Lenormand e análise astrológica! 🔮✨"
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <div ref={containerRef} className="bg-black text-white overflow-x-hidden">
      {/* Hero Section - Apple Style */}
      <HeroSection />

      {/* Zodiac Section */}
      <ZodiacSection />

      {/* Rider-Waite Section */}
      <RiderWaiteSection />

      {/* Lenormand Section */}
      <LenormandSection />

      {/* Pricing Section */}
      <PricingSection onWhatsAppClick={handleWhatsAppClick} />


      {/* Features Sections */}
      <PowerSection />
      <PrecisionSection />
      <ExperienceSection />
      <TransformationSection />

      {/* Contact Section */}
      <ContactSection onWhatsAppClick={handleWhatsAppClick} />

      {/* Final CTA */}
      <CTASection onWhatsAppClick={handleWhatsAppClick} />

      {/* Footer */}
      <FooterSection onWhatsAppClick={handleWhatsAppClick} />
    </div>
  )
}

// Hero Section - Ainda mais épico
function HeroSection() {
  return (
    <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background com constelações */}
      <div className="absolute inset-0">
        {zodiacSigns.map((zodiac, i) => (
          <motion.div
            key={i}
            className="absolute text-purple-400/20 text-6xl sm:text-8xl md:text-9xl font-bold select-none"
            style={{
              left: `${(i * 8.33) % 100}%`,
              top: `${Math.sin(i * 0.5) * 40 + 50}%`,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20 + i * 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            {zodiac.sign}
          </motion.div>
        ))}

        {/* Partículas douradas */}
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 2, 0],
              y: [0, -100],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-center z-10 px-4"
      >
        {/* Logo com efeito místico */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0, rotateY: 180 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          transition={{ delay: 0.3, duration: 1.5 }}
          className="mb-8 relative"
        >
          <Image src="https://cdn.builder.io/api/v1/image/assets%2F98d88456acef49e983b7a477cc54d400%2F9731d76ad2d940c983e5e8f2f094b745?format=webp&width=800" alt="A Sacerdotisa Tarot" width={150} height={150} className="mx-auto" />

          {/* Aura dourada */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-purple-400/20 to-yellow-400/20 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
            }}
          />
        </motion.div>

        {/* Título principal com efeito épico */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin mb-6 tracking-tight"
        >
          <span className="bg-gradient-to-r from-yellow-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            A Sacerdotisa Tarot
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin mb-8 text-gray-300"
        >
          Místico • Astrológico • Transformador
        </motion.h2>

        {/* Especialidades */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex flex-wrap justify-center gap-4 mb-12 text-lg sm:text-xl"
        >
          <span className="bg-purple-600/30 px-4 py-2 rounded-full border border-purple-400/50">Rider-Waite</span>
          <span className="bg-yellow-600/30 px-4 py-2 rounded-full border border-yellow-400/50">Lenormand</span>
          <span className="bg-pink-600/30 px-4 py-2 rounded-full border border-pink-400/50">Astrologia</span>
        </motion.div>

        {/* Subtítulo épico */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="text-xl sm:text-2xl md:text-3xl text-gray-400 mb-12 max-w-5xl mx-auto leading-relaxed"
        >
          A experiência mais avançada em leitura de cartas e análise astrológica.
          <br />
          <span className="text-yellow-400">Rider-Waite • Lenormand • Signos</span>
        </motion.p>

        {/* CTA Button épico */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.1, duration: 0.8 }}
        >
          <Button
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-6 rounded-full text-xl font-medium transition-all duration-300 shadow-2xl border border-purple-400/50"
            size="lg"
          >
            <Sparkles className="w-6 h-6 mr-3" />
            Descobrir meu Destino
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator místico */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
          className="w-8 h-12 border-2 border-purple-400 rounded-full flex justify-center relative"
        >
          <motion.div
            animate={{ y: [0, 16, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
            className="w-1.5 h-4 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mt-2"
          />

          {/* Partículas ao redor */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full"
              style={{
                left: `${Math.cos((i * 60 * Math.PI) / 180) * 20 + 50}%`,
                top: `${Math.sin((i * 60 * Math.PI) / 180) * 20 + 50}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

// Seção do Zodíaco - Novo Design baseado na imagem
function ZodiacSection() {
  const [selectedSign, setSelectedSign] = useState<number | null>(6) // Libra por padrão

  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-950 relative overflow-hidden">
      {/* Background stars */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8">
            <span className="text-white">Conexão</span>
            <br />
            <span className="text-yellow-400">Astrológica</span>
          </h2>
        </motion.div>

        {/* Layout principal - Circle + Info Panel */}
        <div className="flex flex-col xl:flex-row items-center justify-center gap-8 lg:gap-16 xl:gap-24">
          {/* Círculo do Zodíaco */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[480px] md:h-[480px] mb-8 xl:mb-0"
          >
            {/* Sol central */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg border-4 border-yellow-300/30">
              <span className="text-2xl sm:text-3xl md:text-4xl">☀️</span>
            </div>

            {/* Signos em círculo */}
            {zodiacSigns.map((zodiac, i) => {
              const angle = i * 30 - 90 // 30 graus entre cada signo
              const radius = 180 // Aumentado de 140 para 180
              const x = Math.cos((angle * Math.PI) / 180) * radius
              const y = Math.sin((angle * Math.PI) / 180) * radius

              return (
                <div
                  key={i}
                  className="absolute cursor-pointer group"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                  onClick={() => setSelectedSign(i)}
                >
                  <div
                    className={`w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold transition-all duration-300 shadow-lg border-2 ${
                      selectedSign === i
                        ? "bg-green-500 text-white border-green-300 scale-110 shadow-green-500/50"
                        : "bg-purple-600/70 text-white border-purple-400/50 hover:bg-purple-500/90 hover:scale-105 hover:shadow-purple-500/30"
                    }`}
                  >
                    {zodiac.sign}
                  </div>

                  {/* Nome do signo - aparece no hover */}
                  <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap shadow-lg border border-gray-600">
                      {zodiac.name}
                    </div>
                  </div>
                </div>
              )
            })}
          </motion.div>

          {/* Painel de informações */}
          <AnimatePresence mode="wait">
            {selectedSign !== null && (
              <motion.div
                key={selectedSign}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-800 rounded-2xl p-4 sm:p-6 w-full max-w-sm sm:w-80 border border-gray-600 shadow-xl mx-4 sm:mx-0 mt-8 xl:mt-0"
              >
                {/* Header com ícone */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{zodiacSigns[selectedSign].sign}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{zodiacSigns[selectedSign].name}</h3>
                </div>

                {/* Informações */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-300">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span className="text-sm">Elemento: {zodiacSigns[selectedSign].element}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    <span className="text-sm">{zodiacSigns[selectedSign].dates}</span>
                  </div>
                </div>

                {/* Botão WhatsApp */}
                <Button
                  onClick={() => {
                    const message = `Olá! Sou de ${zodiacSigns[selectedSign].name} e quero uma consulta astrológica personalizada com A Sacerdotisa Tarot! 🔮✨`
                    const url = `https://api.whatsapp.com/send?phone=5511944856854&text=${encodeURIComponent(message)}`
                    window.open(url, "_blank")
                  }}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Consulta para {zodiacSigns[selectedSign].name}
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

// Seção Rider-Waite - ÉPICA
function RiderWaiteSection() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null)

  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-black via-purple-950 to-indigo-950">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-thin mb-8">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Rider-Waite
            </span>
            <br />
            Tradicional
          </h2>

          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            O baralho mais famoso e respeitado do mundo. Criado por Arthur Edward Waite e ilustrado por Pamela Colman
            Smith, é a base de quase todos os tarots modernos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
            <div className="bg-purple-900/30 p-6 rounded-xl border border-purple-400/30">
              <Crown className="w-8 h-8 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">78 Cartas Sagradas</h3>
              <p className="text-gray-400">22 Arcanos Maiores e 56 Arcanos Menores com simbolismo profundo</p>
            </div>

            <div className="bg-purple-900/30 p-6 rounded-xl border border-purple-400/30">
              <Eye className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Simbolismo Rico</h3>
              <p className="text-gray-400">Cada carta contém símbolos cabalísticos, astrológicos e alquímicos</p>
            </div>

            <div className="bg-purple-900/30 p-6 rounded-xl border border-purple-400/30">
              <Sparkles className="w-8 h-8 text-pink-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Precisão Absoluta</h3>
              <p className="text-gray-400">Interpretações precisas baseadas em mais de 100 anos de tradição</p>
            </div>
          </div>
        </motion.div>

        {/* Cartas Rider-Waite Interativas */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-12">
          {riderWaiteCards.map((card, i) => (
            <motion.div
              key={i}
              className="cursor-pointer"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCard(selectedCard === i ? null : i)}
            >
              <motion.div
                className={`w-full h-40 bg-gradient-to-br from-purple-600 to-indigo-800 rounded-xl border-2 transition-all duration-300 relative overflow-hidden ${
                  selectedCard === i
                    ? "border-yellow-400 shadow-2xl shadow-yellow-400/50"
                    : "border-purple-400/50 hover:border-purple-300"
                }`}
                animate={{
                  boxShadow:
                    selectedCard === i
                      ? [
                          "0 0 20px rgba(251, 191, 36, 0.5)",
                          "0 0 40px rgba(251, 191, 36, 0.8)",
                          "0 0 20px rgba(251, 191, 36, 0.5)",
                        ]
                      : "0 0 10px rgba(168, 85, 247, 0.3)",
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              >
                {/* Número da carta */}
                <div className="absolute top-2 left-2 text-yellow-400 font-bold text-lg">{card.number}</div>

                {/* Centro da carta */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🔮</div>
                    <div className="text-xs text-white font-semibold px-2">{card.name}</div>
                  </div>
                </div>

                {/* Efeito de brilho */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-purple-400/10"
                  animate={{
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 3 + Math.random(),
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.2,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Informações da Carta Selecionada */}
        <AnimatePresence>
          {selectedCard !== null && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.8 }}
              className="max-w-2xl mx-auto text-center bg-gradient-to-br from-purple-900/50 to-indigo-900/50 p-8 rounded-2xl border border-purple-400/30 backdrop-blur-sm"
            >
              <h3 className="text-3xl font-bold text-yellow-400 mb-4">
                {riderWaiteCards[selectedCard].number} - {riderWaiteCards[selectedCard].name}
              </h3>
              <p className="text-lg text-gray-300 mb-6">{riderWaiteCards[selectedCard].meaning}</p>

              <Button
                onClick={() => {
                  const message = `Olá Sandra! Quero uma consulta focada na carta "${riderWaiteCards[selectedCard].name}" do Rider-Waite! 🔮✨`
                  const url = `https://api.whatsapp.com/send?phone=5511944856854&text=${encodeURIComponent(message)}`
                  window.open(url, "_blank")
                }}
                className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full font-semibold"
              >
                Consulta com {riderWaiteCards[selectedCard].name}
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

// Seção Lenormand - ÉPICA
function LenormandSection() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null)

  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-indigo-950 via-black to-purple-950">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-thin mb-8">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Lenormand
            </span>
            <br />
            Cigano
          </h2>

          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            O baralho cigano de Marie Anne Lenormand, a vidente mais famosa da história. 36 cartas com símbolos diretos
            e objetivos para respostas práticas e precisas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
            <div className="bg-yellow-900/30 p-6 rounded-xl border border-yellow-400/30">
              <Zap className="w-8 h-8 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Respostas Diretas</h3>
              <p className="text-gray-400">Símbolos claros e objetivos para questões práticas do dia a dia</p>
            </div>

            <div className="bg-yellow-900/30 p-6 rounded-xl border border-yellow-400/30">
              <Heart className="w-8 h-8 text-red-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Tradição Cigana</h3>
              <p className="text-gray-400">Sabedoria ancestral dos povos nômades europeus</p>
            </div>

            <div className="bg-yellow-900/30 p-6 rounded-xl border border-yellow-400/30">
              <Moon className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Timing Preciso</h3>
              <p className="text-gray-400">Previsões temporais exatas para eventos futuros</p>
            </div>
          </div>
        </motion.div>

        {/* Cartas Lenormand Interativas */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-12">
          {lenormandCards.map((card, i) => (
            <motion.div
              key={i}
              className="cursor-pointer"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCard(selectedCard === i ? null : i)}
            >
              <motion.div
                className={`w-full h-40 bg-gradient-to-br from-yellow-600 to-orange-800 rounded-xl border-2 transition-all duration-300 relative overflow-hidden ${
                  selectedCard === i
                    ? "border-yellow-300 shadow-2xl shadow-yellow-300/50"
                    : "border-yellow-400/50 hover:border-yellow-300"
                }`}
                animate={{
                  boxShadow:
                    selectedCard === i
                      ? [
                          "0 0 20px rgba(252, 211, 77, 0.5)",
                          "0 0 40px rgba(252, 211, 77, 0.8)",
                          "0 0 20px rgba(252, 211, 77, 0.5)",
                        ]
                      : "0 0 10px rgba(251, 191, 36, 0.3)",
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              >
                {/* Número da carta */}
                <div className="absolute top-2 left-2 text-white font-bold text-lg">{i + 1}</div>

                {/* Centro da carta */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">{card.symbol}</div>
                    <div className="text-xs text-white font-semibold px-2">{card.name}</div>
                  </div>
                </div>

                {/* Efeito de brilho */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-yellow-300/10 via-transparent to-orange-400/10"
                  animate={{
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 3 + Math.random(),
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.2,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Informações da Carta Selecionada */}
        <AnimatePresence>
          {selectedCard !== null && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.8 }}
              className="max-w-2xl mx-auto text-center bg-gradient-to-br from-yellow-900/50 to-orange-900/50 p-8 rounded-2xl border border-yellow-400/30 backdrop-blur-sm"
            >
              <h3 className="text-3xl font-bold text-yellow-300 mb-4">
                {selectedCard + 1} - {lenormandCards[selectedCard].name} {lenormandCards[selectedCard].symbol}
              </h3>
              <p className="text-lg text-gray-300 mb-6">{lenormandCards[selectedCard].meaning}</p>

              <Button
                onClick={() => {
                  const message = `Olá Sandra! Quero uma consulta com o Baralho Cigano focada na carta "${lenormandCards[selectedCard].name}"! 🔮✨`
                  const url = `https://api.whatsapp.com/send?phone=5511944856854&text=${encodeURIComponent(message)}`
                  window.open(url, "_blank")
                }}
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full font-semibold"
              >
                Consulta com {lenormandCards[selectedCard].name}
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

// Seção de Poder - Atualizada
function PowerSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-6xl font-thin mb-8">
              Poder
              <br />
              <span className="text-yellow-400">Místico</span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Combinando a sabedoria do Rider-Waite, a precisão do Lenormand e a profundidade da Astrologia, Sandra
              oferece a experiência mais completa em orientação espiritual.
            </p>

            <div className="space-y-6">
              <FeatureItem
                icon={<Zap className="w-6 h-6" />}
                title="Tripla Sabedoria"
                description="Rider-Waite + Lenormand + Astrologia em uma única consulta"
              />
              <FeatureItem
                icon={<Eye className="w-6 h-6" />}
                title="Visão 360°"
                description="Análise completa: passado, presente, futuro e influências astrais"
              />
              <FeatureItem
                icon={<Sparkles className="w-6 h-6" />}
                title="Energia Cósmica"
                description="Conexão com as forças universais e planetárias"
              />
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div style={{ scale }} className="relative flex items-center justify-center">
            <motion.div style={{ rotate }} className="relative w-80 h-80 sm:w-96 sm:h-96">
              {/* Cartas em círculo */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-16 h-24 bg-gradient-to-br from-purple-600 to-indigo-800 rounded-lg border border-yellow-400/50"
                  style={{
                    left: "50%",
                    top: "50%",
                    transformOrigin: "50% 150px",
                    transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
                  }}
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(168, 85, 247, 0.4)",
                      "0 0 40px rgba(168, 85, 247, 0.8)",
                      "0 0 20px rgba(168, 85, 247, 0.4)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.1,
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center text-yellow-400 text-xl">
                    {i < 6 ? "🔮" : i < 10 ? zodiacSigns[i - 6].sign : "✦"}
                  </div>
                </motion.div>
              ))}

              {/* Centro brilhante */}
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-yellow-400 via-purple-400 to-pink-400 rounded-full flex items-center justify-center"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              >
                <Crown className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Seção de Precisão - Atualizada
function PrecisionSection() {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <TarotCardStack />
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-6xl font-thin mb-8">
              Precisão
              <br />
              <span className="text-purple-400">Absoluta</span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              15 anos de experiência com os três sistemas mais poderosos de adivinhação: Tarot Rider-Waite, Baralho
              Cigano Lenormand e Astrologia Tradicional.
            </p>

            <div className="space-y-6">
              <FeatureItem
                icon={<Shield className="w-6 h-6" />}
                title="Método Tríplice"
                description="Validação cruzada entre Tarot, Lenormand e Astrologia"
              />
              <FeatureItem
                icon={<Heart className="w-6 h-6" />}
                title="Conexão Profunda"
                description="Leituras feitas com amor, intuição e conhecimento ancestral"
              />
              <FeatureItem
                icon={<Star className="w-6 h-6" />}
                title="Transformação Real"
                description="Milhares de vidas transformadas através das revelações"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Seção de Experiência - Atualizada
function ExperienceSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-purple-950 to-black">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-5xl sm:text-6xl md:text-7xl font-thin mb-12"
        >
          Uma experiência
          <br />
          <span className="bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent">
            transformadora
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
          <ExperienceCard
            number="01"
            title="Análise Astrológica"
            description="Mapeamento completo do seu mapa astral e influências planetárias atuais"
          />
          <ExperienceCard
            number="02"
            title="Rider-Waite"
            description="Leitura profunda com os 78 arcanos do baralho mais respeitado do mundo"
          />
          <ExperienceCard
            number="03"
            title="Lenormand Cigano"
            description="Respostas diretas e timing preciso com as 36 cartas ciganas"
          />
          <ExperienceCard
            number="04"
            title="Síntese Final"
            description="Integração de todas as informações em um plano de ação transformador"
          />
        </div>
      </div>
    </section>
  )
}

// Seção de Transformação - Atualizada
function TransformationSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-thin mb-8">
            Pronta para descobrir
            <br />
            <span className="text-yellow-400">todos os seus segredos?</span>
          </h2>

          <p className="text-xl sm:text-2xl text-gray-300 mb-12 leading-relaxed">
            Rider-Waite + Lenormand + Astrologia = A consulta mais completa que você já teve.
            <br />
            Descubra seu passado, presente, futuro e destino astrológico.
          </p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-4 gap-8 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">15+</div>
              <div className="text-gray-400">Anos de experiência</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">3</div>
              <div className="text-gray-400">Sistemas místicos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">1000+</div>
              <div className="text-gray-400">Vidas transformadas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">12</div>
              <div className="text-gray-400">Signos dominados</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Seção CTA - Atualizada
function CTASection({ onWhatsAppClick }: { onWhatsAppClick: () => void }) {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-r from-purple-900 via-indigo-900 to-black relative overflow-hidden">
      {/* Background com signos */}
      <div className="absolute inset-0">
        {zodiacSigns.map((zodiac, i) => (
          <motion.div
            key={i}
            className="absolute text-purple-400/10 text-8xl font-bold select-none"
            style={{
              left: `${(i * 8.33) % 100}%`,
              top: `${Math.sin(i * 0.5) * 40 + 50}%`,
            }}
            animate={{
              opacity: [0.05, 0.15, 0.05],
              rotate: [0, 360],
            }}
            transition={{
              duration: 30 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            {zodiac.sign}
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-thin mb-8">
            Sua jornada
            <br />
            <span className="text-yellow-400">cósmica</span>
            <br />
            <span className="text-purple-400">começa agora</span>
          </h2>

          <p className="text-xl sm:text-2xl text-gray-200 mb-12 leading-relaxed">
            Não deixe o universo esperando. Seus astros, suas cartas e seu destino
            <br />
            estão alinhados para esta revelação transformadora.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mb-8">
            <Button
              onClick={onWhatsAppClick}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-16 py-8 rounded-full text-2xl font-medium transition-all duration-300 shadow-2xl border border-green-400/50"
              size="lg"
            >
              <MessageCircle className="w-8 h-8 mr-4" />
              Consulta Completa Agora
            </Button>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span className="bg-purple-600/20 px-3 py-1 rounded-full">✨ Rider-Waite</span>
            <span className="bg-yellow-600/20 px-3 py-1 rounded-full">🔮 Lenormand</span>
            <span className="bg-pink-600/20 px-3 py-1 rounded-full">⭐ Astrologia</span>
            <span className="bg-green-600/20 px-3 py-1 rounded-full">💚 Primeira consulta com desconto</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Footer - Atualizado
function FooterSection({ onWhatsAppClick }: { onWhatsAppClick: () => void }) {
  return (
    <footer className="py-16 bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Image src="https://cdn.builder.io/api/v1/image/assets%2F98d88456acef49e983b7a477cc54d400%2F9731d76ad2d940c983e5e8f2f094b745?format=webp&width=800" alt="A Sacerdotisa Tarot" width={60} height={60} className="mb-4" />
            <p className="text-gray-400 text-sm mb-4">
              Transformando vidas através da sabedoria ancestral do Tarot, Lenormand e Astrologia.
            </p>
            <div className="flex gap-2">
              <span className="text-xs bg-purple-600/20 px-2 py-1 rounded">Rider-Waite</span>
              <span className="text-xs bg-yellow-600/20 px-2 py-1 rounded">Lenormand</span>
              <span className="text-xs bg-pink-600/20 px-2 py-1 rounded">Astrologia</span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Especialidades</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• Tarot Rider-Waite Tradicional</li>
              <li>• Baralho Cigano Lenormand</li>
              <li>• Análise Astrológica Completa</li>
              <li>• Orientação dos 12 Signos</li>
              <li>• Desenvolvimento Espiritual</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>📱 +55 11 94485-6854</li>
              <li>🌟 Consultas presenciais e online</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Conecte-se</h3>
            <Button
              onClick={onWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-sm mb-4 w-full"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 A Sacerdotisa Tarot. Todos os direitos reservados.</p>
          <p className="mt-2">Rider-Waite • Lenormand • Astrologia • 15+ anos de experiência</p>
        </div>
      </div>
    </footer>
  )
}

// Componentes auxiliares
function FeatureItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex items-start gap-4"
    >
      <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-white font-semibold mb-1">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </motion.div>
  )
}

function ExperienceCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-6xl font-thin text-purple-400 mb-4">{number}</div>
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <p className="text-gray-300 leading-relaxed text-sm">{description}</p>
    </motion.div>
  )
}

function TarotCardStack() {
  return (
    <div className="relative w-80 h-80 mx-auto">
      {/* Rider-Waite Cards */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`rw-${i}`}
          className="absolute w-48 h-72 bg-gradient-to-br from-purple-600 to-indigo-800 rounded-xl border border-yellow-400/50 shadow-2xl"
          style={{
            left: "50%",
            top: "50%",
            transform: `translate(-50%, -50%) rotate(${i * 12 - 12}deg) translateX(${i * -20}px)`,
            zIndex: 6 - i,
          }}
          animate={{
            y: [0, -10, 0],
            rotateY: [0, 5, 0],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.2,
          }}
        >
          <div className="w-full h-full flex flex-col items-center justify-center text-yellow-400">
            <div className="text-3xl mb-2">🔮</div>
            <div className="text-xs text-center px-2">Rider-Waite</div>
          </div>
        </motion.div>
      ))}

      {/* Lenormand Cards */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`ln-${i}`}
          className="absolute w-48 h-72 bg-gradient-to-br from-yellow-600 to-orange-800 rounded-xl border border-yellow-300/50 shadow-2xl"
          style={{
            left: "50%",
            top: "50%",
            transform: `translate(-50%, -50%) rotate(${i * 12 + 12}deg) translateX(${i * 20}px)`,
            zIndex: 3 - i,
          }}
          animate={{
            y: [0, -15, 0],
            rotateY: [0, -5, 0],
          }}
          transition={{
            duration: 3.5 + i * 0.5,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.3,
          }}
        >
          <div className="w-full h-full flex flex-col items-center justify-center text-white">
            <div className="text-3xl mb-2">🍀</div>
            <div className="text-xs text-center px-2">Lenormand</div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

// Seção de Preços
function PricingSection({ onWhatsAppClick }: { onWhatsAppClick: () => void }) {
  const pricingOptions = [
    {
      duration: "30 minutos",
      price: "R$ 70",
      description: "Ideal para questões específicas",
      features: ["Leitura focada", "1 pergunta principal", "Orientação direta", "Gravação opcional"],
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      priceColor: "text-blue-400",
      popular: false
    },
    {
      duration: "1 hora",
      price: "R$ 120",
      description: "Consulta completa - MAIS POPULAR",
      features: ["Leitura completa", "Múltiplas questões", "Análise profunda", "Gravação incluída"],
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      priceColor: "text-purple-400",
      popular: true
    },
    {
      duration: "1h 30min",
      price: "R$ 150",
      description: "Experiência premium",
      features: ["Leitura extensiva", "Análise astrológica", "Orientação de vida", "Gravação e relatório"],
      buttonColor: "bg-orange-600 hover:bg-orange-700",
      priceColor: "text-orange-400",
      popular: false
    }
  ]

  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-950 relative overflow-hidden">
      {/* Background stars */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
            <span className="text-green-400">Investimento</span>
            <br />
            <span className="text-white">Espiritual</span>
          </h2>
        </motion.div>

        {/* Cards de preços */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto px-2 sm:px-4">
          {pricingOptions.map((option, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative w-full"
            >
              {/* Badge "Mais Popular" */}
              {option.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="bg-gray-800 rounded-2xl p-4 sm:p-6 border border-gray-600 h-full flex flex-col min-h-[420px] sm:min-h-[450px]">
                {/* Cabeçalho */}
                <div className="text-center mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{option.duration}</h3>
                  <div className={`text-3xl sm:text-4xl font-bold ${option.priceColor} mb-2`}>
                    {option.price}
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm">{option.description}</p>
                </div>

                {/* Lista de benefícios - flex-grow para ocupar espaço disponível */}
                <div className="flex-grow mb-4 sm:mb-6">
                  <ul className="space-y-2 sm:space-y-3">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-300 text-xs sm:text-sm">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Botão sempre fixo no final */}
                <div className="mt-auto">
                  <Button
                    onClick={() => {
                      const message = `Olá! Quero agendar uma consulta de ${option.duration} (${option.price}) com A Sacerdotisa Tarot! 🔮✨`
                      const url = `https://api.whatsapp.com/send?phone=5511944856854&text=${encodeURIComponent(message)}`
                      window.open(url, "_blank")
                    }}
                    className={`w-full py-2.5 sm:py-3 rounded-xl font-semibold transition-all duration-300 ${option.buttonColor} text-white text-sm sm:text-base`}
                  >
                    📅 Agendar Agora
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


// Seção de Contato - Novo Design baseado na imagem
function ContactSection({ onWhatsAppClick }: { onWhatsAppClick: () => void }) {
  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-950 relative overflow-hidden">
      {/* Background stars */}
      <div className="absolute inset-0">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Conecte-se</span>
            <br />
            <span className="text-white">Comigo</span>
          </h2>
        </div>

        {/* Container principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Lado esquerdo - Perfil */}
          <div className="text-center lg:text-left px-4 sm:px-0">
            {/* Foto de perfil */}
            <div className="mb-4 sm:mb-6 flex justify-center lg:justify-start">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-purple-400 shadow-lg">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F98d88456acef49e983b7a477cc54d400%2F97830baf4a214f018b7c208eec866c41?format=webp&width=800"
                  alt="Sandra - Libriana"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Nome e descrição */}
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 flex items-center justify-center lg:justify-start gap-2">
              Sandra - Libriana ♎
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm mb-6 sm:mb-8 max-w-sm mx-auto lg:mx-0 leading-relaxed">
              Vidente especializada em Tarot Rider-Waite e Lenormand, com profundo conhecimento em astrologia. Como libriana, trago equilíbrio e harmonia para cada consulta.
            </p>

            {/* Contato direto */}
            <div className="space-y-3 sm:space-y-4">
              {/* WhatsApp */}
              <div
                className="bg-green-600 hover:bg-green-700 p-3 sm:p-4 rounded-xl cursor-pointer transition-colors flex items-center gap-3"
                onClick={onWhatsAppClick}
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.488"/>
                  </svg>
                </div>
                <div className="text-left min-w-0 flex-1">
                  <div className="text-white font-semibold text-sm sm:text-base">WhatsApp</div>
                  <div className="text-green-100 text-xs sm:text-sm">+55 11 94485-6854</div>
                </div>
              </div>

              {/* Telefone */}
              <div className="bg-purple-600 hover:bg-purple-700 p-3 sm:p-4 rounded-xl cursor-pointer transition-colors flex items-center gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div className="text-left min-w-0 flex-1">
                  <div className="text-white font-semibold text-sm sm:text-base">Telefone</div>
                  <div className="text-purple-100 text-xs sm:text-sm">+55 11 94485-6854</div>
                </div>
              </div>
            </div>
          </div>

          {/* Lado direito - Redes Sociais e Horário */}
          <div className="space-y-6 sm:space-y-8 px-4 sm:px-0">
            {/* Redes Sociais */}
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Redes Sociais</h4>
              <div className="space-y-2 sm:space-y-3">
                {/* Instagram */}
                <a
                  href="https://instagram.com/sandra.tarot"
                  target="_blank"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 p-3 sm:p-4 rounded-xl block transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <span className="text-white font-semibold text-sm sm:text-base">Instagram</span>
                  </div>
                </a>

                {/* TikTok */}
                <a
                  href="https://tiktok.com/@sandra.tarot"
                  target="_blank"
                  className="bg-black hover:bg-gray-900 p-3 sm:p-4 rounded-xl block transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                      </svg>
                    </div>
                    <span className="text-white font-semibold text-sm sm:text-base">TikTok</span>
                  </div>
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com/sandra.tarot"
                  target="_blank"
                  className="bg-blue-600 hover:bg-blue-700 p-3 sm:p-4 rounded-xl block transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                    <span className="text-white font-semibold text-sm sm:text-base">Facebook</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Horário de Atendimento */}
            <div className="bg-gray-800/50 p-4 sm:p-6 rounded-xl">
              <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Horário de Atendimento</h4>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Segunda - Sexta:</span>
                  <span className="text-white font-medium">09h às 18h</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Sábado:</span>
                  <span className="text-white font-medium">09h às 16h</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Domingo:</span>
                  <span className="text-yellow-400 font-medium">Sob consulta</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
