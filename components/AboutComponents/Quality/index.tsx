import { FunctionComponent } from "react";

import styles from './Quality.module.scss';
import Image from "next/image";
import qualityJPG from '../../../assets/images/about/mobile/image-quality.jpg';

const Quality:FunctionComponent = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.image}>
                <Image 
                    src={qualityJPG}
                    alt="quality photo"
                    fill
                    style={{
                        objectFit: 'cover'
                    }}
                    placeholder='blur'
                />
            </div>
            <h2 className={styles.title}>Uncompromising quality</h2>
                <p className={styles.body}>
                    Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.
                </p>

        </div>
    )
}

export default Quality;