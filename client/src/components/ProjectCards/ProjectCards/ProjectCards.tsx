import { FC } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';

interface Props {
    projects: any;
}

const ProjectCards:FC<Props> = (props) => {
    return (
        props.projects.map((project: any) => (
            <ProjectCard
            key={project._id}
            projectName={project.name}
            technologies={project.technologies}
            projectDescription={project.description}
            />
        ))
    )
};

export default ProjectCards;