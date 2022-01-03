import { FC} from 'react';
import classes from './About.module.css';
import { PersonIcon, AwardsIcon, 
        SkillsIcon, MySqlIcon, MongodbIcon,
        JavaScriptIcon, PhpIcon, NodeIcon, ReactIcon, 
        TypeScriptIcon, HtmlIcon, CssIcon } from '../../components/Svgs/Svgs';

// import ProfileSecond from '../../assets/images/profile-second.png';

const About:FC = () => {
    return(
    <section id="about" className={classes.About}>
        <div className={classes.Headers}>
            <h1>About me</h1>
            <span>Who Am I ? Know me better. </span>
        </div>
       <div className={classes.Skills}>
           <div className={classes.SkillSection} data-aos="fade-right">
               <div>
                    <h2>Who Am I</h2>
                    <PersonIcon/>
                </div>               
                <p>
                My name is Zohar Banai and I am 21 Years Old. 
                I am looking for my first job as a web developer, 
                I have strong passion for the programming world, and for books :).

                <br/> <br/>
                I have loved computers and technology ever since I can remember myself. 
                The first time I got exposed to the Web Development world was at the age of 14 when I started to build landing pages with HTML and CSS as a hobby. 
                Two years ago, I started to dig deeper and learn programming languages and technologies.
                </p>
           </div>
           <div className={classes.Line} data-aos="fade-up"></div>
           <div className={classes.SkillSection} data-aos="fade-right">
               <div>
                    <h2>Awards</h2>
                    <AwardsIcon/>
               </div>
                <p>
                In the last year and a half, I have used my free time to develop myself and learn. I took over 6 courses in programming, web development and graphic design.
                <br/> <br/>
                In the past year I have built more than 10 projects as part of my learning process.
                <br/> <br/>
                Recently I have participated in a developing contest of #kula_like community, I built a task management app in order to improve the community management and gain the community activity.
                <br/> <br/>
                I worked as a part of a team that includes 8 developers, 2 UI{'&'}UX designers and 4 QA testers. 
                My role in the project was a full-stack programmer and I was responsible for user authentication on both the client and server side.
                </p>
           </div>
           <div className={classes.Line} data-aos="fade-up"></div>
           <div className={classes.SkillSection} data-aos="fade-right">
               <div>
                    <h2>My Skills</h2>
                    <SkillsIcon/>
               </div>
                <p>
                I am dedicated and hardworking, 
                I have studied on my own without an orderly framework of an educational institution and I have been able to set myself a strict agenda of studies and work on projects.
                <br/> <br/>
                I am well-versed in the following programming languages and technologies: JavaScript, TypeScript PHP, Node.js, HTML, CSS, React.js, Redux, Git, UI/UX, Algorithms {'&'} Data structures.
                </p>
           </div>
       </div>
       {/* <div className={classes.Sentences}>
           <img src={ProfileSecond} alt='second-profile'/>
            <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant id vestibulum, tellus mi, 
                    cursus sit magna vel. Pellentesque est at vestibulum vitae  dolor rutrum. Metus dolor ultrices arcu laoreet amet mauris.
                </p>
            </div>
       </div> */}
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
)};

export default About;