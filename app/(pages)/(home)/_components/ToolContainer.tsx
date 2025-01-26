import { Tech } from '@/app/data/utilts';
import Image from 'next/image';

const ToolContainer = ({ tool }: { tool: Tech }) => {
    return (
        <figure>
            <div className="delay-95 group relative z-30 mx-auto h-[6rem] w-[6rem] rounded-xl border-[0.1rem] border-gray-300 bg-white p-[1rem] shadow-sm drop-shadow-sm transition ease-in-out hover:-translate-y-1 hover:scale-95">
                <Image
                    width={500}
                    height={500}
                    src={tool.imageSrc}
                    alt={tool.name}
                    className="w-[5rem] transition ease-in-out group-hover:scale-125"
                />
            </div>
            <figcaption className="mx-auto mt-[0.4rem] text-center text-[1rem] text-text">
                {tool.name}
            </figcaption>
        </figure>
    );
};

export default ToolContainer;
