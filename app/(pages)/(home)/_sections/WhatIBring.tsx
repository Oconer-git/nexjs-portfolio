'use client';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi
} from '@/app/_components/Carousel';
import { Skill, skills } from '@/app/data/utilts';
import { merienda, raleway } from '@/app/fonts';
import React from 'react';

const WhatIBring = () => {
    return (
        <section
            id="skills"
            className="scroll-mt-[10rem] border-t border-[0.2] bg-gradient-to-br from-slate-50 via-white to-slate-300"
        >
            <div className="container w-full max-w-[120rem] border-b-[0.1rem] border-b-gray-300 px-[3rem] pb-[5.1rem] pt-[4.8rem] lg:px-[6rem]">
                <h2
                    className={`${merienda.className} mt-[2rem] bg-gradient-to-br from-blue-700 via-cyan-800 to-purple-900 bg-clip-text text-center text-[2.5rem]/[3.5rem] font-extrabold text-highlight text-transparent sm:text-[3.2rem]/[4.8rem] lg:text-[3.8rem]/[5.4rem]`}
                >
                    What I Bring to the Table{' '}
                </h2>
                <div className="mx-auto w-11/12">
                    <p className="text-center text-[1.3rem]/[1.6rem] text-highlight/80 sm:text-[1.6rem]/[2.4rem] lg:text-[1.8rem]/[2.6rem]">
                        Here are some of the skills I’ve developed over time.
                        I’m always working to improve and learn more, and these
                        are areas where I feel confident contributing and
                        helping out.{' '}
                    </p>
                </div>
                <div className="pt-[0.5rem] sm:px-[3rem]">
                    <CarouselContainer />
                </div>
            </div>
        </section>
    );
};

const CarouselContainer = () => {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on('select', () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    const handleDotClick = (index: number) => {
        if (api) {
            api.scrollTo(index);
        }
    };

    return (
        <>
            <Carousel
                setApi={setApi}
                opts={{
                    align: 'start'
                }}
                className="mx-auto mt-[2rem] w-9/12 sm:w-full"
            >
                <CarouselContent>
                    {skills.map((skill) => (
                        <CarouselItem
                            key={skill.id}
                            className="mx-auto basis-full pb-[6rem] sm:basis-1/2 sm:pb-[6rem] md:basis-1/2 md:pb-[16rem] lg:basis-1/3"
                        >
                            <CardItem skill={skill} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="border-[0.1rem] border-gray-800 bg-stone-100 shadow-md" />
                <CarouselNext className="border-[0.1rem] border-gray-800 bg-stone-100 shadow-md" />
            </Carousel>
            <div className="mt-4 flex justify-center gap-[1rem]">
                {Array.from({ length: count }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`h-[1rem] w-[1rem] rounded-full ${
                            current === index + 1
                                ? 'bg-blue-600 shadow-md shadow-white'
                                : 'bg-stone-400'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
            <div className="mt-2 text-center text-[1.2rem] text-gray-700">
                Slide {current} of {count}
            </div>
        </>
    );
};

const CardItem = ({ skill }: { skill: Skill }) => {
    return (
        <div
            className={`${skill.bgClassname} ${raleway.className} mx-auto h-[29.4rem] w-10/12 rounded-[0.7rem] bg-cover`}
        >
            <div className="h-full w-full rounded-[0.7rem] bg-black/50 p-[2rem] text-white">
                <h3 className="text-[2.2rem]/[2.2rem] font-light md:text-[2.9rem]/[3.3rem] lg:text-[2.8rem]/[3.2rem]">
                    {skill.name}
                </h3>
                <p className="mt-[1rem] text-[1.4rem]/[1.6rem] font-[200] md:text-[1.8rem]/[2.2rem] lg:text-[1.6rem]/[1.9rem]">
                    {skill.description}
                </p>
                {skill.image}
            </div>
        </div>
    );
};
export default WhatIBring;
