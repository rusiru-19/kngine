import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  metadataBase: new URL("https://kngine.richmondcollege.lk"),

  title: {
    default: "KNGINE | Richmond College ICT Day",
    template: "%s | KNGINE",
  },

  description:
    "KNGINE is the annual ICT Day organized by the Richmond College ICT Society (RITS), featuring innovative technology events, competitions, and digital excellence.",

  keywords: [
    "KNGINE",
    "Richmond College",
    "Richmond College ICT Society",
    "RITS",
    "ICT Day Sri Lanka",
    "School ICT Competition",
    "Richmond ICT",
    "KNGINE Legion",
    "Technology Events Sri Lanka",
    "Student ICT Competitions",
  ],

  authors: [{ name: "Rusiru Thamara" }],
  creator: "Richmond College ICT Society",
  publisher: "Richmond College",

  alternates: {
    canonical: "https://kngine.richmondcollege.lk",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "KNGINE | Richmond College ICT Day",
    description:
      "Discover KNGINE – the flagship ICT Day of Richmond College, organized by RITS. Experience innovation, competition, and digital creativity.",
    url: "https://kngine.richmondcollege.lk",
    siteName: "KNGINE",
    images: [
      {
        url: "/images/imagebg.png",
        width: 1200,
        height: 630,
        alt: "KNGINE - Richmond College ICT Day",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "KNGINE | Richmond College ICT Day",
    description:
      "The official website of KNGINE, the annual ICT Day organized by Richmond College ICT Society (RITS).",
    images: ["/images/imagebg.png"],
    creator: "@RichmondCollege", // optional if available
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <div className="bg-[#030304]">{children}</div>
        
      </body>
    </html>
  );
}
