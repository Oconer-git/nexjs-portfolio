import ScrollPopUpContainer from '@/app/_motion/ScrollPopUpContainer';
import { Tech } from '@/app/data/utilts';
import Image from 'next/image';

const ToolContainer = ({ tool }: { tool: Tech }) => {
    return (
        <ScrollPopUpContainer>
            <figure className="col-span-1">
                <div className="delay-95 group relative z-30 mx-auto flex h-[6rem] w-[6rem] flex-col items-center justify-between rounded-xl border-[0.1rem] border-gray-300 bg-white p-[1rem] shadow-sm drop-shadow-sm transition ease-in-out hover:-translate-y-1 hover:scale-95 sm:h-[6.5rem] sm:w-[6.5rem] md:h-[5.3rem] md:w-[5.3rem] lg:h-[7rem] lg:w-[7rem] lg:p-[1.5rem]">
                    <Image
                        width={500}
                        height={500}
                        src={tool.imageSrc!}
                        alt={tool.name}
                        className="w-[5rem] transition ease-in-out group-hover:scale-125 sm:w-[5.5rem] md:w-[4rem] lg:w-[4rem]"
                    />
                </div>
                <figcaption className="mx-auto mt-[0.4rem] text-center text-[1rem] text-gray-700 lg:text-[1.1rem]/[1.6rem]">
                    {tool.name}
                </figcaption>
            </figure>
        </ScrollPopUpContainer>
    );
};

export default ToolContainer;
