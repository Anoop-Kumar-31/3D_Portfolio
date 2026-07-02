import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="antialiased font-sans bg-[#050a15] text-white">
        {children}
      </body>
    </html>
  );
}
