"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return

    gsap.set(bar, { scaleX: 0, transformOrigin: "left center" })

    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        gsap.to(bar, {
          scaleX: self.progress,
          ease: "none",
          overwrite: true,
        })
      },
    })
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-50">
      <div
        ref={barRef}
className="h-full w-full bg-white shadow-[0_0_14px_rgba(255,255,255,0.9)]"
      />
    </div>
  )
}
