"use client";
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

export default function CountdownTimer() {
  // Set your target date here
  const targetDate = new Date('2026-02-12T23:59:59').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeUnit = ({ value, label, index }) => {
    const prevValue = value > 0 ? value - 1 : (label === 'SECONDS' ? 59 : label === 'MINUTES' ? 59 : label === 'HOURS' ? 23 : value);
    const nextValue = label === 'SECONDS' ? (value + 1) % 60 : label === 'MINUTES' ? (value + 1) % 60 : label === 'HOURS' ? (value + 1) % 24 : value + 1;

    return (
      <div className="relative flex flex-col items-center">
  
        {/* Background numbers - faded */}
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-10 pointer-events-none">
          <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-4">
            {String(prevValue).padStart(2, '0')}
          </div>
          <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white mt-20">
            {String(nextValue).padStart(2, '0')}
          </div>
        </div>

        {/* Main number - bright */}
        <div className="relative z-10">
          <div className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-bold text-white tracking-wider drop-shadow-2xl">
            {String(value).padStart(2, '0')}
          </div>
          
          {/* Label */}
          <div className="text-center mt-2 sm:mt-4">
            <span className="text-xs sm:text-sm md:text-base lg:text-lg text-white/80 tracking-[0.3em] font-light uppercase">
              {label}
            </span>
          </div>
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 blur-3xl opacity-30 "></div>
      </div>
    );
  };

  return (
    <div className="min-h-screen   px-4 sm:px-6 py-16 sm:py-20 lg:py-28     flex flex-col items-center justify-center p-4 overflow-hidden relative">
               <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#d4d4d4_0.01px,transparent_1px)]",
            "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_5%,white)] dark:bg-black"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96  rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 0 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Header */}
      <div className="relative z-10 mb-8 sm:mb-12 md:mb-16">
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-white/90 font-thin uppercase text-center tracking-[0.3em] sm:tracking-[0.4em] lg:tracking-[0.5em]">
         Days till revolution
        </h1>
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mt-4"></div>
      </div>

      {/* Countdown Container */}
      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 md:gap-16 lg:gap-20 max-w-7xl w-full px-4">
        <TimeUnit value={timeLeft.days} label="DAYS" index={0} />
        <TimeUnit value={timeLeft.hours} label="HOURS" index={1} />
        <TimeUnit value={timeLeft.minutes} label="MINUTES" index={2} />
        <TimeUnit value={timeLeft.seconds} label="SECONDS" index={3} />
      </div>

      {/* Decorative line at bottom */}
      <div className="relative z-10 mt-12 sm:mt-16 md:mt-20 w-full max-w-4xl">
        <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
}