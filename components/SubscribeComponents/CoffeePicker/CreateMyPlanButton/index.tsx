import { FunctionComponent } from "react";

import styles from './CreateMyPlanButton.module.scss';

import { QuestionDataType } from "../hooks/useData";

/***************************
 *  Types
 */
export type SummaryType = {
    [key: string]: string | null
};

interface CreateMyPlanButtonPropsType {
    onClick: (summary: SummaryType) => void,
    questions: QuestionDataType[],
    disabled: boolean

} 

type CreateMyPlanButtonType = FunctionComponent<CreateMyPlanButtonPropsType>



/***************************
 *  Main Component
 */
const CreateMyPlanButton:CreateMyPlanButtonType = ({onClick, questions, disabled}) => {

    const handleClick = () => {
        onClick({
            'Preferences': questions[0].selectedOption,
            'Bean Type': questions[1].selectedOption,
            'Quantity': questions[2].selectedOption,
            'Grind Option': questions[3].selectedOption,
            'Delivery': questions[4].selectedOption,
        });
    };

    return (
        <button className={styles.wrapper}
            onClick={() => disabled? null : handleClick()}

            disabled={disabled}
        >
            Create My Plan
        </button>
    )
}

export default CreateMyPlanButton;