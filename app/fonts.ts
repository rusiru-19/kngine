import localFont from "next/font/local"

export const hackedfont = localFont({
  src: [
    {
      path: "../public/fonts/Hacked-KerX.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-hacked", 
  display: "swap",
})
