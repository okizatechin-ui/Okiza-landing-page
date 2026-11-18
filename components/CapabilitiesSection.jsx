"use client";

import CapabilityCard from "./CapabilityCard";
import OkizaLogo from "./OkizaLogo";
import { useTheme } from "@/context/ThemeContext";
import {
  Fingerprint,
  Swords,
  Search,
  Palette,
  Users,
  Map,
  BarChart2,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  Zap,
  Globe,
  Check,
  Star,
} from "lucide-react";

export default function CapabilitiesSection({ onSelectCapability }) {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <section
      id="capabilities"
      className="w-full px-6 sm:px-12 md:px-20 py-24 bg-transparent"
      data-component="@components/CapabilitiesSection.jsx"
    >
      <div className={`w-full border-t pt-20 ${isLight ? "border-zinc-200" : "border-[#262626]"}`}>
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <p
            className={`text-xs font-semibold tracking-widest uppercase mb-4 ${
              isLight ? "text-zinc-500" : "text-[#ffffff]"
            }`}
          >
            The Platform
          </p>
          <h2
            className={`font-semibold mb-5 tracking-tight text-3xl sm:text-4xl md:text-[44px] leading-[1.1] max-w-[640px] ${
              isLight ? "text-zinc-950 font-bold" : "text-[#ffffff]"
            }`}
          >
            One platform. Every growth opportunity.
          </h2>
          <p
            className={`text-base max-w-[520px] leading-[1.7] ${
              isLight ? "text-zinc-600" : "text-[#a1a1aa]"
            }`}
          >
            Stop switching between disconnected tools. Bring your business
            intelligence, marketing strategy and execution into one connected
            workspace.
          </p>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col gap-4">
          {/* Row 1: 4 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* 1. Brand Intelligence */}
            <CapabilityCard
              title="Brand Intelligence"
              description="Give AI a complete understanding of your business, products, positioning and customers."
              icon={<Fingerprint className={`w-4 h-4 ${isLight ? "text-zinc-900" : "text-[#ffffff]"}`} />}
              previewContent={
                <div
                  className={`w-full h-full p-3 flex flex-col justify-between ${
                    isLight ? "bg-zinc-50/70" : "bg-[#0e0e11]"
                  }`}
                >
                  {/* Top Bar with Okiza Logo */}
                  <div
                    className={`flex items-center justify-between pb-2 border-b ${
                      isLight ? "border-zinc-200" : "border-[#262626]"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-6 h-6 rounded-md flex items-center justify-center p-0.5 border ${
                          isLight
                            ? "bg-white border-zinc-200 shadow-sm"
                            : "bg-[#1f1f23] border-[#2e2e32]"
                        }`}
                      >
                        <OkizaLogo size={16} variant={isLight ? "black" : "white"} />
                      </div>
                      <span
                        className={`text-xs font-semibold ${
                          isLight ? "text-zinc-950" : "text-[#ffffff]"
                        }`}
                      >
                        okiza.ai
                      </span>
                    </div>
                    <span
                      className={`inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full font-mono border ${
                        isLight
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200 font-semibold"
                          : "bg-[#ffffff]/10 text-[#ffffff] border-transparent"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                          isLight ? "bg-emerald-600" : "bg-[#ffffff]"
                        }`}
                      />
                      99% Match
                    </span>
                  </div>

                  {/* Positioning metadata */}
                  <div className="flex flex-col gap-1.5 my-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className={isLight ? "text-zinc-500" : "text-[#a1a1aa]"}>Voice</span>
                      <span className={`font-medium ${isLight ? "text-zinc-950" : "text-[#ffffff]"}`}>Visionary & Direct</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px]">
                      <span className={isLight ? "text-zinc-500" : "text-[#a1a1aa]"}>ICP Target</span>
                      <span className={`font-medium ${isLight ? "text-zinc-950" : "text-[#ffffff]"}`}>B2B Growth Leaders</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex items-center gap-1.5 pt-1">
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded border ${
                        isLight
                          ? "bg-white text-zinc-900 border-zinc-200 shadow-sm"
                          : "bg-[#1f1f23] text-[#ffffff] border-[#2e2e32]"
                      }`}
                    >
                      AI Growth OS
                    </span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded border ${
                        isLight
                          ? "bg-white text-zinc-500 border-zinc-200"
                          : "bg-[#1f1f23] text-[#a1a1aa] border-[#2e2e32]"
                      }`}
                    >
                      142 Key Attributes
                    </span>
                  </div>
                </div>
              }
              onSelect={() => onSelectCapability && onSelectCapability("brand")}
            />

            {/* 2. Competitive Intelligence */}
            <CapabilityCard
              title="Competitive Intelligence"
              description="Know who you're competing with, how they position themselves and where you can win."
              icon={<Swords className={`w-4 h-4 ${isLight ? "text-zinc-900" : "text-[#ffffff]"}`} />}
              previewContent={
                <div
                  className={`w-full h-full p-3 flex flex-col justify-between ${
                    isLight ? "bg-zinc-50/70" : "bg-[#0e0e11]"
                  }`}
                >
                  {/* Top Bar with Alert badge */}
                  <div
                    className={`flex items-center justify-between pb-2 border-b ${
                      isLight ? "border-zinc-200" : "border-[#262626]"
                    }`}
                  >
                    <span
                      className={`text-[10px] font-semibold flex items-center gap-1 uppercase tracking-wider ${
                        isLight ? "text-zinc-950" : "text-[#ffffff]"
                      }`}
                    >
                      <Zap className={`w-3 h-3 ${isLight ? "text-zinc-900" : "text-[#ffffff]"}`} />
                      Rival Radar
                    </span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded font-semibold border ${
                        isLight
                          ? "bg-amber-50 text-amber-800 border-amber-200"
                          : "bg-[#ffffff]/10 text-[#ffffff] border-transparent"
                      }`}
                    >
                      3 Gaps Detected
                    </span>
                  </div>

                  {/* Competitor comparison bars */}
                  <div className="flex flex-col gap-1.5 my-1">
                    <div>
                      <div className="flex justify-between text-[10px] mb-0.5">
                        <span className={`font-semibold ${isLight ? "text-zinc-950" : "text-[#ffffff]"}`}>You (Okiza)</span>
                        <span className={`font-mono font-semibold ${isLight ? "text-zinc-950" : "text-[#ffffff]"}`}>61% AI Share</span>
                      </div>
                      <div
                        className={`w-full h-1.5 rounded-full overflow-hidden ${
                          isLight ? "bg-zinc-200" : "bg-[#262626]"
                        }`}
                      >
                        <div
                          className={`h-full rounded-full w-[61%] ${
                            isLight ? "bg-black" : "bg-[#ffffff]"
                          }`}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[10px] mb-0.5">
                        <span className={isLight ? "text-zinc-500" : "text-[#a1a1aa]"}>Rival Co</span>
                        <span className={`font-mono ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>45%</span>
                      </div>
                      <div
                        className={`w-full h-1.5 rounded-full overflow-hidden ${
                          isLight ? "bg-zinc-200" : "bg-[#262626]"
                        }`}
                      >
                        <div
                          className={`h-full rounded-full w-[45%] ${
                            isLight ? "bg-zinc-400" : "bg-[#52525b]"
                          }`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Stat */}
                  <span className={`text-[10px] truncate block ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>
                    Advantage: <strong className={isLight ? "text-zinc-950" : "text-[#ffffff]"}>+16% higher win rate</strong>
                  </span>
                </div>
              }
              onSelect={() => onSelectCapability && onSelectCapability("competitors")}
            />

            {/* 3. SEO & AI Search */}
            <CapabilityCard
              title="SEO & AI Search"
              description="Get discovered across traditional search engines and AI-powered answer platforms."
              icon={<Search className={`w-4 h-4 ${isLight ? "text-zinc-900" : "text-[#ffffff]"}`} />}
              previewContent={
                <div
                  className={`w-full h-full p-3 flex flex-col justify-between ${
                    isLight ? "bg-zinc-50/70" : "bg-[#0e0e11]"
                  }`}
                >
                  {/* Search query bar */}
                  <div
                    className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border text-[10px] ${
                      isLight
                        ? "bg-white border-zinc-200 shadow-sm"
                        : "bg-[#18181b] border-[#2e2e32]"
                    }`}
                  >
                    <Search className={`w-3 h-3 shrink-0 ${isLight ? "text-zinc-400" : "text-[#a1a1aa]"}`} />
                    <span className={`truncate font-mono ${isLight ? "text-zinc-900" : "text-[#ffffff]"}`}>
                      &quot;best ai growth system&quot;
                    </span>
                  </div>

                  {/* AI Citation Box */}
                  <div
                    className={`p-2 rounded border my-1 ${
                      isLight
                        ? "bg-white border-zinc-200 shadow-sm"
                        : "bg-[#161619] border-[#2e2e32]"
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] mb-1">
                      <span
                        className={`font-semibold flex items-center gap-1 ${
                          isLight ? "text-zinc-950" : "text-[#ffffff]"
                        }`}
                      >
                        <Sparkles className={`w-2.5 h-2.5 ${isLight ? "text-zinc-900" : "text-[#ffffff]"}`} />
                        Perplexity & ChatGPT
                      </span>
                      <span className={`font-bold ${isLight ? "text-emerald-600" : "text-[#ffffff]"}`}>#1 Cited</span>
                    </div>
                    <p className={`text-[10px] leading-tight truncate ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>
                      &quot;Okiza leads autonomous B2B marketing intelligence...&quot;
                    </p>
                  </div>

                  {/* Footer Stats */}
                  <div className="flex items-center justify-between text-[10px]">
                    <span className={isLight ? "text-zinc-500" : "text-[#a1a1aa]"}>Query Volume</span>
                    <span className={`font-mono font-semibold ${isLight ? "text-zinc-950" : "text-[#ffffff]"}`}>14,200/mo</span>
                  </div>
                </div>
              }
              onSelect={() => onSelectCapability && onSelectCapability("seo")}
            />

            {/* 4. Creative Studio */}
            <CapabilityCard
              title="Creative Studio"
              description="Create campaigns and content that actually sound like your brand, not generic AI output."
              icon={<Palette className={`w-4 h-4 ${isLight ? "text-zinc-900" : "text-[#ffffff]"}`} />}
              previewContent={
                <div
                  className={`w-full h-full p-3 flex flex-col justify-between ${
                    isLight ? "bg-zinc-50/70" : "bg-[#0e0e11]"
                  }`}
                >
                  {/* Header */}
                  <div
                    className={`flex items-center justify-between pb-2 border-b ${
                      isLight ? "border-zinc-200" : "border-[#262626]"
                    }`}
                  >
                    <span
                      className={`text-[10px] font-semibold flex items-center gap-1 ${
                        isLight ? "text-zinc-950" : "text-[#ffffff]"
                      }`}
                    >
                      <Sparkles className={`w-3 h-3 ${isLight ? "text-zinc-900" : "text-[#ffffff]"}`} />
                      Campaign Generator
                    </span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${
                        isLight
                          ? "bg-black text-white"
                          : "bg-[#ffffff] text-[#000000]"
                      }`}
                    >
                      Ready
                    </span>
                  </div>

                  {/* Generated Card Preview */}
                  <div
                    className={`p-2 rounded border my-1 ${
                      isLight
                        ? "bg-white border-zinc-200 shadow-sm"
                        : "bg-[#1a1a1d] border-[#2e2e32]"
                    }`}
                  >
                    <span
                      className={`text-[11px] font-semibold block leading-tight truncate ${
                        isLight ? "text-zinc-950" : "text-[#ffffff]"
                      }`}
                    >
                      How we turned seed news into a viral story
                    </span>
                    <span className={`text-[10px] block mt-0.5 truncate ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>
                      Multi-format: X Thread • Newsletter • Blog
                    </span>
                  </div>

                  {/* Projected Performance */}
                  <div className="flex items-center justify-between text-[10px]">
                    <span className={isLight ? "text-zinc-500" : "text-[#a1a1aa]"}>Predicted CTR</span>
                    <span className={`font-semibold font-mono ${isLight ? "text-zinc-950" : "text-[#ffffff]"}`}>4.8% (High)</span>
                  </div>
                </div>
              }
              onSelect={() => onSelectCapability && onSelectCapability("creative")}
            />
          </div>

          {/* Row 2: 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* 5. Influencer Studio */}
            <CapabilityCard
              title="Influencer Studio"
              description="Find the right creators to reach the right audience for your growth objectives."
              icon={<Users className={`w-4 h-4 ${isLight ? "text-zinc-900" : "text-[#ffffff]"}`} />}
              previewContent={
                <div
                  className={`w-full h-full p-3 flex flex-col justify-between ${
                    isLight ? "bg-zinc-50/70" : "bg-[#0e0e11]"
                  }`}
                >
                  {/* Header */}
                  <div
                    className={`flex items-center justify-between pb-2 border-b ${
                      isLight ? "border-zinc-200" : "border-[#262626]"
                    }`}
                  >
                    <span
                      className={`text-[10px] font-semibold uppercase tracking-wider ${
                        isLight ? "text-zinc-950" : "text-[#ffffff]"
                      }`}
                    >
                      Creator Directory
                    </span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full border ${
                        isLight
                          ? "bg-white border-zinc-200 text-zinc-700 shadow-sm font-semibold"
                          : "bg-[#ffffff]/10 text-[#ffffff] border-transparent"
                      }`}
                    >
                      12,000+ Verified
                    </span>
                  </div>

                  {/* 2 Creator Row Previews */}
                  <div className="flex flex-col gap-1.5 my-1">
                    <div
                      className={`flex items-center justify-between p-1.5 rounded border ${
                        isLight
                          ? "bg-white border-zinc-200 shadow-sm"
                          : "bg-[#161619] border-[#262626]"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[9px] border ${
                            isLight
                              ? "bg-zinc-100 border-zinc-300 text-zinc-900"
                              : "bg-[#27272a] border-[#3f3f46] text-[#ffffff]"
                          }`}
                        >
                          SK
                        </div>
                        <div className="flex flex-col">
                          <span
                            className={`text-[11px] font-medium leading-tight ${
                              isLight ? "text-zinc-950" : "text-[#ffffff]"
                            }`}
                          >
                            Sarah K.
                          </span>
                          <span className={`text-[9px] ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>SaaS & Growth</span>
                        </div>
                      </div>
                      <span className={`text-[10px] font-mono font-semibold ${isLight ? "text-zinc-950" : "text-[#ffffff]"}`}>
                        98% Match
                      </span>
                    </div>

                    <div
                      className={`flex items-center justify-between p-1.5 rounded border ${
                        isLight
                          ? "bg-white border-zinc-200 shadow-sm"
                          : "bg-[#161619] border-[#262626]"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[9px] border ${
                            isLight
                              ? "bg-zinc-100 border-zinc-300 text-zinc-900"
                              : "bg-[#27272a] border-[#3f3f46] text-[#ffffff]"
                          }`}
                        >
                          AR
                        </div>
                        <div className="flex flex-col">
                          <span
                            className={`text-[11px] font-medium leading-tight ${
                              isLight ? "text-zinc-950" : "text-[#ffffff]"
                            }`}
                          >
                            Alex R.
                          </span>
                          <span className={`text-[9px] ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>Tech Creator</span>
                        </div>
                      </div>
                      <span className={`text-[10px] font-mono font-semibold ${isLight ? "text-zinc-950" : "text-[#ffffff]"}`}>
                        95% Match
                      </span>
                    </div>
                  </div>

                  <span className={`text-[10px] ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>
                    Avg Engagement: <strong className={isLight ? "text-zinc-950" : "text-[#ffffff]"}>6.4%</strong> • Instant Outreach
                  </span>
                </div>
              }
              onSelect={() => onSelectCapability && onSelectCapability("influencers")}
            />

            {/* 6. Growth Strategy */}
            <CapabilityCard
              title="Growth Strategy"
              description="Turn market insights into a prioritised, actionable growth roadmap for your business."
              icon={<Map className={`w-4 h-4 ${isLight ? "text-zinc-900" : "text-[#ffffff]"}`} />}
              previewContent={
                <div
                  className={`w-full h-full p-3 flex flex-col justify-between ${
                    isLight ? "bg-zinc-50/70" : "bg-[#0e0e11]"
                  }`}
                >
                  {/* Header */}
                  <div
                    className={`flex items-center justify-between pb-2 border-b ${
                      isLight ? "border-zinc-200" : "border-[#262626]"
                    }`}
                  >
                    <span
                      className={`text-[10px] font-semibold uppercase tracking-wider ${
                        isLight ? "text-zinc-950" : "text-[#ffffff]"
                      }`}
                    >
                      Sprint Roadmap
                    </span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded font-mono border ${
                        isLight
                          ? "bg-white border-zinc-200 text-zinc-800 shadow-sm font-semibold"
                          : "bg-[#ffffff]/10 text-[#ffffff] border-transparent"
                      }`}
                    >
                      Q1 Priority
                    </span>
                  </div>

                  {/* 3 Step Milestones */}
                  <div className="flex flex-col gap-1.5 my-1">
                    <div className="flex items-center gap-2 text-[10px]">
                      <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isLight ? "text-zinc-900" : "text-[#ffffff]"}`} />
                      <span className={`truncate font-medium ${isLight ? "text-zinc-950" : "text-[#ffffff]"}`}>
                        Target 3 high-intent competitor query gaps
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px]">
                      <div
                        className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${
                          isLight ? "border-zinc-900" : "border-[#ffffff]"
                        }`}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full animate-ping ${
                            isLight ? "bg-black" : "bg-[#ffffff]"
                          }`}
                        />
                      </div>
                      <span className={`truncate font-medium ${isLight ? "text-zinc-950" : "text-[#ffffff]"}`}>
                        Deploy AI-optimized category landing pages
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px]">
                      <div
                        className={`w-3.5 h-3.5 rounded-full border shrink-0 ${
                          isLight ? "border-zinc-300" : "border-[#52525b]"
                        }`}
                      />
                      <span className={`truncate ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>
                        Activate retargeting sequence on price drops
                      </span>
                    </div>
                  </div>

                  {/* Projected Gain */}
                  <span className={`text-[10px] ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>
                    Projected Impact: <strong className={isLight ? "text-zinc-950" : "text-[#ffffff]"}>+38% Qualified Pipeline</strong>
                  </span>
                </div>
              }
              onSelect={() => onSelectCapability && onSelectCapability("strategy")}
            />

            {/* 7. Performance Studio */}
            <CapabilityCard
              title="Performance Studio"
              description="Understand what's working, identify weak points and improve your next marketing actions."
              icon={<BarChart2 className={`w-4 h-4 ${isLight ? "text-zinc-900" : "text-[#ffffff]"}`} />}
              previewContent={
                <div
                  className={`w-full h-full p-3 flex flex-col justify-between ${
                    isLight ? "bg-zinc-50/70" : "bg-[#0e0e11]"
                  }`}
                >
                  {/* Top ROI Header */}
                  <div
                    className={`flex items-center justify-between pb-1.5 border-b ${
                      isLight ? "border-zinc-200" : "border-[#262626]"
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <span className={`text-sm font-bold font-mono ${isLight ? "text-zinc-950" : "text-[#ffffff]"}`}>4.2x</span>
                      <span className={`text-[10px] ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>Avg ROI</span>
                    </div>
                    <span
                      className={`text-[10px] font-semibold flex items-center gap-0.5 ${
                        isLight ? "text-zinc-950" : "text-[#ffffff]"
                      }`}
                    >
                      <TrendingUp className={`w-3 h-3 ${isLight ? "text-zinc-900" : "text-[#ffffff]"}`} />
                      +142% Traffic
                    </span>
                  </div>

                  {/* Sleek 7-Column Histogram */}
                  <div className="flex items-end gap-1.5 h-12 my-1 px-1">
                    <div className={`flex-1 rounded-sm ${isLight ? "bg-zinc-200" : "bg-[#262626]"}`} style={{ height: "35%" }} />
                    <div className={`flex-1 rounded-sm ${isLight ? "bg-zinc-300" : "bg-[#333333]"}`} style={{ height: "45%" }} />
                    <div className={`flex-1 rounded-sm ${isLight ? "bg-zinc-300" : "bg-[#3f3f46]"}`} style={{ height: "40%" }} />
                    <div className={`flex-1 rounded-sm ${isLight ? "bg-zinc-400" : "bg-[#52525b]"}`} style={{ height: "65%" }} />
                    <div className={`flex-1 rounded-sm ${isLight ? "bg-zinc-500" : "bg-[#71717a]"}`} style={{ height: "55%" }} />
                    <div className={`flex-1 rounded-sm ${isLight ? "bg-black shadow-sm" : "bg-[#ffffff] shadow-[0_0_12px_rgba(255,255,255,0.4)]"}`} style={{ height: "95%" }} />
                    <div className={`flex-1 rounded-sm ${isLight ? "bg-zinc-400" : "bg-[#a1a1aa]"}`} style={{ height: "75%" }} />
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between text-[10px]">
                    <span className={isLight ? "text-zinc-500" : "text-[#a1a1aa]"}>CAC Reduction</span>
                    <span className={`font-mono font-bold ${isLight ? "text-zinc-950" : "text-[#ffffff]"}`}>-48%</span>
                  </div>
                </div>
              }
              onSelect={() => onSelectCapability && onSelectCapability("performance")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
