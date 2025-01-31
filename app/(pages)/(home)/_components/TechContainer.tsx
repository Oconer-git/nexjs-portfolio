import ScrollPopUpContainer from '@/app/_motion/ScrollPopUpContainer';
import { Tech } from '@/app/data/utilts';
import Image from 'next/image';

const TechContainer = ({ tech }: { tech: Tech }) => {
    return (
        <ScrollPopUpContainer>
            <figure className="col-span-1 w-fit">
                <div className="relative z-30 mx-auto flex w-[7rem] flex-col items-center justify-center rounded-xl border-[0.1rem] border-gray-300 bg-gradient-to-r from-gray-100 to-stone-100 p-[0.5rem] shadow-sm drop-shadow-sm transition ease-in-out hover:-translate-y-1 hover:scale-95 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-400 sm:w-[8.2rem] lg:h-[10rem] lg:w-[10rem]">
                    <Image
                        width={500}
                        height={500}
                        src={tech.imageSrc!}
                        alt={tech.name}
                        className="mx-auto w-[6.9rem] rounded-xl border-gray-300 bg-white shadow-sm lg:w-[9rem]"
                    />
                </div>
                <figcaption className="mx-auto mt-[0.4rem] text-center text-[1.2rem] text-gray-700">
                    {tech.name}
                </figcaption>
            </figure>
        </ScrollPopUpContainer>
    );
};

export default TechContainer;
