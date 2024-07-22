import React from 'react'
import Image from 'next/image'
import Truck from "../../../public/Services/Truck.png"
import Cost from "../../../public/Services/Cost.png"
import Captative from "../../../public/Services/Captative.png"
const Services = () => {
    return (
        <section className='w-full py-12 px-4 bg-background '>
            <h2 className='bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl tracking-tight text-transparent max-w-2xl mx-auto md:text-5xl lg:text-7xl lg:max-w-3xl'>Top-notch service at unbeatable prices.</h2>
            <p className='text-center my-8 max-w-5xl mx-auto md:text-lg lg:text-xl'>Whether you&apos;re a business owner seeking to amplify your brand or a media agency exploring new advertising mediums, we&apos;ve got you covered.</p>
            <section className='w-full grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto'>
                <article className='w-full flex flex-col items-center  space-y-4'>
                    <div className='w-[100px] h-[100px] p-[15px] bg-[#2c2c2c] flex justify-center items-center rounded-full'>
                        <Image
                            src={Truck}
                            width={0}
                            height={0}
                            className="w-[90%] z-40"
                            alt="Truck"
                        />
                    </div>
                    <h3 className='text-2xl text-center lg:text-3xl'>Highly Customizable</h3>
                    <p className='text-center md:text-lg'>Mobile billboards let you adjust your campaigns and routes, finding the best spots to reach your target audience. They&apos;re flexible and effective for grabbing attention.</p>
                </article>
                <article className='w-full flex flex-col items-center  space-y-4'>
                    <div className='w-[100px] h-[100px] p-[15px] bg-[#2c2c2c] flex justify-center items-center rounded-full'>
                        <Image
                            src={Cost}
                            width={0}
                            height={0}
                            className="w-[90%] z-40"
                            alt="Cost"
                        />
                    </div>
                    <h3 className='text-2xl text-center lg:text-3xl'>Cost Effective</h3>
                    <p className='text-center md:text-lg'>Mobile advertising delivers impressions (views) at a lower cost than traditional media, all while driving sales!</p>
                </article>
                <article className='w-full flex flex-col items-center  space-y-4'>
                    <div className='w-[100px] h-[100px] p-[15px] bg-[#2c2c2c] flex justify-center items-center rounded-full'>
                        <Image
                            src={Captative}
                            width={0}
                            height={0}
                            className="w-[90%] z-40"
                            alt="Captative"
                        />
                    </div>
                    <h3 className='text-2xl text-center lg:text-3xl'>Captivate Your Audience</h3>
                    <p className='text-center md:text-lg'>Mobile billboards grab attention and keep your message in front of potential customers.</p>
                </article>
            </section>
        </section>
    )
}

export default Services