import { FC } from 'react';

import classes from './Backdrop.module.css';

interface Props {
    show: boolean;
    clicked?: any;
    type?: string;
}

const Backdrop:FC<Props> = (props) => (
    props.show ? <div onClick={props.clicked} className={props.type === 'secondary' ? classes.BackdropSecondary : classes.Backdrop}></div>  : null
);

export default Backdrop;