"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { Award, FileText, ArrowUpRight } from "lucide-react";

export function RecognitionSection() {
  return (
    <section id="credentials" className="py-16 relative z-10 bg-canvas">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-gold/20 text-black border border-gold mb-3">
            <Award className="w-3.5 h-3.5 text-terracotta" />
            <span>Verified Honors &amp; Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
            Recognition, Grants &amp; Community Impact
          </h2>
          <p className="mt-2 text-sm sm:text-base text-black/80 leading-relaxed">
            Validation of technical rigor and initiative from the Government of India, university bodies, and youth innovation programs.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PORTFOLIO_DATA.credentials.map((cred) => (
            <div
              key={cred.title}
              className={`rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between ${
                cred.highlight
                  ? "bg-white border-2 border-gold shadow-card-elevated"
                  : "bg-white/80 border-2 border-black/10 hover:border-gold hover:shadow-card-subtle"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-[11px] font-black px-2.5 py-0.5 rounded-full ${
                      cred.highlight
                        ? "bg-gold text-black"
                        : "bg-canvas text-black border border-black/10"
                    }`}
                  >
                    {cred.badge}
                  </span>
                  <span className="text-xs font-mono font-bold text-terracotta">
                    {cred.period}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-black text-black mb-1">
                  {cred.title}
                </h3>

                <p className="text-xs font-bold text-terracotta uppercase tracking-wider mb-3">
                  {cred.organization}
                </p>

                <p className="text-xs sm:text-sm text-black/80 leading-relaxed">
                  {cred.description}
                </p>
              </div>

              {cred.certificatePath && (
                <div className="mt-5 pt-3 border-t border-black/10">
                  <a
                    href={cred.certificatePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-black text-terracotta hover:text-black group transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5 text-gold" />
                    <span>View Official Verification</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
