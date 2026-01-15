"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Trophy, Code, Paintbrush, Puzzle } from "lucide-react"; // Example icons
import { cn } from "@/lib/utils";

const competitions = [
  {
    id: 1,
    title: "Coding Challenge",
    description: "Test your programming skills in logic and algorithm challenges.",
    icon: <Code className="w-10 h-10 text-white" />,
  },
  {
    id: 2,
    title: "Graphic Design",
    description: "Showcase creativity and design skills in digital artwork.",
    icon: <Paintbrush className="w-10 h-10 text-white" />,
  },
  {
    id: 3,
    title: "Quiz Battle",
    description: "Compete with peers in technology and general knowledge quizzes.",
    icon: <Puzzle className="w-10 h-10 text-white" />,
  },
  {
    id: 4,
    title: "Innovation Hunt",
    description: "Pitch innovative ideas and solve real-world tech problems.",
    icon: <Trophy className="w-10 h-10 text-white" />,
  },
];

export default function CompetitionsSection() {
  return (
    <section className="h-180 flex flex-col items-center relative justify-center px-6 py-16 ">
    <div
                className={cn(
                  "absolute inset-0",
                  "[background-size:20px_20px]",
                  "[background-image:radial-gradient(#d4d4d4_0.01px,transparent_1px)]",
                  "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
                )}
              />
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_5%,white)] dark:bg-black"></div>
        
       <h1 className="text-2xl  sm:text-3xl md:text-4xl lg:text-5xl text-white/90 tracking-[0.5em] font-thin text-center uppercase">
         competitions
        </h1>
        <div className="w-32 h-px bg-gradient-to-r mb-15 from-transparent via-white/50 to-transparent mx-auto mt-4"></div>

      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {competitions.map((comp, i) => (
          <motion.div
            key={comp.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
            className="relative card1 p-10 flex flex-col items-center text-center hover:scale-105 hover:shadow-[0_0_20px_rgba(50,255,50,0.7)] transition-all"
          >
            <div className="mb-4">{comp.icon}</div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
              {comp.title}
            </h3>
            <p className="text-gray-300 text-sm sm:text-base">{comp.description}</p>

      
          </motion.div>
        ))}
      </div>
    </section>
  );
}
