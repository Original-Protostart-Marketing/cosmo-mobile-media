import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";
interface TestimonialCardProps {
    name: string;
    description: string;
    image: string;
}
const TestimonialCard = ({ name, description, image }: TestimonialCardProps) => {
    return (
        <div className="w-full h-auto rounded-[5px] flex flex-col justify-start bg-gradient-to-br from-slate-300 to-slate-500 items-center py-[20px] px-[30px] mt-8">
            <div className="flex mb-[20px] text-black">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
            </div>
            <p className="text-center text-black font-semibold">
                &quot;{description}&quot;
            </p>
            <footer className="flex flex-col w-full mb-[15px] items-center mt-4">
                <Image
                    className="w-[50px] h-[50px] rounded-full"
                    src={image}
                    alt="user"
                    width={500}
                    height={500}
                />
                <h3 className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 tracking-tight text-transparent bg-clip-text mt-[5px] font-semibold">{name}</h3>
            </footer>
        </div>
    );
};

export default TestimonialCard;
