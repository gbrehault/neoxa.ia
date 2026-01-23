"use client";

import Image from "next/image";
import { listGalleryItems } from "@/lib/galleryDb";
import type { GalleryItem } from "@/lib/galleryDb";
import { useEffect, useState } from "react";

export default function GalleryItems() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  const loadItems = async () => {
    try {
      const result = await listGalleryItems();
      setItems(result);
      setError(null);
    } catch (e) {
      console.error("Erreur IndexedDB:", e);
      setError("IndexedDB indisponible.");
    }
  };

  useEffect(() => {
    loadItems();
    const handler = () => {
      loadItems();
    };
    window.addEventListener("gallery-updated", handler);
    return () => {
      window.removeEventListener("gallery-updated", handler);
    };
  }, []);
  return (
    <div className="w-full max-w-6xl">
      {error && (
        <p className="mb-4 rounded-2xl border border-red-500/40 bg-white/60 px-4 py-3 text-sm text-red-700 shadow-sm">
          {error}
        </p>
      )}
      {!error && items.length === 0 && (
        <div className="rounded-3xl border border-white/40 bg-white/30 px-6 py-10 text-center shadow-lg backdrop-blur-sm">
          <p className="text-lg font-semibold text-black">
            Aucun visuel pour l'instant.
          </p>
          <p className="mt-2 text-sm text-zinc-700">
            Générez une image, puis cliquez sur “+” pour l’ajouter ici.
          </p>
        </div>
      )}
      {items.length > 0 && (
        <ul className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li
              key={item.id}
              className="group relative overflow-hidden rounded-3xl border border-white/40 bg-white/20 shadow-xl backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative aspect-square">
                <Image
                  src={item.src}
                  alt={item.prompt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-linear-to from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-sm font-medium">{item.prompt}</p>
                <p className="mt-1 text-xs text-white/80">
                  {new Date(item.createdAt).toLocaleDateString("fr-FR")}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
