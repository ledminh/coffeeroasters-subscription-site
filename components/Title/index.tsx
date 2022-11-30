import { FunctionComponent } from "react";

import Image from "next/image";
import styles from './Title.module.scss';

import logoSVG from '../../assets/images/shared/desktop/logo.svg';

const Title:FunctionComponent = () => {

    return (
        <div className={styles.wrapper}>
            <Image 
                src={logoSVG}
                alt="coffeeroasters logo"
                fill={true}
            />
        </div>
    )
}

export default Title;