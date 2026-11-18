"use client";

import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import OkizaLogo from "./OkizaLogo";

export default function Footer() {
  return (
    <footer className="relative z-10 w-full border-t border-[#1f1f23] bg-[#000000] text-[#a1a1aa] px-6 sm:px-12 md:px-16 pt-16 pb-6 mt-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid: Brand Column + 4 Link Columns */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Brand Info & AI Summaries (Col 1-4 on desktop) */}
          <div className="col-span-2 md:col-span-4 flex flex-col gap-5">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <OkizaLogo size={28} variant="white" />
              <span className="font-semibold text-xl text-[#ffffff] tracking-tight">
                Okiza
              </span>
            </Link>

            {/* Tagline */}
            <p className="text-sm text-[#a1a1aa] max-w-xs leading-relaxed">
              Your AI CMO for growth and marketing.
            </p>

            {/* Social Icons Row */}
            <div className="flex items-center gap-4 text-[#a1a1aa]">
              {/* X (Twitter) */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#ffffff] transition-colors"
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
                className="hover:text-[#ffffff] transition-colors"
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
                className="hover:text-[#ffffff] transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.8v8.37h-2.8v-8.37M7.86 6.3a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28" />
                </svg>
              </a>
            </div>

            {/* Request AI Summary of Okiza */}
            <div className="flex flex-col gap-2.5 mt-2">
              <span className="text-[10px] font-mono tracking-widest text-[#71717a] uppercase font-semibold">
                REQUEST AI SUMMARY OF OKIZA
              </span>

              <div className="flex items-center gap-3.5 text-[#a1a1aa]">
                {/* ChatGPT */}
                <a
                  href="https://chatgpt.com/?q=Summarize+Okiza+AI+CMO+and+Autonomous+Growth+Platform"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#ffffff] transition-colors"
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
                  className="hover:text-[#ffffff] transition-colors"
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
                  className="hover:text-[#ffffff] transition-colors"
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
            <span className="text-[11px] font-mono tracking-widest text-[#71717a] uppercase font-semibold mb-4 block">
              TOOLS
            </span>
            <div className="flex flex-col gap-2.5">
              <Link href="/tools/ai-humanizer" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                AI Humanizer
              </Link>
              <Link href="/tools/meta-description-generator" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                Meta Description Generator
              </Link>
              <Link href="/tools/meta-tag-checker" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                Meta Tag Checker
              </Link>
              <Link href="/tools/robots-txt-generator" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                Robots.txt Generator
              </Link>
              <Link href="/tools/sitemap-generator" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                Sitemap.xml Generator
              </Link>
              <Link href="/tools/utm-builder" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                UTM Builder
              </Link>
              <Link href="/tools/x-video-downloader" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                X Video Downloader
              </Link>
              <Link href="/tools/schema-generator" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                Schema Markup Generator
              </Link>
            </div>
          </div>

          {/* Column 2: USE CASES & RESOURCES (Col 7-8 on desktop) */}
          <div className="col-span-1 md:col-span-2 flex flex-col">
            <span className="text-[11px] font-mono tracking-widest text-[#71717a] uppercase font-semibold mb-4 block">
              USE CASES
            </span>
            <div className="flex flex-col gap-2.5">
              <Link href="/marketing-automation/saas" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                SaaS
              </Link>
              <Link href="/marketing-automation/startups" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                Startups
              </Link>
              <Link href="/marketing-automation/ecommerce" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                Ecommerce
              </Link>
              <Link href="/marketing-automation/agencies" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                Agencies
              </Link>
              <Link href="/marketing-automation/services" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                Professional Services
              </Link>
              <Link href="/marketing-automation/real-estate" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                Real Estate
              </Link>
              <Link href="/marketing-automation/financial-advisors" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                Financial Advisors
              </Link>
              <Link href="/marketing-automation/healthcare" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                Healthcare
              </Link>
              <Link href="/marketing-automation/recruiters" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                Recruiters
              </Link>
              <Link href="/marketing-automation/restaurants" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                Restaurants
              </Link>
              <Link href="/marketing-automation/law-firms" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                Law Firms
              </Link>
              <Link href="/marketing-automation/small-business" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                Small Business
              </Link>
              <Link href="/marketing-automation/saas" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                More Use Cases
              </Link>
            </div>

            <span className="text-[11px] font-mono tracking-widest text-[#71717a] uppercase font-semibold mt-8 mb-4 block">
              RESOURCES
            </span>
            <div className="flex flex-col gap-2.5">
              <Link href="/growth-methodology" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                Skills
              </Link>
              <Link href="/docs" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                Prompts
              </Link>
              <Link href="/stories" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                Launch Library
              </Link>
              <Link href="/growth-methodology" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                Viral Launch Handbook
              </Link>
            </div>
          </div>

          {/* Column 3: LEARN & INTEGRATIONS (Col 9-10 on desktop) */}
          <div className="col-span-1 md:col-span-2 flex flex-col">
            <span className="text-[11px] font-mono tracking-widest text-[#71717a] uppercase font-semibold mb-4 block">
              LEARN
            </span>
            <div className="flex flex-col gap-2.5">
              <Link href="/growth-methodology" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                Blog
              </Link>
              <Link href="/docs" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                Docs
              </Link>
              <Link href="/docs" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                LLMs.txt Generator
              </Link>
            </div>

            <span className="text-[11px] font-mono tracking-widest text-[#71717a] uppercase font-semibold mt-8 mb-4 block">
              INTEGRATIONS
            </span>
            <div className="flex flex-col gap-2.5">
              <Link
                href="/integrations"
                className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed inline-flex items-center gap-1.5"
              >
                <span>Okiza MCP</span>
                <span className="text-[9px] font-mono uppercase bg-[#27272a] text-[#e4e4e7] px-1.5 py-0.5 rounded font-semibold tracking-wider">
                  NEW
                </span>
              </Link>
              <Link href="/integrations" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                WordPress
              </Link>
              <Link href="/integrations" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                Webflow
              </Link>
              <Link href="/integrations" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                Framer
              </Link>
              <Link href="/integrations" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                Wix
              </Link>
              <Link href="/integrations" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                HubSpot
              </Link>
              <Link href="/integrations" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                Sanity
              </Link>
              <Link href="/integrations" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                Google Search Console
              </Link>
              <Link href="/integrations" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                Google Analytics
              </Link>
              <Link href="/integrations" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                Google Ads
              </Link>
              <Link href="/integrations" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                GitHub
              </Link>
              <Link href="/integrations" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                LinkedIn
              </Link>
              <Link href="/integrations" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                X (Twitter)
              </Link>
              <Link href="/integrations" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                WhatsApp
              </Link>
              <Link href="/integrations" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                Telegram
              </Link>
              <Link href="/integrations" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                TikTok
              </Link>
              <Link href="/integrations" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                Instagram
              </Link>
              <Link href="/integrations" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                Facebook
              </Link>
            </div>
          </div>

          {/* Column 4: COMPANY & AGENTS (Col 11-12 on desktop) */}
          <div className="col-span-1 md:col-span-2 flex flex-col">
            <span className="text-[11px] font-mono tracking-widest text-[#71717a] uppercase font-semibold mb-4 block">
              COMPANY
            </span>
            <div className="flex flex-col gap-2.5">
              <Link href="/pricing" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                About
              </Link>
              <Link href="/stories" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                Customers
              </Link>
              <Link href="/stories" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                Creators
              </Link>
              <Link href="/pricing" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                Pricing
              </Link>
              <Link href="/pricing" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                Agency
              </Link>
              <Link href="/pricing" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                Affiliates
              </Link>
              <Link href="/pricing" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                Careers
              </Link>
              <Link href="/faq" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                Contact
              </Link>
              <Link href="/pricing" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                Refund Policy
              </Link>
            </div>

            <span className="text-[11px] font-mono tracking-widest text-[#71717a] uppercase font-semibold mt-8 mb-4 block">
              AGENTS
            </span>
            <div className="flex flex-col gap-2.5">
              <Link href="/agents/influencer" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                Influencer
              </Link>
              <Link href="/agents/seo" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                Ads
              </Link>
              <Link href="/agents/reddit" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                Reddit
              </Link>
              <Link href="/agents/seo" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                SEO
              </Link>
              <Link href="/agents/writer" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                Writer
              </Link>
              <Link href="/agents/x-twitter" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                X (Twitter)
              </Link>
              <Link href="/agents/linkedin" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                LinkedIn
              </Link>
              <Link href="/agents/geo" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                GEO
              </Link>
              <Link href="/agents/coding" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                Coding
              </Link>
              <Link href="/agents/ugc-videos" className="text-[13px] text-[#a1a1aa] hover:text-[#ffffff] transition-colors leading-relaxed">
                UGC Videos
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar (Matching Reference Image 2) */}
        <div className="pt-6 pb-2 border-t border-[#1f1f23] flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-[#71717a]">
          {/* Copyright */}
          <div>
            Copyright © 2026 StreamOye Pte Ltd. All rights reserved.
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-[#71717a]">
            <Link href="/faq" className="hover:text-[#ffffff] transition-colors">
              Private Chat
            </Link>
            <span className="text-[#3f3f46]">·</span>
            <Link href="/faq" className="hover:text-[#ffffff] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-[#3f3f46]">·</span>
            <Link href="/faq" className="hover:text-[#ffffff] transition-colors">
              Cookie Policy
            </Link>
            <span className="text-[#3f3f46]">·</span>
            <button
              onClick={() => {}}
              className="hover:text-[#ffffff] transition-colors cursor-pointer"
            >
              Cookie preferences
            </button>
            <span className="text-[#3f3f46]">·</span>
            <Link href="/faq" className="hover:text-[#ffffff] transition-colors">
              Terms of Service
            </Link>
          </div>

          {/* Theme Switcher Pill */}
          <div className="flex items-center">
            <div className="inline-flex items-center rounded-full bg-[#18181b] border border-[#27272a] p-0.5 text-xs">
              <button
                type="button"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[#71717a] hover:text-[#ffffff] transition-colors cursor-pointer"
                aria-label="Light mode"
              >
                <Sun className="w-3.5 h-3.5" />
                <span>Light</span>
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#27272a] text-[#ffffff] shadow-sm cursor-pointer"
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
