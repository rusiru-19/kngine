import React from "react";
import { cn } from "@/lib/utils";
import Navigationbar from "@/components/navigation";
import Footer from "@/components/footer";

function Contact() {
  return (
    <div className="bg-black min-h-screen relative">
      <Navigationbar />

      {/* Background grid & radial mask */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_0.01px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_5%,white)] dark:bg-black"></div>

      {/* Page Content */}
      <div className="relative max-w-6xl mx-auto px-4 py-32 text-white space-y-28">

        {/* Title */}
        <h1 className="text-6xl font-bold text-center tracking-wide mb-16">
          Contact Coordinators
        </h1>

        {/* Row 1: Event Day */}
        <section className="space-y-8">
          <h2 className="text-3xl font-semibold text-center mb-8">Event Day Inquiries</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-900 rounded-2xl border border-gray-700 hover:shadow-[0_0_5px_#FFFFFF] transition-all text-center">
              <h3 className="text-xl font-bold mb-2">Hirusha</h3>
              <p className="text-gray-300">+94 71 194 2117</p>
            </div>
        
            <div className="p-6 bg-gray-900 rounded-2xl border border-gray-700 hover:shadow-[0_0_5px_#FFFFFF] transition-all text-center">
              <h3 className="text-xl font-bold mb-2">Dulen</h3>
              <p className="text-gray-300">+94 77 351 0195</p>
            </div>
          </div>
        </section>

        {/* Row 2: Competition Queries */}
        <section className="space-y-8">
          <h2 className="text-3xl font-semibold text-center mb-8">Competition Queries</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-900 rounded-2xl border border-gray-700 hover:shadow-[0_0_5px_#FFFFFF] transition-all text-center">
              <h3 className="text-xl font-bold mb-2">Semika Anusara</h3>
              <p className="text-gray-300">+94 76 266 5690</p>
            </div>
             <div className="p-6 bg-gray-900 rounded-2xl border border-gray-700 hover:shadow-[0_0_5px_#FFFFFF] transition-all text-center">
              <h3 className="text-xl font-bold mb-2">Thilina Methsahan</h3>
              <p className="text-gray-300">+94 77 278 9984</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-2xl border border-gray-700 hover:shadow-[0_0_5px_#FFFFFF] transition-all text-center">
              <h3 className="text-xl font-bold mb-2">Hirun Dilshan</h3>
              <p className="text-gray-300">+94 76 808 8170</p>
            </div>
          </div>
        </section>

        {/* Row 3: Registration Queries */}
        <section className="space-y-8">
          <h2 className="text-3xl font-semibold text-center mb-8">Registration Inquiries</h2>

          <div className="flex justify-center">
            <div className="p-6 w-full sm:w-80 bg-gray-900 rounded-2xl border border-gray-700 hover:shadow-[0_0_5px_#FFFFFF] transition-all text-center">
              <h3 className="text-xl font-bold mb-2">Dinel</h3>
              <p className="text-gray-300">+94 77 007 5073</p>
            </div>
          </div>
        </section>


      </div>

      <Footer />
    </div>
  );
}

export default Contact;
