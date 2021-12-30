import { FC } from 'react';

import classes from './Modal.module.css';

interface Props {
    show: boolean;
    clicked?: any;
}

const Modal:FC<Props> = (props) => (
    props.show ? 
    <div onClick={props.clicked} className={classes.Modal}>
        {props.children}
    </div>  
    : null
);

export default Modal;