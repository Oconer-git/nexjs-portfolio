import { projects } from '@/app/data/utilts';
import Heading from '../_components/Heading';
import ProjectContainer from '../_components/ProjectContainer';

const Projects = () => {
    return (
        <section className="bg-white">
            <div className="container px-[3rem] py-[4.8rem]">
                <div className="mx-auto w-11/12">
                    <Heading>PROJECTS</Heading>
                    <p className="text-center text-[1.4rem] leading-[2rem] text-highlight">
                        Here are some projects I&apos;ve worked on that showcase
                        my skills. Each one gave me the opportunity to learn new
                        tech.
                    </p>
                </div>
                <div className="mt-[2rem]">
                    {projects?.map((project) => (
                        <ProjectContainer key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
