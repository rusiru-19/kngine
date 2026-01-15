"use client";

import React from "react";
import { motion } from "framer-motion";
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full mt-5 bg-black footer text-white py-12 px-6 sm:px-12 flex flex-col items-center"
    >
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row justify-between w-full max-w-6xl gap-8 sm:gap-0 mb-8">
        {/* Left - Logo / Name */}
        <div className="flex flex-col items-center sm:items-start gap-2">
          <h2 className="text-xl sm:text-2xl font-bold tracking-wider text-white">
            KNGINE
          </h2>
          <p className="text-xs sm:text-sm text-white">
            Empowering Minds through technology and innovation.
          </p>
        </div>

        {/* Middle - Navigation */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm sm:text-base">
          <a href="#about" className="hover:text-gray-400 transition-colors">
            About
          </a>
          <a href="#competition" className="hover:text-gray-400 transition-colors">
            Competitions
          </a>
          <a href="#speakers" className="hover:text-gray-400 transition-colors">
            Speakers
          </a>
          <a href="/contact" className="hover:text-gray-400 transition-colors">
            Contact
          </a>
        </div>

        {/* Right - Social Icons */}
        <div className="flex gap-4 justify-center sm:justify-end">
          <a
            href="https://github.com/richmond-college-ict"
            className="hover:text-gray-400 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/richmonditsociety/"
            className="hover:text-gray-400 transition-colors"
            aria-label="Instergram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.facebook.com/RITS.KNGINE"
            className="hover:text-gray-400 transition-colors"
            aria-label="facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-xs sm:text-sm text-white/50 text-center border-t border-white/20 pt-4 w-full max-w-6xl">
        &copy; {new Date().getFullYear()} RITS. All Rights Reserved.
      </div>
    </motion.footer>
  );
}
