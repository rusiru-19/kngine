'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500) // simulate loading
    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-[#1a1a2e] to-[#16213e] z-50 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1),_transparent)]" />

      {/* Leaves */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-6 h-6"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: 0,
            opacity: 0,
          }}
          animate={{
            x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
            y: [Math.random() * window.innerHeight, -100],
            rotate: [0, 360],
            opacity: [0.5, 1, 0.2],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M32 2C22 10 12 20 14 32c2 12 14 22 22 30 8-8 20-18 22-30 2-12-8-22-18-30Z"
              fill={`hsl(${Math.random() * 60 + 80}, 60%, 60%)`}
            />
          </svg>
        </motion.div>
      ))}

      {/* Center logo or text */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="text-white text-4xl font-bold tracking-widest"
      >
        Loading...
      </motion.h1>
    </div>
  )
}
