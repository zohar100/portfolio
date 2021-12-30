import { FC } from 'react';

import classes from './Spinner.module.css';



const Spinner:FC = (props) => {
    return(
        <div className={classes.SpinnerWrapper} data-aos="fade-up">
            <div className={classes.Spinner}></div>
        </div>
    )
}

export default Spinner;