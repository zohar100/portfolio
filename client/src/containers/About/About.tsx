import { FC } from 'react';
import classes from './About.module.css';
import { PersonIcon, AwardsIcon, 
        SkillsIcon, MySqlIcon, MongodbIcon,
        JavaScriptIcon, PhpIcon, NodeIcon, ReactIcon, 
        TypeScriptIcon, HtmlIcon, CssIcon } from '../../components/Svgs/Svgs';

import ProfileSecond from '../../assets/images/profile-second.png';

const About:FC = () => (
    <section id="about" className={classes.About}>
        <div className={classes.Headers}>
            <h1>About me</h1>
            <span>Who Am I? Know mr better. </span>
        </div>
       <div className={classes.Skills}>
           <div className={classes.SkillSection}>
               <div>
                    <h2>Who Am I</h2>
                    <PersonIcon/>
                </div>               
                <p>
                My name is Zohar Banai, I am 21 Years Old.
                I looking for my first job as a web developer,
                I have stong passion to the world of progrmming, and for books :).
                <br/> <br/>
                Ever since I can remember I have loved computers and technology,
                the first time I was exposed to the world of Web Development was at the age of 14 I started to built landing pages with HTML and CSS as a hobby.
                Tow years ago I started to get deeper and learn programming languages and technologies.

                </p>
           </div>
           <div className={classes.Line}></div>
           <div className={classes.SkillSection}>
               <div>
                    <h2>Awards</h2>
                    <AwardsIcon/>
               </div>
                <p>
                In the last year and half I took advantage of the free time I had to learn and develop and took over 6 courses in programming, web development and graphic design.
                <br/> <br/>
                In the past year I have built 9 projects as part of my learning process.
                <br/> <br/>
                Recently  I volunteered to built task management platform app in order to help #kula_like community their field to manage and gain the community activity.
                <br/> <br/>
                I worked with team with 8 developers, 2 UI{'&'}UX designers and 4 QA testers.
                my role in the project was a fullstack programmer. In this capacity, I was responsible for user authentication on both the client and server side.
                </p>
           </div>
           <div className={classes.Line}></div>
           <div className={classes.SkillSection}>
               <div>
                    <h2>My Skills</h2>
                    <SkillsIcon/>
               </div>
                <p>
                I am dedicated and hardworking I have studied on my own without an orderly framework of an educational institution and I have been able to set myself a strict agenda of studies and work on projects.
                <br/> <br/>
                I am well-versed in the following programming languages and technologies: JavaScript, TypeScript PHP, Node.js, HTML, CSS, React.js, Redux, Git, UI/UX, Algorithms {'&'} Data structures.
                </p>
           </div>
       </div>
       <div className={classes.Sentences}>
           <img src={ProfileSecond} alt='second-profile'/>
            <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant id vestibulum, tellus mi, 
                    cursus sit magna vel. Pellentesque est at vestibulum vitae  dolor rutrum. Metus dolor ultrices arcu laoreet amet mauris.
                </p>
            </div>
       </div>
       <div className={classes.Technologies}>
            <MySqlIcon/>
            <MongodbIcon/>
            <JavaScriptIcon/>
            <PhpIcon/>
            <NodeIcon/>
            <ReactIcon/>
            <TypeScriptIcon/>
            <HtmlIcon/>
            <CssIcon/>
       </div>
    </section>
);

export default About;