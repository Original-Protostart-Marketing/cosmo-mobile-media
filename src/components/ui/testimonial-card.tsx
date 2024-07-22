import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";
const TestimonialCard = () => {
    return (
        <div className="w-full h-auto rounded-[5px] flex flex-col justify-start bg-gradient-to-br from-slate-300 to-slate-500 items-center py-[20px] px-[30px]">
            <div className="flex mb-[20px] text-black">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
            </div>
            <p className="text-center text-black md:text-lg">
                &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.&quot;
            </p>
            <footer className="flex flex-col w-full mb-[15px] items-center">
                <Image
                    className="w-[50px] h-[50px] rounded-full"
                    src={"https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
                    alt="user"
                    width={500}
                    height={500}
                />
                <h3 className="text-black mt-[5px] font-semibold">John Doe</h3>
                <span className="text-[#000] font-light text-sm">
                    CEO, ABC Company
                </span>
            </footer>
        </div>
    );
};

export default TestimonialCard;
