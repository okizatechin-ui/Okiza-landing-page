"use client";

import { useEffect, useRef, useState } from "react";

export default function FullPageDynamicBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({
    x: -2000,
    y: -2000,
    targetX: -2000,
    targetY: -2000,
    active: false,
    radius: 190,
  });
  const [mousePos, setMousePos] = useState({ x: -2000, y: -2000 });

  useEffect(() => {
    const handleWindowMouseMove = (e) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
      mouseRef.current.active = true;
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleWindowMouseLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.targetX = -2000;
      mouseRef.current.targetY = -2000;
      setMousePos({ x: -2000, y: -2000 });
    };

    window.addEventListener("mousemove", handleWindowMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleWindowMouseLeave, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
      window.removeEventListener("mouseleave", handleWindowMouseLeave);
    };
  }, []);

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
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    // Grid spacing & Traveling Fiber Photons (Running Dots with Laser Trails as seen in reference image)
    const spacing = 60;
    const photonCount = 28;
    const photons = Array.from({ length: photonCount }, (_, i) => ({
      axis: i % 2 === 0 ? "h" : "v",
      lineIndex: Math.floor(Math.random() * 50),
      pos: Math.random() * 2500,
      speed: (Math.random() * 1.3 + 0.8) * (Math.random() > 0.5 ? 1 : -1),
      len: Math.random() * 45 + 35, // Laser tail length (35px to 80px)
    }));

    let time = 0;
    let lastScrollY = window.scrollY || 0;
    let scrollVelocity = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY || 0;
      scrollVelocity = (currentScrollY - lastScrollY) * 0.12;
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const render = () => {
      time += 1;
      scrollVelocity *= 0.92;
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // 1. LAYER: Subtle Harmonic Wave Curves (Topological Caustics as seen in screenshot)
      const waveCount = 2;
      for (let w = 0; w < waveCount; w++) {
        ctx.beginPath();
        const baseHeight = height * (0.32 + w * 0.36);
        const freq1 = 0.0016 + w * 0.0006;
        const freq2 = 0.0034 + w * 0.0008;
        const speedMultiplier = w === 0 ? 0.008 : -0.01;

        for (let x = 0; x <= width; x += 16) {
          const yOffset =
            Math.sin(x * freq1 + time * speedMultiplier + (lastScrollY * 0.0008)) * 34 +
            Math.cos(x * freq2 - time * (speedMultiplier * 0.6)) * 20;

          let y = baseHeight + yOffset;

          if (mouse.active) {
            const dx = x - mouse.x;
            const dy = y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 200) {
              const force = (1 - dist / 200) * 18;
              y += (dy / (dist || 1)) * force;
            }
          }

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        const grad = ctx.createLinearGradient(0, 0, width, 0);
        grad.addColorStop(0, "rgba(255, 255, 255, 0)");
        grad.addColorStop(0.25, `rgba(255, 255, 255, ${0.035 + w * 0.015})`);
        grad.addColorStop(0.5, `rgba(255, 255, 255, ${0.07 + w * 0.02})`);
        grad.addColorStop(0.75, `rgba(255, 255, 255, ${0.04 + w * 0.015})`);
        grad.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.1;
        ctx.stroke();
      }

      // 2. LAYER: Coordinate Matrix Grid Lines (Faint, high-precision dark grid)
      const cols = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;

      ctx.strokeStyle = "rgba(255, 255, 255, 0.022)";
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

      // 3. LAYER: Running Dots with Laser Beam Trails along Grid Lines (Exactly matching user screenshot)
      photons.forEach((p) => {
        p.pos += p.speed + (p.axis === "v" ? scrollVelocity : 0);
        const maxBound = p.axis === "h" ? width : height;
        if (p.pos > maxBound + 120) {
          p.pos = -120;
          p.lineIndex = Math.floor(Math.random() * (p.axis === "h" ? rows : cols));
        }
        if (p.pos < -120) {
          p.pos = maxBound + 120;
          p.lineIndex = Math.floor(Math.random() * (p.axis === "h" ? rows : cols));
        }

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
          grad.addColorStop(0.35, "rgba(255, 255, 255, 0.32)");
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
          grad.addColorStop(0.35, "rgba(255, 255, 255, 0.32)");
          grad.addColorStop(1, "rgba(255, 255, 255, 0)");
          ctx.strokeStyle = grad;
        }

        ctx.lineWidth = 1.4;
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();

        // Luminous glowing running dot head
        ctx.beginPath();
        ctx.arc(startX, startY, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.shadowColor = "rgba(255, 255, 255, 0.95)";
        ctx.shadowBlur = 9;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // NOTE: Layer 4 (static dot matrix and mouse connecting spiderweb strings) is intentionally EXCLUDED
      // to keep the background clean, cinematic, and focused purely on the running dots.

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#000000]">
      {/* 1. Interactive Cursor Tracking Ambient Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(850px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.035), transparent 70%)`,
        }}
      />

      {/* 2. Top Celestial Beacon Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[550px] rounded-full blur-[160px] pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)]" />

      {/* 3. Deep Cinematic Edge Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_95%_95%_at_50%_50%,transparent_40%,#000000_98%)]" />

      {/* 4. Master Full-Page Canvas Engine */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
    </div>
  );
}
