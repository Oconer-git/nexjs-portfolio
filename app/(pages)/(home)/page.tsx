import { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';
import AboutMe from './_sections/AboutMe';
import GetInTouch from './_sections/GetInTouch';
import Hero from './_sections/Hero';
import Projects from './_sections/Projects';
import TechStack from './_sections/TechStack';
import WhatIBring from './_sections/WhatIBring';

const Home = () => {
    return (
        <>
            <Hero />
            <AboutMe />
            <TechStack />
            <Projects />
            <WhatIBring />
            <GetInTouch />
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
            />
        </>
    );
};

export const metadata: Metadata = {
    metadataBase: new URL('https://portfolio-oconer.fellowdevs.io/'),
    title: 'Oconer Portfolio',
    description:
        "Donell Oconer – Aspiring web developer. Crafting modern, high-performance web applications with cutting-edge technologies. Let's build something amazing!",
    icons: {
        icon: '/favicon.ico'
    },
    openGraph: {
        title: 'Oconer Portfolio',
        type: 'website',
        locale: 'en_US',
        siteName: 'Oconer Dev',
        url: 'https://portfolio-oconer.fellowdevs.io/',
        images: {
            url: '/screenshots/meta/hero.png',
            width: 1200,
            height: 630,
            alt: 'Oconer Portfolio'
        },
        description:
            "Donell Oconer – Aspiring web developer. Crafting modern, high-performance web applications with cutting-edge technologies. Let's build something amazing!"
    }
};

export default Home;
