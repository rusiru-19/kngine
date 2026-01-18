import React from 'react'
import { cn } from "@/lib/utils"
import Footer from '@/components/footer'
import Navigationbar from '@/components/navigation'
import Script from "next/script"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "KNGINE’26 Registration | Inter-School ICT Competitions – Richmond College",
  description:
    "Register for KNGINE’26, the annual inter-school ICT day by Richmond College ICT Society (RITS). Participate in competitions like Intellect, Codecom, DesignerX, Web Development, and Cyber Combat.",
  keywords: [
    "KNGINE 26",
    "Richmond College ICT",
    "Inter-School ICT Competitions",
    "Intellect Quiz",
    "DesignerX",
    "Codecom",
    "Web Development",
    "Cyber Combat",
    "RITS",
    "Watch Dogs Legion",
    "Student Competitions",
    "ICT Day",
  ],
  openGraph: {
    title: "KNGINE’26 Registration | Inter-School ICT Competitions",
    description:
      "Register for KNGINE’26 competitions organized by Richmond College ICT Society. Join Intellect, Codecom, DesignerX, Web Development, and Cyber Combat events.",
    url: "https://kngine.richmondcollege.lk/registration",
  },
}

function Registration() {
  return (
    <>
      {/* Structured Data for SEO */}
      <Script
  id="intellect-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "EducationalEvent",
      "name": "Intellect – Inter-School IT & Tech Quiz (KNGINE’26)",
      "description": "An inter-school IT & Tech quiz competition organized under KNGINE’26 by the Richmond College ICT Society.",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "startDate": "2026-02-12T09:00:00+05:30", // <-- add start date/time
      "endDate": "2026-02-12T17:00:00+05:30",   // <-- optional, recommended
      "organizer": {
        "@type": "Organization",
        "name": "Richmond College ICT Society (RITS)",
        "url": "https://kngine.richmondcollege.lk"
      },
      "isAccessibleForFree": true,
      "url": "https://kngine.richmondcollege.lk/intellect",
      "offers": {
        "@type": "Offer",
        "url": "https://example.com/registration",
        "availability": "https://schema.org/InStock",
        "price": "0",
        "priceCurrency": "LKR"
      }
    }),
  }}
/>


      <div className="bg-black min-h-screen relative">
        <Navigationbar />

        {/* Background */}
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#d4d4d4_0.01px,transparent_1px)]",
            "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
          )}
        />

        <div className="pointer-events-none absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_5%,white)]" />

        {/* Content */}
        <div className="relative max-w-5xl mx-auto px-4 py-32 text-white">

          {/* Title */}
          <h1 className="text-6xl  mt-25 font-bold text-center tracking-wider mb-20">
            Registration & Guidelines
          </h1>

          {/* General Registration & Guidelines */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold mb-4">KNGINE’26 Registration & Guidelines</h2>
            
            <p className="text-gray-300 mb-2">
              KNGINE’26 is the annual Inter-School ICT Day organized by the Richmond College ICT Society (RITS), themed <strong>Watch Dogs: Legion</strong> – hacktivism, resistance, and digital revolution.<br/>
              <strong>Venue:</strong> C.W.W. Kannangara Multi-Purpose Auditorium, Richmond College, Galle.
            </p>

            <h3 className="text-xl font-semibold mb-2">General Rules & Regulations</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
              <li><strong className="text-white">Eligibility:</strong> School students from Grades 9 to 13</li>
              <li><strong className="text-white">Registration Fee:</strong> Free for all competitions</li>
              <li><strong className="text-white">Requirements:</strong> Carry your School ID on event day</li>
              <li><strong className="text-white">Prohibited Tools:</strong> AI tools (ChatGPT, Copilot, etc.) are strictly prohibited unless stated otherwise</li>
              <li><strong className="text-white">Plagiarism:</strong> Zero tolerance; violators will be disqualified</li>
              <li><strong className="text-white">Theme Compliance:</strong> All work must align with Watch Dogs: Legion aesthetic</li>
              <li><strong className="text-white">Authority:</strong> Judges’ decisions are final and binding</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">Competition Registration Summary</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
              <li>DesignerX (Graphic Design): Online Form + Work Submission – 8th Feb 2026</li>
              <li>Codecom (Coding): Online Form – 8th Feb 2026</li>
              <li>Web Development: Online Form + Work Submission – 8th Feb 2026</li>
              <li>Cyber Combat (Gaming): Online Form – 8th Feb 2026</li>
              <li>Intellect (Quiz): Register at School – 12th Feb 2026</li>
            </ul>

            <p className="text-gray-300">
              Register for all online competitions using the official KNGINE’26 registration form:{" "}
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:underline"
              >
                Click Here
              </a>
            </p>
          </section>

        </div>
      </div>

      <Footer />
    </>
  )
}

export default Registration
