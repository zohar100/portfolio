import { FC } from 'react';
// import { useNavigate } from 'react-router-dom';
import classes from './Home.module.css';
import Button from '../../components/UI/Button/Button';
import ImageLink from '../../components/ImageLink/ImageLink';
import {LinkedinIcon, GithubIcon, ResumeIcon} from '../../components/Svgs/Svgs';

import ProfileMain from '../../assets/images/profile-main.png';

import Typewriter from 'typewriter-effect';

const Home:FC = () => {
    // const navigate = useNavigate();

    // const navigateTo = (to: string) => {
    //     useNavigate('#' + to);
    // }

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
                btnType={'Special'}>Let's Talk</Button>
            </div>
            <div className={classes.Links}>
                <ImageLink 
                svg={()=><LinkedinIcon/>}
                href="https://www.linkedin.com/in/zohar-banai-377085201/">
                Linkedin </ImageLink>
                <ImageLink 
                svg={()=><GithubIcon/>}
                href="https://github.com/zohar100">
                Github </ImageLink>
                <ImageLink 
                svg={() => <ResumeIcon/>}
                href="https://github.com/">
                Resume </ImageLink>
            </div>
            <div className={classes.AboutMeButton}>
                <Button 
                btnType={'Primary'}>About Me</Button>
            </div>
        </div>
    </section>
)
};

export default Home;