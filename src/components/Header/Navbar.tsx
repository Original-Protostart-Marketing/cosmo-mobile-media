"use client"
import { ToggleButton } from './ToggleButton'
import Image from 'next/image'
import Logo from '../../../public/Logo.png'
import React, { useState, useEffect } from 'react';
import Link from "next/link"
import AuthLinks from "./AuthLinks"

const Navbar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 2;

        setVisible(isVisible);
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <header className={`fixed px-4 top-0 left-0 h-[70px] w-screen z-50 transition duration-300 ease-in-out ${visible ? 'translate-y-0 bg-slate-950' : '-translate-y-full'}`}>
            <section className="w-[100%] max-w-7xl mx-auto flex items-center justify-between h-full z-50">
                <Link href='/'>
                    <Image src={Logo} alt="Logo" width={0} height={0} className='w-[120px]' />
                </Link>
                <nav className="flex gap-[30px] items-center xl:text-[18px] xl:gap-[25px] text-white">
                    {/* <ToggleButton /> */}
                    <Link className="hidden md:flex" href='/'>Home</Link>
                    <Link className="hidden md:flex" href='/mobile-advertising'>Mobile Advertising</Link>
                    <Link className="hidden md:flex" href='/contact'>Contact</Link>
                    <Link className="hidden md:flex" href='/careers'>Careers</Link>
                    <AuthLinks />
                </nav>
            </section>
        </header>
    );
}

export default Navbar;
