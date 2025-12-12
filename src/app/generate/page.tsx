// Page generate qui va generer l'image en fonction du prompt

import Form from "@/components/Form";
import Image from "next/image";

export default function GenerateImage() {
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
            <main className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-6 px-6">
                <Image
                    src="/logo_neoxa.png"
                    alt="NEOXA.IA logo"
                    width={300}
                    height={120}
                    priority
                />
                <div className="flex  flex-col items-center gap-6 rounded-3xl bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl p-8 sm:items-start">

                    {/* Composent Form qui contient le formulaire pour générer l'image */}
                    <Form />

                </div>
            </main>
        </div>

    );

}
