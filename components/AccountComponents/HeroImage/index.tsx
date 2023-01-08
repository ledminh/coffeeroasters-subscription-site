import { FunctionComponent } from "react";

import styles from './HeroImage.module.scss';

import heroCoffeeJPG_mobile from '../../../assets/images/account/mobile/image-hero-coffee.jpg';
import heroCoffeeJPG_tablet from '../../../assets/images/account/tablet/image-hero-coffee.jpg';
import heroCoffeeJPG_desktop from '../../../assets/images/account/desktop/image-hero-coffee.jpg';

import HeroLayout from "../../../layouts/HeroLayout";

const HeroImage:FunctionComponent = () => {


    return (
        <HeroLayout 
            heights={{
                mobile: '400px',
                tablet: '400px',
                desktop: '450px'
            }}
            images={{
                mobile: heroCoffeeJPG_mobile,
                tablet: heroCoffeeJPG_tablet,
                desktop: heroCoffeeJPG_desktop
            }} 
            altText="White Cup Hero image"
            >
                <div className={styles.wrapper}>
                    <h1 className={styles.title}>Account</h1>
                </div>
        </HeroLayout>
    )

    
    
} 


export default HeroImage;