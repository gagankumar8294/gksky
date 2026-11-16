import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AnalyticsTracker from "@/components/AnalyticsTracker";
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
  metadataBase: new URL("https://gksky.vercel.app"),
  title: {
    default: "Gagan Kumar | Web Developer & App Developer | Bangalore | GK Sky",
    template: "%s | Gagan Kumar (GK Sky)",
  },
  description:
    "Official website of Gagan Kumar (GK Sky / gagan kumar potterhead). Full stack MERN stack web developer and mobile app developer based in Bangalore. Brand new website launching soon.",
  keywords: [
    "Gagan Kumar",
    "gagan kumar potterhead",
    "web developer",
    "banglore gagan kumar",
    "gagan kumar bangalore",
    "mern stack web developer",
    "app developer",
    "gagan kumar web developer",
    "gagan kumar app developer",
    "gagan kumar mern stack developer",
    "gagan kumar mern stack web developer",
    "gagan kumar developer bangalore",
    "gagankumarpotterhood",
    "gksky",
    "gk sky",
    "gagankumar8294",
    "React developer Bangalore",
    "Next.js developer Bangalore",
  ],
  authors: [{ name: "Gagan Kumar", url: "https://t.me/gagankumarpotterhood" }],
  creator: "Gagan Kumar",
  publisher: "GK Sky",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gksky.vercel.app",
    title: "Gagan Kumar | Web & App Developer | Bangalore (GK Sky)",
    description:
      "Official website of Gagan Kumar (gagan kumar potterhead). MERN stack web developer and app developer based in Bangalore. Something exceptional is in the works.",
    siteName: "Gagan Kumar (GK Sky)",
    images: [
      {
        url: "/gksky-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Gagan Kumar GK Sky Emblem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gagan Kumar | Web Developer & App Developer | Bangalore",
    description:
      "Official website of Gagan Kumar (GK Sky / gagan kumar potterhead). Full stack MERN stack web developer and app developer based in Bangalore.",
    images: ["/gksky-logo.jpg"],
  },
  alternates: {
    canonical: "https://gksky.vercel.app",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://gksky.vercel.app/#person",
      name: "Gagan Kumar",
      alternateName: [
        "gagan kumar potterhead",
        "gagankumarpotterhood",
        "gksky",
        "GK Sky",
        "gagankumar8294",
      ],
      jobTitle: "MERN Stack Web Developer & Mobile App Developer",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bangalore",
        addressRegion: "Karnataka",
        addressCountry: "India",
      },
      email: "gagankumar8294@gmail.com",
      url: "https://gksky.vercel.app",
      sameAs: [
        "https://t.me/gagankumarpotterhood",
        "https://github.com/gagankumar8294",
      ],
      knowsAbout: [
        "MERN Stack Web Development",
        "Web Development",
        "Mobile App Development",
        "React",
        "Next.js",
        "Node.js",
        "React Native",
        "JavaScript",
        "TypeScript",
        "Bangalore Web Developers",
      ],
      description:
        "Gagan Kumar is a MERN stack web developer and mobile app developer based in Bangalore, known as gagan kumar potterhead and GK Sky.",
    },
    {
      "@type": "WebSite",
      "@id": "https://gksky.vercel.app/#website",
      url: "https://gksky.vercel.app",
      name: "Gagan Kumar | GK Sky Official Website",
      description:
        "Official new website of Gagan Kumar — Web Developer, MERN Stack Developer & App Developer based in Bangalore (gagan kumar potterhead).",
      publisher: {
        "@id": "https://gksky.vercel.app/#person",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#fbdbc6] text-[#1c1815] antialiased">
        <AnalyticsTracker />
        {children}
      </body>
    </html>
  );
}
