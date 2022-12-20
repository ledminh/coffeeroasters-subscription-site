import { FunctionComponent } from "react";
import { OptionType, questionType } from "../../../../types";

import styles from './Option.module.scss';

/***************************
 *  Types
 */
export type OptionPropsType = {
    questionID: string,
    selected: boolean,
    toggleOption: (optionID: string, questionID: string) => void,
} & OptionType;

type OptionComponentType = FunctionComponent<OptionPropsType>



/***************************
 *  Main Component
 */
const Option:OptionComponentType = ({id, questionID, name, description, selected, toggleOption, price}) => {

    const handleClick = () => {
        toggleOption(id, questionID);

    };

    return (
        <div className={`${styles.wrapper} ${selected? styles.selected : ''}`}
            onClick={handleClick}
            >
            <h3 className={styles.name}>{name}</h3>
            <div className={styles.description}>{price? '$' + price + " per shipment. " + description: description}</div>
        </div>
    )
}

export default Option;