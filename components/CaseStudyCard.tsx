"use client";

import React, { useState } from "react";
import { Project } from "@/data/portfolio-data";
import { ArrowUpRight, CheckCircle2, ChevronDown, ChevronUp, Cpu, Database, Globe, Layers, ShieldCheck, Sparkles, Terminal } from "lucide-react";

interface CaseStudyCardProps {
  project: Project;
  index: number;
}

export function CaseStudyCard({ project, index }: CaseStudyCardProps) {
  const [detailsOpen, setDetailsOpen] = useState(false);

  // Render project-specific SVG isometric telemetry diagrams
  const renderIsometricTelemetry = (id: string) => {
    if (id === "pothole-tracker") {
      return (
        <div className="relative w-full h-64 sm:h-72 rounded-2xl bg-gradient-to-br from-amber-950 via-slate-900 to-slate-950 p-4 overflow-hidden border border-amber-500/20 shadow-inner flex flex-col justify-between">
          {/* Top Telemetry Header */}
          <div className="flex items-center justify-between text-[11px] font-mono text-amber-300/90 z-10">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              EDGE DATAFLOW PIPELINE
            </span>
            <span className="text-slate-400">LATENCY: ~190ms</span>
          </div>

          {/* Isometric Pipeline Schematic */}
          <div className="relative flex-1 flex items-center justify-center">
            {/* SVG Interactive Architecture Flow */}
            <svg viewBox="0 0 500 160" className="w-full h-full max-h-48" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Connecting animated data lines */}
              <path
                d="M 60 80 L 160 80 L 260 80 L 360 80 L 440 80"
                stroke="rgba(245, 158, 11, 0.3)"
                strokeWidth="3"
                strokeDasharray="6 6"
              />
              <path
                d="M 60 80 L 160 80 L 260 80 L 360 80 L 440 80"
                stroke="#F59E0B"
                strokeWidth="2"
                strokeDasharray="16 120"
                className="animate-pulse"
              />

              {/* Node 1: Citizen WhatsApp */}
              <g transform="translate(30, 50)">
                <rect width="60" height="60" rx="12" fill="#064E3B" stroke="#10B981" strokeWidth="1.5" />
                <circle cx="30" cy="24" r="10" fill="#10B981" fillOpacity="0.3" />
                <text x="30" y="28" fill="#10B981" fontSize="12" fontWeight="bold" textAnchor="middle">WA</text>
                <text x="30" y="47" fill="#A7F3D0" fontSize="8" fontWeight="bold" textAnchor="middle">Citizen</text>
              </g>

              {/* Node 2: Cloudflare Edge */}
              <g transform="translate(130, 45)">
                <rect width="70" height="70" rx="14" fill="#1E293B" stroke="#F59E0B" strokeWidth="2" />
                <text x="35" y="30" fill="#FDE68A" fontSize="9" fontWeight="bold" textAnchor="middle">Cloudflare</text>
                <text x="35" y="44" fill="#F59E0B" fontSize="11" fontWeight="extrabold" textAnchor="middle">Worker</text>
                <text x="35" y="58" fill="#94A3B8" fontSize="7" textAnchor="middle">Edge Router</text>
              </g>

              {/* Node 3: Workers AI Vision */}
              <g transform="translate(230, 42)">
                <rect width="76" height="76" rx="16" fill="#78350F" stroke="#FBBF24" strokeWidth="2" />
                <circle cx="38" cy="26" r="12" fill="#F59E0B" fillOpacity="0.3" />
                <text x="38" y="30" fill="#FEF3C7" fontSize="10" fontWeight="bold" textAnchor="middle">AI</text>
                <text x="38" y="48" fill="#FFFBEB" fontSize="10" fontWeight="extrabold" textAnchor="middle">Workers AI</text>
                <text x="38" y="62" fill="#FDE68A" fontSize="7" fontWeight="bold" textAnchor="middle">Damage Scoring</text>
              </g>

              {/* Node 4: KV Geolocation */}
              <g transform="translate(335, 50)">
                <rect width="60" height="60" rx="12" fill="#1E1B4B" stroke="#818CF8" strokeWidth="1.5" />
                <text x="30" y="28" fill="#C7D2FE" fontSize="9" fontWeight="bold" textAnchor="middle">Geo-KV</text>
                <text x="30" y="46" fill="#A5B4FC" fontSize="8" textAnchor="middle">Indexed Lat/Lng</text>
              </g>

              {/* Node 5: Municipal Repair Dispatch */}
              <g transform="translate(415, 48)">
                <rect width="64" height="64" rx="14" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
                <text x="32" y="28" fill="#34D399" fontSize="9" fontWeight="bold" textAnchor="middle">Municipal</text>
                <text x="32" y="44" fill="#6EE7B7" fontSize="10" fontWeight="extrabold" textAnchor="middle">Dispatch</text>
                <text x="32" y="56" fill="#A7F3D0" fontSize="7" textAnchor="middle">Auto-Ticket</text>
              </g>
            </svg>
          </div>

          {/* Bottom Telemetry Bar */}
          <div className="flex items-center justify-between text-[11px] font-mono text-amber-200/80 pt-2 border-t border-slate-800">
            <span className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Awarded ₹10,000 Govt. of India INSPIRE Grant
            </span>
            <span className="text-emerald-400 font-bold">100% Zero-Install Adoption</span>
          </div>
        </div>
      );
    }

    if (id === "rover-mania") {
      return (
        <div className="relative w-full h-64 sm:h-72 rounded-2xl bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 p-4 overflow-hidden border border-indigo-500/20 shadow-inner flex flex-col justify-between">
          <div className="flex items-center justify-between text-[11px] font-mono text-indigo-300 z-10">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              WEBRTC WHEP VIDEO & WEBSOCKET MOTOR TELEMETRY
            </span>
            <span className="text-slate-400">STREAM LATENCY: &lt;150ms</span>
          </div>

          {/* SVG Diagram */}
          <div className="relative flex-1 flex items-center justify-center">
            <svg viewBox="0 0 500 160" className="w-full h-full max-h-48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M 80 80 L 250 50 L 420 80"
                stroke="rgba(99, 102, 241, 0.4)"
                strokeWidth="3"
                strokeDasharray="6 6"
              />
              <path
                d="M 80 80 L 250 110 L 420 80"
                stroke="rgba(6, 182, 212, 0.4)"
                strokeWidth="3"
                strokeDasharray="6 6"
              />

              {/* Next.js Cockpit */}
              <g transform="translate(30, 45)">
                <rect width="85" height="70" rx="14" fill="#0F172A" stroke="#635BFF" strokeWidth="2" />
                <text x="42" y="28" fill="#C7D2FE" fontSize="9" fontWeight="bold" textAnchor="middle">Next.js 16</text>
                <text x="42" y="44" fill="#FFFFFF" fontSize="11" fontWeight="extrabold" textAnchor="middle">Cockpit UI</text>
                <text x="42" y="58" fill="#818CF8" fontSize="8" textAnchor="middle">WHEP WebRTC</text>
              </g>

              {/* Upper Node: Video Pipe */}
              <g transform="translate(200, 20)">
                <rect width="100" height="45" rx="10" fill="#1E1B4B" stroke="#818CF8" strokeWidth="1.5" />
                <text x="50" y="20" fill="#E0E7FF" fontSize="9" fontWeight="bold" textAnchor="middle">MediaMTX (8889)</text>
                <text x="50" y="34" fill="#A5B4FC" fontSize="8" textAnchor="middle">Low-Latency WHEP</text>
              </g>

              {/* Lower Node: Motor WS */}
              <g transform="translate(200, 95)">
                <rect width="100" height="45" rx="10" fill="#082F49" stroke="#38BDF8" strokeWidth="1.5" />
                <text x="50" y="20" fill="#E0F2FE" fontSize="9" fontWeight="bold" textAnchor="middle">WS Daemon (8765)</text>
                <text x="50" y="34" fill="#7DD3FC" fontSize="8" textAnchor="middle">L/R Motor Commands</text>
              </g>

              {/* Raspberry Pi Hardware */}
              <g transform="translate(375, 45)">
                <rect width="90" height="70" rx="14" fill="#0F172A" stroke="#00D4FF" strokeWidth="2" />
                <text x="45" y="28" fill="#E0F2FE" fontSize="9" fontWeight="bold" textAnchor="middle">Raspberry Pi 4</text>
                <text x="45" y="44" fill="#00D4FF" fontSize="11" fontWeight="extrabold" textAnchor="middle">Rover Core</text>
                <text x="45" y="58" fill="#7DD3FC" fontSize="8" textAnchor="middle">Camera + GPIO</text>
              </g>
            </svg>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-slate-300 pt-2 border-t border-slate-800">
            <span className="text-cyan-400">Gemini 2.5 Flash Vision Co-Pilot Enabled</span>
            <span className="text-indigo-400">Sub-Second D-Pad Steering</span>
          </div>
        </div>
      );
    }

    // Resume Builder
    return (
      <div className="relative w-full h-64 sm:h-72 rounded-2xl bg-gradient-to-br from-violet-950 via-slate-900 to-slate-950 p-4 overflow-hidden border border-violet-500/20 shadow-inner flex flex-col justify-between">
        <div className="flex items-center justify-between text-[11px] font-mono text-purple-300 z-10">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            OFFLINE-FIRST ON-DEVICE PDF COMPILATION
          </span>
          <span className="text-emerald-400 font-bold">ZERO CLOUD DEPENDENCY</span>
        </div>

        <div className="relative flex-1 flex items-center justify-center">
          <svg viewBox="0 0 500 160" className="w-full h-full max-h-48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 70 80 L 180 80 L 290 80 L 410 80"
              stroke="rgba(168, 85, 247, 0.4)"
              strokeWidth="3"
              strokeDasharray="6 6"
            />
            <path
              d="M 70 80 L 180 80 L 290 80 L 410 80"
              stroke="#C084FC"
              strokeWidth="2"
              strokeDasharray="16 90"
              className="animate-pulse"
            />

            {/* Form Input */}
            <g transform="translate(30, 48)">
              <rect width="75" height="64" rx="12" fill="#1E1B4B" stroke="#A855F7" strokeWidth="1.5" />
              <text x="37" y="28" fill="#E9D5FF" fontSize="9" fontWeight="bold" textAnchor="middle">Mobile Form</text>
              <text x="37" y="44" fill="#C084FC" fontSize="10" fontWeight="extrabold" textAnchor="middle">React Native</text>
              <text x="37" y="56" fill="#D8B4FE" fontSize="7" textAnchor="middle">Dynamic Arrays</text>
            </g>

            {/* Zustand State */}
            <g transform="translate(145, 48)">
              <rect width="70" height="64" rx="12" fill="#0F172A" stroke="#818CF8" strokeWidth="1.5" />
              <text x="35" y="28" fill="#C7D2FE" fontSize="9" fontWeight="bold" textAnchor="middle">Zustand Store</text>
              <text x="35" y="44" fill="#FFFFFF" fontSize="10" fontWeight="extrabold" textAnchor="middle">Offline Cache</text>
              <text x="35" y="56" fill="#94A3B8" fontSize="7" textAnchor="middle">Local Validation</text>
            </g>

            {/* On-device Canvas */}
            <g transform="translate(255, 42)">
              <rect width="80" height="74" rx="14" fill="#3B0764" stroke="#F59E0B" strokeWidth="2" />
              <text x="40" y="28" fill="#FDE68A" fontSize="9" fontWeight="bold" textAnchor="middle">Native Engine</text>
              <text x="40" y="46" fill="#F59E0B" fontSize="11" fontWeight="extrabold" textAnchor="middle">Expo Print</text>
              <text x="40" y="60" fill="#FEF3C7" fontSize="8" textAnchor="middle">PDF Assembly</text>
            </g>

            {/* Native Share */}
            <g transform="translate(375, 48)">
              <rect width="75" height="64" rx="12" fill="#064E3B" stroke="#10B981" strokeWidth="1.5" />
              <text x="37" y="28" fill="#A7F3D0" fontSize="9" fontWeight="bold" textAnchor="middle">OS Share</text>
              <text x="37" y="44" fill="#10B981" fontSize="10" fontWeight="extrabold" textAnchor="middle">ShareSheet</text>
              <text x="37" y="56" fill="#D1FAE5" fontSize="7" textAnchor="middle">iOS & Android</text>
            </g>
          </svg>
        </div>

        <div className="flex items-center justify-between text-[11px] font-mono text-slate-300 pt-2 border-t border-slate-800">
          <span className="text-purple-300">100% User Data Sovereignty</span>
          <span className="text-amber-400 font-bold">Fast Generation (&lt;800ms)</span>
        </div>
      </div>
    );
  };

  return (
    <article className="group rounded-3xl bg-white border border-slate-200/90 shadow-stripe-card hover:shadow-stripe-hover transition-all duration-300 overflow-hidden flex flex-col justify-between">
      {/* Top Banner & Telemetry Graphic */}
      <div className="p-5 sm:p-7 pb-4">
        {/* Header Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
              {project.category}
            </span>
            {project.badge && (
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200/80 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                {project.badge}
              </span>
            )}
          </div>
          <span className="font-mono text-xs text-slate-400 font-medium">
            {project.year}
          </span>
        </div>

        {/* Title and Tagline */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-stripe-slate tracking-tight mb-2">
          {project.title}
        </h3>
        <p className="text-sm sm:text-base text-stripe-body font-normal leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Isometric Telemetry Visual */}
        {renderIsometricTelemetry(project.id)}
      </div>

      {/* Metrics Row */}
      <div className="px-5 sm:px-7 py-3 bg-slate-50/70 border-y border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {project.metrics.map((metric) => (
          <div key={metric.label}>
            <span className="block text-[10px] uppercase tracking-wider font-semibold text-slate-400">
              {metric.label}
            </span>
            <span
              className={`text-sm sm:text-base font-bold font-mono ${
                metric.gold ? "text-amber-700" : "text-stripe-slate"
              }`}
            >
              {metric.value}
            </span>
          </div>
        ))}
      </div>

      {/* Expandable Architecture & Decision Log Section */}
      <div className="px-5 sm:px-7 py-4">
        <button
          onClick={() => setDetailsOpen(!detailsOpen)}
          className="w-full flex items-center justify-between py-2 text-xs font-bold text-stripe-slate hover:text-gold-700 transition-colors border-b border-dashed border-slate-200"
          aria-expanded={detailsOpen}
        >
          <span className="flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-gold-600" />
            {detailsOpen ? "Hide Architectural Decisions" : "View Problem, Architecture & Decision Log"}
          </span>
          {detailsOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {detailsOpen && (
          <div className="pt-4 space-y-4 text-xs sm:text-sm animate-fadeIn">
            {/* Problem & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-rose-50/50 border border-rose-100">
                <span className="font-bold text-rose-950 uppercase tracking-wide text-[11px] block mb-1">
                  The Problem
                </span>
                <p className="text-slate-700 leading-relaxed">{project.problem}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50/50 border border-emerald-100">
                <span className="font-bold text-emerald-950 uppercase tracking-wide text-[11px] block mb-1">
                  The Architecture Solution
                </span>
                <p className="text-slate-700 leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* Architectural Decision Log */}
            <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/70">
              <span className="font-bold text-amber-950 uppercase tracking-wide text-[11px] flex items-center gap-1.5 mb-1.5">
                <Terminal className="w-3.5 h-3.5 text-amber-700" />
                Strategic Decision Log
              </span>
              <p className="text-amber-900 leading-relaxed font-mono text-[11px] sm:text-xs">
                {project.decisionLog}
              </p>
            </div>
          </div>
        )}

        {/* Tech Stack Pills and GitHub link */}
        <div className="mt-4 pt-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200/60"
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
              className="inline-flex items-center gap-1 text-xs font-bold text-stripe-slate hover:text-gold-700 transition-colors"
            >
              Inspect Source ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
