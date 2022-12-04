import { FunctionComponent } from "react"

import Image from "next/image";
import Link from "next/link";

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
                    <li><Link href='/'>HOME</Link></li>
                    <li><Link href='/about'>ABOUT US</Link></li>
                    <li><Link href='/subscribe'>CREATE YOUR PLAN</Link></li>
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
                fill
                sizes="217px"
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