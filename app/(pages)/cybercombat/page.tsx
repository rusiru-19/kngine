import React from 'react'
import { cn } from "@/lib/utils"
import Footer from '@/components/footer'
import Navigationbar from '@/components/navigation'
import Script from "next/script"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cyber Combat | VALORANT Tournament – KNGINE’26",
  description:
    "Compete in Cyber Combat, a 5v5 Valorant tournament at KNGINE’26. School teams battle online in a tactical shooter showdown.",
  keywords: [
    "Cyber Combat",
    "VALORANT Tournament",
    "KNGINE 26",
    "School Gaming Competition",
    "Esports",
    "Richmond College ICT Society",
    "RITS",
  ],
  openGraph: {
    title: "Cyber Combat | VALORANT Tournament – KNGINE’26",
    description:
      "Join the ultimate 5v5 Valorant battle in Cyber Combat at KNGINE’26. Assemble your school team and dominate the digital battlefield.",
    url: "https://kngine.richmondcollege.lk/cybercombat",
  },
    twitter: {
    card: "summary_large_image",
    title: "Cyber Combat | VALORANT Tournament – KNGINE’26",
    description:
      "Join the ultimate 5v5 Valorant battle in Cyber Combat at KNGINE’26. Assemble your school team and dominate the digital battlefield.",
    images: ["/og/cybercombat.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
}

function CyberCombat() {
  return (
    <>
      {/* Structured Data */}
      <Script
        id="cybercombat-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalEvent",
            name: "Cyber Combat – VALORANT Tournament (KNGINE’26)",
            description:
              "A 5v5 online school gaming tournament organized under KNGINE’26 by the Richmond College ICT Society.",
            eventStatus: "https://schema.org/EventScheduled",
            eventAttendanceMode:
              "https://schema.org/OnlineEventAttendanceMode",
            organizer: {
              "@type": "Organization",
              name: "Richmond College ICT Society (RITS)",
              url: "https://kngine.richmondcollege.lk",
            },
            isAccessibleForFree: true,
            url: "https://kngine.richmondcollege.lk/cybercombat",
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
          <h1 className="text-6xl aquire mt-25 font-bold text-center tracking-wider mb-10">
            Cyber Combat
          </h1>

          {/* Overview */}
          <section className="text-center mb-14 space-y-4">
            <p className="text-gray-300">
              <span className="font-semibold text-white">Game:</span> VALORANT (5v5 Tactical Shooter)
            </p>
            <p className="italic text-gray-400 max-w-3xl mx-auto">
              "The battlefield is digital. The stakes are real. Show no mercy."
            </p>
            <p className="text-gray-300">
              Format: Tournament bracket style
            </p>
          </section>

          {/* Team & Eligibility */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold mb-4">Team & Eligibility</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li><strong className="text-white">Eligibility:</strong> Open to all school students</li>
              <li><strong className="text-white">Roster:</strong> 5 Main Players (same school), 1 Substitute (optional)</li>
              <li><strong className="text-white">Requirements:</strong> Names, details, and Riot IDs for all players must be provided at registration</li>
              <li><strong className="text-white">Match Day:</strong> No roster changes unless pre-approved</li>
            </ul>
          </section>

          {/* Registration & Conduct */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold mb-4">Registration & Conduct</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li><strong className="text-white">Account Rules:</strong> Players must use their own Valorant accounts; account sharing is prohibited</li>
              <li><strong className="text-white">Attendance:</strong> Teams must arrive 15 minutes before their scheduled match</li>
              <li><strong className="text-white">Forfeit Policy:</strong> Failure to show within 10 minutes results in a forfeit</li>
              <li><strong className="text-white">Behavior:</strong> Zero tolerance for toxicity or harassment</li>
              <li><strong className="text-white">Anti-Cheat:</strong> Any cheating leads to immediate disqualification</li>
            </ul>
          </section>

          {/* Match Format */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold mb-4">Match Format</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li><strong className="text-white">Mode:</strong> 5v5, Unrated</li>
              <li><strong className="text-white">Structure:</strong> Best of 1 (BO1) or Best of 3 (BO3) depending on stage</li>
              <li><strong className="text-white">Victory Condition:</strong> First team to 13 rounds wins</li>
              <li><strong className="text-white">Overtime:</strong> If score reaches 12-12, overtime rules apply</li>
              <li><strong className="text-white">Map Selection:</strong> Determined via a Map Banning Phase between teams</li>
            </ul>
          </section>

          {/* Tournament Schedule */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Tournament Schedule</h2>
            <p className="text-gray-300">
              Specific brackets and match timings will be distributed via official channels after registration closes.
            </p>
                    </section>
                    <section className="mt-24">
            <h2 className="text-3xl font-bold text-center text-white mb-12 tracking-wide">
              Contact for Any Inquiry
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              
              <div className=" p-6 card2  text-center hover:scale-105 transition-all">
                <h3 className="text-xl font-semibold text-white mb-2">Mahin</h3>
                <p className="text-gray-400">+94 77 311 0252</p>
              </div>

              <div className=" p-6 card2  text-center hover:scale-105 transition-all">
                <h3 className="text-xl font-semibold text-white mb-2">Randula</h3>
                <p className="text-gray-400">+94 70 602 6941</p>
              </div>

           

          

            </div>
          </section>

        </div>
      </div>

      <Footer />
    </>
  )
}

export default CyberCombat
