import { FunctionComponent } from "react";

import styles from './NavBar.module.scss';
import NavScreen from "./NavScreen";

import ToggleButton from "./ToggleButton";

const NavBar:FunctionComponent = () => {

    return (
        <div className={styles.wrapper}>
            <ToggleButton/>
            {/* <NavScreen/> */}
        </div>
    )
}
export default NavBar;