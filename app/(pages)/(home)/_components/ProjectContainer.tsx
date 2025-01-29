import { Badge } from '@/app/_components/Badge';
import { Project } from '@/app/data/utilts';
import Image from 'next/image';
import { FaExternalLinkAlt, FaPlay } from 'react-icons/fa';
import ProjectLink from './ProjectLink';

const ProjectContainer = ({ project }: { project: Project }) => {
    return (
        <div className="my-[3rem]">
            {/* header title and logo */}
            <ProjectHeader project={project} />
            {/* description */}
            <p className="ml-[2.6rem] text-[1.4rem]/[1.6rem] text-text sm:text-[1.4rem]/[1.8rem] md:ml-[3.5rem] md:text-[1.5rem]/[1.8rem] lg:text-[1.6rem]/[2rem]">
                {project.description}
            </p>
            <div className="ml-[2.6rem] mt-[0.5rem] flex w-1/2 flex-row gap-[0.4rem] md:ml-[3.5rem]">
                {project.techUsed?.map((tech) => (
                    <Badge key={tech.id}>{tech.name}</Badge>
                ))}
            </div>
            {/* pictures */}
            <ScreenshotsContainer project={project} />
        </div>
    );
};

const ProjectHeader = ({ project }: { project: Project }) => {
    return (
        <div className="mb-[1rem] flex flex-row gap-[0.4rem]">
            <Image
                src={project.icon}
                className="h-[2.2rem] w-[2.2rem] sm:h-[3rem] sm:w-[3rem] md:h-[3.2rem] md:w-[3.2rem]"
                height={400}
                width={400}
                alt={`${project.name} logo`}
            />
            <div className="flex flex-row gap-[0.4rem]">
                <h2
                    className={`${project.color} mr-[0.4rem] text-[2.3rem]/[2.4rem] font-[500] sm:mr-[1rem] sm:text-[2rem]/[2.6rem] md:text-[2.2rem]/[2.8rem] lg:text-[2.2rem]/[3rem]`}
                >
                    {project.name}
                </h2>
                <ProjectLinks project={project} />
            </div>
        </div>
    );
};

const ProjectLinks = ({ project }: { project: Project }) => {
    if (!project.siteLink)
        return (
            <ProjectLink href={project.demoLink}>
                Demo
                <FaPlay className="text-red-600" />
            </ProjectLink>
        );
    return (
        <>
            <ProjectLink href={project.siteLink}>
                Site
                <FaExternalLinkAlt className="text-blue-700" />
            </ProjectLink>
            <ProjectLink href={project.demoLink}>
                Demo
                <FaPlay className="text-red-600" />
            </ProjectLink>
        </>
    );
};

const ScreenshotsContainer = ({ project }: { project: Project }) => {
    return (
        <div className="mt-[1rem] flex flex-row">
            <Image
                className="w-4/12"
                src={project.mobileImageSrc}
                alt={`${project.name} mobile screenshot`}
                width={800}
                height={1200}
            />
            <Image
                className="w-8/12"
                src={project.desktopImageSrc}
                alt={`${project.name} desktop screenshot`}
                width={800}
                height={1200}
            />
        </div>
    );
};

export default ProjectContainer;
