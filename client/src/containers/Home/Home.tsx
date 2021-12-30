import { FC } from 'react';
import classes from './Home.module.css';
import Button from '../../components/UI/Button/Button';
import ImageLink from '../../components/ImageLink/ImageLink';
import {LinkedinIcon, GithubIcon, ResumeIcon} from '../../components/Svgs/Svgs';

import ProfileMain from '../../assets/images/profile-main.png';

import Typewriter from 'typewriter-effect';

const Home:FC = () => {

return (
    <section id="home" className={classes.Home}>
        <div className={classes.TextArea}>
            <h1>I Am Zohar Banai,</h1>
            <h2>
                <Typewriter
                    options={{
                    strings: [' Web Developer', ' Full Stack Developer'],
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
                <Button 
                hashLink={true}
                to={'contact'}
                btnType={'Special'}>Let's Talk</Button>
            </div>
            <div className={classes.Links}>
                <ImageLink 
                target={'blank'}
                svg={()=><LinkedinIcon/>}
                href="https://www.linkedin.com/in/zohar-banai-377085201/">
                Linkedin </ImageLink>
                <ImageLink 
                target={'blank'}
                svg={()=><GithubIcon/>}
                href="https://github.com/zohar100">
                Github </ImageLink>
                <ImageLink 
                target={'blank'}
                svg={() => <ResumeIcon/>}
                href="https://github.com/">
                Resume </ImageLink>
            </div>
            <div className={classes.AboutMeButton}>
                <Button 
                btnType={'Primary'}
                hashLink={true}
                to={'about'}
                >About Me</Button>
            </div>
        </div>
    </section>
)
};

export default Home;