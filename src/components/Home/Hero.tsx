'use client'
import { Lamp } from "@/components/ui/lamp";
import Image from "next/image";
import Truck from "../../../public/Truck.gif";
import ModalVideo from "./ModalVideo";
import { useEffect, useState } from "react";
import TrucksForSaleModal from "./TrucksForSaleModal";

const Hero = () => {
    const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false);
    const [isTrucksForSaleModalOpen, setIsTrucksForSaleModalOpen] = useState<boolean>(false);
   
    useEffect(() => {
        const hasClosedModal = sessionStorage.getItem('truckModalClosed') === 'true';
    
        if (!hasClosedModal) {
          setIsTrucksForSaleModalOpen(true);
        }
      }, []);

    const HandleCloseTrucksModal = ()=>{
        setIsTrucksForSaleModalOpen(false);
        sessionStorage.setItem('truckModalClosed','true')
    }
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
                {isTrucksForSaleModalOpen && <TrucksForSaleModal closeModal={HandleCloseTrucksModal} />}
            </div>
        </section>
    )
}

export default Hero