import { FC } from 'react';

import classes from './Backdrop.module.css';

interface Props {
    show: boolean;
    clicked: any;
}

const Backdrop:FC<Props> = (props) => (
    props.show ? <div onClick={props.clicked} className={classes.Backdrop}></div>  : null
);

export default Backdrop;