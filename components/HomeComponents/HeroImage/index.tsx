import { FunctionComponent } from "react";

import styles from './HeroImage.module.scss';
import Image from "next/image";
import heroCoffeePressJPG from '../../../assets/images/home/mobile/image-hero-coffeepress.jpg';

const HeroImage:FunctionComponent = () => {


    return (
        <div className={styles.wrapper}>
            <Image
                src={heroCoffeePressJPG}
                alt="Coffee Press Hero image"
            />
            Great Coffee made simple.
            Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.
            <button>Create your plan</button>
        </div>
    )
} 


export default HeroImage;