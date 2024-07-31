import Image from 'next/image'
import React from 'react'
import Logo from '../../../public/Logo.png'
import Link from 'next/link'
import { Facebook, Instagram, Mail, MapPinned, Phone } from 'lucide-react'

const Footer = () => {
    return (
        <footer className='w-full h-max px-4 bg-black border-t-2 border-cyan-500 flex flex-col'>
            <section className='w-full py-12 h-full max-w-7xl gap-6 mx-auto flex flex-col md:grid grid-cols-2 lg:grid-cols-4 text-center'>
                <article className='flex flex-col items-center md:items-start h-max'>
                    <Image
                        src={Logo}
                        width={0}
                        height={0}
                        className="w-[120px]"
                        alt="Logo"
                    />
                </article>
                <article className='flex flex-col items-center md:items-start h-max'>
                    <h3 className='font-bold mb-1'>INFO</h3>
                    <Link className='font-light text-sm mb-1' href={'/'}>Home</Link>
                    <Link className='font-light text-sm mb-1' href={'/mobile-advertising'}>Mobile Advertising</Link>
                    <Link className='font-light text-sm mb-1' href={'/contact'}>Contact</Link>
                    <Link className='font-light text-sm mb-1' href={'/careers'}>Careers</Link>
                </article>
                <article className='flex flex-col items-center md:items-start h-max'>
                    <h3 className='font-bold mb-1'>CONTACT</h3>
                    <a className='flex gap-2 text-sm items-center mb-1' href="tel:+12814019303"><Phone className='w-4 h-4' />+1 (281) 401-9303</a>
                    <a className='flex gap-2 text-sm items-center mb-1' href="mailto:contact@cosmomobilemedia.com"><Mail className='w-4 h-4' />contact@cosmomobilemedia.com</a>
                </article>
                <article className='flex flex-col items-center md:items-start h-max'>
                    <h3 className='font-bold mb-1'>SOCIAL</h3>
                    <div className='flex flex-row md:flex-col gap-2'>
                        <a href="https://www.facebook.com/CosmoMobileMedia" target='_blank'><Facebook /></a>
                        <a href="https://www.instagram.com/cosmomobilemedia/" target='_blank'><Instagram /></a>
                    </div>
                </article>
            </section>
            <section className='mt-8 py-4 '>
                <p className='text-smw-full text-center '>Copyright ©2024 - Cosmo Mobile Media All rights reserved</p>
            </section>
        </footer>
    )
}

export default Footer