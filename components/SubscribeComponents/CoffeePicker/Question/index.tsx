import { FunctionComponent } from "react";

import Option from "../Option";

import styles from './Question.module.scss';

import ArrowIcon from '../../../../assets/images/plan/desktop/icon-arrow.svg';

import { QuestionType, OptionType } from "../../../../types";

/***************************
 *  Types
 */
export type QuestionPropsType = {
    status: 'opened' | 'closed' | 'disabled',
    selectedOption: OptionType | null,
    toggleQuestion: (questionID: string) => void,
    toggleOption: (optionID: string, questionID: string) => void,
} & QuestionType;

type QuestionComponentType = FunctionComponent<QuestionPropsType>



/***************************
 *  Main Component
 */
const Question:QuestionComponentType = ({id, prompt, options, status, selectedOption, toggleQuestion, toggleOption}) => {

    return (
        <div className={styles.wrapper} id={id}>
            <div className={`${styles.question} ${styles[status]}`}
                onClick={() => status !== 'disabled'? toggleQuestion(id) : null}
            >
                <h3 className={`${styles.text} ${styles[status]}`}>{prompt}</h3>
                <div className={`${styles.arrow} ${styles[status]}`}>
                    <ArrowIcon />
                </div>
            </div>
            <div className={`${styles.options} ${styles[status]}`}>
                {
                    options.map(opt => (
                        <Option 
                            key={opt.id}
                            id={opt.id}
                            questionID={id}
                            name={opt.name}
                            price={opt.price}
                            selected={opt.name === selectedOption?.name}
                            description={opt.description}
                            toggleOption={toggleOption}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Question;