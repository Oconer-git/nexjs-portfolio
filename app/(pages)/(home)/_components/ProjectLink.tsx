import Link from 'next/link';
import React from 'react';

interface Props {
    href: string;
    children: React.ReactNode;
}

const ProjectLink: React.FC<Props> = ({ href, children }: Props) => {
    return (
        <Link
            href={href}
            target="_blank"
            className="flex h-[2.3rem] flex-row items-center gap-[0.5rem] rounded-[0.4rem] border border-gray-400 bg-gray-200 px-[1rem] py-[0.3rem] text-[1rem] transition ease-in-out hover:scale-95 hover:bg-gray-300"
        >
            {children}
        </Link>
    );
};

export default ProjectLink;
