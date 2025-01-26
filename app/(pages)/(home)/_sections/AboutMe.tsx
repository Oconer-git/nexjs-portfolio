import Link from 'next/link';
import { FaCampground, FaUniversity } from 'react-icons/fa';
import Heading from '../_components/Heading';

const AboutMe = () => {
    return (
        <section className="border-y-[0.1rem] from-gray-50/50">
            <div className="container flex flex-col gap-[1.6rem] px-[5rem] py-[4.8rem]">
                <About />
                <EducationHistory />
            </div>
        </section>
    );
};

const About = () => {
    return (
        <div className="mx-auto w-11/12">
            <Heading>About Me</Heading>
            <p className="mt-[0.1rem] text-center text-[1.6rem] leading-[2.4rem] text-text">
                Hey there! Think of me as a coding chameleon. I enjoy coding
                into whatever technology, I’m working with—
                <i>Laravel, CodeIgniter, React, Next.js</i> or just plain{' '}
                <i>PHP</i>. I’m constantly evolving, picking up new colors or
                (skills) to stay in the game ;)
            </p>
        </div>
    );
};

const EducationHistory = () => {
    const institutions = [
        {
            id: 1,
            category: 'Education',
            name: 'BS in Information Technology',
            institution: 'Don Mariano Marcos Memorial State University',
            link: 'https://www.dmmmsu.edu.ph/',
            logo: <FaUniversity size={30} className="text-blue-900" />
        },
        {
            id: 2,
            category: 'Bootcamp',
            name: 'Village88 Training Program',
            institution: '457 Avenue, Inc. (Village 88 Philippines)',
            link: 'https://village88.com/',
            logo: <FaCampground size={30} className="text-green-900" />
        }
    ];

    return (
        <div className="mx-auto my-[0.8rem] flex w-full flex-row justify-center gap-[1.6rem]">
            {institutions.map((institution) => (
                <div className="w-[19.6rem]" key={institution.id}>
                    <div className="flex flex-row items-center gap-[0.6rem]">
                        {institution.logo}
                        <h3 className="inline text-[2rem] font-bold leading-[2.8rem] text-text">
                            {institution.category}
                        </h3>
                    </div>
                    <section className="pl-[3.5rem]">
                        <h4 className="text-[1.6rem] font-[600] leading-[2.4rem] text-gray-700">
                            {institution.name}
                        </h4>
                        <Link
                            target="_blank"
                            href={institution.link}
                            className="text-[1.6rem] leading-[2.4rem] text-highlight hover:text-cyan-500"
                        >
                            {institution.institution}
                        </Link>
                    </section>
                </div>
            ))}
        </div>
    );
};
export default AboutMe;
