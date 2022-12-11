import { FunctionComponent } from "react";

import styles from './Option.module.scss';

/***************************
 *  Types
 */
export interface OptionPropsType {
    name: string,
    description: string
} 

type OptionType = FunctionComponent<OptionPropsType>



/***************************
 *  Main Component
 */
const Option:OptionType = ({name, description}) => {

    return (
        <div className={styles.wrapper}>
            <h3 className={styles.name}>{name}</h3>
            <div className={styles.description}>{description}</div>
        </div>
    )
}

export default Option;