import { FC } from 'react';
import Button from '../../UI/Button/Button';
import classes from './ProjectCard.module.css';

interface Props {
    imgSrc: string;
    projectName?: string;
    projectDescription?: string;
}

const ProjectCard:FC<Props> = (props) => (
    <div className={classes.ProjectCard}>
        <img src={props.imgSrc} alt="project" />
        <div className={classes.Information}>
            <div className={classes.Description}>
                <h3>{props.projectName}</h3>
                <p>{props.projectDescription}</p>
            </div>
            <div className={classes.Actions}>
                <Button 
                btnType={'Primary'}>Repository</Button>
                <Button
                btnType={'Secondary'}>Go to site</Button>
            </div>
        </div>
    </div>
)

export default ProjectCard;