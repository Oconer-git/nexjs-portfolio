import { techs, tools } from '@/app/data/utilts';
import Image from 'next/image';
import Heading from '../_components/Heading';
import TechContainer from '../_components/TechContainer';
import ToolContainer from '../_components/ToolContainer';

const TechStack = () => {
    return (
        <section
            id="tech-stack"
            className="scroll-mt-[10rem] bg-whitesmoke bg-grid bg-gridSize20"
        >
            <div className="container relative z-30 w-full max-w-[120rem] px-[3rem] pb-[5.1rem] pt-[5rem] lg:px-[6rem] 2xl:max-w-[140rem]">
                <Heading>TECH STACK</Heading>
                <MainTechs />
                <OtherTools />
            </div>
        </section>
    );
};

const MainTechs = () => {
    return (
        <>
            <div className="relative z-40 mt-[1rem] grid w-full grid-cols-4 place-items-center justify-items-center gap-[1rem] rounded-[0.7rem] border-b-[0.1rem] border-gray-400/40 border-r-slate-400 bg-stone-400/10 p-[1rem] sm:grid-cols-5 sm:p-[2rem] md:grid-cols-8">
                {techs.map((tech) => (
                    <TechContainer key={tech.id} tech={tech} />
                ))}
                <FatCat />
            </div>
        </>
    );
};

const OtherTools = () => {
    return (
        <div className="relative z-40 mt-[3rem] md:mt-[1rem] lg:col-span-2 lg:px-[1rem] lg:pt-[0.8rem]">
            <h2 className="text-center text-[2.4rem]/[3rem] font-light text-text/80 lg:hidden">
                other tools
            </h2>
            <div className="mt-[0.8rem] grid w-full grid-cols-5 place-items-center items-baseline gap-[0.7rem] sm:grid-cols-6 sm:gap-[0.7rem] sm:px-[1rem] md:grid-cols-12 md:gap-[3rem] lg:gap-[4rem]">
                {tools.map((tool) => (
                    <ToolContainer key={tool.id} tool={tool} />
                ))}
            </div>
        </div>
    );
};

const FatCat = () => {
    return (
        <figure className="group col-span-1 hidden w-fit md:block">
            <div className="relative z-30 mx-auto flex w-[7.5rem] flex-col items-center justify-center rounded-xl border-[0.1rem] border-transparent p-[0.5rem] transition ease-in-out group-hover:-translate-y-1 group-hover:scale-150 sm:w-[8.2rem] lg:h-[10rem] lg:w-[10rem]">
                <Image
                    width={500}
                    unoptimized
                    height={500}
                    src="/gifs/fat_cat.gif"
                    alt="fat cat gif"
                    className="mx-auto w-[8rem] lg:h-[9rem] lg:w-[9rem]"
                />
                <p className="-mt-[0.2rem] hidden text-center text-[0.8rem] italic text-gray-700 transition ease-in-out group-hover:block">
                    My back is itchy, <br /> don&apos;t mind me here
                    <br />
                    *meow*
                </p>
            </div>
            <figcaption className="mx-auto mt-[0.4rem] w-2/3 text-center text-[1.2rem] text-gray-700 transition ease-in-out group-hover:hidden">
                empty slot
            </figcaption>
        </figure>
    );
};

export default TechStack;
