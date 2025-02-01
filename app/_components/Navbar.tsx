'use client';
import { merienda } from '@/app/fonts';
import Link from 'next/link';
import { FaFileAlt } from 'react-icons/fa';
import { FaMapLocation, FaPhone } from 'react-icons/fa6';
import useBookmark from '../_hooks/useBookmark';
import useScroll from '../_hooks/useScroll';
import { cpNumber, currentAddress, resumeLink } from '../data/info';
import HamburgerDropdown from './HambergerDropdown';

const Navbar = () => {
    const scrolled = useScroll(50);

    return (
        <header
            className={` ${
                scrolled
                    ? 'bg-gradient-to-r from-stone-800 to-slate-900'
                    : 'bg-gray-50/90 drop-shadow-sm'
            } fixed top-0 z-50 w-full`}
        >
            <div className="container flex w-full max-w-[120rem] flex-row items-center justify-between px-[3rem] py-[1rem] lg:px-[6rem]">
                <Logo />
                <nav
                    className={`${scrolled ? 'text-white' : 'text-slate-700'} flex flex-row items-center gap-[2rem]`}
                >
                    <BookmarkNav />
                    <div className="flex flex-col text-[1rem] sm:flex-row sm:gap-[2rem] sm:text-[1.3rem] md:text-[1.6rem]">
                        <PhoneNumber />
                        <Address />
                    </div>
                    <Link
                        target="_blank"
                        href={resumeLink}
                        className={`${scrolled ? 'bg-orange-600' : 'bg-gradient-to-br from-blue-600 to-cyan-600'} hidden flex-row items-center gap-[0.5rem] rounded-[0.5rem] p-[0.4rem] text-[1.2rem] text-gray-100 drop-shadow-md hover:scale-95 hover:bg-orange-800 md:flex md:text-[1.4rem]`}
                    >
                        <FaFileAlt className="h-[1.4rem] w-[1.4rem]" />
                        <p>resume</p>
                    </Link>
                    <div className="block md:hidden">
                        <HamburgerDropdown />
                    </div>
                </nav>
            </div>
        </header>
    );
};

const Logo = () => {
    return (
        <div className="w-fit rounded-[0.7rem] bg-gradient-to-br from-blue-400 via-cyan-500 to-purple-600 p-[0.2rem] text-[1.6rem] font-bold text-white shadow-md drop-shadow-xl md:p-[0.4rem] md:text-[1.8rem]">
            <p className={merienda.className}>D.O</p>
        </div>
    );
};

const BookmarkNav = () => {
    const handleScroll = useBookmark();
    return (
        <>
            {bookmarkLinks.map((bookmark) => (
                <button
                    key={bookmark.id}
                    onClick={() => handleScroll(bookmark.href)}
                    className="hidden px-[1rem] text-center text-[1.6rem] hover:text-gray-400 md:block"
                >
                    {bookmark.name}
                </button>
            ))}
        </>
    );
};

const PhoneNumber = () => {
    return (
        <div className="flex flex-row items-center">
            <FaPhone className="mr-[0.5rem] w-[1.4rem]" />
            <p>{cpNumber}</p>
        </div>
    );
};

const Address = () => {
    return (
        <div className="flex flex-row items-center">
            <FaMapLocation className="mr-[0.5rem] w-[1.4rem]" />
            <p>{currentAddress}</p>
        </div>
    );
};

export const bookmarkLinks = [
    {
        id: 1,
        name: 'About me',
        href: 'about-me'
    },
    {
        id: 2,
        name: 'Tech Stack',
        href: 'tech-stack'
    },
    {
        id: 3,
        name: 'Contact',
        href: 'contact'
    },
    {
        id: 4,
        name: 'Socials',
        href: 'socials'
    }
];

export default Navbar;
