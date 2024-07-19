import { Lamp } from "@/components/ui/lamp";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-slate-950">
        <div className="flex-1"><Lamp /></div>
        <div className="flex-1 flex justify-center items-center">
          <video
            autoPlay
            muted
            loop
            className="w-full rounded-2xl z-40"
          >
            <source src={"Truck.mp4"} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}
