import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationitems = (props: any) => {
    return(
        <ul className={classes.NavigationItems} onClick={props.clicked}>
            <NavigationItem link='home'>
                Home
            </NavigationItem>
            <NavigationItem link='about'>
                About
            </NavigationItem>
            <NavigationItem link='projects'>
                Projects
            </NavigationItem>
            <NavigationItem link='contact'>
                Contact
            </NavigationItem>
        </ul>
    )
}

export default navigationitems;