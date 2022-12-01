import { FC, ReactNode } from "react";
import Head from "next/head";

import styles from './PageLayout.module.scss';

import Header from "./Header";



type PageLayoutType = FC<{children:ReactNode, title: string}>;

const PageLayout:PageLayoutType  = ({children, title}) => {

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

export default PageLayout;