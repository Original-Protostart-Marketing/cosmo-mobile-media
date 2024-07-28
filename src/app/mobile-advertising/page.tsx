'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import ledpeople from '../../../public/ReachSwiper/Media.jpg'
import Sound from '../../../public/Sound.jpeg'
import Liftable from '../../../public/Liftable.jpg'
import Screens from '../../../public/Screens.gif'
import { ScrollTrigger, Observer } from 'gsap/all';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Cities from '@/components/Home/Cities'
import ShootingStars from '@/components/ui/shooting-stars'
import { StarsBackground } from '@/components/ui/stars-background'
import { Vortex } from '@/components/ui/vortex'

const Services = () => {
    const imgRef = useRef(null);
    const img2Ref = useRef(null);
    const img3Ref = useRef(null);
    const img4Ref = useRef(null);
    const img5Ref = useRef(null);
    const gradientRef = useRef(null);
    const gradient2Ref = useRef(null);
    const gradient3Ref = useRef(null);
    const gradient4Ref = useRef(null);
    const gradient5Ref = useRef(null);



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

        tl.from([img4Ref.current, gradient4Ref.current], {
            x: -30,
            opacity: 0,
            duration: 5,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: '#part4',
                start: 'center 100%',
                end: 'bottom bottom',
                scrub: true,
            },
            onComplete: () => {
                gsap.to(gradient4Ref.current, {
                    opacity: 1,
                    duration: 1,
                    ease: "power1.inOut",
                })
            },
        })

        tl.from([img5Ref.current, gradient5Ref.current], {
            x: 30,
            opacity: 0,
            duration: 5,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: '#part5',
                start: 'center 100%',
                end: 'bottom bottom',
                scrub: true,
            },
            onComplete: () => {
                gsap.to(gradient5Ref.current, {
                    opacity: 1,
                    duration: 1,
                    ease: "power1.inOut",
                })
            },
        })
    })

    return (
        <>
            <div className="h-[calc(100vh-70px)] py-12 rounded-md bg-background flex flex-col items-center justify-center relative w-full px-4 sm:h-max lg:h-[calc(100vh-70px)] 2xl:h-[40rem]">
                <article id='part1' className='w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-10'>
                    <div className='flex-1'>
                        <h2 className='mb-4 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-left md:text-5xl lg:text-7xl md:mb-8'>Mobile Digital Billboard Advertising</h2>
                        <p className='text-center mx-auto md:text-lg md:text-left lg:text-xl'>Our mobile LED billboard trucks are more than just screens on wheels. They're intelligent advertising platforms equipped with advanced audience targeting technology.</p>
                    </div>
                    <div className='flex-1 flex flex-col items-center'>
                        <div className='w-[100%] relative'>
                            <div className="group relative w-full h-full">
                                <div ref={gradientRef} className=""></div>
                                <video src={"/MainVideo.mp4"} ref={imgRef} className='object-cover w-full rounded-dynamic-zoom z-50 relative' controls></video>
                            </div>
                        </div>
                    </div>
                </article>
                <ShootingStars />
                <StarsBackground />
            </div>

            <section className='w-full h-max py-24 px-4 bg-black relative'>
                <h2 className='mb-12 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl lg:text-7xl md:mb-24'>Cosmo Makes It Easy</h2>
                <article className='w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10'>
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
                <ShootingStars />
                <StarsBackground />
            </section>
            <section className={`w-full h-max pt-24 md:py-24 px-4`}>
                <article id='part2' className='w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-10'>
                    <div className='flex-1 flex flex-col items-center'>
                        <div className='w-[100%] relative'>
                            <div className="group relative w-full h-full">
                                <div ref={gradient2Ref} className="absolute -inset-1 rounded-lg bg-gradient-to-r from-violet-400 to-violet-500 opacity-0 blur transition duration-500"></div>
                                <Image ref={img2Ref} src={Screens} alt="Truck" className='object-cover w-full rounded-dynamic-zoom' />

                            </div>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <h2 className='mb-4 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-left md:text-5xl lg:text-7xl md:mb-8'>Turn Heads With Our Screens.</h2>
                        <p className=' text-center mx-auto md:text-lg md:text-left lg:text-xl'>Whether it's day or night, raining or shining, our screens will captivate attention with their incredible size and vivid, bright colors. With their HD resolution, quality will never be an issue, ensuring your message is seen by thousands.</p>
                    </div>
                </article>
            </section>
            <section className={`w-full h-max pt-24 md:py-24 px-4`}>
                <article id='part3' className='w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-10'>
                    <div className='flex-1'>
                        <h2 className=' mb-4 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-left md:text-5xl lg:text-7xl md:mb-8 lg:text-right'>Your brand, amplified.</h2>
                        <p className=' text-center mx-auto md:text-lg md:text-left lg:text-xl lg:text-right'>Make a sonic impact. Our powerful audio system ensures your message is heard loud and clear. With robust sound quality, we deliver audio that reaches far and wide.</p>
                    </div>
                    <div className='flex-1 flex flex-col items-center'>
                        <div className='w-[100%] relative'>
                            <div className="group relative w-full h-full">
                                <div ref={gradient3Ref} className="absolute -inset-1 rounded-lg bg-gradient-to-r from-cyan-400 to-cyan-500 opacity-0 blur transition duration-500"></div>
                                <Image ref={img3Ref} src={Sound} alt="Truck" className='object-cover w-full rounded-dynamic-zoom' />
                            </div>
                        </div>
                    </div>
                </article>
            </section>
            <section className={`w-full h-max py-24 md:py-24 px-4`}>
                <article id='part4' className='w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-10'>
                    <div className='flex-1 flex flex-col items-center'>
                        <div className='w-[100%] relative'>
                            <div className="group relative w-full h-full">
                                <div ref={gradient4Ref} className="absolute -inset-1 rounded-lg bg-gradient-to-r from-rose-400 to-rose-500 opacity-0 blur transition duration-500"></div>
                                <Image ref={img4Ref} src={Liftable} alt="Truck" className='object-cover w-full rounded-dynamic-zoom' />
                            </div>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <h2 className=' mb-4 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-left md:text-5xl lg:text-7xl md:mb-8'>Liftable and Extendable.</h2>
                        <p className=' text-center mx-auto md:text-lg md:text-left lg:text-xl'>Our mobile billboards feature liftable and extendable LED screens, ensuring your brand's message reaches new heights and stands out wherever you go.</p>
                    </div>
                </article>
            </section>
            <section className={`w-full h-max py-24 px-4`}>
                <article id='part5' className='w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-10'>
                    <div className='flex-1'>
                        <h2 className=' mb-4 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-left md:text-5xl lg:text-7xl md:mb-8 lg:text-right'>Stay Connected.</h2>
                        <p className=' text-center mx-auto md:text-lg md:text-left lg:text-xl lg:text-right'>Our advanced Wi-Fi system ensures seamless connectivity for your audience. With reliable and high-speed internet, we keep your message accessible anywhere.</p>
                    </div>
                    <div className='flex-1 flex flex-col items-center'>
                        <div className='w-[100%] relative'>
                            <div className="group relative w-full h-full">
                                <div ref={gradient5Ref} className="absolute -inset-1 rounded-lg bg-gradient-to-r from-cyan-400 to-cyan-500 opacity-0 blur transition duration-500"></div>
                                <Image ref={img5Ref} src={Sound} alt="Truck" className='object-cover w-full rounded-dynamic-zoom' />
                            </div>
                        </div>
                    </div>
                </article>
            </section>
            <div className="w-full mx-auto rounded-md  h-[30rem] overflow-hidden">
                <Vortex
                    backgroundColor="black"
                    className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
                >
                    <h2 className="text-white text-4xl md:text-6xl font-bold text-center">
                        Complimentary Billboard Design
                    </h2>
                    <p className="text-white bg-slate-950 md:text-lg lg:text-xl max-w-xl mt-6 text-center">
                        We'll craft stunning visuals to enhance your company's brand recognition.
                    </p>
                </Vortex>
            </div>
            <Cities />
        </>
    );
};

export default Services;