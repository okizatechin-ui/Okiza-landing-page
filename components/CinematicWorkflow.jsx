"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Sparkles,
  Terminal,
  CheckCircle2,
  ArrowRight,
  Radio,
  Globe,
  Search,
  PenTool,
  CodeXml,
  Layers,
  Activity,
  Zap,
  ChevronRight,
  ShieldCheck,
  Bot,
  Send,
  TrendingUp,
  Cpu,
  RefreshCw,
  Clock,
  Maximize2,
} from "lucide-react";
import OkizaLogo from "./OkizaLogo";

export default function CinematicWorkflow() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [playbackSpeed, setPlaybackSpeed] = useState(1); // 1 = normal (5s), 2 = fast (2.5s)
  const [progress, setProgress] = useState(0);
  const [isApproved, setIsApproved] = useState(false);
  const [approvedFlash, setApprovedFlash] = useState(false);
  const [activeTab, setActiveTab] = useState("terminal"); // "terminal" | "agents" | "payload"
  const [simulatedMetrics, setSimulatedMetrics] = useState({
    signals: 24190,
    queries: 480,
    citations: 88.4,
    lift: 142,
  });

  const canvasRef = useRef(null);
  const sectionRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -2000, y: -2000 });

  // Stage RGB lookup for smooth background chromatic interpolation (Pure monochrome titanium)
  const stageColors = [
    [255, 255, 255],   // 01 Ingest: Pure White
    [240, 240, 245],   // 02 Synthesize: Platinum White
    [250, 250, 250],   // 03 Governance: Crisp White
    [235, 235, 240],   // 04 Deploy: Titanium
    [245, 245, 250],   // 05 Flywheel: Monochrome Ice
  ];

  // Ref for mouse physics
  const mouseRef = useRef({
    x: -2000,
    y: -2000,
    targetX: -2000,
    targetY: -2000,
    active: false,
    radius: 170,
  });

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
    if (mouseRef.current) {
      mouseRef.current.targetX = x;
      mouseRef.current.targetY = y;
      mouseRef.current.active = true;
    }
  };

  // 5 Stages of the Autonomous Growth Loop (Refined Monochrome Palette)
  const stages = [
    {
      id: "ingest",
      num: "01",
      name: "Ingest & Radar",
      badge: "Real-Time Telemetry",
      headline: "Continuous Multi-Signal Radar Scanning",
      description:
        "Okiza connects your domain, Google Search Console, and GA4 while simultaneously monitoring Reddit communities, competitor content updates, and emerging citations across ChatGPT and Perplexity.",
      accent: "#ffffff",
      accentGlow: "rgba(255, 255, 255, 0.18)",
      terminalLogs: [
        "[00:04:12] okiza.ingest(prepzue.com) -> Connecting OAuth2 GSC & GA4",
        "[00:04:13] radar.scanEngine('perplexity', 'chatgpt') -> 480 intent clusters indexed",
        "[00:04:14] telemetry.diffCompetitors() -> 3 high-impact ranking gaps found",
        "[00:04:15] signal.status: 24,192 events processed without rate limiting",
      ],
      kpis: [
        { label: "Signals Ingested", value: "24,192 /hr" },
        { label: "Answer Engine SOV", value: "88.4%" },
        { label: "Market Gaps Identified", value: "3 Clusters" },
      ],
    },
    {
      id: "synthesize",
      num: "02",
      name: "AI Core & Agents",
      badge: "Neural Synthesis",
      headline: "Okiza Autonomous AI CMO Squad",
      description:
        "The central Okiza engine synthesizes your Brand Graph (142 vector traits with 0% tone drift) and distributes concurrent mission briefs across 4 specialized autonomous sub-agents.",
      accent: "#ffffff",
      accentGlow: "rgba(255, 255, 255, 0.18)",
      terminalLogs: [
        "[00:04:16] okiza.brandGraph.synthesize() -> 142 vector traits loaded",
        "[00:04:17] agent.geo.optimize() -> Crafting JSON-LD schema & AEO answers",
        "[00:04:18] agent.writer.draft() -> 3,400-word authoritative guide compiled",
        "[00:04:19] agent.coder.lint() -> Pull Request technical SEO branch created",
      ],
      kpis: [
        { label: "Brand Voice Drift", value: "0.0%" },
        { label: "Specialized Agents", value: "4 Active" },
        { label: "ICP Persona Match", value: "100.0%" },
      ],
    },
    {
      id: "governance",
      num: "03",
      name: "Founder Approval",
      badge: "1-Click Governance",
      headline: "Human-in-the-Loop Verification Gate",
      description:
        "Zero rogue actions. Okiza compiles generated articles, schema additions, and pull requests into clean executive cards. Founders and marketing leads review and approve in 1 click.",
      accent: "#ffffff",
      accentGlow: "rgba(255, 255, 255, 0.18)",
      terminalLogs: [
        "[00:04:20] governance.gate.awaitApproval() -> 1 release package queued",
        "[00:04:21] payload.verifySafety() -> Zero hallucinations detected",
        "[00:04:22] founder.action: [⚡ Approve & Ship] clicked by Shaik Nazeer",
        "[00:04:22] governance.signPayload() -> Cryptographic token released for publish",
      ],
      kpis: [
        { label: "Governance Mode", value: "100% Governed" },
        { label: "Average Review Time", value: "12 seconds" },
        { label: "Compliance Score", value: "SOC2 Ready" },
      ],
    },
    {
      id: "deploy",
      num: "04",
      name: "Omnichannel Deploy",
      badge: "Native Platform Sync",
      headline: "Instant Zero-Code API Syndication",
      description:
        "Upon your 1-click approval, Okiza opens pull requests in your GitHub repo and publishes pre-formatted articles and schema directly into WordPress, Webflow, Framer, Wix, HubSpot, and X.",
      accent: "#ffffff",
      accentGlow: "rgba(255, 255, 255, 0.18)",
      terminalLogs: [
        "[00:04:23] api.webflow.publish() -> CMS collection synced (180ms)",
        "[00:04:23] api.wordpress.push() -> REST API draft deployed to production",
        "[00:04:24] api.github.pullRequest() -> PR #42 'feat(seo): schema fixes' opened",
        "[00:04:24] api.x.schedule() -> 6-tweet viral breakdown queued for 09:00 EST",
      ],
      kpis: [
        { label: "Native Platforms", value: "9 Supported" },
        { label: "Deployment Latency", value: "240ms" },
        { label: "Format Precision", value: "Pixel-Perfect" },
      ],
    },
    {
      id: "flywheel",
      num: "05",
      name: "Attribution Flywheel",
      badge: "Closed-Loop Learning",
      headline: "Continuous Telemetry Re-Tuning Loop",
      description:
        "The loop never sleeps. Live conversion telemetry and search rank gains flow directly back into Step 01, auto-tuning the next growth sprint with validated real-world win signals.",
      accent: "#ffffff",
      accentGlow: "rgba(255, 255, 255, 0.18)",
      terminalLogs: [
        "[00:04:25] telemetry.trackConversions() -> +142% organic traffic surge confirmed",
        "[00:04:26] attribution.calcCAC() -> CAC reduced by -48% across 90-day cohort",
        "[00:04:27] flywheel.feedBack() -> Reinforcing winning keyword clusters into Step 01",
        "[00:04:28] cycle.complete: Closed-loop continuous intelligence running 24/7",
      ],
      kpis: [
        { label: "Organic Lift", value: "+142%" },
        { label: "CAC Reduction", value: "-48%" },
        { label: "Loop Feedback", value: "100% Closed" },
      ],
    },
  ];

  // Auto-play timer
  useEffect(() => {
    if (!isPlaying) return;

    const intervalTime = 40;
    const baseDuration = 5500 / playbackSpeed;
    const stepIncrement = (intervalTime / baseDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveStep((curr) => (curr + 1) % stages.length);
          return 0;
        }
        return prev + stepIncrement;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPlaying, activeStep, playbackSpeed, stages.length]);

  // Subtle live metrics fluctuation to feel alive
  useEffect(() => {
    const metricTimer = setInterval(() => {
      setSimulatedMetrics((prev) => ({
        signals: prev.signals + Math.floor(Math.random() * 5),
        queries: prev.queries,
        citations: +(88 + Math.random() * 0.8).toFixed(1),
        lift: +(141.8 + Math.random() * 0.6).toFixed(1),
      }));
    }, 2000);
    return () => clearInterval(metricTimer);
  }, []);

  const handleStepClick = (idx) => {
    setActiveStep(idx);
    setProgress(0);
  };

  const handleManualApprove = () => {
    setIsApproved(true);
    setApprovedFlash(true);
    setTimeout(() => setApprovedFlash(false), 1200);

    // Fast-forward to next step (Deploy) after 800ms
    setTimeout(() => {
      setActiveStep(3); // Deploy step
      setProgress(0);
    }, 800);
  };

  const current = stages[activeStep];
  const currentRgb = stageColors[activeStep].join(", ");

  return (
    <section
      ref={sectionRef}
      id="workflow"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        if (mouseRef.current) mouseRef.current.active = true;
      }}
      onMouseLeave={() => {
        if (mouseRef.current) mouseRef.current.active = false;
        setMousePos({ x: -2000, y: -2000 });
      }}
      className="w-full pt-6 md:pt-10 pb-24 px-4 sm:px-8 lg:px-12 bg-transparent text-white relative overflow-hidden border-b border-[#262626]"
      data-component="@components/CinematicWorkflow.jsx"
    >
      {/* 1. Interactive Cursor Tracking Spotlight (High-End Subtle Ambient Glow) */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(750px circle at ${mousePos.x}px ${mousePos.y}px, rgba(${currentRgb}, 0.05), transparent 70%)`,
        }}
      />

      {/* 2. Dynamic Stage-Synchronized Volumetric Aura */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1300px] h-[600px] rounded-full blur-[160px] pointer-events-none transition-all duration-1000 opacity-25"
        style={{
          background: `radial-gradient(circle, ${current.accentGlow} 0%, rgba(0,0,0,0) 70%)`,
        }}
      />

      {/* 3. Deep Cinematic Vignette (Preserves Pure OLED Black Edges & Contrast) */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_90%_90%_at_50%_50%,transparent_35%,#000000_98%)]" />



      <div className="max-w-7xl mx-auto relative z-10">
        {/* SECTION HEADER */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#111114] border border-white/10 mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)]">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-[11px] font-mono tracking-[0.25em] text-zinc-300 uppercase font-semibold">
              The Autonomous Growth Engine
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] max-w-5xl mb-6">
            Insights are useful.<span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 via-white to-zinc-500">Execution creates compounding growth.</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
            From first telemetry ingestion to multi-platform deployment and closed-loop
            re-tuning. Watch how Okiza autonomously operates 24/7.
          </p>
        </div>

        {/* 5-STAGE CONNECTED PROGRESS RAIL */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {stages.map((stage, idx) => {
            const isActive = activeStep === idx;
            const isPast = idx < activeStep;

            return (
              <div
                key={stage.id}
                onClick={() => handleStepClick(idx)}
                className={`group relative rounded-2xl p-4 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between ${
                  isActive
                    ? "bg-[#121217] border border-white/50 shadow-[0_10px_30px_-5px_rgba(255,255,255,0.15)] -translate-y-1"
                    : "bg-[#09090b]/80 border border-[#1f1f23] hover:border-zinc-500 hover:bg-[#0e0e12]"
                }`}
              >
                {/* Active Laser Top Border */}
                {isActive && (
                  <div
                    className="absolute inset-x-0 top-0 h-[2px] shadow-[0_0_10px_currentColor]"
                    style={{ backgroundColor: stage.accent, color: stage.accent }}
                  />
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-[11px] font-mono px-2 py-0.5 rounded-md font-bold transition-colors ${
                        isActive
                          ? "bg-white text-black"
                          : "bg-white/5 text-zinc-500 border border-white/5 group-hover:text-zinc-300"
                      }`}
                    >
                      PHASE {stage.num}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500">
                      {isPast ? "✓ Done" : isActive ? "Active" : "Ready"}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight mb-1">
                    {stage.name}
                  </h3>
                  <p className="text-[11px] text-zinc-400 font-mono line-clamp-1">
                    {stage.badge}
                  </p>
                </div>

                {/* Progress bar */}
                <div className="mt-3 pt-2.5 border-t border-white/[0.06]">
                  {isActive ? (
                    <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-75 ease-linear"
                        style={{
                          width: `${progress}%`,
                          backgroundColor: stage.accent,
                          boxShadow: `0 0 8px ${stage.accent}`,
                        }}
                      />
                    </div>
                  ) : (
                    <div className="text-[10px] font-mono text-zinc-600 flex items-center justify-between">
                      <span>{isPast ? "Executed" : "Standby"}</span>
                      <span>{isPast ? "✓" : "→"}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================
            THE MAIN CINEMATIC WORKFLOW STAGE (THE "WOW" CENTERPIECE)
            ======================================================== */}
        <div className="relative rounded-3xl border border-white/15 bg-gradient-to-b from-[#0e0e13] via-[#09090c] to-[#040406] p-6 sm:p-10 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.95)] overflow-hidden">
          {/* Subtle Top Light Accent */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

          {/* Top Status HUD Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 border-b border-white/[0.08] gap-4">
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-black"
                style={{ backgroundColor: current.accent }}
              >
                <span className="font-mono text-xs">{current.num}</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {current.headline}
                  </h3>
                  <span className="hidden md:inline-flex px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-zinc-300">
                    {current.badge}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 mt-0.5 max-w-xl">
                  {current.description}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 self-end sm:self-auto shrink-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                <span>Simulation Active</span>
              </span>
            </div>
          </div>

          {/* ==========================================
              DYNAMIC STAGE VISUALIZER (INTERACTIVE HUD)
              ========================================== */}
          <div className="my-8">
            {/* STAGE 01: INGESTION & SCAN */}
            {activeStep === 0 && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Radar Hologram (Left 6 cols) */}
                <div className="lg:col-span-6 flex items-center justify-center py-6">
                  <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full border border-white/20 bg-white/[0.02] flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.06)]">
                    {/* Concentric rings */}
                    <div className="absolute inset-4 rounded-full border border-white/10" />
                    <div className="absolute inset-12 rounded-full border border-white/10" />
                    <div className="absolute inset-20 rounded-full border border-white/15" />
                    {/* Crosshairs */}
                    <div className="absolute inset-x-0 top-1/2 h-px bg-white/10" />
                    <div className="absolute inset-y-0 left-1/2 w-px bg-white/10" />

                    {/* Rotating Radar Sweep Beam */}
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                      <div className="w-full h-full origin-center animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_300deg,rgba(255,255,255,0.22)_360deg)]" />
                    </div>

                    {/* Blips appearing on radar */}
                    <div className="absolute top-12 right-16 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/10 border border-white/20 text-[10px] font-mono text-zinc-200 animate-pulse">
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      GSC Telemetry
                    </div>
                    <div className="absolute bottom-16 left-12 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/10 border border-white/20 text-[10px] font-mono text-zinc-200 animate-pulse">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                      Perplexity Gap
                    </div>
                    <div className="absolute top-24 left-14 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/10 border border-white/20 text-[10px] font-mono text-zinc-200 animate-pulse">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-100" />
                      GA4 Conversions
                    </div>

                    {/* Center Antenna */}
                    <div className="relative z-10 w-12 h-12 rounded-full bg-[#050508] border-2 border-white/70 flex items-center justify-center shadow-[0_0_25px_rgba(255,255,255,0.25)]">
                      <Radio className="w-5 h-5 text-white animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Live Feeds Table (Right 6 cols) */}
                <div className="lg:col-span-6 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                    <span>CONNECTED INGESTION SOURCES</span>
                    <span className="text-zinc-200 font-bold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                      SCANNING 24/7
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between hover:border-white/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/15 flex items-center justify-center text-white">
                        <Globe className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">Domain & Sitemap Spider</div>
                        <div className="text-[11px] text-zinc-400 font-mono">prepzue.com · 42 crawled routes</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-zinc-200 bg-white/10 px-2 py-0.5 rounded border border-white/20">
                      200 OK
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between hover:border-white/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/15 flex items-center justify-center text-white">
                        <Search className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">Google Search Console API</div>
                        <div className="text-[11px] text-zinc-400 font-mono">480 ranking queries synced</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-zinc-200 bg-white/10 px-2 py-0.5 rounded border border-white/20">
                      Live Feed
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between hover:border-white/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/15 flex items-center justify-center text-white">
                        <Radio className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">LLM Answer Engine Radar</div>
                        <div className="text-[11px] text-zinc-400 font-mono">ChatGPT & Perplexity share-of-voice</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-zinc-200 bg-white/10 px-2 py-0.5 rounded border border-white/20">
                      88.4% Cited
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* STAGE 02: OKIZA AI CORE & AGENTS */}
            {activeStep === 1 && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Center Core Reactor (Left 6 cols) */}
                <div className="lg:col-span-6 flex items-center justify-center py-6">
                  <div className="relative w-72 h-72 rounded-full border border-white/20 bg-white/[0.02] flex items-center justify-center shadow-[0_0_60px_rgba(255,255,255,0.08)]">
                    {/* Outer counter-rotating dashed ring */}
                    <div className="absolute inset-2 rounded-full border border-dashed border-white/25 animate-[spin_20s_linear_infinite]" />
                    <div className="absolute inset-6 rounded-full border border-white/15 animate-[spin_12s_linear_infinite_reverse]" />

                    {/* Central Mascot Pod */}
                    <div className="relative z-10 w-24 h-24 rounded-full bg-[#0a0a0e] border-2 border-white/70 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.25)]">
                      <OkizaLogo size={42} variant="white" />
                      <span className="text-[9px] font-mono font-bold tracking-widest text-zinc-300 mt-1 uppercase">
                        AI CMO
                      </span>
                    </div>

                    {/* 4 Satellite Agent Pods revolving */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-[#14141a] border border-white/20 text-[11px] font-mono text-white flex items-center gap-1.5 shadow-lg">
                      <Search className="w-3.5 h-3.5 text-zinc-200" />
                      <span>GEO / SEO Agent</span>
                    </div>

                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-[#14141a] border border-white/20 text-[11px] font-mono text-white flex items-center gap-1.5 shadow-lg">
                      <CodeXml className="w-3.5 h-3.5 text-zinc-200" />
                      <span>Coding PR Agent</span>
                    </div>

                    <div className="absolute top-1/2 -left-4 -translate-y-1/2 px-2.5 py-1 rounded-lg bg-[#14141a] border border-white/20 text-[11px] font-mono text-white flex items-center gap-1.5 shadow-lg">
                      <PenTool className="w-3.5 h-3.5 text-zinc-200" />
                      <span>Writer Agent</span>
                    </div>

                    <div className="absolute top-1/2 -right-4 -translate-y-1/2 px-2.5 py-1 rounded-lg bg-[#14141a] border border-white/20 text-[11px] font-mono text-white flex items-center gap-1.5 shadow-lg">
                      <Send className="w-3.5 h-3.5 text-zinc-200" />
                      <span>Social Agent</span>
                    </div>
                  </div>
                </div>

                {/* Synthesis Matrix Output (Right 6 cols) */}
                <div className="lg:col-span-6 space-y-3">
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/15">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-white">
                        Brand Voice & ICP Alignment
                      </span>
                      <span className="text-xs font-mono text-white font-bold">
                        100% Locked
                      </span>
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      Okiza encodes your company values, tone rules, and customer pain points
                      into a 142-dimensional vector space. Every piece of code and copy stays
                      true to your brand without generic AI buzzwords.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                    <div className="p-3 rounded-lg bg-white/[0.02] border border-white/10">
                      <span className="text-zinc-500 block mb-1">Generated Output</span>
                      <span className="text-white font-bold text-sm">18 Asset Variants</span>
                    </div>
                    <div className="p-3 rounded-lg bg-white/[0.02] border border-white/10">
                      <span className="text-zinc-500 block mb-1">Hallucination Margin</span>
                      <span className="text-white font-bold text-sm">0.0% Verified</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-white/5 border border-white/15 text-xs font-mono text-zinc-200 flex items-center justify-between">
                    <span>Autonomous Sprint Plan: Ready for Founder Gate</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            )}

            {/* STAGE 03: FOUNDER GOVERNANCE GATE */}
            {activeStep === 2 && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Interactive Approval Card (Left 7 cols) */}
                <div className="lg:col-span-7">
                  <div
                    className={`rounded-2xl border p-6 transition-all duration-300 ${
                      isApproved
                        ? "bg-[#111115] border-white/40 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
                        : "bg-[#101014] border-white/20 shadow-[0_0_30px_rgba(0,0,0,0.8)]"
                    }`}
                  >
                    <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                      <div className="flex items-center gap-2">
                        <ShieldCheck
                          className={`w-5 h-5 ${
                            isApproved ? "text-white" : "text-zinc-400"
                          }`}
                        />
                        <span className="text-sm font-semibold text-white">
                          Founder Governance Review
                        </span>
                      </div>
                      <span
                        className={`text-xs font-mono px-2.5 py-0.5 rounded-full font-bold ${
                          isApproved
                            ? "bg-white/20 text-white border border-white/40"
                            : "bg-white/10 text-zinc-300 border border-white/20"
                        }`}
                      >
                        {isApproved ? "✓ APPROVED BY FOUNDER" : "● PENDING APPROVAL"}
                      </span>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                        <div>
                          <div className="text-xs font-medium text-white">
                            Long-Form Guide: &ldquo;Answer Engine Optimization in 2026&rdquo;
                          </div>
                          <div className="text-[11px] text-zinc-400 font-mono">
                            Targeting: WordPress & Webflow CMS · 3,420 words
                          </div>
                        </div>
                        <span className="text-[10px] font-mono text-zinc-300 bg-white/10 px-2 py-0.5 rounded">
                          Ready
                        </span>
                      </div>

                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                        <div>
                          <div className="text-xs font-medium text-white">
                            GitHub PR #42: &ldquo;feat(seo): Add JSON-LD schema & robots.txt&rdquo;
                          </div>
                          <div className="text-[11px] text-zinc-400 font-mono">
                            Targeting: github.com/your-repo · 3 files modified
                          </div>
                        </div>
                        <span className="text-[10px] font-mono text-zinc-300 bg-white/10 px-2 py-0.5 rounded">
                          Linted
                        </span>
                      </div>
                    </div>

                    {/* Interactive 1-Click Action Button */}
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                      <button
                        onClick={handleManualApprove}
                        className={`w-full sm:w-auto flex-1 py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-lg ${
                          isApproved
                            ? "bg-zinc-100 text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                            : "bg-white hover:bg-zinc-200 text-black shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:scale-[1.02] active:scale-[0.98]"
                        }`}
                      >
                        {isApproved ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 fill-black text-white" />
                            <span>Approved! Deploying to Stack...</span>
                          </>
                        ) : (
                          <>
                            <Zap className="w-4 h-4 fill-black" />
                            <span>1-Click Approve & Ship</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => setIsApproved(!isApproved)}
                        className="text-xs font-mono text-zinc-400 hover:text-white px-3 py-2 rounded-lg bg-white/5 border border-white/10 cursor-pointer"
                      >
                        {isApproved ? "Reset Gate" : "Inspect Diff"}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right 5 cols: Enterprise Peace of Mind */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">
                      Zero Rogue Publish Guarantee
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      While Okiza automates the heavy research, drafting, and coding, you
                      retain 100% sovereign authority. Nothing publishes or merges to master
                      without explicit cryptographic approval.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/15 text-xs font-mono text-zinc-300 flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-white shrink-0" />
                    <span>Audit trail cryptographically logged to your company dashboard</span>
                  </div>
                </div>
              </div>
            )}

            {/* STAGE 04: OMNICHANNEL DEPLOYMENT */}
            {activeStep === 3 && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* 6 Native Platforms Grid (Left 7 cols) */}
                <div className="lg:col-span-7">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { name: "Webflow", status: "Collection Synced", latency: "180ms" },
                      { name: "WordPress", status: "REST API Pushed", latency: "210ms" },
                      { name: "Framer", status: "Design Tokens Live", latency: "140ms" },
                      { name: "GitHub", status: "PR #42 Opened", latency: "320ms" },
                      { name: "X (Twitter)", status: "Thread Scheduled", latency: "90ms" },
                      { name: "HubSpot", status: "Lead Capture Ready", latency: "240ms" },
                    ].map((plat) => (
                      <div
                        key={plat.name}
                        className="p-3.5 rounded-xl bg-white/[0.03] border border-white/15 flex flex-col justify-between hover:bg-white/[0.05] hover:border-white/30 transition-all shadow-sm"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-semibold text-white">
                            {plat.name}
                          </span>
                          <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                        </div>
                        <div className="text-[11px] text-zinc-400 font-mono">
                          {plat.status}
                        </div>
                        <div className="text-[10px] text-zinc-300 font-mono mt-2 flex items-center justify-between">
                          <span>✓ Synced</span>
                          <span>{plat.latency}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right 5 cols: Multi-Platform Sync stats */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/15">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                      <span className="text-xs font-bold text-white font-mono uppercase">
                        Zero Context Switching
                      </span>
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      You never need to log into 6 different dashboards to paste copy or copy
                      HTML tags. Okiza synchronizes natively across your exact existing tech stack.
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/10 text-xs font-mono text-zinc-300 flex items-center justify-between">
                    <span>Active Syndication Mesh</span>
                    <span className="text-white font-bold">9 Native Platforms</span>
                  </div>
                </div>
              </div>
            )}

            {/* STAGE 05: CLOSED-LOOP ATTRIBUTION FLYWHEEL */}
            {activeStep === 4 && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Live Ascending Telemetry Chart (Left 7 cols) */}
                <div className="lg:col-span-7">
                  <div className="rounded-2xl border border-white/20 bg-[#08080c] p-5 shadow-[0_0_40px_rgba(255,255,255,0.06)]">
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                      <div>
                        <div className="text-xs font-mono text-zinc-400 font-bold">
                          CLOSED-LOOP ATTRIBUTION SURGE
                        </div>
                        <div className="text-lg font-bold text-white font-mono">
                          +{simulatedMetrics.lift}% Organic Trajectory
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-white/10 border border-white/20 text-xs font-mono text-white font-bold">
                        Loop Active
                      </span>
                    </div>

                    {/* SVG Line Graph */}
                    <div className="relative h-44 w-full">
                      <svg viewBox="0 0 500 160" className="w-full h-full" fill="none">
                        <defs>
                          <linearGradient id="monochromeGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        {/* Grid lines */}
                        <line x1="0" y1="40" x2="500" y2="40" stroke="rgba(255,255,255,0.05)" />
                        <line x1="0" y1="80" x2="500" y2="80" stroke="rgba(255,255,255,0.05)" />
                        <line x1="0" y1="120" x2="500" y2="120" stroke="rgba(255,255,255,0.05)" />

                        {/* Fill area */}
                        <path
                          d="M0,140 Q100,135 200,105 T350,60 T500,20 L500,160 L0,160 Z"
                          fill="url(#monochromeGrad)"
                        />
                        {/* Animated curve stroke */}
                        <path
                          d="M0,140 Q100,135 200,105 T350,60 T500,20"
                          stroke="#ffffff"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                        {/* Pulsing endpoint dot */}
                        <circle cx="500" cy="20" r="5" fill="#ffffff" />
                        <circle cx="500" cy="20" r="10" fill="#ffffff" opacity="0.3" className="animate-ping" />
                      </svg>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 pt-3 border-t border-white/[0.06]">
                      <span>Baseline Day 0</span>
                      <span>Day 30 (+48%)</span>
                      <span>Day 60 (+92%)</span>
                      <span className="text-white font-bold">Day 90 (+142%)</span>
                    </div>
                  </div>
                </div>

                {/* Right 5 cols: Re-feeding into Step 01 */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/15">
                    <div className="flex items-center gap-2 mb-2 text-white">
                      <RefreshCw className="w-4 h-4 animate-spin text-white" />
                      <span className="text-xs font-mono font-bold uppercase">
                        The Compounding Flywheel
                      </span>
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      Every conversion and click is tracked back to its original article or
                      answer citation. Winning patterns automatically feed back into Step 01
                      to refine the next sprint.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="p-3 rounded-lg bg-white/[0.03] border border-white/10">
                      <span className="text-zinc-500 block text-[10px]">CAC REDUCTION</span>
                      <span className="text-white font-bold text-base">-48%</span>
                    </div>
                    <div className="p-3 rounded-lg bg-white/[0.03] border border-white/10">
                      <span className="text-zinc-500 block text-[10px]">RE-FEED SIGNAL</span>
                      <span className="text-white font-bold text-base">Continuous</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setActiveStep(0);
                      setProgress(0);
                    }}
                    className="w-full py-2.5 rounded-xl bg-white/5 border border-white/15 text-zinc-200 hover:bg-white/10 hover:text-white font-mono text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Follow the feedback loop back to Step 01</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* =======================================================
              INTERACTIVE LOGS / TERMINAL DRAWER AT BOTTOM OF STAGE
              ======================================================= */}
          <div className="rounded-2xl bg-[#060608] border border-white/10 overflow-hidden">
            {/* Drawer Tabs */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#0b0b0f] border-b border-white/[0.08] text-xs font-mono">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-zinc-400" />
                <span className="text-zinc-300 font-semibold">okiza-runtime://stream</span>
                <span className="text-zinc-600">|</span>
                <span className="text-zinc-200 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Live Event Bus
                </span>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-zinc-500">
                <span>Phase {current.num} / 05</span>
                <span>·</span>
                <span>Latency 42ms</span>
              </div>
            </div>

            {/* Terminal Lines */}
            <div className="p-4 font-mono text-xs text-zinc-300 space-y-1.5 overflow-x-auto">
              {current.terminalLogs.map((log, lIdx) => (
                <div key={lIdx} className="flex items-center gap-2">
                  <span className="text-zinc-600 select-none">&gt;</span>
                  <span
                    className={
                      lIdx === current.terminalLogs.length - 1
                        ? "text-white font-semibold"
                        : "text-zinc-400"
                    }
                  >
                    {log}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* BOTTOM CALL TO ACTION ROW */}
          <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
              <span className="text-xs text-zinc-300 font-mono">
                Ready to put your entire marketing and growth loop on autopilot?
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/dashboard"
                className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors flex items-center gap-1.5"
              >
                <span>Launch Interactive Dashboard</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
