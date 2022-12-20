import { FunctionComponent } from "react";

import styles from './CreateMyPlanButton.module.scss';


import { SummaryType, QuestionDataType } from "../../../../types";

/***************************
 *  Types
 */


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
            'Preferences': questions[0].selectedOption? questions[0].selectedOption.name : null,
            'Bean Type': questions[1].selectedOption? questions[1].selectedOption.name : null,
            'Quantity': questions[2].selectedOption? questions[2].selectedOption.name : null,
            'Grind Option': questions[3].selectedOption? questions[3].selectedOption.name : null,
            'Deliveries': questions[4].selectedOption? questions[4].selectedOption.name : null,
            price: questions[4].selectedOption? questions[4].selectedOption.price? questions[4].selectedOption.price : null : null
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