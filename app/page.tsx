import Image from "next/image";
import logoGemini from "../public/assets/gemini_aurora_thumbnail_4g_e74822ff0ca4259beb718.png"


export default function Home() {
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
          <Image
            src="/LOGO_NEOXA.IA.png"
            alt="NEOXA.IA logo"
            width={200}
            height={120}
            priority
          />

          <h1 className="text-3xl sm:text-4xl font-semibold text-black text-center sm:text-left">
            Génère des univers visuels en un instant.
          </h1>

          <p className="max-w-md text-lg text-zinc-600 text-center sm:text-left">
            Crée des ambiances, palettes de couleurs et visuels cohérents grâce à l’intelligence artificielle.
            Une idée, un mot, une vibe — neoxa.ia s’occupe du reste.
          </p>

          <div className="flex gap-4 items-center">
            <a
              className="flex h-12 items-center justify-center rounded-full border-2 border-black px-6 text-black transition hover:bg-black hover:text-white"
              href="https://neoxa.ai"
              target="_blank"
            >
              Créer tes images
            </a>
            <a href="https://gemini.google.com/" target="_blank" className="text-sm text-zinc-600 underline">
              <Image
                src={logoGemini}
                alt="Gemini logo"
                width={120}
                height={120}
              />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
