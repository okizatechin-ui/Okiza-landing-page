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
    radius: 200,
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
    let width = window.innerWidth;
    let height = window.innerHeight;
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

    const spacing = 60;
    const cols = () => Math.ceil(width / spacing) + 1;
    const rows = () => Math.ceil(height / spacing) + 1;

    // ========================================================
    // Staggered & Evenly Distributed Running Photons
    // Zero clumping, perpetual continuous flow across viewport
    // ========================================================
    const hPhotons = 16;
    const vPhotons = 16;
    const photons = [];

    // Horizontal Photons (staggered evenly across screen width)
    for (let i = 0; i < hPhotons; i++) {
      const dir = i % 2 === 0 ? 1 : -1;
      const speed = (1.15 + (i % 5) * 0.18) * dir;
      const len = 45 + (i % 4) * 12;
      const progress = i / hPhotons;
      const pos = progress * (width || 1920);

      photons.push({
        axis: "h",
        lineIndex: (i * 3 + 2) % 40,
        pos,
        speed,
        len,
      });
    }

    // Vertical Photons (staggered evenly across screen height)
    for (let i = 0; i < vPhotons; i++) {
      const dir = i % 2 === 0 ? 1 : -1;
      const speed = (1.05 + (i % 5) * 0.18) * dir;
      const len = 45 + (i % 4) * 12;
      const progress = i / vPhotons;
      const pos = progress * (height || 1080);

      photons.push({
        axis: "v",
        lineIndex: (i * 3 + 1) % 40,
        pos,
        speed,
        len,
      });
    }

    let time = 0;
    let lastTime = 0;
    let lastScrollY = window.scrollY || 0;
    let scrollVelocity = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY || 0;
      const delta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;
      // Clamped gentle scroll impulse to avoid sudden visual jumps
      scrollVelocity = Math.max(-10, Math.min(10, delta * 0.08));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const render = (now) => {
      if (!lastTime) lastTime = now;
      const dt = Math.min((now - lastTime) / 16.67, 1.8); // 60fps-normalized delta time
      lastTime = now;

      time += dt;
      scrollVelocity *= 0.94;
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      const currentCols = cols();
      const currentRows = rows();

      // ========================================================
      // 3. LAYER: Seamless Running Photons with Laser Trails
      // Continuous perpetual flow without breaks or restarts
      // ========================================================
      photons.forEach((p) => {
        p.pos += (p.speed + (p.axis === "v" ? scrollVelocity : 0)) * dt;
        const maxBound = p.axis === "h" ? width : height;
        const lineLimit = p.axis === "h" ? currentRows : currentCols;

        // Continuous wrap-around without clump synchronization
        if (p.speed > 0) {
          if (p.pos - p.len > maxBound) {
            p.pos = -p.len - 15;
            p.lineIndex = (p.lineIndex + 7) % lineLimit;
          }
        } else {
          if (p.pos + p.len < 0) {
            p.pos = maxBound + p.len + 15;
            p.lineIndex = (p.lineIndex + 7) % lineLimit;
          }
        }

        // Edge fade factor to ensure silky appearance / disappearance
        const margin = 70;
        let edgeOpacity = 1;
        if (p.pos < margin) {
          edgeOpacity = Math.max(0, (p.pos + p.len) / (margin + p.len));
        } else if (p.pos > maxBound - margin) {
          edgeOpacity = Math.max(0, (maxBound + p.len - p.pos) / (margin + p.len));
        }
        edgeOpacity = Math.min(1, Math.max(0, edgeOpacity));

        if (edgeOpacity <= 0.01) return;

        ctx.beginPath();
        let startX, startY, endX, endY;

        if (p.axis === "h") {
          const y = (p.lineIndex % currentRows) * spacing;
          startX = p.pos;
          startY = y;
          endX = p.pos - (p.speed > 0 ? p.len : -p.len);
          endY = y;

          const grad = ctx.createLinearGradient(startX, y, endX, y);
          grad.addColorStop(0, `rgba(255, 255, 255, ${0.9 * edgeOpacity})`);
          grad.addColorStop(0.35, `rgba(220, 220, 230, ${0.35 * edgeOpacity})`);
          grad.addColorStop(1, "rgba(255, 255, 255, 0)");
          ctx.strokeStyle = grad;
        } else {
          const x = (p.lineIndex % currentCols) * spacing;
          startX = x;
          startY = p.pos;
          endX = x;
          endY = p.pos - (p.speed > 0 ? p.len : -p.len);

          const grad = ctx.createLinearGradient(x, startY, x, endY);
          grad.addColorStop(0, `rgba(255, 255, 255, ${0.9 * edgeOpacity})`);
          grad.addColorStop(0.35, `rgba(220, 220, 230, ${0.35 * edgeOpacity})`);
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
        ctx.fillStyle = `rgba(255, 255, 255, ${edgeOpacity})`;
        ctx.shadowColor = `rgba(255, 255, 255, ${0.95 * edgeOpacity})`;
        ctx.shadowBlur = 9;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // ========================================================
      // 4. LAYER: Interactive Matrix Dots (Turns Grey when mouse moves over)
      // (NO spiderweb lines connecting to cursor)
      // ========================================================
      for (let i = 0; i <= currentCols; i++) {
        for (let j = 0; j <= currentRows; j++) {
          const px = i * spacing;
          const py = j * spacing;

          let alpha = 0.075;
          let radius = 1;
          let dotColor = `rgba(161, 161, 170, ${alpha})`;
          let glow = 0;

          if (mouse.active) {
            const dx = px - mouse.x;
            const dy = py - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < mouse.radius) {
              const proximity = 1 - dist / mouse.radius;
              alpha = 0.16 + proximity * 0.78;
              radius = 1 + proximity * 2.1;
              glow = proximity;

              const shade = Math.floor(165 + proximity * 65); // 165 to 230 grey shade
              dotColor = `rgba(${shade}, ${shade}, ${shade + 4}, ${alpha})`;
            }
          }

          ctx.beginPath();
          ctx.arc(px, py, radius, 0, Math.PI * 2);
          ctx.fillStyle = dotColor;

          if (glow > 0.22) {
            const glowShade = Math.floor(180 + glow * 45);
            ctx.shadowColor = `rgba(${glowShade}, ${glowShade}, ${glowShade}, ${glow * 0.75})`;
            ctx.shadowBlur = glow * 8;
          }

          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#000000]">
      {/* 1. Interactive Cursor Tracking Neutral Soft Grey Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(750px circle at ${mousePos.x}px ${mousePos.y}px, rgba(200, 200, 215, 0.035), transparent 70%)`,
        }}
      />

      {/* 2. Top Celestial Beacon Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[550px] rounded-full blur-[160px] pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06)_0%,transparent_70%)]" />

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
