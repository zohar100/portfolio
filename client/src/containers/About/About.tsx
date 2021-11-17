import { FC } from 'react';
import classes from './About.module.css';
import { LearningIcon, DevelopIcon, 
        SelfMotivateIcon, MySqlIcon, MongodbIcon,
        JavaScriptIcon, PhpIcon, NodeIcon, ReactIcon, 
        TypeScriptIcon, HtmlIcon, CssIcon } from '../../components/Svgs/Svgs';

import ProfileSecond from '../../assets/images/profile-second.png';

const About:FC = () => (
    <section id="about" className={classes.About}>
        <h1>What sets me apart ?</h1>
       <div className={classes.Skills}>
           <div>
                <LearningIcon/>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Habitant id vestibulum, tellus mi, cursus sit magna vel. Pellentesque 
                est at vestibulum vitae  dolor rutrum. Metus dolor ultrices arcu laoreet amet mauris. 
                </p>
           </div>
           <div>
                <DevelopIcon/>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Habitant id vestibulum, tellus mi, cursus sit magna vel. Pellentesque 
                est at vestibulum vitae  dolor rutrum. Metus dolor ultrices arcu laoreet amet mauris. 
                </p>
           </div>
           <div>
                <SelfMotivateIcon/>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Habitant id vestibulum, tellus mi, cursus sit magna vel. Pellentesque 
                est at vestibulum vitae  dolor rutrum. Metus dolor ultrices arcu laoreet amet mauris. 
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