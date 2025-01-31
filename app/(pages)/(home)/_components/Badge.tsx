import { PropsWithChildren } from 'react';

const Badge = ({ children }: PropsWithChildren) => {
    return (
        <div className="rounded-[0.4rem] bg-primary px-[0.5rem] py-[0.1rem] text-[0.8rem] text-gray-200 sm:text-[1.1rem]">
            {children}
        </div>
    );
};

export default Badge;
