import { FunctionComponent } from "react";

import styles from './Quality.module.scss';
import Image from "next/image";
import qualityJPG_mobile from '../../../assets/images/about/mobile/image-quality.jpg';
import qualityJPG_tablet from '../../../assets/images/about/tablet/image-quality.jpg';
import qualityJPG_desktop from '../../../assets/images/about/desktop/image-quality.jpg';

const Quality:FunctionComponent = () => {

    return (
        <div className={styles.wrapper}>
            <_Image />
            <div className={styles.text}>
                <h2 className={styles.title}>Uncompromising quality</h2>
                <p className={styles.body}>
                    Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.
                </p>
            </div>

        </div>
    )
}

export default Quality;


/*****************************
 *  Other Components
 */

const _Image:FunctionComponent = () => {
    return (
        <>
            <div className={`${styles.image} ${styles.mobile}`}>
                <Image 
                    src={qualityJPG_mobile}
                    alt="quality photo"
                    fill
                    style={{
                        objectFit: 'cover',
                        
                    }}

                    sizes='445px'
                    placeholder='blur'
                />
            </div>
            <div className={`${styles.image} ${styles.tablet}`}>
                <Image 
                    src={qualityJPG_tablet}
                    alt="quality photo"
                    fill
                    style={{
                        objectFit: 'cover',
                        
                    }}

                    sizes='445px'
                    placeholder='blur'
                />
            </div>
            <div className={`${styles.image} ${styles.desktop}`}>
                <Image 
                    src={qualityJPG_desktop}
                    alt="quality photo"
                    fill
                    style={{
                        objectFit: 'cover',
                        
                    }}

                    sizes='445px'
                    placeholder='blur'
                />
            </div>        
        </>
    );
}