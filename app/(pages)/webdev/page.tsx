import React from 'react'
import { cn } from "@/lib/utils"
import Footer from '@/components/footer'
import Navigationbar from '@/components/navigation'
import Script from "next/script"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Web Development Competition | KNGINE’26",
  description:
    "Build the digital resistance. Participate in the Web Development Competition at KNGINE’26 and create a DedSec Operations Dashboard.",
  keywords: [
    "Web Development Competition",
    "KNGINE 26",
    "ICT Day",
    "School Web Development",
    "DedSec",
    "Richmond College ICT Society",
    "RITS",
  ],
  openGraph: {
    title: "Web Development Competition | KNGINE’26",
    description:
      "Develop a futuristic DedSec Operations Dashboard and showcase your web development skills at KNGINE’26.",
    url: "https://kngine.richmondcollege.lk/webdev",
  },
    twitter: {
    card: "summary_large_image",
    title: "DeWeb Development Competition | KNGINE’26",
    description:
      "Develop a futuristic DedSec Operations Dashboard and showcase your web development skills at KNGINE’26.",
    images: ["/og/webdev.png"],
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
        id="webdev-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalEvent",
            name: "Web Development Competition – KNGINE’26",
            description:
              "A team-based inter-school web development competition organized under KNGINE, the annual ICT Day of Richmond College.",
            eventStatus: "https://schema.org/EventScheduled",
            eventAttendanceMode:
              "https://schema.org/OnlineEventAttendanceMode",
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
            Web Development
          </h1>

          {/* Overview */}
          <section className="text-center mb-14 space-y-4">
            <p className="text-gray-300">
              <span className="font-semibold text-white">Type:</span> Team (2–4 Members) • Online Submission
            </p>
            <p className="italic text-gray-400 max-w-3xl mx-auto">
              “Build the digital resistance. Your website is the battleground.”
            </p>
          </section>

          {/* Task */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold mb-4">Task</h2>
            <p className="text-gray-300">
            Amal is a full-stack web developer tasked by his company to create a web-based platform to combat the growing wave of cybercrime. The system should allow users to report suspicious activities and incidents, enabling the organization to monitor, track, and respond to cyber threats efficiently. The challenge lies in designing a secure, reliable, and responsive solution that addresses the increasing sophistication of online criminal activity while providing a clear and intuitive interface for reporting and managing incidents.
            </p>
          </section>

          {/* Participation Details */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold mb-4">Participation Details</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li><strong className="text-white">Eligibility:</strong> Grades 9–13</li>
              <li><strong className="text-white">Team Size:</strong> 2–4 members</li>
              <li><strong className="text-white">Integrity:</strong> Plagiarism results in disqualification</li>
            </ul>
          </section>

          {/* Technical Requirements */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold mb-4">Technical Requirements</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li><strong className="text-white">Core Tech:</strong> HTML, CSS, JavaScript</li>
              <li>
                <strong className="text-white">Frameworks:</strong>{" "}
                React, Vue, Bootstrap, Tailwind, nextjs
              </li>
              <li>
                <strong className="text-white">Coding Standards:</strong>{" "}
                Descriptive names and proper comments
              </li>
              <li>
                <strong className="text-white">Version Control:</strong>{" "}
                Public GitHub repository with regular commits
              </li>
              <li>
                <strong className="text-white">Bonus Points:</strong>{" "}
                Backend integration, responsiveness, extra features
              </li>
            </ul>
          </section>

          {/* Submission Guidelines */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold mb-4">Submission Guidelines</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Submit the github repository link. </li>
              <li>README with team details & setup instructions</li>
              <li>Hosted link (Vercel, Netlify, GitHub Pages recommended)</li>
              <li>Any commit after the deadlinee will not be considered</li>
              <li className="text-red-400">
                Only the first submission will be evaluated. No late submissions.
              </li>
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
                    <td className="border border-gray-700 px-4 py-2">Functionality</td>
                    <td className="border border-gray-700 px-4 py-2">25%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-700 px-4 py-2">Design & User Experience</td>
                    <td className="border border-gray-700 px-4 py-2">25%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-700 px-4 py-2">Theme Alignment & Creativity</td>
                    <td className="border border-gray-700 px-4 py-2">20%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-700 px-4 py-2">Code Architecture & Cleanliness</td>
                    <td className="border border-gray-700 px-4 py-2">15%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-700 px-4 py-2">Responsiveness</td>
                    <td className="border border-gray-700 px-4 py-2">15%</td>
                  </tr>
                  <tr><td className=' px-4 py-2'> <strong> Database  intergration will boost marks</strong></td></tr>
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
