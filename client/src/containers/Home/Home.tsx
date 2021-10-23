import { FC } from 'react';
import classes from './Home.module.css';
import Button from '../../components/UI/Button/Button';
import ImageLink from '../../components/ImageLink/ImageLink';

import ProfileMain from '../../assets/images/profile-main.png';
import LinkedinIcon from '../../assets/images/linkedin-icon.svg';
import GithubIcon from '../../assets/images/github-icon.svg';
import ResumeIcon from '../../assets/images/resume-icon.svg';

import Typewriter from 'typewriter-effect';

const Home:FC = () => (
    <div id="home" className={classes.Home}>
        <div className={classes.TextArea}>
            <h1>I Am Zohar Banai,</h1>
            <h2>
                <Typewriter
                    options={{
                    strings: ['A Web Developer', 'A Full Stack Developer'],
                    autoStart: true,
                    loop: true,
                }}
                />
            </h2>
            <span>I am searching for my first job as web developer</span>
        </div>
        <div className={classes.LinksAndProfile}>
            <div className={classes.ImageDiv}>
                <img src={ProfileMain} alt="circle" className={classes.MainImage}/>
                <Button btnType={'Special'}>Let's Talk</Button>
            </div>
            <div className={classes.Links}>
                <ImageLink 
                imgSrc={LinkedinIcon}
                href="https://www.linkedin.com/in/zohar-banai-377085201/">
                Linkedin </ImageLink>
                <ImageLink 
                imgSrc={GithubIcon}
                href="https://github.com/zohar100">
                Github </ImageLink>
                <ImageLink 
                imgSrc={ResumeIcon}
                href="https://github.com/">
                Resume </ImageLink>
            </div>
            <div className={classes.AboutMeButton}>
                <Button btnType={'Primary'}>About Me</Button>
            </div>
        </div>
    </div>
);

export default Home;