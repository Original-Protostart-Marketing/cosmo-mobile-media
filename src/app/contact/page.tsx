'use client'
import React, { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import ShootingStars from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

function Contact() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const onSubmit = async (data: any) => {
        try {
            setIsSubmitting(true);
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/contact`, data);
            toast.success("Request sent successfully!");
            reset();
        } catch (error) {
            console.error(error);
            toast.error("Error while sending the request");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="w-full px-4 bg-black py-12 relative">
            <h2 className="mb-4 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl lg:text-7xl md:mb-4 mx-auto">Drop Us a Line</h2>
            <p className="text-center my-6 max-w-5xl mx-auto md:text-lg lg:text-xl">Got a question? We&apos;ve got answers. Your questions and feedback matter to us.</p>
            <form
                className="max-w-xl mx-auto p-6 my-0 flex flex-col justify-center items-center bg-transparent relative z-30 rounded-lg"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="mb-[16px] w-full py-0 px-[8px] text-white">
                    <label className="block font-bold mb-[0.5rem]" htmlFor="name">Name</label>
                    <input
                        type="text"
                        placeholder="John Doe"
                        className={`border border-[#2e2a3a] bg-[#3b364c] rounded-[0.5rem] outline-none w-full px-2 py-2`}
                        {...register("name", {
                            required: "Name is required",
                        })}
                    />
                    {errors.name && (
                        <p className="text-red-600 text-[1rem] font-bold">
                            {errors.name.message as string}
                        </p>
                    )}
                </div>
                <div className="mb-[16px] w-full py-0 px-[8px] text-white">
                    <label className="block font-bold mb-[0.5rem]" htmlFor="phone">Phone</label>
                    <input
                        type="text"
                        placeholder="123-456-7890"
                        className={`border border-[#2e2a3a] bg-[#3b364c] rounded-[0.5rem] outline-none w-full px-2 py-2`}
                        {...register("phone", {
                            required: "Phone is required",
                        })}
                    />
                    {errors.phone && (
                        <p className="text-red-600 text-[1rem] font-bold">
                            {errors.phone.message as string}
                        </p>
                    )}
                </div>
                <div className="mb-[16px] w-full py-0 px-[8px] text-white">
                    <label className="block font-bold mb-[0.5rem]" htmlFor="email">Email</label>
                    <input
                        type="text"
                        placeholder="john.doe@cosmomobilemedia.com"
                        className={`border border-[#2e2a3a] bg-[#3b364c] rounded-[0.5rem] outline-none w-full px-2 py-2`}
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Please enter a valid email address",
                            },
                        })}
                    />
                    {errors.email && (
                        <p className="text-red-600 text-[1rem] font-bold">
                            {errors.email.message as string}
                        </p>
                    )}
                </div>
                <div className="mb-[16px] w-full py-0 px-[8px] text-white">
                    <label className="block font-bold mb-[0.5rem]" htmlFor="msg">Message</label>
                    <textarea
                        {...register("msg", {
                            required: "This field is required",
                        })}
                        placeholder="Hello, I am interested in..."
                        className={`border border-[#2e2a3a] bg-[#3b364c] rounded-[0.5rem] outline-none w-full px-2 py-2`}
                    />
                    {errors.msg && (
                        <p className="text-red-600 text-[1rem] font-bold">
                            {errors.msg.message as string}
                        </p>
                    )}
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 mx-auto">
                    <div className="group relative">
                        <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-cyan-500 opacity-75 blur transition duration-500 group-hover:opacity-100"></div>
                        <button className="relative rounded-lg bg-black px-7 py-4 text-white">
                            {isSubmitting ? (
                                <div className="loadership_RVSBA">
                                    <div></div>
                                    <div></div>
                                </div>
                            ) : (
                                "Send"
                            )}
                        </button>
                    </div>
                </div>
            </form>
            <footer className="max-w-xl mx-auto p-6 my-0 flex flex-col justify-center items-center  relative z-30 rounded-lg">
                <a className='flex gap-2 text-sm items-center mb-1' href=""><Phone className='w-4 h-4' />+1 (281) 401-9303</a>
                <a className='flex gap-2 text-sm items-center mb-1' href="mailto:contact@cosmomobilemedia.com"><Mail className='w-4 h-4' />contact@cosmomobilemedia.com</a>
                <h2 className="text-[#FFF] text-xl font-bold mt-4">Follow Us</h2>
                <div className='flex flex-row gap-2'>
                    <a href="https://www.facebook.com/CosmoMobileMedia" target="_blank"><Instagram /></a>
                    <a href="https://www.instagram.com/cosmomobilemedia/" target="_blank"><Facebook /></a>
                </div>
            </footer>
            <Toaster />
            <ShootingStars />
            <StarsBackground />
        </section>
    );
}

export default Contact;
