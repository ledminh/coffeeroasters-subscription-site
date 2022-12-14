import { FunctionComponent } from "react";

import styles from './Option.module.scss';

/***************************
 *  Types
 */
export interface OptionPropsType {
    question: string,
    name: string,
    description: string,
    selected: boolean,
    toggleOption: (option: string, question: string) => void
} 

type OptionType = FunctionComponent<OptionPropsType>



/***************************
 *  Main Component
 */
const Option:OptionType = ({question, name, description, selected, toggleOption}) => {

    return (
        <div className={`${styles.wrapper} ${selected? styles.selected : ''}`}
            onClick={() => toggleOption(name, question)}
            >
            <h3 className={styles.name}>{name}</h3>
            <div className={styles.description}>{description}</div>
        </div>
    )
}

export default Option;