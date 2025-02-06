import InitialFadeInContainer from '@/app/_motion/InitialFadeInContainer';
import InitialPopUpContainer from '@/app/_motion/InitialPopUpContainer';
import { merienda } from '@/app/fonts';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className="bg-hero bg-cover">
            <div className="relative bg-gradient-to-b from-white via-white to-white/50">
                <Image
                    src="/pictures/tailwind_effect.png"
                    width={500}
                    height={145}
                    className="absolute top-0 z-40 w-full sm:w-full md:opacity-90"
                    alt="tailwind effect"
                />
                <div className="container flex h-[66.3rem] w-full max-w-[120rem] flex-col px-[3rem] pb-[4.8rem] pt-[18rem] sm:pt-[14.8rem] md:h-[60rem] xl:h-[65rem]">
                    <InitialPopUpContainer>
                        <Profile />
                        <ProfileDescription />
                    </InitialPopUpContainer>
                    <ScrollDown />
                </div>
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
                className="relative z-40 mx-auto h-[14.2rem] w-[14.2rem] rounded-full border-[0.1rem] bg-gradient-to-br from-blue-700 via-cyan-800 to-purple-900 shadow-sm sm:h-[14rem] sm:w-[14rem] md:h-[15rem] md:w-[15rem] xl:h-[15.5rem] xl:w-[15.5rem]"
                alt="profile"
            />
            <h1
                className={`${merienda.className} mt-[2rem] bg-gradient-to-br from-blue-700 via-cyan-800 to-purple-900 bg-clip-text text-center text-[4rem]/[4rem] font-extrabold text-highlight text-transparent sm:text-[5rem]/[5rem] md:text-[5.2rem]/[5.2rem] xl:text-[5.5rem]`}
            >
                Hi, I&apos;m Donell Oconer.
            </h1>
        </div>
    );
};

const ProfileDescription = () => {
    return (
        <div className="mx-auto mt-[2rem] inline-flex w-full items-center justify-center gap-[0.2rem]">
            <p className="w-fit text-center text-[1.3rem]/[2rem] text-slate-800/70 drop-shadow-sm sm:text-[1.7rem]/[2.7rem] lg:text-[1.8rem]/[2.8rem] lg:text-slate-700/90 xl:text-[1.95rem]">
                Aspiring web developer based in Philippines
            </p>
            <Image
                src="/pictures/flag.png"
                width={25}
                height={25}
                className="inline-block h-[1.4rem] w-[1.4rem] align-middle sm:h-[2rem] sm:w-[2rem] md:h-[2.4rem] md:w-[2.4rem]"
                alt="Philippine flag"
            />
        </div>
    );
};

const ScrollDown = () => {
    return (
        <div className="mt-auto">
            <InitialFadeInContainer>
                <div className="flex flex-col items-center">
                    <p className="text-[1.4rem] leading-[2rem] text-[#4d4a4a] sm:text-[1.8rem]">
                        Scroll down
                    </p>
                    <Image
                        src="/gifs/scroll-down.gif"
                        width={10}
                        height={10}
                        className="h-[2rem] w-[2rem] sm:h-[2.4rem] sm:w-[2.4rem]"
                        alt="down"
                    />
                    <Image
                        src="/gifs/scroll-down.gif"
                        width={10}
                        height={10}
                        className="h-[2rem] w-[2rem] sm:h-[2.4rem] sm:w-[2.4rem]"
                        alt="down"
                    />
                </div>
            </InitialFadeInContainer>
        </div>
    );
};
export default Hero;
