import { FunctionComponent } from "react";

import styles from './SocialIcon.module.scss';

import { useState } from "react";
import Link from "next/link";

/***************************
 *  Types
 */
interface SocialIconPropsType {
    Icon: FunctionComponent<{fill:string}>,
    link: string
} 

type SocialIconType = FunctionComponent<SocialIconPropsType>



/***************************
 *  Main Component
 */
const SocialIcon:SocialIconType = ({Icon, link}) => {

    const [hover, setHover] = useState(false);

    return (
        <Link className={styles.wrapper}
            href={link}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <Icon 
                fill={hover ? '#FDD6BA' : '#FEFCF7'}
            />
        </Link>
    )
}

export default SocialIcon;