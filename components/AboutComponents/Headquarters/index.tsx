import { FunctionComponent } from "react";

import styles from './Headquarters.module.scss';

const Headquarters:FunctionComponent = () => {

    return (
        <div className={styles.wrapper}>
            <div>Our headquarters</div>
            <div>
                United Kingdom
                68 Asfordby Rd
                Alcaston
                SY6 1YA
                +44 1241 918425

                Canada
                1528 Eglinton Avenue
                Toronto
                Ontario M4P 1A6
                +1 416 485 2997

                Australia
                36 Swanston Street
                Kewell
                Victoria
                +61 4 9928 3629
            </div>
        </div>
    )
}

export default Headquarters;