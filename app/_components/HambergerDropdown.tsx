import Link from 'next/link';
import { useCallback } from 'react';
import { FaFileAlt } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';
import { resumeLink } from '../data/info';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from './Dropdown';
import { bookmarkLinks } from './Navbar';
const HamburgerDropdown = () => {
    const handleScroll = useCallback((id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, []);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <RxHamburgerMenu className="text-[3rem]" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="relative right-[3rem] flex flex-col rounded-md bg-gray-100 text-[1.6rem] !leading-[1.95rem] text-text/60 shadow-md drop-shadow-sm lg:hidden">
                {bookmarkLinks.map((bookmark) => (
                    <DropdownMenuItem
                        key={bookmark.id}
                        onClick={() => handleScroll(bookmark.href)}
                        className="h-[4.2rem] w-[21.2rem] px-[1rem] py-[0.2rem] hover:text-text"
                    >
                        <p className="text-center text-[1.6rem]">
                            {bookmark.name}
                        </p>
                    </DropdownMenuItem>
                ))}

                <div className="p-[1.6rem]">
                    <Link
                        target="_blank"
                        href={resumeLink}
                        className="flex flex-row items-center justify-center gap-[0.5rem] rounded-[0.5rem] bg-gradient-to-br from-blue-600 to-cyan-600 p-[0.4rem] py-[1.4rem] text-[1.6rem] !text-white drop-shadow-md hover:scale-95 hover:bg-orange-800 md:text-[1.4rem]"
                    >
                        <FaFileAlt className="h-[1.5rem] w-[1.5rem]" />
                        <p>check resume</p>
                    </Link>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default HamburgerDropdown;
