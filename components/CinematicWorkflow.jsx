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
import { useTheme } from "@/context/ThemeContext";

export default function CinematicWorkflow() {
  const { theme } = useTheme();
  const isLight = theme === "light";

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

  const sectionRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -2000, y: -2000 });

  // Stage RGB lookup for smooth background chromatic interpolation
  const stageColors = [
    [255, 255, 255],   // 01 Ingest: Pure White
    [240, 240, 245],   // 02 Synthesize: Platinum White
    [250, 250, 250],   // 03 Governance: Crisp White
    [235, 235, 240],   // 04 Deploy: Titanium
    [245, 245, 250],   // 05 Flywheel: Monochrome Ice
  ];

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

  // 5 Stages of the Autonomous Growth Loop
  const stages = [
    {
      id: "ingest",
      num: "01",
      name: "Ingest & Radar",
      badge: "Real-Time Telemetry",
      headline: "Continuous Multi-Signal Radar Scanning",
      description:
        "Okiza connects your domain, Google Search Console, and GA4 while simultaneously monitoring Reddit communities, competitor content updates, and emerging citations across ChatGPT and Perplexity.",
      accent: isLight ? "#000000" : "#ffffff",
      accentGlow: isLight ? "rgba(0, 0, 0, 0.04)" : "rgba(255, 255, 255, 0.18)",
      terminalLogs: [
        "[00:04:12] okiza.ingest(prepzue.com) -> Connecting OAuth2 GSC & GA4",
        "[00:04:13] radar.scanEngine('perplexity', 'chatgpt') -> 480 intent clusters indexed",
        "[00:04:14] telemetry.diffCompetitors() -> 3 high-impact ranking gaps found",
        "[00:04:15] signal.status: 24,192 events processed without rate limiting",
      ],
      kpis: [
        { label: "Signals Ingested", value: "24,192 /hr" },
        { label: "Answer Engines", value: "4 Tracked" },
        { label: "Sync Latency", value: "42ms" },
      ],
    },
    {
      id: "synthesize",
      num: "02",
      name: "AI Core & Agents",
      badge: "Neural Synthesis",
      headline: "Autonomous Multi-Agent Synthesis Matrix",
      description:
        "Okiza's AI CMO orchestrates 9 specialized agents: the GEO / SEO Agent identifies winning keywords, the Writer Agent drafts brand-accurate copy, the Coding Agent produces JSON-LD schema, and the Social Agent crafts community hooks.",
      accent: isLight ? "#000000" : "#ffffff",
      accentGlow: isLight ? "rgba(0, 0, 0, 0.04)" : "rgba(255, 255, 255, 0.18)",
      terminalLogs: [
        "[00:04:16] agent.geo: synthesized 12 answer-engine citation anchors",
        "[00:04:17] agent.writer: drafted 3,420-word pillar article matching brand voice",
        "[00:04:18] agent.coding: generated schema.org SoftwareApplication JSON-LD snippet",
        "[00:04:19] agent.social: generated 4 high-authority Reddit responses + X thread",
      ],
      kpis: [
        { label: "Agents Running", value: "9 Active" },
        { label: "Draft Quality", value: "99.4%" },
        { label: "Brand Tone Match", value: "100%" },
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
      accent: isLight ? "#000000" : "#ffffff",
      accentGlow: isLight ? "rgba(0, 0, 0, 0.04)" : "rgba(255, 255, 255, 0.18)",
      terminalLogs: [
        "[00:04:20] governance.gate.awaitApproval() -> 1 release package queued",
        "[00:04:21] payload.verifySafety() -> Zero hallucinations detected",
        "[00:04:22] founder.action: [⚡ Approve & Ship] clicked by Founder",
        "[00:04:22] governance.signPayload() -> Cryptographic token released for publish",
      ],
      kpis: [
        { label: "Audit Trail", value: "Cryptographic" },
        { label: "Approval Time", value: "< 15 sec" },
        { label: "Hallucination Risk", value: "0.0%" },
      ],
    },
    {
      id: "deploy",
      num: "04",
      name: "Omnichannel Deploy",
      badge: "Native Platform Sync",
      headline: "Zero-Context-Switch Publishing Network",
      description:
        "Once approved, Okiza pushes natively into Webflow, WordPress, Framer, Wix, HubSpot, GitHub, and X (Twitter) without requiring any copy-pasting or manual configuration.",
      accent: isLight ? "#000000" : "#ffffff",
      accentGlow: isLight ? "rgba(0, 0, 0, 0.04)" : "rgba(255, 255, 255, 0.18)",
      terminalLogs: [
        "[00:04:23] publish.webflow(collectionId='articles') -> Pushed 1 new post (Status: Published)",
        "[00:04:24] git.push('prepzue/web', branch='okiza/geo-schema-update') -> PR #42 opened",
        "[00:04:25] syndication.x('okiza_growth') -> Scheduled 4-tweet thread with rich card",
        "[00:04:26] publish.wordpress(restAPI) -> Sitemaps refreshed and pinged to Google",
      ],
      kpis: [
        { label: "Connected Platforms", value: "9 Synced" },
        { label: "API Push Latency", value: "180ms" },
        { label: "Manual Steps", value: "0 Required" },
      ],
    },
    {
      id: "flywheel",
      num: "05",
      name: "Attribution Flywheel",
      badge: "Closed-Loop Learning",
      headline: "Continuous Closed-Loop Attribution Feedback",
      description:
        "Every click, LLM citation, and customer conversion is tracked back to its original article or answer mention. Winning angles automatically retune the agents for compounding organic growth.",
      accent: isLight ? "#000000" : "#ffffff",
      accentGlow: isLight ? "rgba(0, 0, 0, 0.04)" : "rgba(255, 255, 255, 0.18)",
      terminalLogs: [
        "[00:04:27] attribution.trackConversion() -> 18 Signups via Perplexity AI source",
        "[00:04:28] flywheel.updateWeights() -> Query 'AI CMO tools' promoted to high priority",
        "[00:04:29] model.feedbackLoop() -> Re-feeding telemetry back to Phase 01 radar",
        "[00:04:30] growth.compounding: +142% total organic trajectory locked in 90 days",
      ],
      kpis: [
        { label: "Citation Lift", value: "+142%" },
        { label: "Organic CAC", value: "-48%" },
        { label: "Model Re-tuning", value: "Continuous" },
      ],
    },
  ];

  // Auto-advance loop when playing
  useEffect(() => {
    if (!isPlaying) return;

    const intervalTime = 50; // smooth 20fps update
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

  // Subtle live metrics fluctuation
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
      className={`w-full pt-10 md:pt-14 pb-24 px-4 sm:px-8 lg:px-12 relative overflow-hidden border-b transition-colors ${
        isLight
          ? "bg-white text-zinc-950 border-zinc-200"
          : "bg-transparent text-white border-[#262626]"
      }`}
      data-component="@components/CinematicWorkflow.jsx"
    >
      {/* Dark mode only ambient visual effects */}
      {!isLight && (
        <>
          {/* Interactive Cursor Tracking Spotlight */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(750px circle at ${mousePos.x}px ${mousePos.y}px, rgba(${currentRgb}, 0.05), transparent 70%)`,
            }}
          />

          {/* Dynamic Stage-Synchronized Volumetric Aura */}
          <div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1300px] h-[600px] rounded-full blur-[160px] pointer-events-none transition-all duration-1000 opacity-25"
            style={{
              background: `radial-gradient(circle, ${current.accentGlow} 0%, rgba(0,0,0,0) 70%)`,
            }}
          />

          {/* Deep Cinematic Vignette */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_90%_90%_at_50%_50%,transparent_35%,#000000_98%)]" />
        </>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* SECTION HEADER */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div
            className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full mb-6 backdrop-blur-md border ${
              isLight
                ? "bg-zinc-100 border-zinc-200 shadow-sm"
                : "bg-[#111114] border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full animate-pulse ${
                isLight ? "bg-black" : "bg-white"
              }`}
            />
            <span
              className={`text-[11px] font-mono tracking-[0.25em] uppercase font-semibold ${
                isLight ? "text-zinc-700" : "text-zinc-300"
              }`}
            >
              The Autonomous Growth Engine
            </span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] max-w-5xl mb-6 ${
              isLight ? "text-zinc-950" : "text-white"
            }`}
          >
            Insights are useful.{" "}
            <span
              className={`text-transparent bg-clip-text ${
                isLight
                  ? "bg-gradient-to-r from-zinc-700 via-zinc-900 to-zinc-500"
                  : "bg-gradient-to-r from-zinc-300 via-white to-zinc-500"
              }`}
            >
              Execution creates compounding growth.
            </span>
          </h2>

          <p
            className={`text-base sm:text-lg max-w-2xl leading-relaxed ${
              isLight ? "text-zinc-600" : "text-zinc-400"
            }`}
          >
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
                    ? isLight
                      ? "bg-white border-2 border-zinc-950 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.08)] -translate-y-1"
                      : "bg-[#121217] border border-white/50 shadow-[0_10px_30px_-5px_rgba(255,255,255,0.15)] -translate-y-1"
                    : isLight
                    ? "bg-zinc-50/80 border border-zinc-200 hover:border-zinc-400 hover:bg-zinc-100/60"
                    : "bg-[#09090b]/80 border border-[#1f1f23] hover:border-zinc-500 hover:bg-[#0e0e12]"
                }`}
              >
                {/* Active Laser Top Border */}
                {isActive && (
                  <div
                    className="absolute inset-x-0 top-0 h-[3px]"
                    style={{ backgroundColor: isLight ? "#000000" : stage.accent }}
                  />
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-[11px] font-mono px-2 py-0.5 rounded-md font-bold transition-colors ${
                        isActive
                          ? isLight
                            ? "bg-black text-white"
                            : "bg-white text-black"
                          : isLight
                          ? "bg-zinc-200/70 text-zinc-700 border border-zinc-200"
                          : "bg-white/5 text-zinc-500 border border-white/5 group-hover:text-zinc-300"
                      }`}
                    >
                      PHASE {stage.num}
                    </span>
                    <span
                      className={`text-[10px] font-mono ${
                        isLight ? "text-zinc-500" : "text-zinc-500"
                      }`}
                    >
                      {isPast ? "✓ Done" : isActive ? "Active" : "Ready"}
                    </span>
                  </div>

                  <h3
                    className={`text-sm sm:text-base font-semibold tracking-tight mb-1 ${
                      isLight ? "text-zinc-950" : "text-white"
                    }`}
                  >
                    {stage.name}
                  </h3>
                  <p
                    className={`text-[11px] font-mono line-clamp-1 ${
                      isLight ? "text-zinc-500" : "text-zinc-400"
                    }`}
                  >
                    {stage.badge}
                  </p>
                </div>

                {/* Progress bar */}
                <div
                  className={`mt-3 pt-2.5 border-t ${
                    isLight ? "border-zinc-200" : "border-white/[0.06]"
                  }`}
                >
                  {isActive ? (
                    <div
                      className={`w-full h-1.5 rounded-full overflow-hidden ${
                        isLight ? "bg-zinc-200" : "bg-zinc-800"
                      }`}
                    >
                      <div
                        className="h-full rounded-full transition-all duration-75 ease-linear"
                        style={{
                          width: `${progress}%`,
                          backgroundColor: isLight ? "#000000" : stage.accent,
                        }}
                      />
                    </div>
                  ) : (
                    <div
                      className={`text-[10px] font-mono flex items-center justify-between ${
                        isLight ? "text-zinc-500" : "text-zinc-600"
                      }`}
                    >
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
        <div
          className={`relative rounded-3xl border p-6 sm:p-10 overflow-hidden transition-all ${
            isLight
              ? "bg-white border-zinc-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.07)] text-zinc-950"
              : "border-white/15 bg-gradient-to-b from-[#0e0e13] via-[#09090c] to-[#040406] shadow-[0_30px_90px_-20px_rgba(0,0,0,0.95)] text-white"
          }`}
        >
          {/* Top Status HUD Header */}
          <div
            className={`flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 border-b gap-4 ${
              isLight ? "border-zinc-200" : "border-white/[0.08]"
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold ${
                  isLight ? "bg-black text-white" : "bg-white text-black"
                }`}
              >
                <span className="font-mono text-xs">{current.num}</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3
                    className={`text-xl font-bold tracking-tight ${
                      isLight ? "text-zinc-950" : "text-white"
                    }`}
                  >
                    {current.headline}
                  </h3>
                  <span
                    className={`hidden md:inline-flex px-2 py-0.5 rounded text-[10px] font-mono border ${
                      isLight
                        ? "bg-zinc-100 border-zinc-200 text-zinc-700"
                        : "bg-white/5 border-white/10 text-zinc-300"
                    }`}
                  >
                    {current.badge}
                  </span>
                </div>
                <p
                  className={`text-xs mt-0.5 max-w-xl ${
                    isLight ? "text-zinc-600" : "text-zinc-400"
                  }`}
                >
                  {current.description}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 self-end sm:self-auto shrink-0">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-mono ${
                  isLight
                    ? "bg-zinc-100 border-zinc-200 text-zinc-700 font-semibold"
                    : "bg-white/5 border-white/10 text-zinc-300"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full animate-ping ${
                    isLight ? "bg-black" : "bg-white"
                  }`}
                />
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
                  <div
                    className={`relative w-64 h-64 sm:w-72 sm:h-72 rounded-full border flex items-center justify-center ${
                      isLight
                        ? "border-zinc-200 bg-zinc-50/60 shadow-inner"
                        : "border-white/20 bg-white/[0.02] shadow-[0_0_50px_rgba(255,255,255,0.06)]"
                    }`}
                  >
                    {/* Concentric rings */}
                    <div
                      className={`absolute inset-4 rounded-full border ${
                        isLight ? "border-zinc-200" : "border-white/10"
                      }`}
                    />
                    <div
                      className={`absolute inset-12 rounded-full border ${
                        isLight ? "border-zinc-200" : "border-white/10"
                      }`}
                    />
                    <div
                      className={`absolute inset-20 rounded-full border ${
                        isLight ? "border-zinc-300" : "border-white/15"
                      }`}
                    />
                    {/* Crosshairs */}
                    <div
                      className={`absolute inset-x-0 top-1/2 h-px ${
                        isLight ? "bg-zinc-200" : "bg-white/10"
                      }`}
                    />
                    <div
                      className={`absolute inset-y-0 left-1/2 w-px ${
                        isLight ? "bg-zinc-200" : "bg-white/10"
                      }`}
                    />

                    {/* Rotating Radar Sweep Beam */}
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                      <div
                        className={`w-full h-full origin-center animate-[spin_4s_linear_infinite] ${
                          isLight
                            ? "bg-[conic-gradient(from_0deg,transparent_0_300deg,rgba(0,0,0,0.08)_360deg)]"
                            : "bg-[conic-gradient(from_0deg,transparent_0_300deg,rgba(255,255,255,0.22)_360deg)]"
                        }`}
                      />
                    </div>

                    {/* Blips appearing on radar */}
                    <div
                      className={`absolute top-12 right-16 flex items-center gap-1.5 px-2 py-0.5 rounded-full border text-[10px] font-mono animate-pulse shadow-sm ${
                        isLight
                          ? "bg-white border-zinc-200 text-zinc-800"
                          : "bg-white/10 border-white/20 text-zinc-200"
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${isLight ? "bg-black" : "bg-white"}`} />
                      GSC Telemetry
                    </div>
                    <div
                      className={`absolute bottom-16 left-12 flex items-center gap-1.5 px-2 py-0.5 rounded-full border text-[10px] font-mono animate-pulse shadow-sm ${
                        isLight
                          ? "bg-white border-zinc-200 text-zinc-800"
                          : "bg-white/10 border-white/20 text-zinc-200"
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${isLight ? "bg-zinc-600" : "bg-zinc-300"}`} />
                      Perplexity Gap
                    </div>
                    <div
                      className={`absolute top-24 left-14 flex items-center gap-1.5 px-2 py-0.5 rounded-full border text-[10px] font-mono animate-pulse shadow-sm ${
                        isLight
                          ? "bg-white border-zinc-200 text-zinc-800"
                          : "bg-white/10 border-white/20 text-zinc-200"
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${isLight ? "bg-black" : "bg-zinc-100"}`} />
                      GA4 Conversions
                    </div>

                    {/* Center Antenna */}
                    <div
                      className={`relative z-10 w-12 h-12 rounded-full border-2 flex items-center justify-center shadow-md ${
                        isLight
                          ? "bg-white border-zinc-300 text-zinc-950"
                          : "bg-[#050508] border-white/70 text-white shadow-[0_0_25px_rgba(255,255,255,0.25)]"
                      }`}
                    >
                      <Radio className="w-5 h-5 animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Live Feeds Table (Right 6 cols) */}
                <div className="lg:col-span-6 space-y-3">
                  <div
                    className={`flex items-center justify-between text-xs font-mono mb-2 ${
                      isLight ? "text-zinc-500 font-semibold" : "text-zinc-400"
                    }`}
                  >
                    <span>CONNECTED INGESTION SOURCES</span>
                    <span
                      className={`font-bold flex items-center gap-1.5 ${
                        isLight ? "text-zinc-900" : "text-zinc-200"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full animate-ping ${
                          isLight ? "bg-black" : "bg-white"
                        }`}
                      />
                      SCANNING 24/7
                    </span>
                  </div>

                  <div
                    className={`p-3.5 rounded-xl border flex items-center justify-between transition-colors ${
                      isLight
                        ? "bg-zinc-50 border-zinc-200 hover:border-zinc-300"
                        : "bg-white/[0.03] border-white/10 hover:border-white/30"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-lg border flex items-center justify-center ${
                          isLight
                            ? "bg-white border-zinc-200 text-zinc-900 shadow-sm"
                            : "bg-white/5 border-white/15 text-white"
                        }`}
                      >
                        <Globe className="w-4 h-4" />
                      </div>
                      <div>
                        <div
                          className={`text-xs font-semibold ${
                            isLight ? "text-zinc-950" : "text-white"
                          }`}
                        >
                          Domain & Sitemap Spider
                        </div>
                        <div
                          className={`text-[11px] font-mono ${
                            isLight ? "text-zinc-500" : "text-zinc-400"
                          }`}
                        >
                          prepzue.com · 42 crawled routes
                        </div>
                      </div>
                    </div>
                    <span
                      className={`text-xs font-mono px-2 py-0.5 rounded border ${
                        isLight
                          ? "bg-white text-zinc-800 border-zinc-200 font-bold shadow-sm"
                          : "text-zinc-200 bg-white/10 border-white/20"
                      }`}
                    >
                      200 OK
                    </span>
                  </div>

                  <div
                    className={`p-3.5 rounded-xl border flex items-center justify-between transition-colors ${
                      isLight
                        ? "bg-zinc-50 border-zinc-200 hover:border-zinc-300"
                        : "bg-white/[0.03] border-white/10 hover:border-white/30"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-lg border flex items-center justify-center ${
                          isLight
                            ? "bg-white border-zinc-200 text-zinc-900 shadow-sm"
                            : "bg-white/5 border-white/15 text-white"
                        }`}
                      >
                        <Search className="w-4 h-4" />
                      </div>
                      <div>
                        <div
                          className={`text-xs font-semibold ${
                            isLight ? "text-zinc-950" : "text-white"
                          }`}
                        >
                          Google Search Console API
                        </div>
                        <div
                          className={`text-[11px] font-mono ${
                            isLight ? "text-zinc-500" : "text-zinc-400"
                          }`}
                        >
                          480 ranking queries synced
                        </div>
                      </div>
                    </div>
                    <span
                      className={`text-xs font-mono px-2 py-0.5 rounded border ${
                        isLight
                          ? "bg-white text-zinc-800 border-zinc-200 font-bold shadow-sm"
                          : "text-zinc-200 bg-white/10 border-white/20"
                      }`}
                    >
                      Live Feed
                    </span>
                  </div>

                  <div
                    className={`p-3.5 rounded-xl border flex items-center justify-between transition-colors ${
                      isLight
                        ? "bg-zinc-50 border-zinc-200 hover:border-zinc-300"
                        : "bg-white/[0.03] border-white/10 hover:border-white/30"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-lg border flex items-center justify-center ${
                          isLight
                            ? "bg-white border-zinc-200 text-zinc-900 shadow-sm"
                            : "bg-white/5 border-white/15 text-white"
                        }`}
                      >
                        <Radio className="w-4 h-4" />
                      </div>
                      <div>
                        <div
                          className={`text-xs font-semibold ${
                            isLight ? "text-zinc-950" : "text-white"
                          }`}
                        >
                          LLM Answer Engine Radar
                        </div>
                        <div
                          className={`text-[11px] font-mono ${
                            isLight ? "text-zinc-500" : "text-zinc-400"
                          }`}
                        >
                          ChatGPT & Perplexity share-of-voice
                        </div>
                      </div>
                    </div>
                    <span
                      className={`text-xs font-mono px-2 py-0.5 rounded border ${
                        isLight
                          ? "bg-white text-zinc-800 border-zinc-200 font-bold shadow-sm"
                          : "text-zinc-200 bg-white/10 border-white/20"
                      }`}
                    >
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
                  <div
                    className={`relative w-72 h-72 rounded-full border flex items-center justify-center ${
                      isLight
                        ? "border-zinc-200 bg-zinc-50/60 shadow-inner"
                        : "border-white/20 bg-white/[0.02] shadow-[0_0_60px_rgba(255,255,255,0.08)]"
                    }`}
                  >
                    {/* Outer counter-rotating dashed ring */}
                    <div
                      className={`absolute inset-2 rounded-full border border-dashed animate-[spin_20s_linear_infinite] ${
                        isLight ? "border-zinc-300" : "border-white/25"
                      }`}
                    />
                    <div
                      className={`absolute inset-6 rounded-full border animate-[spin_12s_linear_infinite_reverse] ${
                        isLight ? "border-zinc-200" : "border-white/15"
                      }`}
                    />

                    {/* Central Mascot Pod */}
                    <div
                      className={`relative z-10 w-24 h-24 rounded-full border-2 flex flex-col items-center justify-center shadow-md ${
                        isLight
                          ? "bg-white border-zinc-300"
                          : "bg-[#0a0a0e] border-white/70 shadow-[0_0_30px_rgba(255,255,255,0.25)]"
                      }`}
                    >
                      <OkizaLogo size={42} variant={isLight ? "black" : "white"} />
                      <span
                        className={`text-[9px] font-mono font-bold tracking-widest mt-1 uppercase ${
                          isLight ? "text-zinc-700" : "text-zinc-300"
                        }`}
                      >
                        AI CMO
                      </span>
                    </div>

                    {/* 4 Satellite Agent Pods revolving */}
                    <div
                      className={`absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg border text-[11px] font-mono flex items-center gap-1.5 shadow-sm ${
                        isLight
                          ? "bg-white border-zinc-200 text-zinc-900"
                          : "bg-[#14141a] border-white/20 text-white shadow-lg"
                      }`}
                    >
                      <Search className={`w-3.5 h-3.5 ${isLight ? "text-zinc-700" : "text-zinc-200"}`} />
                      <span>GEO / SEO Agent</span>
                    </div>

                    <div
                      className={`absolute -bottom-3 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg border text-[11px] font-mono flex items-center gap-1.5 shadow-sm ${
                        isLight
                          ? "bg-white border-zinc-200 text-zinc-900"
                          : "bg-[#14141a] border-white/20 text-white shadow-lg"
                      }`}
                    >
                      <CodeXml className={`w-3.5 h-3.5 ${isLight ? "text-zinc-700" : "text-zinc-200"}`} />
                      <span>Coding PR Agent</span>
                    </div>

                    <div
                      className={`absolute top-1/2 -left-4 -translate-y-1/2 px-2.5 py-1 rounded-lg border text-[11px] font-mono flex items-center gap-1.5 shadow-sm ${
                        isLight
                          ? "bg-white border-zinc-200 text-zinc-900"
                          : "bg-[#14141a] border-white/20 text-white shadow-lg"
                      }`}
                    >
                      <PenTool className={`w-3.5 h-3.5 ${isLight ? "text-zinc-700" : "text-zinc-200"}`} />
                      <span>Writer Agent</span>
                    </div>

                    <div
                      className={`absolute top-1/2 -right-4 -translate-y-1/2 px-2.5 py-1 rounded-lg border text-[11px] font-mono flex items-center gap-1.5 shadow-sm ${
                        isLight
                          ? "bg-white border-zinc-200 text-zinc-900"
                          : "bg-[#14141a] border-white/20 text-white shadow-lg"
                      }`}
                    >
                      <Send className={`w-3.5 h-3.5 ${isLight ? "text-zinc-700" : "text-zinc-200"}`} />
                      <span>Social Agent</span>
                    </div>
                  </div>
                </div>

                {/* Synthesis Matrix Output (Right 6 cols) */}
                <div className="lg:col-span-6 space-y-3">
                  <div
                    className={`p-4 rounded-xl border ${
                      isLight ? "bg-zinc-50 border-zinc-200" : "bg-white/[0.03] border-white/15"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`text-xs font-mono font-bold ${
                          isLight ? "text-zinc-950" : "text-white"
                        }`}
                      >
                        Brand Voice & ICP Alignment
                      </span>
                      <span
                        className={`text-xs font-mono font-bold ${
                          isLight ? "text-emerald-600" : "text-white"
                        }`}
                      >
                        100% Locked
                      </span>
                    </div>
                    <p
                      className={`text-xs leading-relaxed ${
                        isLight ? "text-zinc-600" : "text-zinc-300"
                      }`}
                    >
                      Okiza encodes your company values, tone rules, and customer pain points
                      into a 142-dimensional vector space. Every piece of code and copy stays
                      true to your brand without generic AI buzzwords.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                    <div
                      className={`p-3 rounded-lg border ${
                        isLight ? "bg-zinc-50 border-zinc-200" : "bg-white/[0.02] border-white/10"
                      }`}
                    >
                      <span
                        className={`block mb-1 ${
                          isLight ? "text-zinc-500" : "text-zinc-500"
                        }`}
                      >
                        Generated Output
                      </span>
                      <span
                        className={`font-bold text-sm ${
                          isLight ? "text-zinc-950" : "text-white"
                        }`}
                      >
                        18 Asset Variants
                      </span>
                    </div>
                    <div
                      className={`p-3 rounded-lg border ${
                        isLight ? "bg-zinc-50 border-zinc-200" : "bg-white/[0.02] border-white/10"
                      }`}
                    >
                      <span
                        className={`block mb-1 ${
                          isLight ? "text-zinc-500" : "text-zinc-500"
                        }`}
                      >
                        Hallucination Margin
                      </span>
                      <span
                        className={`font-bold text-sm ${
                          isLight ? "text-zinc-950" : "text-white"
                        }`}
                      >
                        0.0% Verified
                      </span>
                    </div>
                  </div>

                  <div
                    className={`p-3 rounded-lg border text-xs font-mono flex items-center justify-between ${
                      isLight
                        ? "bg-zinc-100 border-zinc-200 text-zinc-800"
                        : "bg-white/5 border-white/15 text-zinc-200"
                    }`}
                  >
                    <span>Autonomous Sprint Plan: Ready for Founder Gate</span>
                    <ArrowRight className={`w-4 h-4 ${isLight ? "text-zinc-900" : "text-white"}`} />
                  </div>
                </div>
              </div>
            )}

            {/* STAGE 03: FOUNDER GOVERNANCE GATE (THE EXACT SECTION QUOTED) */}
            {activeStep === 2 && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Interactive Approval Card (Left 7 cols) */}
                <div className="lg:col-span-7">
                  <div
                    className={`rounded-2xl border p-6 transition-all duration-300 ${
                      isLight
                        ? isApproved
                          ? "bg-zinc-50 border-emerald-300 shadow-md"
                          : "bg-white border-zinc-200 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
                        : isApproved
                        ? "bg-[#111115] border-white/40 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
                        : "bg-[#101014] border-white/20 shadow-[0_0_30px_rgba(0,0,0,0.8)]"
                    }`}
                  >
                    <div
                      className={`flex items-center justify-between pb-4 border-b mb-4 ${
                        isLight ? "border-zinc-200" : "border-white/10"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <ShieldCheck
                          className={`w-5 h-5 ${
                            isApproved
                              ? "text-emerald-500"
                              : isLight
                              ? "text-zinc-700"
                              : "text-zinc-400"
                          }`}
                        />
                        <span
                          className={`text-sm font-semibold ${
                            isLight ? "text-zinc-950 font-bold" : "text-white"
                          }`}
                        >
                          Founder Governance Review
                        </span>
                      </div>
                      <span
                        className={`text-xs font-mono px-2.5 py-0.5 rounded-full font-bold border ${
                          isApproved
                            ? isLight
                              ? "bg-emerald-50 text-emerald-700 border-emerald-300"
                              : "bg-white/20 text-white border border-white/40"
                            : isLight
                            ? "bg-amber-50 text-amber-800 border-amber-200"
                            : "bg-white/10 text-zinc-300 border-white/20"
                        }`}
                      >
                        {isApproved ? "✓ APPROVED BY FOUNDER" : "● PENDING APPROVAL"}
                      </span>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div
                        className={`p-3 rounded-xl border flex items-center justify-between transition-colors ${
                          isLight
                            ? "bg-zinc-50 border-zinc-200 hover:border-zinc-300 shadow-sm"
                            : "bg-white/[0.03] border-white/10"
                        }`}
                      >
                        <div>
                          <div
                            className={`text-xs font-semibold ${
                              isLight ? "text-zinc-950" : "text-white"
                            }`}
                          >
                            Long-Form Guide: &ldquo;Answer Engine Optimization in 2026&rdquo;
                          </div>
                          <div
                            className={`text-[11px] font-mono ${
                              isLight ? "text-zinc-500" : "text-zinc-400"
                            }`}
                          >
                            Targeting: WordPress & Webflow CMS · 3,420 words
                          </div>
                        </div>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded border font-semibold ${
                            isLight
                              ? "bg-white text-zinc-800 border-zinc-200 shadow-sm"
                              : "text-zinc-300 bg-white/10 border-transparent"
                          }`}
                        >
                          Ready
                        </span>
                      </div>

                      <div
                        className={`p-3 rounded-xl border flex items-center justify-between transition-colors ${
                          isLight
                            ? "bg-zinc-50 border-zinc-200 hover:border-zinc-300 shadow-sm"
                            : "bg-white/[0.03] border-white/10"
                        }`}
                      >
                        <div>
                          <div
                            className={`text-xs font-semibold ${
                              isLight ? "text-zinc-950" : "text-white"
                            }`}
                          >
                            GitHub PR #42: &ldquo;feat(seo): Add JSON-LD schema & robots.txt&rdquo;
                          </div>
                          <div
                            className={`text-[11px] font-mono ${
                              isLight ? "text-zinc-500" : "text-zinc-400"
                            }`}
                          >
                            Targeting: github.com/your-repo · 3 files modified
                          </div>
                        </div>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded border font-semibold ${
                            isLight
                              ? "bg-white text-zinc-800 border-zinc-200 shadow-sm"
                              : "text-zinc-300 bg-white/10 border-transparent"
                          }`}
                        >
                          Linted
                        </span>
                      </div>
                    </div>

                    {/* Interactive 1-Click Action Button */}
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                      <button
                        onClick={handleManualApprove}
                        className={`w-full sm:w-auto flex-1 py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-sm ${
                          isApproved
                            ? isLight
                              ? "bg-emerald-600 text-white shadow-sm"
                              : "bg-zinc-100 text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                            : isLight
                            ? "bg-black hover:bg-zinc-800 text-white shadow-md hover:scale-[1.01] active:scale-[0.99]"
                            : "bg-white hover:bg-zinc-200 text-black shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:scale-[1.02] active:scale-[0.98]"
                        }`}
                      >
                        {isApproved ? (
                          <>
                            <CheckCircle2 className={`w-4 h-4 ${isLight ? "text-white" : "fill-black text-white"}`} />
                            <span>Approved! Deploying to Stack...</span>
                          </>
                        ) : (
                          <>
                            <Zap className={`w-4 h-4 ${isLight ? "fill-white text-white" : "fill-black"}`} />
                            <span>1-Click Approve & Ship</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => setIsApproved(!isApproved)}
                        className={`text-xs font-mono px-3 py-2.5 rounded-lg border cursor-pointer transition-colors ${
                          isLight
                            ? "bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-200"
                            : "text-zinc-400 hover:text-white bg-white/5 border-white/10"
                        }`}
                      >
                        {isApproved ? "Reset Gate" : "Inspect Diff"}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right 5 cols: Enterprise Peace of Mind */}
                <div className="lg:col-span-5 space-y-3">
                  <div
                    className={`p-4 rounded-xl border ${
                      isLight ? "bg-zinc-50 border-zinc-200" : "bg-white/[0.03] border-white/10"
                    }`}
                  >
                    <h4
                      className={`text-xs font-bold uppercase tracking-wider mb-2 font-mono ${
                        isLight ? "text-zinc-950 font-semibold" : "text-white"
                      }`}
                    >
                      Zero Rogue Publish Guarantee
                    </h4>
                    <p
                      className={`text-xs leading-relaxed ${
                        isLight ? "text-zinc-600" : "text-zinc-400"
                      }`}
                    >
                      While Okiza automates the heavy research, drafting, and coding, you
                      retain 100% sovereign authority. Nothing publishes or merges to master
                      without explicit cryptographic approval.
                    </p>
                  </div>

                  <div
                    className={`p-3.5 rounded-xl border text-xs font-mono flex items-center gap-2.5 ${
                      isLight
                        ? "bg-zinc-50 border-zinc-200 text-zinc-700"
                        : "bg-white/5 border-white/15 text-zinc-300"
                    }`}
                  >
                    <ShieldCheck className={`w-4 h-4 shrink-0 ${isLight ? "text-zinc-900" : "text-white"}`} />
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
                        className={`p-3.5 rounded-xl border flex flex-col justify-between transition-all shadow-sm ${
                          isLight
                            ? "bg-zinc-50 border-zinc-200 hover:bg-white hover:border-zinc-300 hover:shadow"
                            : "bg-white/[0.03] border-white/15 hover:bg-white/[0.05] hover:border-white/30"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span
                            className={`text-xs font-semibold ${
                              isLight ? "text-zinc-950 font-bold" : "text-white"
                            }`}
                          >
                            {plat.name}
                          </span>
                          <span
                            className={`w-2 h-2 rounded-full animate-ping ${
                              isLight ? "bg-black" : "bg-white"
                            }`}
                          />
                        </div>
                        <div
                          className={`text-[11px] font-mono ${
                            isLight ? "text-zinc-500" : "text-zinc-400"
                          }`}
                        >
                          {plat.status}
                        </div>
                        <div
                          className={`text-[10px] font-mono mt-2 flex items-center justify-between ${
                            isLight ? "text-zinc-600" : "text-zinc-300"
                          }`}
                        >
                          <span className="font-semibold">✓ Synced</span>
                          <span>{plat.latency}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right 5 cols: Multi-Platform Sync stats */}
                <div className="lg:col-span-5 space-y-4">
                  <div
                    className={`p-4 rounded-xl border ${
                      isLight ? "bg-zinc-50 border-zinc-200" : "bg-white/[0.03] border-white/15"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className={`w-4 h-4 ${isLight ? "text-zinc-900" : "text-white"}`} />
                      <span
                        className={`text-xs font-bold font-mono uppercase ${
                          isLight ? "text-zinc-950" : "text-white"
                        }`}
                      >
                        Zero Context Switching
                      </span>
                    </div>
                    <p
                      className={`text-xs leading-relaxed ${
                        isLight ? "text-zinc-600" : "text-zinc-300"
                      }`}
                    >
                      You never need to log into 6 different dashboards to paste copy or copy
                      HTML tags. Okiza synchronizes natively across your exact existing tech stack.
                    </p>
                  </div>

                  <div
                    className={`p-3 rounded-lg border text-xs font-mono flex items-center justify-between ${
                      isLight
                        ? "bg-zinc-100 border-zinc-200 text-zinc-700"
                        : "bg-white/[0.02] border-white/10 text-zinc-300"
                    }`}
                  >
                    <span>Active Syndication Mesh</span>
                    <span className={`font-bold ${isLight ? "text-zinc-950" : "text-white"}`}>
                      9 Native Platforms
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* STAGE 05: CLOSED-LOOP ATTRIBUTION FLYWHEEL */}
            {activeStep === 4 && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Live Ascending Telemetry Chart (Left 7 cols) */}
                <div className="lg:col-span-7">
                  <div
                    className={`rounded-2xl border p-5 shadow-sm ${
                      isLight
                        ? "border-zinc-200 bg-white"
                        : "border-white/20 bg-[#08080c] shadow-[0_0_40px_rgba(255,255,255,0.06)]"
                    }`}
                  >
                    <div
                      className={`flex items-center justify-between mb-4 pb-3 border-b ${
                        isLight ? "border-zinc-100" : "border-white/10"
                      }`}
                    >
                      <div>
                        <div
                          className={`text-xs font-mono font-bold ${
                            isLight ? "text-zinc-500" : "text-zinc-400"
                          }`}
                        >
                          CLOSED-LOOP ATTRIBUTION SURGE
                        </div>
                        <div
                          className={`text-lg font-bold font-mono ${
                            isLight ? "text-zinc-950" : "text-white"
                          }`}
                        >
                          +{simulatedMetrics.lift}% Organic Trajectory
                        </div>
                      </div>
                      <span
                        className={`px-2.5 py-1 rounded text-xs font-mono font-bold border ${
                          isLight
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                            : "bg-white/10 border-white/20 text-white"
                        }`}
                      >
                        Loop Active
                      </span>
                    </div>

                    {/* SVG Line Graph */}
                    <div className="relative h-44 w-full">
                      <svg viewBox="0 0 500 160" className="w-full h-full" fill="none">
                        <defs>
                          <linearGradient id="monochromeGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop
                              offset="0%"
                              stopColor={isLight ? "#000000" : "#ffffff"}
                              stopOpacity={isLight ? "0.12" : "0.25"}
                            />
                            <stop
                              offset="100%"
                              stopColor={isLight ? "#000000" : "#ffffff"}
                              stopOpacity="0.0"
                            />
                          </linearGradient>
                        </defs>
                        {/* Grid lines */}
                        <line
                          x1="0"
                          y1="40"
                          x2="500"
                          y2="40"
                          stroke={isLight ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.05)"}
                        />
                        <line
                          x1="0"
                          y1="80"
                          x2="500"
                          y2="80"
                          stroke={isLight ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.05)"}
                        />
                        <line
                          x1="0"
                          y1="120"
                          x2="500"
                          y2="120"
                          stroke={isLight ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.05)"}
                        />

                        {/* Fill area */}
                        <path
                          d="M0,140 Q100,135 200,105 T350,60 T500,20 L500,160 L0,160 Z"
                          fill="url(#monochromeGrad)"
                        />
                        {/* Animated curve stroke */}
                        <path
                          d="M0,140 Q100,135 200,105 T350,60 T500,20"
                          stroke={isLight ? "#000000" : "#ffffff"}
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                        {/* Pulsing endpoint dot */}
                        <circle
                          cx="500"
                          cy="20"
                          r="5"
                          fill={isLight ? "#000000" : "#ffffff"}
                        />
                        <circle
                          cx="500"
                          cy="20"
                          r="10"
                          fill={isLight ? "#000000" : "#ffffff"}
                          opacity="0.3"
                          className="animate-ping"
                        />
                      </svg>
                    </div>

                    <div
                      className={`flex items-center justify-between text-[11px] font-mono pt-3 border-t ${
                        isLight
                          ? "text-zinc-500 border-zinc-100"
                          : "text-zinc-400 border-white/[0.06]"
                      }`}
                    >
                      <span>Baseline Day 0</span>
                      <span>Day 30 (+48%)</span>
                      <span>Day 60 (+92%)</span>
                      <span className={`font-bold ${isLight ? "text-zinc-950" : "text-white"}`}>
                        Day 90 (+142%)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right 5 cols: Re-feeding into Step 01 */}
                <div className="lg:col-span-5 space-y-3">
                  <div
                    className={`p-4 rounded-xl border ${
                      isLight ? "bg-zinc-50 border-zinc-200" : "bg-white/[0.03] border-white/15"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-2 mb-2 ${
                        isLight ? "text-zinc-950" : "text-white"
                      }`}
                    >
                      <RefreshCw
                        className={`w-4 h-4 animate-spin ${
                          isLight ? "text-zinc-900" : "text-white"
                        }`}
                      />
                      <span className="text-xs font-mono font-bold uppercase">
                        The Compounding Flywheel
                      </span>
                    </div>
                    <p
                      className={`text-xs leading-relaxed ${
                        isLight ? "text-zinc-600" : "text-zinc-300"
                      }`}
                    >
                      Every conversion and click is tracked back to its original article or
                      answer citation. Winning patterns automatically feed back into Step 01
                      to refine the next sprint.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div
                      className={`p-3 rounded-lg border ${
                        isLight ? "bg-zinc-50 border-zinc-200" : "bg-white/[0.03] border-white/10"
                      }`}
                    >
                      <span
                        className={`block text-[10px] ${
                          isLight ? "text-zinc-500" : "text-zinc-500"
                        }`}
                      >
                        CAC REDUCTION
                      </span>
                      <span
                        className={`font-bold text-base ${
                          isLight ? "text-emerald-600" : "text-white"
                        }`}
                      >
                        -48%
                      </span>
                    </div>
                    <div
                      className={`p-3 rounded-lg border ${
                        isLight ? "bg-zinc-50 border-zinc-200" : "bg-white/[0.03] border-white/10"
                      }`}
                    >
                      <span
                        className={`block text-[10px] ${
                          isLight ? "text-zinc-500" : "text-zinc-500"
                        }`}
                      >
                        RE-FEED SIGNAL
                      </span>
                      <span
                        className={`font-bold text-base ${
                          isLight ? "text-zinc-950" : "text-white"
                        }`}
                      >
                        Continuous
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setActiveStep(0);
                      setProgress(0);
                    }}
                    className={`w-full py-2.5 rounded-xl border font-mono text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer ${
                      isLight
                        ? "bg-zinc-100 hover:bg-zinc-200 text-zinc-800 border-zinc-200"
                        : "bg-white/5 border-white/15 text-zinc-200 hover:bg-white/10 hover:text-white"
                    }`}
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
          <div
            className={`rounded-2xl border overflow-hidden ${
              isLight
                ? "bg-zinc-50/70 border-zinc-200"
                : "bg-[#060608] border-white/10"
            }`}
          >
            {/* Drawer Tabs */}
            <div
              className={`flex items-center justify-between px-4 py-2.5 border-b text-xs font-mono ${
                isLight
                  ? "bg-zinc-100/70 border-zinc-200 text-zinc-700"
                  : "bg-[#0b0b0f] border-white/[0.08] text-zinc-300"
              }`}
            >
              <div className="flex items-center gap-2">
                <Terminal
                  className={`w-3.5 h-3.5 ${isLight ? "text-zinc-500" : "text-zinc-400"}`}
                />
                <span
                  className={`font-semibold ${
                    isLight ? "text-zinc-900" : "text-zinc-300"
                  }`}
                >
                  okiza-runtime://stream
                </span>
                <span className={isLight ? "text-zinc-400" : "text-zinc-600"}>|</span>
                <span
                  className={`flex items-center gap-1.5 ${
                    isLight ? "text-zinc-800 font-medium" : "text-zinc-200"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                      isLight ? "bg-black" : "bg-white"
                    }`}
                  />
                  Live Event Bus
                </span>
              </div>

              <div
                className={`flex items-center gap-2 text-[11px] ${
                  isLight ? "text-zinc-500" : "text-zinc-500"
                }`}
              >
                <span>Phase {current.num} / 05</span>
                <span>·</span>
                <span>Latency 42ms</span>
              </div>
            </div>

            {/* Terminal Lines */}
            <div className="p-4 font-mono text-xs space-y-1.5 overflow-x-auto">
              {current.terminalLogs.map((log, lIdx) => (
                <div key={lIdx} className="flex items-center gap-2">
                  <span
                    className={`select-none ${
                      isLight ? "text-zinc-400 font-bold" : "text-zinc-600"
                    }`}
                  >
                    &gt;
                  </span>
                  <span
                    className={
                      lIdx === current.terminalLogs.length - 1
                        ? isLight
                          ? "text-zinc-950 font-bold"
                          : "text-white font-semibold"
                        : isLight
                        ? "text-zinc-600"
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
          <div
            className={`mt-8 pt-6 border-t flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 ${
              isLight ? "border-zinc-200" : "border-white/[0.08]"
            }`}
          >
            <div className="flex items-center gap-3">
              <span
                className={`w-2.5 h-2.5 rounded-full animate-pulse ${
                  isLight ? "bg-black" : "bg-white"
                }`}
              />
              <span
                className={`text-xs font-mono ${
                  isLight ? "text-zinc-700 font-medium" : "text-zinc-300"
                }`}
              >
                Ready to put your entire marketing and growth loop on autopilot?
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
