import { FunctionComponent } from "react"

import Image from "next/image";

import styles from './Footer.module.scss';
import logoSVG from '../../assets/images/shared/desktop/logo.svg';


/************************
 * Main Component
 */

const Footer:FunctionComponent = () => {

    return (
        <footer className={styles.wrapper}>
            <Logo />
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Create your plan</li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;


/************************
 * Private properties
 */

const Logo:FunctionComponent = () => {
    return (
        <div className={styles.logo}>
            <Image 
                src={logoSVG}
                alt="coffeeroasters logo"
                fill={true}
                sizes='8.75rem'
            />
        </div>
    )
}