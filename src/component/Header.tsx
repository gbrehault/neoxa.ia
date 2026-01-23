"use client";

import Link from "next/link";
import { MagicWand, Image as ImageIcon, House } from "@phosphor-icons/react";

export default function Header() {
  return (
    <header className="flex items-center justify-center">
      <nav className="flex w-[200px] fixed mt-10 bg-white/10 backdrop-blur-md border-b border-white/20 top-0 z-50 rounded-4xl items-center justify-between px-4 py-4">
        {/* Navigation Icons */}
        <div className="flex gap-6 items-center">
          {/* Home */}
          <Link
            href="/"
            className="p-2 rounded-full hover:bg-black/10 transition"
            title="Accueil"
          >
            <House size={24} weight="bold" className="text-black" />
          </Link>

          {/* Generate/Magic */}
          <Link
            href="/generate"
            className="p-2 rounded-full hover:bg-black/10 transition"
            title="Générer une image"
          >
            <MagicWand size={24} weight="bold" className="text-black" />
          </Link>

          {/* Gallery/Pictures */}
          <Link
            href="/gallery"
            className="p-2 rounded-full hover:bg-black/10 transition"
            title="Galerie"
          >
            <ImageIcon size={24} weight="bold" className="text-black" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
