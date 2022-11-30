import { FunctionComponent } from "react";

import styles from './Layout.module.scss';
import Title from '../components/Title';
import NavBar from '../components/NavBar';



type LayoutType = FunctionComponent<{children:JSX.Element|JSX.Element[]}>;

const Layout:LayoutType  = ({children}) => {

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Title />
                <NavBar/>
            </header>
            <main className={styles.main}>
                {children}
            </main>
            <footer className={styles.footer}>This is footer</footer>
        </div>    

    )
}

export default Layout;