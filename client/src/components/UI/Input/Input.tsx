import { FC } from 'react';
import classes from './Input.module.css';

interface Props {
    elementType?: string;
    elementConfig?: any;
    value?: any;
    changed?: any;
}

const Input:FC<Props> = (props) => {
    let inputElement = null;

    switch(props.elementType) {
        case('input'):
            inputElement = <input 
                            className={classes.InputElement} 
                            { ...props.elementConfig } 
                            value={props.value}
                            onChange={props.changed} />
            break;
        case('textarea'):
            inputElement = <textarea 
                            className={[classes.InputElement, classes.TextArea].join(' ')} 
                            { ...props.elementConfig } 
                            value={props.value}
                            onChange={props.changed} />
            break;
        case('file'):
            inputElement = <input 
                            className={classes.InputElementFile} 
                            { ...props.elementConfig } 
                            value={props.value}
                            onChange={props.changed} 
                            id="fileUpload"/>
            break;
        case('select'):
        inputElement = (
            <select
                className={classes.InputElement} 
                value={props.value}
                onChange={props.changed}>
                {props.elementConfig.options.map((option: any) => (
                    <option 
                        value={option.value}
                        key={option.value}>
                        {option.displayValue}
                    </option>
                ))}
            </select>
        )
            break;
        default:
            inputElement = <input 
                            className={classes.InputElement}
                            { ...props.elementConfig } 
                            value={props.value}
                            onChange={props.changed} />
    }

    return (inputElement)
}

export default Input;