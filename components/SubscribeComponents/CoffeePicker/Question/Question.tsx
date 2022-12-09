import { FunctionComponent } from "react";

import styles from './Question.module.scss';

/***************************
 *  Types
 */
interface QuestionPropsType {

} 

type QuestionType = FunctionComponent<QuestionPropsType>

const Question:QuestionType = () => {

    return (
        <div className={styles.wrapper}>
            Question component
        </div>
    )
}

export default Question;