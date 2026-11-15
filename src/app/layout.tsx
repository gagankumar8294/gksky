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
  title: "Gagan Kumar | Web & App Developer (gksky)",
  description:
    "Portfolio of Gagan Kumar (gksky) — Full-stack Web Developer and Mobile App Developer crafting next-generation digital experiences.",
  keywords: [
    "Gagan Kumar",
    "gksky",
    "gagankumar8294",
    "Web Developer",
    "App Developer",
    "Full Stack Developer",
    "Next.js",
    "React Native",
    "Portfolio",
  ],
  authors: [{ name: "Gagan Kumar", url: "https://github.com/gagankumar8294" }],
  creator: "Gagan Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/gagankumar8294/gksky",
    title: "Gagan Kumar | Web & App Developer",
    description:
      "Crafting performant web applications and intuitive mobile solutions.",
    siteName: "Gagan Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gagan Kumar | Web & App Developer",
    description:
      "Crafting performant web applications and intuitive mobile solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <body className="min-h-screen bg-[#090a0f] text-gray-100 antialiased selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
