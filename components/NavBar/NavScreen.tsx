import { FunctionComponent } from "react";
import Title from "../Title";

import styles from './NavScreen.module.scss';

const NavScreen:FunctionComponent = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <nav className={styles.nav}>
                    <ul className={styles.ul}>
                        <li><h3>Home</h3></li>
                        <li><h3>About Us</h3></li>
                        <li><h3>Create Your Plan</h3></li>
                    </ul>
                </nav>
            </div>
            <div className={styles.footer}/>
        </div>
    )
}

export default NavScreen;