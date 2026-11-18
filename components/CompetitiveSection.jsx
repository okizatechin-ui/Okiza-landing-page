"use client";

import { Check, Zap, ArrowRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function CompetitiveSection() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const competitorRows = [
    {
      name: "You (Okiza)",
      isYou: true,
      search: { value: "38%", filled: 1 },
      aiSearch: { value: "61%", filled: 2 },
      social: { value: "44%", filled: 1 },
      brandScore: { value: "74%", filled: 2 },
    },
    {
      name: "Rival Co",
      isYou: false,
      search: { value: "72%", filled: 2 },
      aiSearch: { value: "45%", filled: 1 },
      social: { value: "68%", filled: 2 },
      brandScore: { value: "61%", filled: 2 },
    },
    {
      name: "GrowthBase",
      isYou: false,
      search: { value: "65%", filled: 2 },
      aiSearch: { value: "38%", filled: 1 },
      social: { value: "55%", filled: 2 },
      brandScore: { value: "58%", filled: 2 },
    },
    {
      name: "MarketIQ",
      isYou: false,
      search: { value: "51%", filled: 2 },
      aiSearch: { value: "29%", filled: 1 },
      social: { value: "71%", filled: 2 },
      brandScore: { value: "52%", filled: 2 },
    },
  ];

  const features = [
    "Direct & indirect competitor discovery",
    "Pricing & positioning comparison",
    "Search + AI visibility benchmarking",
    "Strengths, weaknesses & market gaps",
    "Geographic competitor mapping",
  ];

  return (
    <section
      id="competitive"
      className="w-full px-6 sm:px-12 md:px-20 py-20 bg-transparent"
      data-component="@components/CompetitiveSection.jsx"
    >
      <div className={`border-t pt-20 ${isLight ? "border-zinc-200" : "border-[#262626]"}`}>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="flex flex-col w-full lg:max-w-[420px] lg:min-w-[360px]">
            <p
              className={`text-xs font-semibold tracking-widest uppercase mb-4 ${
                isLight ? "text-zinc-500" : "text-[#ffffff]"
              }`}
            >
              Competitive Intelligence
            </p>
            <h2
              className={`font-semibold mb-5 tracking-tight text-3xl sm:text-4xl md:text-[38px] leading-[1.15] ${
                isLight ? "text-zinc-950" : "text-[#ffffff]"
              }`}
            >
              Know your competitors. Find your advantage.
            </h2>
            <p className={`text-base mb-8 leading-relaxed ${isLight ? "text-zinc-600" : "text-[#a1a1aa]"}`}>
              Okiza discovers relevant competitors, analyses how they position
              themselves and identifies the opportunities your business can capture
              before they do.
            </p>

            {/* Checklist */}
            <div className="flex flex-col gap-3.5 mb-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <div
                    className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                      isLight ? "bg-zinc-100 border border-zinc-300" : "bg-white/10"
                    }`}
                  >
                    <Check
                      className={`w-2.5 h-2.5 ${isLight ? "text-zinc-950" : "text-[#ffffff]"}`}
                      strokeWidth={3}
                    />
                  </div>
                  <span className={`text-sm ${isLight ? "text-zinc-700" : "text-[#a1a1aa]"}`}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Opportunity Callout Card */}
            <div
              className={`rounded-lg border p-4 shadow-sm transition-all ${
                isLight
                  ? "border-zinc-200 bg-zinc-50 hover:border-zinc-300"
                  : "border-white/15 bg-white/[0.03] hover:border-[#ffffff]/40"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-4 rounded-full bg-zinc-950 dark:bg-white flex items-center justify-center">
                  <Zap className="w-2.5 h-2.5 text-white dark:text-black fill-current" />
                </div>
                <span className={`text-xs font-semibold ${isLight ? "text-zinc-950" : "text-[#ffffff]"}`}>
                  Opportunity detected
                </span>
              </div>
              <p className={`text-xs leading-relaxed mb-3 ${isLight ? "text-zinc-600" : "text-[#a1a1aa]"}`}>
                Your competitors have stronger search visibility for three
                high-intent customer queries. Build targeted landing pages to capture
                this demand.
              </p>
              <button
                onClick={() => alert("Launching Competitive Intelligence Explorer...")}
                className={`text-xs font-semibold flex items-center gap-1 hover:underline cursor-pointer ${
                  isLight ? "text-zinc-950" : "text-[#ffffff]"
                }`}
              >
                <span>Explore Competitive Intelligence</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Right Column: Comparison Table */}
          <div className="flex-1 w-full flex flex-col gap-3">
            {/* Table Header */}
            <div className="grid grid-cols-5 gap-3 px-4 mb-1">
              <span className={`text-xs font-medium col-span-1 ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>
                Business
              </span>
              <span className={`text-xs font-medium text-right ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>
                Search
              </span>
              <span className={`text-xs font-medium text-right ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>
                AI Search
              </span>
              <span className={`text-xs font-medium text-right ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>
                Social
              </span>
              <span className={`text-xs font-medium text-right ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>
                Brand Score
              </span>
            </div>

            {/* Table Rows */}
            {competitorRows.map((row, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-5 items-center gap-3 px-4 py-3 rounded-lg border transition-all ${
                  row.isYou
                    ? isLight
                      ? "border-zinc-900 bg-zinc-50 shadow-sm"
                      : "border-[#ffffff]/30 bg-[#ffffff]/[0.05] shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                    : isLight
                    ? "border-zinc-200 bg-white hover:border-zinc-300 shadow-xs"
                    : "border-[#262626] bg-[#111111] hover:border-[#383838]"
                }`}
              >
                <span
                  className={`text-sm col-span-1 truncate ${
                    row.isYou
                      ? isLight
                        ? "text-zinc-950 font-bold"
                        : "text-[#ffffff] font-semibold"
                      : isLight
                      ? "text-zinc-800 font-medium"
                      : "text-[#ffffff]"
                  }`}
                >
                  {row.name}
                </span>

                {/* Search */}
                <div className="flex justify-end">
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-0.5">
                      {[0, 1, 2, 3].map((barIdx) => (
                        <div
                          key={barIdx}
                          className="w-1.5 h-4 rounded-sm"
                          style={{
                            background:
                              barIdx < row.search.filled
                                ? row.isYou
                                  ? isLight
                                    ? "#09090b"
                                    : "#ffffff"
                                  : isLight
                                  ? "#71717a"
                                  : "#52525b"
                                : isLight
                                ? "#e4e4e7"
                                : "#262626",
                          }}
                        />
                      ))}
                    </div>
                    <span
                      className={`text-xs font-mono w-7 text-right ${
                        row.isYou
                          ? isLight
                            ? "text-zinc-950 font-bold"
                            : "text-[#ffffff] font-semibold"
                          : isLight
                          ? "text-zinc-600"
                          : "text-[#a1a1aa]"
                      }`}
                    >
                      {row.search.value}
                    </span>
                  </div>
                </div>

                {/* AI Search */}
                <div className="flex justify-end">
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-0.5">
                      {[0, 1, 2, 3].map((barIdx) => (
                        <div
                          key={barIdx}
                          className="w-1.5 h-4 rounded-sm"
                          style={{
                            background:
                              barIdx < row.aiSearch.filled
                                ? row.isYou
                                  ? isLight
                                    ? "#09090b"
                                    : "#ffffff"
                                  : isLight
                                  ? "#71717a"
                                  : "#52525b"
                                : isLight
                                ? "#e4e4e7"
                                : "#262626",
                          }}
                        />
                      ))}
                    </div>
                    <span
                      className={`text-xs font-mono w-7 text-right ${
                        row.isYou
                          ? isLight
                            ? "text-zinc-950 font-bold"
                            : "text-[#ffffff] font-semibold"
                          : isLight
                          ? "text-zinc-600"
                          : "text-[#a1a1aa]"
                      }`}
                    >
                      {row.aiSearch.value}
                    </span>
                  </div>
                </div>

                {/* Social */}
                <div className="flex justify-end">
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-0.5">
                      {[0, 1, 2, 3].map((barIdx) => (
                        <div
                          key={barIdx}
                          className="w-1.5 h-4 rounded-sm"
                          style={{
                            background:
                              barIdx < row.social.filled
                                ? row.isYou
                                  ? isLight
                                    ? "#09090b"
                                    : "#ffffff"
                                  : isLight
                                  ? "#71717a"
                                  : "#52525b"
                                : isLight
                                ? "#e4e4e7"
                                : "#262626",
                          }}
                        />
                      ))}
                    </div>
                    <span
                      className={`text-xs font-mono w-7 text-right ${
                        row.isYou
                          ? isLight
                            ? "text-zinc-950 font-bold"
                            : "text-[#ffffff] font-semibold"
                          : isLight
                          ? "text-zinc-600"
                          : "text-[#a1a1aa]"
                      }`}
                    >
                      {row.social.value}
                    </span>
                  </div>
                </div>

                {/* Brand Score */}
                <div className="flex justify-end">
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-0.5">
                      {[0, 1, 2, 3].map((barIdx) => (
                        <div
                          key={barIdx}
                          className="w-1.5 h-4 rounded-sm"
                          style={{
                            background:
                              barIdx < row.brandScore.filled
                                ? row.isYou
                                  ? isLight
                                    ? "#09090b"
                                    : "#ffffff"
                                  : isLight
                                  ? "#71717a"
                                  : "#52525b"
                                : isLight
                                ? "#e4e4e7"
                                : "#262626",
                          }}
                        />
                      ))}
                    </div>
                    <span
                      className={`text-xs font-mono w-7 text-right ${
                        row.isYou
                          ? isLight
                            ? "text-zinc-950 font-bold"
                            : "text-[#ffffff] font-semibold"
                          : isLight
                          ? "text-zinc-600"
                          : "text-[#a1a1aa]"
                      }`}
                    >
                      {row.brandScore.value}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Market Gaps Bottom Card */}
            <div
              className={`mt-4 rounded-lg border p-4 transition-all ${
                isLight
                  ? "border-zinc-200 bg-zinc-50 hover:border-zinc-300"
                  : "border-[#262626] bg-[#111111] hover:border-[#ffffff]/30"
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className={`text-xs font-semibold block mb-1 ${
                    isLight ? "text-zinc-950" : "text-[#ffffff]"
                  }`}>
                    Market Gaps Identified
                  </span>
                  <span className={`text-xs ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>
                    3 high-intent keyword clusters with no strong competitor dominance
                  </span>
                </div>
                <div className={`text-4xl font-semibold ml-6 font-mono ${
                  isLight ? "text-zinc-950" : "text-[#ffffff]"
                }`}>
                  3
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
