import { FunctionComponent } from "react"

import Image from "next/image";

import styles from './Footer.module.scss';
import logoSVG from '../../assets/images/shared/desktop/logo-footer.svg';

import facebookSVG from '../../assets/images/shared/desktop/icon-facebook.svg';
import instagramSVG from '../../assets/images/shared/desktop/icon-instagram.svg';
import twitterSVG from '../../assets/images/shared/desktop/icon-twitter.svg';


/************************
 * Main Component
 */

const Footer:FunctionComponent = () => {

    return (
        <footer className={styles.wrapper}>
            <Logo />
            <nav className={styles.nav}>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Create your plan</li>
                </ul>
            </nav>
            <SocialLinks/>
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
                
            />
        </div>
    )
}

const SocialLinks:FunctionComponent = () => {

    return (
        <nav className={styles.socialLinks}>
            <ul>
                <li>
                    <Image 
                        src={facebookSVG}
                        alt="facebook logo"
                        fill
                        sizes="24px"
                        />
                </li>
                <li>
                    <Image 
                        src={twitterSVG}
                        alt="twitter logo"
                        />
                </li>
                <li>
                    <Image 
                        src={instagramSVG}
                        alt="instagram logo"
                        />
                </li>
            </ul>
        </nav>
    )
}