import { FunctionComponent } from "react";

import styles from './HeroImage.module.scss';

import heroCoffeePressJPG_mobile from '../../../assets/images/home/mobile/image-hero-coffeepress.jpg';
import heroCoffeePressJPG_tablet from '../../../assets/images/home/tablet/image-hero-coffeepress.jpg';
import heroCoffeePressJPG_desktop from '../../../assets/images/home/desktop/image-hero-coffeepress.jpg';
import HeroLayout from "../../../layouts/HeroLayout";
import CreateYourPlanButton from "../../CreateYourPlanButton";

const HeroImage:FunctionComponent = () => {


    return (
        <HeroLayout 
            heights={{
                mobile: '500px',
                tablet: '500px',
                desktop: '600px'
            }}
            images={{
                mobile: heroCoffeePressJPG_mobile,
                tablet: heroCoffeePressJPG_tablet,
                desktop: heroCoffeePressJPG_desktop
            }} 
            altText="Coffee Press Hero image"
            >
                <div className={styles.wrapper}>
                    <h1 className={styles.title}>
                        Great coffee made simple.
                    </h1>
                    <div className={styles.content}>
                        Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.
                    </div>
                    <CreateYourPlanButton/>
                </div>
        </HeroLayout>
    )
} 


export default HeroImage;