"use client";

import React, { useState } from "react";
import { Project } from "@/data/portfolio-data";
import { 
  ArrowUpRight, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  Terminal, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Smartphone,
  ExternalLink
} from "lucide-react";

interface StackingCardsProps {
  projects: Project[];
}

export function StackingCards({ projects }: StackingCardsProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  // Render SVG Architecture Diagrams with 4-color palette
  const renderArchitectureVisual = (id: string) => {
    if (id === "pothole-tracker") {
      return (
        <div className="w-full h-56 sm:h-64 rounded-2xl bg-black text-white p-4 border border-gold/40 shadow-inner flex flex-col justify-between overflow-hidden">
          <div className="flex items-center justify-between text-[11px] font-mono text-gold">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              CIVIC AI EDGE PIPELINE
            </span>
            <span className="text-canvas/70">LATENCY &lt; 200ms</span>
          </div>

          <div className="relative flex-1 flex items-center justify-center">
            <svg viewBox="0 0 500 140" className="w-full h-full max-h-40" fill="none">
              <path
                d="M 50 70 L 150 70 L 260 70 L 370 70 L 450 70"
                stroke="#854836"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <path
                d="M 50 70 L 150 70 L 260 70 L 370 70 L 450 70"
                stroke="#FFB22C"
                strokeWidth="3"
                strokeDasharray="16 100"
                className="animate-pulse"
              />

              {/* Citizen Node */}
              <g transform="translate(20, 38)">
                <rect width="65" height="64" rx="12" fill="#854836" stroke="#FFB22C" strokeWidth="1.5" />
                <text x="32" y="28" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle">WhatsApp</text>
                <text x="32" y="44" fill="#FFB22C" fontSize="11" fontWeight="extrabold" textAnchor="middle">Citizen</text>
                <text x="32" y="56" fill="#F7F7F7" fontSize="7" textAnchor="middle">No App Install</text>
              </g>

              {/* Cloudflare Edge Worker */}
              <g transform="translate(125, 34)">
                <rect width="75" height="72" rx="14" fill="#1C1917" stroke="#FFB22C" strokeWidth="2" />
                <text x="37" y="28" fill="#F7F7F7" fontSize="9" fontWeight="bold" textAnchor="middle">Cloudflare</text>
                <text x="37" y="46" fill="#FFB22C" fontSize="12" fontWeight="black" textAnchor="middle">Worker</text>
                <text x="37" y="58" fill="#854836" fontSize="8" fontWeight="bold" textAnchor="middle">Edge Router</text>
              </g>

              {/* Workers AI */}
              <g transform="translate(230, 30)">
                <rect width="80" height="80" rx="16" fill="#854836" stroke="#FFB22C" strokeWidth="2.5" />
                <circle cx="40" cy="26" r="10" fill="#FFB22C" />
                <text x="40" y="30" fill="#000000" fontSize="10" fontWeight="black" textAnchor="middle">AI</text>
                <text x="40" y="50" fill="#FFFFFF" fontSize="10" fontWeight="black" textAnchor="middle">Workers AI</text>
                <text x="40" y="64" fill="#FFB22C" fontSize="7" fontWeight="bold" textAnchor="middle">Vision Scoring</text>
              </g>

              {/* KV Geo Node */}
              <g transform="translate(340, 38)">
                <rect width="65" height="64" rx="12" fill="#1C1917" stroke="#854836" strokeWidth="1.5" />
                <text x="32" y="28" fill="#FFB22C" fontSize="9" fontWeight="bold" textAnchor="middle">KV Storage</text>
                <text x="32" y="44" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle">Geo-Cluster</text>
                <text x="32" y="56" fill="#A8A29E" fontSize="7" textAnchor="middle">Deduplication</text>
              </g>

              {/* Municipal Dispatch */}
              <g transform="translate(425, 36)">
                <rect width="68" height="68" rx="12" fill="#854836" stroke="#FFB22C" strokeWidth="2" />
                <text x="34" y="28" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle">Municipal</text>
                <text x="34" y="44" fill="#FFB22C" fontSize="11" fontWeight="black" textAnchor="middle">Dispatch</text>
                <text x="34" y="56" fill="#F7F7F7" fontSize="7" textAnchor="middle">Road Repair</text>
              </g>
            </svg>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-gold pt-2 border-t border-white/10">
            <span>Funded by Govt. of India INSPIRE Award (₹10,000)</span>
            <span className="text-white">100% Zero-Friction Citizen Reach</span>
          </div>
        </div>
      );
    }

    if (id === "rover-mania") {
      return (
        <div className="w-full h-56 sm:h-64 rounded-2xl bg-black text-white p-4 border border-gold/40 shadow-inner flex flex-col justify-between overflow-hidden">
          <div className="flex items-center justify-between text-[11px] font-mono text-gold">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
              WEBRTC WHEP VIDEO & WEBSOCKET MOTOR TELEMETRY
            </span>
            <span className="text-canvas/70">LATENCY &lt; 150ms</span>
          </div>

          <div className="relative flex-1 flex items-center justify-center">
            <svg viewBox="0 0 500 140" className="w-full h-full max-h-40" fill="none">
              <path d="M 80 70 L 250 40 L 420 70" stroke="#854836" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M 80 70 L 250 100 L 420 70" stroke="#FFB22C" strokeWidth="2" strokeDasharray="4 4" />

              {/* Next.js Cockpit */}
              <g transform="translate(30, 36)">
                <rect width="85" height="68" rx="14" fill="#1C1917" stroke="#FFB22C" strokeWidth="2" />
                <text x="42" y="28" fill="#F7F7F7" fontSize="9" fontWeight="bold" textAnchor="middle">Next.js 16</text>
                <text x="42" y="44" fill="#FFB22C" fontSize="11" fontWeight="black" textAnchor="middle">Cockpit UI</text>
                <text x="42" y="56" fill="#A8A29E" fontSize="8" textAnchor="middle">WHEP WebRTC</text>
              </g>

              {/* WHEP Server */}
              <g transform="translate(195, 16)">
                <rect width="110" height="42" rx="10" fill="#854836" stroke="#FFB22C" strokeWidth="1.5" />
                <text x="55" y="20" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle">MediaMTX (8889)</text>
                <text x="55" y="32" fill="#FFB22C" fontSize="8" textAnchor="middle">Sub-150ms WHEP Video</text>
              </g>

              {/* Motor WS Daemon */}
              <g transform="translate(195, 84)">
                <rect width="110" height="42" rx="10" fill="#1C1917" stroke="#854836" strokeWidth="1.5" />
                <text x="55" y="20" fill="#FFB22C" fontSize="9" fontWeight="bold" textAnchor="middle">WS Daemon (8765)</text>
                <text x="55" y="32" fill="#F7F7F7" fontSize="8" textAnchor="middle">Motor Steering Control</text>
              </g>

              {/* Raspberry Pi Rover */}
              <g transform="translate(375, 36)">
                <rect width="90" height="68" rx="14" fill="#854836" stroke="#FFB22C" strokeWidth="2" />
                <text x="45" y="28" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle">Raspberry Pi 4</text>
                <text x="45" y="44" fill="#FFB22C" fontSize="11" fontWeight="black" textAnchor="middle">Rover Core</text>
                <text x="45" y="56" fill="#F7F7F7" fontSize="8" textAnchor="middle">Gemini 2.5 Vision</text>
              </g>
            </svg>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-gold pt-2 border-t border-white/10">
            <span>AI Co-Pilot: Gemini 2.5 Flash</span>
            <span className="text-white">Dual D-Pad & Keyboard Controls</span>
          </div>
        </div>
      );
    }

    // Resume Builder
    return (
      <div className="w-full h-56 sm:h-64 rounded-2xl bg-black text-white p-4 border border-gold/40 shadow-inner flex flex-col justify-between overflow-hidden">
        <div className="flex items-center justify-between text-[11px] font-mono text-gold">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            ON-DEVICE NATIVE PDF COMPILATION
          </span>
          <span className="text-white">100% OFFLINE</span>
        </div>

        <div className="relative flex-1 flex items-center justify-center">
          <svg viewBox="0 0 500 140" className="w-full h-full max-h-40" fill="none">
            <path d="M 60 70 L 170 70 L 290 70 L 410 70" stroke="#854836" strokeWidth="2" strokeDasharray="4 4" />
            <path d="M 60 70 L 170 70 L 290 70 L 410 70" stroke="#FFB22C" strokeWidth="3" strokeDasharray="16 80" className="animate-pulse" />

            <g transform="translate(25, 40)">
              <rect width="75" height="60" rx="12" fill="#1C1917" stroke="#FFB22C" strokeWidth="1.5" />
              <text x="37" y="26" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle">Mobile Form</text>
              <text x="37" y="40" fill="#FFB22C" fontSize="10" fontWeight="black" textAnchor="middle">React Native</text>
              <text x="37" y="52" fill="#A8A29E" fontSize="7" textAnchor="middle">Expo Framework</text>
            </g>

            <g transform="translate(140, 40)">
              <rect width="75" height="60" rx="12" fill="#854836" stroke="#FFB22C" strokeWidth="1.5" />
              <text x="37" y="26" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle">Zustand Store</text>
              <text x="37" y="40" fill="#FFB22C" fontSize="10" fontWeight="black" textAnchor="middle">Offline Cache</text>
              <text x="37" y="52" fill="#F7F7F7" fontSize="7" textAnchor="middle">Instant State</text>
            </g>

            <g transform="translate(255, 34)">
              <rect width="85" height="72" rx="14" fill="#1C1917" stroke="#FFB22C" strokeWidth="2" />
              <text x="42" y="28" fill="#F7F7F7" fontSize="9" fontWeight="bold" textAnchor="middle">Native Engine</text>
              <text x="42" y="46" fill="#FFB22C" fontSize="11" fontWeight="black" textAnchor="middle">Expo Print</text>
              <text x="42" y="58" fill="#854836" fontSize="8" textAnchor="middle">HTML-to-PDF</text>
            </g>

            <g transform="translate(380, 40)">
              <rect width="75" height="60" rx="12" fill="#854836" stroke="#FFB22C" strokeWidth="1.5" />
              <text x="37" y="26" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle">Native OS</text>
              <text x="37" y="40" fill="#FFB22C" fontSize="10" fontWeight="black" textAnchor="middle">ShareSheet</text>
              <text x="37" y="52" fill="#F7F7F7" fontSize="7" textAnchor="middle">iOS & Android</text>
            </g>
          </svg>
        </div>

        <div className="flex items-center justify-between text-[11px] font-mono text-gold pt-2 border-t border-white/10">
          <span>Zero External Server Transmission</span>
          <span className="text-white">Render Duration &lt; 800ms</span>
        </div>
      </div>
    );
  };

  return (
    <div className="relative space-y-12 sm:space-y-16 pb-24">
      {projects.map((project, idx) => {
        // Sticky deck offset so each card stacks cleanly with top offset
        const topOffsetRem = 6 + idx * 1.5;
        const zIndex = 10 + idx;
        const isExpanded = expandedIndex === idx;

        return (
          <div
            key={project.id}
            style={{
              top: `${topOffsetRem}rem`,
              zIndex,
            }}
            className="sticky card-sticky-stack"
          >
            <article className="rounded-3xl bg-white border-2 border-black/10 hover:border-gold shadow-deck-stack p-6 sm:p-9 transition-all duration-300">
              {/* Header Info */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-black text-white font-mono font-bold text-xs flex items-center justify-center">
                    0{idx + 1}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-canvas text-terracotta border border-black/10">
                    {project.category}
                  </span>
                  {project.badge && (
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-gold/20 text-black border border-gold flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-terracotta" />
                      {project.badge}
                    </span>
                  )}
                </div>
                <span className="font-mono text-xs font-bold text-terracotta">
                  {project.year}
                </span>
              </div>

              {/* Title & Tagline */}
              <div className="mb-6">
                <h3 className="text-2xl sm:text-4xl font-black text-black tracking-tight mb-2">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-black/80 font-normal leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Isometric Architecture Telemetry */}
              <div className="mb-6">
                {renderArchitectureVisual(project.id)}
              </div>

              {/* Metrics Row in 4-Color Palette */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 rounded-2xl bg-canvas border border-black/5 mb-6">
                {project.metrics.map((metric) => (
                  <div key={metric.label}>
                    <span className="block text-[10px] uppercase font-bold text-terracotta tracking-wider">
                      {metric.label}
                    </span>
                    <span
                      className={`text-sm sm:text-base font-black font-mono ${
                        metric.gold ? "text-gold" : "text-black"
                      }`}
                    >
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Expandable Architecture & Decision Log */}
              <div className="pt-2 border-t border-black/10">
                <button
                  onClick={() => toggleExpand(idx)}
                  className="w-full flex items-center justify-between py-2 text-xs font-bold text-black hover:text-terracotta transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-gold" />
                    <span>{isExpanded ? "Hide Architectural Decisions" : "View Architectural Decision Log & Details"}</span>
                  </span>
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                {isExpanded && (
                  <div className="pt-4 space-y-4 text-xs sm:text-sm animate-fadeIn">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-canvas border border-black/10">
                        <span className="font-black text-terracotta uppercase text-[11px] block mb-1">
                          The Core Problem
                        </span>
                        <p className="text-black/80 leading-relaxed">{project.problem}</p>
                      </div>

                      <div className="p-4 rounded-xl bg-canvas border border-black/10">
                        <span className="font-black text-black uppercase text-[11px] block mb-1">
                          System Architecture Solution
                        </span>
                        <p className="text-black/80 leading-relaxed">{project.solution}</p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-gold/15 border border-gold">
                      <span className="font-black text-terracotta uppercase text-[11px] flex items-center gap-1.5 mb-1.5">
                        <Terminal className="w-3.5 h-3.5 text-terracotta" />
                        Strategic Decision Log
                      </span>
                      <p className="text-black font-mono text-xs leading-relaxed">
                        {project.decisionLog}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer Tech Tags & GitHub Link */}
              <div className="mt-5 pt-3 border-t border-black/5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-semibold px-2.5 py-0.5 rounded-lg bg-canvas text-black/90 border border-black/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.links?.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-black hover:text-terracotta transition-colors"
                  >
                    <span>Inspect Code on GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-gold" />
                  </a>
                )}
              </div>
            </article>
          </div>
        );
      })}
    </div>
  );
}
