"use client";

import Link from "next/link";
import StackFlowDiagram from "./StackFlowDiagram";
import { ArrowRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function PublishStackSection() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <section
      className={`w-full py-20 px-6 md:px-12 relative z-10 overflow-hidden border-b transition-colors ${
        isLight ? "bg-white border-zinc-200" : "bg-[#000000] border-[#262626]"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Two-Column Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          {/* Left Column: STEP 3 - PUBLISH & Title */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <span className={`w-2 h-2 inline-block ${isLight ? "bg-black" : "bg-white"}`}></span>
              <span
                className={`text-xs font-mono tracking-widest uppercase font-bold ${
                  isLight ? "text-zinc-500" : "text-[#a1a1aa]"
                }`}
              >
                STEP 3 — PUBLISH
              </span>
            </div>

            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] ${
                isLight ? "text-zinc-950" : "text-white"
              }`}
            >
              Connect your stack.
              <br />
              Publish without leaving it.
            </h2>
          </div>

          {/* Right Column: Explanatory Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p
              className={`text-base sm:text-lg leading-relaxed ${
                isLight ? "text-zinc-600" : "text-[#a1a1aa]"
              }`}
            >
              Okiza reads your site, Search Console and Analytics, then hands back
              ready work — GEO and SEO fixes, articles, UGC videos, and X
              posts. Approve it, and it publishes to WordPress, Webflow, Framer,
              Wix, HubSpot, GitHub, and X (Twitter).
            </p>

            <div className="mt-6 flex items-center gap-4">
              <Link
                href="/integrations"
                className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-colors ${
                  isLight ? "text-zinc-950 hover:text-black font-semibold" : "text-white hover:text-[#d4d4d8]"
                }`}
              >
                <span>Explore connected stack architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Stack Flow Diagram with Custom Glow Light Line Animations */}
        <div className="w-full">
          <StackFlowDiagram />
        </div>
      </div>
    </section>
  );
}
