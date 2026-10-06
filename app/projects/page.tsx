import React from "react";
import { Navbar } from "@/components/Navbar";
import { StackingCards } from "@/components/StackingCards";
import { HowIBuild } from "@/components/HowIBuild";
import { LabGrid } from "@/components/LabGrid";
import { FooterCTA } from "@/components/FooterCTA";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { FolderGit2, Compass, ArrowRight, Download, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Projects & Builds — Prerith M | Flagship Systems",
  description: "Interactive card deck of flagship projects by Prerith M: Pothole Tracker, RoverMania, and Resume Builder.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-canvas text-black flex flex-col justify-between">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Top Header */}
      <header className="pt-28 pb-6 sm:pt-36 sm:pb-8 max-w-5xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex items-center gap-2 text-xs font-mono text-terracotta mb-4">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <span className="text-black font-bold">Projects Deck</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b-2 border-black/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-gold/20 text-black border border-gold mb-3">
              <FolderGit2 className="w-3.5 h-3.5 text-terracotta" />
              <span>Interactive Card Deck</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-black tracking-tight leading-tight">
              Flagship Builds <br />
              <span className="text-terracotta">&amp; System Blueprints.</span>
            </h1>
            <p className="mt-3 text-sm sm:text-base text-black/80 max-w-2xl leading-relaxed">
              Scroll down to slide through each flagship build like a physical deck of cards. Each card contains real architectural schematics, operational decision logs, and live telemetry specs.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/journey"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-black text-black bg-gold hover:bg-gold-400 shadow-sm hover:shadow-gold-glow transition-all active:scale-[0.98]"
            >
              <Compass className="w-4 h-4" />
              <span>Explore My Journey</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={PORTFOLIO_DATA.profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold text-black bg-white border-2 border-black/10 hover:border-black transition-all"
            >
              <Download className="w-4 h-4 text-terracotta" />
              <span>Download Résumé</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Stacking Cards Section */}
      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 w-full pt-8">
        <StackingCards projects={PORTFOLIO_DATA.flagships} />

        {/* How I Build Section */}
        <div className="mt-16 pt-12 border-t-2 border-black/10">
          <HowIBuild />
        </div>

        {/* The Lab Grid */}
        <div className="mt-16">
          <LabGrid />
        </div>
      </main>

      {/* High-Conversion Footer */}
      <FooterCTA />
    </div>
  );
}
