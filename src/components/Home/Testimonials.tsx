'use client'
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import TestimonialCard from '../ui/testimonial-card';

const Testimonials = () => {
    return (
        <section className="bg-background w-full py-12 px-4">
            <article className='w-full h-full max-w-7xl mx-auto flex flex-col justify-center items-center'>
                <span className='rounded-[20px] bg-gradient-to-br from-slate-300 to-slate-500 text-background py-[5px] px-[10px] text-sm'>Testimonials</span>
                <h1 className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl tracking-tight text-transparent mx-auto mb-6 mt-4 md:text-5xl lg:text-7xl lg:max-w-3xl">
                    Customer Experiences and Feedback
                </h1>
                <p className='md:text-lg lg:text-xl mb-6 text-center'>Take a look at what our customers have to say. They all are now part
                    of the Cosmo Mobile Media family.</p>
                <Swiper
                    loop={true}
                    autoplay={{ delay: 5000 }}
                    grabCursor={true}
                    spaceBetween={24}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        576: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 48,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 48,
                        },
                    }}
                    modules={[Pagination, Autoplay]}
                    className="w-full"
                >
                    <SwiperSlide className="flex flex-col justify-center items-center text-center">
                        <TestimonialCard />
                    </SwiperSlide>
                    <SwiperSlide className="flex flex-col justify-center items-center text-center">
                        <TestimonialCard />
                    </SwiperSlide>
                    <SwiperSlide className="flex flex-col justify-center items-center text-center">
                        <TestimonialCard />
                    </SwiperSlide>
                </Swiper>
            </article>
        </section>
    )
}

export default Testimonials