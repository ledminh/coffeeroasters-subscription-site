import { FunctionComponent } from "react";

import HeroLayout from "../../../layouts/HeroLayout";

import heroBlackcupJPG_mobile from '../../../assets/images/plan/mobile/image-hero-blackcup.jpg';
import heroBlackcupJPG_tablet from '../../../assets/images/plan/tablet/image-hero-blackcup.jpg';
import heroBlackcupJPG_desktop from '../../../assets/images/plan/desktop/image-hero-blackcup.jpg';


import styles from './HeroImage.module.scss';

const HeroImage:FunctionComponent = () => {

    return (
        <HeroLayout 
            heights={{
                mobile: '400px',
                tablet: '400px',
                desktop: '450px'
            }}
            images={{
                mobile: heroBlackcupJPG_mobile,
                tablet: heroBlackcupJPG_tablet,
                desktop: heroBlackcupJPG_desktop
            }} 
            altText="White Cup Hero image"
            >
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <h1 className={styles.title}>Create a plan</h1>
                        <p>Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.</p>
                    </div>
                    <div className={styles.wedge}/>
                </div>
        </HeroLayout>
    )
}

export default HeroImage;