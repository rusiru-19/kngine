"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface RevealProps {
  children: React.ReactNode
  y?: number
  delay?: number
}

export default function Reveal({
  children,
  y = 40,
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    gsap.fromTo(
      el,
      {
        opacity: 0,
        y,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    )

    return () => {
      gsap.killTweensOf(el)
    }
  }, [y, delay])

  return <div ref={ref}>{children}</div>
}
