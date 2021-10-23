import { FC } from 'react';

import classes from './DrawerToggle.module.css';

interface Props {
    clicked: any;

}

const drawerToggle:FC<Props> = (props) => (
    <div onClick={props.clicked} className={classes.DrawerToggle}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default drawerToggle;