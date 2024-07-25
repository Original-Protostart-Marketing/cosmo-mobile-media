'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import TruckBack from '../../../public/TruckBack.gif'
import ledpeople from '../../../public/ReachSwiper/Media.jpg'
import { ScrollTrigger, Observer } from 'gsap/all';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Cities from '@/components/Home/Cities'

const Services = () => {
    const imgRef = useRef(null);
    const img2Ref = useRef(null);
    const img3Ref = useRef(null);
    const gradientRef = useRef(null);
    const gradient2Ref = useRef(null);
    const gradient3Ref = useRef(null);



    useGSAP(() => {
        gsap.registerPlugin(useGSAP);
        gsap.registerPlugin(ScrollTrigger);
        gsap.registerPlugin(Observer);
        const tl = gsap.timeline();

        gsap.fromTo(
            imgRef.current,
            { scale: 0 },
            {
                scale: 1.2, duration: 0.6, ease: "power2.out", onComplete: () => {
                    gsap.to(imgRef.current, {
                        scale: 1, duration: 0.3, ease: "power2.in", onComplete: () => {
                            gsap.to(gradientRef.current, { opacity: 1, duration: 1, ease: "power1.inOut" });
                        }
                    });
                }
            }
        );


        tl.from([img2Ref.current, gradient2Ref.current], {
            x: -30,
            opacity: 0,
            duration: 5,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: '#part2',
                start: 'center 100%',
                end: 'bottom bottom',
                scrub: true,
            },
            onComplete: () => {
                gsap.to(gradient2Ref.current, {
                    opacity: 1,
                    duration: 1,
                    ease: "power1.inOut",
                })
            },
        })

        tl.from([img3Ref.current, gradient3Ref.current], {
            x: 30,
            opacity: 0,
            duration: 5,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: '#part3',
                start: 'center 100%',
                end: 'bottom bottom',
                scrub: true,
            },
            onComplete: () => {
                gsap.to(gradient3Ref.current, {
                    opacity: 1,
                    duration: 1,
                    ease: "power1.inOut",
                })
            },
        })
    })

    return (
        <>
            <section className={`w-full h-max px-4 md:py-24 bg-background`}>
                <article id='part1' className='w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-10'>
                    <div className='flex-1'>
                        <h2 className='mb-4 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-left md:text-5xl lg:text-7xl md:mb-8'>Mobile Digital Billboard Advertising</h2>
                        <p className='text-center mx-auto md:text-lg md:text-left lg:text-xl'>Our mobile LED billboard trucks are more than just screens on wheels. They're intelligent advertising platforms equipped with advanced audience targeting technology. We don't just display ads; we deliver impactful campaigns that maximize your ROI.</p>
                    </div>
                    <div className='flex-1 flex flex-col items-center'>
                        <div className='w-[100%] relative'>
                            <div className="group relative w-full h-full">
                                <div ref={gradientRef} className="absolute -inset-1 rounded-lg bg-gradient-to-r from-cyan-100 to-cyan-500 opacity-0 blur transition duration-500"></div>
                                <Image ref={imgRef} src={ledpeople} alt="Truck" className='object-cover w-full rounded-dynamic-zoom' />
                            </div>
                        </div>
                    </div>
                </article>
            </section>
            <section className={`w-full h-max pt-24 md:py-24 px-4`}>
                <article id='part2' className='w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-10'>
                    <div className='flex-1 flex flex-col items-center'>
                        <div className='w-[100%] relative'>
                            <div className="group relative w-full h-full">
                                <div ref={gradient2Ref} className="absolute -inset-1 rounded-lg bg-gradient-to-r from-violet-100 to-violet-500 opacity-0 blur transition duration-500"></div>
                                <Image ref={img2Ref} src={ledpeople} alt="Truck" className='object-cover w-full rounded-dynamic-zoom' />

                            </div>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <h2 className='mb-4 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-left md:text-5xl lg:text-7xl md:mb-8'>Turn Heads With Our Screens.</h2>
                        <p className=' text-center mx-auto md:text-lg md:text-left lg:text-xl'>Our state-of-the-art LED screens guarantee an unmatched visual impact. With [mention screen size] of pure brilliance, your ads will come to life like never before. Our vibrant colors and high resolution look incredible even from a distance, ensuring your message is seen by thousands.</p>
                    </div>
                </article>
            </section>
            <section className={`w-full h-max pt-24 md:py-24 px-4`}>
                <article id='part3' className='w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-10'>
                    <div className='flex-1'>
                        <h2 className=' mb-4 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-left md:text-5xl lg:text-7xl md:mb-8'>Your brand, amplified.</h2>
                        <p className=' text-center mx-auto md:text-lg md:text-left lg:text-xl'>Make a sonic impact. Our powerful audio system ensures your message is heard loud and clear. With [mention audio specifications, e.g., number of speakers, wattage], we deliver sound that reaches far and wide.</p>
                    </div>
                    <div className='flex-1 flex flex-col items-center'>
                        <div className='w-[100%] relative'>
                            <div className="group relative w-full h-full">
                                <div ref={gradient3Ref} className="absolute -inset-1 rounded-lg bg-gradient-to-r from-rose-100 to-rose-500 opacity-0 blur transition duration-500"></div>
                                <Image ref={img3Ref} src={ledpeople} alt="Truck" className='object-cover w-full rounded-dynamic-zoom' />
                            </div>
                        </div>
                    </div>
                </article>
            </section>
            <Cities />
            <section className='w-full h-max pt-24 md:py-24 px-4 bg-black'>
                <h2 className='mb-12 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl lg:text-7xl md:mb-24'>Cosmo Makes It Easy</h2>
                <article id='part4' className='w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10'>
                    <article className='w-full flex flex-col items-center  space-y-4'>
                        <div className="group relative">
                            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 opacity-75 blur transition duration-500 group-hover:opacity-100"></div>
                            <span className="relative rounded-full bg-black w-[100px] h-[100px] text-white p-[15px] flex items-center justify-center text-4xl">
                                1
                            </span>
                        </div>
                        <h3 className='text-2xl text-center lg:text-3xl'>Choose your ad campaign</h3>
                        <p className='text-center md:text-lg'>Select from one of our pre-designed templates or work with our team to create a customized ad campaign tailored to your specific needs.</p>
                    </article>
                    <article className='w-full flex flex-col items-center  space-y-4'>
                        <div className="group relative">
                            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-violet-400 to-violet-500 opacity-75 blur transition duration-500 group-hover:opacity-100"></div>
                            <span className="relative rounded-full bg-black w-[100px] h-[100px] text-white p-[15px] flex items-center justify-center text-4xl">
                                2
                            </span>
                        </div>
                        <h3 className='text-2xl text-center lg:text-3xl'>Select your location</h3>
                        <p className='text-center md:text-lg'>Once you have your ad campaign selected, you can choose your preferred location. Our LED advertising trucks can travel to various locations.</p>
                    </article>
                    <article className='w-full flex flex-col items-center  space-y-4'>
                        <div className="group relative">
                            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-rose-400 to-rose-500 opacity-75 blur transition duration-500 group-hover:opacity-100"></div>
                            <span className="relative rounded-full bg-black w-[100px] h-[100px] text-white p-[15px] flex items-center justify-center text-4xl">
                                3
                            </span>
                        </div>
                        <h3 className='text-2xl text-center lg:text-3xl'>Watch your ads go live</h3>
                        <p className='text-center md:text-lg'>Once your ad campaign is scheduled, our LED advertising trucks will hit the road and showcase your ads to your target audience.</p>
                    </article>
                </article>
            </section>
        </>
    );
};

export default Services;