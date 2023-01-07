import { FunctionComponent } from "react";

import Link from "next/link";
import styles from './NavBar.module.scss';
import NavScreen from "./NavScreen";
import useNavScreen from "./hooks/useNavScreen";

import ToggleButton from "./ToggleButton";

import { signIn, signOut, useSession } from 'next-auth/react';

const NavBar:FunctionComponent = () => {

    const {navscreenIsOpen, setNavscreenIsOpen} = useNavScreen();
    
    return (
        <div className={styles.wrapper}>
            <SmallScreenNav
                setNavscreenIsOpen={setNavscreenIsOpen}
                navscreenIsOpen={navscreenIsOpen}
                />
            <LargeScreenNav/>
            <AuthButton/>
        </div>
    )
}
export default NavBar;


/*********************
 *  Other Components 
 */

const SmallScreenNav:FunctionComponent<{setNavscreenIsOpen: (val:boolean) => void, navscreenIsOpen: boolean}> = ({setNavscreenIsOpen, navscreenIsOpen}) => (
    <div className={styles.smallscreen}>
        <ToggleButton
            onClick={() => 
                setNavscreenIsOpen(!navscreenIsOpen)}
            navscreenIsOpen={navscreenIsOpen}
        />
        {navscreenIsOpen && <NavScreen/>}    
    </div>
)


const LargeScreenNav:FunctionComponent = () => (
    <div className={styles.largescreen}>
        <ul className={styles.ul}>
            <li><Link href="/">HOME</Link></li>
            <li><Link href="/about">ABOUT</Link></li>
            <li><Link href="/subscribe">CREATE YOUR PLAN</Link></li>
        </ul>
    </div>
)

function AuthButton() {
    const { data: session, status } = useSession()

    console.log(session);
    
    return (
        <>
        {status === 'loading' && (
            <div>Loading...</div>
        )}
        {status === 'unauthenticated' && (
            <div>
            Not signed in <br/>
            <button onClick={() => signIn()}>Sign in</button>
            </div>
        )}
        {status === 'authenticated' && (
            <div>
            Signed in as {session.user?.email} <br/>
            <button onClick={() => signOut()}>Sign out</button>
            </div>
        )}
        </>
    )
}