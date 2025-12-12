// Récupére l'api avec le token gemini 

import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(request: Request) {
    try {
        // 1. Récupérer le prompt depuis le corps de la requête
        const body = await request.json();
        const prompt = body.prompt;

        if (!prompt) {
            return NextResponse.json({ error: "Prompt manquant" }, { status: 400 });
        }

        // 2. Appel au modèle IMAGEN (spécialisé pour les images)
        // Note: Assure-toi d'avoir accès à Imagen dans ton Google AI Studio

        const response = await ai.models.generateImages({
            model: "imagen-4.0-ultra-generate-001",
            prompt: prompt,
            config: {
                numberOfImages: 1,
            }
        });

        // 3. Récupérer l'image en Base64
        // La structure de réponse dépend de la version exacte du SDK, mais souvent c'est ici :
        const imageBase64 = response.generatedImages?.[0]?.image?.imageBytes;

        if (!imageBase64) {
            throw new Error("Aucune image générée");
        }

        // 4. Renvoyer l'image au format JSON
        return NextResponse.json({ image: `data:image/png;base64,${imageBase64}` }, { status: 200 });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Erreur lors de la génération" }, { status: 500 });
    }
}