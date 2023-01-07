import { FunctionComponent } from "react";
import Link from "next/link";

import { signIn, signOut, useSession } from 'next-auth/react';

import styles from './NavScreen.module.scss';

const NavScreen:FunctionComponent = () => {

    const {data: session} = useSession();
    const {user} = session || {user: null};



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
                        {
                            user ? (
                                <>
                                    <li>
                                        <Link href="/account">
                                            <h3>Account</h3>
                                        </Link>
                                    </li>
                                    <li>
                                        <button onClick={() => signOut()}>
                                            <h3>Logout</h3>
                                        </button>
                                    </li>
                                </>
                            ) : (
                                <li>
                                    <button onClick={() => signIn()}>
                                        <h3>Login</h3>
                                    </button>
                                </li>
                            )
                        }
                        
                    </ul>
                </nav>
            </div>
            <div className={styles.footer}/>
        </div>
    )
}

export default NavScreen;