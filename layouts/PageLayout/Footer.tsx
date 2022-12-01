import { FunctionComponent } from "react"


import styles from './Footer.module.scss';

const Footer:FunctionComponent = () => {

    return (
        <footer className={styles.wrapper}>
            <div>Logo</div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Create your plan</li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;