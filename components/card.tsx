"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";

export default function HUDCard() {
  const fullText = `RITS is a student-driven technology community dedicated to fostering innovation, creativity, and technical excellence. We bring together students who are passionate about information technology, problem-solving, and digital transformation, creating a platform to learn, collaborate, and grow.

Through events such as IT Day, workshops, competitions, and hands-on projects, RITS aims to bridge the gap between theoretical knowledge and real-world applications. We encourage critical thinking, teamwork, and continuous learning in a rapidly evolving technological landscape.

Our mission is to empower students with the skills, confidence, and mindset required to thrive in the modern tech world while promoting a culture of professionalism, leadership, and innovation.`;

  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // triggers a bit earlier

  // Typewriter effect triggers only when in view
  useEffect(() => {
    if (!isInView) return;
    if (index >= fullText.length) return;

    const timer = setTimeout(() => {
      setDisplayText((prev) => prev + fullText[index]);
      setIndex((prev) => prev + 1);
    }, 18);

    return () => clearTimeout(timer);
  }, [index, fullText, isInView]);

  return (
    <div className="relative p-10 flex h-auto w-full items-center justify-center bg-black dark:bg-black">
       <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_0.01px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_5%,white)] dark:bg-black"></div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full  max-w-6xl"
      >

        <div className="relative card  rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 p-8 md:p-12">
            {/* Logo */}
            <div className="col-span-1 md:col-span-2 flex items-center justify-center md:justify-start">
              <div className="relative">
               <PixelatedCanvas
        src="/images/character4.webp"
        width={300}
        height={500}
        cellSize={3}
        dotScale={0.9}
        backgroundColor="#000000"
        dropoutStrength={0.4}
        interactive
        distortionStrength={3}
        distortionRadius={80}
        distortionMode="swirl"
        followSpeed={0.2}
        jitterStrength={4}
        jitterSpeed={4}
        sampleAverage
        tintColor="#FFFFFF"
        tintStrength={0.2}
        className="p-4"
      />
              
              </div>
            </div>

            {/* Text */}
            <div className="col-span-1 md:col-span-3 flex items-center">
              <div className="relative">
                <p className="text-gray-300 text-sm leading-relaxed tracking-wide font-mono">
                  {displayText}
                  {index < fullText.length && (
                    <span className="inline-block w-2 h-4 bg-gray-400 ml-1 animate-pulse" />
                  )}
                </p>

                {index >= fullText.length && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex justify-end gap-1 pt-4 text-gray-400"
                  >
                    <span className="text-xl">«</span>
                    <span className="text-xl">«</span>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
