import { FunctionComponent } from "react";

import styles from './Navigator.module.scss';

/***************************
 *  Types
 */
interface NavigatorPropsType {
    navNames: string[],
    toggleQuestion: (name: string) => void
} 

type NavigatorType = FunctionComponent<NavigatorPropsType>



/***************************
 *  Main Component
 */
const Navigator:NavigatorType = ({navNames, toggleQuestion}) => {

    return (
        <ul className={styles.wrapper}>
            {
                navNames.map((name, index) => {
                    return (
                        <li className={styles.li}
                            key={name}>
                            <button
                                onClick={() => toggleQuestion(name)}
                                >
                                <span className={styles.order}>{'0' + (index + 1)}</span>
                                <span className={styles.name}>{name}</span>
                            </button>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Navigator;