import { PropsWithChildren } from 'react';

const Badge = ({ children }: PropsWithChildren) => {
    return (
        <div className="rounded-[0.4rem] bg-primary px-[0.5rem] pb-[0.1rem] pt-[0.3rem] text-[0.8rem] text-gray-200 sm:text-[1.1rem]">
            {children}
        </div>
    );
};

export default Badge;
