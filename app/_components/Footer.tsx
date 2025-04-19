import Image from 'next/image';
import Link from 'next/link';
import { merienda } from '../fonts';

const Footer = () => {
    return (
        <footer
            id="socials"
            className="bg-gradient-to-r from-stone-800 to-slate-900 text-white"
        >
            {/* gradient overlay */}
            <div className="container w-full max-w-[120rem] px-[3rem] pb-[4.8rem] pt-[5.3rem] lg:px-[6rem] 2xl:max-w-[140rem]">
                {/* socials */}
                <div className="flex flex-col justify-between gap-[2rem] sm:flex-row sm:items-center sm:gap-[1rem]">
                    <section>
                        <h2
                            className={`${merienda.className} bg-gradient-to-br from-blue-300 via-cyan-400 to-purple-500 bg-clip-text text-[2.2rem] font-bold text-transparent drop-shadow-sm sm:text-[3rem] md:text-[3.4rem] lg:text-[3.8rem]`}
                        >
                            Check my socials
                        </h2>
                        <p className="text-[1rem] italic text-whitesmoke md:text-[1.4rem]">
                            Visit my online profiles, you might miss something
                            cool
                        </p>
                    </section>
                    <SocialLinks />
                </div>
                <p className="p-2 text-blue-300 sm:text-right md:text-[1.4rem]">
                    © 2025 All rights reserved
                </p>
            </div>
        </footer>
    );
};

const SocialLinks = () => {
    const socials = [
        {
            id: 1,
            name: 'facebook',
            imageSrc: '/pictures/socials/fb.png',
            href: 'https://www.facebook.com/DonellPie',
            shadowClass:
                'bg-gradient-to-r from-[#0866ff] via-[#f2f4f7] to-[#42b72a]'
        },
        {
            id: 2,
            name: 'instagram',
            imageSrc: '/pictures/socials/insta.png',
            href: 'https://www.instagram.com/donylpie/',
            shadowClass:
                'bg-gradient-to-r from-[#4d71ca] via-[#f2f4f7] to-[#ffd457]'
        },
        {
            id: 3,
            name: 'github',
            imageSrc: '/pictures/socials/github.png',
            href: 'https://github.com/Oconer-git',
            shadowClass:
                'bg-gradient-to-r from-[#8b31aa] via-[#f2f4f7] to-[#1f2328]'
        }
    ];

    return (
        <nav className="flex flex-row gap-[0.4rem] px-[0.1rem] sm:gap-[1.5rem]">
            {socials.map((social) => (
                <Link
                    key={social.id}
                    target="_blank"
                    href={social.href}
                    className="group relative"
                >
                    <div
                        className={`${social.shadowClass} absolute rounded-lg opacity-75 blur group-hover:-inset-[0.3rem]`}
                    ></div>
                    <Image
                        width={200}
                        height={200}
                        src={social.imageSrc}
                        alt={social.name}
                        className="relative h-[3.5rem] w-[3.5rem] rounded-[0.8rem] group-hover:scale-105 md:h-[4rem] md:w-[4rem]"
                    />
                </Link>
            ))}
        </nav>
    );
};
export default Footer;
