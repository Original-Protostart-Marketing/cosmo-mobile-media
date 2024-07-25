"use client"
import Link from "next/link";
import { useState } from "react";
import { ToggleButton } from "./ToggleButton";
import { CircleX } from "lucide-react";
import Image from "next/image";
import Logo from '../../../public/Logo.png'

const AuthLinks = () => {
    const status = "authenticated";
    const [open, setOpen] = useState<boolean>(false);
    return (
        <>
            {status !== "authenticated" ? (
                <Link className="hidden md:block" href={'/login'}>Login</Link>
            ) : (
                <>
                    <Link className="hidden md:block" href={'/'}>Dashboard</Link>
                    <span className="cursor-pointer hidden md:block">Logout</span>
                </>
            )}
            <div className="w-[20px] h-[16px] flex-col justify-between cursor-pointer flex md:hidden" onClick={() => setOpen(!open)}>
                <div className="w-[100%] h-[2px] bg-foreground"></div>
                <div className="w-[100%] h-[2px] bg-foreground"></div>
                <div className="w-[100%] h-[2px] bg-foreground"></div>
            </div>
            {
                open && (
                    <div className="absolute top-0 left-0 bg-background h-screen w-[100%] flex flex-col text-[36px] z-50 md:hidden px-4">
                        <div className="w-[100%] mx-auto h-[70px] flex justify-between items-center">
                            <Link href='/'>
                                <Image src={Logo} alt="Logo" width={0} height={0} className='w-[120px]' />
                            </Link>
                            <div className="flex items-center h-full gap-[15px]">
                                {/* <ToggleButton /> */}
                                <CircleX className="cursor-pointer text-[24px]" onClick={() => setOpen(!open)} />
                            </div>
                        </div>
                        <div className="w-[90%] mx-auto h-[calc(100vh-70px)]">
                            <div className="w-full h-full bg-softBg rounded-xl flex flex-col justify-start items-center mt-8  text-[20px] font-semibold gap-[20px]">
                                <Link
                                    href={'/'}
                                    className="w-max flex items-center gap-[15px] mt-[20px]">
                                    Home
                                </Link>
                                <Link
                                    href={'/mobile-advertising'}
                                    className="w-max flex items-center gap-[15px]">
                                    Mobile Advertising
                                </Link>
                                <Link
                                    href={'/contact'}
                                    className="w-max flex items-center gap-[15px]">
                                    Contact
                                </Link>
                                <Link
                                    href={'/careers'}
                                    className="w-max flex items-center gap-[15px]">
                                    Careers
                                </Link>
                                {
                                    status === "authenticated" ? (
                                        <>
                                            <Link
                                                href={'/dashboard'}
                                                className="w-max flex items-center gap-[15px]">
                                                Dashboard
                                            </Link>
                                            <button className="py-[16px] px-[20px] border-none rounded-[5px] w-[90%] bg-foreground text-background font-bold flex justify-center items-center gap-[15px]">
                                                Logout
                                            </button>
                                        </>
                                    ) : (
                                        <button className="py-[16px] px-[20px] border-none rounded-[5px] w-[90%] bg-foreground text-background font-bold flex justify-center items-center gap-[15px]">
                                            Login
                                        </button>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}
export default AuthLinks