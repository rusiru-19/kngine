import React from 'react'
import { cn } from "@/lib/utils"
import Footer from '@/components/footer'
import Navigationbar from '@/components/navigation'
import Script from "next/script"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Codecom | Coding Competition – KNGINE’26",
  description:
    "Codecom is an individual online coding competition at KNGINE’26. Hack the challenge, solve problems, and own the leaderboard.",
  keywords: [
    "Codecom",
    "Coding Competition",
    "KNGINE 26",
    "ICT Day",
    "School Coding Competition",
    "Richmond College ICT Society",
    "RITS",
  ],
  openGraph: {
    title: "Codecom | Coding Competition – KNGINE’26",
    description:
      "Every line of code is a weapon. Compete in Codecom, the official coding competition of KNGINE’26.",
    url: "https://kngine.richmondcollege.lk/codecom",
  },
    twitter: {
    card: "summary_large_image",
    title: "Codecom | Coding Competition – KNGINE’26",
    description:
      "Every line of code is a weapon. Compete in Codecom, the official coding competition of KNGINE’26.",
    images: ["/og/codecom.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
}

function WebDesigning() {
  return (
    <>
      {/* Structured Data */}
      <Script
        id="codecom-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalEvent",
            name: "Codecom – Coding Competition (KNGINE’26)",
            description:
              "An individual online coding competition organized under KNGINE, the annual ICT Day of Richmond College.",
            eventStatus: "https://schema.org/EventScheduled",
            eventAttendanceMode:
              "https://schema.org/OnlineEventAttendanceMode",
            organizer: {
              "@type": "Organization",
              name: "Richmond College ICT Society (RITS)",
              url: "https://kngine.richmondcollege.lk",
            },
            isAccessibleForFree: true,
            url: "https://kngine.richmondcollege.lk/codecom",
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
          <h1 className="text-6xl  mt-25 font-bold text-center tracking-wider mb-10">
            CodeCom
          </h1>

          {/* Overview */}
          <section className="text-center mb-14 space-y-4">
            <p className="text-gray-300">
              <span className="font-semibold text-white">Type:</span> Individual • Online
            </p>
            <p className="italic text-gray-400 max-w-3xl mx-auto">
              “Every line of code is a weapon. Hack the challenge. Own the leaderboard.”
            </p>
            <p className="text-gray-300">
              Online coding platform (link will be provided after registration)
            </p>
          </section>

          {/* Participation Details */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold mb-4">Participation Details</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li><strong className="text-white">Eligibility:</strong> Grades 9–13</li>
              <li><strong className="text-white">Format:</strong> Individual only (no teams)</li>
              <li><strong className="text-white">Integrity:</strong> Plagiarism leads to disqualification</li>
            </ul>
          </section>

          {/* Competition Format */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold mb-4">Competition Format</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li><strong className="text-white">Duration:</strong> Announced before the event</li>
              <li>
                <strong className="text-white">Supported Languages:</strong>{" "}
                Python, C++, JavaScript, Java, C
              </li>
              <li>
                <strong className="text-white">Difficulty Levels:</strong>{" "}
                Easy, Medium, and Hard
              </li>
            </ul>
          </section>

          {/* Rules & Ranking */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold mb-4">Rules & Ranking</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li><strong className="text-white">Registration:</strong> Official Google Form</li>
              <li><strong className="text-white">Scoring:</strong> Passed test cases per problem</li>
              <li><strong className="text-white">Attempts:</strong> Multiple allowed, highest score counts</li>
              <li><strong className="text-white">Penalties:</strong> No penalty for wrong submissions</li>
              <li><strong className="text-white">Tie-Breaking:</strong> Faster submission wins</li>
              <li><strong className="text-white">Prohibited:</strong> AI tools, code generators, external help</li>
              <li><strong className="text-white">Allowed:</strong> Standard language documentation</li>
            </ul>
          </section>

          {/* Judging Criteria */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Judging Criteria</h2>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-700 text-gray-300">
                <thead className="bg-gray-900">
                  <tr>
                    <th className="border border-gray-700 px-4 py-2 text-left">Criteria</th>
                    <th className="border border-gray-700 px-4 py-2 text-left">Weightage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-700 px-4 py-2">Correctness of Solution</td>
                    <td className="border border-gray-700 px-4 py-2">40%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-700 px-4 py-2">Code Efficiency & Optimization</td>
                    <td className="border border-gray-700 px-4 py-2">30%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-700 px-4 py-2">Time Taken to Solve</td>
                    <td className="border border-gray-700 px-4 py-2">20%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-700 px-4 py-2">Code Readability</td>
                    <td className="border border-gray-700 px-4 py-2">10%</td>
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

export default WebDesigning
