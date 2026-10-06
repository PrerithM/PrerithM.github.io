"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { Award, Code2, GraduationCap, Clock } from "lucide-react";

export function MetricsStrip() {
  const icons = [Award, Code2, GraduationCap, Clock];

  return (
    <section className="relative z-10 border-y-2 border-black/10 bg-white/80 backdrop-blur-md py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {PORTFOLIO_DATA.trustMetrics.map((metric, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={metric.label}
                className="group flex flex-col items-start p-3 rounded-2xl hover:bg-canvas transition-colors"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span
                    className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs ${
                      metric.gold
                        ? "bg-gold text-black border border-gold"
                        : "bg-canvas text-black border border-black/10"
                    }`}
                  >
                    <Icon className="w-4 h-4 text-terracotta" />
                  </span>
                  <span
                    className={`text-xl sm:text-2xl font-black tracking-tight font-mono ${
                      metric.gold ? "text-terracotta" : "text-black"
                    }`}
                  >
                    {metric.value}
                  </span>
                </div>
                <h3 className="text-xs sm:text-sm font-black text-black group-hover:text-terracotta transition-colors">
                  {metric.label}
                </h3>
                <p className="text-[11px] text-terracotta font-semibold mt-0.5">
                  {metric.sublabel}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
