import React from "react";
import { Navbar } from "@/components/Navbar";
import { JourneyTimeline } from "@/components/JourneyTimeline";
import { FooterCTA } from "@/components/FooterCTA";
import { Compass, ArrowRight, Download, FolderGit2 } from "lucide-react";
import Link from "next/link";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export const metadata = {
  title: "My Journey — Prerith M | Applied Finance & AI Builder",
  description: "Interactive timeline of Prerith M from Atal Tinkering Labs in 8th grade to the national INSPIRE Award and CHRIST University BBA FinTech.",
};

export default function JourneyPage() {
  return (
    <div className="min-h-screen bg-canvas text-black flex flex-col justify-between">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Top Breadcrumb & Hero */}
      <header className="pt-28 pb-6 sm:pt-36 sm:pb-8 max-w-5xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex items-center gap-2 text-xs font-mono text-terracotta mb-4">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <span className="text-black font-bold">The Journey</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b-2 border-black/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-gold/20 text-black border border-gold mb-3">
              <Compass className="w-3.5 h-3.5 text-terracotta" />
              <span>Interactive Trajectory Timeline</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-black tracking-tight leading-tight">
              From Curiosity <br />
              <span className="text-terracotta">to National Grants.</span>
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-black text-black bg-gold hover:bg-gold-400 shadow-sm hover:shadow-gold-glow transition-all active:scale-[0.98]"
            >
              <FolderGit2 className="w-4 h-4" />
              <span>Explore Stacking Projects</span>
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

      {/* Stage 2 Animation: Scroll-Animated SVG Journey Line */}
      <main className="flex-1">
        <JourneyTimeline />
      </main>

      {/* High-Conversion Footer */}
      <FooterCTA />
    </div>
  );
}
