"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { Wrench, ArrowUpRight, Cpu, Film, Terminal, Eye } from "lucide-react";

export function LabGrid() {
  const iconMap: Record<string, React.ElementType> = {
    "Arduino Innovations & IoT": Cpu,
    "Easy-Editor": Film,
    "Codes of Memory": Eye,
    "Python Automation Suite": Terminal,
  };

  return (
    <section id="lab" className="py-16 relative z-10 bg-canvas">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-gold/20 text-black border border-gold mb-3">
              <Wrench className="w-3.5 h-3.5 text-terracotta" />
              <span>Experimental Maker Builds</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
              The Lab: Hardware &amp; Prototypes
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-black/80 max-w-xl">
              Exploratory projects spanning microcontrollers, video utilities, and vision models built across 5+ years of continuous tinkering.
            </p>
          </div>

          <a
            href={PORTFOLIO_DATA.profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-black text-black hover:text-terracotta group transition-colors"
          >
            <span>View all repositories on GitHub</span>
            <ArrowUpRight className="w-4 h-4 text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Experiments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PORTFOLIO_DATA.labExperiments.map((exp) => {
            const Icon = iconMap[exp.title] || Terminal;
            return (
              <div
                key={exp.title}
                className="group rounded-2xl bg-white border-2 border-black/10 hover:border-gold p-5 hover:shadow-card-elevated transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-lg bg-canvas border border-black/10 flex items-center justify-center text-terracotta group-hover:text-black group-hover:bg-gold shadow-sm transition-colors">
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="text-[11px] font-mono font-bold text-terracotta">
                      {exp.year}
                    </span>
                  </div>

                  <h3 className="text-base font-black text-black mb-1 group-hover:text-terracotta transition-colors">
                    {exp.title}
                  </h3>

                  <span className="text-[10px] font-bold text-terracotta uppercase tracking-wider block mb-2">
                    {exp.category}
                  </span>

                  <p className="text-xs text-black/80 leading-relaxed mb-4">
                    {exp.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded bg-canvas text-black border border-black/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {exp.githubUrl && (
                    <a
                      href={exp.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-black text-terracotta hover:text-black"
                    >
                      <span>Explore Repository</span>
                      <ArrowUpRight className="w-3 h-3 text-gold" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
