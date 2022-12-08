
import { FunctionComponent } from "react";

import Image from "next/image";
import IconHamburgerSVG from '../../assets/images/shared/mobile/icon-hamburger.svg';


import styles from './ToggleButton.module.scss';

const ToggleButton:FunctionComponent = () => {
    return (
        <button
            className={styles.button}
            aria-label="open navigation bar"
            >
            <IconHamburgerSVG/>
        </button>
    )
}

export default ToggleButton;