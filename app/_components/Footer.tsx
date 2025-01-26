import Image from 'next/image';
import Link from 'next/link';
import { merienda } from '../fonts';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-stone-800 to-slate-900 text-white">
            {/* gradient overlay */}
            <div className="container px-[3rem] pb-[4.8rem] pt-[5.3rem]">
                {/* socials */}
                <div className="flex flex-row items-center justify-between">
                    <section>
                        <h2
                            className={`${merienda.className} bg-gradient-to-br from-blue-300 via-cyan-400 to-purple-500 bg-clip-text text-[3rem] font-bold text-transparent drop-shadow-sm`}
                        >
                            Check my socials
                        </h2>
                        <p className="italic text-whitesmoke">
                            Check my socials, you might miss something cool
                        </p>
                    </section>
                    <nav className="flex flex-row gap-[1.5rem]">
                        <Link
                            target="_blank"
                            href={'https://www.facebook.com/DonellPie'}
                            className="group relative"
                        >
                            <div className="absolute rounded-lg bg-gradient-to-r from-[#0866ff] via-[#f2f4f7] to-[#42b72a] opacity-75 blur group-hover:-inset-[0.3rem]"></div>
                            <Image
                                width={200}
                                height={200}
                                src="/pictures/socials/fb.png"
                                alt="facebook"
                                className="relative h-[3.5rem] w-[3.5rem] rounded-[0.8rem] group-hover:scale-105"
                            />
                        </Link>
                        <Link
                            target="_blank"
                            href={'https://www.instagram.com/donylpie/'}
                            className="group relative"
                        >
                            <div className="absolute rounded-lg bg-gradient-to-r from-[#4d71ca] via-[#f2f4f7] to-[#ffd457] opacity-75 blur group-hover:-inset-[0.3rem]"></div>
                            <Image
                                width={200}
                                height={200}
                                src="/pictures/socials/insta.png"
                                alt="instagram"
                                className="relative h-[3.5rem] w-[3.5rem] rounded-[0.8rem] group-hover:scale-105"
                            />
                        </Link>
                        <Link
                            target="_blank"
                            href={'https://github.com/Oconer-git'}
                            className="group relative"
                        >
                            <div className="absolute rounded-lg bg-gradient-to-r from-[#4d71ca] via-[#f2f4f7] to-[#ffd457] opacity-75 blur group-hover:-inset-[0.3rem]"></div>
                            <Image
                                width={200}
                                height={200}
                                src="/pictures/socials/github.png"
                                alt="facebook"
                                className="relative h-[3.5rem] w-[3.5rem] rounded-[0.8rem] group-hover:scale-105"
                            />
                        </Link>
                    </nav>
                </div>
                <p className="p-2 text-right text-blue-300">
                    © 2025 All rights reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
