import { FC } from 'react';

import classes from './Spinner.module.css';

interface Props {
    fixed?: boolean;
}

const Spinner:FC<Props> = (props) => {
    return(
        <div className={props.fixed ? classes.SpinnerWrapperPrimary : classes.SpinnerWrapperSecondary} data-aos="fade-up">
            <div className={classes.Spinner}></div>
        </div>
    )
}

export default Spinner;