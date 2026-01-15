"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black relative overflow-hidden px-4">
  

      {/* 404 Number */}
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-[10rem] sm:text-[14rem] md:text-[18rem] font-bold text-white tracking-wide  z-10"
      >
        404
      </motion.h1>

      {/* Message */}
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-white/80 text-center mt-4 sm:mt-6 text-xl sm:text-2xl font-mono z-10 tracking-wider"
      >
        Page Not Found
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-8 z-10"
      >
        <Link
          href="/"
          className="px-6 py-3 border border-cyan-400 text-cyan-400 font-mono tracking-widest hover:bg-cyan-400/10 transition-colors rounded-lg"
        >
          Go Home
        </Link>
      </motion.div>

    </div>
  );
}
