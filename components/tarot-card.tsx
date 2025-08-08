"use client"

import { motion } from "framer-motion"
import { MessageCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface TarotCardProps {
  name: string
  message: string
  image: string
  isLast?: boolean
  onWhatsAppClick?: () => void
}

export function TarotCard({ name, message, image, isLast, onWhatsAppClick }: TarotCardProps) {
  return (
    <motion.div
      initial={{ rotateY: 180, scale: 0.8 }}
      animate={{ rotateY: 0, scale: 1 }}
      transition={{ duration: 0.8, type: "spring" }}
      className="relative"
    >
      <Card className="bg-gradient-to-br from-purple-900/90 to-indigo-900/90 border-2 border-yellow-400/50 backdrop-blur-sm shadow-2xl">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Imagem da carta */}
            <motion.div whileHover={{ scale: 1.05, rotateY: 5 }} className="relative">
              <div className="w-48 h-72 relative rounded-lg overflow-hidden border-2 border-yellow-400/30">
                <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />
              </div>

              {/* Efeito de brilho */}
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-yellow-400/20 to-purple-400/20 rounded-lg blur-sm"
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />
            </motion.div>

            {/* Conteúdo da carta */}
            <div className="flex-1 text-center md:text-left">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl font-bold text-yellow-400 mb-4 flex items-center justify-center md:justify-start gap-2"
              >
                <Sparkles className="w-6 h-6" />
                {name}
                <Sparkles className="w-6 h-6" />
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-purple-100 text-lg leading-relaxed mb-6"
              >
                {message}
              </motion.p>

              {isLast && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 }}
                  className="space-y-4"
                >
                  <Button
                    onClick={onWhatsAppClick}
                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    size="lg"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Falar com Sandra no WhatsApp
                  </Button>

                  <p className="text-purple-300 text-sm">
                    ✨ Consultas personalizadas • Orientação espiritual • Respostas do universo
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
