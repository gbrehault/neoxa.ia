import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/component/Header";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NEOXA.IA",
  description: "Generate images with AI for free.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <div className="relative min-h-screen overflow-hidden">
          {/* Vidéo */}
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="/FOND_METABALLS.mp4"
            autoPlay
            muted
            loop
            playsInline
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-white/50 backdrop-blur-md" />
          {/* MAIN */}
          <main className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-6 px-4 sm:px-6 py-6 mt-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
