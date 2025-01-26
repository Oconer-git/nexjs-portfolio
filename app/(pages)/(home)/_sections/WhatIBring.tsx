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
        <section className="border-t border-[0.2] bg-gradient-to-br from-slate-50 via-white to-slate-300">
            <div className="container border-b-[0.1rem] border-b-gray-300 px-[3rem] pb-[5.1rem] pt-[4.8rem]">
                <h2
                    className={`${merienda.className} mt-[2rem] bg-gradient-to-br from-blue-700 via-cyan-800 to-purple-900 bg-clip-text text-center text-[3rem] font-extrabold leading-[4.2rem] text-highlight text-transparent`}
                >
                    What I Bring to the Table{' '}
                </h2>
                <div className="mx-auto w-11/12">
                    <p className="text-center text-[1.3rem] leading-[1.6rem] text-highlight/80">
                        Here are some of the skills I’ve developed over time.
                        I’m always working to improve and learn more, and these
                        are areas where I feel confident contributing and
                        helping out.{' '}
                    </p>
                </div>
                <CarouselContainer />
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
            <Carousel setApi={setApi} className="mx-auto mt-[2rem] w-9/12">
                <CarouselContent>
                    {skills.map((skill) => (
                        <CarouselItem
                            key={skill.id}
                            className="mx-auto basis-full pb-[5rem] md:basis-1/2 lg:basis-1/3"
                        >
                            <CardItem skill={skill} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
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
                <h3 className="text-[2.6rem] font-light leading-[2.6rem]">
                    {skill.name}
                </h3>
                <p className="mt-[1rem] text-[1.4rem] font-[200] leading-[1.6rem]">
                    {skill.description}
                </p>
                {skill.image}
            </div>
        </div>
    );
};
export default WhatIBring;
