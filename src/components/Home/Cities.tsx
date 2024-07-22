import Image from 'next/image'
import React from 'react'
import Map from '../../../public/Map.png'

const Cities = () => {
    return (
        <section className='w-screen py-12 px-4 bg-background'>
            <article className='w-full h-full max-w-7xl mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 text-center md:text-left'>
                <Image width={4000} height={4000} alt='Cities' className='w-full h-full' src={Map} />
                <section className='flex-1 flex flex-col relative'>
                    <div className="absolute rounded-full bg-gradient-to-br from-cyan-200 -cyan-500 opacity-25 blur-3xl w-[80%] h-[80%] top-0 left-0"></div>
                    <h2 className='bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-4xl tracking-tight text-transparent max-w-2xl md:text-5xl lg:text-7xl lg:max-w-3xl'>Areas we serve</h2>
                    <p className='my-4 md:text-lg lg:text-xl'>We currently serve <span className='text-cyan-500'>Southern California</span>, <span className='text-cyan-500'>Nevada</span>, <span className='text-cyan-500'>Texas</span>, <span className='text-cyan-500'>Louisiana</span>, and <span className='text-cyan-500'>Florida</span>.</p>
                    <p className='mb-4 md:text-lg lg:text-xl'>We have new locations opening soon.</p>
                    <p className='md:text-lg lg:text-xl'>*If you have any questions about other areas, please let us know.</p>
                    <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                        <div className="group relative">
                            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-cyan-500 opacity-75 blur transition duration-500 group-hover:opacity-100"></div>
                            <button className="relative rounded-lg bg-black px-7 py-4 text-white">Contact us</button>
                        </div>
                    </div>
                </section>
            </article>
        </section>
    )
}

export default Cities