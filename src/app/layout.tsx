import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// 1. Configure display font (Outfit)
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700", "800"],
});

// 2. Configure body copy font (Plus Jakarta Sans)
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

// 3. Configure code/metadata font (JetBrains Mono)
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

// SEO & Open Graph Metadata Configuration
export const metadata: Metadata = {
  title: "Anoop Kumar | Full Stack Developer",
  description: "Cinematic portfolio of Anoop Kumar, a Full Stack Developer specializing in frontend engineering, systems architecture, and robust databases.",
  keywords: [
    "Anoop Kumar", 
    "Full Stack Developer", 
    "Software Engineer", 
    "Portfolio", 
    "Three.js", 
    "WebGL", 
    "GSAP", 
    "Frontend", 
    "Backend", 
    "UI/UX"
  ],
  openGraph: {
    title: "Anoop Kumar | Full Stack Developer",
    description: "Cinematic portfolio of Anoop Kumar, showcasing systems thinking and product execution.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`${outfit.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}
