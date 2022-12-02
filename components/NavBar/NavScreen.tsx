import { FunctionComponent } from "react";
import Title from "../Title";

import styles from './NavScreen.module.scss';

const NavScreen:FunctionComponent = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                NavScreen
            </div>
        </div>
    )
}

export default NavScreen;