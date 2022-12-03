import { FunctionComponent } from "react";

import styles from './Quality.module.scss';
import Image from "next/image";

const Quality:FunctionComponent = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.text}>
                <div>Uncompromising quality</div>
                <div>
                    Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.
                </div>
            </div>
            <div className={styles.image}>
                <Image 
                    src=""
                    alt=""
                />
            </div>
        </div>
    )
}

export default Quality;