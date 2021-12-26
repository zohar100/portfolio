import { FC } from 'react';
import classes from './Input.module.css';

interface Props {
    elementType?: string;
    elementConfig?: any;
    value?: any;
    changed?: any;
    handleChanges?: any;
    label: string;
    errors: any; 
}

const Input:FC<Props> = (props) => {
    let inputElement = null;
    let inputClasses = [classes.InputElement];
    if(props.errors[props.label]) inputClasses.push(classes.InputError);

    switch(props.elementType) {
        case('input'):
            inputElement = <input 
                            className={inputClasses.join(' ')}  
                            { ...props.elementConfig } 
                            {...props.handleChanges(props.label)} />
            break;
        case('textarea'):
            inputClasses.push(classes.TextArea)
            inputElement = <textarea 
                            className={inputClasses.join(' ')} 
                            { ...props.elementConfig } 
                            {...props.handleChanges(props.label)} />
            break;
        case('file'):
            inputElement = <input 
                            className={inputClasses.join(' ')} 
                            { ...props.elementConfig } 
                            {...props.handleChanges(props.label)}
                            id="fileUpload"/>
            break;
        case('select'):
        inputElement = (
            <select
                className={inputClasses.join(' ')}  
                {...props.handleChanges(props.label)}>
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
                            className={inputClasses.join(' ')} 
                            { ...props.elementConfig } 
                            {...props.handleChanges(props.label)} />
    }

    return (
    <div className={classes.InputWrapper}>
        {inputElement}
    </div>
        )
}

export default Input;