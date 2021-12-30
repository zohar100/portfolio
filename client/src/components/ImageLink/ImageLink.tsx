import { FC } from 'react';
import classes from './ImageLink.module.css';

interface Props {
    svg: FC;
    children?: string;
    href: string;
    target?: string;
}

const ImageLink:FC<Props> = (props) => (
    <a href={props.href} className={classes.ImageLink} target={props.target}>
        <props.svg/>
        <span>{props.children}</span>
    </a>
)

export default ImageLink;