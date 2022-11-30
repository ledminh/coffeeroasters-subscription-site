import { FC, ReactNode } from "react";
import Head from "next/head";

import styles from './Layout.module.scss';
import Title from '../components/Title';
import NavBar from '../components/NavBar';
import Header from "./Header";



type LayoutType = FC<{children:ReactNode, title: string}>;

const Layout:LayoutType  = ({children, title}) => {

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="icon" type="image/png" sizes="32x32" href="./assets/favicon-32x32.png" />
                <title>Frontend Mentor | {title}</title>
            </Head>
            <div className={styles.container}>
                <Header/>
                <main className={styles.main}>
                    {children}
                </main>
                <footer className={styles.footer}>This is footer</footer>
            </div>    
        </>

    )
}

export default Layout;