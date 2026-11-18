"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

export default function FullPageDynamicBackground() {
  const { theme } = useTheme();
  const isLight = theme === "light";
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
    if (isLight) return;
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

    let lastTime = 0;

    const render = (now) => {
      if (!lastTime) lastTime = now;
      lastTime = now;

      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      const currentCols = cols();
      const currentRows = rows();

      // Interactive Matrix Dots (Adapts to light & dark theme)
      // (NO spiderweb lines, NO running dots)
      const isLightMode = document.documentElement.classList.contains("light");

      for (let i = 0; i <= currentCols; i++) {
        for (let j = 0; j <= currentRows; j++) {
          const px = i * spacing;
          const py = j * spacing;

          let alpha = isLightMode ? 0.08 : 0.075;
          let radius = 1;
          let dotColor = isLightMode
            ? `rgba(0, 0, 0, ${alpha})`
            : `rgba(161, 161, 170, ${alpha})`;
          let glow = 0;

          if (mouse.active) {
            const dx = px - mouse.x;
            const dy = py - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < mouse.radius) {
              const proximity = 1 - dist / mouse.radius;
              radius = 1 + proximity * 2.1;
              glow = proximity;

              if (isLightMode) {
                alpha = 0.2 + proximity * 0.55;
                const shade = Math.floor(65 - proximity * 45); // darker crisp grey on hover
                dotColor = `rgba(${shade}, ${shade}, ${shade}, ${alpha})`;
              } else {
                alpha = 0.16 + proximity * 0.78;
                const shade = Math.floor(165 + proximity * 65); // 165 to 230 grey shade
                dotColor = `rgba(${shade}, ${shade}, ${shade + 4}, ${alpha})`;
              }
            }
          }

          ctx.beginPath();
          ctx.arc(px, py, radius, 0, Math.PI * 2);
          ctx.fillStyle = dotColor;

          if (glow > 0.22) {
            if (isLightMode) {
              ctx.shadowColor = `rgba(0, 0, 0, ${glow * 0.25})`;
              ctx.shadowBlur = glow * 6;
            } else {
              const glowShade = Math.floor(180 + glow * 45);
              ctx.shadowColor = `rgba(${glowShade}, ${glowShade}, ${glowShade}, ${glow * 0.75})`;
              ctx.shadowBlur = glow * 8;
            }
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
    };
  }, [isLight]);

  if (isLight) {
    return <div className="fixed inset-0 pointer-events-none z-0 bg-[#ffffff]" />;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#000000]">
      {/* 1. Interactive Cursor Tracking Neutral Soft Spotlight */}
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
