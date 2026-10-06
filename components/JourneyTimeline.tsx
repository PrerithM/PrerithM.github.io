"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Award, GraduationCap, Cpu, Code2, Users, FileText, ArrowUpRight, Sparkles, MapPin } from "lucide-react";

interface Milestone {
  id: string;
  year: string;
  phase: string;
  title: string;
  institution: string;
  description: string;
  keySkills: string[];
  certificateUrl?: string;
  awardHighlight?: string;
  icon: React.ElementType;
}

const MILESTONES: Milestone[] = [
  {
    id: "christ-university",
    year: "2026 – Present",
    phase: "Current Frontier",
    title: "BBA in Applied Finance with FinTech",
    institution: "CHRIST (Deemed to be University), Bengaluru",
    description:
      "Combining rigorous financial frameworks, financial modeling, and algorithmic mechanics with hands-on AI product engineering. Building at the intersection of capital allocation and edge systems.",
    keySkills: ["Applied Finance", "FinTech", "AI System Architecture", "Edge Systems"],
    icon: GraduationCap,
  },
  {
    id: "inspire-award",
    year: "2025",
    phase: "National Innovation Honor",
    title: "Govt. of India INSPIRE Award (₹10,000 Grant)",
    institution: "Department of Science & Technology, Government of India",
    description:
      "Awarded competitive national funding for conceptualizing and developing Pothole Tracker—a zero-friction citizen civic reporting system powered by WhatsApp Cloud APIs and Cloudflare edge AI.",
    awardHighlight: "₹10,000 Grant Awarded",
    certificateUrl: "/certificates/inspire-certificate.pdf",
    keySkills: ["Civic Tech", "Cloudflare Workers", "Workers AI", "Municipal Systems"],
    icon: Award,
  },
  {
    id: "unmesha-physics",
    year: "2025 – 2026",
    phase: "Community Leadership",
    title: "Lead Member, Organizing Committee",
    institution: "Unmesha Physics Club · Jnanodaya PU College",
    description:
      "Spearheaded regional high-school science and physical model-making competitions under the guidance of the faculty in charge; officially recognized with a certificate signed by the HOD of Physics & Principal.",
    certificateUrl: "/certificates/unmesha-physics-club.pdf",
    keySkills: ["Science Community", "Event Leadership", "Technical Prototyping"],
    icon: Users,
  },
  {
    id: "developer-certs",
    year: "Late 2022",
    phase: "Foundational Programming",
    title: "Certified Python & JavaScript Developer",
    institution: "CuriousJr Software Foundations",
    description:
      "Mastered programming logic, algorithmic problem solving, structured data arrays, and control flows through intensive hands-on programming certifications.",
    certificateUrl: "/certificates/curiousjr-python.png",
    keySkills: ["Python", "JavaScript", "Algorithms", "Data Logic"],
    icon: Code2,
  },
  {
    id: "atl-maker",
    year: "8th – 9th Standard",
    phase: "Maker Genesis",
    title: "Atal Tinkering Labs (ATL) Ambassador & Rotary VP",
    institution: "Ideal Jawa Rotary School, Mysuru",
    description:
      "Discovered the joy of hardware building, sensor integrations, and micro-controllers in the school's innovation lab. Served as student ambassador fostering peer tinkering, and Vice President of Rotary Interactive Club.",
    keySkills: ["Arduino C++", "Microcontrollers", "Sensors & Robotics", "Youth Leadership"],
    icon: Cpu,
  },
];

export function JourneyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll through the timeline section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  // Smooth the scroll line animation with a spring
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 35,
    restDelta: 0.001,
  });

  return (
    <section ref={containerRef} className="relative py-16 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6">
      {/* Intro Header */}
      <div className="text-center max-w-2xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-gold/15 text-terracotta border border-gold/40 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span>Continuous Trajectory</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-black tracking-tight mb-4">
          The Journey So Far
        </h2>
        <p className="text-sm sm:text-base text-terracotta/90 leading-relaxed">
          From 8th-grade sensor tinkering at Atal Tinkering Labs to national innovation grants and BBA Applied Finance at CHRIST University.
        </p>
      </div>

      {/* Main Timeline Wrapper with SVG Line */}
      <div className="relative">
        {/* Animated SVG Connector Line (Centered on desktop, left-aligned on mobile) */}
        <div className="absolute top-0 bottom-0 left-6 md:left-1/2 -translate-x-1/2 w-8 h-full pointer-events-none z-0">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 32 1000">
            {/* Background static guide line in terracotta */}
            <line
              x1="16"
              y1="0"
              x2="16"
              y2="1000"
              stroke="#854836"
              strokeWidth="3"
              strokeOpacity="0.2"
              strokeDasharray="4 4"
            />
            {/* Animated scroll-reactive drawing line in glowing gold */}
            <motion.line
              x1="16"
              y1="0"
              x2="16"
              y2="1000"
              stroke="#FFB22C"
              strokeWidth="4"
              strokeLinecap="round"
              style={{
                pathLength,
              }}
            />
          </svg>
        </div>

        {/* Milestone Cards */}
        <div className="space-y-12 sm:space-y-16 relative z-10">
          {MILESTONES.map((item, idx) => {
            const isEven = idx % 2 === 0;
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? "md:flex-row-reverse" : ""
                } gap-6 md:gap-12 pl-12 md:pl-0`}
              >
                {/* Node marker on the line */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-4 w-7 h-7 rounded-full bg-canvas border-4 border-gold shadow-gold-glow flex items-center justify-center z-20">
                  <div className="w-2 h-2 rounded-full bg-terracotta" />
                </div>

                {/* Content Card (Half width on desktop) */}
                <div className="w-full md:w-[calc(50%-2rem)]">
                  <div className="group rounded-3xl bg-white border-2 border-black/10 hover:border-gold p-6 sm:p-7 shadow-card-subtle hover:shadow-card-elevated transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="p-1.5 rounded-lg bg-gold/15 text-terracotta">
                          <Icon className="w-4 h-4 text-terracotta" />
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider text-terracotta">
                          {item.phase}
                        </span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-canvas border border-black/10 text-black">
                        {item.year}
                      </span>
                    </div>

                    {/* Title & Institution */}
                    <h3 className="text-xl sm:text-2xl font-black text-black tracking-tight mb-1 group-hover:text-terracotta transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-terracotta/90 mb-3 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-gold" />
                      {item.institution}
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-black/80 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Award / Grant Pill */}
                    {item.awardHighlight && (
                      <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gold/20 border border-gold text-xs font-black text-black shadow-sm">
                        <Award className="w-4 h-4 text-terracotta" />
                        <span>{item.awardHighlight}</span>
                      </div>
                    )}

                    {/* Skills pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-black/5">
                      {item.keySkills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded-md bg-canvas border border-black/10 text-black/90"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Certificate link */}
                    {item.certificateUrl && (
                      <div className="mt-4 pt-3 border-t border-black/5">
                        <a
                          href={item.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-terracotta hover:text-black transition-colors"
                        >
                          <FileText className="w-3.5 h-3.5 text-gold" />
                          <span>View Official Certificate & Verification</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Empty spacer for alignment on desktop */}
                <div className="hidden md:block w-[calc(50%-2rem)]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
