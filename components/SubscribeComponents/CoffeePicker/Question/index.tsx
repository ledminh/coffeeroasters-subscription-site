import { FunctionComponent } from "react";

import Option, { OptionPropsType } from "../Option";

import styles from './Question.module.scss';

import ArrowIcon from '../../../../assets/images/plan/desktop/icon-arrow.svg';

/***************************
 *  Types
 */
export interface QuestionPropsType {
    question: string,
    options: OptionPropsType[]
} 

type QuestionType = FunctionComponent<QuestionPropsType>



/***************************
 *  Main Component
 */
const Question:QuestionType = ({question, options}) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.question}>
                <h3 className={styles.text}>{question}</h3>
                <div className={styles.arrow}>
                    <ArrowIcon />
                </div>
            </div>
            <div className={styles.options}>
                {
                    options.map(opt => (
                        <Option 
                            key={opt.name}
                            name={opt.name}
                            description={opt.description}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Question;