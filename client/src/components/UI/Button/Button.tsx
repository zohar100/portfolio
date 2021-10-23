import { FC } from 'react';
import classes from './Button.module.css';

interface Props {
    clicked?: any;
    children?: string;
    btnType: string;
}

const Button:FC<Props> = (props) => (
    <button 
    onClick={props.clicked}
    className={[classes.Button, classes[props.btnType]].join(' ')}>
        {props.children}
    </button>
);

export default Button;