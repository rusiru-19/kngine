import React from 'react'
import { cn } from "@/lib/utils";
import Footer from '@/components/footer';
import Navigationbar from '@/components/navigation';
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Designing Competition | KNGINE",
  description:
    "Participate in the inter-school Web Designing Competition at KNGINE, the annual ICT Day of Richmond College.",
  keywords: [
    "Web Designing Competition",
    "KNGINE Web Design",
    "School ICT Competitions",
    "Richmond College ICT",
    "RITS",
  ],
  openGraph: {
    title: "Web Designing Competition | KNGINE",
    description:
      "Showcase your web design and UI/UX skills at KNGINE – Richmond College ICT Day.",
    url: "https://kngine.richmondcollege.lk/webdev",
  },
};

function WebDesigning() {
  return (
    <>
          <Script
        id="webdev-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalEvent",
            name: "Web Designing Competition – KNGINE",
            description:
              "An inter-school web designing competition organized under KNGINE, the annual ICT Day of Richmond College.",
            eventStatus: "https://schema.org/EventScheduled",
            eventAttendanceMode:
              "https://schema.org/OfflineEventAttendanceMode",
            location: {
              "@type": "Place",
              name: "Richmond College",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Galle",
                addressCountry: "LK",
              },
            },
            organizer: {
              "@type": "Organization",
              name: "Richmond College ICT Society (RITS)",
              url: "https://kngine.richmondcollege.lk",
            },
            isAccessibleForFree: true,
            url: "https://kngine.richmondcollege.lk/webdev",
          }),
        }}
      />

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

export default WebDesigning