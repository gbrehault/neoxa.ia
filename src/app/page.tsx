import Image from "next/image";
import Link from "next/link";

export default function App() {
  return (
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
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6">
        {/* Glass card */}
        <div className="flex w-full max-w-3xl flex-col items-center gap-6 rounded-3xl bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl p-8 sm:items-start">
          <Link href="/">
            <Image
              src="/logo_neoxa.png"
              alt="NEOXA.IA logo"
              width={200}
              height={120}
              priority
            />
          </Link>
          <h1 className="text-3xl sm:text-4xl font-semibold text-black text-center sm:text-left">
            Génère des univers visuels en un instant.
          </h1>

          <p className="max-w-md text-lg text-zinc-600 text-center sm:text-left">
            Crée des ambiances, palettes de couleurs et visuels cohérents grâce
            à l’intelligence artificielle. Une idée, un mot, une vibe — neoxa.ia
            s’occupe du reste.
          </p>

          <div className="flex gap-4 items-center">
            <a
              className="flex h-12 items-center text-xs md:text-xl justify-center rounded-full border-2 border-black px-6 text-black transition hover:bg-black hover:text-white"
              href="/generate"
            >
              Créez vos images
            </a>
            <a
              href="https://gemini.google.com/"
              target="_blank"
              className="relative w-20 h-20 sm:w-40 sm:h-40"
            >
              <Image
                src="/logogemini.png"
                alt="Gemini logo"
                fill
                className="object-contain"
              />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
