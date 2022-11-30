import { FunctionComponent } from "react"

import Title from "../components/Title";
import NavBar from "../components/NavBar";

import styles from './Header.module.scss';

const Header:FunctionComponent = () => {

    return (
        <header className={styles.wrapper}>
            <Title />
            <NavBar/>
        </header>
    )
}

export default Header;