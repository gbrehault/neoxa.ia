// Page generate qui va generer l'image en fonction du prompt

import Form from "@/components/Form";
import ImagesData from "@/components/ImagesData";
import Image from "next/image";
import Link from "next/link";

export default function GenerateImage() {
  return (
    <>
      <div className="max-w-2xl flex flex-col items-center gap-6 rounded-3xl bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl p-6 sm:p-8">
        <Link href="/">
          <Image
            src="/logo_neoxa.png"
            alt="NEOXA.IA logo"
            width={200}
            height={120}
            priority
          />
        </Link>
        {/* Composent Form qui contient le formulaire pour générer l'image */}
        <Form />
      </div>
      <p className="text-xl sm:text-2xl text-black font-bold uppercase text-center max-w-2xl">
        Vos images générées apparaîtront ici.
      </p>
      <ImagesData />
    </>
  );
}
