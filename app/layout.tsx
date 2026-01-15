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
  title: "KNGINE ",
  description:
    "KNGINE The annual ICT Day of Richmond college ",
  keywords: [
    "Richmond college, kngine, ict society , rits, richmond ict, kngine - legion, richmond live "
  ],
  authors: [{ name: "Rusiru Thamara" }],
  alternates: {
    canonical: "https://kngine.richmondcollege.lk",
  },
  openGraph: {
    title: "KNGINE ",
    description:
      "KNGINE The annual ICT Day of Richmond college ",
    url: "https://kngine.richmondcollege.lk",
    siteName: "KNGINE",
    images: [
      {
        url: "https://kngine.richmondcollege.lk/images/imagebg.png",
        width: 1200,
        height: 630,
        alt: "KNGINE ",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KNGINE ",
    description:
      "KNGINE The annual ICT Day of Richmond college ",
    images: ["https://kngine.richmondcollege.lk/images/imagebg.png"],
  },
  metadataBase: new URL("https://kngine.richmondcollege.lk"),
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
