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
    title: 'Oconer Portfolio',
    description:
        'Donell Oconer – A fresh graduate with a solid foundation of web development fundamentals, seeking to apply skills and contribute to a development team. Aspiring to become a seasoned developer by being a team player, collaborating with more experienced professionals, handling both large and small-scale projects, solving problems, and continuously learning and adapting to the ever-changing technology in the corporate world.',
    icons: {
        icon: '/favicon.ico'
    },
    openGraph: {
        title: 'Oconer Portfolio',
        type: 'website',
        locale: 'en_US',
        siteName: 'Oconer Dev',
        url: 'https://portfolio-oconer.vercel.app/',
        images: {
            url: '/screenshots/meta/hero.png',
            width: 1200,
            height: 630,
            alt: 'Oconer Portfolio'
        },
        description:
            'Donell Oconer – A fresh graduate with a solid foundation of web development fundamentals, seeking to apply skills and contribute to a development team. Aspiring to become a seasoned developer by being a team player, collaborating with more experienced professionals, handling both large and small-scale projects, solving problems, and continuously learning and adapting to the ever-changing technology in the corporate world.'
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
