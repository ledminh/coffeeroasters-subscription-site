import { FunctionComponent } from "react";

import Image from "next/image";

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


const LargeScreenNav:FunctionComponent = () => {
    

    return (
        <div className={styles.largescreen}>
            <ul className={styles.ul}>
                <li><Link href="/">HOME</Link></li>
                <li><Link href="/about">ABOUT</Link></li>
                <li><Link href="/subscribe">CREATE YOUR PLAN</Link></li>
                <li><AuthButton/></li>
            </ul>
        </div>
    )
}


const AuthButton:FunctionComponent = () => {
    const { data: session, status } = useSession()

    const { user } = session || {   user: null  };



    return (
        <>
            {
                status === 'unauthenticated' && (<button className={styles.button} onClick={() => signIn()}>LOG IN</button>)
            }
            {
                status === 'authenticated' && (
                    <>
                        <span className={styles.userImage}>{user?.image && <Image src={user.image} alt="user image" fill />}</span>
                        <button className={styles.button} onClick={() => signOut()}>
                            LOG OUT
                        </button>
                    </>
                )
            }
        </>
    )
}
            