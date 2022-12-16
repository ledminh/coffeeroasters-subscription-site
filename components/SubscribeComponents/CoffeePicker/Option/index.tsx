import { FunctionComponent } from "react";
import { questionType } from "../hooks/reducer";

import styles from './Option.module.scss';

/***************************
 *  Types
 */
export interface OptionPropsType {
    question: questionType,
    name: string,
    description: string,
    selected: boolean,
    toggleOption: (option: string, question: questionType) => void,
} 

type OptionType = FunctionComponent<OptionPropsType>



/***************************
 *  Main Component
 */
const Option:OptionType = ({question, name, description, selected, toggleOption}) => {

    const handleClick = () => {
        toggleOption(name, question);

    }

    return (
        <div className={`${styles.wrapper} ${selected? styles.selected : ''}`}
            onClick={handleClick}
            >
            <h3 className={styles.name}>{name}</h3>
            <div className={styles.description}>{description}</div>
        </div>
    )
}

export default Option;