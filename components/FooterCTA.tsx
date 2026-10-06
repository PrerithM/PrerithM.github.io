"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { Download, Mail, Check, ArrowUpRight, MapPin } from "lucide-react";
import Link from "next/link";

export function FooterCTA() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="relative z-10 bg-black text-white pt-20 pb-12 overflow-hidden border-t-2 border-gold/30">
      {/* Background ambient warm gold lighting */}
      <div 
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[140px] opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #FFB22C 0%, #854836 60%, transparent 80%)",
        }}
      />
      <div 
        className="absolute top-0 left-0 w-[450px] h-[450px] rounded-full blur-[130px] opacity-15 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #854836 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA Banner */}
        <div className="rounded-3xl bg-gradient-to-br from-[#121212] via-black to-[#1c1917] border-2 border-gold/40 p-8 sm:p-12 shadow-deck-stack mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-gold/20 text-gold border border-gold/40 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              Open for FinTech &amp; AI Product Opportunities
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
              Let&rsquo;s build financial infrastructure and AI systems together.
            </h2>
            
            <p className="text-canvas/80 text-base sm:text-lg mb-8 leading-relaxed">
              Whether you are evaluating a candidate who brings financial discipline, systems architecture, and rapid AI execution, or exploring technical collaboration—let&rsquo;s connect.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Primary Résumé Button */}
              <a
                href={PORTFOLIO_DATA.profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-black text-black bg-gold hover:bg-gold-400 shadow-gold-glow transition-all active:scale-[0.98]"
              >
                <Download className="w-4 h-4" />
                Download Résumé (PDF)
              </a>

              {/* Copy Email Button */}
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all active:scale-[0.98]"
                aria-label="Copy Email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-gold" />
                    <span className="text-gold">Copied: prerithm87@gmail.com</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 text-canvas/70" />
                    <span>Copy prerithm87@gmail.com</span>
                  </>
                )}
              </button>

              {/* LinkedIn Direct Link */}
              <a
                href={PORTFOLIO_DATA.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-2xl text-sm font-bold text-gold hover:text-white transition-colors"
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Metadata & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-canvas/70">
          <div className="flex items-center gap-4">
            <span className="font-black text-white">Prerith M</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-gold" />
              {PORTFOLIO_DATA.profile.location}
            </span>
            <span>•</span>
            <span>CHRIST University, Bengaluru</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <Link href="/journey" className="hover:text-gold transition-colors">
              The Journey
            </Link>
            <Link href="/projects" className="hover:text-gold transition-colors">
              Projects Deck
            </Link>
            <a
              href={PORTFOLIO_DATA.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              GitHub
            </a>
            <a
              href={PORTFOLIO_DATA.profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              Résumé
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
