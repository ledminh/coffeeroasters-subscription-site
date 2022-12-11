import { FunctionComponent, ReactNode } from "react";

import styles from './HeroLayout.module.scss';

import Image, { StaticImageData } from "next/image";

/***************************
 * Type 
 */
type HeightsType = {
    mobile: string,
    tablet: string,
    desktop: string
}

type ImagesType = {
    mobile: StaticImageData,
    tablet: StaticImageData,
    desktop: StaticImageData
}

type HeroLayoutType = FunctionComponent<{heights: HeightsType, images: ImagesType, altText:string, children:ReactNode}>;


/***************************
 * MainComponent 
 */

const HeroLayout:HeroLayoutType = ({heights,images, altText, children}) => {


    return (
        <>
            <section className={`${styles.wrapper} ${styles.mobile}`}
                style={{
                    height: heights.mobile
                }}
            >
                <Image
                    src={images.mobile}
                    alt={altText}
                    fill
                    style={{
                        objectFit: 'cover'
                    }}
                    sizes="600px"
                    placeholder='blur'
                />
                <div className={styles.content}>
                    {children}
                </div>
            </section>

            <section className={`${styles.wrapper} ${styles.tablet}`}
                style={{
                    height: heights.tablet
                }}
            >
                <Image
                    src={images.tablet}
                    alt={altText}
                    fill
                    style={{
                        objectFit: 'cover'
                    }}
                    sizes="600px"
                    placeholder='blur'
                />
                <div className={styles.content}>
                    {children}
                </div>
            </section>

            <section className={`${styles.wrapper} ${styles.desktop}`}
                style={{
                    height: heights.desktop
                }}
            >
                <Image
                    src={images.desktop}
                    alt={altText}
                    fill
                    style={{
                        objectFit: 'cover'
                    }}
                    sizes="600px"
                    placeholder='blur'
                />
                <div className={styles.content}>
                    {children}
                </div>
            </section>
        </>
        
    )
} 


export default HeroLayout;