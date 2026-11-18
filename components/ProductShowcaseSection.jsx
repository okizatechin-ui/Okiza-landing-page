"use client";

import DashboardMockup from "./DashboardMockup";
import { useTheme } from "@/context/ThemeContext";

export default function ProductShowcaseSection() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <section
      id="showcase"
      className="w-full px-6 sm:px-12 md:px-20 py-20 bg-transparent"
      data-component="@components/ProductShowcaseSection.jsx"
    >
      <div className={`border-t pt-20 ${isLight ? "border-zinc-200" : "border-[#262626]"}`}>
        <div className="flex flex-col items-center text-center mb-12">
          <p
            className={`text-xs font-semibold tracking-widest uppercase mb-4 ${
              isLight ? "text-zinc-500" : "text-[#ffffff]"
            }`}
          >
            The Product
          </p>
          <h2
            className={`font-semibold mb-4 tracking-tight text-3xl sm:text-4xl md:text-[44px] leading-[1.1] ${
              isLight ? "text-zinc-950 font-bold" : "text-[#ffffff]"
            }`}
          >
            One workspace. Every growth signal.
          </h2>
          <p
            className={`text-base max-w-[540px] leading-[1.7] ${
              isLight ? "text-zinc-600" : "text-[#a1a1aa]"
            }`}
          >
            Okiza surfaces the intelligence your team needs — from brand health to
            competitor moves, market opportunities and AI-optimised content — in
            one connected dashboard.
          </p>
        </div>

        {/* Dashboard Mockup Display */}
        <DashboardMockup />
      </div>
    </section>
  );
}
