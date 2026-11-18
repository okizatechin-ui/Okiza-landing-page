"use client";

import { useState } from "react";
import OkizaLogo from "./OkizaLogo";
import { useTheme } from "@/context/ThemeContext";
import {
  LayoutDashboard,
  Building2,
  Swords,
  Telescope,
  Search,
  Palette,
  Users,
  Map,
  BarChart2,
  Settings,
  Zap,
} from "lucide-react";

export default function DashboardMockup() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const [activeTab, setActiveTab] = useState("overview");

  const navItems = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "business", label: "My Business", icon: Building2 },
    { id: "competitors", label: "Competitors", icon: Swords },
    { id: "opportunities", label: "Market Opportunities", icon: Telescope },
    { id: "seo", label: "SEO & AI Search", icon: Search },
    { id: "creative", label: "Creative Studio", icon: Palette },
    { id: "influencer", label: "Influencer Discovery", icon: Users },
    { id: "strategy", label: "Growth Strategy", icon: Map },
    { id: "performance", label: "Performance", icon: BarChart2 },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div
      className={`w-full rounded-xl border overflow-hidden shadow-2xl transition-all ${
        isLight ? "border-zinc-200 bg-white" : "border-[#262626] bg-[#09090b]"
      }`}
      style={{ fontSize: "12px" }}
      data-component="@components/DashboardMockup.jsx"
    >
      {/* Top Browser Bar */}
      <div
        className={`flex items-center gap-1.5 px-4 py-3 border-b ${
          isLight ? "border-zinc-200 bg-zinc-50" : "border-[#262626] bg-[#0f0f10]"
        }`}
      >
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1" />
        <div
          className={`px-4 py-1 rounded border font-mono text-[11px] flex items-center gap-1.5 ${
            isLight
              ? "border-zinc-200 bg-white text-zinc-600"
              : "border-[#262626] bg-[#18181b] text-[#a1a1aa]"
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full animate-pulse ${
              isLight ? "bg-zinc-900" : "bg-[#ffffff]"
            }`}
          />
          <span>https://app.okiza.ai/{activeTab}</span>
        </div>
        <div className="flex-1" />
      </div>

      {/* Main Dashboard Layout */}
      <div className="flex flex-col md:flex-row min-h-[560px]">
        {/* Sidebar */}
        <div
          className={`flex flex-col py-4 border-b md:border-b-0 md:border-r shrink-0 w-full md:w-[190px] ${
            isLight ? "border-zinc-200 bg-zinc-50/50" : "border-[#262626] bg-[#000000]"
          }`}
        >
          {/* Logo brand */}
          <div className="px-4 mb-5">
            <div className="flex items-center gap-2">
              <div
                className={`w-6 h-6 rounded flex items-center justify-center p-0.5 ${
                  isLight ? "bg-zinc-100 border border-zinc-200" : "bg-white/10"
                }`}
              >
                <OkizaLogo size={16} variant={isLight ? "black" : "white"} />
              </div>
              <span className={`font-semibold text-[13px] ${isLight ? "text-zinc-950" : "text-[#ffffff]"}`}>
                okiza
              </span>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible gap-0.5 px-2 md:px-0">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2.5 px-3 md:px-4 py-2 transition-all cursor-pointer whitespace-nowrap text-left w-full ${
                    isActive
                      ? isLight
                        ? "text-zinc-950 bg-zinc-100 font-semibold md:border-l-2 md:border-zinc-950"
                        : "text-[#ffffff] bg-[#ffffff]/[0.08] md:border-l-2 md:border-[#ffffff]"
                      : isLight
                      ? "text-zinc-600 hover:text-black hover:bg-zinc-100/60 md:border-l-2 md:border-transparent"
                      : "text-[#a1a1aa] hover:text-[#ffffff] hover:bg-[#18181b]/60 md:border-l-2 md:border-transparent"
                  }`}
                >
                  <Icon
                    className={`w-3.5 h-3.5 shrink-0 ${
                      isActive
                        ? isLight ? "text-zinc-950" : "text-[#ffffff]"
                        : isLight ? "text-zinc-400" : "text-[#71717a]"
                    }`}
                  />
                  <span className="text-[11px]">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content View */}
        <div
          className={`flex-1 flex flex-col p-4 sm:p-5 overflow-hidden ${
            isLight ? "bg-white text-zinc-900" : "bg-[#0c0c0e] text-white"
          }`}
        >
          {/* Welcome greeting */}
          <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <div>
              <h3 className={`font-semibold mb-0.5 text-base sm:text-lg ${
                isLight ? "text-zinc-950" : "text-[#ffffff]"
              }`}>
                Good morning. Here&apos;s your growth overview.
              </h3>
              <span className={`text-xs ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>
                Tuesday, 14 January 2025 • Active Intelligence Engine v4.2
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-medium border ${
                isLight
                  ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                  : "bg-[#ffffff]/10 text-[#ffffff] border-[#ffffff]/20"
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full animate-ping ${
                  isLight ? "bg-emerald-500" : "bg-[#ffffff]"
                }`} />
                Live Sync Active
              </span>
            </div>
          </div>

          {/* 4 Metric Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
            <div
              className={`flex flex-col gap-1 p-3 rounded-lg border transition-colors ${
                isLight
                  ? "border-zinc-200 bg-zinc-50/80 hover:border-zinc-300"
                  : "border-[#262626] bg-[#141416] hover:border-[#ffffff]/30"
              }`}
            >
              <span className={`text-xs ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>Brand Score</span>
              <span className={`font-semibold text-xl ${isLight ? "text-zinc-950" : "text-[#ffffff]"}`}>
                74/100
              </span>
              <span className={`text-xs flex items-center gap-1 font-medium ${
                isLight ? "text-emerald-600" : "text-[#ffffff]"
              }`}>
                <span>↑</span>
                <span>3pts this week</span>
              </span>
            </div>

            <div
              className={`flex flex-col gap-1 p-3 rounded-lg border transition-colors ${
                isLight
                  ? "border-zinc-200 bg-zinc-50/80 hover:border-zinc-300"
                  : "border-[#262626] bg-[#141416] hover:border-[#ffffff]/30"
              }`}
            >
              <span className={`text-xs ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>Search Visibility</span>
              <span className={`font-semibold text-xl ${isLight ? "text-zinc-950" : "text-[#ffffff]"}`}>
                38%
              </span>
              <span className={`text-xs flex items-center gap-1 ${
                isLight ? "text-zinc-500" : "text-[#71717a]"
              }`}>
                <span>↓</span>
                <span>2% vs last month</span>
              </span>
            </div>

            <div
              className={`flex flex-col gap-1 p-3 rounded-lg border transition-colors ${
                isLight
                  ? "border-zinc-200 bg-zinc-50/80 hover:border-zinc-300"
                  : "border-[#262626] bg-[#141416] hover:border-[#ffffff]/30"
              }`}
            >
              <span className={`text-xs ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>AI Visibility</span>
              <span className={`font-semibold text-xl ${isLight ? "text-zinc-950" : "text-[#ffffff]"}`}>
                61%
              </span>
              <span className={`text-xs flex items-center gap-1 font-medium ${
                isLight ? "text-emerald-600" : "text-[#ffffff]"
              }`}>
                <span>↑</span>
                <span>8% vs last month</span>
              </span>
            </div>

            <div
              className={`flex flex-col gap-1 p-3 rounded-lg border transition-colors ${
                isLight
                  ? "border-zinc-200 bg-zinc-50/80 hover:border-zinc-300"
                  : "border-[#262626] bg-[#141416] hover:border-[#ffffff]/30"
              }`}
            >
              <span className={`text-xs ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>Competitors Tracked</span>
              <span className={`font-semibold text-xl ${isLight ? "text-zinc-950" : "text-[#ffffff]"}`}>
                12
              </span>
              <span className={`text-xs flex items-center gap-1 font-medium ${
                isLight ? "text-emerald-600" : "text-[#ffffff]"
              }`}>
                <span>↑</span>
                <span>2 new detected</span>
              </span>
            </div>
          </div>

          {/* 2-Column Main Workspace */}
          <div className="flex flex-col lg:flex-row gap-3 flex-1 overflow-hidden">
            {/* Left Column */}
            <div className="flex-1 flex flex-col gap-3">
              {/* Competitor Search Visibility Bar Chart */}
              <div
                className={`rounded-lg border p-3 ${
                  isLight ? "border-zinc-200 bg-zinc-50/60" : "border-[#262626] bg-[#141416]"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-semibold ${isLight ? "text-zinc-950" : "text-[#ffffff]"}`}>
                    Competitor Search Visibility
                  </span>
                  <span className={`text-xs ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>vs. You</span>
                </div>

                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center gap-2">
                    <span className={`font-semibold w-20 shrink-0 text-[11px] ${
                      isLight ? "text-zinc-950" : "text-[#ffffff]"
                    }`}>
                      You (Okiza)
                    </span>
                    <div
                      className={`flex-1 rounded-sm overflow-hidden ${isLight ? "bg-zinc-200" : "bg-[#262626]"}`}
                      style={{ height: 7 }}
                    >
                      <div
                        className={`h-full rounded-sm ${isLight ? "bg-zinc-950" : "bg-[#ffffff] shadow-[0_0_8px_rgba(255,255,255,0.4)]"}`}
                        style={{ width: "38%" }}
                      />
                    </div>
                    <span className={`font-semibold w-8 text-right shrink-0 text-[11px] ${
                      isLight ? "text-zinc-950" : "text-[#ffffff]"
                    }`}>
                      38%
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`w-20 shrink-0 text-[10px] ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>
                      Rival Co
                    </span>
                    <div
                      className={`flex-1 rounded-sm overflow-hidden ${isLight ? "bg-zinc-200" : "bg-[#262626]"}`}
                      style={{ height: 6 }}
                    >
                      <div
                        className={`h-full rounded-sm ${isLight ? "bg-zinc-400" : "bg-[#52525b]"}`}
                        style={{ width: "72%" }}
                      />
                    </div>
                    <span className={`w-8 text-right shrink-0 text-[10px] ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>
                      72%
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`w-20 shrink-0 text-[10px] ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>
                      GrowthBase
                    </span>
                    <div
                      className={`flex-1 rounded-sm overflow-hidden ${isLight ? "bg-zinc-200" : "bg-[#262626]"}`}
                      style={{ height: 6 }}
                    >
                      <div
                        className={`h-full rounded-sm ${isLight ? "bg-zinc-400" : "bg-[#52525b]"}`}
                        style={{ width: "65%" }}
                      />
                    </div>
                    <span className={`w-8 text-right shrink-0 text-[10px] ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>
                      65%
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`w-20 shrink-0 text-[10px] ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>
                      MarketIQ
                    </span>
                    <div
                      className={`flex-1 rounded-sm overflow-hidden ${isLight ? "bg-zinc-200" : "bg-[#262626]"}`}
                      style={{ height: 6 }}
                    >
                      <div
                        className={`h-full rounded-sm ${isLight ? "bg-zinc-400" : "bg-[#52525b]"}`}
                        style={{ width: "51%" }}
                      />
                    </div>
                    <span className={`w-8 text-right shrink-0 text-[10px] ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>
                      51%
                    </span>
                  </div>
                </div>
              </div>

              {/* Recommended Actions */}
              <div
                className={`rounded-lg border p-3 flex-1 ${
                  isLight ? "border-zinc-200 bg-zinc-50/60" : "border-[#262626] bg-[#141416]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-semibold ${isLight ? "text-zinc-950" : "text-[#ffffff]"}`}>
                    Recommended Actions
                  </span>
                  <span className={`text-[10px] font-bold ${isLight ? "text-zinc-950" : "text-[#ffffff]"}`}>High Impact</span>
                </div>
                <div className="flex flex-col gap-2.5">
                  <div className={`flex items-start gap-2 p-1.5 rounded transition-colors ${
                    isLight ? "hover:bg-zinc-100" : "hover:bg-[#262626]/40"
                  }`}>
                    <div
                      className={`w-4 h-4 rounded flex items-center justify-center shrink-0 mt-0.5 ${
                        isLight ? "bg-zinc-200 text-zinc-900" : "bg-white/10 text-white"
                      }`}
                    >
                      <span className="font-semibold text-[9px]">1</span>
                    </div>
                    <div className="flex-1">
                      <span className={`block text-[11px] font-medium leading-tight ${
                        isLight ? "text-zinc-900" : "text-[#ffffff]"
                      }`}>
                        Build 3 targeted landing pages for high-intent keywords
                      </span>
                      <span className={`text-[10px] ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>
                        Projected traffic impact: +32% in 45 days
                      </span>
                    </div>
                  </div>

                  <div className={`flex items-start gap-2 p-1.5 rounded transition-colors ${
                    isLight ? "hover:bg-zinc-100" : "hover:bg-[#262626]/40"
                  }`}>
                    <div
                      className={`w-4 h-4 rounded flex items-center justify-center shrink-0 mt-0.5 ${
                        isLight ? "bg-zinc-200 text-zinc-900" : "bg-white/10 text-white"
                      }`}
                    >
                      <span className="font-semibold text-[9px]">2</span>
                    </div>
                    <div className="flex-1">
                      <span className={`block text-[11px] font-medium leading-tight ${
                        isLight ? "text-zinc-900" : "text-[#ffffff]"
                      }`}>
                        Update your brand positioning on key directory listings
                      </span>
                      <span className={`text-[10px] ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>
                        Fix 7 outdated citations across Gartner & G2
                      </span>
                    </div>
                  </div>

                  <div className={`flex items-start gap-2 p-1.5 rounded transition-colors ${
                    isLight ? "hover:bg-zinc-100" : "hover:bg-[#262626]/40"
                  }`}>
                    <div
                      className={`w-4 h-4 rounded flex items-center justify-center shrink-0 mt-0.5 ${
                        isLight ? "bg-zinc-200 text-zinc-900" : "bg-white/10 text-white"
                      }`}
                    >
                      <span className="font-semibold text-[9px]">3</span>
                    </div>
                    <div className="flex-1">
                      <span className={`block text-[11px] font-medium leading-tight ${
                        isLight ? "text-zinc-900" : "text-[#ffffff]"
                      }`}>
                        Launch a retargeting campaign for pricing page visitors
                      </span>
                      <span className={`text-[10px] ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>
                        Re-engage 1,420 high-intent drop-offs
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full lg:w-[230px] flex flex-col gap-3">
              <div
                className={`rounded-lg border p-3 flex-1 flex flex-col gap-3 ${
                  isLight
                    ? "border-zinc-200 bg-zinc-50/80"
                    : "border-white/15 bg-white/[0.03]"
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-zinc-950 dark:bg-white flex items-center justify-center shrink-0">
                    <Zap className="w-2.5 h-2.5 text-white dark:text-black fill-current" />
                  </div>
                  <span className={`text-xs font-semibold ${isLight ? "text-zinc-950" : "text-[#ffffff]"}`}>
                    Your next growth move
                  </span>
                </div>

                <p className={`leading-relaxed text-[10px] ${isLight ? "text-zinc-600" : "text-[#a1a1aa]"}`}>
                  Three of your closest competitors are ranking for high-intent local
                  searches that your business currently misses. Capturing just one of
                  these terms could significantly increase qualified traffic.
                </p>

                <button
                  onClick={() => alert("Simulating automated Opportunity Blueprint generation...")}
                  className={`flex items-center gap-1 font-semibold text-[10px] hover:underline cursor-pointer ${
                    isLight ? "text-zinc-950" : "text-[#ffffff]"
                  }`}
                >
                  Explore Opportunity →
                </button>

                <div className={`mt-auto border-t pt-3 ${isLight ? "border-zinc-200" : "border-[#262626]"}`}>
                  <div className="flex flex-col gap-2">
                    <div
                      className={`flex items-start gap-2 p-2.5 rounded-lg border ${
                        isLight
                          ? "border-zinc-200 bg-white shadow-xs"
                          : "border-white/10 bg-white/[0.04]"
                      }`}
                    >
                      <div className="w-4 h-4 rounded-full bg-zinc-950 dark:bg-white mt-0.5 shrink-0 flex items-center justify-center">
                        <Zap className="w-2 h-2 text-white dark:text-black fill-current" />
                      </div>
                      <span className={`text-[11px] leading-tight ${isLight ? "text-zinc-900" : "text-[#ffffff]"}`}>
                        2 new competitor campaigns detected
                      </span>
                    </div>

                    <div
                      className={`flex items-start gap-2 p-2.5 rounded-lg border ${
                        isLight
                          ? "border-zinc-200 bg-white shadow-xs"
                          : "border-white/10 bg-white/[0.04]"
                      }`}
                    >
                      <div className="w-4 h-4 rounded-full bg-zinc-950 dark:bg-white mt-0.5 shrink-0 flex items-center justify-center">
                        <Zap className="w-2 h-2 text-white dark:text-black fill-current" />
                      </div>
                      <span className={`text-[11px] leading-tight ${isLight ? "text-zinc-900" : "text-[#ffffff]"}`}>
                        AI search share up 8% this month
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
