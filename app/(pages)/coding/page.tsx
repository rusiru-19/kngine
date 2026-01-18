import React from 'react'
import { cn } from "@/lib/utils";
import Footer from '@/components/footer';
import Navigationbar from '@/components/navigation';
import Link from 'next/link';
function CodeCom() {
  return (
    <>
<div className="bg-black min-h-screen relative">
  <Navigationbar />

  <div
    className={cn(
      "absolute inset-0",
      "[background-size:20px_20px]",
      "[background-image:radial-gradient(#d4d4d4_0.01px,transparent_1px)]",
      "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
    )}
  />

  <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_5%,white)]" />

  <div className="relative flex min-h-screen items-center justify-center px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-6xl">
      
      <Link href="/codecom">
        <div className="relative card1 p-10 flex flex-col items-center text-center hover:scale-105 hover:shadow-[0_0_20px_rgba(50,255,50,0.7)] transition-all">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 aquire">codecom</h3>
          <p className='text-gray-30 text-gray-300 text-sm sm:text-base0'>Every line of code is a weapon. Hack the challenge. Own the
                            leaderboard</p>
        </div>
      </Link>

      <Link href="/ebdev">
        <div className="relative card1 p-10 flex flex-col items-center text-center hover:scale-105 hover:shadow-[0_0_20px_rgba(50,255,50,0.7)] transition-all">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 aquire ">WebDevelopment</h3>
          <p className='text-gray-300 text-sm sm:text-base'>Build the digital resistance. Your website is the battleground</p>
        </div>
      </Link>

    </div>
  </div>
</div>
<Footer />
</>
  )
}

export default CodeCom