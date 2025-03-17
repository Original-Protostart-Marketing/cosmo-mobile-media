import { CircleX } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TrucksForSaleModal = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <section className="fixed top-0 left-0 w-screen min-h-screen bg-black/75 z-50 flex justify-center items-center">
      <div className="group relative">
        <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-cyan-500 opacity-75 blur transition duration-500 group-hover:opacity-100"></div>
        <article className="w-[90vw] relative bg-background/85 rounded-xl md:w-[40vw] md:h-[35vw]">
          <Link href={"sales"}>
            <Image
              alt="Truck on sale"
              src={"/TrucksForSaleBtn.png"}
              height={500}
              width={500}
              className="object-contain w-full h-full"
            />
          </Link>
          <CircleX
            onClick={closeModal}
            className="cursor-pointer absolute top-[8px] right-[7px] text-white hover:text-red-700 md:top-[10px] md:right-[10px]"
          />
        </article>
      </div>
    </section>
  );
};

export default TrucksForSaleModal;
