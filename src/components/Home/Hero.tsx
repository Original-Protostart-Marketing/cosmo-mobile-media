'use client'
import { Lamp } from "@/components/ui/lamp";
import Image from "next/image";
import Truck from "../../../public/Truck.gif";
import ModalVideo from "./ModalVideo";
import { useState } from "react";

const Hero = () => {
    const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false);
    return (
        <section className="bg-background">
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto">
                <div className="flex-1"><Lamp openModal={() => setIsVideoModalOpen(true)} /></div>
                <div className="flex-1 flex justify-center items-center">
                    <Image
                        src={Truck}
                        width={0}
                        height={0}
                        className="w-full z-40"
                        alt="Truck"
                    />
                </div>
                {isVideoModalOpen && <ModalVideo closeModal={() => setIsVideoModalOpen(false)} />}
            </div>
        </section>
    )
}

export default Hero