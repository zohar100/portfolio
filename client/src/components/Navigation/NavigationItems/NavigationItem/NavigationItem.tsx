import { FC } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import classes from './NavigationItem.module.css';

interface Props {
    link: string;
    children: string;
}

const navigationitem:FC<Props> = (props) => {
    return(
        <li className={classes.NavigationItem}>
            <Link
            to={'#'+props.link}
            smooth>
                {props.children}
            </Link>
        </li>
    )
}

export default navigationitem;