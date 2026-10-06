"use client";

import React from "react";

export function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0" aria-hidden="true">
      {/* Stripe-style angled backdrop canvas */}
      <div 
        className="absolute -top-[30%] -right-[15%] w-[850px] h-[750px] rounded-full blur-[110px] opacity-35 mix-blend-multiply"
        style={{
          background: "radial-gradient(circle, rgba(99, 91, 255, 0.8) 0%, rgba(0, 212, 255, 0.6) 60%, transparent 80%)",
        }}
      />
      
      {/* Signature Gold & Amber Aurora Glow (FinTech & INSPIRE edge) */}
      <div 
        className="absolute -top-[15%] -left-[10%] w-[700px] h-[650px] rounded-full blur-[120px] opacity-30 mix-blend-multiply"
        style={{
          background: "radial-gradient(circle, rgba(245, 158, 11, 0.75) 0%, rgba(217, 119, 6, 0.45) 50%, transparent 80%)",
        }}
      />

      {/* Subtle Coral / Violet Mesh Flow */}
      <div 
        className="absolute top-[20%] left-[25%] w-[600px] h-[500px] rounded-full blur-[130px] opacity-25 mix-blend-multiply"
        style={{
          background: "radial-gradient(circle, rgba(255, 94, 126, 0.5) 0%, rgba(121, 40, 202, 0.5) 60%, transparent 80%)",
        }}
      />

      {/* Delicate Stripe Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(#0A2540 1px, transparent 1px), linear-gradient(90deg, #0A2540 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  );
}
