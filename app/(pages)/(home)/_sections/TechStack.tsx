import { techs, tools } from '@/app/data/utilts';

import Image from 'next/image';
import Heading from '../_components/Heading';
import TechContainer from '../_components/TechContainer';
import ToolContainer from '../_components/ToolContainer';
const TechStack = () => {
    return (
        <section className="bg-grid bg-gridSize20 bg-whitesmoke">
            <Image
                src="/pictures/side_gradient.webp"
                width={500}
                height={145}
                className="absolute right-0 z-20 opacity-90"
                alt="tailwind effect"
            />
            <div className="container px-[2rem] pb-[5.1rem] pt-[4.8rem]">
                <MainTechs />
                <OtherTools />
            </div>
        </section>
    );
};

const MainTechs = () => {
    return (
        <>
            <Heading>TECH STACK</Heading>
            <div className="relative z-40 mx-auto mb-[3rem] mt-[0.8rem] grid w-full grid-cols-4 justify-center gap-[1rem] border-b-[0.1rem] border-gray-400/40 pb-[2rem]">
                {techs.map((tech) => (
                    <TechContainer key={tech.id} tech={tech} />
                ))}
            </div>
        </>
    );
};

const OtherTools = () => {
    return (
        <>
            <h2 className="text-center text-[2.4rem] font-light leading-[3rem] text-text/80">
                other tools
            </h2>
            <div className="mx-auto mt-[0.8rem] grid w-full grid-cols-5 justify-center gap-[1rem]">
                {tools.map((tool) => (
                    <ToolContainer key={tool.id} tool={tool} />
                ))}
            </div>
        </>
    );
};

export default TechStack;
