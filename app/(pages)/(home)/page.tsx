import { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';
import AboutMe from './_sections/AboutMe';
import FAQ from './_sections/FAQ';
import GetInTouch from './_sections/GetInTouch';
import Hero from './_sections/Hero';
import Projects from './_sections/Projects';
import TechStack from './_sections/TechStack';
import WhatIBring from './_sections/WhatIBring';

export const metadata: Metadata = {
    metadataBase: new URL('https://portfolio-oconer.vercel.app/'),
    title: 'Oconer Designs',
    description:
        'Donell Oconer – A fresh graduate with a solid foundation of web development fundamentals, seeking to apply skills and contribute to a development team. Aspiring to become a seasoned developer by being a team player, collaborating with more experienced professionals, handling both large and small-scale projects, solving problems, and continuously learning and adapting to the ever-changing technology in the corporate world.',
    icons: {
        icon: '/favicon.ico'
    },
    openGraph: {
        title: 'Hire a front-end developer',
        type: 'website',
        locale: 'en_US',
        siteName: 'Oconer Designs',
        url: 'https://portfolio-oconer.vercel.app/',
        images: [
            {
                url: 'https://portfolio-oconer.vercel.app/pictures/screenshots/meta/hire-me.png',
                width: 1200,
                height: 630,
                alt: 'Oconer Designs'
            }
        ],
        description:
            'Hire a developer with expertise in React, Next.js, PHP, and modern front-end frameworks. Skilled in building scalable web applications, state management, API integrations, and performance optimization. Proven track record in e-commerce, issue tracking, and social media platforms. Open to opportunities—visit my portfolio: portfolio-oconer.vercel.app.'
    }
};

const Home = () => {
    return (
        <>
            <Hero />
            <AboutMe />
            <TechStack />
            <Projects />
            <WhatIBring />
            <GetInTouch />
            <FAQ />
            <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                    className: 'text-[1.4rem] rounded-[0.3rem]',
                    duration: 5000,
                    removeDelay: 1000,
                    success: {
                        duration: 3000,
                        iconTheme: {
                            primary: 'green',
                            secondary: 'black'
                        }
                    }
                }}
            />{' '}
        </>
    );
};

export default Home;
