import React from 'react'
import { Vortex } from '../ui/vortex'
import Link from 'next/link'

const Contact = () => {
    return (
        <div className="w-full mx-auto rounded-md  h-[30rem] overflow-hidden">
            <Vortex
                backgroundColor="black"
                className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
            >
                <h2 className="text-white text-4xl md:text-6xl font-bold text-center">
                    Start your campaign today!
                </h2>
                <p className="text-white bg-slate-950 md:text-lg lg:text-xl max-w-xl mt-6 text-center">
                    Let us know what you have in mind, and leave the rest to us. We accept last-minute schedules
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                    <div className="group relative">
                        <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-cyan-500 opacity-75 blur transition duration-500 group-hover:opacity-100"></div>
                        <Link href="/contact">
                            <button className="relative rounded-lg bg-black px-7 py-4 text-white">Contact us</button>
                        </Link>
                    </div>
                </div>
            </Vortex>
        </div>
    )
}

export default Contact