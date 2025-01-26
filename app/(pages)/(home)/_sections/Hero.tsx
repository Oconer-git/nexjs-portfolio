import { merienda } from '@/app/fonts';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className="bg-white">
            <Image
                src="/pictures/tailwind_effect.png"
                width={500}
                height={145}
                className="absolute top-0 z-40 w-full md:opacity-90"
                alt="tailwind effect"
            />
            <div className="container pb-[4.8rem] pt-[14.8rem]">
                <Profile />
                <ProfileDescription />
                <ScrollDown />
            </div>
        </section>
    );
};

const Profile = () => {
    return (
        <div className="mx-auto flex-col items-center justify-center">
            <Image
                src="/pictures/donell_transparent.png"
                width={499}
                height={499}
                className="relative z-40 mx-auto h-[13.7rem] w-[13.7rem] rounded-full border-[0.1rem] bg-gradient-to-br from-blue-700 via-cyan-800 to-purple-900 shadow-sm"
                alt="profile"
            />
            <h1
                className={`${merienda.className} mt-[2rem] bg-gradient-to-br from-blue-700 via-cyan-800 to-purple-900 bg-clip-text text-center text-[4.8rem] font-extrabold leading-[4.8rem] text-highlight text-transparent`}
            >
                Hi, I&apos;m Donell Oconer.
            </h1>
        </div>
    );
};

const ProfileDescription = () => {
    return (
        <div className="mt-[1.5rem] flex flex-row items-center justify-center gap-[0.3rem]">
            <p className="text-[1.4rem] leading-[2.4rem] text-gray-500">
                Aspiring junior web dev based in Philippines
            </p>
            <Image
                src="/pictures/flag.png"
                width={25}
                height={25}
                alt="Philippine flag"
            />
        </div>
    );
};

const ScrollDown = () => {
    return (
        <div className="mt-[5.7rem] flex flex-col items-center">
            <p className="text-[1.4rem] leading-[2rem] text-[#6b7280]">
                Scroll down
            </p>
            <Image
                src="/gifs/scroll-down.gif"
                width={10}
                height={10}
                className="h-[2rem] w-[2rem]"
                alt="down"
            />
        </div>
    );
};
export default Hero;
