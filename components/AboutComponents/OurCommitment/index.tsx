import { FunctionComponent } from "react";

import styles from './OurCommitment.module.scss';
import Image from "next/image";

import commitmentJPG_mobile from '../../../assets/images/about/mobile/image-commitment.jpg';
import commitmentJPG_tablet from '../../../assets/images/about/tablet/image-commitment.jpg';
import commitmentJPG_desktop from '../../../assets/images/about/desktop/image-commitment.jpg';

const OurCommitment:FunctionComponent = () => {

    return (
        <section className={styles.wrapper}>
            <div className={styles.image}>
                <_Image />
            </div>
            <div className={styles.text}>
                <h2 className={styles.title}>Our commitment</h2>
                <div className={styles.body}>
                    We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.
                </div>
            </div>
        </section>
    )
}

export default OurCommitment;



/*********************
 * Other Components
 */
const _Image:FunctionComponent = () => {
    return (
        <>
            <div className={styles.mobile}>
                <Image 
                    src={commitmentJPG_mobile}
                    alt="our commitment photo"
                    fill
                    style={{
                        objectFit: 'cover'
                    }}
                    sizes="375px"
                    placeholder='blur'
                />
            </div>
            <div className={styles.tablet}>
                <Image 
                    src={commitmentJPG_tablet}
                    alt="our commitment photo"
                    fill
                    style={{
                        objectFit: 'cover'
                    }}
                    sizes="375px"
                    placeholder="blur"
                />
            </div>
            <div className={styles.desktop}>
                <Image 
                    src={commitmentJPG_desktop}
                    alt="our commitment photo"
                    fill
                    style={{
                        objectFit: 'cover'
                    }}
                    sizes="375px"
                    placeholder="blur"
                />
            </div>
        </>
    )
}