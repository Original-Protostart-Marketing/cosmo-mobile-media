import { CircleX } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TrucksForSaleModal = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <section className="fixed top-0 left-0 w-screen min-h-screen bg-black/85 z-50 flex justify-center items-center">
      <article className="w-[90vw] relative bg-slate-800/60 rounded-xl md:w-[40vw] md:h-[35vw]">
      <Link href={'sales'}>
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
          className="cursor-pointer absolute top-[5px] right-[4px] text-white hover:text-red-700 md:top-[10px] md:right-[10px]"
        />
      </article>
    </section>
  );
};

export default TrucksForSaleModal;
