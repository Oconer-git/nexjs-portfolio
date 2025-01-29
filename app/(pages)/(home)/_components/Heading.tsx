import { raleway } from '@/app/fonts';
import { PropsWithChildren } from 'react';

const Heading = ({ children }: PropsWithChildren) => {
    return (
        <h2
            className={`${raleway.className} relative z-40 my-[0.5rem] bg-gradient-to-br from-blue-900 via-cyan-900 to-purple-900 bg-clip-text text-center text-[2.6rem]/[3.2rem] font-[600] text-text text-transparent drop-shadow-sm sm:text-[3rem]/[3.6rem] lg:text-[3.2rem]/[3.8rem]`}
        >
            {children}
        </h2>
    );
};

export default Heading;
