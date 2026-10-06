"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bot, 
  Video, 
  TrendingUp, 
  CheckCircle2, 
  Zap, 
  ShieldCheck
} from "lucide-react";

export function HeroSimulator() {
  const [activeTab, setActiveTab] = useState<"rover" | "civic" | "fintech">("rover");
  
  // Interactive FinTech state
  const [monthlyInvest, setMonthlyInvest] = useState<number>(10000);
  const [rateReturn, setRateReturn] = useState<number>(14);
  const [years, setYears] = useState<number>(10);

  // Compounding math: M * [((1 + r)^n - 1) / r] * (1 + r)
  const monthlyRate = rateReturn / 12 / 100;
  const totalMonths = years * 12;
  const investedAmount = monthlyInvest * totalMonths;
  const futureValue =
    monthlyInvest *
    ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) *
    (1 + monthlyRate);
  const wealthGained = Math.max(0, futureValue - investedAmount);

  // Rover motor trigger state
  const [activeDirection, setActiveDirection] = useState<string>("FWD");

  return (
    <div className="w-full max-w-xl mx-auto lg:max-w-none">
      {/* High-contrast card container in 4-color palette */}
      <div className="relative rounded-3xl bg-white/95 backdrop-blur-xl border-2 border-black/10 hover:border-gold shadow-card-elevated overflow-hidden transition-all duration-300">
        
        {/* Top Control Bar & Tabs */}
        <div className="bg-canvas border-b border-black/10 p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-terracotta inline-block" />
            <span className="w-3 h-3 rounded-full bg-gold inline-block" />
            <span className="w-3 h-3 rounded-full bg-black inline-block" />
            <span className="ml-2 text-xs font-mono font-bold text-terracotta uppercase tracking-wider">
              PRTH Live Simulator
            </span>
          </div>

          {/* Interactive Mode Pills */}
          <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-black/10 text-xs font-bold">
            <button
              onClick={() => setActiveTab("rover")}
              className={`px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                activeTab === "rover"
                  ? "bg-gold text-black shadow-sm font-black"
                  : "text-black/70 hover:text-black"
              }`}
            >
              <Video className="w-3.5 h-3.5 text-terracotta" />
              <span>Rover Telemetry</span>
            </button>
            <button
              onClick={() => setActiveTab("civic")}
              className={`px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                activeTab === "civic"
                  ? "bg-gold text-black shadow-sm font-black"
                  : "text-black/70 hover:text-black"
              }`}
            >
              <Bot className="w-3.5 h-3.5 text-terracotta" />
              <span>Civic AI</span>
            </button>
            <button
              onClick={() => setActiveTab("fintech")}
              className={`px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                activeTab === "fintech"
                  ? "bg-gold text-black shadow-sm font-black"
                  : "text-black/70 hover:text-black"
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5 text-terracotta" />
              <span>FinTech Model</span>
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="p-4 sm:p-6 min-h-[360px] flex flex-col justify-between bg-white">
          <AnimatePresence mode="wait">
            
            {/* 1. ROVER TELEMETRY TAB */}
            {activeTab === "rover" && (
              <motion.div
                key="rover"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                {/* Viewfinder UI */}
                <div className="relative rounded-2xl bg-black text-white p-4 overflow-hidden border border-gold/40 shadow-inner">
                  {/* HUD Scanlines and Target Box */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-gold mb-2">
                    <span className="flex items-center gap-1.5 font-bold">
                      <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
                      WEBRTC WHEP STREAM · 1080p
                    </span>
                    <span className="text-canvas/80">LATENCY: 86ms · 60 FPS</span>
                  </div>

                  {/* Simulated Camera Frame */}
                  <div className="relative h-32 rounded-xl bg-gradient-to-b from-stone-900 to-black border border-white/10 flex items-center justify-center overflow-hidden">
                    {/* Simulated target box */}
                    <div className="absolute border border-gold bg-gold/15 rounded-lg px-2.5 py-1 text-[10px] font-mono text-gold flex flex-col items-center animate-pulse">
                      <span className="text-[9px] text-white">[ GEMINI 2.5 FLASH DETECT ]</span>
                      <span className="text-white font-bold">Obstacle: Clear Runway</span>
                      <span className="text-gold font-bold">CONFIDENCE: 97.4%</span>
                    </div>

                    {/* Corner accents */}
                    <div className="absolute top-2 left-2 text-[9px] font-mono text-canvas/60">
                      RPi4 IP: 10.248.130.62
                    </div>
                    <div className="absolute bottom-2 right-2 text-[9px] font-mono text-gold flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      BATTERY: 94% (LiPo 3S)
                    </div>
                  </div>

                  {/* Motor Controls Switcher */}
                  <div className="mt-3 flex items-center justify-between pt-2 border-t border-white/10">
                    <div className="text-[11px] font-mono text-canvas/80">
                      MOTOR CMD: <span className="text-gold font-bold">{activeDirection}</span>
                    </div>
                    <div className="flex gap-1.5">
                      {["LEFT", "FWD", "RIGHT"].map((dir) => (
                        <button
                          key={dir}
                          onClick={() => setActiveDirection(dir)}
                          className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold transition-all ${
                            activeDirection === dir
                              ? "bg-gold text-black shadow-sm font-black"
                              : "bg-white/10 text-white hover:bg-white/20"
                          }`}
                        >
                          {dir}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Spec Pills */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 rounded-xl bg-canvas border border-black/10">
                    <span className="block text-[10px] font-bold text-terracotta uppercase">Framework</span>
                    <span className="text-xs font-black text-black">Next.js 16</span>
                  </div>
                  <div className="p-2 rounded-xl bg-canvas border border-black/10">
                    <span className="block text-[10px] font-bold text-terracotta uppercase">Edge AI</span>
                    <span className="text-xs font-black text-black">Gemini Flash</span>
                  </div>
                  <div className="p-2 rounded-xl bg-canvas border border-black/10">
                    <span className="block text-[10px] font-bold text-terracotta uppercase">Hardware</span>
                    <span className="text-xs font-black text-black">Raspberry Pi 4</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 2. CIVIC AI TAB */}
            {activeTab === "civic" && (
              <motion.div
                key="civic"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-3"
              >
                {/* Simulated WhatsApp Reporting Card */}
                <div className="rounded-2xl bg-canvas border border-black/10 p-3.5 space-y-2">
                  <div className="flex items-center justify-between pb-2 border-b border-black/10 text-xs">
                    <span className="flex items-center gap-1.5 font-bold text-black">
                      <span className="w-2 h-2 rounded-full bg-gold" />
                      WhatsApp Cloud Webhook
                    </span>
                    <span className="font-mono text-[10px] text-terracotta">Cloudflare Edge Worker</span>
                  </div>

                  {/* Citizen Message */}
                  <div className="flex justify-end">
                    <div className="bg-black text-white rounded-2xl rounded-tr-none px-3 py-1.5 text-xs max-w-[85%] shadow-sm">
                      <p className="font-medium">⚠️ Severe pothole on Outer Ring Road, near Kadubeesanahalli bridge.</p>
                      <span className="text-[10px] text-gold block text-right mt-0.5">14:28 ✓✓</span>
                    </div>
                  </div>

                  {/* Worker Automated Pipeline Response */}
                  <div className="flex justify-start">
                    <div className="bg-white border-2 border-gold rounded-2xl rounded-tl-none p-3 text-xs max-w-[92%] shadow-sm space-y-1.5">
                      <div className="flex items-center gap-1.5 text-terracotta font-black text-[11px]">
                        <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                        AI Vision Classification Complete:
                      </div>
                      <div className="bg-canvas rounded-xl p-2 font-mono text-[11px] text-black border border-black/10 space-y-0.5">
                        <p>• Severity: <strong className="text-terracotta font-black">Grade 4 / 5 (Critical)</strong></p>
                        <p>• Geo-Cluster: 12.9352° N, 77.6946° E</p>
                        <p className="text-black font-bold">• Ticket Dispatched: #BBMP-RD-4029</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* INSPIRE Recognition Pill */}
                <div className="p-3 rounded-2xl bg-gold/15 border border-gold flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-gold text-black flex items-center justify-center font-black text-xs shadow-sm">
                      ₹
                    </span>
                    <div>
                      <p className="text-xs font-black text-black">Dept. of Science &amp; Technology INSPIRE Award</p>
                      <p className="text-[11px] font-semibold text-terracotta">Govt. of India ₹10,000 Innovation Grant</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-black text-black bg-gold px-2 py-0.5 rounded-full">
                    Funded
                  </span>
                </div>
              </motion.div>
            )}

            {/* 3. FINTECH COMPOUNDING TAB */}
            {activeTab === "fintech" && (
              <motion.div
                key="fintech"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                {/* Interactive Sliders */}
                <div className="grid grid-cols-2 gap-3 bg-canvas p-3 rounded-xl border border-black/10">
                  <div>
                    <label className="text-[11px] font-bold text-black block mb-1">
                      Monthly: ₹{monthlyInvest.toLocaleString("en-IN")}
                    </label>
                    <input
                      type="range"
                      min={2000}
                      max={50000}
                      step={1000}
                      value={monthlyInvest}
                      onChange={(e) => setMonthlyInvest(Number(e.target.value))}
                      className="w-full accent-gold cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-black block mb-1">
                      CAGR: {rateReturn}% Annual
                    </label>
                    <input
                      type="range"
                      min={8}
                      max={22}
                      step={1}
                      value={rateReturn}
                      onChange={(e) => setRateReturn(Number(e.target.value))}
                      className="w-full accent-gold cursor-pointer"
                    />
                  </div>
                </div>

                {/* Financial Output Dashboard */}
                <div className="rounded-2xl bg-black text-white p-4 shadow-sm space-y-3 border border-gold/30">
                  <div className="flex items-center justify-between text-xs text-canvas/70">
                    <span className="font-mono">HORIZON: {years} YEARS</span>
                    <span className="font-bold text-gold">APPLIED FINANCE ENGINE</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1 border-t border-white/10">
                    <div>
                      <span className="text-[10px] text-canvas/60 uppercase tracking-wider block">Capital Invested</span>
                      <span className="text-base font-bold font-mono text-white">
                        ₹{Math.round(investedAmount).toLocaleString("en-IN")}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-gold uppercase tracking-wider block">Future Value</span>
                      <span className="text-xl font-black font-mono text-gold">
                        ₹{Math.round(futureValue).toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>

                  {/* Growth Bar */}
                  <div className="space-y-1">
                    <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden flex">
                      <div
                        className="bg-white/40 h-full"
                        style={{ width: `${(investedAmount / futureValue) * 100}%` }}
                      />
                      <div
                        className="bg-gold h-full flex-1"
                      />
                    </div>
                    <div className="flex justify-between text-[10px] text-canvas/70 font-mono">
                      <span>Invested: ₹{(investedAmount / 100000).toFixed(1)}L</span>
                      <span className="text-gold font-bold">Wealth Gained: ₹{(wealthGained / 100000).toFixed(1)}L</span>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <span className="text-[11px] font-bold text-terracotta">
                    Demonstrating financial algorithmic modeling built natively in Next.js
                  </span>
                </div>
              </motion.div>
            )}

          </AnimatePresence>

          {/* Card Footer status info */}
          <div className="mt-3 pt-3 border-t border-black/10 flex items-center justify-between text-[11px] text-black/60">
            <span className="flex items-center gap-1 font-bold text-black">
              <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
              Live Interactive Prototype
            </span>
            <span className="text-terracotta font-mono font-bold">
              Prerith M
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
