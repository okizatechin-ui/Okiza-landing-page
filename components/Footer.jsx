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
          {/* Brand Info & AI Summaries (Col 1-4 on desktop) */}
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

            {/* Request AI Summary of Okiza */}
            <div className="flex flex-col gap-2.5 mt-2">
              <span className={`text-[10px] font-mono tracking-widest uppercase font-semibold ${
                isLight ? "text-zinc-400" : "text-[#71717a]"
              }`}>
                REQUEST AI SUMMARY OF OKIZA
              </span>

              <div className={`flex items-center gap-3.5 ${isLight ? "text-zinc-500" : "text-[#a1a1aa]"}`}>
                {/* ChatGPT */}
                <a
                  href="https://chatgpt.com/?q=Summarize+Okiza+AI+CMO+and+Autonomous+Growth+Platform"
                  target="_blank"
                  rel="noreferrer"
                  className={`transition-colors ${isLight ? "hover:text-black" : "hover:text-[#ffffff]"}`}
                  aria-label="Summarize with ChatGPT"
                  title="Summarize with ChatGPT"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 8.76a4.48 4.48 0 0 1 2.366-1.973V12.4a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 8.76zm16.597 3.855l-5.833-3.387L15.119 8.06a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.674 8.136v-5.696a.79.79 0 0 0-.409-.676zm2.01-4.887a4.462 4.462 0 0 1 .535 3.014l-.142-.085-4.783-2.759a.771.771 0 0 0-.78 0l-5.843 3.369V8.944a.08.08 0 0 1 .033-.062L14.26 6.05a4.5 4.5 0 0 1 6.687 1.678zM12.008 13.16l-2.433-1.405 2.433-1.405 2.433 1.405z" />
                  </svg>
                </a>

                {/* Claude (Anthropic spark) */}
                <a
                  href="https://claude.ai/new?q=Summarize+Okiza+AI+CMO+and+Autonomous+Growth+Platform"
                  target="_blank"
                  rel="noreferrer"
                  className={`transition-colors ${isLight ? "hover:text-black" : "hover:text-[#ffffff]"}`}
                  aria-label="Summarize with Claude"
                  title="Summarize with Claude"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2a1 1 0 0 1 1 1v4.14a6.85 6.85 0 0 1 3.86 1.6l2.93-2.93a1 1 0 0 1 1.42 1.42l-2.93 2.93a6.85 6.85 0 0 1 1.6 3.84H23a1 1 0 1 1 0 2h-4.12a6.85 6.85 0 0 1-1.6 3.84l2.93 2.93a1 1 0 1 1-1.42 1.42l-2.93-2.93a6.85 6.85 0 0 1-3.86 1.6V23a1 1 0 1 1-2 0v-4.14a6.85 6.85 0 0 1-3.86-1.6l-2.93 2.93a1 1 0 0 1-1.42-1.42l2.93-2.93a6.85 6.85 0 0 1-1.6-3.84H1a1 1 0 0 1 0-2h4.12a6.85 6.85 0 0 1 1.6-3.84L3.79 6.23a1 1 0 0 1 1.42-1.42l2.93 2.93A6.85 6.85 0 0 1 12 6.14V3a1 1 0 0 1 1-1z" />
                  </svg>
                </a>

                {/* Perplexity */}
                <a
                  href="https://www.perplexity.ai/search?q=Summarize+Okiza+AI+CMO+and+Autonomous+Growth+Platform"
                  target="_blank"
                  rel="noreferrer"
                  className={`transition-colors ${isLight ? "hover:text-black" : "hover:text-[#ffffff]"}`}
                  aria-label="Summarize with Perplexity"
                  title="Summarize with Perplexity"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l-7 4v5c0 4.5 3 8.7 7 9.8 4-1.1 7-5.3 7-9.8V6l-7-4zm-1 4.3l5 2.9-5 2.8V6.3zm2 11.2c-2.8-.9-5-4.2-5-7.7V8.1l3 1.7v3.4l2 1.1v3.1zm4-7.7c0 3.5-2.2 6.8-5 7.7v-3.1l2-1.1V9.8l3-1.7v4.1z" />
                  </svg>
                </a>
              </div>
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

          {/* Column 2: USE CASES & RESOURCES (Col 7-8 on desktop) */}
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

            <span className={headerMtClass}>
              RESOURCES
            </span>
            <div className="flex flex-col gap-2.5">
              <Link href="/growth-methodology" className={linkClass}>
                Skills
              </Link>
              <Link href="/docs" className={linkClass}>
                Prompts
              </Link>
              <Link href="/stories" className={linkClass}>
                Launch Library
              </Link>
              <Link href="/growth-methodology" className={linkClass}>
                Viral Launch Handbook
              </Link>
            </div>
          </div>

          {/* Column 3: LEARN & INTEGRATIONS (Col 9-10 on desktop) */}
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

            <span className={headerMtClass}>
              INTEGRATIONS
            </span>
            <div className="flex flex-col gap-2.5">
              <Link
                href="/integrations"
                className={`${linkClass} inline-flex items-center gap-1.5`}
              >
                <span>Okiza MCP</span>
                <span className={`text-[9px] font-mono uppercase px-1.5 py-0.5 rounded font-bold tracking-wider ${
                  isLight ? "bg-zinc-100 text-zinc-900 border border-zinc-200" : "bg-[#27272a] text-[#e4e4e7]"
                }`}>
                  NEW
                </span>
              </Link>
              <Link href="/integrations" className={linkClass}>
                WordPress
              </Link>
              <Link href="/integrations" className={linkClass}>
                Webflow
              </Link>
              <Link href="/integrations" className={linkClass}>
                Framer
              </Link>
              <Link href="/integrations" className={linkClass}>
                Wix
              </Link>
              <Link href="/integrations" className={linkClass}>
                HubSpot
              </Link>
              <Link href="/integrations" className={linkClass}>
                Sanity
              </Link>
              <Link href="/integrations" className={linkClass}>
                Google Search Console
              </Link>
              <Link href="/integrations" className={linkClass}>
                Google Analytics
              </Link>
              <Link href="/integrations" className={linkClass}>
                Google Ads
              </Link>
              <Link href="/integrations" className={linkClass}>
                GitHub
              </Link>
              <Link href="/integrations" className={linkClass}>
                LinkedIn
              </Link>
              <Link href="/integrations" className={linkClass}>
                X (Twitter)
              </Link>
              <Link href="/integrations" className={linkClass}>
                WhatsApp
              </Link>
              <Link href="/integrations" className={linkClass}>
                Telegram
              </Link>
              <Link href="/integrations" className={linkClass}>
                TikTok
              </Link>
              <Link href="/integrations" className={linkClass}>
                Instagram
              </Link>
              <Link href="/integrations" className={linkClass}>
                Facebook
              </Link>
            </div>
          </div>

          {/* Column 4: COMPANY & AGENTS (Col 11-12 on desktop) */}
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

            <span className={headerMtClass}>
              AGENTS
            </span>
            <div className="flex flex-col gap-2.5">
              <Link href="/agents/influencer" className={linkClass}>
                Influencer
              </Link>
              <Link href="/agents/seo" className={linkClass}>
                Ads
              </Link>
              <Link href="/agents/reddit" className={linkClass}>
                Reddit
              </Link>
              <Link href="/agents/seo" className={linkClass}>
                SEO
              </Link>
              <Link href="/agents/writer" className={linkClass}>
                Writer
              </Link>
              <Link href="/agents/x-twitter" className={linkClass}>
                X (Twitter)
              </Link>
              <Link href="/agents/linkedin" className={linkClass}>
                LinkedIn
              </Link>
              <Link href="/agents/geo" className={linkClass}>
                GEO
              </Link>
              <Link href="/agents/coding" className={linkClass}>
                Coding
              </Link>
              <Link href="/agents/ugc-videos" className={linkClass}>
                UGC Videos
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
