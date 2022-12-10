import styles from './Reason.module.scss';

import { FunctionComponent } from 'react';


/******************************
 *  Types
 */
export type ReasonData = {
    name: string,
    description: string,
    Image: FunctionComponent<{alt:string}>
}

type ReasonComponent = FunctionComponent<ReasonData>;


const Reason:ReasonComponent = ({name, description, Image}) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.image}>
                <Image 
                    alt={name}
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