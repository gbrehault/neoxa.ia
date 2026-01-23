"use client"; // Obligatoire pour utiliser les hooks comme useState

import { useState } from "react";
import { DownloadSimpleIcon } from "@phosphor-icons/react";

export default function Form() {
    const [prompt, setPrompt] = useState("");
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Empêche le rechargement de la page
        setLoading(true);
        setImageSrc(null); // Reset l'ancienne image

        try {
            const response = await fetch("/api/generate", { // Assure-toi que le chemin est bon
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ prompt: prompt }),
            });

            const data = await response.json();

            if (data.image) {
                setImageSrc(data.image);
            } else {
                alert("Erreur: " + data.error);
            }
        } catch (error) {
            console.error("Erreur fetch:", error);
            alert("Une erreur est survenue");
        } finally {
            setLoading(false);
        }
    };

    const handleClickDownload = async () => {
        if (imageSrc) {
            const response = await fetch(imageSrc);
            if (response.status !== 200) {
                alert("Erreur lors du téléchargement de l'image.");
                return;
            }
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `image-gemini-${prompt}.jpg`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        }

    }
    return (

        <div className="flex flex-col items-center gap-6 p-4">
            {/* Zone d'affichage de l'image */}
            {imageSrc && (
                <div className="">
                    {imageSrc && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            src={imageSrc}
                            alt="Image générée par IA"
                            className="max-w-md w-full h-auto rounded-xl"
                        />
                    )}
                </div>
            )}
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2">
                <input
                    className="flex-[1_0_auto] h-12 items-center justify-center rounded-full border-2 border-black px-6 text-black transition hover:text-white focus:outline-none focus:text-black"
                    type="text"
                    placeholder="Décrivez votre image..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    disabled={loading}
                    className="flex-[1_0_auto] h-12 items-center justify-center bg-black rounded-full border-2 border-black px-6 text-white transition hover:bg-transparent hover:text-black"
                >
                    {loading ? "Génération..." : "Générer"}
                </button>
                {imageSrc && (
                    <button
                        onClick={handleClickDownload}
                        className="h-12 items-center justify-center bg-black rounded-full border-2 border-black px-3 text-white transition hover:bg-transparent hover:text-black"
                    >
                        <DownloadSimpleIcon size={24} />
                    </button>
                )}

            </form>
        </div>
    );
}