import { FC } from 'react';
import classes from './Button.module.css';
import { HashLink as Link } from 'react-router-hash-link';

interface Props {
    clicked?: any;
    children?: string;
    btnType: string;
    hashLink?: boolean;
    to?: string;
    link?: boolean;
}


const Button:FC<Props> = (props) => {
    let button = (
        <button 
        onClick={props.clicked}
        className={[classes.Button, classes[props.btnType]].join(' ')}>
            {props.children}
        </button> 
    )

    if(props.hashLink) {
        button = (<button 
        onClick={props.clicked}
        className={[classes.Button, classes[props.btnType]].join(' ')}>
            <Link 
            to={'#'+props.to}
            smooth>
                {props.children}
            </Link> 
        </button> )
    }
    else if(props.link) {
        button = (
            <button 
            onClick={props.clicked}
            className={[classes.Button, classes[props.btnType]].join(' ')}>
                <a 
                target='blank'
                href={props.to}>
                    {props.children}
                </a> 
            </button> 
        )
    }

    return(
        button
)};

export default Button;