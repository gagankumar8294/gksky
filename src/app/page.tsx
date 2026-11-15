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
    <div className="relative h-[100dvh] max-h-[100dvh] w-full bg-[#fbdbc6] text-[#1c1815] flex flex-col justify-between overflow-hidden selection:bg-[#1c1815] selection:text-[#fbdbc6]">
      
      {/* PURE ARTWORK BACKDROP - NO PINK OVERLAYS, NO BLEND DISTORTIONS */}
      <div className="pointer-events-none fixed inset-0 flex items-center justify-center -z-10 select-none overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/gksky-logo.jpg"
          alt="GK Sky Artwork Backdrop"
          className="w-full h-full max-w-[950px] max-h-[85vh] object-contain opacity-80"
        />
      </div>

      {/* Top Navbar */}
      <header className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 pt-4 sm:pt-6 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl overflow-hidden shadow-sm border border-[#1c1815]/20 bg-[#fbdbc6] flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/gksky-logo.jpg"
              alt="GK Sky Logo — Gagan Kumar"
              className="w-full h-full object-cover scale-110"
            />
          </div>
          <div>
            <h2 className="text-sm sm:text-base font-bold tracking-tight text-[#1c1815] flex items-center gap-1.5">
              GK Sky
              <span className="text-[9px] uppercase font-mono px-1.5 py-0.5 rounded-full bg-[#1c1815]/10 text-[#1c1815] border border-[#1c1815]/20 font-semibold tracking-wider">
                Official
              </span>
            </h2>
            <p className="text-[11px] text-[#554741] font-medium">Gagan Kumar</p>
          </div>
        </div>

        {/* Telegram Direct Header Action */}
        <div className="flex items-center gap-2">
          <div className="hidden xs:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#1c1815]/10 border border-[#1c1815]/15 text-[#1c1815] text-[11px] font-medium">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c85f40] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#c85f40]"></span>
            </span>
            <span>Launching Soon</span>
          </div>

          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-[#1c1815] hover:bg-[#2e2622] text-[#fbdbc6] text-xs font-medium transition-all duration-200 shadow-sm active:scale-95"
            title="Chat on Telegram: @gagankumarpotterhood"
          >
            <TelegramIcon className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Telegram</span>
          </a>
        </div>
      </header>

      {/* Main Single-Screen Hero (Directly Over Artwork, No Distortions) */}
      <main className="relative z-10 w-full max-w-4xl mx-auto px-5 sm:px-8 my-auto text-center flex-1 flex flex-col items-center justify-center space-y-4 sm:space-y-6 shrink min-h-0">
        
        {/* Status Pill */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1c1815]/10 border border-[#1c1815]/20 text-[#1c1815] text-[11px] sm:text-xs font-semibold backdrop-blur-xs">
          <Sparkles className="w-3 h-3 text-[#c85f40]" />
          <span>New Official Website &bull; In Active Development</span>
        </div>

        {/* Primary Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1c1815] leading-[1.08] max-w-3xl drop-shadow-[0_1px_1px_rgba(251,219,198,0.8)]">
          Something exceptional is yet to come.
        </h1>

        {/* Required One-Row Tagline */}
        <p className="text-xs sm:text-base lg:text-lg text-[#1c1815] font-bold tracking-tight whitespace-normal sm:whitespace-nowrap px-2 drop-shadow-[0_1px_1px_rgba(251,219,198,0.8)]">
          This is the new official digital home of <span className="underline decoration-[#c85f40] underline-offset-4">Gagan Kumar</span> (<span className="text-[#c85f40]">GK Sky</span>).
        </p>

        {/* Minimal SEO Badges */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 text-[11px] sm:text-xs text-[#1c1815] font-semibold pt-1">
          <span className="px-3 py-1 rounded-full bg-[#1c1815]/10 border border-[#1c1815]/20">
            Web Developer
          </span>
          <span className="px-3 py-1 rounded-full bg-[#1c1815]/10 border border-[#1c1815]/20">
            MERN Stack
          </span>
          <span className="px-3 py-1 rounded-full bg-[#1c1815]/10 border border-[#1c1815]/20">
            App Developer
          </span>
          <span className="px-3 py-1 rounded-full bg-[#1c1815]/10 border border-[#1c1815]/20 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-[#c85f40]" />
            Bangalore
          </span>
        </div>

        {/* Direct Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 w-full max-w-sm mx-auto">
          {/* Telegram Action */}
          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-xl bg-[#1c1815] text-[#fbdbc6] font-semibold text-xs sm:text-sm shadow-md hover:bg-[#2e2622] transition-all duration-200 active:scale-[0.98]"
          >
            <TelegramIcon className="w-3.5 h-3.5 text-[#fbdbc6]" />
            <span>Telegram</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
          </a>

          {/* Send Email Action */}
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 rounded-xl bg-[#1c1815]/12 hover:bg-[#1c1815]/18 border border-[#1c1815]/25 text-[#1c1815] font-semibold text-xs sm:text-sm transition-all duration-200 active:scale-[0.98]"
          >
            <Mail className="w-3.5 h-3.5 text-[#c85f40]" />
            <span>Email</span>
          </a>

          {/* Copy Email Button */}
          <button
            onClick={handleCopy}
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 sm:py-3 rounded-xl bg-[#1c1815]/10 hover:bg-[#1c1815]/15 border border-[#1c1815]/25 text-[#1c1815] font-semibold text-xs sm:text-sm transition-all duration-200 active:scale-[0.98]"
            title="Copy email address"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-800" />
                <span className="text-emerald-950 font-bold text-xs">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#554741]" />
                <span className="text-xs">Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Minimal Under-Construction Note */}
        <div className="pt-1 flex items-center justify-center gap-1.5 text-[10px] sm:text-xs text-[#554741] font-medium">
          <Clock className="w-3 h-3 text-[#c85f40]" />
          <span>Under Construction &bull; Launching 2026</span>
        </div>

      </main>

      {/* Clean Minimal Footer */}
      <footer className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 py-3 sm:py-4 border-t border-[#1c1815]/15 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#554741] font-medium shrink-0">
        <div>
          &copy; 2026 Gagan Kumar (GK Sky) &bull; All rights reserved.
        </div>
        <div className="flex items-center gap-3">
          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1c1815] transition-colors flex items-center gap-1 font-mono font-bold"
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
