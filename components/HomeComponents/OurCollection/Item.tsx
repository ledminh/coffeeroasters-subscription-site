import Image, { StaticImageData } from "next/image";
import { FunctionComponent } from "react";

import styles from './Item.module.scss';
/**************************
 *  Types
 */
type ItemType = FunctionComponent<{name:string, description:string, image:StaticImageData}>;

/**************************
 *  Main Component
 */

const Item:ItemType = ({name,description,image}) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.image}> 
                <Image
                    src={image}
                    alt={name}
                    fill
                    sizes="100%"
                    style={{
                        objectFit: 'cover'
                    }}
                    placeholder='blur'
                />
            </div>
            <div className={styles.text}>
                <h3 className={styles.title}>{name}</h3>
                <div className={styles.description}>{description}</div>
            </div>
        </div>
    );
}

export default Item;