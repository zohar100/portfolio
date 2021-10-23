import { FC } from 'react';
import classes from './ImageLink.module.css';

interface Props {
    imgSrc: string;
    children?: string;
    href: string;
}

const ImageLink:FC<Props> = (props) => (
    <a href={props.href} className={classes.ImageLink}>
        <img src={props.imgSrc} alt="circle"/>
        <span>{props.children}</span>
    </a>
)

export default ImageLink;