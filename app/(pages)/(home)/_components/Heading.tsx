import { raleway } from '@/app/fonts';
import { PropsWithChildren } from 'react';

const Heading = ({ children }: PropsWithChildren) => {
    return (
        <h2
            className={`${raleway.className} relative z-40 my-[0.5rem] bg-gradient-to-br from-blue-900 via-cyan-900 to-purple-900 bg-clip-text text-center text-[2.6rem] font-[600] leading-[3.2rem] text-text text-transparent drop-shadow-sm`}
        >
            {children}
        </h2>
    );
};

export default Heading;
