import { FC } from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Hoc from '../../../hoc/hoc/Hoc';

import classes from './SideDrawer.module.css';

interface Props {
    open: boolean;
    closed: any;

}

const sideDrawer:FC<Props> = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return(
        <Hoc>
        <div className={classes.DesktopOnly}>
            <Backdrop show={props.open} clicked={props.closed}/>
        </div>
        <div className={attachedClasses.join(' ')} onClick={props.closed}>
            <NavigationItems 
            clicked={props.closed}/>
        </div>
        </Hoc>
    );
}

export default sideDrawer;