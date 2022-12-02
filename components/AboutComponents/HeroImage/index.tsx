import { FunctionComponent } from "react";

import styles from './HeroImage.module.scss';

import heroWhitecupJPG_mobile from '../../../assets/images/about/mobile/image-hero-whitecup.jpg';
import heroWhitecupJPG_tablet from '../../../assets/images/about/tablet/image-hero-whitecup.jpg';
import heroWhitecupJPG_desktop from '../../../assets/images/about/desktop/image-hero-whitecup.jpg';

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
                mobile: heroWhitecupJPG_mobile,
                tablet: heroWhitecupJPG_tablet,
                desktop: heroWhitecupJPG_desktop
            }} 
            altText="White Cup Hero image"
            >
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <h1 className={styles.title}>About us</h1>
                        <div>Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.</div>
                    </div>
                    <div className={styles.wedge}/>
                </div>
        </HeroLayout>
    )
} 


export default HeroImage;