import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prerith M — Finance Student. AI Product Builder.",
  description:
    "Personal portfolio of Prerith M, BBA student in Applied Finance with FinTech at CHRIST University. Architecting real AI, civic tech, and robotics systems.",
  keywords: [
    "Prerith M",
    "FinTech",
    "Applied Finance",
    "CHRIST University",
    "AI Product Builder",
    "Pothole Tracker",
    "RoverMania",
    "Cloudflare Workers",
    "Next.js",
  ],
  authors: [{ name: "Prerith M", url: "https://github.com/PrerithM" }],
  openGraph: {
    title: "Prerith M — Finance Student. AI Product Builder.",
    description: "Bridging financial rigor with AI-directed product architecture.",
    type: "website",
    locale: "en_IN",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-stripe-slate antialiased">
        {children}
      </body>
    </html>
  );
}
