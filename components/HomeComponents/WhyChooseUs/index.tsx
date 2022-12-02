import Image, { StaticImageData } from "next/image";
import { FunctionComponent } from "react";

import styles from './WhyChooseUs.module.scss';

import coffeeBeanSVG from '../../../assets/images/home/desktop/icon-coffee-bean.svg';
import giftSVG from '../../../assets/images/home/desktop/icon-gift.svg';
import truckSVG from '../../../assets/images/home/desktop/icon-truck.svg';



/******************************
 *  Main Component
 */
const WhyChooseUs:FunctionComponent = () => {

    return (
        <section className={styles.wrapper}>
            <Text />
            <div className={styles.reasons}>
                <div className={styles.background} />
                <div className={styles.content}>
                    {
                        reasons.map(r => (
                            <div className={styles.reason}
                                key = {r.name}
                            >
                                <div className={styles.image}>
                                    <Image 
                                        src={r.image}
                                        alt={r.description}
                                    />
                                </div>
                                <div className={styles.reasonText}>
                                    <div>{r.name}</div>
                                    <div>{r.description}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
            
    )
}

export default WhyChooseUs;


/******************************
 *  Types
 */
 type ReasonData = {
    name: string,
    description: string,
    image: StaticImageData
}




/******************************
 *  Private properties
 */
const reasons: ReasonData[] = [
    {
        name: 'Best quality',
        description: 'Discover an endless variety of the world’s best artisan coffee from each of our roasters.',
        image: coffeeBeanSVG
    },
    {
        name: 'Exclusive benefits',
        description: 'Special offers and swag when you subscribe, including 30% off your first shipment.',
        image: giftSVG
    },
    {
        name: 'Free shipping',
        description: 'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.',
        image: truckSVG
    }
]


/******************************
 *  Other Components
 */

const Text:FunctionComponent = () => (
    <div className={styles.text}>
        <h2 className={styles.title}>
            Why choose us?
        </h2>
        <div className={styles.content}>
            A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.
        </div>
    </div>
)