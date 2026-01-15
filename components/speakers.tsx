"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from "@/lib/utils";

const subjects = [
  {
    id: "A-34",
    name: "TORRA.TAHA",
    inceptDate: "03/05/2000",
    function: "DESIGNER",
    mentalState: "UNSTABLE",
    location: "----",
    threatLevel: 3,
    eyeImage: "/images/eye1.jpg",
    scanImage: "/images/scan1.jpg",
    fullBodyImage: "/images/body1.jpg",
    skills: "CREATIVE THINKING, UI/UX DESIGN, PROBLEM SOLVING, TEAM LEADERSHIP"
  },
  {
    id: "B-12",
    name: "SMITH.JOHN",
    inceptDate: "12/15/1998",
    function: "DEVELOPER",
    mentalState: "STABLE",
    location: "SECTOR 7",
    threatLevel: 1,
    eyeImage: "/images/eye2.jpg",
    scanImage: "/images/scan2.jpg",
    fullBodyImage: "/images/body2.jpg",
    skills: "FULL STACK DEVELOPMENT, CLOUD ARCHITECTURE, DEVOPS, SECURITY"
  },
  {
    id: "C-89",
    name: "CHEN.MAYA",
    inceptDate: "07/22/2001",
    function: "ANALYST",
    mentalState: "FOCUSED",
    location: "LAB-03",
    threatLevel: 2,
    eyeImage: "/images/eye3.jpg",
    scanImage: "/images/scan3.jpg",
    fullBodyImage: "/images/body3.jpg",
    skills: "DATA ANALYSIS, MACHINE LEARNING, PATTERN RECOGNITION, AI SYSTEMS"
  }
];

export default function SubjectProfileHUD() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSubject = subjects[currentIndex];

  const nextSubject = () => {
    setCurrentIndex((prev) => (prev + 1) % subjects.length);
  };

  const prevSubject = () => {
    setCurrentIndex((prev) => (prev - 1 + subjects.length) % subjects.length);
  };

  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-black dark:bg-black">
        <div
                className={cn(
                  "absolute inset-0",
                  "[background-size:20px_20px]",
                  "[background-image:radial-gradient(#d4d4d4_0.01px,transparent_1px)]",
                  "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
                )}
              />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_5%,white)] dark:bg-black"></div>
        

      <div className="relative w-full max-w-4xl">
        {/* Main HUD Container */}
        <div className="relative border border-cyan-400 bg-black p-0.5 sm:p-1">
          {/* Corner indicators */}
          <div className="absolute -top-0.5 -left-0.5 w-2 h-2 bg-cyan-400"></div>
          <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-cyan-400"></div>
          <div className="absolute -bottom-0.5 -left-0.5 w-2 h-2 bg-cyan-400"></div>
          <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-cyan-400"></div>

          {/* Header */}
          <div className="border-b border-cyan-400 p-2 sm:p-3 flex justify-between items-center">
            <h1 className="text-cyan-400 text-base sm:text-xl font-mono tracking-wider">
              SUBJECT {currentSubject.id}
            </h1>
            <div className="flex gap-1 sm:gap-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 border border-cyan-400"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-cyan-400"></div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0.5 border-b border-cyan-400">
            {/* Left Panel - Eye Scan */}
            <div className="border-b sm:border-b-0 sm:border-r border-cyan-400 p-2 sm:p-3 relative">
              <div className="absolute top-1 right-1 flex gap-0.5 sm:gap-1">
                <div className="w-2 h-2 rounded-full border border-cyan-400"></div>
                <div className="w-2 h-2 rounded-full border border-cyan-400"></div>
                <div className="w-2 h-2 rounded-full border border-cyan-400"></div>
              </div>
              <div className="aspect-square bg-gradient-to-br from-cyan-900/20 to-black border border-cyan-400/50 flex items-center justify-center relative overflow-hidden">
                <div className="w-full h-full bg-gradient-radial from-cyan-300/30 via-cyan-500/10 to-transparent"></div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDIwIDAgTCAwIDAgMCAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjeWFuIiBzdHJva2Utb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
                <span className="absolute text-cyan-400/50 text-2xl sm:text-4xl font-mono">EYE</span>
              </div>
            </div>

            {/* Right Panel - Brain Scan */}
            <div className="p-2 sm:p-3">
              <div className="aspect-square bg-gradient-to-br from-cyan-900/20 to-black border border-cyan-400/50 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDIwIDAgTCAwIDAgMCAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjeWFuIiBzdHJva2Utb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
                <span className="absolute text-cyan-400/50 text-2xl sm:text-4xl font-mono">SCAN</span>
                <div className="absolute top-0 right-0 w-full h-full">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="absolute border-t border-cyan-400/20" style={{top: `${i * 16.66}%`, width: '100%'}}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0.5 border-b border-cyan-400">
            {/* Fingerprint */}
            <div className="border-b sm:border-b-0 sm:border-r border-cyan-400 p-2 sm:p-3 flex items-center justify-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 border border-cyan-400 flex items-center justify-center relative">
                <div className="absolute inset-2 border border-cyan-400/30"></div>
                <div className="absolute inset-3 border border-cyan-400/20"></div>
                <span className="text-cyan-400/50 text-xs font-mono">PRINT</span>
              </div>
            </div>

            {/* Personal Info */}
            <div className="border-b sm:border-b-0 sm:border-r border-cyan-400 p-2 sm:p-3 font-mono text-cyan-400 text-xs sm:text-sm space-y-1.5">
              <div className="flex justify-between">
                <span>NAME</span>
                <span className="text-right truncate ml-2">{currentSubject.name}</span>
              </div>
              <div className="border-t border-cyan-400/30"></div>
              <div className="flex justify-between">
                <span>INCEPT</span>
                <span>{currentSubject.inceptDate}</span>
              </div>
              <div className="border-t border-cyan-400/30"></div>
              <div className="flex justify-between">
                <span>FUNCTION</span>
                <span>{currentSubject.function}</span>
              </div>
              <div className="border-t border-cyan-400/30"></div>
              <div className="flex justify-between">
                <span>STATE</span>
                <span className={currentSubject.mentalState === "UNSTABLE" ? "text-red-400" : "text-green-400"}>
                  {currentSubject.mentalState}
                </span>
              </div>
            </div>

            {/* Full Body Scan */}
            <div className="p-2 sm:p-3 flex items-center justify-center">
              <div className="w-full h-32 sm:h-36 border border-cyan-400/50 bg-gradient-to-b from-cyan-900/20 to-black flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDIwIDAgTCAwIDAgMCAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjeWFuIiBzdHJva2Utb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
                <span className="absolute text-cyan-400/50 text-xs font-mono">BODY</span>
              </div>
            </div>
          </div>

          {/* Bottom Info Section */}
          <div className="p-2 sm:p-3 font-mono text-cyan-400 text-xs sm:text-sm space-y-2">
            <div className="flex justify-between items-center">
              <span>LOCATION</span>
              <span className="tracking-widest">{currentSubject.location}</span>
            </div>
            <div className="border-t border-cyan-400/30"></div>
            <div className="flex justify-between items-center">
              <span>THREAT</span>
              <div className="flex gap-0.5 sm:gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-sm sm:text-base ${i < currentSubject.threatLevel ? 'text-cyan-400' : 'text-cyan-400/20'}`}>★</span>
                ))}
              </div>
            </div>
            <div className="border-t border-cyan-400/30"></div>
            <div className="flex justify-between items-start">
              <span>SKILLS</span>
              <button className="w-4 h-4 sm:w-5 sm:h-5 border border-cyan-400 flex items-center justify-center text-xs">⊕</button>
            </div>
            {/* Skills Graph */}
            <div className="h-16 sm:h-20 border border-cyan-400/50 relative overflow-hidden bg-gradient-to-t from-cyan-900/10 to-transparent">
              <div className="absolute inset-0 flex items-end justify-around p-1">
                {[...Array(30)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-0.5 sm:w-1 bg-cyan-400/60" 
                    style={{height: `${Math.random() * 100}%`}}
                  ></div>
                ))}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-[10px] sm:text-xs text-cyan-400/70 text-center px-2">{currentSubject.skills}</p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows - Desktop */}
          <div className="hidden sm:block">
            <div className="absolute top-1/2 -translate-y-1/2 -left-14">
              <button 
                onClick={prevSubject}
                className="w-10 h-10 border border-cyan-400 bg-black hover:bg-cyan-400/20 transition-colors flex items-center justify-center text-cyan-400 text-xl font-bold"
              >
                ◄
              </button>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 -right-14">
              <button 
                onClick={nextSubject}
                className="w-10 h-10 border border-cyan-400 bg-black hover:bg-cyan-400/20 transition-colors flex items-center justify-center text-cyan-400 text-xl font-bold"
              >
                ►
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Controls - Mobile & Desktop */}
        <div className="flex justify-center items-center gap-4 mt-3">
          {/* Mobile Arrows */}
          <button 
            onClick={prevSubject}
            className="sm:hidden w-10 h-10 border border-cyan-400 bg-black hover:bg-cyan-400/20 transition-colors flex items-center justify-center text-cyan-400 text-xl font-bold"
          >
            ◄
          </button>

          {/* Subject Indicators */}
          <div className="flex gap-2">
            {subjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 border border-cyan-400 transition-colors ${
                  index === currentIndex ? 'bg-cyan-400' : 'bg-transparent hover:bg-cyan-400/30'
                }`}
              />
            ))}
          </div>

          {/* Mobile Arrows */}
          <button 
            onClick={nextSubject}
            className="sm:hidden w-10 h-10 border border-cyan-400 bg-black hover:bg-cyan-400/20 transition-colors flex items-center justify-center text-cyan-400 text-xl font-bold"
          >
            ►
          </button>
        </div>
      </div>
    </div>
  );
}