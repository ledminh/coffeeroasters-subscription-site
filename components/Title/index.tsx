import { FunctionComponent } from "react";

import Image from "next/image";
import styles from './Title.module.scss';

import LogoSVG from '../../assets/images/shared/desktop/logo.svg';

const Title:FunctionComponent = () => {

    return (
        <div className={styles.wrapper}>
            <LogoSVG
                viewBox="0 0 355.5 40.5"
            />
        </div>
    )
}

export default Title;