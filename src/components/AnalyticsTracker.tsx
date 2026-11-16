"use client";

import { useEffect, useRef } from "react";

export default function AnalyticsTracker() {
  const sessionStartTime = useRef<number>(0);
  const pendingEvents = useRef<
    { type: string; path: string; title: string; label: string; timestamp: string }[]
  >([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    sessionStartTime.current = Date.now();

    // 1. Get or create persistent deviceId
    let deviceId = localStorage.getItem("gksky_device_id");
    if (!deviceId) {
      deviceId = "dev_" + Math.random().toString(36).substring(2, 12) + "_" + Date.now().toString(36);
      localStorage.setItem("gksky_device_id", deviceId);
    }

    // 2. Get or create sessionId (per browser tab session)
    let sessionId = sessionStorage.getItem("gksky_session_id");
    if (!sessionId) {
      sessionId = "sess_" + Math.random().toString(36).substring(2, 12) + "_" + Date.now().toString(36);
      sessionStorage.setItem("gksky_session_id", sessionId);
    }

    // Automatic Domain / Subdomain identification
    const currentDomain = window.location.hostname.replace(/^www\./, "") || "gksky.in";

    // Determine API endpoint
    const analyticsEndpoint =
      process.env.NEXT_PUBLIC_ANALYTICS_SYNC_URL ||
      (window.location.hostname === "localhost"
        ? "http://localhost:3001/api/analytics/sync"
        : "https://admin.gksky.in/api/analytics/sync");

    // Sync function
    const syncEvents = (eventsToSend: typeof pendingEvents.current) => {
      if (eventsToSend.length === 0) return;

      const payload = JSON.stringify({
        sessionId,
        deviceId,
        domain: currentDomain,
        userAgent: navigator.userAgent,
        referrer: document.referrer || "",
        events: eventsToSend,
      });

      if (navigator.sendBeacon) {
        try {
          const blob = new Blob([payload], { type: "application/json" });
          navigator.sendBeacon(analyticsEndpoint, blob);
          return;
        } catch {
          // fallback to fetch
        }
      }

      fetch(analyticsEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: payload,
        keepalive: true,
      }).catch(() => {
        // non-blocking
      });
    };

    // Record initial page visit
    const initialEvent = {
      type: "nav",
      path: window.location.pathname || "/",
      title: document.title || "GK Sky Home",
      label: "Landed on Portfolio",
      timestamp: new Date().toISOString(),
    };
    pendingEvents.current.push(initialEvent);
    syncEvents([initialEvent]);
    pendingEvents.current = [];

    // Track clicks on actionable elements (buttons, links)
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("a, button");
      if (!target) return;

      const label =
        target.getAttribute("title") ||
        target.getAttribute("aria-label") ||
        target.textContent?.trim().slice(0, 40) ||
        "Action Click";

      const clickEvent = {
        type: "click",
        path: window.location.pathname || "/",
        title: document.title || "GK Sky Home",
        label,
        timestamp: new Date().toISOString(),
      };

      syncEvents([clickEvent]);
    };

    window.addEventListener("click", handleClick, { passive: true });

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
