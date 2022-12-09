import { FunctionComponent } from "react"

import Image from "next/image";
import Link from "next/link";

import styles from './Footer.module.scss';
import LogoSVG from '../../assets/images/shared/desktop/logo-footer.svg';

import FacebookSVG from '../../assets/images/shared/desktop/icon-facebook.svg';
import InstagramSVG from '../../assets/images/shared/desktop/icon-instagram.svg';
import TwitterSVG from '../../assets/images/shared/desktop/icon-twitter.svg';
import SocialIcon from "./SocialIcon";


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
            <LogoSVG/>
        </div>
    )
}

const SocialLinks:FunctionComponent = () => {

    return (
        <nav className={styles.socialLinks}>
            <ul>
                <li>
                    <SocialIcon
                        Icon={FacebookSVG}
                        link='https://www.facebook.com/'
                    />
                </li>
                <li>
                    <SocialIcon 
                        Icon={TwitterSVG}
                        link='https://twitter.com/'
                    />
                </li>
                <li>
                    <SocialIcon
                        Icon={InstagramSVG}
                        link='https://www.instagram.com/'
                    />
                </li>
            </ul>
        </nav>
    )
}