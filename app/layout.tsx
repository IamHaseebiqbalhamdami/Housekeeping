import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import SharedHeader from "@/components/shared-header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HouseKeeping PRO - Professional Cleaning Services | Simcoe County",
  description:
    "Professional residential, commercial, and Airbnb cleaning services across Simcoe County. 26 years of trusted service in Barrie, Orillia, Midland and surrounding areas.",
  keywords:
    "house cleaning, commercial cleaning, Airbnb cleaning, Barrie, Orillia, Midland, Simcoe County, professional cleaning services",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <SharedHeader currentPage="services" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
