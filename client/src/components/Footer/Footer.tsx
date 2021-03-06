import { FC } from 'react';
import classes from './Footer.module.css';
import Logo from '../Logo/Logo';
import ImageLink from '../ImageLink/ImageLink';
import {LinkedinIcon, ResumeIcon, GithubIcon} from '../Svgs/Svgs';

const Footer:FC = () => (
    <div className={classes.Footer}>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <div className={classes.Links}>
            <ImageLink 
            target={'blank'}
            svg={()=><LinkedinIcon color="white"/>}
            href="https://www.linkedin.com/in/zohar-banai-377085201/"/>
            <ImageLink 
            target={'blank'}
            svg={()=><GithubIcon color="white"/>}
            href="https://github.com/zohar100"/>
            <ImageLink 
            download
            target={'blank'}
            svg={()=><ResumeIcon color="white"/>}
            href={process.env.PUBLIC_URL + '/files/zohar-banai-resume.pdf'}/>
        </div>
    </div>
);

export default Footer;