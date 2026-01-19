"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const content = contentRef.current
    if (!container || !content) return

    const height = content.clientHeight
    gsap.set(container, { height })

    const ctx = gsap.context(() => {
      gsap.to(content, {
        y: () => -(height - window.innerHeight),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${height - window.innerHeight}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef}>
      <div ref={contentRef}>{children}</div>
    </div>
  )
}
