export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  badge?: string;
  year: string;
  gradient: string;
  accentColor: string;
  description: string;
  problem: string;
  solution: string;
  decisionLog: string;
  architecture: {
    nodes: string[];
    description: string;
  };
  metrics: { label: string; value: string; gold?: boolean }[];
  tags: string[];
  links?: {
    github?: string;
    demo?: string;
  };
}

export interface LabExperiment {
  title: string;
  category: string;
  year: string;
  description: string;
  tech: string[];
  githubUrl?: string;
}

export interface Credential {
  title: string;
  organization: string;
  period: string;
  description: string;
  badge: string;
  certificatePath?: string;
  highlight?: boolean;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Prerith M",
    tagline: "Finance student. AI product builder.",
    motto: "See the whole. Strip the noise. Own the core.",
    university: "CHRIST (Deemed to be University), Bengaluru",
    program: "BBA in Applied Finance with FinTech",
    cohort: "2026 – Present",
    location: "Bengaluru & Mysuru, India",
    email: "prerithm87@gmail.com",
    github: "https://github.com/PrerithM",
    linkedin: "https://www.linkedin.com/in/prerithm/",
    resumeUrl: "/Prerith-M-Resume.pdf",
    shortBio:
      "Bridging financial logic with real-world AI systems. Instead of traditional coding silos, I architect systems end-to-end and steer AI coding agents to ship production-grade products across civic tech, robotics, and mobile.",
  },

  trustMetrics: [
    {
      value: "₹10,000",
      label: "Govt. of India INSPIRE Grant",
      sublabel: "Dept. of Science & Technology",
      gold: true,
    },
    {
      value: "13+",
      label: "GitHub Repositories",
      sublabel: "Full-stack, Embedded, Mobile",
      gold: false,
    },
    {
      value: "BBA FinTech",
      label: "CHRIST University",
      sublabel: "Applied Finance Specialization",
      gold: true,
    },
    {
      value: "5+ Years",
      label: "Hands-on Tinkering",
      sublabel: "From ATL 8th Grade to Edge AI",
      gold: false,
    },
  ],

  flagships: [
    {
      id: "pothole-tracker",
      title: "Pothole Tracker",
      category: "Civic AI & Municipal Infrastructure",
      tagline: "AI-driven road damage detection with zero-install citizen reporting.",
      badge: "Govt. of India Funded",
      year: "2025 – Present",
      gradient: "from-amber-500 via-orange-500 to-amber-600",
      accentColor: "#D97706",
      description:
        "Designed and iterated an AI-powered municipal reporting network that lets citizens submit geo-tagged road damage directly over WhatsApp, processed at the edge by Cloudflare Workers and mapped onto real-time municipal repair dashboards.",
      problem:
        "Municipal complaint apps suffer from near-zero adoption because citizens refuse to download dedicated apps, while road departments lack structured, severity-classified data to prioritize road repairs.",
      solution:
        "Built a friction-free WhatsApp conversational flow that accepts photos and live locations, executes computer vision damage classification via serverless workers, and aggregates geolocations into an operational repair dispatch board.",
      decisionLog:
        "Migrated from a self-hosted Python Telegram prototype to WhatsApp Cloud API + Cloudflare Workers. Why? Telegram required always-on compute and had limited Indian citizen penetration. Cloudflare Workers cut server overhead to $0 while WhatsApp gave 100% immediate reach.",
      architecture: {
        nodes: ["Citizen WhatsApp", "Cloudflare Worker Edge", "Workers AI Vision", "KV Geo-Cluster", "Municipal Dashboard"],
        description: "WhatsApp Webhook → Edge Worker authentication → AI Image Severity Scoring → Geo-indexed KV persistence → Priority Dispatch",
      },
      metrics: [
        { label: "Govt Grant", value: "₹10,000", gold: true },
        { label: "Latency", value: "< 240ms", gold: false },
        { label: "Edge Cost", value: "$0.00 / mo", gold: true },
        { label: "Citizen Friction", value: "Zero Downloads", gold: false },
      ],
      tags: ["Cloudflare Workers", "Workers AI", "WhatsApp Cloud API", "KV Storage", "Civic Tech", "System Design"],
      links: {
        github: "https://github.com/PrerithM",
      },
    },
    {
      id: "rover-mania",
      title: "RoverMania",
      category: "Robotics & Edge Vision",
      tagline: "Real-time Neubrutalist rover command centre with WebRTC and Gemini AI vision.",
      badge: "Next.js 16 + WebRTC",
      year: "2024 – 2026",
      gradient: "from-indigo-600 via-blue-600 to-cyan-500",
      accentColor: "#635BFF",
      description:
        "Engineered an autonomous & remote-controlled rover command deck powered by Next.js 16, WebRTC live video streaming, low-latency WebSocket motor controls, and Gemini Flash 2.5 for live scene analysis.",
      problem:
        "Standard DIY hardware robotics interfaces are sluggish, reliant on local HDMI monitors, and lack intelligent contextual awareness of their physical environment.",
      solution:
        "Constructed a high-performance web cockpit with touch/keyboard D-pads, sub-200ms WebRTC WHEP camera feeds from a Raspberry Pi, and an AI co-pilot that inspects obstacle frames on demand.",
      decisionLog:
        "Swapped HTTP MJPEG video for WebRTC WHEP via MediaMTX server on the Raspberry Pi. This reduced camera streaming latency from ~1.8s down to <150ms, making real-time steering over local Wi-Fi smooth and predictable.",
      architecture: {
        nodes: ["Next.js 16 Cockpit", "WebRTC WHEP Feed", "WebSocket Motor Channel", "Raspberry Pi 4", "Gemini 2.5 Flash"],
        description: "Browser Cockpit ↔ WHEP MediaMTX Stream (Video) + WebSocket Server (Motors) ↔ GPIO Motor Drivers + Camera Module",
      },
      metrics: [
        { label: "Video Latency", value: "< 150ms", gold: false },
        { label: "Next.js Version", value: "v16 App Router", gold: true },
        { label: "AI Co-pilot", value: "Gemini 2.5 Flash", gold: false },
        { label: "Controls", value: "Keyboard + Touch", gold: false },
      ],
      tags: ["Next.js 16", "WebRTC", "Raspberry Pi", "WebSockets", "Computer Vision", "Gemini AI", "Tailwind CSS"],
      links: {
        github: "https://github.com/PrerithM/Rover-Mania",
      },
    },
    {
      id: "resume-builder",
      title: "Resume Builder",
      category: "Mobile Product Engineering",
      tagline: "Offline-first dynamic mobile resume engine with on-device native PDF compilation.",
      badge: "React Native & Expo",
      year: "2024 – 2025",
      gradient: "from-violet-600 via-purple-600 to-pink-500",
      accentColor: "#7928CA",
      description:
        "A fast, privacy-respecting mobile application built with React Native and Expo that compiles polished, standardized resumes offline and exports directly to the native OS share sheet.",
      problem:
        "Most mobile resume creators demand costly monthly subscriptions, require cloud account logins, and transmit sensitive personal contact info over untrusted servers.",
      solution:
        "Architected an offline-first state machine with dynamic multi-tier qualification inputs, instant client-side validation, and instant HTML-to-PDF rendering running entirely on-device.",
      decisionLog:
        "Engineered the PDF pipeline using native print drivers (`expo-print` + `expo-sharing`) rather than server-side headless browsers, guaranteeing zero API downtime and complete user data sovereignty.",
      architecture: {
        nodes: ["Dynamic Form UI", "Zustand Reactive Store", "HTML/CSS Template Engine", "Expo Print Native Engine", "OS Share Sheet"],
        description: "Form Entry → Normalized State Store → Dynamic Template Interpolation → Native PDF Generation → Local Sharing",
      },
      metrics: [
        { label: "Network Required", value: "0 kB (Offline)", gold: true },
        { label: "Render Time", value: "< 800ms", gold: false },
        { label: "Data Privacy", value: "100% On-Device", gold: true },
        { label: "Target Platforms", value: "iOS & Android", gold: false },
      ],
      tags: ["React Native", "Expo", "TypeScript", "NativeWind", "Zustand", "Offline-First", "System Architecture"],
      links: {
        github: "https://github.com/PrerithM/Resume-Builder",
      },
    },
  ],

  howIBuild: [
    {
      step: "01",
      title: "System Architecture & Financial Viability",
      description:
        "Every build starts with a strict breakdown: what is the user friction? What are the latency and storage requirements? Can this run on $0 serverless tiers with near-zero marginal cost?",
      icon: "Layers",
      color: "gold",
    },
    {
      step: "02",
      title: "Modern Edge & Hardware Selection",
      description:
        "Selecting the right primitives: Cloudflare Workers for edge execution, Next.js for sleek client interfaces, Raspberry Pi & Microcontrollers for hardware interactions, and WebRTC for live telemetry.",
      icon: "Cpu",
      color: "indigo",
    },
    {
      step: "03",
      title: "AI-Directed Software Engineering",
      description:
        "I leverage AI coding agents (Claude Code, modern LLMs) as high-bandwidth execution engines while I focus on strict typing, modular boundaries, security, and end-to-end integration.",
      icon: "Sparkles",
      color: "cyan",
    },
    {
      step: "04",
      title: "Operational Polish & Production Shipping",
      description:
        "Testing for resilience, offline capabilities, graceful degradation, and intuitive UI UX before shipping live to production with clear documentation.",
      icon: "CheckCircle",
      color: "emerald",
    },
  ],

  labExperiments: [
    {
      title: "Arduino Innovations & IoT",
      category: "Hardware & Robotics",
      year: "8th Std – Present",
      description: "Collection of sensor automation projects and micro-controller builds created at Atal Tinkering Labs (ATL) and personal maker labs.",
      tech: ["Arduino C++", "Sensors", "IoT", "Automation", "Robotics"],
      githubUrl: "https://github.com/PrerithM/Arduino-Projects",
    },
    {
      title: "Easy-Editor",
      category: "Desktop & Mobile Media Tool",
      year: "2024",
      description: "A fast, lightweight video editing interface focused on speed, simple trims, and zero bloat.",
      tech: ["Dart", "Flutter", "Media Pipeline"],
      githubUrl: "https://github.com/PrerithM/Easy-Editor",
    },
    {
      title: "Codes of Memory",
      category: "Computer Vision Experiments",
      year: "2024 – 2025",
      description: "Explored visual reasoning, object inspection, and camera data streams connecting generative AI with physical inputs.",
      tech: ["Python", "OpenCV", "Raspberry Pi", "Vision AI"],
    },
    {
      title: "Python Automation Suite",
      category: "Applied Scripts & Utilities",
      year: "2023 – 2024",
      description: "Curated scripts for system utilities, web scraping, and data wrangling built throughout learning phases.",
      tech: ["Python", "APIs", "Data Processing"],
      githubUrl: "https://github.com/PrerithM/Python-Projects",
    },
  ],

  credentials: [
    {
      title: "Government of India INSPIRE Award (₹10,000)",
      organization: "Department of Science & Technology, Govt. of India",
      period: "2nd PUC (2025)",
      description:
        "Selected and funded for designing an innovative AI-assisted civic infrastructure monitoring platform (Pothole Tracker).",
      badge: "National Honor",
      certificatePath: "/certificates/inspire-certificate.pdf",
      highlight: true,
    },
    {
      title: "Lead Member, Organizing Committee",
      organization: "Unmesha Physics Club",
      period: "2025 – 2026",
      description:
        "Led organization of regional science model-making exhibitions and technical demonstrations; certified by HOD of Physics & Principal.",
      badge: "Leadership",
      certificatePath: "/certificates/unmesha-physics-club.pdf",
      highlight: true,
    },
    {
      title: "Vice President & Community Lead",
      organization: "Rotary Interactive Club",
      period: "9th Standard",
      description:
        "Spearheaded student-led community awareness projects, collaborative team workshops, and youth leadership initiatives.",
      badge: "Community",
      highlight: false,
    },
    {
      title: "ATL Labs Innovation Ambassador",
      organization: "Ideal Jawa Rotary School (Atal Tinkering Labs)",
      period: "9th Standard",
      description:
        "Represented student maker lab initiatives, mentoring junior peers on electronics, prototyping, and hands-on tinkering.",
      badge: "Innovation",
      highlight: false,
    },
    {
      title: "Python & JavaScript Developer Certifications",
      organization: "CuriousJr",
      period: "Nov – Dec 2022",
      description:
        "Foundational software development credentials covering programming logic, data structures, and algorithm execution.",
      badge: "Certified",
      certificatePath: "/certificates/curiousjr-python.png",
      highlight: false,
    },
  ],
};
