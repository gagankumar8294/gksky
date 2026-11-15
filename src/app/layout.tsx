import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#fbdbc6",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "GK Sky — Digital Atelier & Creations",
  description:
    "GK Sky — The creative digital space of Gagan Kumar. Exploring cutting-edge web craftsmanship, mobile architectures, and future-forward digital products.",
  keywords: [
    "GK Sky",
    "Gagan Kumar",
    "gksky",
    "Digital Atelier",
    "Web Craft",
    "Mobile App Architecture",
    "Creative Studio",
  ],
  authors: [{ name: "Gagan Kumar", url: "https://github.com/gagankumar8294" }],
  creator: "Gagan Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/gagankumar8294/gksky",
    title: "GK Sky — Digital Atelier & Creations",
    description:
      "The creative digital space of Gagan Kumar. Building refined web & mobile experiences.",
    siteName: "GK Sky",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-[#fbdbc6] text-[#1c1815] antialiased">
        {children}
      </body>
    </html>
  );
}
