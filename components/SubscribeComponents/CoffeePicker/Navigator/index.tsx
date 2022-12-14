import { FunctionComponent } from "react";

import styles from './Navigator.module.scss';

/***************************
 *  Types
 */
interface NavigatorPropsType {
    navNames: string[]
} 

type NavigatorType = FunctionComponent<NavigatorPropsType>



/***************************
 *  Main Component
 */
const Navigator:NavigatorType = ({navNames}) => {

    return (
        <ul className={styles.wrapper}>
            {
                navNames.map((name, index) => {
                    return (
                        <li className={styles.li}
                            key={name}>
                            <button>
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