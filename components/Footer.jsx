"use client";

import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import OkizaLogo from "./OkizaLogo";
import { useTheme } from "@/context/ThemeContext";

export default function Footer() {
  const { theme, setTheme } = useTheme();
  const isLight = theme === "light";

  const linkClass = isLight
    ? "text-[13px] text-zinc-600 hover:text-black transition-colors leading-relaxed"
    : "text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed";

  const headerClass = `text-[11px] font-mono tracking-widest uppercase font-semibold mb-4 block ${
    isLight ? "text-zinc-400" : "text-[#71717a]"
  }`;

  const headerMtClass = `text-[11px] font-mono tracking-widest uppercase font-semibold mt-8 mb-4 block ${
    isLight ? "text-zinc-400" : "text-[#71717a]"
  }`;

  return (
    <footer
      className={`relative z-10 w-full border-t transition-colors duration-200 px-6 sm:px-12 md:px-16 pt-16 pb-6 mt-6 ${
        isLight
          ? "border-zinc-200 bg-white text-zinc-600"
          : "border-[#1f1f23] bg-[#000000] text-[#a1a1aa]"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Grid: Brand Column + 4 Link Columns */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Brand Info (Col 1-4 on desktop) */}
          <div className="col-span-2 md:col-span-4 flex flex-col gap-5">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <OkizaLogo size={28} variant={isLight ? "black" : "white"} />
              <span className={`font-semibold text-xl tracking-tight ${isLight ? "text-zinc-950" : "text-[#ffffff]"}`}>
                Okiza
              </span>
            </Link>

            {/* Tagline */}
            <p className={`text-sm max-w-xs leading-relaxed ${isLight ? "text-zinc-600" : "text-[#a1a1aa]"}`}>
              Your AI CMO for growth and marketing.
            </p>

            {/* Social Icons Row */}
            <div className={`flex items-center gap-4 ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>
              {/* X (Twitter) */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className={`transition-colors ${isLight ? "hover:text-black" : "hover:text-[#ffffff]"}`}
                aria-label="X (formerly Twitter)"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className={`transition-colors ${isLight ? "hover:text-black" : "hover:text-[#ffffff]"}`}
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className={`transition-colors ${isLight ? "hover:text-black" : "hover:text-[#ffffff]"}`}
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.8v8.37h-2.8v-8.37M7.86 6.3a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 1: TOOLS (Col 5-6 on desktop) */}
          <div className="col-span-1 md:col-span-2 flex flex-col">
            <span className={headerClass}>
              TOOLS
            </span>
            <div className="flex flex-col gap-2.5">
              <Link href="/tools/ai-humanizer" className={linkClass}>
                AI Humanizer
              </Link>
              <Link href="/tools/meta-description-generator" className={linkClass}>
                Meta Description Generator
              </Link>
              <Link href="/tools/meta-tag-checker" className={linkClass}>
                Meta Tag Checker
              </Link>
              <Link href="/tools/robots-txt-generator" className={linkClass}>
                Robots.txt Generator
              </Link>
              <Link href="/tools/sitemap-generator" className={linkClass}>
                Sitemap.xml Generator
              </Link>
              <Link href="/tools/utm-builder" className={linkClass}>
                UTM Builder
              </Link>
              <Link href="/tools/x-video-downloader" className={linkClass}>
                X Video Downloader
              </Link>
              <Link href="/tools/schema-generator" className={linkClass}>
                Schema Markup Generator
              </Link>
            </div>
          </div>

          {/* Column 2: USE CASES (Col 7-8 on desktop) */}
          <div className="col-span-1 md:col-span-2 flex flex-col">
            <span className={headerClass}>
              USE CASES
            </span>
            <div className="flex flex-col gap-2.5">
              <Link href="/marketing-automation/saas" className={linkClass}>
                SaaS
              </Link>
              <Link href="/marketing-automation/startups" className={linkClass}>
                Startups
              </Link>
              <Link href="/marketing-automation/ecommerce" className={linkClass}>
                Ecommerce
              </Link>
              <Link href="/marketing-automation/agencies" className={linkClass}>
                Agencies
              </Link>
              <Link href="/marketing-automation/services" className={linkClass}>
                Professional Services
              </Link>
              <Link href="/marketing-automation/real-estate" className={linkClass}>
                Real Estate
              </Link>
              <Link href="/marketing-automation/financial-advisors" className={linkClass}>
                Financial Advisors
              </Link>
              <Link href="/marketing-automation/healthcare" className={linkClass}>
                Healthcare
              </Link>
              <Link href="/marketing-automation/recruiters" className={linkClass}>
                Recruiters
              </Link>
              <Link href="/marketing-automation/restaurants" className={linkClass}>
                Restaurants
              </Link>
              <Link href="/marketing-automation/law-firms" className={linkClass}>
                Law Firms
              </Link>
              <Link href="/marketing-automation/small-business" className={linkClass}>
                Small Business
              </Link>
              <Link href="/marketing-automation/saas" className={linkClass}>
                More Use Cases
              </Link>
            </div>
          </div>

          {/* Column 3: LEARN (Col 9-10 on desktop) */}
          <div className="col-span-1 md:col-span-2 flex flex-col">
            <span className={headerClass}>
              LEARN
            </span>
            <div className="flex flex-col gap-2.5">
              <Link href="/growth-methodology" className={linkClass}>
                Blog
              </Link>
              <Link href="/docs" className={linkClass}>
                Docs
              </Link>
              <Link href="/docs" className={linkClass}>
                LLMs.txt Generator
              </Link>
            </div>
          </div>

          {/* Column 4: COMPANY (Col 11-12 on desktop) */}
          <div className="col-span-1 md:col-span-2 flex flex-col">
            <span className={headerClass}>
              COMPANY
            </span>
            <div className="flex flex-col gap-2.5">
              <Link href="/pricing" className={linkClass}>
                About
              </Link>
              <Link href="/stories" className={linkClass}>
                Customers
              </Link>
              <Link href="/stories" className={linkClass}>
                Creators
              </Link>
              <Link href="/pricing" className={linkClass}>
                Pricing
              </Link>
              <Link href="/pricing" className={linkClass}>
                Agency
              </Link>
              <Link href="/pricing" className={linkClass}>
                Affiliates
              </Link>
              <Link href="/pricing" className={linkClass}>
                Careers
              </Link>
              <Link href="/faq" className={linkClass}>
                Contact
              </Link>
              <Link href="/pricing" className={linkClass}>
                Refund Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar (Matching Reference Image 2) */}
        <div
          className={`pt-6 pb-2 border-t flex flex-col lg:flex-row items-center justify-between gap-4 text-xs ${
            isLight ? "border-zinc-200 text-zinc-500" : "border-[#1f1f23] text-[#71717a]"
          }`}
        >
          {/* Copyright */}
          <div>
            Copyright © 2026 StreamOye Pte Ltd. All rights reserved.
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Link href="/faq" className={`transition-colors ${isLight ? "hover:text-black" : "hover:text-[#ffffff]"}`}>
              Private Chat
            </Link>
            <span className={isLight ? "text-zinc-300" : "text-[#3f3f46]"}>·</span>
            <Link href="/faq" className={`transition-colors ${isLight ? "hover:text-black" : "hover:text-[#ffffff]"}`}>
              Privacy Policy
            </Link>
            <span className={isLight ? "text-zinc-300" : "text-[#3f3f46]"}>·</span>
            <Link href="/faq" className={`transition-colors ${isLight ? "hover:text-black" : "hover:text-[#ffffff]"}`}>
              Cookie Policy
            </Link>
            <span className={isLight ? "text-zinc-300" : "text-[#3f3f46]"}>·</span>
            <button
              onClick={() => {}}
              className={`transition-colors cursor-pointer ${isLight ? "hover:text-black" : "hover:text-[#ffffff]"}`}
            >
              Cookie preferences
            </button>
            <span className={isLight ? "text-zinc-300" : "text-[#3f3f46]"}>·</span>
            <Link href="/faq" className={`transition-colors ${isLight ? "hover:text-black" : "hover:text-[#ffffff]"}`}>
              Terms of Service
            </Link>
          </div>

          {/* Theme Switcher Pill */}
          <div className="flex items-center">
            <div
              className={`inline-flex items-center rounded-full p-0.5 text-xs border transition-colors ${
                isLight
                  ? "bg-zinc-100 border-zinc-200"
                  : "bg-[#18181b] border-[#27272a]"
              }`}
            >
              <button
                type="button"
                onClick={() => setTheme("light")}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full transition-all cursor-pointer ${
                  isLight
                    ? "bg-white text-zinc-950 shadow-xs font-semibold"
                    : "text-zinc-400 hover:text-white"
                }`}
                aria-label="Light mode"
              >
                <Sun className="w-3.5 h-3.5" />
                <span>Light</span>
              </button>
              <button
                type="button"
                onClick={() => setTheme("dark")}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full transition-all cursor-pointer ${
                  !isLight
                    ? "bg-zinc-800 text-white shadow-xs font-semibold"
                    : "text-zinc-500 hover:text-black"
                }`}
                aria-label="Dark mode"
              >
                <Moon className="w-3.5 h-3.5" />
                <span>Dark</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
