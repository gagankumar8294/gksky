"use client";

import React, { useState } from "react";
import {
  Globe,
  Smartphone,
  Mail,
  Copy,
  Check,
  Sparkles,
  ExternalLink,
  Terminal,
  Zap,
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
  const email = "gagankumar8294@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const techStack = [
    { name: "Next.js", category: "Web" },
    { name: "React", category: "Web" },
    { name: "React Native", category: "App" },
    { name: "TypeScript", category: "Language" },
    { name: "Tailwind CSS", category: "Design" },
    { name: "Node.js", category: "Backend" },
    { name: "REST & GraphQL", category: "API" },
    { name: "Git & GitHub", category: "DevOps" },
  ];

  return (
    <div className="relative min-h-screen bg-[#07080c] text-white flex flex-col justify-between overflow-hidden selection:bg-indigo-600 selection:text-white">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-cyan-500/15 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="pointer-events-none absolute top-1/2 -left-48 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 -right-40 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[110px]" />

      {/* Grid Pattern Overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Top Navigation */}
      <header className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-6 sm:pt-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-600 to-cyan-400 p-[1px] shadow-lg shadow-indigo-500/20">
            <div className="w-full h-full bg-[#0d0f17] rounded-[11px] flex items-center justify-center font-bold text-sm tracking-widest text-white">
              GK
            </div>
          </div>
          <div>
            <span className="font-semibold text-base tracking-tight text-white flex items-center gap-1.5">
              gksky
              <span className="text-xs px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-400 font-mono font-normal border border-indigo-500/30">
                v1.0
              </span>
            </span>
            <p className="text-xs text-gray-400">Gagan Kumar</p>
          </div>
        </div>

        {/* Status Pill & Links */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for projects
          </div>

          <a
            href="https://github.com/gagankumar8294"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
            title="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* Main Hero & Content Section */}
      <main className="relative z-10 w-full max-w-5xl mx-auto px-6 py-12 sm:py-16 my-auto">
        <div className="space-y-10">
          {/* Badge & Intro */}
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-xs font-medium backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Full-Stack Web & Mobile App Developer</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Building scalable web apps &{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                cutting-edge mobile products.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl">
              Hey, I&apos;m <span className="text-gray-200 font-semibold">Gagan Kumar</span>. 
              I design and engineer responsive web applications and performant cross-platform mobile apps with modern frameworks, thoughtful UX, and clean architecture.
            </p>
          </div>

          {/* Dual Core Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Web Pillar */}
            <div className="group relative p-6 sm:p-7 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-indigo-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-5 group-hover:scale-105 transition-transform duration-300">
                <Globe className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                Web Development
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Full-lifecycle web applications built with Next.js, React, and TypeScript. Focused on blazing speed, SEO optimization, responsive ergonomics, and robust API integrations.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5">Next.js</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5">React</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5">Tailwind CSS</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5">Node.js</span>
              </div>
            </div>

            {/* App Pillar */}
            <div className="group relative p-6 sm:p-7 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-105 transition-transform duration-300">
                <Smartphone className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                App Development
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Native and cross-platform mobile solutions crafted for fluid gestures, device hardware integration, offline support, and smooth end-to-end user experiences.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5">React Native</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5">Mobile UI/UX</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5">Android & iOS</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5">API Sync</span>
              </div>
            </div>
          </div>

          {/* Action Row & Interactive Contact */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 text-white font-medium text-sm shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:opacity-95 transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
              <span>Let&apos;s Connect</span>
            </a>

            <button
              onClick={handleCopy}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300 hover:text-white font-medium text-sm transition-all duration-200"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-gray-400" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <a
              href="https://github.com/gagankumar8294"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-white/20 text-gray-300 hover:text-white font-medium text-sm transition-all duration-200"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-50" />
            </a>
          </div>

          {/* Quick Technical Highlights Bar */}
          <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4 text-xs text-gray-400">
            <div className="flex items-center gap-2 font-mono">
              <Terminal className="w-3.5 h-3.5 text-indigo-400" />
              <span>Stack:</span>
              <div className="flex flex-wrap gap-1.5 text-gray-300">
                {techStack.map((tech) => (
                  <span
                    key={tech.name}
                    className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 text-gray-400">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Launch Edition &bull; Portfolio 2026</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-6xl mx-auto px-6 py-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
        <div>
          &copy; 2026 Gagan Kumar &bull; All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/gagankumar8294/gksky"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors flex items-center gap-1"
          >
            <span>Repository: gksky</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </footer>
    </div>
  );
}
