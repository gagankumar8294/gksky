"use client";

import React, { useState } from "react";
import {
  Sparkles,
  ArrowUpRight,
  Globe,
  Smartphone,
  Layers,
  Mail,
  Copy,
  Check,
  Compass,
  Code2,
} from "lucide-react";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"vision" | "craft" | "manifesto">("vision");
  const email = "gagankumar8294@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="relative min-h-screen bg-[#fbdbc6] text-[#1c1815] flex flex-col justify-between overflow-x-hidden selection:bg-[#1c1815] selection:text-[#fbdbc6]">
      {/* Ambient Lighting Orbs */}
      <div className="pointer-events-none fixed top-[-15%] left-[20%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-white/60 to-rose-200/30 blur-[100px] animate-warm-pulse -z-10" />
      <div className="pointer-events-none fixed bottom-[-10%] right-[-10%] w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-[#f3bca1]/40 to-white/40 blur-[90px] -z-10" />

      {/* Subtle Grain Texture */}
      <div className="pointer-events-none fixed inset-0 bg-grain opacity-40 -z-10" />

      {/* Top Navbar */}
      <header className="w-full max-w-5xl mx-auto px-5 sm:px-8 pt-6 sm:pt-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative group">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl overflow-hidden shadow-md shadow-[#1c1815]/10 border border-[#1c1815]/15 bg-[#fbdbc6] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/gksky-logo.jpg"
                alt="GK Sky Emblem"
                className="w-full h-full object-cover scale-110"
              />
            </div>
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold tracking-tight text-[#1c1815] flex items-center gap-2">
              GK Sky
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-[#1c1815]/8 text-[#1c1815]/75 border border-[#1c1815]/10 font-semibold tracking-wider">
                Digital Atelier
              </span>
            </h2>
            <p className="text-xs text-[#5f524c]">Gagan Kumar</p>
          </div>
        </div>

        {/* Status Badge */}
        <div className="flex items-center gap-2.5">
          <div className="hidden xs:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 border border-[#1c1815]/10 text-[#2f2723] text-xs font-medium backdrop-blur-md shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c85f40] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c85f40]"></span>
            </span>
            <span>In Creation</span>
          </div>

          <a
            href="https://github.com/gagankumar8294"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 sm:p-3 rounded-full bg-white/60 hover:bg-white/90 border border-[#1c1815]/10 text-[#1c1815] transition-all duration-200 shadow-xs hover:scale-105 active:scale-95"
            title="GitHub"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* Main Experience Hero */}
      <main className="w-full max-w-4xl mx-auto px-5 sm:px-8 py-8 sm:py-16 my-auto">
        <div className="flex flex-col items-center text-center space-y-8 sm:space-y-10">
          
          {/* Central Logo Centerpiece */}
          <div className="relative group">
            <div className="absolute -inset-3 bg-gradient-to-r from-[#e8a58a]/40 via-white/50 to-[#e8a58a]/40 rounded-[36px] blur-xl opacity-70 group-hover:opacity-100 transition duration-500 animate-warm-pulse" />
            <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-[32px] overflow-hidden p-2 bg-gradient-to-b from-white/90 to-[#fbdbc6]/90 border border-[#1c1815]/12 shadow-2xl shadow-[#c85f40]/15 animate-float">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/gksky-logo.jpg"
                alt="GK Sky Signature Logo"
                className="w-full h-full object-cover rounded-[24px] select-none"
              />
            </div>
          </div>

          {/* Headline & Philosophy */}
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1815]/5 border border-[#1c1815]/10 text-[#4c3e38] text-xs font-medium tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-[#c85f40]" />
              <span>A Creative Space By Gagan Kumar</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1c1815] leading-[1.12]">
              The craft of modern web & mobile experiences.
            </h1>

            <p className="text-base sm:text-lg text-[#554741] leading-relaxed max-w-xl mx-auto font-normal">
              Not merely a portfolio, but a home for what is coming. Exploring tactile software, high-performance web systems, and thoughtful digital products under the <strong className="font-semibold text-[#1c1815]">GK Sky</strong> banner.
            </p>
          </div>

          {/* Interactive Exploration Tabs */}
          <div className="w-full max-w-xl">
            <div className="p-1 rounded-2xl bg-white/50 border border-[#1c1815]/10 flex items-center justify-between text-xs sm:text-sm font-medium shadow-xs">
              <button
                onClick={() => setActiveTab("vision")}
                className={`flex-1 py-2 sm:py-2.5 rounded-xl transition-all duration-200 ${
                  activeTab === "vision"
                    ? "bg-[#1c1815] text-[#fbdbc6] shadow-md"
                    : "text-[#5e4f48] hover:text-[#1c1815]"
                }`}
              >
                The Vision
              </button>
              <button
                onClick={() => setActiveTab("craft")}
                className={`flex-1 py-2 sm:py-2.5 rounded-xl transition-all duration-200 ${
                  activeTab === "craft"
                    ? "bg-[#1c1815] text-[#fbdbc6] shadow-md"
                    : "text-[#5e4f48] hover:text-[#1c1815]"
                }`}
              >
                The Craft
              </button>
              <button
                onClick={() => setActiveTab("manifesto")}
                className={`flex-1 py-2 sm:py-2.5 rounded-xl transition-all duration-200 ${
                  activeTab === "manifesto"
                    ? "bg-[#1c1815] text-[#fbdbc6] shadow-md"
                    : "text-[#5e4f48] hover:text-[#1c1815]"
                }`}
              >
                What&apos;s Next
              </button>
            </div>

            {/* Dynamic Card Content */}
            <div className="mt-4 porcelain-card rounded-2xl p-6 sm:p-8 text-left transition-all duration-300">
              {activeTab === "vision" && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#c85f40]">
                    <Compass className="w-4 h-4" />
                    <span>01 &bull; Purpose & Direction</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1c1815]">
                    Digital experiences built with purpose & aesthetics.
                  </h3>
                  <p className="text-sm text-[#5f5049] leading-relaxed">
                    GK Sky exists at the intersection of minimalist visual aesthetics and robust technical foundations. We believe great software should feel as organic, warm, and responsive as physical tools.
                  </p>
                </div>
              )}

              {activeTab === "craft" && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#c85f40]">
                    <Code2 className="w-4 h-4" />
                    <span>02 &bull; Core Disciplines</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                    <div className="p-3.5 rounded-xl bg-white/60 border border-[#1c1815]/8">
                      <div className="flex items-center gap-2 font-bold text-[#1c1815] mb-1">
                        <Globe className="w-4 h-4 text-[#c85f40]" />
                        <span>Web Engineering</span>
                      </div>
                      <p className="text-xs text-[#62534c]">
                        Modern Next.js, React, TypeScript, fluid micro-interactions, and accessible web standards.
                      </p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/60 border border-[#1c1815]/8">
                      <div className="flex items-center gap-2 font-bold text-[#1c1815] mb-1">
                        <Smartphone className="w-4 h-4 text-[#c85f40]" />
                        <span>Mobile Applications</span>
                      </div>
                      <p className="text-xs text-[#62534c]">
                        Cross-platform mobile apps built for gestures, hardware speed, and intuitive day-to-day utility.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "manifesto" && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#c85f40]">
                    <Layers className="w-4 h-4" />
                    <span>03 &bull; Future Drops</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1c1815]">
                    Upcoming releases & standalone tools.
                  </h3>
                  <p className="text-sm text-[#5f5049] leading-relaxed">
                    New experimental web tools, native utilities, and open-source packages are being crafted in the workshop. Stay tuned as this space transforms with live case studies and product launches.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Direct Actions & Connection */}
          <div className="w-full max-w-md pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#1c1815] text-[#fbdbc6] font-medium text-sm shadow-lg shadow-[#1c1815]/20 hover:bg-[#2b2420] transition-all duration-200 active:scale-[0.98]"
            >
              <Mail className="w-4 h-4" />
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4 opacity-70" />
            </a>

            <button
              onClick={handleCopy}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-white/60 hover:bg-white/90 border border-[#1c1815]/10 text-[#1c1815] font-medium text-sm transition-all duration-200 shadow-xs active:scale-[0.98]"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-800 font-semibold">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#5f5049]" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>

          {/* Bottom Highlights */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-[#6e5d55]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c85f40]" />
              Web & App Development
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1c1815]/40" />
              Responsive Across All Screens
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1c1815]/40" />
              Launch Edition 2026
            </span>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-5xl mx-auto px-5 sm:px-8 py-6 border-t border-[#1c1815]/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#705e55]">
        <div className="flex items-center gap-2">
          <span>&copy; 2026 GK Sky &bull; Gagan Kumar</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/gagankumar8294/gksky"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1c1815] transition-colors flex items-center gap-1"
          >
            <span>github.com/gagankumar8294/gksky</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>
        </div>
      </footer>
    </div>
  );
}
