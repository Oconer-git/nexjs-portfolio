import { Tech } from '@/app/data/utilts';
import Image from 'next/image';

const TechContainer = ({ tech }: { tech: Tech }) => {
    return (
        <figure>
            <div className="relative z-30 mx-auto w-[8rem] rounded-xl border-[0.1rem] border-gray-300 bg-gradient-to-r from-gray-100 to-stone-100 p-[0.5rem] shadow-sm drop-shadow-sm transition ease-in-out hover:-translate-y-1 hover:scale-95 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-400">
                <Image
                    width={500}
                    height={500}
                    src={tech.imageSrc}
                    alt={tech.name}
                    className="mx-auto w-[8rem] rounded-xl border-gray-300 bg-white shadow-sm"
                />
            </div>
            <figcaption className="mx-auto mt-[0.4rem] text-center text-[1.2rem] text-text">
                {tech.name}
            </figcaption>
        </figure>
    );
};

export default TechContainer;
