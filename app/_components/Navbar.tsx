'use client';
import { merienda } from '@/app/fonts';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaFileAlt } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={` ${
                scrolled
                    ? 'bg-gradient-to-r from-stone-800 to-slate-900'
                    : 'bg-gray-50/90 drop-shadow-sm'
            } fixed top-0 z-50 w-full px-[3rem] py-[1rem]`}
        >
            <nav className="container flex flex-row items-center justify-between">
                <div className="w-fit rounded-[0.7rem] bg-gradient-to-br from-blue-400 via-cyan-500 to-purple-600 p-[0.2rem] text-[1.6rem] font-bold text-white shadow-md drop-shadow-xl md:p-[0.4rem] md:text-[1.8rem]">
                    <p className={merienda.className}>D.O</p>
                </div>
                <div
                    className={`${scrolled ? 'text-white' : 'text-slate-700'} flex flex-row items-center gap-[2rem]`}
                >
                    <div className="flex flex-row items-center text-[1.3rem] md:text-[1.6rem]">
                        <FaPhone className="mr-[0.5rem] w-[1.4rem]" />
                        <p>
                            0945{'   '}183{'   '}0225
                        </p>
                    </div>
                    <Link
                        target="_blank"
                        href={'https://oconer-git.github.io/resume/'}
                        className={`${scrolled ? 'bg-orange-600' : 'bg-gradient-to-br from-blue-600 to-cyan-600'} flex flex-row items-center gap-[0.5rem] rounded-[0.5rem] p-[0.4rem] text-[1.2rem] !text-white drop-shadow-md hover:scale-95 hover:bg-orange-800 md:text-[1.4rem]`}
                    >
                        <FaFileAlt className="h-[1.4rem] w-[1.4rem]" />
                        <p>resume</p>
                    </Link>
                    <RxHamburgerMenu className="text-[3rem]" />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
