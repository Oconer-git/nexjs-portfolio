import { techstack, tools } from '@/app/data/utilts';

import Image from 'next/image';
const TechStack = () => {
    return (
        <section className="W-[4.8rem] bg-whitesmoke">
            <div className="container px-[6rem] pb-[5.1rem] pt-[4.8rem]">
                <h2 className="text-center text-[3rem] font-light leading-[3.6rem] text-text">
                    TECH STACK
                </h2>
                <div className="mx-auto mb-[3rem] mt-[0.8rem] grid w-full grid-cols-4 justify-center gap-[1rem] border-b-[0.1rem] border-gray-400/40 pb-[2rem]">
                    {techstack.map((tech) => (
                        <figure key={tech.id}>
                            <div className="mx-auto w-[8rem] rounded-xl border-[0.1rem] border-gray-300 bg-gradient-to-r from-gray-200 to-stone-100 p-[0.5rem] shadow-sm">
                                <Image
                                    width={500}
                                    height={500}
                                    src={tech.imageSrc}
                                    alt={tech.name}
                                    className="mx-auto w-[8rem] rounded-xl border-[0.1rem] border-gray-300 bg-white shadow-sm"
                                />
                            </div>
                            <figcaption className="mx-auto mt-[0.4rem] text-center text-[1.2rem] text-text">
                                {tech.name}
                            </figcaption>
                        </figure>
                    ))}
                </div>
                <h2 className="text-center text-[2.4rem] font-light leading-[3.6rem] text-text">
                    other tools
                </h2>
                <div className="mx-auto mt-[0.8rem] grid w-full grid-cols-5 justify-center gap-[1rem]">
                    {tools.map((tool) => (
                        <figure key={tool.id}>
                            <div className="delay-95 mx-auto h-[6rem] w-[6rem] rounded-xl border-[0.1rem] border-gray-300 bg-white p-[1rem] shadow-sm transition ease-in-out hover:-translate-y-1 hover:scale-95">
                                <Image
                                    width={500}
                                    height={500}
                                    src={tool.imageSrc}
                                    alt={tool.name}
                                    className="w-[5rem]"
                                />
                            </div>
                            <figcaption className="mx-auto mt-[0.4rem] text-center text-[1.2rem] text-text">
                                {tool.name}
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
