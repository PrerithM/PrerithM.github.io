import React from "react";
import { Navbar } from "@/components/Navbar";
import { TubesBackground } from "@/components/TubesBackground";
import { MetricsStrip } from "@/components/MetricsStrip";
import { HeroSimulator } from "@/components/HeroSimulator";
import { FooterCTA } from "@/components/FooterCTA";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { Compass, FolderGit2, Download, ArrowRight, MousePointer2, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-canvas text-black flex flex-col justify-between">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Stage 1: Interactive 3D Gold Tubes Hero Section */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-12 overflow-hidden">
        {/* 3D Tubes Canvas (Gold tubes on white/off-white canvas) */}
        <TubesBackground className="min-h-[92vh]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center py-12">
            
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
              
              {/* Left Column: Core Positioning & Dual CTAs */}
              <div className="lg:col-span-7 space-y-6 text-left">
                {/* Academic & Builder Pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/90 backdrop-blur-md text-terracotta border-2 border-gold/60 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                  <span>CHRIST University · Applied Finance with FinTech</span>
                </div>

                {/* Primary Headline */}
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-black tracking-tight leading-[1.05]">
                  Finance student. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-terracotta via-gold to-yellow-500 drop-shadow-sm">
                    AI product builder.
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg text-black/85 max-w-2xl leading-relaxed font-normal bg-white/40 backdrop-blur-xs rounded-xl p-1">
                  I turn ideas into shipped systems—civic AI, robotics, and mobile—bringing financial viability, system design, and AI-directed engineering to every product.
                </p>

                {/* Two Clear Pathways to Journey & Projects */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  {/* Option 1: Explore Journey */}
                  <Link
                    href="/journey"
                    className="inline-flex items-center gap-2.5 px-6 py-4 rounded-2xl text-sm font-black text-black bg-gold hover:bg-gold-400 border-2 border-black/10 shadow-gold-glow hover:shadow-gold-glow-lg transition-all active:scale-[0.98] group"
                  >
                    <Compass className="w-5 h-5 text-terracotta group-hover:rotate-45 transition-transform" />
                    <span>Explore My Journey</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  {/* Option 2: Explore Projects */}
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2.5 px-6 py-4 rounded-2xl text-sm font-black text-white bg-black hover:bg-slate-900 border-2 border-gold/50 shadow-md hover:border-gold transition-all active:scale-[0.98] group"
                  >
                    <FolderGit2 className="w-5 h-5 text-gold group-hover:scale-110 transition-transform" />
                    <span>Explore Projects</span>
                    <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Micro-hint for 3D cursor interaction */}
                <div className="pt-2 flex items-center gap-2 text-xs font-mono text-terracotta">
                  <MousePointer2 className="w-4 h-4 text-gold animate-bounce" />
                  <span>Move cursor to guide 3D gold tubes · Click anywhere to randomize colors</span>
                </div>

                {/* Signature Motto */}
                <div className="pt-2 flex items-center gap-3 text-xs sm:text-sm font-mono text-black/80">
                  <span className="px-2 py-0.5 rounded bg-black text-gold font-bold">
                    MOTTO
                  </span>
                  <span className="font-semibold italic text-black">
                    &ldquo;{PORTFOLIO_DATA.profile.motto}&rdquo;
                  </span>
                </div>
              </div>

              {/* Right Column: Interactive FinTech & AI Simulator */}
              <div className="lg:col-span-5 flex justify-center">
                <HeroSimulator />
              </div>

            </div>

          </div>
        </TubesBackground>
      </section>

      {/* Trust & Credibility Strip */}
      <MetricsStrip />

      {/* Quick Overview Cards for Fast Decision Making */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Journey Teaser */}
          <div className="rounded-3xl bg-white border-2 border-black/10 hover:border-gold p-8 shadow-card-subtle hover:shadow-card-elevated transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-xl bg-gold/20 text-terracotta">
                  <Compass className="w-6 h-6 text-terracotta" />
                </span>
                <span className="text-xs font-mono font-bold text-terracotta bg-canvas px-3 py-1 rounded-full border border-black/10">
                  Stage 2: Scroll SVG Line
                </span>
              </div>
              <h2 className="text-2xl font-black text-black tracking-tight mb-2">
                The Journey &amp; Milestones
              </h2>
              <p className="text-sm text-black/80 leading-relaxed mb-6">
                Trace my path through an interactive scroll-drawn SVG connector line: from 8th-grade IoT innovations at Atal Tinkering Labs to the Govt. of India INSPIRE Award and CHRIST University Applied Finance.
              </p>
            </div>
            <Link
              href="/journey"
              className="inline-flex items-center gap-2 text-sm font-black text-terracotta hover:text-black group transition-colors"
            >
              <span>Walk the interactive journey</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>

          {/* Card 2: Projects Stacking Deck Teaser */}
          <div className="rounded-3xl bg-white border-2 border-black/10 hover:border-gold p-8 shadow-card-subtle hover:shadow-card-elevated transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-xl bg-black text-gold">
                  <FolderGit2 className="w-6 h-6 text-gold" />
                </span>
                <span className="text-xs font-mono font-bold text-terracotta bg-canvas px-3 py-1 rounded-full border border-black/10">
                  Stage 3: Stacking Deck
                </span>
              </div>
              <h2 className="text-2xl font-black text-black tracking-tight mb-2">
                Flagship Projects &amp; Architecture
              </h2>
              <p className="text-sm text-black/80 leading-relaxed mb-6">
                Experience the sticky card deck: slide through Pothole Tracker (civic AI), RoverMania (Next.js 16 WebRTC rover), and Resume Builder (offline mobile PDF engine) with live telemetry diagrams.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-black text-terracotta hover:text-black group transition-colors"
            >
              <span>Explore the stacking cards deck</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      {/* Footer CTA */}
      <FooterCTA />
    </div>
  );
}
