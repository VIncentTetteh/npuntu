import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import WhatsAppButton from "@/components/WhatsAppButton"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Npuntu Companies Ltd - Construction & Engineering Solutions in Ghana",
  description: "Leading Ghanaian-owned Construction & Engineering company delivering innovative, high-quality solutions for civil engineering, roads, real estate, and infrastructure projects.",
  keywords: "construction Ghana, engineering Ghana, civil engineering, roads infrastructure, real estate Ghana, water treatment, consultancy Ghana",
  authors: [{ name: "Npuntu Companies Ltd" }],
  openGraph: {
    title: "Npuntu Companies Ltd - Construction & Engineering Solutions",
    description: "Leading Construction & Engineering company in Ghana",
    url: "https://www.npuntu.com",
    siteName: "Npuntu Companies Ltd",
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
