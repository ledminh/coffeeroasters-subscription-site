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
            <div>{name}</div>
            <div>{description}</div>
        </div>
    )
}

export default Option;