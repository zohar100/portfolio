import { FC, useState } from 'react';
import * as React from "react";
import Hoc from '../hoc/Hoc';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import classes from './Layout.module.css';

interface Props {
    children: React.ReactNode;
}

const Layout:FC<Props> = (props) => {
    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const sideDrawerToggleHandler = () => {
      setShowSideDrawer(!showSideDrawer)
    }

    return (
        <Hoc>
            <Toolbar clicked={sideDrawerToggleHandler}/>
            <SideDrawer open={showSideDrawer} closed={() => setShowSideDrawer(false)}/>
            <main className={classes.Layout}>
                {props.children}
            </main>
        </Hoc>
    )
}

export default Layout;