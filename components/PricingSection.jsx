"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function PricingSection() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      id: "intern",
      name: "Intern Plan",
      subtitle: "AI Marketing Intern",
      badge: "Entry-level",
      price: annual ? 49 : 59,
      annualSavings: "Save $120 / year",
      desc: "An AI agent that handles foundational SEO, GEO, and AEO work for your business.",
      features: [
        "Complete Website SEO Audit & health snapshot",
        "Technical SEO: issue detection & recommended fixes",
        "Keyword Tracking & performance analytics",
        "Competitor Analysis & live monitoring",
        "GEO (Generative Engine Optimization) in AI engines",
        "AEO (Answer Engine Optimization) query mentions",
        "Downloadable SEO, GEO & AEO audit reports",
        "WordPress & GitHub PR integration",
        "Automated Apply Changes workflow",
      ],
      isPopular: false,
      ctaText: "Start Free with Intern Plan",
    },
    {
      id: "manager",
      name: "Manager Plan",
      subtitle: "AI Marketing Manager",
      badge: "Most Popular • Mid-tier",
      price: annual ? 149 : 179,
      annualSavings: "Save $360 / year",
      desc: "Everything in Intern, plus content creation, multi-platform publishing, and external brand visibility.",
      features: [
        "Everything in the Intern Plan (SEO, GEO, AEO, Keywords, Competitors)",
        "Blog Management: automated draft creation & publishing",
        "Reddit Integration: find buyer threads & draft replies",
        "Quora Integration: high-intent question brand answers",
        "Medium & External Publishing distribution",
        "Third-party Posting & Backlinking strategy",
        "Social & Thought Leadership: B2B authority content",
        "Cross-platform distribution beyond your own website",
        "Priority analytics refresh & ranking alerts",
      ],
      isPopular: true,
      ctaText: "Start 7-Day Free Trial",
    },
    {
      id: "cmo",
      name: "CMO Plan",
      subtitle: "AI Chief Marketing Officer",
      badge: "Premium • Full Fleet",
      price: annual ? 299 : 349,
      annualSavings: "Save $600 / year",
      desc: "Autonomous executive growth engine with dedicated multi-agent teams running 24/7.",
      features: [
        "Everything in Manager (Content, Backlinks, Multi-channel, SEO/GEO)",
        "Fleet of 18+ Autonomous Marketing Agents running 24/7",
        "Competitive War Room: real-time rival moves & auto counters",
        "Full UGC Video Briefs, Scripts & Creator Outreach",
        "Founder-in-the-Loop 1-Click Governance Gate",
        "Real-Time Attribution Flywheel & Autonomous Retuning",
        "Bi-directional Zapier, Webhooks & REST API access",
        "Dedicated Growth Strategist & Custom Agent Tuning",
        "SLA Guarantee: 99.9% uptime & 24/7 priority support",
      ],
      isPopular: false,
      ctaText: "Deploy Autonomous CMO",
    },
  ];

  return (
    <section id="pricing" className="w-full px-6 sm:px-12 md:px-20 py-24 bg-transparent">
      <div className={`border-t pt-20 ${isLight ? "border-zinc-200" : "border-[#262626]"}`}>
        <div className="flex flex-col items-center text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-4 ${
              isLight
                ? "border-zinc-200 bg-zinc-100"
                : "border-[#383332] bg-[#1a1716]"
            }`}
          >
            <span
              className={`text-[11px] font-mono tracking-widest uppercase font-bold ${
                isLight ? "text-zinc-600" : "text-[#a8a29e]"
              }`}
            >
              OKIZA AI CMO
            </span>
            <span className={isLight ? "text-zinc-400" : "text-[#57534e]"}>•</span>
            <span className={`text-xs font-semibold ${isLight ? "text-zinc-900" : "text-white"}`}>
              Subscription Plans
            </span>
          </div>

          <h2
            className={`font-semibold mb-4 tracking-tight text-3xl sm:text-4xl md:text-[44px] leading-[1.1] ${
              isLight ? "text-zinc-950" : "text-[#ffffff]"
            }`}
          >
            Predictable pricing for exponential growth.
          </h2>
          <p
            className={`text-base max-w-[560px] leading-relaxed mb-8 ${
              isLight ? "text-zinc-600" : "text-[#a1a1aa]"
            }`}
          >
            Choose the AI tier that fits your growth ambitions — from foundational SEO & GEO execution to a full autonomous Chief Marketing Officer.
          </p>

          {/* Billing Switch */}
          <div
            className={`flex items-center gap-2 p-1.5 rounded-full border ${
              isLight
                ? "bg-zinc-100 border-zinc-200"
                : "bg-[#111111] border-[#262626]"
            }`}
          >
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                !annual
                  ? isLight
                    ? "bg-white text-zinc-950 font-bold shadow-xs"
                    : "bg-[#262626] text-[#ffffff] font-bold"
                  : isLight
                  ? "text-zinc-600 hover:text-black"
                  : "text-[#a1a1aa] hover:text-[#ffffff]"
              }`}
            >
              Monthly billing
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                annual
                  ? isLight
                    ? "bg-zinc-950 text-white font-bold shadow-xs"
                    : "bg-[#ffffff] text-[#000000] font-semibold"
                  : isLight
                  ? "text-zinc-600 hover:text-black"
                  : "text-[#a1a1aa] hover:text-[#ffffff]"
              }`}
            >
              <span>Annual billing</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                  isLight ? "bg-emerald-500/20 text-emerald-400" : "bg-[#000000]/15"
                }`}
              >
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((p) => (
            <div
              key={p.id}
              className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between border relative transition-all duration-300 ${
                p.isPopular
                  ? isLight
                    ? "bg-white border-zinc-900 shadow-xl scale-[1.02] z-10"
                    : "bg-[#141414] border-[#ffffff] shadow-[0_0_35px_rgba(255,255,255,0.12)] scale-[1.02] z-10"
                  : isLight
                  ? "bg-white border-zinc-200 hover:border-zinc-300 shadow-sm"
                  : "bg-[#111111]/80 border-[#262626] hover:border-[#404040]"
              }`}
            >
              {p.isPopular && (
                <div
                  className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase flex items-center gap-1 shadow-md ${
                    isLight
                      ? "bg-zinc-950 text-white"
                      : "bg-[#ffffff] text-[#000000]"
                  }`}
                >
                  <Sparkles className={`w-3 h-3 ${isLight ? "fill-white" : "fill-black"}`} />
                  <span>{p.badge}</span>
                </div>
              )}

              <div>
                {!p.isPopular && (
                  <span
                    className={`text-[11px] font-mono tracking-wider uppercase font-semibold block mb-2 ${
                      isLight ? "text-zinc-400" : "text-[#71717a]"
                    }`}
                  >
                    {p.badge}
                  </span>
                )}
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className={`text-xl font-bold ${isLight ? "text-zinc-950" : "text-[#ffffff]"}`}>
                    {p.name}
                  </h3>
                </div>
                <span className="text-xs text-sky-600 dark:text-sky-400 font-mono font-semibold block mb-3">
                  {p.subtitle}
                </span>

                <p className={`text-xs mb-6 leading-relaxed ${isLight ? "text-zinc-600" : "text-[#a1a1aa]"}`}>
                  {p.desc}
                </p>

                <div className="flex items-baseline gap-1 mb-1">
                  <span
                    className={`text-4xl font-extrabold font-mono ${
                      isLight ? "text-zinc-950" : "text-[#ffffff]"
                    }`}
                  >
                    ${p.price}
                  </span>
                  <span className={`text-xs ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>
                    / month
                  </span>
                </div>
                <span className={`text-[11px] block mb-6 ${isLight ? "text-zinc-500" : "text-[#71717a]"}`}>
                  {annual ? p.annualSavings : "Billed monthly"}
                </span>

                <div className={`flex flex-col gap-3 pt-5 border-t ${isLight ? "border-zinc-200" : "border-[#262626]"}`}>
                  <span
                    className={`text-[11px] font-semibold uppercase tracking-wider mb-1 ${
                      isLight ? "text-zinc-900" : "text-[#ffffff]"
                    }`}
                  >
                    Features included:
                  </span>
                  {p.features.map((f, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5">
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          isLight ? "bg-zinc-100 border border-zinc-200" : "bg-[#ffffff]/10"
                        }`}
                      >
                        <Check
                          className={`w-2.5 h-2.5 ${isLight ? "text-zinc-950" : "text-[#ffffff]"}`}
                          strokeWidth={3}
                        />
                      </div>
                      <span className={`text-xs leading-snug ${isLight ? "text-zinc-700" : "text-[#d4d4d8]"}`}>
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <Link
                  href="/#analyze"
                  className={`w-full py-3.5 rounded-xl font-semibold text-xs text-center flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    p.isPopular
                      ? isLight
                        ? "bg-zinc-950 hover:bg-black text-white shadow-md"
                        : "bg-[#ffffff] hover:bg-[#e4e4e7] text-[#000000] shadow-[0_0_20px_rgba(255,255,255,0.25)]"
                      : isLight
                      ? "bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border border-zinc-200"
                      : "bg-[#262626] hover:bg-[#333333] text-[#ffffff]"
                  }`}
                >
                  <span>{p.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className={`text-[10px] text-center block mt-2 ${isLight ? "text-zinc-500" : "text-[#71717a]"}`}>
                  7-day free trial · Cancel anytime
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
