import styles from './Reason.module.scss';

import Image, {StaticImageData} from 'next/image';
import { FunctionComponent } from 'react';


/******************************
 *  Types
 */
export type ReasonData = {
    name: string,
    description: string,
    image: StaticImageData
}

type ReasonComponent = FunctionComponent<ReasonData>;


const Reason:ReasonComponent = ({name, description, image}) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.image}>
                <Image 
                    src={image}
                    alt={description}
                />
            </div>
            <div className={styles.text}>
                <h3 className={styles.name}>{name}</h3>
                <div className={styles.description}>{description}</div>
            </div>
        </div>
    )
}

export default Reason;