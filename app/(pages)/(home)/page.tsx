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
        </>
    );
};

// export const metadata: Metadata = {
// 	title: "Sears Carpet & Air Conduct Cleaning",
// 	description:
// 		"Choose Sears Carpet & Air Duct Cleaning for professional cleaning services tailored to improve your home’s cleanliness, health, and comfort. Our carpet cleaning, tile and grout cleaning, air duct cleaning, and upholstery cleaning services are trusted for their quality and effectiveness. Contact us today to schedule your cleaning appointment!",
// 	icons: {
// 		icon: "/icon.ico",
// 	},
// 	openGraph: {
// 		title: "Sears Carpet & Air Conduct Cleaning",
// 		type: "website",
// 		locale: "en_US",
// 		siteName: "Sears Carpet & Air Conduct Cleaning",
// 		url: "https://www.quotes.searscarpetcleaningli.com",
// 		images: {
// 			url: "/images/hero.png",
// 			width: 1200,
// 			height: 630,
// 			alt: "Sears Carpet & Air Conduct Cleaning page",
// 		},
// 		description:
// 			"Choose Sears Carpet & Air Duct Cleaning for professional cleaning services tailored to improve your home’s cleanliness, health, and comfort. Our carpet cleaning, tile and grout cleaning, air duct cleaning, and upholstery cleaning services are trusted for their quality and effectiveness. Contact us today to schedule your cleaning appointment!",
// 	},
// };

export default Home;
