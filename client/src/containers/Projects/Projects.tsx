import { FC } from 'react';
import classes from './Projects.module.css';
import ProjectCards from '../../components/ProjectCards/ProjectCards/ProjectCards';

const projects = [
    {
        id: 1,
        imgSrc: 'https://github.com/zohar100/feedback/blob/main/uploads/feed-page.png?raw=true',
        name: 'Feedback',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc mi venenatis, quisque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc mi venenatis, quisque.'
    },
    {
        id: 2,
        imgSrc: 'https://github.com/zohar100/feedback/blob/main/uploads/feed-page.png?raw=true',
        name: 'TechZone',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc mi venenatis, quisque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc mi venenatis, quisque.'
    },
    {
        id: 3,
        imgSrc: 'https://github.com/zohar100/feedback/blob/main/uploads/feed-page.png?raw=true',
        name: 'Street Shop',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc mi venenatis, quisque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc mi venenatis, quisque.'
    },
    {
        id: 4,
        imgSrc: 'https://github.com/zohar100/feedback/blob/main/uploads/feed-page.png?raw=true',
        name: 'Customer Manager',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc mi venenatis, quisque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc mi venenatis, quisque.'
    }
];

const Projects:FC = () => (
    <section id="projects" className={classes.Projects}>
        <div className={classes.Headers}>
            <h1>Projects</h1>
            <h2>Here Are Some Of My Projects</h2>
            <span>You can find all of them in my <a href="https://github.com/">Github profile </a></span>
        </div>
        <div className={classes.ProjectsCards}>
            <ProjectCards projects={projects}/>
        </div>
    </section>
);

export default Projects;