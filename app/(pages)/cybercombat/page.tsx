import React from 'react'
import { cn } from "@/lib/utils";
import Footer from '@/components/footer';
import Navigationbar from '@/components/navigation';
function CyberCombat() {
  return (
    <>
    <div className='bg-black  min-h-screen'>    
        <Navigationbar />
    <div
    className={cn(
        "absolute inset-0",
        "[background-size:20px_20px]",
        "[background-image:radial-gradient(#d4d4d4_0.01px,transparent_1px)]",
        "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
    )}
    />
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_5%,white)] dark:bg-black"></div>
    </div>
    <Footer />

    </>
  )
}

export default CyberCombat