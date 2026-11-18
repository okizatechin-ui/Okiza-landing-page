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

    // Pure Running Dots (horizontal and vertical running photons)
    const dotCount = 42;
    const dots = Array.from({ length: dotCount }, (_, i) => {
      const isHorizontal = i % 2 === 0;
      return {
        axis: isHorizontal ? "h" : "v",
        pos: Math.random() * (isHorizontal ? window.innerWidth : window.innerHeight),
        crossPos: Math.random() * (isHorizontal ? window.innerHeight : window.innerWidth),
        speed: (Math.random() * 1.4 + 0.8) * (Math.random() > 0.5 ? 1 : -1),
        radius: Math.random() * 1.2 + 1.2, // 1.2px to 2.4px
        baseAlpha: Math.random() * 0.45 + 0.35, // 0.35 to 0.8
      };
    });

    let lastScrollY = window.scrollY || 0;
    let scrollVelocity = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY || 0;
      scrollVelocity = (currentScrollY - lastScrollY) * 0.12;
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const render = () => {
      scrollVelocity *= 0.92;
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Render ONLY running dots
      dots.forEach((dot) => {
        dot.pos += dot.speed + (dot.axis === "v" ? scrollVelocity : 0);

        const maxBound = dot.axis === "h" ? width : height;
        const crossBound = dot.axis === "h" ? height : width;

        if (dot.pos > maxBound + 20) {
          dot.pos = -20;
          dot.crossPos = Math.random() * crossBound;
        } else if (dot.pos < -20) {
          dot.pos = maxBound + 20;
          dot.crossPos = Math.random() * crossBound;
        }

        const x = dot.axis === "h" ? dot.pos : dot.crossPos;
        const y = dot.axis === "h" ? dot.crossPos : dot.pos;

        let alpha = dot.baseAlpha;
        let radius = dot.radius;

        if (mouse.active) {
          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const proximity = 1 - dist / mouse.radius;
            alpha = Math.min(1, alpha + proximity * 0.5);
            radius = dot.radius + proximity * 1.0;
          }
        }

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.shadowColor = `rgba(255, 255, 255, ${alpha * 0.8})`;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

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

      {/* 4. Master Full-Page Canvas Engine (Pure Running Dots) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
    </div>
  );
}
