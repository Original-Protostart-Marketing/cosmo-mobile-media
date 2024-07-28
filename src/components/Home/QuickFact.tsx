import Image from 'next/image'
import React from 'react'
import QuickFactImg from '../../../public/QuickFact.jpeg'

const QuickFact = () => {
    return (
        <section className='w-full py-12 px-4 bg-background'>
            <article className='w-full h-full max-w-7xl mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 text-center md:text-left items-center'>
                <section className='flex-1 flex flex-col relative'>
                    <div className="absolute rounded-full bg-gradient-to-br from-cyan-200 -cyan-500 opacity-25 blur-3xl w-[80%] h-[80%] top-0 left-0"></div>
                    <h2 className='bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-4xl tracking-tight text-transparent max-w-2xl md:text-5xl lg:text-7xl lg:max-w-3xl'>Quick Fact</h2>
                    <p className='my-4 md:text-lg lg:text-3xl'>&quot;Individual vehicle advertising generates between 30,000 to 70,000 daily vehicle impressions.&quot;</p>
                </section>
                <Image width={0} height={0} alt='Truck' className='w-full h-full rounded-sm md:rounded-md lg:rounded-xg' src={QuickFactImg} />
            </article>
        </section>
    )
}

export default QuickFact