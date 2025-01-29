import { projects } from '@/app/data/utilts';
import Image from 'next/image';
import Heading from '../_components/Heading';
import ProjectContainer from '../_components/ProjectContainer';

const Projects = () => {
    return (
        <section className="scroll-mt-[10rem] bg-white" id="projects">
            <Image
                src="/pictures/side_gradient.webp"
                width={500}
                height={145}
                className="absolute right-0 z-20 w-[90rem] opacity-80"
                alt="tailwind effect"
            />
            <div className="container relative z-40 w-full max-w-[120rem] px-[3rem] py-[4.8rem] lg:px-[6rem]">
                <div className="mx-auto w-11/12">
                    <Heading>PROJECTS</Heading>
                    <p className="text-center text-[1.4rem]/[2.4rem] text-highlight sm:text-[1.6rem]/[2.4rem] lg:text-[1.8rem]/[2.6rem]">
                        Here are some projects I&apos;ve worked on that showcase
                        my skills. Each one gave me the opportunity to learn new
                        tech.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-[3rem] lg:grid-cols-2">
                    {projects?.map((project) => (
                        <ProjectContainer key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
