import { FunctionComponent } from "react";
import { navNameType } from "../hooks/reducer";

import styles from './Navigator.module.scss';

/***************************
 *  Types
 */
interface NavigatorPropsType {
    questions: {
        navName: navNameType,
        isOptionSelected: boolean,
        status: 'opened' | 'closed' | 'disabled'
    }[],
    toggleQuestion: (name: navNameType) => void
} 

type NavigatorType = FunctionComponent<NavigatorPropsType>



/***************************
 *  Main Component
 */
const Navigator:NavigatorType = ({questions, toggleQuestion}) => {

    return (
        <ul className={styles.wrapper}>
            {
                questions.map((question, index) => {
                    return (
                        <li className={`${styles.li} ${styles[question.status]}`}
                            key={question.navName}>
                            <button
                                onClick={() => toggleQuestion(question.navName)}
                                >
                                <span className={`${styles.order} ${question.isOptionSelected? styles.optionSelected : ''}`}>{'0' + (index + 1)}</span>
                                <span className={styles.name}>{question.navName}</span>
                            </button>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Navigator;