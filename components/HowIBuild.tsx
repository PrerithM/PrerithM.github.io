"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { Layers, Cpu, Sparkles, CheckCircle, ArrowRight } from "lucide-react";

export function HowIBuild() {
  const iconMap: Record<string, React.ElementType> = {
    Layers,
    Cpu,
    Sparkles,
    CheckCircle,
  };

  return (
    <section id="how-i-build" className="py-16 relative z-10 bg-canvas">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-gold/20 text-black border border-gold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-terracotta" />
            <span>Engineering Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
            How I Build: Architecture Over Syntax
          </h2>
          <p className="mt-2 text-sm sm:text-base text-black/80 leading-relaxed">
            I approach products as a systems architect and financial thinker. By pairing rigorous system design with AI-directed engineering, I take concepts to shipped software at 10x velocity.
          </p>
        </div>

        {/* 4-Step Architecture Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PORTFOLIO_DATA.howIBuild.map((item, idx) => {
            const Icon = iconMap[item.icon] || Layers;
            return (
              <div
                key={item.step}
                className="group relative rounded-2xl bg-white border-2 border-black/10 hover:border-gold p-5 shadow-card-subtle hover:shadow-card-elevated transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-9 h-9 rounded-xl bg-black text-gold flex items-center justify-center font-mono font-black text-xs shadow-sm group-hover:scale-105 transition-transform">
                      {item.step}
                    </span>
                    <Icon className="w-5 h-5 text-terracotta" />
                  </div>

                  <h3 className="text-sm sm:text-base font-black text-black mb-2 group-hover:text-terracotta transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-black/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-black/5 flex items-center gap-1.5 text-[11px] font-bold text-terracotta">
                  <span>Phase {idx + 1} Pipeline</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
