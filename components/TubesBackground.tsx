"use client";

import React, { useEffect, useRef, useState } from "react";

// Curated gold, bronze, and warm terracotta shades matching our 4-color palette
const GOLD_PALETTE = [
  "#FFB22C", // Primary Gold
  "#F59E0B", // Bright Amber
  "#D97706", // Deep Gold
  "#854836", // Terracotta Bronze
  "#B45309", // Warm Ochre
  "#FFD700", // Metallic Gold
  "#FFE399", // Soft Gold Highlight
];

const pickRandomColors = (count: number) => {
  const shuffled = [...GOLD_PALETTE].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

interface TubesBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  enableClickInteraction?: boolean;
}

export function TubesBackground({
  children,
  className = "",
  enableClickInteraction = true,
}: TubesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const tubesRef = useRef<any>(null);

  useEffect(() => {
    let mounted = true;
    let cleanup: (() => void) | undefined;

    const initTubes = async () => {
      if (!canvasRef.current) return;

      try {
        // Load the TubesCursor bundle from CDN as specified in the reference
        // @ts-ignore
        const module = await import(
          /* webpackIgnore: true */ "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js"
        );
        const TubesCursor = module.default;

        if (!mounted || !canvasRef.current) return;

        // Initialize with white canvas background and glowing gold tubes
        const app = TubesCursor(canvasRef.current, {
          tubes: {
            colors: ["#FFB22C", "#854836", "#F59E0B"],
            lights: {
              intensity: 300,
              colors: ["#FFB22C", "#FFD700", "#854836", "#F59E0B"],
            },
          },
        });

        tubesRef.current = app;
        setIsLoaded(true);

        const handleResize = () => {
          // If the library supports resize or container bounds
          if (app && app.resize && canvasRef.current) {
            app.resize();
          }
        };

        window.addEventListener("resize", handleResize);

        cleanup = () => {
          window.removeEventListener("resize", handleResize);
          if (app && typeof app.destroy === "function") {
            try {
              app.destroy();
            } catch (e) {
              // Ignore destroy errors
            }
          }
          tubesRef.current = null;
        };
      } catch (error) {
        console.warn("TubesCursor dynamic load fallback:", error);
      }
    };

    initTubes();

    return () => {
      mounted = false;
      if (cleanup) cleanup();
    };
  }, []);

  const handleClick = () => {
    if (!enableClickInteraction || !tubesRef.current) return;

    try {
      const colors = pickRandomColors(3);
      const lightColors = pickRandomColors(4);

      if (tubesRef.current.tubes?.setColors) {
        tubesRef.current.tubes.setColors(colors);
      }
      if (tubesRef.current.tubes?.setLightsColors) {
        tubesRef.current.tubes.setLightsColors(lightColors);
      }
    } catch (e) {
      console.warn("Color update failed:", e);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden bg-canvas ${className}`}
      onClick={handleClick}
    >
      {/* 3D WebGL Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block z-0"
        style={{ touchAction: "none" }}
      />

      {/* Subtle ambient gold radial lighting for depth */}
      <div
        className="absolute inset-0 pointer-events-none z-[1] opacity-25"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(255, 178, 44, 0.25) 0%, rgba(247, 247, 247, 0) 70%)",
        }}
        aria-hidden="true"
      />

      {/* Content Overlay */}
      <div className="relative z-10 w-full h-full pointer-events-auto">
        {children}
      </div>
    </div>
  );
}

export default TubesBackground;
