import Image from 'next/image';
import { ReactNode } from 'react';

export interface Tech {
    id: number;
    name: string;
    imageSrc?: string;
}

export interface Project {
    id: number;
    name: string;
    icon: string;
    color: string;
    description: string;
    siteLink?: string;
    demoLink: string;
    mobileImageSrc: string;
    desktopImageSrc: string;
    techUsed?: Tech[];
}

export interface Skill {
    id: number;
    name: string;
    description: string;
    image: ReactNode;
    bgClassname: string;
}

export const skills: Skill[] = [
    {
        id: 1,
        name: 'Front-end Development',
        description:
            'Knowledgeable in front-end web development, including unit testing, API integration, state management and etc.',
        image: (
            <Image
                src="/pictures/mock_ups/front-end.png"
                width={524}
                height={316}
                className="relative bottom-[6rem] right-[5rem] w-full md:bottom-[10rem] lg:bottom-[8rem]"
                alt="front-end prop"
            />
        ),
        bgClassname: 'bg-wallpaper6'
    },
    {
        id: 2,
        name: 'End-to-End Development',
        description:
            'Familiar in frameworks like Laravel, CodeIgniter and tools for dynamic interactions like Jquery and Livewire.',
        image: (
            <Image
                src="/pictures/mock_ups/end-to-end_development.png"
                width={524}
                height={316}
                className="relative -bottom-[1rem] left-[4rem] w-full"
                alt="End-to-end prop"
            />
        ),
        bgClassname: 'bg-wallpaper1'
    },
    {
        id: 3,
        name: 'Mobile First Web Design',
        description:
            ' Adept on creating responsive designs that prioritize smaller screens and adapt seamlessly to larger devices.',
        image: (
            <Image
                src="/pictures/mock_ups/mobile-first-resized.png"
                width={524}
                height={316}
                className="relative -bottom-[0.4rem] right-[2rem] w-10/12 md:w-9/12"
                alt="Mobile First Web Design prop"
            />
        ),
        bgClassname: 'bg-wallpaper7'
    },
    {
        id: 4,
        name: 'Unit Testing',
        description:
            'Familiar with unit testing with Jest and React Testing Library to ensure component reliability. Improved UX with error handling, efficient data fetching, skeleton loaders, and dynamic user states.',
        image: (
            <Image
                src="/pictures/mock_ups/unit-testing.webp"
                width={524}
                height={316}
                className="relative -bottom-[0.4rem] left-[7rem] w-10/12 md:w-9/12"
                alt="Unit Testing Web Design prop"
            />
        ),
        bgClassname: 'bg-wallpaper9'
    },
    {
        id: 5,
        name: 'Relational Database Design',
        description:
            'Adept on relational database design, including creating efficient schemas, normalizing data to minimize redundancy.',
        image: (
            <Image
                src="/pictures/mock_ups/relational-database.png"
                width={524}
                height={316}
                className="relative -bottom-[0.2rem] right-[4.5rem] w-full"
                alt="relational database prop"
            />
        ),
        bgClassname: 'bg-wallpaper2'
    },
    {
        id: 6,
        name: 'Multimedia Editing',
        description:
            ' Well-versed in multimedia editing, including editing photos and videos, enhancing visuals, and creating engaging content for online platforms.',
        image: (
            <Image
                src="/pictures/mock_ups/photoshop.png"
                width={524}
                height={316}
                className="relative -bottom-[0.2rem] left-[4.5rem] w-full"
                alt="multimedia editing prop"
            />
        ),
        bgClassname: 'bg-wallpaper3'
    },
    {
        id: 7,
        name: 'Content Management',
        description:
            'Knowledgeable in using content management systems (CMS) to help publish and update content in a way that’s clear and engaging for the audience.',
        image: (
            <Image
                src="/pictures/mock_ups/content_management.png"
                width={524}
                height={316}
                className="relative -bottom-[1rem] left-[10rem] w-8/12"
                alt="content management prop"
            />
        ),
        bgClassname: 'bg-wallpaper8'
    }
];

export const projects: Project[] = [
    {
        id: 1,
        name: 'Issue Tracker',
        icon: '/pictures/projects/issue_tracker.png',
        color: 'text-red-800',
        description:
            'A bug tracking application for efficient issue tracking and management, improving team collaboration and accelerating project delivery.',
        siteLink: 'https://issue-tracker-bug.vercel.app/home/dashboard',
        demoLink: '#',
        mobileImageSrc: '/pictures/screenshots/issueTracker/1.png',
        desktopImageSrc: '/pictures/screenshots/issueTracker/2.png',
        techUsed: [
            {
                id: 1,
                name: 'Next.js'
            },
            {
                id: 2,
                name: 'Typescript'
            },
            {
                id: 3,
                name: 'Prisma'
            },
            {
                id: 4,
                name: 'RadixUI'
            },
            {
                id: 5,
                name: 'Axios'
            },
            {
                id: 6,
                name: 'Postgresql'
            }
        ]
    },
    {
        id: 2,
        name: 'GHUB',
        icon: '/pictures/projects/ghub.png',
        color: 'text-orange-800',
        description:
            'A game information platform that let’s you sort out games by selecting systems, genres, viewing ratings, and helps you decide which games to play.',
        siteLink: 'https://ghub.fellowdevs.io/',
        demoLink: '#',
        mobileImageSrc: '/pictures/screenshots/ghub/1.png',
        desktopImageSrc: '/pictures/screenshots/ghub/2.png',
        techUsed: [
            {
                id: 1,
                name: 'React'
            },
            {
                id: 2,
                name: 'Typescript'
            },
            {
                id: 3,
                name: 'Tanstack'
            },
            {
                id: 4,
                name: 'TailwindCSS'
            },
            {
                id: 5,
                name: 'ChakraUI'
            }
        ]
    },
    {
        id: 3,
        name: 'Fellow Devs Hub',
        icon: '/pictures/projects/fellowdevs.png',
        color: 'text-teal-800',
        description:
            'An article platform dedicated to empowering aspiring developers, entrepreneurs, and professionals through contents.',
        siteLink: 'https://hub.fellowdevs.io/',
        demoLink: '#',
        mobileImageSrc: '/pictures/screenshots/fellowDevsHub/1.png',
        desktopImageSrc: '/pictures/screenshots/fellowDevsHub/2.png',
        techUsed: [
            {
                id: 1,
                name: 'Wordpress'
            }
        ]
    },
    {
        id: 4,
        name: 'Fellow Devs',
        icon: '/pictures/projects/fellowdevs.png',
        color: 'text-cyan-700',
        description:
            'A social media platform for developers to share their thoughts and engage in trends and discussions.',
        siteLink: 'https://fellowdevs.io/',
        demoLink: 'https://youtu.be/fmh7Ruk6yRU',
        mobileImageSrc: '/pictures/screenshots/fellowDevs/1.png',
        desktopImageSrc: '/pictures/screenshots/fellowDevs/2.png',
        techUsed: [
            {
                id: 1,
                name: 'Laravel'
            },
            {
                id: 2,
                name: 'PHP'
            },
            {
                id: 3,
                name: 'Livewire'
            },
            {
                id: 4,
                name: 'JS'
            },
            {
                id: 5,
                name: 'Jquery'
            },
            {
                id: 6,
                name: 'TailwindCSS'
            },
            {
                id: 7,
                name: 'MySql'
            }
        ]
    },
    {
        id: 5,
        name: 'Orgo Shop',
        icon: '/pictures/projects/orgo_shop.svg',
        color: 'text-amber-700',
        description:
            'An e-commerce platform dedicated to offering a wide range of natural and organic foods, providing customers with a healthy and sustainable shopping experience. ',
        demoLink: 'https://youtu.be/fmh7Ruk6yRU',
        mobileImageSrc: '/pictures/screenshots/OrgoShop/1.png',
        desktopImageSrc: '/pictures/screenshots/OrgoShop/2.png',
        techUsed: [
            {
                id: 1,
                name: 'CodeIgniter'
            },
            {
                id: 2,
                name: 'PHP'
            },
            {
                id: 3,
                name: 'JS'
            },
            {
                id: 4,
                name: 'Jquery'
            },
            {
                id: 5,
                name: 'Stripe'
            }
        ]
    }
];

export const techs: Tech[] = [
    {
        id: 0,
        name: 'React',
        imageSrc: '/svgs/react.svg'
    },
    {
        id: 1,
        name: 'Next.js',
        imageSrc: '/svgs/nextjs.svg'
    },
    {
        id: 2,
        name: 'Laravel',
        imageSrc: '/svgs/laravel.svg'
    },
    {
        id: 3,
        name: 'CodeIgniter',
        imageSrc: '/svgs/code_igniter.svg'
    },
    {
        id: 4,
        name: 'HTML',
        imageSrc: '/svgs/html.svg'
    },
    {
        id: 5,
        name: 'CSS',
        imageSrc: '/svgs/css.svg'
    },
    {
        id: 6,
        name: 'Javascript',
        imageSrc: '/svgs/js.svg'
    },
    {
        id: 7,
        name: 'Typescript',
        imageSrc: '/svgs/typescript.svg'
    },
    {
        id: 8,
        name: 'PHP',
        imageSrc: '/svgs/php.svg'
    },
    {
        id: 9,
        name: 'MySQL',
        imageSrc: '/svgs/mysql.svg'
    },
    {
        id: 10,
        name: 'Tailwind',
        imageSrc: '/svgs/tailwind.svg'
    },
    {
        id: 11,
        name: 'Livewire',
        imageSrc: '/svgs/livewire.svg'
    },
    {
        id: 12,
        name: 'Jquery',
        imageSrc: '/svgs/jquery.svg'
    },
    {
        id: 13,
        name: 'Postgresql',
        imageSrc: '/svgs/postgresql.svg'
    },
    {
        id: 14,
        name: 'Wordpress',
        imageSrc: '/svgs/wordpress.svg'
    }
];

export const tools: Tech[] = [
    { id: 1, name: 'Github', imageSrc: '/svgs/others/github.svg' },
    { id: 2, name: 'Bootstrap', imageSrc: '/svgs/others/bootstrap.svg' },
    { id: 3, name: 'Radix UI', imageSrc: '/svgs/others/radixui.svg' },
    { id: 4, name: 'Shadcn', imageSrc: '/svgs/others/shadcn.svg' },
    { id: 5, name: 'Axios', imageSrc: '/svgs/others/axios.svg' },
    { id: 6, name: 'Postman', imageSrc: '/svgs/others/postman.svg' },
    { id: 7, name: 'Supabase', imageSrc: '/svgs/others/supabase.svg' },
    { id: 8, name: 'Figma', imageSrc: '/svgs/others/figma.svg' },
    { id: 9, name: 'Pixso', imageSrc: '/svgs/others/pixso.svg' },
    {
        id: 10,
        name: 'Tanstack Query',
        imageSrc: 'svgs/others/react-tanstack.svg'
    },
    {
        id: 11,
        name: 'Vercel',
        imageSrc: 'svgs/others/vercel.svg'
    },
    {
        id: 12,
        name: 'Hostinger',
        imageSrc: 'svgs/others/hostinger.svg'
    }
];
