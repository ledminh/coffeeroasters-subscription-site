import { FunctionComponent } from "react";

import Option, { OptionPropsType } from "../Option";

import styles from './Question.module.scss';

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
            <h3>{question}</h3>
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
    )
}

export default Question;