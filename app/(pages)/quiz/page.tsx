import React from 'react'
import { cn } from "@/lib/utils"
import Footer from '@/components/footer'
import Navigationbar from '@/components/navigation'
import Script from "next/script"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Intellect | Inter-School IT & Tech Quiz – KNGINE’26",
  description:
    "Participate in Intellect, an inter-school IT & Tech quiz competition at KNGINE’26. Test your knowledge in ICT, programming, cybersecurity, and Watch Dogs: Legion trivia.",
  keywords: [
    "Intellect",
    "IT Quiz Competition",
    "Tech Quiz",
    "KNGINE 26",
    "School ICT Competitions",
    "Richmond College ICT Society",
    "RITS",
    "Watch Dogs Legion",
  ],
  openGraph: {
    title: "Intellect | Inter-School IT & Tech Quiz – KNGINE’26",
    description:
      "Test your skills in ICT, programming, cybersecurity, and Watch Dogs: Legion trivia in Intellect at KNGINE’26.",
    url: "https://kngine.richmondcollege.lk/intellect",
  },
    twitter: {
    card: "summary_large_image",
    title: "Intellect | Inter-School IT & Tech Quiz – KNGINE’26",
    description:
      "Test your skills in ICT, programming, cybersecurity, and Watch Dogs: Legion trivia in Intellect at KNGINE’26.",
    images: ["/og/intellect.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
}

function Intellect() {
  return (
    <>
      {/* Structured Data */}
      <Script
        id="intellect-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalEvent",
            name: "Intellect – Inter-School IT & Tech Quiz (KNGINE’26)",
            description:
              "An inter-school IT & Tech quiz competition organized under KNGINE’26 by the Richmond College ICT Society.",
            eventStatus: "https://schema.org/EventScheduled",
            eventAttendanceMode:
              "https://schema.org/OfflineEventAttendanceMode",
            organizer: {
              "@type": "Organization",
              name: "Richmond College ICT Society (RITS)",
              url: "https://kngine.richmondcollege.lk",
            },
            isAccessibleForFree: true,
            url: "https://kngine.richmondcollege.lk/intellect",
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
          <h1 className="text-6xl mt-25 aquire font-bold text-center tracking-wider mb-10">
            Intellect
          </h1>

          {/* Overview */}
          <section className="text-center mb-14 space-y-4">
            <p className="text-gray-300">
              <span className="font-semibold text-white">Type:</span> Inter-School IT & Tech Quiz
            </p>
            <p className="italic text-gray-400 max-w-3xl mx-auto">
              "Knowledge is power. Intelligence is your greatest hack."
            </p>
            <p className="text-gray-300">
              Format: Team (3 Members) • On-Site
            </p>
            <p className="text-gray-300">
              Scope: ICT, programming, cybersecurity, and Watch Dogs: Legion themed trivia
            </p>
          </section>

          {/* Participation & Registration */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold mb-4">Participation & Registration</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li><strong className="text-white">Eligibility:</strong> Open to students of participating schools</li>
              <li><strong className="text-white">School Limit:</strong> One team per school</li>
              <li><strong className="text-white">Team Size:</strong> Maximum of 3 students per team</li>
              <li><strong className="text-white">Registration:</strong> Must be done at your school (not online)</li>
              <li><strong className="text-white">Deadline:</strong> 6th February 2026</li>
            </ul>
          </section>

          {/* Competition Rounds */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold mb-4">Competition Rounds</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li><strong className="text-white">Round 1 (Written MCQ):</strong> Multiple Choice and Short Answer questions; top teams advance</li>
              <li><strong className="text-white">Round 2 (Rapid Fire):</strong> Quick-fire questions with strict time limits</li>
              <li><strong className="text-white">Round 3 (Buzzer Round):</strong> Finals; top teams compete in live buzzer format</li>
            </ul>
          </section>

          {/* Topics Covered */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold mb-4">Topics Covered</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>A/L and O/L ICT syllabus</li>
              <li>Programming concepts and cybersecurity basics</li>
              <li>Tech industry news, companies, and personalities</li>
              <li>Watch Dogs: Legion themed trivia</li>
            </ul>
          </section>

          {/* Rules & Scoring */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Rules & Scoring</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
              <li><strong className="text-white">Prohibited Items:</strong> Mobile phones, smartwatches, and all electronic devices</li>
              <li><strong className="text-white">Conduct:</strong> Silence is mandatory; shouting out of turn results in negative marking</li>
              <li><strong className="text-white">Timing:</strong> Answers submitted after the time limit will not be considered</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">Scoring Table</h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-700 text-gray-300">
                <thead className="bg-gray-900">
                  <tr>
                    <th className="border border-gray-700 px-4 py-2 text-left">Round</th>
                    <th className="border border-gray-700 px-4 py-2 text-left">Points</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-700 px-4 py-2">Round 1 (MCQ)</td>
                    <td className="border border-gray-700 px-4 py-2">+1 per correct answer (No negative marks)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-700 px-4 py-2">Round 2 (Rapid Fire)</td>
                    <td className="border border-gray-700 px-4 py-2">+2 per correct answer</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-700 px-4 py-2">Round 3 (Buzzer)</td>
                    <td className="border border-gray-700 px-4 py-2">+5 per correct / -2 per wrong answer</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        <section className="mt-24">
            <h2 className="text-3xl font-bold text-center text-white mb-12 tracking-wide">
              Contact for Any Inquiry
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Email */}
              <div className=" p-6 card2  text-center hover:scale-105 transition-all">
                <h3 className="text-xl font-semibold text-white mb-2">Hirun Dilshan</h3>
                <p className="text-gray-400">+94 76 808 8170</p>
              </div>

              {/* Phone */}
              <div className=" p-6 card2  text-center hover:scale-105 transition-all">
                <h3 className="text-xl font-semibold text-white mb-2">Thilina Methsahan</h3>
                <p className="text-gray-400">+94 77 278 9984</p>
              </div>

              {/* WhatsApp */}
              <div className=" p-6 card2  text-center hover:scale-105 transition-all">
                <h3 className="text-xl font-semibold text-white mb-2">Semika Anusara</h3>
                <p className="text-gray-400">+94 76 266 5690</p>
              </div>

          

            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Intellect
