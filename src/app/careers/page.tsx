'use client'
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import FileUploader from "@/components/ui/file-uploader";
import { StarsBackground } from "@/components/ui/stars-background";
import ShootingStars from "@/components/ui/shooting-stars";

const Careers = ({ complete }: any) => {
    const {
        register,
        watch,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (data: any) => {
        try {
            setIsSubmitting(true);
            await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/postulants`,
                { ...data, job: "driver" },
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            setIsSubmitting(false);
            complete(true);
        } catch {
            console.error("Error");
        }
    };

    const validateAmountAccidents = (value: string) => {
        if (watch("accidents") === "yes" && (!value || value.trim() === "")) {
            return "This field is required when accidents are reported.";
        }
        return undefined;
    };
    return (
        <section className="w-full px-4 bg-background py-12 relative">
            <h2 className="mb-4 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl lg:text-7xl md:mb-4 mx-auto">Advertise with us!</h2>
            <p className='text-center mx-auto md:text-lg lg:text-xl'>Join the Cosmo family and become part of our driver team</p>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col flex-wrap p-[4px] pb-[40px] md:flex-row max-w-7xl mx-auto relative z-30 mt-8">
                {/* Fullname */}
                <div className="mb-[16px] w-full py-0 px-[8px] md:w-[50%]">
                    <label htmlFor="fullname" className="block font-bold mb-[0.5rem]">
                        Full Name
                    </label>
                    <input
                        id="fullname"
                        placeholder="John Doe"
                        className="border border-[#2e2a3a] bg-[#3b364c] rounded-[0.5rem] outline-none w-full px-2 py-2"
                        {...register("fullname", {
                            required: "This field is required",
                        })}
                    />

                    {errors.fullname && (
                        <p className="text-red-500 text-[0.875rem]  mt-2">
                            {errors.fullname.message as string}
                        </p>
                    )}
                </div>

                {/* Email */}
                <div className="mb-[16px] w-full py-0 px-[8px] md:w-[50%]">
                    <label htmlFor="email" className="block font-bold mb-[0.5rem]">
                        Email
                    </label>
                    <input
                        id="email"
                        placeholder="john.doe@cosmomobilemedia.com"
                        className="border border-[#2e2a3a] bg-[#3b364c] rounded-[0.5rem] outline-none w-full px-2 py-2"
                        {...register("email", {
                            required: "This field is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Please enter a valid email address",
                            },
                        })}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-[0.875rem]  mt-2">
                            {errors.email.message as string}
                        </p>
                    )}
                </div>

                {/* Age Verification */}
                <div className="mb-[16px] w-full py-0 px-[8px] md:w-[50%]">
                    <label className="block font-bold mb-[0.5rem]">
                        Are You at least 21 years old?
                    </label>
                    <div className="flex items-center gap-[8px]">
                        <label className="font-bold">
                            <input
                                type="radio"
                                value="yes"
                                {...register("ageVerification", {
                                    required: "You must select an option",
                                })}
                                className="mr-[8px] outline-none"
                            />
                            Yes
                        </label>
                        <label className="font-bold">
                            <input
                                type="radio"
                                value="no"
                                {...register("ageVerification", {
                                    required: "You must select an option",
                                })}
                                className="mr-[8px] outline-none"
                            />
                            No
                        </label>
                    </div>
                    {errors.ageVerification && (
                        <span className="text-red-500 text-[0.875rem] mt-2">
                            {errors.ageVerification.message as string}
                        </span>
                    )}
                </div>

                {/* Drug Test */}
                <div className="mb-[16px] w-full py-0 px-[8px] md:w-[50%]">
                    <label className="block font-bold mb-[0.5rem]">
                        Can You pass a drug test?
                    </label>
                    <div className="flex items-center gap-[8px]">
                        <label className="font-bold">
                            <input
                                type="radio"
                                value="yes"
                                {...register("drugTest", {
                                    required: "You must select an option",
                                })}
                                className="mr-[8px] outline-none"
                            />
                            Yes
                        </label>
                        <label className="font-bold">
                            <input
                                type="radio"
                                value="no"
                                {...register("drugTest", {
                                    required: "You must select an option",
                                })}
                                className="mr-[8px] outline-none"
                            />
                            No
                        </label>
                    </div>
                    {errors.drugTest && (
                        <span className="text-red-500 text-[0.875rem] mt-2">
                            {errors.drugTest.message as string}
                        </span>
                    )}
                </div>

                {/* Driving Experience */}
                <div className="mb-[16px] w-full py-0 px-[8px] md:w-[50%]">
                    <label className="block font-bold mb-[0.5rem]">
                        Do you have a minimum of 5 years driving experience?
                    </label>
                    <div className="flex items-center gap-[8px]">
                        <label className="font-bold">
                            <input
                                type="radio"
                                value="yes"
                                {...register("drivingExperience", {
                                    required: "You must select an option",
                                })}
                                className="mr-[8px] outline-none"
                            />
                            Yes
                        </label>
                        <label className="font-bold">
                            <input
                                type="radio"
                                value="no"
                                {...register("drivingExperience", {
                                    required: "You must select an option",
                                })}
                                className="mr-[8px] outline-none"
                            />
                            No
                        </label>
                    </div>
                    {errors.drivingExperience && (
                        <span className="text-red-500 text-[0.875rem] mt-2">
                            {errors.drivingExperience.message as string}
                        </span>
                    )}
                </div>

                {/* Willing to Travel*/}
                <div className="mb-[16px] w-full py-0 px-[8px] md:w-[50%]">
                    <label className="block font-bold mb-[0.5rem]">
                        Are you willing to travel 5-7 days consecutively?
                    </label>
                    <div className="flex items-center gap-[8px]">
                        <label className="font-bold">
                            <input
                                type="radio"
                                value="yes"
                                {...register("willingTravel", {
                                    required: "You must select an option",
                                })}
                                className="mr-[8px] outline-none"
                            />
                            Yes
                        </label>
                        <label className="font-bold">
                            <input
                                type="radio"
                                value="no"
                                {...register("willingTravel", {
                                    required: "You must select an option",
                                })}
                                className="mr-[8px] outline-none"
                            />
                            No
                        </label>
                    </div>
                    {errors.willingTravel && (
                        <span className="text-red-500 text-[0.875rem] mt-2">
                            {errors.willingTravel.message as string}
                        </span>
                    )}
                </div>

                {/* Accidents*/}
                <div className="mb-[16px] w-full py-0 px-[8px] md:w-[50%]">
                    <label className="block font-bold mb-[0.5rem]">
                        Have you had any “at fault” accidents over the past 5 years?
                    </label>
                    <div className="flex items-center gap-[8px]">
                        <label className="font-bold">
                            <input
                                type="radio"
                                value="yes"
                                {...register("accidents", {
                                    required: "You must select an option",
                                })}
                                className="mr-[8px] outline-none"
                            />
                            Yes
                        </label>
                        <label className="font-bold">
                            <input
                                type="radio"
                                value="no"
                                {...register("accidents", {
                                    required: "You must select an option",
                                })}
                                className="mr-[8px] outline-none"
                            />
                            No
                        </label>
                    </div>
                    {errors.accidents && (
                        <span className="text-red-500 text-[0.875rem] mt-2">
                            {errors.accidents.message as string}
                        </span>
                    )}
                </div>

                {/* Amount of Accidents */}
                {watch("accidents") === "yes" && (
                    <div className="mb-[16px] w-full py-0 px-[8px] md:w-[50%]">
                        <label
                            htmlFor="amountAccidents"
                            className="block font-bold mb-[0.5rem]"
                        >
                            Amount of accidents
                        </label>
                        <input
                            id="amountAccidents"
                            className="border border-[#2e2a3a] bg-[#3b364c] rounded-[0.5rem] outline-none w-full px-2 py-2"
                            {...register("amountAccidents", {
                                validate: validateAmountAccidents,
                            })}
                        />
                        {errors.amountAccidents && (
                            <p className="text-red-500 text-[0.875rem] mt-2">
                                {errors.amountAccidents.message as string}
                            </p>
                        )}
                    </div>
                )}

                {/* Resume */}
                <div className="mb-[16px] w-full px-[8px]">
                    <label htmlFor="comments" className="block font-bold mb-[0.5rem]">
                        Click here to upload your resume (supported file formats are .pdf,
                        .doc, and .docx)
                    </label>
                    <Controller
                        name="resume"
                        control={control}
                        rules={{ required: "This file is required" }}
                        render={({ field }) => (
                            <FileUploader
                                onFileSelect={(file) => field.onChange(file)}
                                error={errors.resume as any}
                            />
                        )}
                    />
                </div>

                {/* Comments */}
                <div className="mb-[16px] w-full px-[8px]">
                    <label htmlFor="comments" className="block font-bold mb-[0.5rem]">
                        Got any comments? Let us know here. Your answers will not disqualify
                        you from future employment
                    </label>
                    <textarea
                        id="comments"
                        className="border border-[#2e2a3a] bg-[#3b364c] rounded-[0.5rem] outline-none w-full px-2 py-2"
                        {...register("comments")}
                    />
                    {errors.comments && (
                        <p className="text-red-500 text-[0.875rem] mt-2">
                            {errors.comments.message as string}
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
                                "Apply Now!"
                            )}
                        </button>
                    </div>
                </div>
            </form>
            <ShootingStars />
            <StarsBackground />
        </section>
    );
};

export default Careers;
