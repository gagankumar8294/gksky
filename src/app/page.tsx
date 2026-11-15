"use client";

import React, { useState } from "react";
import {
  Sparkles,
  ArrowUpRight,
  Mail,
  Copy,
  Check,
  MapPin,
  Clock,
} from "lucide-react";

// Telegram Vector Icon
function TelegramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

export default function Home() {
  const [copied, setCopied] = useState(false);
  const email = "gagankumar8294@gmail.com";
  const telegramUsername = "gagankumarpotterhood";
  const telegramUrl = `https://t.me/${telegramUsername}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="relative min-h-screen bg-[#fbdbc6] text-[#1c1815] flex flex-col justify-between overflow-hidden selection:bg-[#1c1815] selection:text-[#fbdbc6]">
      {/* FULL-WIDTH BLURRED TRANSPARENT GK SKY BACKGROUND LOGO */}
      <div className="pointer-events-none fixed inset-0 flex items-center justify-center -z-10 overflow-hidden select-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/gksky-logo.jpg"
          alt="GK Sky Artwork Backdrop"
          className="w-full h-full object-cover sm:object-contain opacity-25 mix-blend-multiply filter blur-[2px] scale-105 sm:scale-100 transition-all duration-700"
        />
        {/* Soft Ambient Overlay to Ensure Text is Crystal Clear */}
        <div className="absolute inset-0 bg-[#fbdbc6]/35 backdrop-blur-[1px]" />
      </div>

      {/* Ambient Lighting Glows */}
      <div className="pointer-events-none fixed top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-white/60 to-rose-200/20 blur-[100px] -z-20" />
      <div className="pointer-events-none fixed bottom-[-10%] right-[-5%] w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-[#f3bca1]/30 to-white/30 blur-[90px] -z-20" />

      {/* Top Header - Kept Clean & Logo in Right Manner */}
      <header className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 pt-6 sm:pt-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative group">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl overflow-hidden shadow-md shadow-[#1c1815]/10 border border-[#1c1815]/15 bg-[#fbdbc6] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/gksky-logo.jpg"
                alt="GK Sky Logo — Gagan Kumar"
                className="w-full h-full object-cover scale-110"
              />
            </div>
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold tracking-tight text-[#1c1815] flex items-center gap-2">
              GK Sky
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-[#1c1815]/8 text-[#1c1815]/80 border border-[#1c1815]/10 font-semibold tracking-wider">
                Official
              </span>
            </h2>
            <p className="text-xs text-[#5f524c]">Gagan Kumar</p>
          </div>
        </div>

        {/* Telegram Direct Header Action */}
        <div className="flex items-center gap-2.5">
          <div className="hidden xs:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 border border-[#1c1815]/10 text-[#2f2723] text-xs font-medium backdrop-blur-md shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c85f40] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c85f40]"></span>
            </span>
            <span>Launching Soon</span>
          </div>

          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#1c1815] hover:bg-[#2e2622] text-[#fbdbc6] text-xs font-medium transition-all duration-200 shadow-xs hover:scale-105 active:scale-95"
            title="Chat on Telegram: @gagankumarpotterhood"
          >
            <TelegramIcon className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Telegram</span>
          </a>
        </div>
      </header>

      {/* Minimalist Centered Hero */}
      <main className="relative z-10 w-full max-w-4xl mx-auto px-5 sm:px-8 py-12 sm:py-20 my-auto text-center flex flex-col items-center justify-center space-y-6 sm:space-y-8">
        
        {/* Subtle Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#1c1815]/12 text-[#3d322c] text-xs sm:text-sm font-medium shadow-xs backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#c85f40]" />
          <span>New Official Website &bull; In Active Development</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#1c1815] leading-[1.08] max-w-3xl">
          Something exceptional is yet to come.
        </h1>

        {/* ONE-ROW REQUIRED STATEMENT */}
        <p className="text-sm sm:text-lg lg:text-xl text-[#352b27] font-medium leading-normal tracking-tight max-w-full overflow-hidden text-ellipsis whitespace-normal sm:whitespace-nowrap px-2">
          This is the new official digital home of <strong className="font-bold text-[#1c1815]">Gagan Kumar</strong> (<span className="text-[#c85f40] font-semibold">GK Sky</span>).
        </p>

        {/* Minimal SEO Badges in a Clean Single Line */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-xs text-[#433630]">
          <span className="px-3 py-1 rounded-full bg-white/60 border border-[#1c1815]/10 font-medium">
            Web Developer
          </span>
          <span className="px-3 py-1 rounded-full bg-white/60 border border-[#1c1815]/10 font-medium">
            MERN Stack Developer
          </span>
          <span className="px-3 py-1 rounded-full bg-white/60 border border-[#1c1815]/10 font-medium">
            App Developer
          </span>
          <span className="px-3 py-1 rounded-full bg-white/60 border border-[#1c1815]/10 font-medium flex items-center gap-1">
            <MapPin className="w-3 h-3 text-[#c85f40]" />
            Bangalore
          </span>
        </div>

        {/* Direct Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full max-w-md">
          {/* Telegram Action */}
          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#1c1815] text-[#fbdbc6] font-medium text-sm shadow-lg shadow-[#1c1815]/20 hover:bg-[#2e2622] transition-all duration-200 active:scale-[0.98]"
          >
            <TelegramIcon className="w-4 h-4 text-[#fbdbc6]" />
            <span>Contact via Telegram</span>
            <ArrowUpRight className="w-4 h-4 opacity-70" />
          </a>

          {/* Send Email Action */}
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-white/80 hover:bg-white border border-[#1c1815]/10 text-[#1c1815] font-medium text-sm transition-all duration-200 shadow-xs active:scale-[0.98]"
          >
            <Mail className="w-4 h-4 text-[#c85f40]" />
            <span>Send Email</span>
          </a>

          {/* Copy Email Button */}
          <button
            onClick={handleCopy}
            className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl bg-white/60 hover:bg-white/90 border border-[#1c1815]/10 text-[#1c1815] font-medium text-sm transition-all duration-200 active:scale-[0.98]"
            title="Copy email address"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-800 font-semibold text-xs">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#5f5049]" />
                <span className="text-xs">Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Minimal Under-Construction Note */}
        <div className="pt-2 flex items-center justify-center gap-2 text-xs text-[#6e5d55]">
          <Clock className="w-3.5 h-3.5 text-[#c85f40]" />
          <span>Under Construction &bull; Launching 2026</span>
        </div>

      </main>

      {/* Clean Minimal Footer */}
      <footer className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 py-6 border-t border-[#1c1815]/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#705e55]">
        <div>
          &copy; 2026 Gagan Kumar (GK Sky) &bull; All rights reserved.
        </div>
        <div className="flex items-center gap-3">
          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1c1815] transition-colors flex items-center gap-1 font-mono"
          >
            <span>@{telegramUsername}</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>
          <span className="text-[#1c1815]/20">&bull;</span>
          <span className="font-mono">{email}</span>
        </div>
      </footer>
    </div>
  );
}
