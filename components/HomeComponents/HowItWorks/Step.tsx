import { FunctionComponent } from "react";

import styles from './Step.module.scss';


/**************************
 * Main Component 
 */

const Step:StepType = ({name, description}) => {

    return (
        <div className={styles.wrapper}>
            <div>{name}</div>
            <div>{description}</div>
        </div>
    );
}

export default Step;


/**************************
 * Type 
 */
type StepType = FunctionComponent<{name:string, description:string}>;