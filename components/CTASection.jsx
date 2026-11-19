"use client";

import { useState } from "react";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function CTASection() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open("https://calendly.com/kushalpatel1803", "_blank", "noopener,noreferrer");
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <section className="w-full px-6 sm:px-12 md:px-20 pt-8 sm:pt-12 pb-0 bg-transparent relative overflow-hidden">
      {/* Background radial gradient glow (dark mode only) */}
      {!isLight && (
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-10 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, rgba(255, 255, 255, 0.3) 0%, transparent 70%)",
          }}
        />
      )}

      <div
        className={`max-w-4xl mx-auto rounded-2xl border px-6 pt-8 pb-4 sm:px-12 sm:pt-10 sm:pb-4 text-center relative z-10 transition-all ${
          isLight
            ? "border-zinc-200 bg-zinc-50 shadow-lg"
            : "border-[#262626] bg-gradient-to-b from-[#111111] to-[#070707] shadow-2xl"
        }`}
      >
        <div
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-6 border ${
            isLight
              ? "bg-zinc-100 text-zinc-900 border-zinc-200"
              : "bg-[#ffffff]/10 text-[#ffffff] border-[#ffffff]/20"
          }`}
        >
          <Sparkles className={`w-3.5 h-3.5 ${isLight ? "text-zinc-950" : "text-[#ffffff]"}`} />
          <span>Start Your Free 14-Day Growth Trial</span>
        </div>

        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight ${
            isLight ? "text-zinc-950" : "text-[#ffffff]"
          }`}
        >
          Ready to turn intelligence into your unfair advantage?
        </h2>

        <p
          className={`text-base max-w-xl mx-auto mb-8 leading-relaxed ${
            isLight ? "text-zinc-600" : "text-[#a1a1aa]"
          }`}
        >
          Join over 1,200 ambitious brands using Okiza to outmaneuver competitors,
          dominate AI search, and scale predictable revenue.
        </p>

        {subscribed ? (
          <div
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg border text-sm font-medium ${
              isLight
                ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                : "bg-[#ffffff]/10 border-[#ffffff]/30 text-[#ffffff]"
            }`}
          >
            <CheckCircle2 className={`w-4 h-4 ${isLight ? "text-emerald-600" : "text-[#ffffff]"}`} />
            <span>Success! Welcome aboard. Check your inbox for your access link.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your work email..."
              className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                isLight
                  ? "bg-white border-zinc-300 text-zinc-950 placeholder-zinc-400 focus:border-zinc-900 shadow-xs"
                  : "bg-[#000000] border-[#262626] text-[#ffffff] placeholder-[#71717a] focus:border-[#ffffff]"
              }`}
            />
            <button
              type="submit"
              className={`w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-sm whitespace-nowrap transition-all cursor-pointer ${
                isLight
                  ? "bg-zinc-900 hover:bg-black text-white shadow-sm"
                  : "bg-[#ffffff] hover:bg-[#e4e4e7] text-[#000000] shadow-[0_0_20px_rgba(255,255,255,0.25)]"
              }`}
            >
              Get Started Free →
            </button>
          </form>
        )}

        <div
          className={`flex flex-wrap items-center justify-center gap-6 mt-6 sm:mt-7 text-xs ${
            isLight ? "text-zinc-600" : "text-[#a1a1aa]"
          }`}
        >
          <span>✓ No credit card required</span>
          <span>✓ Full access to all 7 studios</span>
          <span>✓ Cancel anytime</span>
        </div>
      </div>
    </section>
  );
}
