import { FunctionComponent, useEffect } from "react";

import styles from './NavBar.module.scss';
import NavScreen from "./NavScreen";
import { useState } from "react";
import ToggleButton from "./ToggleButton";

const NavBar:FunctionComponent = () => {

    const [navscreenIsOpen, _setNavscreenIsOpen] = useState(false);

    const closeNavscreen = () => setNavscreenIsOpen(false);

    useEffect(() => {
        if(!navscreenIsOpen) {
            document.body.style.overflow = 'auto';
            document.body.removeEventListener('click', closeNavscreen);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navscreenIsOpen]);

   
    const setNavscreenIsOpen = (isOpen:boolean) => {
        if(isOpen) {
            document.body.style.overflow = 'hidden';
            
            document.body.addEventListener('click', closeNavscreen);
        }

        _setNavscreenIsOpen(isOpen);
    }
    return (
        <div className={styles.wrapper}>
            <ToggleButton
                onClick={() => 
                    setNavscreenIsOpen(!navscreenIsOpen)}
                navscreenIsOpen={navscreenIsOpen}
            />
            {navscreenIsOpen && <NavScreen/>}
        </div>
    )
}
export default NavBar;