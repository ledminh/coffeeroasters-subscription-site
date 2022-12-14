import { FC, ReactNode } from "react";
import Head from "next/head";

import styles from './PageLayout.module.scss';

import Header from "./Header";
import Footer from './Footer';

type PageLayoutType = FC<{children:ReactNode}>;

const PageLayout:PageLayoutType  = ({children}) => {

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="icon" type="image/png" sizes="32x32" href="./assets/favicon-32x32.png" />
                <title>Frontend Mentor | Coffeeroasters subscription site</title>
            </Head>
            <div className={styles.container}>
                <Header/>
                <main className={styles.main}>
                    {children}
                </main>
                <Footer/>
            </div>    
        </>

    )
}

export default PageLayout;