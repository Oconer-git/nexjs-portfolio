import Link from 'next/link';
import { FaCampground, FaUniversity } from 'react-icons/fa';
import Heading from '../_components/Heading';

const AboutMe = () => {
    return (
        <section id="about-me" className="scroll-mt-[10rem] border-y-[0.1rem]">
            <div className="container flex w-full max-w-[120rem] flex-col gap-[1.6rem] px-[3rem] py-[4.8rem] lg:px-[6rem] xl:px-[12rem] 2xl:max-w-[140rem]">
                <About />
                <EducationHistory />
            </div>
        </section>
    );
};

const About = () => {
    return (
        <div className="mx-auto">
            <Heading>About Me</Heading>
            <p className="mt-[0.1rem] text-center text-[1.6rem]/[2.4rem] text-text lg:text-[1.8rem]/[2.6rem]">
                Hey there! Think of me as a coding chameleon. I enjoy coding
                into whatever technology, I’m working with—
                <i>React, Next.js, Laravel, CodeIgniter, </i> or just plain{' '}
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
            logo: (
                <FaUniversity
                    size={30}
                    className="text-blue-900 lg:w-[4.2rem]"
                />
            )
        },
        {
            id: 2,
            category: 'Bootcamp',
            name: 'Village88 Training Program',
            institution: '457 Avenue, Inc. (Village 88 Philippines)',
            link: 'https://village88.com/',
            logo: (
                <FaCampground
                    size={30}
                    className="text-green-900 lg:w-[4.2rem]"
                />
            )
        }
    ];

    return (
        <div className="mx-auto my-[0.8rem] flex w-11/12 flex-row justify-center gap-[1.6rem] sm:gap-[0.2rem]">
            {institutions.map((institution) => (
                <div className="w-[19.6rem] sm:w-[40rem]" key={institution.id}>
                    <div className="flex flex-row items-center gap-[0.6rem]">
                        {institution.logo}
                        <h3 className="inline text-[2rem]/[2.8rem] font-bold text-text lg:text-[2.4rem]/[3.2rem]">
                            {institution.category}
                        </h3>
                    </div>
                    <section className="pl-[3.5rem] lg:pl-[4.8rem]">
                        <h4 className="text-[1.6rem]/[2.4rem] font-[600] text-gray-700 lg:text-[1.8rem]/[text.2.6rem] lg:text-gray-600">
                            {institution.name}
                        </h4>
                        <Link
                            target="_blank"
                            href={institution.link}
                            className="text-[1.4rem]/[2.2rem] text-highlight hover:text-cyan-500 sm:text-[1.6rem]/[2.4rem]"
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
