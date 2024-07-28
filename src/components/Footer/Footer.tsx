import Image from 'next/image'
import React from 'react'
import Logo from '../../../public/Logo.png'
import Link from 'next/link'
import { Facebook, Instagram, Mail, MapPinned, Phone } from 'lucide-react'

const Footer = () => {
    return (
        <footer className='w-full px-4 bg-black border-t-2 border-cyan-500 flex flex-col'>
            <section className='w-full h-full py-12 max-w-7xl mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center'>
                <article className='flex flex-col items-center sm:items-start'>
                    <Image
                        src={Logo}
                        width={0}
                        height={0}
                        className="w-[120px]"
                        alt="Logo"
                    />
                </article>
                <article className='flex flex-col items-center sm:items-start'>
                    <h3 className='font-bold mb-1'>INFO</h3>
                    <Link className='font-light text-sm mb-1' href={'/'}>Home</Link>
                    <Link className='font-light text-sm mb-1' href={'/mobile-advertising'}>Mobile Advertising</Link>
                    <Link className='font-light text-sm mb-1' href={'/contact'}>Contact</Link>
                    <Link className='font-light text-sm mb-1' href={'/careers'}>Careers</Link>
                </article>
                <article className='flex flex-col items-center sm:items-start'>
                    <h3 className='font-bold mb-1'>CONTACT</h3>
                    <a className='flex gap-2 text-sm items-center mb-1' href=""><Phone className='w-4 h-4' />+1 (281) 401-9303</a>
                    <a className='flex gap-2 text-sm items-center mb-1' href="mailto:contact@cosmomobilemedia.com"><Mail className='w-4 h-4' />contact@cosmomobilemedia.com</a>
                </article>
                <article className='flex flex-col items-center sm:items-start'>
                    <h3 className='font-bold mb-1'>SOCIAL</h3>
                    <div className='flex flex-row sm:flex-col gap-2'>
                        <a href="https://www.facebook.com/CosmoMobileMedia"><Instagram /></a>
                        <a href="https://www.instagram.com/cosmomobilemedia/"><Facebook /></a>
                    </div>
                </article>
            </section>
            <p className='w-full text-center mt-8 py-4 text-sm'>
                Copyright ©2024 - Cosmo Mobile Media All rights reserved
            </p>
        </footer>
    )
}

export default Footer