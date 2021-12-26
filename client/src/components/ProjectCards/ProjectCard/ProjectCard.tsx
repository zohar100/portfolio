import { FC } from 'react';
import Button from '../../UI/Button/Button';
import classes from './ProjectCard.module.css';
import {MySqlIcon, MongodbIcon,
    JavaScriptIcon, PhpIcon, NodeIcon, ReactIcon, 
    TypeScriptIcon, HtmlIcon, CssIcon, BootstrapIcon, 
    FirebaseIcon, JqueryIcon, } from '../../Svgs/Svgs';

interface Props {
    projectName?: string;
    projectDescription?: string;
    technologies: Array<string>;
}

const techNameToIcon:any = {
    nodejs: <NodeIcon/>,
    typescript: <TypeScriptIcon/>,
    javascript: <JavaScriptIcon/>,
    php: <PhpIcon/>,
    react: <ReactIcon/>,
    html: <HtmlIcon/>,
    css: <CssIcon/>,
    mysql: <MySqlIcon/>,
    mongodb: <MongodbIcon/>,
    bootstrap: <BootstrapIcon/>,
    jquery: <JqueryIcon/>,
    firebase: <FirebaseIcon/>,
}


const ProjectCard:FC<Props> = (props) => (
    <div className={classes.ProjectCard} data-aos="fade-up">
        <h3 className={classes.ProjectName}>{props.projectName}</h3>
        <div className={classes.Technologies}>
            {props.technologies.map((tech:any) => techNameToIcon[tech])}
        </div>
        <div className={classes.Description}>
            <p>
                {props.projectDescription}
            </p>
        </div>
        <div className={classes.Actions}>
            <Button 
            btnType={'Primary'}>Repository</Button>
            <Button
            btnType={'Secondary'}>Go to site</Button>
        </div>
    </div>
)

export default ProjectCard;