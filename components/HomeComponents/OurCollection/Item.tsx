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
                />
            </div>
            <div className={styles.text}>
                <div>{name}</div>
                <div>{description}</div>
            </div>
        </div>
    );
}

export default Item;