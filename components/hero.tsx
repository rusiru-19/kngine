"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {ArrowDown} from 'lucide-react'
export default function SetrexHero() {
  return (
    <div className="relative h-screen bg-[#030304] text-white overflow-hidden">
   

      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-70"
        >
          <source src="/videos/MAIN.webm" type="video/webm" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90" />
      </div>

      {/* Hero Content */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay:4, duration: 0.6, ease: "easeOut" }}
      className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
      >
        <ArrowDown className="opacity-50" />
      </motion.div>
    </motion.div>

    </div>
  );
}
