'use client'
import Image from 'next/image'
import React from 'react'
import Media from "../../../public/ReachSwiper/Media.jpg"
import Media2 from "../../../public/ReachSwiper/Media2.jpg"
import Media3 from "../../../public/ReachSwiper/Media3.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const Reach = () => {
    return (
        <section className='w-full py-12 px-4 bg-[#000] relative'>
            <div className="absolute rounded-full bg-gradient-to-br from-slate-950 to-cyan-500 opacity-25 blur-3xl w-[80%] h-[80%] top-0 left-0"></div>
            <article className='w-full h-full max-w-7xl mx-auto grid grid-cols-1 gap-6'>
                <section className='flex-1'>
                    <h2 className='bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl tracking-tight text-transparent max-w-2xl mx-auto md:text-5xl lg:text-7xl lg:max-w-3xl'>Take Your Marketing On The Go</h2>
                    <p className='text-center my-6 max-w-5xl mx-auto md:text-lg lg:text-xl'>Harness the impact of mobile advertising with <span className='text-cyan-500'>CosmoMobileMedia&apos;s</span> state-of-the-art digital billboard trucks. These dynamic mobile billboards, featuring captivating visuals and engaging audio, are designed to grab your audience&apos;s attention wherever they are. Don&apos;t settle for ordinary advertising - elevate your campaigns with unparalleled nationwide out-of-home exposure and immersive marketing experiences.</p>
                </section>
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
                        <Image
                            src={Media}
                            alt="cosmomobilemedia"
                            width={1000}
                            height={1000}
                            className="w-full h-auto md:h-[250px] -z-10 rounded-sm md:rounded-md lg:rounded-xg object-cover"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="flex flex-col justify-center items-center text-center">
                        <Image
                            src={Media2}
                            alt="cosmomobilemedia"
                            width={1000}
                            height={1000}
                            className="w-full h-auto md:h-[250px] -z-10 rounded-sm md:rounded-md lg:rounded-xg object-cover"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="flex flex-col justify-center items-center text-center">
                        <Image
                            src={Media3}
                            alt="cosmomobilemedia"
                            width={1000}
                            height={1000}
                            className="w-full h-auto md:h-[250px] -z-10 rounded-sm md:rounded-md lg:rounded-xg object-cover"
                        />
                    </SwiperSlide>
                </Swiper>
            </article>
        </section>
    )
}

export default Reach