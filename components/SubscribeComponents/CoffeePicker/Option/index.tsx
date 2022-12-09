import { FunctionComponent } from "react";

import styles from './Option.module.scss';

/***************************
 *  Types
 */
interface OptionPropsType {

} 

type OptionType = FunctionComponent<OptionPropsType>



/***************************
 *  Main Component
 */
const Option:OptionType = () => {

    return (
        <div className={styles.wrapper}>
            Option component
        </div>
    )
}

export default Option;