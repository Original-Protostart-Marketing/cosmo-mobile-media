'use client'
import React, { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
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
            await axios.post(`${process.env.REACT_APP_API_URL}/contact`, data);
            setIsSubmitting(false);
            toast.success("Request sent successfully!");
            reset();
        } catch {
            console.error("Error");
            toast.error("Error while sending the request");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="w-full px-4 bg-black py-12 relative">
            <h2 className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl tracking-tight text-transparent max-w-2xl mx-auto md:text-5xl lg:text-7xl lg:max-w-3xl">Contact Us</h2>
            <form
                className="max-w-xl mx-auto p-6 my-12 flex flex-col justify-center items-center bg-[#2c2c2c] relative z-30 rounded-lg opacity-70"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="w-full mt-[8px]">
                    <label className="text-[#FFF] text-lg" htmlFor="name">Name</label>
                    <input
                        type="text"
                        className={`mt-1 mx-0 p-[8px] w-full bg-transparent border border-[#FFF] rounded-md text-lg text-center lg:text-left placeholder:text-[#FFF] outline-none focus:outline-none`}
                        {...register("name", {
                            required: "Name is required",
                        })}
                    />
                    {errors.name && (
                        <p className="text-red-600 text-[1rem] font-bold">
                            {errors.name.message}
                        </p>
                    )}
                </div>
                <div className="w-full mt-[8px]">
                    <label className="text-[#FFF] text-lg" htmlFor="phone">Phone</label>
                    <input
                        type="text"
                        className={`my-[8px] mx-0 p-[8px] w-full bg-transparent border border-[#FFF] rounded-md text-lg text-center lg:text-left placeholder:text-[#FFF] outline-none focus:outlite-none`}
                        {...register("phone", {
                            required: "Phone is required",
                        })}
                    />
                    {errors.phone && (
                        <p className="text-red-600 text-[1rem] font-bold">
                            {errors.phone.message}
                        </p>
                    )}
                </div>
                <div className="w-full mt-[8px]">
                    <label className="text-[#FFF] text-lg" htmlFor="email">Email</label>
                    <input
                        type="text"
                        className={`my-[8px] mx-0 p-[8px] w-full bg-transparent border border-[#FFF] rounded-md text-lg text-center lg:text-left placeholder:text-[#FFF] outline-none focus:outlite-none`}
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
                            {errors.email.message}
                        </p>
                    )}
                </div>
                <div className="w-full mt-[8px]">
                    <label className="text-[#FFF] text-lg" htmlFor="msg">Message</label>
                    <textarea
                        {...register("msg", {
                            required: "This field is required",
                        })}
                        className={`my-[8px] mx-0 p-[8px] w-full bg-transparent border border-[#FFF] rounded-md text-lg text-center lg:text-left placeholder:text-[#FFF] outline-none focus:outlite-none`}
                    />
                    {errors.msg && (
                        <p className="text-red-600 text-[1rem] font-bold">
                            {errors.msg.message}
                        </p>
                    )}
                </div>
                <button
                    type="submit"
                    className="bg-transparent border border-white rounded-[50px] text-[#FFF] px-10 py-2 flex justify-center items-center mt-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        <div className="loadership_RVSBA">
                            <div></div>
                            <div></div>
                        </div>
                    ) : (
                        "Send"
                    )}
                </button>
            </form>
            <footer className="max-w-xl mx-auto p-6 my-12 flex flex-col justify-center items-center  relative z-30 rounded-lg">
                <a className='flex gap-2 text-sm items-center mb-1' href=""><Phone className='w-4 h-4' />+1 (281) 401-9303</a>
                <a className='flex gap-2 text-sm items-center mb-1' href="mailto:contact@cosmomobilemedia.com"><Mail className='w-4 h-4' />contact@cosmomobilemedia.com</a>
                <h2 className="text-[#FFF] text-xl font-bold mt-4">Follow Us</h2>
                <div className='flex flex-row gap-2'>
                    <a href="https://www.facebook.com/CosmoMobileMedia"><Instagram /></a>
                    <a href="https://www.instagram.com/cosmomobilemedia/"><Facebook /></a>
                </div>
            </footer>
            <Toaster />
            <ShootingStars />
            <StarsBackground />
        </section>
    );
}

export default Contact;
