import { FunctionComponent } from "react";
import Link from "next/link";

import styles from './NavScreen.module.scss';

const NavScreen:FunctionComponent = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <nav className={styles.nav}>
                    <ul className={styles.ul}
                        onClick={(event) => event.stopPropagation()}
                        >
                        <li>
                            <Link href='/'>
                                <h3>Home</h3>
                            </Link>
                        </li>
                        <li>
                            <Link href='/about'>
                                <h3>About</h3>
                            </Link>
                        </li>
                        <li>
                            <Link href="/subscribe">
                                <h3>Create Your Plan</h3>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={styles.footer}/>
        </div>
    )
}

export default NavScreen;