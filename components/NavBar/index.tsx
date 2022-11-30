import { FunctionComponent } from "react";

import styles from './NavBar.module.scss';
import Image from "next/image";
import iconHamburgerSVG from '../../assets/images/shared/mobile/icon-hamburger.svg';


const NavBar:FunctionComponent = () => {

    return (
        <div className={styles.wrapper}>
            <button
                aria-label="open navigation bar"
            >
                <Image 
                    src={iconHamburgerSVG}
                    alt="Open Navigation Bar"
                />
            </button>
        </div>
    )
}
export default NavBar;