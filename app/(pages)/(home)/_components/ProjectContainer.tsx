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
            <p className="ml-[2.6rem] text-[1.2rem] leading-[1.5rem] text-text">
                {project.description}
            </p>
            {/* pictures */}
            <ScreenshotsContainer project={project} />
        </div>
    );
};

const ProjectHeader = ({ project }: { project: Project }) => {
    return (
        <div className="flex flex-row items-center gap-[0.4rem]">
            <Image
                src={project.icon}
                className="h-[2.2rem] w-[2.2rem]"
                height={400}
                width={400}
                alt={`${project.name} logo`}
            />
            <h2
                className={`${project.color} mr-[0.4rem] text-[1.6rem] font-[500] leading-[2.8rem]`}
            >
                {project.name}
            </h2>
            <ProjectLinks project={project} />
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
