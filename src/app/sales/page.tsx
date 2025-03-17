'use client'
import Image from "next/image";
import ISUZU_2023 from "../../../public/ISUZU_2023.png";
import ISUZU_2024 from "../../../public/ISUZU_2024.png";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    sessionStorage.setItem("truckModalClosed", "true");
  }, []);

  return (
    <section className="flex flex-col items-center justify-center py-8 pb-20 px-5">
      <h1 className="flex bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text text-center text-3xl lg:text-5xl font-extrabold">
        Take a look at our trucks!
      </h1>
      <div className="flex flex-col  py-4 px-12 lg:grid grid-cols-2 gap-6 mt-8">
        <Image
          className="rounded-sm w-[700px]"
          src={ISUZU_2023}
          alt="ISUZU_2023"
        />
        <Image
          className="rounded-sm w-[700px] "
          src={ISUZU_2024}
          alt="ISUZU_2024"
        />
      </div>
      <section className="flex flex-col items-center gap-y-8 mt-6">
        <div className="group relative w-fit">
          <div />
          <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-cyan-500 opacity-75 blur transition duration-500 group-hover:opacity-100" />
          <a
            className="flex relative bg-black gap-5 items-center mb-1 justify-center rounded-sm p-3 text-lg lg:text-3xl lg:p-5"
            href="tel:+12814019303"
          >
            <Phone className="size-5 lg:size-9" />
            +1 (281) 401-9303
          </a>
        </div>
        <div className="group relative w-fit">
          <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-cyan-500 opacity-75 blur transition duration-500 group-hover:opacity-100" />
          <a
            className="flex relative bg-black gap-5 items-center mb-1 justify-center rounded-sm p-3 text-lg lg:text-3xl lg:p-6"
            href="mailto:lexi@cosmomobilemedia.com"
          >
            <Mail className="size-5 lg:size-9" />
            lexi@cosmomobilemedia.com
          </a>
        </div>
      </section>
    </section>
  );
}
