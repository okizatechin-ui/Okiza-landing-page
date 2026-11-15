"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroDashboard from "./HeroDashboard";

export default function OkizaHeroSection() {
  const [website, setWebsite] = useState("");
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -2000, y: -2000 });

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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animId;
    let width = 0;
    let height = 0;
    let dpr = 1;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const spacing = 58;
    const photonCount = 18;
    const photons = Array.from({ length: photonCount }, (_, i) => ({
      axis: i % 2 === 0 ? "h" : "v",
      lineIndex: Math.floor(Math.random() * 35),
      pos: Math.random() * 2000,
      speed: (Math.random() * 1.3 + 0.8) * (Math.random() > 0.5 ? 1 : -1),
      len: Math.random() * 45 + 25,
    }));

    let time = 0;

    const render = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // 1. LAYER: Ethereal Harmonic Waves
      const waveCount = 2;
      for (let w = 0; w < waveCount; w++) {
        ctx.beginPath();
        const baseHeight = height * (0.42 + w * 0.32);
        const freq1 = 0.0016 + w * 0.0008;
        const freq2 = 0.0038 + w * 0.0012;
        const speedMultiplier = w === 0 ? 0.012 : -0.014;

        for (let x = 0; x <= width; x += 14) {
          const yOffset =
            Math.sin(x * freq1 + time * speedMultiplier) * 35 +
            Math.cos(x * freq2 - time * (speedMultiplier * 0.65)) * 22;

          let y = baseHeight + yOffset;

          if (mouse.active) {
            const dx = x - mouse.x;
            const dy = y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 220) {
              const force = (1 - dist / 220) * 22;
              y += (dy / (dist || 1)) * force;
            }
          }

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        const grad = ctx.createLinearGradient(0, 0, width, 0);
        grad.addColorStop(0, "rgba(255, 255, 255, 0)");
        grad.addColorStop(0.2, `rgba(56, 189, 248, ${0.05 + w * 0.03})`);
        grad.addColorStop(0.5, `rgba(255, 255, 255, ${0.1 + w * 0.04})`);
        grad.addColorStop(0.8, `rgba(56, 189, 248, ${0.06 + w * 0.03})`);
        grad.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.25;
        ctx.stroke();
      }

      // 2. LAYER: Coordinate Bus Matrix Grid
      const cols = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;

      ctx.strokeStyle = "rgba(255, 255, 255, 0.02)";
      ctx.lineWidth = 1;

      for (let i = 0; i <= cols; i++) {
        const x = i * spacing;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let j = 0; j <= rows; j++) {
        const y = j * spacing;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 3. LAYER: Traveling Fiber Photons along Grid Lines
      photons.forEach((p) => {
        p.pos += p.speed;
        const maxBound = p.axis === "h" ? width : height;
        if (p.pos > maxBound + 120) p.pos = -120;
        if (p.pos < -120) p.pos = maxBound + 120;

        ctx.beginPath();
        let startX, startY, endX, endY;

        if (p.axis === "h") {
          const y = (p.lineIndex % rows) * spacing;
          startX = p.pos;
          startY = y;
          endX = p.pos - (p.speed > 0 ? p.len : -p.len);
          endY = y;

          const grad = ctx.createLinearGradient(startX, y, endX, y);
          grad.addColorStop(0, "rgba(255, 255, 255, 0.85)");
          grad.addColorStop(0.35, "rgba(56, 189, 248, 0.4)");
          grad.addColorStop(1, "rgba(255, 255, 255, 0)");
          ctx.strokeStyle = grad;
        } else {
          const x = (p.lineIndex % cols) * spacing;
          startX = x;
          startY = p.pos;
          endX = x;
          endY = p.pos - (p.speed > 0 ? p.len : -p.len);

          const grad = ctx.createLinearGradient(x, startY, x, endY);
          grad.addColorStop(0, "rgba(255, 255, 255, 0.85)");
          grad.addColorStop(0.35, "rgba(56, 189, 248, 0.4)");
          grad.addColorStop(1, "rgba(255, 255, 255, 0)");
          ctx.strokeStyle = grad;
        }

        ctx.lineWidth = 1.6;
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(startX, startY, 2, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.shadowColor = "#38bdf8";
        ctx.shadowBlur = 9;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // 4. LAYER: Interactive Node Synapses around Cursor
      const activePoints = [];
      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const px = i * spacing;
          const py = j * spacing;

          let alpha = 0.08;
          let radius = 1;

          if (mouse.active) {
            const dx = px - mouse.x;
            const dy = py - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < mouse.radius) {
              const intensity = 1 - dist / mouse.radius;
              alpha = 0.15 + intensity * 0.75;
              radius = 1 + intensity * 2.2;
              activePoints.push({ x: px, y: py, dist });
            }
          }

          ctx.beginPath();
          ctx.arc(px, py, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.fill();
        }
      }

      if (mouse.active && activePoints.length > 0) {
        activePoints.sort((a, b) => a.dist - b.dist);
        const nearest = activePoints.slice(0, 4);

        nearest.forEach((pt) => {
          const factor = 1 - pt.dist / mouse.radius;
          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(pt.x, pt.y);
          ctx.strokeStyle = `rgba(56, 189, 248, ${factor * 0.3})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        });
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        if (mouseRef.current) mouseRef.current.active = true;
      }}
      onMouseLeave={() => {
        if (mouseRef.current) mouseRef.current.active = false;
        setMousePos({ x: -2000, y: -2000 });
      }}
      className="relative w-full pt-24 md:pt-32 pb-20 px-6 md:px-12 bg-[#000000] text-center overflow-hidden"
    >
      {/* 1. Interactive Cursor Tracking Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.04), transparent 70%)`,
        }}
      />

      {/* 2. Volumetric Celestial Beacon (Breathing ambient glow centered on headline) */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] rounded-full blur-[150px] pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.11)_0%,rgba(56,189,248,0.05)_45%,transparent_70%)] animate-ambient opacity-80" />

      {/* 3. Deep Cinematic Edge Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_90%_90%_at_50%_50%,transparent_35%,#000000_98%)]" />

      {/* 4. Canvas Engine: Fiber Photons, Precision Matrix Grid & Fluid Wave Harmonics */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Decorative side glow bars (matching reference) */}
      <div className="absolute left-0 top-20 bottom-20 w-[3px] bg-gradient-to-b from-transparent via-[#3a3530] to-transparent opacity-50 z-10"></div>
      <div className="absolute right-0 top-20 bottom-20 w-[3px] bg-gradient-to-b from-transparent via-[#3a3530] to-transparent opacity-50 z-10"></div>

      <div className="relative max-w-4xl mx-auto z-10 flex flex-col items-center">
        {/* Top Pill Badge: NEW — OKIZA MCP | Run marketing from any chat → */}
        <Link
          href="/integrations"
          className="inline-flex items-center rounded-full border border-[#383332] bg-[#1a1716] p-0.5 shadow-sm mb-10 hover:border-[#57534e] transition-colors group"
        >
          <span className="px-3 py-1 rounded-full bg-[#f5f5f4] text-[#1c1917] text-[10px] font-mono font-bold tracking-wider uppercase">
            NEW — OKIZA MCP
          </span>
          <span className="px-3 py-1 text-[13px] text-[#a8a29e] font-medium flex items-center gap-1.5">
            Run marketing from any chat
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </Link>

        {/* Big Bold Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold text-white tracking-[-0.03em] leading-[1.05] mb-6 max-w-3xl">
          Meet Okiza,
          <br />
          the AI CMO.
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed max-w-lg mb-10">
          The only AI CMO you need for growth and marketing.
        </p>

        {/* Input + CTA Button */}
        <div className="w-full max-w-lg mx-auto mb-3">
          <div className="flex items-center rounded-2xl border border-[#27272a] bg-[#141414] p-1.5 pl-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)] focus-within:border-[#52525b] transition-all">
            <input
              type="text"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              placeholder="yourcompany.com"
              className="flex-1 bg-transparent text-sm text-white placeholder-[#71717a] focus:outline-none py-2.5 min-w-0"
            />
            <Link
              href="/pricing"
              className="px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-[#e4e4e7] transition-all shrink-0 flex items-center gap-1.5 shadow-sm"
            >
              <span>Start free trial</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Helper text */}
        <p className="text-xs text-[#71717a] mb-16">
          7-day free trial · Cancel anytime
        </p>

        {/* Agent showcase bar */}
        <div className="flex flex-col items-center gap-5">
          <p className="text-[11px] font-mono tracking-[0.2em] text-[#71717a] uppercase font-semibold">
            CMO has 10+ marketing agents running 24/7
          </p>

          <div className="flex items-center flex-wrap justify-center gap-2">
            {[
              {
                name: "Influencer",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-blue-400">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                ),
              },
              {
                name: "Reddit",
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-orange-500">
                    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 0-.463.33.33 0 0 0-.462 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.216-.094z" />
                  </svg>
                ),
              },
              {
                name: "SEO",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-green-500">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                  </svg>
                ),
              },
              {
                name: "Writer",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-teal-400">
                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                  </svg>
                ),
              },
              {
                name: "GEO",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-emerald-400">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                    <path d="M2 12h20"></path>
                  </svg>
                ),
              },
              {
                name: "Coding",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-yellow-400">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                ),
              },
              {
                name: "UGC",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-pink-400">
                    <path d="m22 8-6 4 6 4V8Z"></path>
                    <rect x="2" y="6" width="14" height="12" rx="2" ry="2"></rect>
                  </svg>
                ),
              },
              {
                name: "X",
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-white">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ),
              },
            ].map((agent) => (
              <Link
                key={agent.name}
                href={
                  agent.name === "Influencer"
                    ? "/agents/influencer"
                    : agent.name === "Reddit"
                    ? "/agents/reddit"
                    : agent.name === "SEO"
                    ? "/agents/seo"
                    : agent.name === "Writer"
                    ? "/agents/writer"
                    : agent.name === "GEO"
                    ? "/agents/geo"
                    : agent.name === "Coding"
                    ? "/agents/coding"
                    : agent.name === "UGC"
                    ? "/agents/ugc-videos"
                    : agent.name === "X"
                    ? "/agents/x-twitter"
                    : "#"
                }
                className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-[#27272a] bg-[#141414] text-xs font-medium text-[#e4e4e7] hover:border-[#52525b] hover:bg-[#1c1c1c] transition-all"
              >
                {agent.icon}
                <span>{agent.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Hero Dashboard with sidebar: Overview, AI/Visibility, SEO&GEO, Keywords, Competition */}
      <HeroDashboard />
    </section>
  );
}

