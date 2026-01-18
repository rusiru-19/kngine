import React from 'react'
import { cn } from "@/lib/utils"
import Footer from '@/components/footer'
import Navigationbar from '@/components/navigation'
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "DesignerX | Graphic Design Competition – KNGINE’26",
  description:
    "DesignerX is an individual online graphic designing competition at KNGINE’26. Join the DedSec resistance and create a recruitment poster inspired by Watch Dogs: Legion.",

  keywords: [
    "DesignerX",
    "Graphic Design Competition",
    "KNGINE 26",
    "ICT Day",
    "Watch Dogs Legion",
    "DedSec",
    "Student Design Competition",
    "Richmond College ICT Society",
  ],

  authors: [{ name: "Richmond College ICT Society (RITS)" }],
  creator: "RITS",
  publisher: "Richmond College",

  openGraph: {
    title: "DesignerX | Join the DedSec Resistance",
    description:
      "Design is the silent ambassador of resistance. Participate in DesignerX at KNGINE’26 and create a DedSec recruitment poster inspired by Watch Dogs: Legion.",
    url: "https://kngine.richmondcollege.lk/designerx",
    siteName: "KNGINE’26",
    images: [
      {
        url: "/og/designerx.png",
        width: 1200,
        height: 630,
        alt: "DesignerX Graphic Design Competition – KNGINE’26",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "DesignerX | Graphic Design Competition",
    description:
      "Join the DedSec resistance. Compete in DesignerX – the official graphic designing competition of KNGINE’26.",
    images: ["/og/designerx.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  themeColor: "#000000",
}

function GraphicDesigning() {
  return (
    <>
      <div className="bg-black min-h-screen relative">
        <Navigationbar />

        {/* Background grid */}
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#d4d4d4_0.01px,transparent_1px)]",
            "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
          )}
        />

        {/* Mask */}
        <div className="pointer-events-none absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_5%,white)]" />

        {/* Content */}
        <div className="relative max-w-5xl mx-auto px-4 py-32 text-white">
          
          {/* Title */}
          <h1 className="text-6xl mt-25 font-bold tracking-wider aquire text-center mb-10">
            DesignerX
          </h1>

          {/* Overview */}
          <section className="space-y-4 mb-12 text-center">
            <p className="text-lg text-gray-300">
              <span className="font-semibold text-white">Type:</span> Individual • Online Submission
            </p>
            <p className="italic text-gray-400 max-w-3xl mx-auto">
              “Design is the silent ambassador of your resistance. Create visuals that hack the system.”
            </p>
          </section>

          {/* Theme */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold mb-3">Theme</h2>
            <p className="text-gray-300">
              <span className="font-semibold text-white">Join the Resistance — DedSec Recruitment.</span>
              <br />
              Design a recruitment poster for DedSec (from <em>Watch Dogs: Legion</em>) to inspire a digital resistance against surveillance.
            </p>
          </section>

          {/* Participation Details */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold mb-4">Participation Details</h2>
            <ul className="space-y-2 text-gray-300 list-disc list-inside">
              <li><strong className="text-white">Eligibility:</strong> Grades 9–13</li>
              <li><strong className="text-white">Format:</strong> Individual only (no teams)</li>
              <li><strong className="text-white">School Limit:</strong> No limit per school</li>
              <li><strong className="text-white">Submission Limit:</strong> One submission per contestant</li>
            </ul>
          </section>

          {/* Technical Requirements */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold mb-4">Technical Requirements</h2>
            <ul className="space-y-2 text-gray-300 list-disc list-inside">
              <li>
                <strong className="text-white">Software:</strong> Photoshop, Illustrator, Figma, Canva, or GIMP
              </li>
              <li>
                <strong className="text-white">Dimensions:</strong> A3 (297mm × 420mm) or 4:5 (1080 × 1350px)
              </li>
              <li>
                <strong className="text-white">Integrity:</strong> Plagiarism and templates are strictly prohibited
              </li>
              <li>
                <strong className="text-white">Process:</strong> Regular work-in-progress screenshots required
              </li>
            </ul>
          </section>

          {/* Submission Guidelines */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold mb-4">Submission Guidelines</h2>
            <ul className="space-y-2 text-gray-300 list-disc list-inside">
              <li>
                <strong className="text-white">Platform:</strong> Official KNGINE’26 registration form
              </li>
              <li>
                <strong className="text-white">Format:</strong> Single <code>.zip</code> file containing:
                <ul className="ml-6 list-disc space-y-1">
                  <li>All project files (textures, images, overlays)</li>
                  <li>Final artwork (.png / .jpg / .pdf, minimum 300 DPI)</li>
                  <li>PDF with layers + at least 5 in-progress screenshots</li>
                </ul>
              </li>
              <li>
                <strong className="text-white">File Naming:</strong> DesignerX_SchoolName_YourName.zip
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
                    <td className="border border-gray-700 px-4 py-2">Creativity & Originality</td>
                    <td className="border border-gray-700 px-4 py-2">25%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-700 px-4 py-2">Theme Alignment (Watch Dogs: Legion)</td>
                    <td className="border border-gray-700 px-4 py-2">25%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-700 px-4 py-2">Visual Appeal & Aesthetics</td>
                    <td className="border border-gray-700 px-4 py-2">20%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-700 px-4 py-2">Technical Execution</td>
                    <td className="border border-gray-700 px-4 py-2">20%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-700 px-4 py-2">Presentation & Documentation</td>
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

export default GraphicDesigning
