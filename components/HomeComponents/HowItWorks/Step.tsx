import { FunctionComponent } from "react";

import styles from './Step.module.scss';


/**************************
 * Main Component 
 */

const Step:StepType = ({name, description, order}) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.order}>{'0' + order}</div>
            <h2 className={styles.name}>{name}</h2>
            <div className={styles.description}>{description}</div>
        </div>
    );
}

export default Step;


/**************************
 * Type 
 */
type StepType = FunctionComponent<{name:string, description:string, order:number}>;