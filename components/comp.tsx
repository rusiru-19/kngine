"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Trophy, Code, Paintbrush, Puzzle } from "lucide-react"; // Example icons
import { cn } from "@/lib/utils";
import Link from 'next/link'
import { link } from "fs";
const competitions = [
  {
    id: 1,
    title: "Web Designing",
    description:
      "An inter-school web designing competition where students showcase creativity, UI/UX skills, and  web technologies.",
    icon: <Code className="w-10 h-10 text-white" />,
    link: '/webdev'
  },
  {
    id: 2,
    title: "Graphic Design",
    description:
      "An inter-school graphic design competition focused on visual creativity, branding, and digital design skills.",
    icon: <Paintbrush className="w-10 h-10 text-white" />,
    link: '/graphicdesign'
  },
  {
    id: 3,
    title: "Quiz Battle",
    description:
      "A competitive quiz challenge testing knowledge in ICT, technology trends, and general knowledge.",
    icon: <Puzzle className="w-10 h-10 text-white" />,
    link: '/quiz'
  },
  {
    id: 4,
    title: "Cyber Combat",
    description:
      "A cybersecurity and problem-solving competition where students tackle real-world digital challenges.",
    icon: <Trophy className="w-10 h-10 text-white" />,
    link: '/cybercombat'
  },
];

export default function CompetitionsSection() {
  return (
    <section
      id="competition"
      className="relative flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-20 lg:py-24"
    >

    <div
                className={cn(
                  "absolute inset-0",
                  "[background-size:20px_20px]",
                  "[background-image:radial-gradient(#d4d4d4_0.01px,transparent_1px)]",
                  "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
                )}
              />
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_5%,white)] dark:bg-black"></div>
        
       <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl 
               text-white/90 tracking-[0.3em] sm:tracking-[0.4em] lg:tracking-[0.5em]
               font-thin text-center uppercase">
        competitions
      </h1>
        <div className="w-24 sm:w-32 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mt-4 mb-12"></div>


      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {competitions.map((comp, i) => (
          <Link href={comp.link} >
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
          </Link>
        ))}
      </div>
    </section>
  );
}
