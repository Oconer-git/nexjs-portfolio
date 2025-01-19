import Image from 'next/image';

const Hero = () => {
    return (
        <section className="bg-whitesmoke">
            <div className="container pb-[4.8rem] pt-[12.8rem]">
                <Image
                    src="/pictures/tailwind_effect.png"
                    width={500}
                    height={145}
                    className="absolute top-0 z-50"
                    alt="tailwind effect"
                />
                <Image
                    src="/pictures/donell_transparent.png"
                    width={499}
                    height={499}
                    className="mx-auto h-[13.7rem] w-[13.7rem] rounded-full bg-red-600"
                    alt="profile"
                />
                <h1 className="mx-auto mt-[1rem] w-[40rem] text-center text-[4.8rem] font-extrabold leading-[4.8rem] text-highlight">
                    Hi, I&apos;m Donell Oconer.
                </h1>
                <div className="mt-[1.5rem] flex flex-row items-center justify-center gap-[0.3rem]">
                    <p className="text-[1.6rem] leading-[2.4rem] text-text">
                        Aspiring junior web dev based in Philippines
                    </p>
                    <Image
                        src="/pictures/flag.png"
                        width={25}
                        height={25}
                        alt="Philippine flag"
                    />
                </div>
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
            </div>
        </section>
    );
};

export default Hero;
