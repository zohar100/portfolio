import { FC } from 'react';
import classes from './Projects.module.css';
import { useProjects } from '../../hooks/useProjects';
import ProjectCards from '../../components/ProjectCards/ProjectCards/ProjectCards';

const Projects:FC = () => {
    const [projects, status] = useProjects();

    let projectsOrLoading:any = 'Loading...';
    if(status !== 'loading' && status !== 'error') {
        projectsOrLoading = (<ProjectCards projects={projects}/>);
    }

    return(
        <section id="projects" className={classes.Projects}>
            <div className={classes.Headers}>
                <h1>Projects</h1>
                <h2>Here Are Some Of My Projects</h2>
                <span>You can find all of them in my <a href="https://github.com/">Github profile </a></span>
            </div>
            <div className={classes.ProjectsCards}>
                {
                    projectsOrLoading
                }
            </div>
        </section>
    )
};

export default Projects;