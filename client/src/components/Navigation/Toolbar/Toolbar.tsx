import { FC } from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import NavigationItems from '../NavigationItems/NavigationItems';

interface Props {
    clicked: any;
}

const toolbar:FC<Props> = (props) => (
    <header className={classes.Toolbar}>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <DrawerToggle clicked={props.clicked}/> 
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
)

export default toolbar