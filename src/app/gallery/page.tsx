import GalleryItems from "@/components/GalleryItems";
import Link from "next/link";
import Image from "next/image";

export default function Gallery() {
  return (
    <>
      <div className="flex w-full max-w-5xl flex-col items-center gap-5 rounded-3xl border border-white/40 bg-white/25 px-6 py-8 text-center shadow-xl backdrop-blur-sm sm:px-10">
        <Link href="/">
          <Image
            src="/logo_neoxa.png"
            alt="NEOXA.IA logo"
            width={200}
            height={120}
            priority
          />
        </Link>
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
    </>
  );
}
