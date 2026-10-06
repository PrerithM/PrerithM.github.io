"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Download, ExternalLink, Menu, X, ArrowUpRight, Compass, FolderGit2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-canvas/90 backdrop-blur-md shadow-sm border-b border-black/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand mark */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 text-black font-black text-lg tracking-tight rounded-xl p-1"
          >
            <span className="w-8 h-8 rounded-xl bg-black text-gold flex items-center justify-center font-black text-sm shadow-sm border border-gold/40 group-hover:scale-105 transition-transform">
              P
            </span>
            <span className="font-black tracking-tight text-black">
              Prerith<span className="text-gold">.M</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-gold/15 text-terracotta border border-gold/40">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              Applied Finance · AI Builder
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-black/80" aria-label="Main Navigation">
            <Link
              href="/"
              className="hover:text-terracotta hover:underline underline-offset-8 decoration-gold decoration-2 transition-colors"
            >
              Overview
            </Link>
            <Link
              href="/journey"
              className="hover:text-terracotta hover:underline underline-offset-8 decoration-gold decoration-2 transition-colors flex items-center gap-1.5"
            >
              <Compass className="w-3.5 h-3.5 text-gold" />
              <span>Journey</span>
            </Link>
            <Link
              href="/projects"
              className="hover:text-terracotta hover:underline underline-offset-8 decoration-gold decoration-2 transition-colors flex items-center gap-1.5"
            >
              <FolderGit2 className="w-3.5 h-3.5 text-gold" />
              <span>Projects</span>
            </Link>
            <a
              href="#contact"
              className="hover:text-terracotta hover:underline underline-offset-8 decoration-gold decoration-2 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold px-3 py-2 text-black hover:text-terracotta hover:bg-black/5 rounded-xl transition-colors flex items-center gap-1"
            >
              GitHub
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 text-gold" />
            </a>

            <a
              href={PORTFOLIO_DATA.profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-black text-black bg-gold hover:bg-gold-400 shadow-sm hover:shadow-gold-glow transition-all duration-200 active:scale-[0.98]"
            >
              <Download className="w-3.5 h-3.5" />
              Download Résumé
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={PORTFOLIO_DATA.profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-black bg-gold font-bold"
              aria-label="Download Résumé"
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-black hover:text-terracotta rounded-xl hover:bg-black/5"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-black/10 bg-canvas/95 rounded-2xl p-4 shadow-xl flex flex-col gap-3">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-black font-bold hover:bg-black/5"
            >
              Overview
            </Link>
            <Link
              href="/journey"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-black font-bold hover:bg-black/5 flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-gold" />
              <span>The Journey</span>
            </Link>
            <Link
              href="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-black font-bold hover:bg-black/5 flex items-center gap-2"
            >
              <FolderGit2 className="w-4 h-4 text-gold" />
              <span>Projects (Stacking Deck)</span>
            </Link>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-black font-bold hover:bg-black/5"
            >
              Contact
            </a>
            <div className="pt-2 border-t border-black/10 flex flex-col gap-2">
              <a
                href={PORTFOLIO_DATA.profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 rounded-xl text-sm font-black text-black bg-gold shadow-sm"
              >
                Download Résumé (PDF)
              </a>
              <a
                href={PORTFOLIO_DATA.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2 rounded-xl text-xs font-bold text-black bg-white border border-black/10"
              >
                LinkedIn Profile ↗
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
