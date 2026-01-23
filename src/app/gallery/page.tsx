import GalleryItems from "@/components/GalleryItems";
import Link from "next/link";

export default function Gallery() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/FOND_METABALLS.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-white/50 backdrop-blur-md" />
      <main className="relative z-10 flex min-h-screen flex-col items-center gap-8 px-4 sm:px-6 py-10">
        <div className="flex w-full max-w-5xl flex-col items-center gap-5 rounded-3xl border border-white/40 bg-white/25 px-6 py-8 text-center shadow-xl backdrop-blur-sm sm:px-10">
          <h1 className="text-3xl sm:text-4xl font-semibold text-black">
            Ma Galerie
          </h1>
          <p className="max-w-2xl text-sm sm:text-base text-zinc-700">
            Retrouve ici tes créations, sauvegardées localement dans ton
            navigateur.
          </p>
          <Link
            href="/generate"
            className="flex h-12 items-center justify-center rounded-full border-2 border-black px-6 text-sm sm:text-base text-black transition hover:bg-black hover:text-white"
          >
            Générer une nouvelle image
          </Link>
        </div>
        <GalleryItems />
      </main>
    </div>
  );
}
