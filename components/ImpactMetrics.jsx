"use client";

import {
  TrendingUp,
  Zap,
  TrendingDown,
  Activity,
  ArrowUpRight,
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function ImpactMetrics() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const metrics = [
    {
      value: "+142%",
      badge: "LLM Visibility",
      icon: TrendingUp,
      label: "AI Answer Share",
      desc: "Average increase across ChatGPT, Gemini & Perplexity within 90 days of onboarding.",
      highlight: "Top 5% of Brands",
    },
    {
      value: "3.4x",
      badge: "Campaign Speed",
      icon: Zap,
      label: "Execution Velocity",
      desc: "From initial competitor discovery to live, published multi-channel campaign assets.",
      highlight: "Weeks → Days",
    },
    {
      value: "-48%",
      badge: "Capital Efficiency",
      icon: TrendingDown,
      label: "Acquisition Cost",
      desc: "By capturing uncompetitive, high-intent buyer queries before rivals even bid.",
      highlight: "Organic CAC Savings",
    },
    {
      value: "14,000+",
      badge: "Live Telemetry",
      icon: Activity,
      label: "Growth Signals Tracked",
      desc: "Continuous real-time scans across search engines, social feeds, and ad networks.",
      highlight: "24/7 Automated Radar",
    },
  ];

  return (
    <section className="w-full px-6 sm:px-10 lg:px-16 py-12 sm:py-16 bg-transparent relative overflow-hidden">
      {/* Subtle ambient spotlight (dark mode only) */}
      {!isLight && (
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[300px] rounded-full opacity-10 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, rgba(255, 255, 255, 0.25) 0%, transparent 70%)",
          }}
        />
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Subtle Section Label */}
        <div className="flex items-center justify-between mb-6 px-1">
          <div className="flex items-center gap-2">
            <span
              className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                isLight ? "bg-black" : "bg-white"
              }`}
            />
            <span
              className={`text-[11px] font-mono tracking-widest uppercase font-semibold ${
                isLight ? "text-zinc-500" : "text-zinc-400"
              }`}
            >
              Proven Performance Impact
            </span>
          </div>
          <span className="text-[11px] font-mono text-zinc-500 hidden sm:inline-block">
            Benchmarked across 1,200+ brands
          </span>
        </div>

        {/* Modern Bento Grid with Inset Sheen */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className={`group relative rounded-2xl border p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
                  isLight
                    ? "bg-white border-zinc-200 shadow-sm hover:border-zinc-300 hover:shadow-md"
                    : "border-[#222225] bg-gradient-to-b from-[#131316]/90 via-[#0e0e11]/90 to-[#08080a]/95 hover:border-zinc-400/50 hover:shadow-[0_12px_40px_-10px_rgba(255,255,255,0.06)]"
                }`}
              >
                {/* Top Border Sheen on hover */}
                <div
                  className={`absolute inset-x-0 top-0 h-px opacity-50 group-hover:opacity-100 transition-opacity ${
                    isLight
                      ? "bg-gradient-to-r from-transparent via-zinc-300 to-transparent group-hover:via-zinc-400"
                      : "bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-white/40"
                  }`}
                />

                {/* Card Top Row: Badge & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-medium border ${
                      isLight
                        ? "bg-zinc-100 border-zinc-200 text-zinc-700"
                        : "bg-white/[0.06] border-white/10 text-zinc-300"
                    }`}
                  >
                    <Icon className={`w-3 h-3 ${isLight ? "text-zinc-900" : "text-white"}`} />
                    {m.badge}
                  </span>
                  <span
                    className={`text-[10px] font-mono transition-colors ${
                      isLight ? "text-zinc-400 group-hover:text-zinc-700" : "text-zinc-500 group-hover:text-zinc-300"
                    }`}
                  >
                    {m.highlight}
                  </span>
                </div>

                {/* Hero Stat Number */}
                <div className="mb-3">
                  <div
                    className={`text-4xl sm:text-5xl font-bold tracking-tight font-sans leading-none mb-2 ${
                      isLight
                        ? "text-zinc-950 font-black"
                        : "text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-400"
                    }`}
                  >
                    {m.value}
                  </div>
                  <h4
                    className={`text-sm font-semibold tracking-tight flex items-center gap-1 ${
                      isLight ? "text-zinc-950" : "text-white"
                    }`}
                  >
                    <span>{m.label}</span>
                    <ArrowUpRight
                      className={`w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all -translate-y-0.5 group-hover:translate-x-0.5 ${
                        isLight ? "text-zinc-900" : "text-zinc-500"
                      }`}
                    />
                  </h4>
                </div>

                {/* Refined Description */}
                <p
                  className={`text-xs leading-relaxed pt-3 border-t ${
                    isLight ? "text-zinc-600 border-zinc-100" : "text-zinc-400 border-white/[0.06]"
                  }`}
                >
                  {m.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
