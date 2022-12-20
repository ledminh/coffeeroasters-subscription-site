import { FunctionComponent } from "react";
import { navNameType } from "../../../../types";

import styles from './Navigator.module.scss';

/***************************
 *  Types
 */
interface NavigatorPropsType {
    navInfos: {
        navName: navNameType,
        isOptionSelected: boolean,
        status: 'opened' | 'closed' | 'disabled',
        questionID: string
    }[],
    toggleQuestion: (questionID: string) => void
} 

type NavigatorType = FunctionComponent<NavigatorPropsType>



/***************************
 *  Main Component
 */
const Navigator:NavigatorType = ({navInfos, toggleQuestion}) => {

    
    const handleClick = (questionID: string) => {
        toggleQuestion(questionID);

        //scroll to question
        const question = document.getElementById(questionID);
        question?.scrollIntoView({behavior: 'smooth'});

    };

    return (
        <ul className={styles.wrapper}>
            {
                navInfos.map(({navName, status, isOptionSelected, questionID}, index) => {
                    return (
                        <li className={`${styles.li} ${styles[status]}`}
                            key={navName}>
                            <button
                                onClick={() => handleClick(questionID)}
                                >
                                <span className={`${styles.order} ${isOptionSelected? styles.optionSelected : ''}`}>{'0' + (index + 1)}</span>
                                <span className={styles.name}>{navName}</span>
                            </button>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Navigator;