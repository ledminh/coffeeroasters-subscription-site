import Image, { StaticImageData } from "next/image";
import { FunctionComponent } from "react";

import styles from './WhyChooseUs.module.scss';

import Text from "./Text";
import Reason, { ReasonData } from "./Reason";

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
                            <Reason 
                                key={r.name}
                                name={r.name}
                                image={r.image}
                                description={r.description}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
            
    )
}

export default WhyChooseUs;







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