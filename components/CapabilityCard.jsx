"use client";

import { ArrowRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function CapabilityCard({
  title,
  description,
  icon,
  previewContent,
  link = "#",
  onSelect,
}) {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div
      onClick={onSelect}
      className={`flex flex-col gap-4 p-5 rounded-xl border transition-all duration-300 hover:translate-y-[-2px] group cursor-pointer ${
        isLight
          ? "bg-white border-zinc-200 shadow-sm hover:border-zinc-300 hover:shadow-md text-zinc-950"
          : "border-[#262626] bg-[#111111] hover:border-[#ffffff]/50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.8)] text-white"
      }`}
      data-component="@components/CapabilityCard.jsx"
    >
      {/* Visual Preview Box */}
      <div
        className={`w-full rounded-lg overflow-hidden border transition-colors relative ${
          isLight
            ? "border-zinc-200 bg-zinc-50 group-hover:border-zinc-300"
            : "border-[#262626] bg-[#0a0a0c] group-hover:border-[#ffffff]/25"
        }`}
        style={{ minHeight: 112 }}
      >
        {previewContent}
      </div>

      {/* Title & Icon */}
      <div className="flex items-center gap-2.5">
        <div
          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border transition-transform group-hover:scale-105 ${
            isLight
              ? "bg-zinc-100 border-zinc-200 text-zinc-900 group-hover:border-zinc-300"
              : "bg-[#1c1c1f] border-[#2e2e32] text-white group-hover:border-[#ffffff]/30"
          }`}
        >
          {icon}
        </div>
        <span
          className={`text-base font-semibold transition-colors ${
            isLight ? "text-zinc-950 group-hover:text-black" : "text-[#ffffff] group-hover:text-[#ffffff]"
          }`}
        >
          {title}
        </span>
      </div>

      {/* Description */}
      <p
        className={`text-xs sm:text-sm leading-relaxed flex-1 ${
          isLight ? "text-zinc-600" : "text-[#a1a1aa]"
        }`}
      >
        {description}
      </p>

      {/* Action link */}
      <div
        className={`text-xs font-semibold flex items-center gap-1.5 group-hover:gap-2 transition-all ${
          isLight ? "text-zinc-950" : "text-[#ffffff]"
        }`}
      >
        <span>Learn more</span>
        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  );
}
